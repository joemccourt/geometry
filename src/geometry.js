import { plasma } from './color-palettes';

const state = {
    showNotation: true,
    isStatic: false,
    enablePointPoint: false,
    shouldDrawAxes: false,
    objects: [],
    bb: {
        t: -2,
        l: -3,
        w: 6,
        h: 4
    }
};

const toCanvasCoords = (x, y) => {
    const { w, h } = state;
    const scale = Math.min(w, h) / 4;
    return {
        x: x * scale + w / 2,
        y: -y * scale + h / 2
    };
};

const genPoint = (n = 1) => {
    const { bb } = state;
    while (n > 0) {
        state.objects.push({
            type: 'point',
            x: bb.w * Math.random() + bb.l,
            y: bb.h * Math.random() + bb.t,
            vx: 0.25 * (2 * Math.random() - 1),
            vy: 0.25 * (2 * Math.random() - 1)
        });
        n--;
    }
};

const genLine = (n = 1, vAmp = 1) => {
    while (n > 0) {
        const x1 = vAmp * (2 * Math.random() - 1);
        const y1 = vAmp * (2 * Math.random() - 1);
        const r = 1;//0.8 * Math.random() + 0.5;
        const angle = 2 * Math.PI * Math.random() * 3;
        state.objects.push({
            type: 'line',
            x1,
            y1,
            x2: x1 + r * Math.cos(angle),
            y2: y1 + r * Math.sin(angle),
            vx: vAmp * (2 * Math.random() - 1),
            vy: vAmp * (2 * Math.random() - 1),
            theta: 2 * Math.random() - 1
        });
        n--;
    }
};

const genTri = (n = 1) => {
    while (n > 0) {
        const ax = (2 * Math.random() - 1);
        const ay = (2 * Math.random() - 1);
        const bx = (2 * Math.random() - 1);
        const by = (2 * Math.random() - 1);
        const cx = (2 * Math.random() - 1);
        const cy = (2 * Math.random() - 1);
        state.objects.push({
            type: 'tri',
            ax,
            ay,
            bx,
            by,
            cx,
            cy,
            vx: (2 * Math.random() - 1),
            vy: (2 * Math.random() - 1),
            theta: 2 * Math.random() - 1
        });
        n--;
    }
};
const genAABB = (n = 1) => {
    while (n > 0) {
        const dx = Math.random() + 0.1;
        const dy = Math.random() + 0.1;
        const cx = 2 * Math.random() - 1;
        const cy = 2 * Math.random() - 1;

        state.objects.push({
            type: 'aabb',
            dx,
            dy,
            cx,
            cy
        });
        n--;
    }
}
const genOBB = (n = 1) => {
    while (n > 0) {
        const dx = Math.random() + 0.1;
        const dy = Math.random() + 0.1;
        const cx = 0.5 * (2 * Math.random() - 1);
        const cy = 0.5 * (2 * Math.random() - 1);
        const theta = Math.random() * 2 * Math.PI;
        const u1x = Math.cos(theta);
        const u1y = Math.sin(theta);
        const u2x = Math.cos(theta + Math.PI / 2);
        const u2y = Math.sin(theta + Math.PI / 2);

        state.objects.push({
            type: 'obb',
            cx,
            cy,
            dx,
            dy,
            u1x,
            u1y,
            u2x,
            u2y
        });
        n--;
    }
};

