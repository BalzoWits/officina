// Solver dei vincoli dello schizzo (planegcs di FreeCAD, in WebAssembly).
import { init_planegcs_module, GcsWrapper, SolveStatus } from '@salusoft89/planegcs';
import { evaluate } from '../shared/expr.js';

let wrapper = null;

export async function initSolver(wasmUrl) {
  const mod = await init_planegcs_module(wasmUrl ? { locateFile: () => wasmUrl } : undefined);
  wrapper = new GcsWrapper(new mod.GcsSystem(), mod);
}

const GEO_KEYS = {
  point: ['id', 'type', 'x', 'y', 'fixed'],
  line: ['id', 'type', 'p1_id', 'p2_id'],
  circle: ['id', 'type', 'c_id', 'radius'],
  arc: ['id', 'type', 'c_id', 'radius', 'start_angle', 'end_angle', 'start_id', 'end_id'],
};
const DEG = Math.PI / 180;

/** Campo del valore di una quota, e se va convertito da gradi. */
export function dimField(c) {
  switch (c.type) {
    case 'p2p_distance': case 'p2l_distance': return { k: 'distance' };
    case 'circle_diameter': case 'arc_diameter': return { k: 'diameter' };
    case 'circle_radius': case 'arc_radius': return { k: 'radius' };
    case 'l2l_angle_ll': return { k: 'angle', deg: true };
    case 'difference': return { k: 'difference', signed: true };
    case 'coordinate_x': return { k: 'x' };
    case 'coordinate_y': return { k: 'y' };
    default: return null;
  }
}

function strip(g) {
  const keys = GEO_KEYS[g.type];
  const o = {};
  for (const k of keys) o[k] = g[k];
  if (g.type === 'point') o.fixed = !!(g.fixed || g.ref);
  return o;
}

/**
 * Risolve lo schizzo. drag: { id, x, y } per trascinare un punto.
 * Ritorna { ok, geo, dof, conflicting, redundant, error }
 */
export function solve(sketch, scope = {}, drag = null) {
  if (!wrapper) throw new Error('Solver non pronto');
  const geo = sketch.geo;
  const prims = [];
  const points = geo.filter((g) => g.type === 'point');
  const curves = geo.filter((g) => g.type !== 'point');
  for (const g of points) prims.push(strip(g));
  for (const g of curves) prims.push(strip(g));
  for (const g of curves) if (g.type === 'arc') prims.push({ id: `${g.id}#r`, type: 'arc_rules', a_id: g.id });
  let error = null;
  for (const c of sketch.cons || []) {
    if (c.off) continue;
    const p = { ...c };
    delete p.expr; delete p.lx; delete p.ly; delete p.sign; delete p.off;
    const df = dimField(c);
    if (df && c.expr != null) {
      try {
        let v = evaluate(c.expr, scope);
        if (df.deg) v *= DEG;
        if (df.signed) v *= c.sign || 1;
        p[df.k] = v;
      } catch (e) { error = e.message; continue; }
    }
    prims.push(p);
  }
  const drags = drag ? (Array.isArray(drag) ? drag : [drag]) : [];
  drags.forEach((d, i) => {
    prims.push({ id: `#dx${i}`, type: 'coordinate_x', p_id: d.id, x: d.x, temporary: true });
    prims.push({ id: `#dy${i}`, type: 'coordinate_y', p_id: d.id, y: d.y, temporary: true });
  });
  wrapper.clear_data();
  wrapper.push_primitives_and_params(prims);
  const st = wrapper.solve();
  const ok = st === SolveStatus.Success || st === SolveStatus.Converged;
  let dof = null;
  try { dof = wrapper.gcs.dof(); } catch { /* */ }
  const conflicting = wrapper.has_gcs_conflicting_constraints() ? wrapper.get_gcs_conflicting_constraints() : [];
  const redundant = wrapper.has_gcs_redundant_constraints() ? wrapper.get_gcs_redundant_constraints() : [];
  if (!ok) return { ok, geo, dof, conflicting, redundant, error: error || 'Vincoli incompatibili' };
  wrapper.apply_solution();
  const solved = new Map(wrapper.sketch_index.get_primitives().map((p) => [p.id, p]));
  const out = geo.map((g) => {
    const s = solved.get(g.id);
    if (!s) return g;
    if (g.type === 'point') return { ...g, x: s.x, y: s.y };
    if (g.type === 'circle') return { ...g, radius: s.radius };
    if (g.type === 'arc') return { ...g, radius: s.radius, start_angle: s.start_angle, end_angle: s.end_angle };
    return g;
  });
  return { ok, geo: out, dof, conflicting, redundant, error };
}

/** Valore attuale (misurato) di una quota, nelle unità mostrate (mm o gradi). */
export function measureDim(c, geo) {
  const byId = new Map(geo.map((g) => [g.id, g]));
  const P = (id) => byId.get(id);
  switch (c.type) {
    case 'p2p_distance': { const a = P(c.p1_id), b = P(c.p2_id); return Math.hypot(b.x - a.x, b.y - a.y); }
    case 'p2l_distance': {
      const p = P(c.p_id), l = P(c.l_id), a = P(l.p1_id), b = P(l.p2_id);
      const dx = b.x - a.x, dy = b.y - a.y;
      return Math.abs((p.x - a.x) * dy - (p.y - a.y) * dx) / (Math.hypot(dx, dy) || 1);
    }
    case 'circle_diameter': return P(c.c_id).radius * 2;
    case 'arc_diameter': return P(c.a_id).radius * 2;
    case 'circle_radius': return P(c.c_id).radius;
    case 'arc_radius': return P(c.a_id).radius;
    case 'l2l_angle_ll': {
      const l1 = P(c.l1_id), l2 = P(c.l2_id);
      const d = (l) => { const a = P(l.p1_id), b = P(l.p2_id); return Math.atan2(b.y - a.y, b.x - a.x); };
      let a = d(l2) - d(l1);
      while (a <= -Math.PI) a += 2 * Math.PI;
      while (a > Math.PI) a -= 2 * Math.PI;
      return a / DEG;
    }
    case 'difference': {
      const a = P(c.param1.o_id)[c.param1.prop], b = P(c.param2.o_id)[c.param2.prop];
      return Math.abs(a - b);
    }
    default: return 0;
  }
}
