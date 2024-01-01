export const genPoint = (bb, n = 1) => {
    const points = [];
    while (n > 0) {
        points.push({
            type: 'point',
            x: bb.w * Math.random() + bb.l,
            y: bb.h * Math.random() + bb.t,
            vx: 0.25 * (2 * Math.random() - 1),
            vy: 0.25 * (2 * Math.random() - 1)
        });
        n--;
    }
    return points;
};

export const genLine = (n = 1, vAmp = 1) => {
    const lines = [];
    while (n > 0) {
        const x1 = vAmp * (2 * Math.random() - 1);
        const y1 = vAmp * (2 * Math.random() - 1);
        const r = 1;//0.8 * Math.random() + 0.5;
        const angle = 2 * Math.PI * Math.random() * 3;
        lines.push({
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
    return lines;
};

export const genTri = (n = 1) => {
    const triangles = [];
    while (n > 0) {
        const ax = (2 * Math.random() - 1);
        const ay = (2 * Math.random() - 1);
        const bx = (2 * Math.random() - 1);
        const by = (2 * Math.random() - 1);
        const cx = (2 * Math.random() - 1);
        const cy = (2 * Math.random() - 1);
        triangles.push({
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
    return triangles;
};

export const genAABB = (n = 1) => {
    const AABBs = [];
    while (n > 0) {
        const dx = Math.random() + 0.1;
        const dy = Math.random() + 0.1;
        const cx = 2 * Math.random() - 1;
        const cy = 2 * Math.random() - 1;

        AABBs.push({
            type: 'aabb',
            dx,
            dy,
            cx,
            cy
        });
        n--;
    }
    return AABBs;
};

export const genOBB = (n = 1) => {
    const OBBs = [];
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

        OBBs.push({
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
    return OBBs;
};