const drawAxes = () => {
    const { ctx, w, h, dpr } = state;

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1 * dpr;

    const origin = toCanvasCoords(0, 0);

    // x axis
    ctx.beginPath();
    for (let x = -5; x <= 5; x += 1) {
        const coord = toCanvasCoords(x, 0);
        ctx.moveTo(coord.x, coord.y - h);
        ctx.lineTo(coord.x, coord.y + h);
    }
    for (let x = -5; x <= 5; x += 0.25) {
        const coord = toCanvasCoords(x, 0);
        ctx.moveTo(coord.x, coord.y - 3);
        ctx.lineTo(coord.x, coord.y + 3);
    }
    ctx.moveTo(origin.x - w, origin.y);
    ctx.lineTo(origin.x + w, origin.y);
    ctx.stroke();

    ctx.fillStyle = '#000';
    ctx.fillText('x', w - 10, origin.y + 10);

    // y axis
    ctx.beginPath();
    for (let y = -5; y <= 5; y += 1) {
        const coord = toCanvasCoords(0, y);
        ctx.moveTo(coord.x - w, coord.y);
        ctx.lineTo(coord.x + w, coord.y);
    }
    for (let y = -5; y <= 5; y += 0.25) {
        const coord = toCanvasCoords(0, y);
        ctx.moveTo(coord.x - 3, coord.y);
        ctx.lineTo(coord.x + 3, coord.y);
    }
    ctx.moveTo(origin.x, origin.y - h);
    ctx.lineTo(origin.x, origin.y + h);
    ctx.stroke();

    ctx.fillStyle = '#000';
    ctx.fillText('y', origin.x + 5, 10);
};

const pointAABB = (point, aabb) => {
    let cost = 0;

    const { dx, dy, cx, cy } = aabb;
    const x = Math.min(Math.max(point.x, cx - dx), cx + dx);
    const y = Math.min(Math.max(point.y, cy - dy), cy + dy);

    return { points: [point , { x, y }], cost};
};

const pointOBB = (point, obb) => {
    let cost = 0;

    const { dx, dy, cx, cy, u1x, u1y, u2x, u2y } = obb;

    // relative to center
    const px = point.x - cx;
    const py = point.y - cy;

    // oriented axis distances (p - c) * u1, (p - c) * u2
    let dist1 = px * u1x + py * u1y;
    let dist2 = px * u2x + py * u2y;

    // clamp in oriented space
    dist1 = Math.min(Math.max(dist1, -dx), dx);
    dist2 = Math.min(Math.max(dist2, -dy), dy);

    // c + dist1 * u1 + dist2 * u2
    const x = cx + dist1 * u1x + dist2 * u2x;
    const y = cy + dist1 * u1y + dist2 * u2y;
    
    return { points: [point, { x , y }], cost };
};


// example code
// // line vector (p2 - p1)
// const ldx = line.x2 - line.x1;
// const ldy = line.y2 - line.y1;

// // project point onto line
// const dotProduct = (point.x - line.x1) * ldx + (point.y - line.y1) * ldy;

// // if proj non positive p1 is closest
// if (dotProduct <= 0) {
//     return { x: line.x1, y: line.y1 }
// }

// // if proj is longer than line then p2 is closest
// const lineSquared = (ldx * ldx + ldy * ldy);
// if (dotProduct >= lineSquared) {
//     return { x: line.x2, y: line.y2 };
// }

// // fraction dist along line
// let t = dotProduct / lineSquared;

// // proj = p1 + t * (p2 - p1)
// const projX = line.x1 + t * ldx;
// const projY = line.y1 + t * ldy;
// return { x: projX, y: projY };

const pointLine = (point, line) => {
    let cost = 0;
    const ldx = line.x2 - line.x1;
    const ldy = line.y2 - line.y1;
    cost += 5;

    // project point onto line
    const dotProduct = (point.x - line.x1) * ldx + (point.y - line.y1) * ldy;
    cost += 10;

    if (dotProduct <= 0) {
        return { points: [point, {x: line.x1, y: line.y1}], cost};
    }

    const lineSquared = (ldx * ldx + ldy * ldy);
    cost += 15;
    if (dotProduct >= lineSquared) {
        return { points: [point, {x: line.x2, y: line.y2}], cost };
    }

    // fraction dist along line
    let t = dotProduct / lineSquared;

    // position
    const projX = line.x1 + t * ldx;
    const projY = line.y1 + t * ldy;
    cost += 45;

    return { points: [point , { x: projX, y: projY }], cost};
};

