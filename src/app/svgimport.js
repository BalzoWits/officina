// Importazione SVG come schizzo: tracciati, rettangoli, cerchi, ellissi, linee e poligoni.
// Le curve di Bézier diventano archi (scarto massimo TOL mm), così lo schizzo resta leggero e modificabile.
const TOL = 0.02;
const UNIT_MM = { mm: 1, cm: 10, in: 25.4, pt: 25.4 / 72, pc: 25.4 / 6, px: 25.4 / 96, '': 25.4 / 96 };

/** Legge il file e restituisce i contorni in mm (y verso l'alto) con le misure d'ingombro. */
export function readSvg(text) {
  const doc = new DOMParser().parseFromString(text, 'image/svg+xml');
  const root = doc.documentElement;
  if (!root || root.nodeName.toLowerCase() !== 'svg' || doc.querySelector('parsererror')) throw new Error('Il file non è un SVG valido');
  // millimetri per unità utente, dalle misure dichiarate del disegno
  const vb = (root.getAttribute('viewBox') || '').trim().split(/[\s,]+/).map(Number);
  const len = (s) => { const m = /^\s*([\d.eE+-]+)\s*([a-z%]*)\s*$/.exec(s || ''); return m ? { v: +m[1], u: m[2] } : null; };
  const W = len(root.getAttribute('width'));
  let mmPerUnit = UNIT_MM.px;
  if (W && W.u !== '%' && UNIT_MM[W.u] != null) mmPerUnit = vb.length === 4 && vb[2] > 0 ? (W.v * UNIT_MM[W.u]) / vb[2] : UNIT_MM[W.u];

  // copia nascosta nella pagina per leggere le trasformazioni con getCTM (senza viewBox: unità utente pure)
  const host = document.createElement('div');
  host.style.cssText = 'position:absolute;left:-10000px;top:0;width:1px;height:1px;overflow:hidden;visibility:hidden';
  const svg = document.importNode(root, true);
  svg.removeAttribute('viewBox'); svg.setAttribute('width', '1000'); svg.setAttribute('height', '1000');
  host.appendChild(svg);
  document.body.appendChild(host);
  const loops = []; // { segs: [...], closed }
  const circles = [];
  let skipped = 0;
  try {
    for (const el of svg.querySelectorAll('path,rect,circle,ellipse,line,polyline,polygon')) {
      if (el.closest('defs,clipPath,mask,symbol,marker,pattern')) continue;
      const st = getComputedStyle(el);
      if (st.display === 'none') continue;
      const m = el.getCTM();
      if (!m) { skipped++; continue; }
      const T = (p) => [(m.a * p[0] + m.c * p[1] + m.e) * mmPerUnit, -(m.b * p[0] + m.d * p[1] + m.f) * mmPerUnit];
      const sim = Math.abs(m.a - m.d) < 1e-9 && Math.abs(m.b + m.c) < 1e-9; // solo rotazione + scala uniforme
      const scale = Math.hypot(m.a, m.b) * mmPerUnit;
      const num = (a) => parseFloat(el.getAttribute(a)) || 0;
      const tag = el.nodeName.toLowerCase();
      if (tag === 'circle' && sim) { circles.push({ c: T([num('cx'), num('cy')]), r: num('r') * scale }); continue; }
      let d = '';
      if (tag === 'path') d = el.getAttribute('d') || '';
      else if (tag === 'rect') d = rectPath(num('x'), num('y'), num('width'), num('height'), el.getAttribute('rx'), el.getAttribute('ry'));
      else if (tag === 'circle') d = ellipsePath(num('cx'), num('cy'), num('r'), num('r'));
      else if (tag === 'ellipse') d = ellipsePath(num('cx'), num('cy'), num('rx'), num('ry'));
      else if (tag === 'line') d = `M${num('x1')} ${num('y1')}L${num('x2')} ${num('y2')}`;
      else {
        const pts = (el.getAttribute('points') || '').trim().split(/[\s,]+/).map(Number);
        if (pts.length >= 4) d = 'M' + pts.join(' ') + (tag === 'polygon' ? 'Z' : '');
      }
      for (const sub of parsePath(d)) {
        const segs = sub.segs.map((s) => (s.k === 'L' ? { k: 'L', a: T(s.a), b: T(s.b) } : { k: 'C', p: s.p.map(T) }));
        if (segs.length) loops.push({ segs, closed: sub.closed });
      }
    }
  } finally { host.remove(); }
  if (svg.querySelector('text')) skipped++;
  // ingombro
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const ext = (p) => { x0 = Math.min(x0, p[0]); x1 = Math.max(x1, p[0]); y0 = Math.min(y0, p[1]); y1 = Math.max(y1, p[1]); };
  for (const l of loops) for (const s of l.segs) (s.k === 'L' ? [s.a, s.b] : s.p).forEach(ext);
  for (const c of circles) { ext([c.c[0] - c.r, c.c[1] - c.r]); ext([c.c[0] + c.r, c.c[1] + c.r]); }
  if (!Number.isFinite(x0)) throw new Error('Nell\'SVG non ci sono forme da importare (i testi vanno convertiti in tracciati)');
  return { loops, circles, box: { x0, y0, x1, y1, w: x1 - x0, h: y1 - y0 }, skipped };
}

