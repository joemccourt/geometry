import { plasma } from './color-palettes';

export const costToColor = (cost) => {
    const n = plasma.length - 1;
    const index = Math.min(Math.floor((cost ?? 0) / 100 * n), n);
    const rgbNorm = plasma[index];
    return `rgb(${rgbNorm[0] * 255 | 0},${rgbNorm[1] * 255 | 0},${rgbNorm[2] * 255 | 0})`;
};


export const drawObjects = (state, toCanvasCoords) => {
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
    objects.filter(o => o.type === 'obb').forEach(obb => {
        const { dx, dy, cx, cy, u1x, u1y, u2x, u2y } = obb;
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

export const drawAxes = (state, toCanvasCoords) => {
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