const pointTri = (point, tri) => {
    const { ax, ay, bx, by, cx, cy } = tri;
    let cost = 0;

    // vectors
    const abx = bx - ax;
    const aby = by - ay;
    const acx = cx - ax;
    const acy = cy - ay;
    const apx = point.x - ax;
    const apy = point.y - ay;

    // ab and ap projections
    const d1 = abx * apx + aby * apy;
    const d2 = acx * apx + acy * apy;
    cost += 10;
    if (d1 <= 0 && d2 <= 0) {
        // region outside A
        return { points: [point, {x: ax, y: ay}], cost };
    }

    const bpx = point.x - bx;
    const bpy = point.y - by;
    const d3 = abx * bpx + aby * bpy;
    const d4 = acx * bpx + acy * bpy;
    cost += 10;
    if (d3 >= 0 && d4 <= d3) {
        // region outside B
        return { points: [point, {x: bx, y: by}], cost };
    }

    // edge region AB
    const vc = d1 * d4 - d3 * d2;
    cost += 5;
    if (vc <= 0 && d1 >= 0 && d3 <= 0) {
        const v = d1 / (d1 - d3);
        cost += 15;
        return { points: [point, {x: ax + v * abx, y: ay + v * aby}], cost };
    }

    const cpx = point.x - cx;
    const cpy = point.y - cy;
    const d5 = abx * cpx + aby * cpy;
    const d6 = acx * cpx + acy * cpy;
    cost += 10;
    if (d6 >= 0 && d5 <= d6) {
        // C region
        return { points: [point, {x: cx, y: cy}], cost };
    }

    // edge region AC
    const vb = d5 * d2 - d1 * d6;
    cost += 5;
    if (vb <= 0 && d2 >= 0 && d6 <= 0) {
        const w = d2 / (d2 - d6);
        cost += 15;
        return { points: [point, {x: ax + w * acx, y: ay + w * acy}], cost };
    }

    // edge region BC
    const va = d3 * d6 - d5 * d4;
    cost += 10;
    if (va <= 0 && (d4 - d3) >= 0 && (d5 - d6) >= 0) {
        const w = (d4 - d3) / ((d4 - d3) + (d5 - d6));
        cost += 20;
        return { points: [point, {x: bx + w * (cx - bx), y: by + w * (cy - by)}], cost };
    }

    // inside triangle
    const denom = 1 / (va + vb + vc);
    const v = vb * denom;
    const w = vc * denom;
    cost += 30;

    return { points: [point, {x: ax + abx * v + acx * w, y: ay + aby * v + acy * w}], cost}
};

const costToColor = (cost) => {
    const n = plasma.length - 1;
    const index = Math.min(Math.floor(cost / 100 * n), n);
    const rgbNorm = plasma[index];
    return `rgb(${rgbNorm[0] * 255 | 0},${rgbNorm[1] * 255 | 0},${rgbNorm[2] * 255 | 0})`;
};

