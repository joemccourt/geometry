
const showNotation = false;
const isStatic = false;
const enablePointPoint = false;

const plasma = [[0.050383, 0.029803, 0.527975],
                [0.063536, 0.028426, 0.533124],
                [0.075353, 0.027206, 0.538007],
                [0.086222, 0.026125, 0.542658],
                [0.096379, 0.025165, 0.547103],
                [0.105980, 0.024309, 0.551368],
                [0.115124, 0.023556, 0.555468],
                [0.123903, 0.022878, 0.559423],
                [0.132381, 0.022258, 0.563250],
                [0.140603, 0.021687, 0.566959],
                [0.148607, 0.021154, 0.570562],
                [0.156421, 0.020651, 0.574065],
                [0.164070, 0.020171, 0.577478],
                [0.171574, 0.019706, 0.580806],
                [0.178950, 0.019252, 0.584054],
                [0.186213, 0.018803, 0.587228],
                [0.193374, 0.018354, 0.590330],
                [0.200445, 0.017902, 0.593364],
                [0.207435, 0.017442, 0.596333],
                [0.214350, 0.016973, 0.599239],
                [0.221197, 0.016497, 0.602083],
                [0.227983, 0.016007, 0.604867],
                [0.234715, 0.015502, 0.607592],
                [0.241396, 0.014979, 0.610259],
                [0.248032, 0.014439, 0.612868],
                [0.254627, 0.013882, 0.615419],
                [0.261183, 0.013308, 0.617911],
                [0.267703, 0.012716, 0.620346],
                [0.274191, 0.012109, 0.622722],
                [0.280648, 0.011488, 0.625038],
                [0.287076, 0.010855, 0.627295],
                [0.293478, 0.010213, 0.629490],
                [0.299855, 0.009561, 0.631624],
                [0.306210, 0.008902, 0.633694],
                [0.312543, 0.008239, 0.635700],
                [0.318856, 0.007576, 0.637640],
                [0.325150, 0.006915, 0.639512],
                [0.331426, 0.006261, 0.641316],
                [0.337683, 0.005618, 0.643049],
                [0.343925, 0.004991, 0.644710],
                [0.350150, 0.004382, 0.646298],
                [0.356359, 0.003798, 0.647810],
                [0.362553, 0.003243, 0.649245],
                [0.368733, 0.002724, 0.650601],
                [0.374897, 0.002245, 0.651876],
                [0.381047, 0.001814, 0.653068],
                [0.387183, 0.001434, 0.654177],
                [0.393304, 0.001114, 0.655199],
                [0.399411, 0.000859, 0.656133],
                [0.405503, 0.000678, 0.656977],
                [0.411580, 0.000577, 0.657730],
                [0.417642, 0.000564, 0.658390],
                [0.423689, 0.000646, 0.658956],
                [0.429719, 0.000831, 0.659425],
                [0.435734, 0.001127, 0.659797],
                [0.441732, 0.001540, 0.660069],
                [0.447714, 0.002080, 0.660240],
                [0.453677, 0.002755, 0.660310],
                [0.459623, 0.003574, 0.660277],
                [0.465550, 0.004545, 0.660139],
                [0.471457, 0.005678, 0.659897],
                [0.477344, 0.006980, 0.659549],
                [0.483210, 0.008460, 0.659095],
                [0.489055, 0.010127, 0.658534],
                [0.494877, 0.011990, 0.657865],
                [0.500678, 0.014055, 0.657088],
                [0.506454, 0.016333, 0.656202],
                [0.512206, 0.018833, 0.655209],
                [0.517933, 0.021563, 0.654109],
                [0.523633, 0.024532, 0.652901],
                [0.529306, 0.027747, 0.651586],
                [0.534952, 0.031217, 0.650165],
                [0.540570, 0.034950, 0.648640],
                [0.546157, 0.038954, 0.647010],
                [0.551715, 0.043136, 0.645277],
                [0.557243, 0.047331, 0.643443],
                [0.562738, 0.051545, 0.641509],
                [0.568201, 0.055778, 0.639477],
                [0.573632, 0.060028, 0.637349],
                [0.579029, 0.064296, 0.635126],
                [0.584391, 0.068579, 0.632812],
                [0.589719, 0.072878, 0.630408],
                [0.595011, 0.077190, 0.627917],
                [0.600266, 0.081516, 0.625342],
                [0.605485, 0.085854, 0.622686],
                [0.610667, 0.090204, 0.619951],
                [0.615812, 0.094564, 0.617140],
                [0.620919, 0.098934, 0.614257],
                [0.625987, 0.103312, 0.611305],
                [0.631017, 0.107699, 0.608287],
                [0.636008, 0.112092, 0.605205],
                [0.640959, 0.116492, 0.602065],
                [0.645872, 0.120898, 0.598867],
                [0.650746, 0.125309, 0.595617],
                [0.655580, 0.129725, 0.592317],
                [0.660374, 0.134144, 0.588971],
                [0.665129, 0.138566, 0.585582],
                [0.669845, 0.142992, 0.582154],
                [0.674522, 0.147419, 0.578688],
                [0.679160, 0.151848, 0.575189],
                [0.683758, 0.156278, 0.571660],
                [0.688318, 0.160709, 0.568103],
                [0.692840, 0.165141, 0.564522],
                [0.697324, 0.169573, 0.560919],
                [0.701769, 0.174005, 0.557296],
                [0.706178, 0.178437, 0.553657],
                [0.710549, 0.182868, 0.550004],
                [0.714883, 0.187299, 0.546338],
                [0.719181, 0.191729, 0.542663],
                [0.723444, 0.196158, 0.538981],
                [0.727670, 0.200586, 0.535293],
                [0.731862, 0.205013, 0.531601],
                [0.736019, 0.209439, 0.527908],
                [0.740143, 0.213864, 0.524216],
                [0.744232, 0.218288, 0.520524],
                [0.748289, 0.222711, 0.516834],
                [0.752312, 0.227133, 0.513149],
                [0.756304, 0.231555, 0.509468],
                [0.760264, 0.235976, 0.505794],
                [0.764193, 0.240396, 0.502126],
                [0.768090, 0.244817, 0.498465],
                [0.771958, 0.249237, 0.494813],
                [0.775796, 0.253658, 0.491171],
                [0.779604, 0.258078, 0.487539],
                [0.783383, 0.262500, 0.483918],
                [0.787133, 0.266922, 0.480307],
                [0.790855, 0.271345, 0.476706],
                [0.794549, 0.275770, 0.473117],
                [0.798216, 0.280197, 0.469538],
                [0.801855, 0.284626, 0.465971],
                [0.805467, 0.289057, 0.462415],
                [0.809052, 0.293491, 0.458870],
                [0.812612, 0.297928, 0.455338],
                [0.816144, 0.302368, 0.451816],
                [0.819651, 0.306812, 0.448306],
                [0.823132, 0.311261, 0.444806],
                [0.826588, 0.315714, 0.441316],
                [0.830018, 0.320172, 0.437836],
                [0.833422, 0.324635, 0.434366],
                [0.836801, 0.329105, 0.430905],
                [0.840155, 0.333580, 0.427455],
                [0.843484, 0.338062, 0.424013],
                [0.846788, 0.342551, 0.420579],
                [0.850066, 0.347048, 0.417153],
                [0.853319, 0.351553, 0.413734],
                [0.856547, 0.356066, 0.410322],
                [0.859750, 0.360588, 0.406917],
                [0.862927, 0.365119, 0.403519],
                [0.866078, 0.369660, 0.400126],
                [0.869203, 0.374212, 0.396738],
                [0.872303, 0.378774, 0.393355],
                [0.875376, 0.383347, 0.389976],
                [0.878423, 0.387932, 0.386600],
                [0.881443, 0.392529, 0.383229],
                [0.884436, 0.397139, 0.379860],
                [0.887402, 0.401762, 0.376494],
                [0.890340, 0.406398, 0.373130],
                [0.893250, 0.411048, 0.369768],
                [0.896131, 0.415712, 0.366407],
                [0.898984, 0.420392, 0.363047],
                [0.901807, 0.425087, 0.359688],
                [0.904601, 0.429797, 0.356329],
                [0.907365, 0.434524, 0.352970],
                [0.910098, 0.439268, 0.349610],
                [0.912800, 0.444029, 0.346251],
                [0.915471, 0.448807, 0.342890],
                [0.918109, 0.453603, 0.339529],
                [0.920714, 0.458417, 0.336166],
                [0.923287, 0.463251, 0.332801],
                [0.925825, 0.468103, 0.329435],
                [0.928329, 0.472975, 0.326067],
                [0.930798, 0.477867, 0.322697],
                [0.933232, 0.482780, 0.319325],
                [0.935630, 0.487712, 0.315952],
                [0.937990, 0.492667, 0.312575],
                [0.940313, 0.497642, 0.309197],
                [0.942598, 0.502639, 0.305816],
                [0.944844, 0.507658, 0.302433],
                [0.947051, 0.512699, 0.299049],
                [0.949217, 0.517763, 0.295662],
                [0.951344, 0.522850, 0.292275],
                [0.953428, 0.527960, 0.288883],
                [0.955470, 0.533093, 0.285490],
                [0.957469, 0.538250, 0.282096],
                [0.959424, 0.543431, 0.278701],
                [0.961336, 0.548636, 0.275305],
                [0.963203, 0.553865, 0.271909],
                [0.965024, 0.559118, 0.268513],
                [0.966798, 0.564396, 0.265118],
                [0.968526, 0.569700, 0.261721],
                [0.970205, 0.575028, 0.258325],
                [0.971835, 0.580382, 0.254931],
                [0.973416, 0.585761, 0.251540],
                [0.974947, 0.591165, 0.248151],
                [0.976428, 0.596595, 0.244767],
                [0.977856, 0.602051, 0.241387],
                [0.979233, 0.607532, 0.238013],
                [0.980556, 0.613039, 0.234646],
                [0.981826, 0.618572, 0.231287],
                [0.983041, 0.624131, 0.227937],
                [0.984199, 0.629718, 0.224595],
                [0.985301, 0.635330, 0.221265],
                [0.986345, 0.640969, 0.217948],
                [0.987332, 0.646633, 0.214648],
                [0.988260, 0.652325, 0.211364],
                [0.989128, 0.658043, 0.208100],
                [0.989935, 0.663787, 0.204859],
                [0.990681, 0.669558, 0.201642],
                [0.991365, 0.675355, 0.198453],
                [0.991985, 0.681179, 0.195295],
                [0.992541, 0.687030, 0.192170],
                [0.993032, 0.692907, 0.189084],
                [0.993456, 0.698810, 0.186041],
                [0.993814, 0.704741, 0.183043],
                [0.994103, 0.710698, 0.180097],
                [0.994324, 0.716681, 0.177208],
                [0.994474, 0.722691, 0.174381],
                [0.994553, 0.728728, 0.171622],
                [0.994561, 0.734791, 0.168938],
                [0.994495, 0.740880, 0.166335],
                [0.994355, 0.746995, 0.163821],
                [0.994141, 0.753137, 0.161404],
                [0.993851, 0.759304, 0.159092],
                [0.993482, 0.765499, 0.156891],
                [0.993033, 0.771720, 0.154808],
                [0.992505, 0.777967, 0.152855],
                [0.991897, 0.784239, 0.151042],
                [0.991209, 0.790537, 0.149377],
                [0.990439, 0.796859, 0.147870],
                [0.989587, 0.803205, 0.146529],
                [0.988648, 0.809579, 0.145357],
                [0.987621, 0.815978, 0.144363],
                [0.986509, 0.822401, 0.143557],
                [0.985314, 0.828846, 0.142945],
                [0.984031, 0.835315, 0.142528],
                [0.982653, 0.841812, 0.142303],
                [0.981190, 0.848329, 0.142279],
                [0.979644, 0.854866, 0.142453],
                [0.977995, 0.861432, 0.142808],
                [0.976265, 0.868016, 0.143351],
                [0.974443, 0.874622, 0.144061],
                [0.972530, 0.881250, 0.144923],
                [0.970533, 0.887896, 0.145919],
                [0.968443, 0.894564, 0.147014],
                [0.966271, 0.901249, 0.148180],
                [0.964021, 0.907950, 0.149370],
                [0.961681, 0.914672, 0.150520],
                [0.959276, 0.921407, 0.151566],
                [0.956808, 0.928152, 0.152409],
                [0.954287, 0.934908, 0.152921],
                [0.951726, 0.941671, 0.152925],
                [0.949151, 0.948435, 0.152178],
                [0.946602, 0.955190, 0.150328],
                [0.944152, 0.961916, 0.146861],
                [0.941896, 0.968590, 0.140956],
                [0.940015, 0.975158, 0.131326]];


