// Profili chiusi di uno schizzo: spezza le curve alle intersezioni, ricostruisce
// le facce del grafo planare e restituisce le regioni (contorno + fori) come in un CAD.
// Le coordinate sono 2D nel piano dello schizzo.

const TAU = Math.PI * 2;
const EPS = 1e-7;

const normAng = (a) => { a %= TAU; return a < 0 ? a + TAU : a; };
const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]);

/** Curve "reali" (non di costruzione) dello schizzo, con i punti risolti. */
export function sketchCurves(geo) {
  const byId = new Map(geo.map((g) => [g.id, g]));
  const pt = (id) => { const p = byId.get(id); return [p.x, p.y]; };
  const out = [];
  for (const g of geo) {
    if (g.construction || g.ref) continue;
    if (g.type === 'line') out.push({ src: g.id, kind: 'line', a: pt(g.p1_id), b: pt(g.p2_id) });
    else if (g.type === 'circle') out.push({ src: g.id, kind: 'circle', c: pt(g.c_id), r: g.radius });
    else if (g.type === 'arc') {
      const c = pt(g.c_id);
      const a0 = normAng(g.start_angle);
      let sw = normAng(g.end_angle - g.start_angle);
      if (sw < 1e-9) sw = TAU;
      out.push({ src: g.id, kind: 'arc', c, r: g.radius, a0, sw });
    }
  }
  return out;
}

// --- parametrizzazione: t in [0,1] ---
function at(cv, t) {
  if (cv.kind === 'line') return [cv.a[0] + (cv.b[0] - cv.a[0]) * t, cv.a[1] + (cv.b[1] - cv.a[1]) * t];
  const ang = cv.kind === 'circle' ? TAU * t : cv.a0 + cv.sw * t;
  return [cv.c[0] + cv.r * Math.cos(ang), cv.c[1] + cv.r * Math.sin(ang)];
}
function paramOfAngle(cv, ang) {
  if (cv.kind === 'circle') return normAng(ang) / TAU;
  const d = normAng(ang - cv.a0);
  if (d <= cv.sw + 1e-9) return Math.min(1, d / cv.sw);
  if (TAU - d < 1e-9) return 0;
  return null;
}
function length(cv) {
  if (cv.kind === 'line') return dist(cv.a, cv.b);
  return cv.r * (cv.kind === 'circle' ? TAU : cv.sw);
}