const drawObjects = () => {
    const { objects, ctx, dpr } = state;
    ctx.font = `${18*dpr}px Helvetica`;
    // points
    ctx.fillStyle = 'rgb(0, 150, 40)';
    ctx.beginPath();
    objects.filter(o => o.type === 'point').forEach(point => {
        const pointCenter = toCanvasCoords(point.x, point.y);
        ctx.moveTo(pointCenter.x, pointCenter.y);
        ctx.arc(pointCenter.x, pointCenter.y, 5 * dpr, 0, 2 * Math.PI);
        if (state.showNotation) {
            ctx.fillText('P', pointCenter.x + 5, pointCenter.y - 10);
        }
    });
    ctx.fill();

    // lines
    ctx.lineWidth = 2.2 * dpr;
    ctx.strokeStyle = 'rgb(50, 220, 40)';
    ctx.fillStyle = 'rgb(50, 220, 40)';
    ctx.beginPath();
    objects.filter(o => o.type === 'line').forEach(line => {
        const { x1, y1, x2, y2 } = line;
        const p1 = toCanvasCoords(x1, y1);
        const p2 = toCanvasCoords(x2, y2);
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        if (state.showNotation) {
            ctx.fillText('A', p1.x + 3, p1.y + 20);
            ctx.fillText('B', p2.x + 3, p2.y + 20);
        }
    });
    ctx.stroke();

    // triangles
    ctx.lineWidth = 1.2 * dpr;
    ctx.strokeStyle = 'rgb(50, 220, 240)';
    ctx.fillStyle = 'rgb(50, 220, 240)';
    ctx.beginPath();
    objects.filter(o => o.type === 'tri').forEach(line => {
        const { ax, ay, bx, by, cx, cy } = line;
        const p1 = toCanvasCoords(ax, ay);
        const p2 = toCanvasCoords(bx, by);
        const p3 = toCanvasCoords(cx, cy);
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(p3.x, p3.y);
        ctx.closePath();

        if (state.showNotation) {
            ctx.fillText('A', p1.x + 3, p1.y + 20);
            ctx.fillText('B', p2.x + 3, p2.y + 20);
            ctx.fillText('C', p3.x + 3, p3.y + 20);
        }
    });
    ctx.stroke();

    // aabb
    ctx.lineWidth = 1.2 * dpr;
    ctx.strokeStyle = 'rgb(50, 20, 140)';
    ctx.fillStyle = 'black';
    objects.filter(o => o.type === 'aabb').forEach(aabb => {
        const { dx, dy, cx, cy } = aabb;
        const p1 = toCanvasCoords(cx - dx, cy - dy);
        const p2 = toCanvasCoords(cx + dx, cy - dy);
        const p3 = toCanvasCoords(cx + dx, cy + dy);
        const p4 = toCanvasCoords(cx - dx, cy + dy);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(p3.x, p3.y);
        ctx.lineTo(p4.x, p4.y);
        ctx.closePath();
        ctx.stroke();

        if (state.showNotation) {
            const c = toCanvasCoords(cx, cy);
            ctx.beginPath();
            ctx.moveTo(c.x, c.y);
            ctx.arc(c.x, c.y, 3 * dpr, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillText('C', c.x + 5, c.y + 20);
        }
    });

    // obb
    ctx.lineWidth = 1.2 * dpr;
    ctx.strokeStyle = 'rgb(150, 180, 40)';
    objects.filter(o => o.type === 'obb').forEach(line => {
        const { dx, dy, cx, cy, u1x, u1y, u2x, u2y } = line;
        const p1 = toCanvasCoords(cx + dx * u1x + dy * u2x, cy + dx * u1y + dy * u2y);
        const p2 = toCanvasCoords(cx - dx * u1x + dy * u2x, cy - dx * u1y + dy * u2y);
        const p3 = toCanvasCoords(cx - dx * u1x - dy * u2x, cy - dx * u1y - dy * u2y);
        const p4 = toCanvasCoords(cx + dx * u1x - dy * u2x, cy + dx * u1y - dy * u2y);

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(p3.x, p3.y);
        ctx.lineTo(p4.x, p4.y);
        ctx.closePath();
        ctx.stroke();

        if (state.showNotation) {
            const c = toCanvasCoords(cx, cy);
            ctx.beginPath();
            ctx.moveTo(c.x, c.y);
            ctx.arc(c.x, c.y, 3 * dpr, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillText('C', c.x + 5, c.y + 20);
        }
    });
};

const getObjectPairMinPoints = (obj1, obj2) => {
    // point point
    if (state.enablePointPoint && obj1.type === 'point' && obj2.type === 'point') {
        // const dist = Math.sqrt((obj1.x - obj2.x)**2 + (obj1.y - obj2.y)**2);
        const points = [{ x: obj1.x, y: obj1.y }, {x: obj2.x, y: obj2.y}];
        return { points, cost: 4 };
    }

    // point AABB
    if (obj1.type === 'point' && obj2.type === 'aabb') {
        const point = obj1.type === 'point' ? obj1 : obj2;
        const aabb = obj1.type === 'aabb' ? obj1 : obj2;
        return pointAABB(point, aabb);
    }

    // point OBB
    if (obj1.type === 'point' && obj2.type === 'obb') {
        const point = obj1.type === 'point' ? obj1 : obj2;
        const obb = obj1.type === 'obb' ? obj1 : obj2;
        return pointOBB(point, obb);
    }

    // point line
    if (obj1.type === 'point' && obj2.type === 'line') {
        const point = obj1.type === 'point' ? obj1 : obj2;
        const line = obj1.type === 'line' ? obj1 : obj2;
        return pointLine(point, line);
    }

    // point tri
    if (obj1.type === 'point' && obj2.type === 'tri') {
        const point = obj1.type === 'point' ? obj1 : obj2;
        const tri = obj1.type === 'tri' ? obj1 : obj2;
        return pointTri(point, tri);
    }

    return { dist: undefined, points: undefined };
}

const drawMinDist = () => {
    const { objects, ctx, dpr } = state;

    // const objectPairs = [];
    // for (let p1 = 0; p1 < objects.length - 1; p1++) {
    //     for (let p2 = p1 + 1; p2 < objects.length; p2++) {
    //         objectPairs.push([p1, p2]);
    //     }
    // }

    objects.forEach((o, i) => {
        const { x, y } = o;
        // find closest
        let closestPoints, closestDist, closestCost;
        objects.forEach((oTest, j) => {
            if (j === i) { return; }
            const { points, cost } = getObjectPairMinPoints(o, oTest);
            if (!points) { return; }
            const dist = (points[0].x - points[1].x)**2 + (points[0].y - points[1].y)**2;
            if (closestPoints === undefined || dist < closestDist) {
                closestPoints = points;
                closestDist = dist;
                closestCost = cost;
            }
        });

        if (!closestPoints) { return; }
        const coordsP1 = toCanvasCoords(closestPoints[0].x, closestPoints[0].y);
        const coordsP2 = toCanvasCoords(closestPoints[1].x, closestPoints[1].y);
        ctx.strokeStyle = 'black';

        ctx.lineWidth = 0.5 * dpr;
        ctx.beginPath();
        ctx.setLineDash([4, 8]);
        ctx.moveTo(coordsP1.x, coordsP1.y);
        ctx.lineTo(coordsP2.x, coordsP2.y);
        ctx.stroke();
        ctx.setLineDash([]);
        
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.arc(coordsP2.x, coordsP2.y, 2 * dpr, 0, 2 * Math.PI);
        ctx.fill();
        if (state.showNotation) {
            ctx.fillText('R', coordsP2.x + 5, coordsP2.y - 5);
        }

        ctx.beginPath();
        ctx.fillStyle = costToColor(closestCost);
        ctx.arc(coordsP1.x, coordsP1.y, 6 * dpr, 0, 2 * Math.PI);
        ctx.fill();
    })
};

const updateState = (t, dt) => {
    const { objects, bb } = state;

    objects.filter(o => o.type === 'point').forEach(o => {
        if (!Number.isFinite(o.vx)) {
            o.vx = 0;
        }
        if (!Number.isFinite(o.vy)) {
            o.vy = 0;
        }

        let dx = o.vx * dt;
        let dy = o.vy * dt;
        if (o.x + dx < bb.l || o.x + dx > bb.l + bb.w) {
            o.vx *= -1;
            o.x = o.x - dx;
        } else {
            o.x += dx;
        }
        if (o.y + dy < bb.t || o.y + dy > bb.t + bb.h) {
            o.vy *= -1;
            o.y = o.y - dy;
        } else {
            o.y += dy;
        }
    });

    objects.filter(o => o.type === 'line').forEach(o => {
        let dx = o.vx * dt;
        let dy = o.vy * dt;
        const dTheta = o.theta * dt;
        const cx = (o.x1 + o.x2) / 2;
        const cy = (o.y1 + o.y2) / 2;
        const angle = Math.atan2(o.y2 - o.y1, o.x2 - o.x1);
        const r = Math.sqrt((o.x1 - cx)**2 + (o.y1 - cy)**2);
        o.x1 = cx + r * Math.cos(angle + dTheta);
        o.x2 = cx - r * Math.cos(angle + dTheta);
        o.y1 = cy + r * Math.sin(angle + dTheta);
        o.y2 = cy - r * Math.sin(angle + dTheta);

        if (cx + dx < bb.l || cx + dx > bb.l + bb.w) {
            o.vx *= -1;
            o.x1 = o.x1 - dx;
            o.x2 = o.x2 - dx;
        } else {
            o.x1 += dx;
            o.x2 += dx;
        }
        if (cy + dy < bb.t || cy + dy > bb.t + bb.h) {
            o.vy *= -1;
            o.y1 = o.y1 - dy;
            o.y2 = o.y2 - dy;
        } else {
            o.y1 += dy;
            o.y2 += dy;
        }
    });


    objects.filter(o => o.type === 'tri').forEach(o => {
        const { ax, ay, bx, by, cx, cy, theta } = o;
        const dTheta = theta * dt;
        const mx = (ax + bx + cx) / 3;
        const my = (ay + by + cy) / 3;

        o.ax = mx + (ax - mx) * Math.cos(dTheta) - (ay - my) * Math.sin(dTheta);
        o.ay = my + (ax - mx) * Math.sin(dTheta) + (ay - my) * Math.cos(dTheta);
        o.bx = mx + (bx - mx) * Math.cos(dTheta) - (by - my) * Math.sin(dTheta);
        o.by = my + (bx - mx) * Math.sin(dTheta) + (by - my) * Math.cos(dTheta);
        o.cx = mx + (cx - mx) * Math.cos(dTheta) - (cy - my) * Math.sin(dTheta);
        o.cy = my + (cx - mx) * Math.sin(dTheta) + (cy - my) * Math.cos(dTheta);
    });
};

const drawState = () => {
    state.ctx.clearRect(0, 0, state.w, state.h);
    if (state.shouldDrawAxes) {
        drawAxes();	
    }
    drawObjects();
    drawMinDist();
}

const startDemoLoop = () => {
    requestAnimationFrame(demoLoop);
};

const demoLoop = () => {
    const now = performance.now();
    const dt = now - state.lastLoopTime;
    const t = now - state.timeStart;

    if (!state.isStatic) {
        updateState(t, Math.min(1, dt / 1000));
    }
    drawState();

    state.lastLoopTime = now;
    requestAnimationFrame(demoLoop);
};

const init = () => {
    const el = document.getElementById('demo');
    const ctx = el.getContext('2d');
    state.ctx = ctx;

    // const { clientWidth: w, clientHeight: h } = el;


    // Setting canvas size properly
    const windowW = window.innerWidth;
    const windowH = window.innerHeight;

    const dpr = window.devicePixelRatio;

    el.style.width = `${windowW}px`;
    el.style.height = `${windowH}px`;

    const w = windowW * dpr;
    const h = windowH * dpr;
    state.w = w;
    state.h = h;

    el.width = w;
    el.height = h;

    state.dpr = dpr;
    ctx.scale(1 / dpr, 1 / dpr);

    el.width = w;
    el.height = h;

    state.timeStart = performance.now();
    state.lastLoopTime = state.timeStart;
    startDemoLoop();
};

const setConfig = (config) => {
	const { showNotation, isStatic, enablePointPoint } = config;

	state.showNotation = showNotation;
	state.isStatic = isStatic;
	state.enablePointPoint = enablePointPoint;

	const { numPoints, numTriangles, numAABBs, numOBBs, numLines } = config;


	// clear objects
	state.objects = [];

    // object creation
    genPoint(numPoints);
    genAABB(numAABBs);
    genOBB(numOBBs);
    genLine(numLines, 0.2);
    genTri(numTriangles);

    state.shouldDrawAxes = config.shouldDrawAxes;

};

export { init, setConfig };