const state = {
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
}
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
    const { ctx, w, h } = state;

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;

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
}

const drawObjects = () => {
    const { objects, ctx } = state;
    ctx.font = '18px Helvetica';
    // points
    ctx.fillStyle = 'rgb(0, 150, 40)';
    ctx.beginPath();
    objects.filter(o => o.type === 'point').forEach(point => {
        const pointCenter = toCanvasCoords(point.x, point.y);
        ctx.moveTo(pointCenter.x, pointCenter.y);
        ctx.arc(pointCenter.x, pointCenter.y, 5, 0, 2 * Math.PI);
        if (showNotation) {
            ctx.fillText('P', pointCenter.x + 5, pointCenter.y - 10);
        }
    });
    ctx.fill();

    // lines
    ctx.lineWidth = 2.2;
    ctx.strokeStyle = 'rgb(50, 220, 40)';
    ctx.fillStyle = 'rgb(50, 220, 40)';
    ctx.beginPath();
    objects.filter(o => o.type === 'line').forEach(line => {
        const { x1, y1, x2, y2 } = line;
        const p1 = toCanvasCoords(x1, y1);
        const p2 = toCanvasCoords(x2, y2);
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        if (showNotation) {
            ctx.fillText('A', p1.x + 3, p1.y + 20);
            ctx.fillText('B', p2.x + 3, p2.y + 20);
        }
    });
    ctx.stroke();

    // triangles
    ctx.lineWidth = 1.2;
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

        if (showNotation) {
            ctx.fillText('A', p1.x + 3, p1.y + 20);
            ctx.fillText('B', p2.x + 3, p2.y + 20);
            ctx.fillText('C', p3.x + 3, p3.y + 20);
        }
    });
    ctx.stroke();

    // aabb
    ctx.lineWidth = 1.2;
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

        if (showNotation) {
            const c = toCanvasCoords(cx, cy);
            ctx.beginPath();
            ctx.moveTo(c.x, c.y);
            ctx.arc(c.x, c.y, 3, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillText('C', c.x + 5, c.y + 20);
        }
    });

    // obb
    ctx.lineWidth = 1.2;
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

        if (showNotation) {
            const c = toCanvasCoords(cx, cy);
            ctx.beginPath();
            ctx.moveTo(c.x, c.y);
            ctx.arc(c.x, c.y, 3, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillText('C', c.x + 5, c.y + 20);
        }
    });
};