function intersect(c1, c2) {
  const res = []; // [t1, t2]
  if (c1.kind === 'line' && c2.kind === 'line') {
    const d1 = [c1.b[0] - c1.a[0], c1.b[1] - c1.a[1]];
    const d2 = [c2.b[0] - c2.a[0], c2.b[1] - c2.a[1]];
    const den = d1[0] * d2[1] - d1[1] * d2[0];
    const L = Math.max(Math.hypot(...d1), Math.hypot(...d2));
    if (Math.abs(den) < 1e-12 * L * L) return res;
    const w = [c2.a[0] - c1.a[0], c2.a[1] - c1.a[1]];
    const t = (w[0] * d2[1] - w[1] * d2[0]) / den;
    const u = (w[0] * d1[1] - w[1] * d1[0]) / den;
    const e1 = 1e-9 / Math.max(Math.hypot(...d1), 1e-12) * 1e3;
    const e2 = 1e-9 / Math.max(Math.hypot(...d2), 1e-12) * 1e3;
    if (t >= -e1 && t <= 1 + e1 && u >= -e2 && u <= 1 + e2) res.push([clamp01(t), clamp01(u)]);
    return res;
  }
  if (c1.kind === 'line') return intersect(c2, c1).map(([a, b]) => [b, a]);
  if (c2.kind === 'line') {
    // c1 circolare, c2 retta
    const d = [c2.b[0] - c2.a[0], c2.b[1] - c2.a[1]];
    const f = [c2.a[0] - c1.c[0], c2.a[1] - c1.c[1]];
    const A = d[0] * d[0] + d[1] * d[1];
    const B = 2 * (f[0] * d[0] + f[1] * d[1]);
    const C = f[0] * f[0] + f[1] * f[1] - c1.r * c1.r;
    let disc = B * B - 4 * A * C;
    if (A < 1e-18) return res;
    const tolDisc = 1e-9 * A * c1.r;
    if (disc < -tolDisc) return res;
    disc = Math.max(0, disc);
    const sq = Math.sqrt(disc);
    const roots = disc < 1e-18 ? [-B / (2 * A)] : [(-B - sq) / (2 * A), (-B + sq) / (2 * A)];
    const el = 1e-6 / Math.sqrt(A);
    for (const u of roots) {
      if (u < -el || u > 1 + el) continue;
      const p = at(c2, clamp01(u));
      const t = paramOfAngle(c1, Math.atan2(p[1] - c1.c[1], p[0] - c1.c[0]));
      if (t !== null) res.push([t, clamp01(u)]);
    }
    return res;
  }
  // circolare - circolare
  const dx = c2.c[0] - c1.c[0], dy = c2.c[1] - c1.c[1];
  const d = Math.hypot(dx, dy);
  if (d < 1e-9) return res; // concentrici: nessuna intersezione (o coincidenti)
  const tol = 1e-7 * Math.max(c1.r, c2.r, 1);
  if (d > c1.r + c2.r + tol || d < Math.abs(c1.r - c2.r) - tol) return res;
  const a = (c1.r * c1.r - c2.r * c2.r + d * d) / (2 * d);
  const h2 = c1.r * c1.r - a * a;
  const h = h2 > 0 ? Math.sqrt(h2) : 0;
  const mx = c1.c[0] + (a * dx) / d, my = c1.c[1] + (a * dy) / d;
  const pts = h < 1e-9 ? [[mx, my]] : [[mx + (h * -dy) / d, my + (h * dx) / d], [mx - (h * -dy) / d, my - (h * dx) / d]];
  for (const p of pts) {
    const t1 = paramOfAngle(c1, Math.atan2(p[1] - c1.c[1], p[0] - c1.c[0]));
    const t2 = paramOfAngle(c2, Math.atan2(p[1] - c2.c[1], p[0] - c2.c[0]));
    if (t1 !== null && t2 !== null) res.push([t1, t2]);
  }
  return res;
}
const clamp01 = (t) => Math.min(1, Math.max(0, t));

/** Pezzo di curva tra due parametri, come segmento orientabile. */
function piece(cv, t0, t1) {
  if (cv.kind === 'line') return { src: cv.src, kind: 'line', a: at(cv, t0), b: at(cv, t1) };
  const s0 = cv.a0 + cv.sw * t0, s1 = cv.a0 + cv.sw * t1;
  return { src: cv.src, kind: 'arc', c: cv.c, r: cv.r, a0: s0, sw: s1 - s0, a: at(cv, t0), b: at(cv, t1) };
}

function arcPoint(e, f) { const ang = e.a0 + e.sw * f; return [e.c[0] + e.r * Math.cos(ang), e.c[1] + e.r * Math.sin(ang)]; }

/** Punto lungo il semilato a frazione f (0 = inizio del semilato). */
function hePoint(h, f) {
  const e = h.e;
  const g = h.fwd ? f : 1 - f;
  if (e.kind === 'line') return [e.a[0] + (e.b[0] - e.a[0]) * g, e.a[1] + (e.b[1] - e.a[1]) * g];
  return arcPoint(e, g);
}

function polyArea(poly) {
  let s = 0;
  for (let i = 0, n = poly.length; i < n; i++) {
    const p = poly[i], q = poly[(i + 1) % n];
    s += p[0] * q[1] - q[0] * p[1];
  }
  return s / 2;
}
export function pointInPoly(p, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i], b = poly[j];
    if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < ((b[0] - a[0]) * (p[1] - a[1])) / (b[1] - a[1]) + a[0]) inside = !inside;
  }
  return inside;
}
function segDist(p, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const L = dx * dx + dy * dy;
  let t = L ? ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L : 0;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(p[0] - a[0] - t * dx, p[1] - a[1] - t * dy);
}
function polyEdgeDist(p, poly) {
  let m = Infinity;
  for (let i = 0; i < poly.length; i++) m = Math.min(m, segDist(p, poly[i], poly[(i + 1) % poly.length]));
  return m;
}