/**
 * Converte in geometria di schizzo. opts: { scale, anchor: 'center'|'corner', fixed }
 * Ritorna { geo, stats }
 */
export function svgToSketch(data, opts = {}) {
  const s = opts.scale || 1;
  const { box } = data;
  const ox = opts.anchor === 'corner' ? box.x0 : (box.x0 + box.x1) / 2;
  const oy = opts.anchor === 'corner' ? box.y0 : (box.y0 + box.y1) / 2;
  const tr = (p) => [(p[0] - ox) * s, (p[1] - oy) * s];
  const geo = [];
  let seq = 0;
  const id = (k) => `${k}${++seq + 100000}`;
  const fixed = opts.fixed !== false;
  const pt = (p) => { const i = id('p'); geo.push({ id: i, type: 'point', x: p[0], y: p[1], fixed }); return i; };
  let nLines = 0, nArcs = 0, nCircles = 0;
  for (const c of data.circles) {
    const k = pt(tr(c.c));
    geo.push({ id: id('k'), type: 'circle', c_id: k, radius: c.r * s });
    nCircles++;
  }
  for (const loop of data.loops) {
    // elenco di pezzi elementari (linee e archi) in mm
    const parts = [];
    for (const sg of loop.segs) {
      if (sg.k === 'L') { const a = tr(sg.a), b = tr(sg.b); if (dist(a, b) > 1e-6) parts.push({ k: 'L', a, b }); }
      else fitCubic(sg.p.map(tr), parts, 0);
    }
    if (!parts.length) continue;
    // un percorso chiuso da una sola curva (es. cerchio da ellisse): resta a pezzi, va bene
    const closed = loop.closed || dist(parts[0].a, parts[parts.length - 1].b) < 1e-6;
    if (closed && dist(parts[0].a, parts[parts.length - 1].b) > 1e-6) parts.push({ k: 'L', a: parts[parts.length - 1].b, b: parts[0].a });
    const first = pt(parts[0].a);
    let prev = first;
    parts.forEach((q, i) => {
      const last = i === parts.length - 1;
      const end = last && closed ? first : pt(q.b);
      if (q.k === 'L') { geo.push({ id: id('l'), type: 'line', p1_id: prev, p2_id: end }); nLines++; }
      else {
        const c = pt(q.c);
        const ccw = cross(sub(q.m, q.a), sub(q.b, q.m)) > 0;
        const [st, en, P1, P2] = ccw ? [prev, end, q.a, q.b] : [end, prev, q.b, q.a];
        geo.push({ id: id('a'), type: 'arc', c_id: c, radius: q.r, start_id: st, end_id: en, start_angle: Math.atan2(P1[1] - q.c[1], P1[0] - q.c[0]), end_angle: Math.atan2(P2[1] - q.c[1], P2[0] - q.c[0]) });
        nArcs++;
      }
      prev = end;
    });
  }
  return { geo, stats: { lines: nLines, arcs: nArcs, circles: nCircles } };
}

// ---------- tracciati ----------
function rectPath(x, y, w, h, rxa, rya) {
  let rx = parseFloat(rxa), ry = parseFloat(rya);
  if (Number.isNaN(rx)) rx = Number.isNaN(ry) ? 0 : ry;
  if (Number.isNaN(ry)) ry = rx;
  rx = Math.min(rx, w / 2); ry = Math.min(ry, h / 2);
  if (!(rx > 0 && ry > 0)) return `M${x} ${y}H${x + w}V${y + h}H${x}Z`;
  return `M${x + rx} ${y}H${x + w - rx}A${rx} ${ry} 0 0 1 ${x + w} ${y + ry}V${y + h - ry}A${rx} ${ry} 0 0 1 ${x + w - rx} ${y + h}H${x + rx}A${rx} ${ry} 0 0 1 ${x} ${y + h - ry}V${y + ry}A${rx} ${ry} 0 0 1 ${x + rx} ${y}Z`;
}
function ellipsePath(cx, cy, rx, ry) {
  return `M${cx + rx} ${cy}A${rx} ${ry} 0 0 1 ${cx} ${cy + ry}A${rx} ${ry} 0 0 1 ${cx - rx} ${cy}A${rx} ${ry} 0 0 1 ${cx} ${cy - ry}A${rx} ${ry} 0 0 1 ${cx + rx} ${cy}Z`;
}