const getObjectPairMinPoints = (obj1, obj2) => {
    // point point
    if (enablePointPoint && obj1.type === 'point' && obj2.type === 'point') {
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
    const { objects, ctx } = state;

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

        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.setLineDash([4, 8]);
        ctx.moveTo(coordsP1.x, coordsP1.y);
        ctx.lineTo(coordsP2.x, coordsP2.y);
        ctx.stroke();
        ctx.setLineDash([]);
        
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.arc(coordsP2.x, coordsP2.y, 2, 0, 2 * Math.PI);
        ctx.fill();
        if (showNotation) {
            ctx.fillText('R', coordsP2.x + 5, coordsP2.y - 5);
        }

        ctx.beginPath();
        ctx.fillStyle = costToColor(closestCost);
        ctx.arc(coordsP1.x, coordsP1.y, 6, 0, 2 * Math.PI);
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
    // drawAxes();
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

    if (!isStatic) {
        updateState(t, Math.min(1, dt / 1000));
    }
    drawState();

    state.lastLoopTime = now;
    requestAnimationFrame(demoLoop);
};

const init = () => {
    const el = document.getElementById('demo');
    const { clientWidth: w, clientHeight: h } = el;

    const ctx = el.getContext('2d');
    ctx.fillStyle = '#0f0';
    ctx.fillRect(0, 0, w, h);
    state.ctx = ctx;
    state.w = w;
    state.h = h;

    // object creation
    genPoint(200);
    genAABB(1);
    // genOBB(1);
    // genLine(1, 0.2);
    // genTri(1);

    state.timeStart = performance.now();
    state.lastLoopTime = state.timeStart;
    startDemoLoop();
};

window.onload = init;