function sampleHe(h, out) {
  const e = h.e;
  if (e.kind === 'line') { out.push(h.fwd ? e.a : e.b); return; }
  const n = Math.max(2, Math.ceil((Math.abs(e.sw) / TAU) * 96));
  for (let i = 0; i < n; i++) out.push(hePoint(h, i / n));
}

function heSeg(h) {
  const e = h.e;
  if (e.kind === 'line') return h.fwd ? { k: 'line', a: e.a, b: e.b, src: e.src } : { k: 'line', a: e.b, b: e.a, src: e.src };
  return { k: 'arc', a: hePoint(h, 0), b: hePoint(h, 1), m: hePoint(h, 0.5), c: e.c, r: e.r, src: e.src };
}

/**
 * Regioni chiuse dello schizzo.
 * Ritorna [{ key, segs, holes:[segs], poly, holePolys, area, sample }]
 * segs: [{k:'line',a,b} | {k:'arc',a,b,m,c,r} | {k:'circle',c,r}]
 */
export function findRegions(geo) {
  const curves = sketchCurves(geo).filter((c) => length(c) > EPS);
  const n = curves.length;
  const splits = curves.map((c) => (c.kind === 'circle' ? [] : [0, 1]));
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
    for (const [t1, t2] of intersect(curves[i], curves[j])) { splits[i].push(t1); splits[j].push(t2); }
  }
  const edges = [];
  const loops = []; // cerchi interi senza intersezioni
  curves.forEach((cv, i) => {
    let ts = splits[i].map((t) => (cv.kind === 'circle' ? t % 1 : t)).sort((a, b) => a - b);
    ts = ts.filter((t, k) => k === 0 || t - ts[k - 1] > 1e-9);
    if (cv.kind === 'circle') {
      if (ts.length > 1 && 1 - ts[ts.length - 1] + ts[0] < 1e-9) ts.pop();
      if (!ts.length) { loops.push(cv); return; }
      for (let k = 0; k < ts.length; k++) {
        const t0 = ts[k], t1 = k + 1 < ts.length ? ts[k + 1] : ts[0] + 1;
        edges.push({ src: cv.src, kind: 'arc', c: cv.c, r: cv.r, a0: TAU * t0, sw: TAU * (t1 - t0), a: at(cv, t0), b: at(cv, t1 % 1) });
      }
      return;
    }
    for (let k = 0; k + 1 < ts.length; k++) edges.push(piece(cv, ts[k], ts[k + 1]));
  });
  // lunghezza dei pezzi, scarto quelli nulli
  const good = edges.filter((e) => (e.kind === 'line' ? dist(e.a, e.b) : Math.abs(e.sw) * e.r) > 1e-6);

  // vertici unificati
  const verts = [];
  const vid = (p) => {
    for (let i = 0; i < verts.length; i++) if (dist(verts[i], p) < 1e-5) return i;
    verts.push(p);
    return verts.length - 1;
  };
  for (const e of good) { e.u = vid(e.a); e.v = vid(e.b); e.len = e.kind === 'line' ? dist(e.a, e.b) : Math.abs(e.sw) * e.r; }

  // pota i rami aperti
  let alive = good.slice();
  for (;;) {
    const deg = new Array(verts.length).fill(0);
    for (const e of alive) { deg[e.u]++; deg[e.v]++; }
    const next = alive.filter((e) => deg[e.u] > 1 && deg[e.v] > 1);
    if (next.length === alive.length) break;
    alive = next;
  }

  // semilati
  const out = verts.map(() => []);
  const hes = [];
  for (const e of alive) {
    const h0 = { e, fwd: true, from: e.u, to: e.v };
    const h1 = { e, fwd: false, from: e.v, to: e.u };
    h0.twin = h1; h1.twin = h0;
    hes.push(h0, h1);
    out[e.u].push(h0); out[e.v].push(h1);
  }
  out.forEach((list, vi) => {
    if (!list.length) return;
    const minLen = Math.min(...list.map((h) => h.e.len));
    for (const h of list) {
      const f = Math.min(0.02, (0.02 * minLen) / h.e.len);
      const p = hePoint(h, f);
      h.ang = Math.atan2(p[1] - verts[vi][1], p[0] - verts[vi][0]);
    }
    list.sort((a, b) => a.ang - b.ang);
  });

  // componenti connesse
  const parent = verts.map((_, i) => i);
  const find = (i) => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  for (const e of alive) parent[find(e.u)] = find(e.v);

  // facce
  const cycles = [];
  const seen = new Set();
  for (const h0 of hes) {
    if (seen.has(h0)) continue;
    const cyc = [];
    let h = h0, guard = 0;
    while (!seen.has(h) && guard++ < 100000) {
      seen.add(h);
      cyc.push(h);
      const list = out[h.to];
      const idx = list.indexOf(h.twin);
      h = list[(idx - 1 + list.length) % list.length];
    }
    const poly = [];
    for (const x of cyc) sampleHe(x, poly);
    cycles.push({ hes: cyc, poly, area: polyArea(poly), comp: find(h0.from), segs: cyc.map(heSeg) });
  }
  for (const cv of loops) {
    const poly = [];
    for (let i = 0; i < 96; i++) poly.push(at(cv, i / 96));
    const segs = [{ k: 'circle', c: cv.c, r: cv.r, src: cv.src }];
    const comp = `c${cv.src}`;
    cycles.push({ poly, area: polyArea(poly), comp, segs });
    cycles.push({ poly: poly.slice().reverse(), area: -polyArea(poly), comp, segs, outer: true });
  }

  const bounded = cycles.filter((c) => c.area > 1e-9 && !c.outer);
  const outers = cycles.filter((c) => c.area < -1e-9);
  // ogni contorno esterno di una componente diventa foro della faccia più piccola che lo contiene
  for (const o of outers) {
    let best = null;
    for (const f of bounded) {
      if (f.comp === o.comp) continue;
      if (!pointInPoly(o.poly[0], f.poly)) continue;
      if (!best || f.area < best.area) best = f;
    }
    if (best) (best.holes ||= []).push(o);
  }

  return bounded.map((f) => {
    const holes = f.holes || [];
    const key = keyOf(f.segs) + (holes.length ? '/' + holes.map((h) => keyOf(h.segs)).sort().join('/') : '');
    const holePolys = holes.map((h) => h.poly);
    return {
      key,
      segs: f.segs,
      holes: holes.map((h) => h.segs),
      poly: f.poly,
      holePolys,
      area: f.area - holes.reduce((s, h) => s + Math.abs(h.area), 0),
      sample: interiorPoint(f.poly, holePolys),
    };
  }).sort((a, b) => b.area - a.area);
}