/** Tracciato SVG → sottotracciati di linee (L) e cubiche (C) in coordinate locali. */
export function parsePath(d) {
  const tok = String(d).match(/[MmLlHhVvCcSsQqTtAaZz]|[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g) || [];
  const out = [];
  let i = 0, cmd = '', cur = [0, 0], start = [0, 0], lastC = null, lastQ = null, sp = null;
  const n = () => parseFloat(tok[i++]);
  const isNum = () => i < tok.length && !/^[A-Za-z]$/.test(tok[i]);
  const begin = (p) => { sp = { segs: [], closed: false }; out.push(sp); start = p; cur = p; };
  const line = (p) => { if (!sp) begin(cur); sp.segs.push({ k: 'L', a: cur, b: p }); cur = p; };
  const cubic = (c1, c2, p) => { if (!sp) begin(cur); sp.segs.push({ k: 'C', p: [cur, c1, c2, p] }); cur = p; };
  while (i < tok.length) {
    if (/^[A-Za-z]$/.test(tok[i])) cmd = tok[i++];
    const rel = cmd === cmd.toLowerCase();
    const R = (x, y) => (rel ? [cur[0] + x, cur[1] + y] : [x, y]);
    const C = cmd.toUpperCase();
    if (C === 'Z') {
      if (sp) { if (dist(cur, start) > 1e-9) sp.segs.push({ k: 'L', a: cur, b: start }); sp.closed = true; }
      cur = start; sp = null; lastC = lastQ = null;
      continue;
    }
    if (!isNum()) { i++; continue; }
    if (C === 'M') { begin(R(n(), n())); cmd = rel ? 'l' : 'L'; lastC = lastQ = null; continue; }
    if (C === 'L') { line(R(n(), n())); lastC = lastQ = null; }
    else if (C === 'H') { const x = n(); line([rel ? cur[0] + x : x, cur[1]]); lastC = lastQ = null; }
    else if (C === 'V') { const y = n(); line([cur[0], rel ? cur[1] + y : y]); lastC = lastQ = null; }
    else if (C === 'C') { const c1 = R(n(), n()), c2 = R(n(), n()), p = R(n(), n()); cubic(c1, c2, p); lastC = c2; lastQ = null; }
    else if (C === 'S') { const c1 = lastC ? [2 * cur[0] - lastC[0], 2 * cur[1] - lastC[1]] : cur; const c2 = R(n(), n()), p = R(n(), n()); cubic(c1, c2, p); lastC = c2; lastQ = null; }
    else if (C === 'Q' || C === 'T') {
      const q = C === 'Q' ? R(n(), n()) : (lastQ ? [2 * cur[0] - lastQ[0], 2 * cur[1] - lastQ[1]] : cur);
      const p = R(n(), n());
      const a = cur;
      cubic([a[0] + (2 / 3) * (q[0] - a[0]), a[1] + (2 / 3) * (q[1] - a[1])], [p[0] + (2 / 3) * (q[0] - p[0]), p[1] + (2 / 3) * (q[1] - p[1])], p);
      lastQ = q; lastC = null;
    } else if (C === 'A') {
      const rx = Math.abs(n()), ry = Math.abs(n()), rot = n(), large = n(), sweep = n();
      const p = R(n(), n());
      for (const c of arcToCubics(cur, p, rx, ry, rot, large, sweep)) cubic(c[0], c[1], c[2]);
      if (!rx || !ry) line(p);
      cur = p; lastC = lastQ = null;
    } else i++;
  }
  return out.filter((s) => s.segs.length);
}

/** Arco ellittico SVG → cubiche (al massimo 90° ciascuna). */
function arcToCubics(p0, p1, rx, ry, rotDeg, large, sweep) {
  if (!rx || !ry || dist(p0, p1) < 1e-12) return [];
  const phi = (rotDeg * Math.PI) / 180, cs = Math.cos(phi), sn = Math.sin(phi);
  const dx = (p0[0] - p1[0]) / 2, dy = (p0[1] - p1[1]) / 2;
  const x1 = cs * dx + sn * dy, y1 = -sn * dx + cs * dy;
  const lam = (x1 * x1) / (rx * rx) + (y1 * y1) / (ry * ry);
  if (lam > 1) { rx *= Math.sqrt(lam); ry *= Math.sqrt(lam); }
  const num = rx * rx * ry * ry - rx * rx * y1 * y1 - ry * ry * x1 * x1;
  const den = rx * rx * y1 * y1 + ry * ry * x1 * x1;
  let co = Math.sqrt(Math.max(0, num / den));
  if (large === sweep) co = -co;
  const cxp = (co * rx * y1) / ry, cyp = (-co * ry * x1) / rx;
  const cx = cs * cxp - sn * cyp + (p0[0] + p1[0]) / 2, cy = sn * cxp + cs * cyp + (p0[1] + p1[1]) / 2;
  const ang = (ux, uy, vx, vy) => { const a = Math.atan2(ux * vy - uy * vx, ux * vx + uy * vy); return a; };
  const t1 = ang(1, 0, (x1 - cxp) / rx, (y1 - cyp) / ry);
  let dt = ang((x1 - cxp) / rx, (y1 - cyp) / ry, (-x1 - cxp) / rx, (-y1 - cyp) / ry);
  if (!sweep && dt > 0) dt -= 2 * Math.PI;
  if (sweep && dt < 0) dt += 2 * Math.PI;
  const nSeg = Math.max(1, Math.ceil(Math.abs(dt) / (Math.PI / 2) - 1e-9));
  const step = dt / nSeg;
  const k = (4 / 3) * Math.tan(step / 4);
  const E = (t) => [cx + rx * Math.cos(t) * cs - ry * Math.sin(t) * sn, cy + rx * Math.cos(t) * sn + ry * Math.sin(t) * cs];
  const D = (t) => [-rx * Math.sin(t) * cs - ry * Math.cos(t) * sn, -rx * Math.sin(t) * sn + ry * Math.cos(t) * cs];
  const out = [];
  for (let i = 0; i < nSeg; i++) {
    const a = t1 + i * step, b = a + step;
    const A = E(a), B = E(b), dA = D(a), dB = D(b);
    out.push([[A[0] + k * dA[0], A[1] + k * dA[1]], [B[0] - k * dB[0], B[1] - k * dB[1]], i === nSeg - 1 ? p1 : B]);
  }
  return out;
}

// ---------- Bézier → archi ----------
function bez(p, t) {
  const u = 1 - t;
  const a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, d = t * t * t;
  return [a * p[0][0] + b * p[1][0] + c * p[2][0] + d * p[3][0], a * p[0][1] + b * p[1][1] + c * p[2][1] + d * p[3][1]];
}
function splitBez(p, t) {
  const L = (a, b) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  const ab = L(p[0], p[1]), bc = L(p[1], p[2]), cd = L(p[2], p[3]);
  const abc = L(ab, bc), bcd = L(bc, cd), m = L(abc, bcd);
  return [[p[0], ab, abc, m], [m, bcd, cd, p[3]]];
}
function fitCubic(p, out, depth) {
  const a = p[0], b = p[3];
  const chord = dist(a, b);
  const flat = Math.max(lineDist(p[1], a, b), lineDist(p[2], a, b));
  if (flat <= TOL) { if (chord > 1e-6) out.push({ k: 'L', a, b }); return; }
  const m = bez(p, 0.5);
  const c = circle3(a, m, b);
  if (c && chord > 1e-6) {
    let err = 0;
    for (let i = 1; i < 10; i++) {
      const q = bez(p, i / 10);
      err = Math.max(err, Math.abs(dist(q, c.c) - c.r));
    }
    if (err <= TOL || depth > 14) { out.push({ k: 'A', a, b, m, c: c.c, r: c.r }); return; }
  } else if (depth > 14) { out.push({ k: 'L', a, b }); return; }
  const [l, r] = splitBez(p, 0.5);
  fitCubic(l, out, depth + 1);
  fitCubic(r, out, depth + 1);
}

const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const cross = (a, b) => a[0] * b[1] - a[1] * b[0];
function lineDist(p, a, b) {
  const L = dist(a, b);
  if (L < 1e-12) return dist(p, a);
  return Math.abs(cross(sub(b, a), sub(p, a))) / L;
}
function circle3(a, b, c) {
  const d = 2 * (a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1]));
  if (Math.abs(d) < 1e-12) return null;
  const a2 = a[0] * a[0] + a[1] * a[1], b2 = b[0] * b[0] + b[1] * b[1], c2 = c[0] * c[0] + c[1] * c[1];
  const x = (a2 * (b[1] - c[1]) + b2 * (c[1] - a[1]) + c2 * (a[1] - b[1])) / d;
  const y = (a2 * (c[0] - b[0]) + b2 * (a[0] - c[0]) + c2 * (b[0] - a[0])) / d;
  const r = Math.hypot(a[0] - x, a[1] - y);
  if (r > 1e6) return null;
  return { c: [x, y], r };
}