function keyOf(segs) { return [...new Set(segs.map((s) => s.src))].sort().join(','); }

function interiorPoint(poly, holes) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [x, y] of poly) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
  let best = null, bestD = -1;
  const N = 28;
  for (let i = 1; i < N; i++) for (let j = 1; j < N; j++) {
    const p = [x0 + ((x1 - x0) * i) / N, y0 + ((y1 - y0) * j) / N];
    if (!pointInPoly(p, poly) || holes.some((h) => pointInPoly(p, h))) continue;
    const d = Math.min(polyEdgeDist(p, poly), ...holes.map((h) => polyEdgeDist(p, h)));
    if (d > bestD) { bestD = d; best = p; }
  }
  return best || poly[0];
}

export function regionContains(r, p) {
  return pointInPoly(p, r.poly) && !r.holePolys.some((h) => pointInPoly(p, h));
}

/** Ritrova una regione salvata ({key, seed}) tra quelle attuali. */
export function matchRegion(regions, ref) {
  const same = regions.filter((r) => r.key === ref.key);
  if (same.length === 1) return same[0];
  const pool = same.length ? same : regions;
  if (ref.seed) {
    const inside = pool.find((r) => regionContains(r, ref.seed));
    if (inside) return inside;
    if (same.length) {
      let best = null, bd = Infinity;
      for (const r of same) { const d = dist(r.sample, ref.seed); if (d < bd) { bd = d; best = r; } }
      return best;
    }
  }
  return same[0] || null;
}
