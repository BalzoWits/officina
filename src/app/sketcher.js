// Editor di schizzi 2D in SVG sopra la vista 3D (camera allineata al piano).
import { solve, measureDim, dimField } from './solver.js';
import { findRegions } from '../shared/profiles.js';
import { fmt, evaluate } from '../shared/expr.js';

export const CONS_HINT = {
  coincident: 'Coincidente: tocca due punti, oppure un punto e la linea/curva su cui deve stare',
  horizontal: 'Orizzontale: tocca una linea (o due punti da allineare)',
  vertical: 'Verticale: tocca una linea (o due punti da allineare)',
  parallel: 'Parallela: tocca due linee',
  perpendicular: 'Perpendicolare: tocca due linee',
  tangent: 'Tangente: tocca una linea e un cerchio/arco, o due curve',
  equal: 'Uguale: tocca due linee (stessa lunghezza) o due cerchi/archi (stesso raggio)',
  midpoint: 'Punto medio: tocca un punto e poi la linea',
  concentric: 'Concentrico: tocca due cerchi o archi',
  symmetric: 'Simmetria: tocca due punti e poi la linea di simmetria',
  fix: 'Fissa: tocca i punti da bloccare (tocca di nuovo per sbloccare)',
};

const TAU = Math.PI * 2;
const REF_GEO = () => [
  { id: 'O', type: 'point', x: 0, y: 0, fixed: true, ref: true },
  { id: 'X1', type: 'point', x: 1, y: 0, fixed: true, ref: true },
  { id: 'Y1', type: 'point', x: 0, y: 1, fixed: true, ref: true },
  { id: 'AX', type: 'line', p1_id: 'O', p2_id: 'X1', ref: true },
  { id: 'AY', type: 'line', p1_id: 'O', p2_id: 'Y1', ref: true },
];
export function newSketchGeo() { return REF_GEO(); }
const HIDDEN_PTS = new Set(['X1', 'Y1']);

const GLYPH = {
  horizontal_l: 'H', vertical_l: 'V', horizontal_pp: 'H', vertical_pp: 'V', parallel: '∥', perpendicular_ll: '⊥',
  tangent_lc: 'T', tangent_la: 'T', tangent_cc: 'T', tangent_aa: 'T', tangent_ca: 'T',
  equal_length: '=', equal_radius_cc: '=', equal_radius_aa: '=', equal_radius_ca: '=',
  p2p_symmetric_ppp: 'M', p2p_symmetric_ppl: '⇋', p2p_coincident: '●',
};
const DIM_TYPES = new Set(['p2p_distance', 'p2l_distance', 'circle_diameter', 'arc_diameter', 'circle_radius', 'arc_radius', 'l2l_angle_ll', 'difference']);

export class Sketcher {
  constructor({ host, viewport, onChange, toast, promptValue, getScope, onExit }) {
    this.host = host;
    this.vp = viewport;
    this.onChange = onChange;
    this.toast = toast;
    this.promptValue = promptValue;
    this.getScope = getScope;
    this.onExit = onExit;
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.classList.add('sketch-svg');
    host.appendChild(this.svg);
    this.active = false;
    this.pointers = new Map();
    this.bind();
  }

  // ---------- apertura / chiusura ----------
  open(feature, frame) {
    this.sk = JSON.parse(JSON.stringify(feature));
    if (!this.sk.geo.some((g) => g.id === 'O')) this.sk.geo = [...REF_GEO(), ...this.sk.geo];
    this.sk.cons ||= [];
    this.frame = frame;
    this.seq = 0;
    for (const x of [...this.sk.geo, ...this.sk.cons]) { const m = /^[a-z](\d+)$/.exec(x.id); if (m) this.seq = Math.max(this.seq, +m[1]); }
    this.sel = new Set();
    this.tool = 'line';
    this.state = null;
    this.undoStack = [];
    this.redoStack = [];
    this.active = true;
    this.svg.style.display = 'block';
    this.view = this.fitView();
    this.vp.enterSketch(frame, this.view);
    this.vp.onResize = () => this.render();
    this.resolve();
    this.render();
    this.emit();
  }

  close() {
    this.active = false;
    this.svg.style.display = 'none';
    this.svg.innerHTML = '';
    this.vp.onResize = null;
    this.vp.exitSketch();
    return this.sk;
  }

  fitView() {
    const r = this.vp.canvas.getBoundingClientRect();
    const pts = this.sk.geo.filter((g) => g.type === 'point' && !g.ref);
    if (!pts.length) return { cx: 0, cy: 0, s: Math.min(r.width, r.height) / 160 };
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const g of this.sk.geo) {
      if (g.type === 'point' && !HIDDEN_PTS.has(g.id)) { x0 = Math.min(x0, g.x); x1 = Math.max(x1, g.x); y0 = Math.min(y0, g.y); y1 = Math.max(y1, g.y); }
      if (g.type === 'circle' || g.type === 'arc') {
        const c = this.P(g.c_id);
        x0 = Math.min(x0, c.x - g.radius); x1 = Math.max(x1, c.x + g.radius); y0 = Math.min(y0, c.y - g.radius); y1 = Math.max(y1, c.y + g.radius);
      }
    }
    const w = Math.max(x1 - x0, 10), h = Math.max(y1 - y0, 10);
    return { cx: (x0 + x1) / 2, cy: (y0 + y1) / 2, s: Math.min(r.width / (w * 1.6), r.height / (h * 1.6)) };
  }

  // ---------- utilità ----------
  get W() { return this.vp.w; }
  get H() { return this.vp.h; }
  toS(x, y) { const v = this.view; return [this.W / 2 + (x - v.cx) * v.s, this.H / 2 - (y - v.cy) * v.s]; }
  toK(sx, sy) { const v = this.view; return [(sx - this.W / 2) / v.s + v.cx, -(sy - this.H / 2) / v.s + v.cy]; }
  P(id) { return this.sk.geo.find((g) => g.id === id); }
  nid(prefix = 'g') { this.seq += 1; return `${prefix}${this.seq}`; }
  snapshot() { return JSON.stringify({ geo: this.sk.geo, cons: this.sk.cons }); }
  push() { this.undoStack.push(this.snapshot()); if (this.undoStack.length > 200) this.undoStack.shift(); this.redoStack = []; }
  undo() { if (!this.undoStack.length) return; this.redoStack.push(this.snapshot()); Object.assign(this.sk, JSON.parse(this.undoStack.pop())); this.sel.clear(); this.state = null; this.resolve(); this.changed(); }
  redo() { if (!this.redoStack.length) return; this.undoStack.push(this.snapshot()); Object.assign(this.sk, JSON.parse(this.redoStack.pop())); this.sel.clear(); this.resolve(); this.changed(); }

  resolve(drag = null) {
    const r = solve(this.sk, this.getScope(), drag);
    this.status = r;
    if (r.ok) this.sk.geo = r.geo;
    return r;
  }
  changed() { this.regions = null; this.render(); this.emit(); }
  emit() { if (this.onChange) this.onChange(this.statusInfo()); }
  statusInfo() {
    const st = this.status || {};
    return { hint: this.hintText(), exact: this.exactFields(), cmd: this.cmdInfo(), lastPointer: this.lastPointer, dof: st.dof, ok: st.ok !== false, conflicting: st.conflicting || [], tool: this.tool, sel: this.sel.size, canUndo: this.undoStack.length > 0, canRedo: this.redoStack.length > 0, selTypes: this.selTypes() };
  }

  /** Prova una modifica: se il solver non converge la annulla. */
  attempt(fn, msg = 'Vincolo in conflitto con quelli esistenti') {
    const before = this.snapshot();
    fn();
    const r = this.resolve();
    if (!r.ok || (r.conflicting && r.conflicting.length)) {
      Object.assign(this.sk, JSON.parse(before));
      this.resolve();
      this.toast(msg, 'warn');
      this.changed();
      return false;
    }
    this.undoStack.push(before);
    this.redoStack = [];
    this.changed();
    return true;
  }

  setTool(t) {
    if (t.startsWith('cmd:')) { this.clearLocks(); this.startCmd(t.slice(4)); return; }
    this.cmd = null;
    this.clearLocks();
    this.tool = t;
    this.state = null;
    if (t !== 'select' && t !== 'dim') this.sel.clear();
    this.render();
    this.emit();
  }

  // ---------- hit test ----------
  tolFor(type) { return type === 'touch' ? 22 : type === 'pen' ? 13 : 9; }

  hit(sx, sy, ptype, opts = {}) {
    const tol = this.tolFor(ptype);
    const [x, y] = this.toK(sx, sy);
    const s = this.view.s;
    let best = null, bd = tol;
    const consider = (d, h) => { if (d < bd) { bd = d; best = h; } };
    if (opts.points !== false) {
      for (const g of this.sk.geo) {
        if (g.type !== 'point' || HIDDEN_PTS.has(g.id) || (opts.exclude && opts.exclude.has(g.id))) continue;
        const [px, py] = this.toS(g.x, g.y);
        consider(Math.hypot(px - sx, py - sy) * 0.8, { kind: 'point', id: g.id });
      }
      if (best) return best;
    }
    if (opts.dims !== false && this.labelBoxes) {
      for (const b of this.labelBoxes) if (sx >= b.x0 - 4 && sx <= b.x1 + 4 && sy >= b.y0 - 4 && sy <= b.y1 + 4) return { kind: 'dim', id: b.id };
    }
    if (opts.glyphs !== false && this.glyphBoxes) {
      for (const b of this.glyphBoxes) if (Math.hypot(sx - b.x, sy - b.y) < Math.max(12, tol * 0.7)) return { kind: 'cons', id: b.id };
    }
    for (const g of this.sk.geo) {
      if (g.type === 'point' || (opts.exclude && opts.exclude.has(g.id))) continue;
      if (g.ref) {
        if (opts.axes === false) continue;
        const d = g.id === 'AX' ? Math.abs(y) * s : Math.abs(x) * s;
        consider(d + 2, { kind: 'curve', id: g.id, ref: true });
        continue;
      }
      if (g.type === 'line') {
        const a = this.P(g.p1_id), b = this.P(g.p2_id);
        consider(segDist([x, y], [a.x, a.y], [b.x, b.y]) * s, { kind: 'curve', id: g.id });
      } else if (g.type === 'circle') {
        const c = this.P(g.c_id);
        consider(Math.abs(Math.hypot(x - c.x, y - c.y) - g.radius) * s, { kind: 'curve', id: g.id });
      } else if (g.type === 'arc') {
        const c = this.P(g.c_id);
        const ang = Math.atan2(y - c.y, x - c.x);
        if (angIn(ang, g.start_angle, g.end_angle)) consider(Math.abs(Math.hypot(x - c.x, y - c.y) - g.radius) * s, { kind: 'curve', id: g.id });
      }
    }
    return best;
  }

  /** Punto di posa con aggancio a punti esistenti o curve. */
  placement(sx, sy, ptype, exclude) {
    const h = this.hit(sx, sy, ptype, { dims: false, glyphs: false, exclude });
    let [x, y] = this.toK(sx, sy);
    if (h && h.kind === 'point') { const p = this.P(h.id); return { x: p.x, y: p.y, point: h.id }; }
    if (h && h.kind === 'curve') {
      const g = this.P(h.id);
      if (g.type === 'line') {
        const a = this.P(g.p1_id), b = this.P(g.p2_id);
        if (g.ref) { if (g.id === 'AX') y = 0; else x = 0; } else {
          const t = segT([x, y], [a.x, a.y], [b.x, b.y]);
          x = a.x + (b.x - a.x) * t; y = a.y + (b.y - a.y) * t;
        }
      } else {
        const c = this.P(g.c_id);
        const ang = Math.atan2(y - c.y, x - c.x);
        x = c.x + g.radius * Math.cos(ang); y = c.y + g.radius * Math.sin(ang);
      }
      return { x, y, curve: h.id };
    }
    if (this.snapGrid) { const g = this.gridStep(); return { x: Math.round(x / g) * g, y: Math.round(y / g) * g, grid: true }; }
    return { x, y };
  }

  /** Passo della griglia visibile (lo stesso dei quadretti disegnati). */
  gridStep() {
    let step = 1;
    for (const k of [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000]) { step = k; if (k * this.view.s >= 22) break; }
    return step;
  }
  setSnapGrid(on) { this.snapGrid = on; if (this.lastCursor && this.state) this.trackCursor(...this.lastCursor, this.lastPointer || 'mouse'); this.render(); }

  /** Crea davvero il punto di una posa (o riusa quello agganciato). */
  materialize(pl) {
    if (pl.point) return pl.point;
    const id = this.nid('p');
    this.sk.geo.push({ id, type: 'point', x: pl.x, y: pl.y, fixed: false });
    if (pl.curve) {
      const g = this.P(pl.curve);
      const cid = this.nid('c');
      if (g.type === 'line') this.sk.cons.push({ id: cid, type: 'point_on_line_pl', p_id: id, l_id: g.id });
      else if (g.type === 'circle') this.sk.cons.push({ id: cid, type: 'point_on_circle', p_id: id, c_id: g.id });
      else this.sk.cons.push({ id: cid, type: 'point_on_arc', p_id: id, a_id: g.id });
    }
    return id;
  }

  addLine(aId, bId, autoHV = true) {
    const id = this.nid('l');
    this.sk.geo.push({ id, type: 'line', p1_id: aId, p2_id: bId });
    if (autoHV) {
      const a = this.P(aId), b = this.P(bId);
      const ang = Math.abs(Math.atan2(b.y - a.y, b.x - a.x));
      const tolA = (3 * Math.PI) / 180;
      const horiz = ang < tolA || Math.abs(ang - Math.PI) < tolA;
      const vert = Math.abs(ang - Math.PI / 2) < tolA;
      // niente H/V se i due punti sono già entrambi sugli assi o vincolati: lascio decidere al solver
      if (horiz) this.sk.cons.push({ id: this.nid('c'), type: 'horizontal_l', l_id: id });
      else if (vert) this.sk.cons.push({ id: this.nid('c'), type: 'vertical_l', l_id: id });
    }
    return id;
  }

  // ---------- strumenti di disegno ----------
  down(e, sx, sy) {
    const t = this.tool;
    const pl = () => this.placement(sx, sy, e.pointerType);
    this.gesture = { sx, sy, moved: false, type: e.pointerType };
    this.lastPointer = e.pointerType;
    if (t === 'select') {
      const h = this.hit(sx, sy, e.pointerType);
      this.gesture.hit = h;
      if (h && h.kind === 'point') {
        const p = this.P(h.id);
        if (!p.ref && !p.fixed) this.gesture.drag = { kind: 'point', id: h.id, before: this.snapshot() };
      } else if (h && h.kind === 'curve' && !h.ref) {
        const g = this.P(h.id);
        const [x, y] = this.toK(sx, sy);
        if (g.type === 'line') {
          const a = this.P(g.p1_id), b = this.P(g.p2_id);
          this.gesture.drag = { kind: 'line', ids: [a.id, b.id], off: [[a.x - x, a.y - y], [b.x - x, b.y - y]], before: this.snapshot() };
        } else {
          this.gesture.drag = { kind: 'radius', id: g.id, before: this.snapshot() };
        }
      } else if (h && h.kind === 'dim') {
        this.gesture.drag = { kind: 'label', id: h.id, before: this.snapshot() };
      } else this.gesture.pan = { cx: this.view.cx, cy: this.view.cy };
      return;
    }
    if (this.isTapTool()) { this.gesture.pan = { cx: this.view.cx, cy: this.view.cy }; return; }
    if (t === 'line') {
      if (!this.state) { this.state = { kind: 'line', start: pl(), fresh: true }; } else this.state.fresh = false;
      this.state.cur = pl();
    } else if (t === 'rect' || t === 'circle' || t === 'rect3' || t === 'circle2') {
      if (!this.state) this.state = { kind: t, start: pl(), fresh: true }; else this.state.fresh = false;
      this.state.cur = pl();
    } else if (t === 'arc') {
      if (!this.state) this.state = { kind: 'arc', pts: [pl()], fresh: true };
      else { this.state.fresh = false; }
      this.state.cur = pl();
    } else if (t === 'point') {
      this.state = { kind: 'point', cur: pl() };
    }
    this.render();
  }

  move(e, sx, sy) {
    const g = this.gesture;
    if (g && Math.hypot(sx - g.sx, sy - g.sy) > 8) g.moved = true;
    if (this.tool === 'select' || this.isTapTool()) {
      if (!g) return;
      if (g.pan && g.moved) {
        this.view.cx = g.pan.cx - (sx - g.sx) / this.view.s;
        this.view.cy = g.pan.cy + (sy - g.sy) / this.view.s;
        this.vp.setSketchView(this.view);
        this.render();
        return;
      }
      if (g.drag && g.moved) this.dragTo(g.drag, sx, sy);
      return;
    }
    this.trackCursor(sx, sy, e.pointerType);
  }

  /** Il cursore muove l'anteprima; i valori scritti (bloccati) la vincolano. */
  trackCursor(sx, sy, ptype) {
    this.lastPointer = ptype;
    this.lastCursor = [sx, sy];
    if (!this.state || this.tool === 'select' || this.isTapTool()) return;
    this.state.cur = this.applyLocks(this.placement(sx, sy, ptype));
    this.render();
    if (this.onCursor) this.onCursor();
  }

  applyLocks(cur) {
    const L = this.locks || {};
    const st = this.state;
    if (!st || !Object.keys(L).length) return cur;
    if (st.kind === 'line' && (st.lastId || st.start)) {
      const a = st.lastId ? this.P(st.lastId) : st.start;
      const dx = cur.x - a.x, dy = cur.y - a.y;
      let len = Math.hypot(dx, dy), ang = Math.atan2(dy, dx);
      if (L.ang != null) {
        ang = (L.ang * Math.PI) / 180;
        len = L.len != null ? L.len : Math.max(dx * Math.cos(ang) + dy * Math.sin(ang), 1e-3);
      } else if (L.len != null) len = L.len;
      return { x: a.x + len * Math.cos(ang), y: a.y + len * Math.sin(ang) };
    }
    if (st.kind === 'rect' && st.start) {
      const s = st.start;
      const gx = cur.x < s.x ? -1 : 1, gy = cur.y < s.y ? -1 : 1;
      return { x: L.w != null ? s.x + gx * L.w : cur.x, y: L.h != null ? s.y + gy * L.h : cur.y };
    }
    if (st.kind === 'circle' && st.start && L.d != null) {
      const s = st.start;
      const u = norm2([cur.x - s.x, cur.y - s.y]);
      return { x: s.x + (u[0] || 1) * L.d / 2, y: s.y + u[1] * L.d / 2 };
    }
    return cur;
  }

  /** Blocca (o sblocca con valore vuoto) una misura scritta da tastiera. */
  setLock(k, expr) {
    this.locks ||= {}; this.lockExpr ||= {};
    if (expr == null || String(expr).trim() === '') { delete this.locks[k]; delete this.lockExpr[k]; } else {
      let v;
      try { v = this.evalExpr(expr); } catch { return false; }
      this.locks[k] = v; this.lockExpr[k] = String(expr).trim();
    }
    if (this.lastCursor) this.trackCursor(...this.lastCursor, this.lastPointer || 'mouse');
    return true;
  }
  clearLocks() { this.locks = {}; this.lockExpr = {}; }
  hasLocks() { return !!(this.lockExpr && Object.keys(this.lockExpr).length); }
  /** Posizione sullo schermo dove mostrare i campi accanto al cursore. */
  exactAnchor() {
    const st = this.state;
    const p = st && (st.cur || st.start);
    return p ? this.toS(p.x, p.y) : null;
  }

  up(e, sx, sy) {
    this.upInner(e, sx, sy);
    this.emit();
  }

  upInner(e, sx, sy) {
    const g = this.gesture;
    this.gesture = null;
    if (this.tool === 'select') {
      if (!g) return;
      if (g.drag && g.moved) {
        this.undoStack.push(g.drag.before);
        this.redoStack = [];
        this.changed();
        return;
      }
      if (!g.moved) this.tapSelect(g.hit);
      return;
    }
    if (this.isTapTool()) {
      if (g && g.moved) return;
      if (this.tool === 'dim') this.tapDim(sx, sy, e.pointerType);
      else if (this.tool === 'trim') this.tapTrim(sx, sy, e.pointerType);
      else if (this.tool.startsWith('cmd:')) this.tapCmd(sx, sy, e.pointerType);
      else this.tapConsTool(sx, sy, e.pointerType);
      return;
    }
    const st = this.state;
    if (!st) return;
    const cur = this.placement(sx, sy, e.pointerType);
    if (this.hasLocks() && !st.fresh && (st.kind === 'line' || st.kind === 'rect' || st.kind === 'circle')) {
      st.cur = this.applyLocks(cur);
      this.placeExact({ ...this.lockExpr }, (x) => this.evalExpr(x));
      return;
    }
    if (st.kind === 'point') {
      if (!cur.point) { this.push(); this.materialize(cur); this.resolve(); }
      this.state = null;
      this.changed();
      return;
    }
    if (st.fresh && !(g && g.moved)) { st.fresh = false; this.render(); return; } // primo tocco: solo il punto iniziale
    if (st.kind === 'line') {
      const a = st.lastId ? this.P(st.lastId) : st.start;
      if (Math.hypot(cur.x - a.x, cur.y - a.y) * this.view.s < 4) { this.render(); return; }
      this.push();
      const aId = st.lastId || this.materialize(st.start);
      const bId = this.materialize(cur);
      this.addLine(aId, bId);
      this.resolve();
      // la catena si chiude solo tornando al suo primo punto; sugli altri punti prosegue
      const firstId = st.firstId || aId;
      if (bId === firstId) { this.state = null; this.toast('Profilo chiuso', 'ok'); } else this.state = { kind: 'line', lastId: bId, firstId };
      this.changed();
      return;
    }
    if (st.kind === 'rect' || st.kind === 'circle') {
      const a = st.start;
      if (Math.hypot(cur.x - a.x, cur.y - a.y) * this.view.s < 4) { this.render(); return; }
      this.push();
      if (st.kind === 'rect') this.makeRect(a, cur);
      else {
        const c = this.materialize(a);
        const cp = this.P(c);
        this.sk.geo.push({ id: this.nid('k'), type: 'circle', c_id: c, radius: Math.hypot(cur.x - cp.x, cur.y - cp.y) });
      }
      this.state = null;
      this.resolve();
      this.changed();
      return;
    }
    if (st.kind === 'arc') {
      st.pts.push(cur);
      if (st.pts.length < 3) { this.render(); return; }
      this.push();
      this.makeArc(st.pts[0], st.pts[1], st.pts[2]);
      this.state = null;
      this.resolve();
      this.changed();
    }
  }

  makeRect(a, c) {
    const p1 = this.materialize(a);
    const p3 = this.materialize(c);
    const A = this.P(p1), C = this.P(p3);
    const p2 = this.nid('p'), p4 = this.nid('p');
    this.sk.geo.push({ id: p2, type: 'point', x: C.x, y: A.y, fixed: false }, { id: p4, type: 'point', x: A.x, y: C.y, fixed: false });
    const l1 = this.addLine(p1, p2, false), l2 = this.addLine(p2, p3, false), l3 = this.addLine(p3, p4, false), l4 = this.addLine(p4, p1, false);
    this.sk.cons.push(
      { id: this.nid('c'), type: 'horizontal_l', l_id: l1 }, { id: this.nid('c'), type: 'horizontal_l', l_id: l3 },
      { id: this.nid('c'), type: 'vertical_l', l_id: l2 }, { id: this.nid('c'), type: 'vertical_l', l_id: l4 },
    );
    return { p1, p2, p3, p4, l1, l2, l3, l4 };
  }

  // ---------- strumenti "a tocchi" ----------
  isTapTool() { return this.tool === 'dim' || this.tool === 'trim' || this.tool.startsWith('cmd:') || this.tool.startsWith('c:'); }

  /** Testo di guida per lo strumento e il passo in corso. */
  hintText() {
    const t = this.tool, st = this.state;
    if (t === 'line') return st ? 'Tocca il punto successivo · torna al primo punto per chiudere · doppio tocco o Esc per finire' : 'Tocca (o trascina) per il primo punto della linea';
    if (t === 'rect') return st ? 'Tocca l\'angolo opposto (o scrivi le misure qui sotto)' : 'Tocca il primo angolo del rettangolo';
    if (t === 'circle') return st ? 'Tocca per il raggio (o scrivi il diametro qui sotto)' : 'Tocca il centro del cerchio';
    if (t === 'arc') return !st ? 'Tocca l\'inizio dell\'arco' : st.pts.length === 1 ? 'Tocca la fine dell\'arco' : 'Tocca un punto per cui passa l\'arco';
    if (t === 'point') return 'Tocca per aggiungere un punto (serve ad esempio come centro dei fori)';
    if (t === 'dim') return st && st.items && st.items.length ? 'Tocca un secondo elemento, oppure un punto vuoto per quotare la lunghezza' : 'Tocca una linea, un cerchio o due punti da quotare';
    if (t === 'select') return 'Tocca per selezionare · trascina punti e linee · tocca una quota per cambiarla';
    if (t === 'trim') return 'Taglia: tocca il pezzo di linea o curva da togliere (si taglia tra gli incroci)';
    if (t.startsWith('cmd:') && this.cmd) { const f = this.cmd.spec.fields.find((x) => x.k === this.cmd.active); return f ? `${this.cmd.spec.title} · ${f.label}: ${f.hint}` : ''; }
    if (t.startsWith('c:')) return CONS_HINT[t.slice(2)] || '';
    return '';
  }

  // ---------- valori esatti durante il disegno ----------
  /** Campi da mostrare nella barra dei valori, o null. */
  exactFields() {
    const st = this.state;
    if (!st) return null;
    const ex = this.exactRaw();
    // nessun valore suggerito finché il disegno non ha ancora una misura
    if (ex) for (const f of ex.fields) if (Math.abs(Number(f.ph)) < 1e-9) f.ph = '';
    return ex;
  }

  exactRaw() {
    const st = this.state;
    if (st.kind === 'line' && (st.lastId || st.start)) {
      const a = st.lastId ? this.P(st.lastId) : st.start;
      const c = st.cur || a;
      return { kind: 'line', fields: [{ k: 'len', label: 'Lunghezza', unit: 'mm', ph: fmt(Math.hypot(c.x - a.x, c.y - a.y), 2) }, { k: 'ang', label: 'Angolo', unit: '°', ph: fmt((Math.atan2(c.y - a.y, c.x - a.x) * 180) / Math.PI, 1) }] };
    }
    if (st.kind === 'rect' && st.start) {
      const c = st.cur || st.start;
      return { kind: 'rect', fields: [{ k: 'w', label: 'Larghezza', unit: 'mm', ph: fmt(Math.abs(c.x - st.start.x), 2) }, { k: 'h', label: 'Altezza', unit: 'mm', ph: fmt(Math.abs(c.y - st.start.y), 2) }] };
    }
    if (st.kind === 'circle' && st.start) {
      const c = st.cur || st.start;
      return { kind: 'circle', fields: [{ k: 'd', label: 'Diametro', unit: 'mm', ph: fmt(2 * Math.hypot(c.x - st.start.x, c.y - st.start.y), 2) }] };
    }
    return null;
  }

  /** Crea l'elemento con i valori scritti (stringhe, anche espressioni) e le relative quote. */
  placeExact(vals, ev) {
    const st = this.state;
    const ef = this.exactFields();
    if (!ef) return false;
    const num = (k) => (vals[k] != null && String(vals[k]).trim() !== '' ? { expr: String(vals[k]).trim(), v: ev(vals[k]) } : null);
    const ph = (k) => Number(ef.fields.find((f) => f.k === k).ph);
    this.push();
    if (ef.kind === 'line') {
      const L = num('len'), A = num('ang');
      const len = L ? L.v : ph('len'), ang = A ? A.v : ph('ang');
      if (!(len > 0)) { this.undoStack.pop(); return false; }
      const aId = st.lastId || this.materialize(st.start);
      const a = this.P(aId);
      const bId = this.nid('p');
      const rad = (ang * Math.PI) / 180;
      this.sk.geo.push({ id: bId, type: 'point', x: a.x + len * Math.cos(rad), y: a.y + len * Math.sin(rad), fixed: false });
      const lId = this.addLine(aId, bId, !A);
      const b = this.P(bId);
      const mid = [(a.x + b.x) / 2, (a.y + b.y) / 2];
      const off = 18 / this.view.s;
      if (L) this.sk.cons.push({ id: this.nid('d'), type: 'p2p_distance', p1_id: aId, p2_id: bId, distance: len, expr: L.expr, lx: mid[0] - Math.sin(rad) * off, ly: mid[1] + Math.cos(rad) * off });
      if (A) {
        const m = ((ang % 180) + 180) % 180;
        if (m < 1e-9) this.sk.cons.push({ id: this.nid('c'), type: 'horizontal_l', l_id: lId });
        else if (Math.abs(m - 90) < 1e-9) this.sk.cons.push({ id: this.nid('c'), type: 'vertical_l', l_id: lId });
        else this.sk.cons.push({ id: this.nid('d'), type: 'l2l_angle_ll', l1_id: 'AX', l2_id: lId, angle: rad, expr: A.expr, lx: a.x + Math.cos(rad / 2) * off * 2.5, ly: a.y + Math.sin(rad / 2) * off * 2.5 });
      }
      this.state = { kind: 'line', lastId: bId, firstId: st.firstId || aId };
    } else if (ef.kind === 'rect') {
      const W = num('w'), H = num('h');
      const c = st.cur || st.start;
      const sx = c.x < st.start.x ? -1 : 1, sy = c.y < st.start.y ? -1 : 1;
      const w = W ? W.v : ph('w'), h = H ? H.v : ph('h');
      if (!(w > 0 && h > 0)) { this.undoStack.pop(); return false; }
      const r = this.makeRect(st.start, { x: st.start.x + sx * w, y: st.start.y + sy * h });
      const A = this.P(r.p1), C = this.P(r.p3);
      const off = 18 / this.view.s;
      if (W) this.sk.cons.push({ id: this.nid('d'), type: 'p2p_distance', p1_id: r.p1, p2_id: r.p2, distance: w, expr: W.expr, lx: (A.x + C.x) / 2, ly: Math.min(A.y, C.y) - off });
      if (H) this.sk.cons.push({ id: this.nid('d'), type: 'p2p_distance', p1_id: r.p2, p2_id: r.p3, distance: h, expr: H.expr, lx: Math.max(A.x, C.x) + off, ly: (A.y + C.y) / 2 });
      this.state = null;
    } else if (ef.kind === 'circle') {
      const D = num('d');
      const d = D ? D.v : ph('d');
      if (!(d > 0)) { this.undoStack.pop(); return false; }
      const cId = this.materialize(st.start);
      const kId = this.nid('k');
      this.sk.geo.push({ id: kId, type: 'circle', c_id: cId, radius: d / 2 });
      const c = this.P(cId);
      if (D) this.sk.cons.push({ id: this.nid('d'), type: 'circle_diameter', c_id: kId, diameter: d, expr: D.expr, lx: c.x + d * 0.45, ly: c.y + d * 0.45 });
      this.state = null;
    }
    this.clearLocks();
    this.resolve();
    this.changed();
    return true;
  }

  // ---------- vincoli come strumenti: si toccano gli elementi uno dopo l'altro ----------
  consReady(name) {
    const t = this.selTypes();
    const L = t.line + t.axis, C = t.circle + t.arc, P = t.point;
    const n = this.sel.size;
    switch (name) {
      case 'coincident': return (P === 2 && n === 2) || (P === 1 && L + C === 1 && n === 2);
      case 'horizontal': case 'vertical': return (t.line >= 1 && n === t.line) || (P === 2 && n === 2);
      case 'parallel': case 'perpendicular': return L === 2 && n === 2;
      case 'tangent': return ((L === 1 && C === 1) || C === 2) && n === 2;
      case 'equal': return (t.line === 2 || C === 2) && n === 2;
      case 'midpoint': return P === 1 && t.line === 1 && n === 2;
      case 'concentric': return (C === 2 || (C === 1 && P === 1)) && n === 2;
      case 'symmetric': return P === 2 && L === 1 && n === 3;
      case 'fix': return P >= 1 && n === P;
      default: return false;
    }
  }
  tapConsTool(sx, sy, ptype) {
    const name = this.tool.slice(2);
    const h = this.hit(sx, sy, ptype, { dims: false, glyphs: false });
    if (!h) { this.sel.clear(); this.render(); this.emit(); return; }
    if (this.sel.has(h.id)) this.sel.delete(h.id); else this.sel.add(h.id);
    const max = { symmetric: 3 }[name] || 2;
    if (this.sel.size > max) { this.sel.clear(); this.sel.add(h.id); }
    if (this.consReady(name)) { this.applyConstraint(name); return; }
    this.render();
    this.emit();
  }

  // ---------- comandi a campi dello schizzo (come i comandi 3D) ----------
  /** Apre un comando: la selezione già fatta finisce nei campi che la accettano. */
  startCmd(type) {
    const spec = SKETCH_CMDS[type];
    const cmd = { type, spec, vals: {}, active: null };
    for (const f of spec.fields) cmd.vals[f.k] = f.kind === 'pick' ? [] : f.kind === 'toggle' ? false : f.init;
    const pre = [...this.sel];
    this.cmd = cmd;
    this.tool = 'cmd:' + type;
    this.state = null;
    for (const id of pre) {
      // per raccordo/smusso le linee selezionate contano solo a coppie (angolo in comune, sotto)
      if (spec.fields.some((f) => f.what === 'corner') && this.P(id) && this.P(id).type === 'line') continue;
      for (const f of spec.fields) {
        if (f.kind !== 'pick') continue;
        const ids = this.cmdAccept(f, id, null);
        if (ids && ids.length && (f.multi || !cmd.vals[f.k].length)) { for (const x of ids) if (!cmd.vals[f.k].includes(x)) cmd.vals[f.k].push(x); break; }
      }
    }
    // due linee selezionate per raccordo/smusso: il loro angolo in comune
    if (type === 'sfillet' || type === 'schamfer') {
      const lines = pre.map((id) => this.P(id)).filter((g) => g && g.type === 'line' && !g.ref);
      for (let i = 0; i < lines.length; i++) for (let j = i + 1; j < lines.length; j++) {
        const a = lines[i], b = lines[j];
        const shared = [a.p1_id, a.p2_id].find((p) => p === b.p1_id || p === b.p2_id);
        if (shared && this.cornerInfo(shared) && !cmd.vals.corners.includes(shared)) cmd.vals.corners.push(shared);
      }
    }
    cmd.active = (spec.fields.find((f) => f.kind === 'pick' && !cmd.vals[f.k].length) || spec.fields.find((f) => f.kind === 'pick') || {}).k;
    this.syncCmdSel();
    this.render();
    this.emit();
  }

  /** Id che un campo accetta per l'elemento toccato (null = non accettato). */
  cmdAccept(f, id, sxy) {
    const g = this.P(id);
    if (!g) return null;
    if (f.what === 'line') return g.type === 'line' ? [id] : null;
    if (f.what === 'curves') return g.ref ? null : [id];
    if (f.what === 'corner') {
      if (g.type === 'point') return this.cornerInfo(id) ? [id] : null;
      if (g.type === 'line' && !g.ref) {
        // linea toccata: l'angolo all'estremo più vicino al dito
        const ends = [g.p1_id, g.p2_id].filter((p) => this.cornerInfo(p));
        if (!ends.length) return null;
        if (!sxy || ends.length === 1) return [ends[0]];
        const [x, y] = this.toK(...sxy);
        ends.sort((p, q) => Math.hypot(this.P(p).x - x, this.P(p).y - y) - Math.hypot(this.P(q).x - x, this.P(q).y - y));
        return [ends[0]];
      }
      return null;
    }
    if (f.what === 'chain') return g.type !== 'point' && !g.ref ? this.chainOf(id) : null;
    return null;
  }

  tapCmd(sx, sy, ptype) {
    const cmd = this.cmd;
    const f = cmd.spec.fields.find((x) => x.k === cmd.active);
    if (!f) return;
    const h = this.hit(sx, sy, ptype, { dims: false, glyphs: false, axes: f.what === 'line', points: f.what !== 'chain' });
    if (!h) return;
    const ids = this.cmdAccept(f, h.id, [sx, sy]);
    if (!ids) { this.toast(f.hint, 'warn'); return; }
    const cur = cmd.vals[f.k];
    const all = ids.every((x) => cur.includes(x));
    if (!f.multi) cmd.vals[f.k] = all ? [] : ids.slice(0, 1);
    else if (all) cmd.vals[f.k] = cur.filter((x) => !ids.includes(x));
    else for (const x of ids) if (!cur.includes(x)) cur.push(x);
    // un campo a scelta singola appena riempito passa al successivo
    if (!f.multi && cmd.vals[f.k].length) {
      const next = cmd.spec.fields.find((x) => x.kind === 'pick' && x.k !== f.k && !cmd.vals[x.k].length);
      if (next) cmd.active = next.k;
    }
    this.syncCmdSel();
    this.render();
    this.emit();
  }

  syncCmdSel() {
    this.sel.clear();
    if (!this.cmd) return;
    for (const f of this.cmd.spec.fields) if (f.kind === 'pick' && f.what !== 'line') for (const id of this.cmd.vals[f.k]) this.sel.add(id);
  }
  cmdSetActive(k) { if (this.cmd) { this.cmd.active = k; this.render(); this.emit(); } }
  cmdClear(k) { if (this.cmd) { this.cmd.vals[k] = []; this.cmd.active = k; this.syncCmdSel(); this.render(); this.emit(); } }
  cmdSetVal(k, v) { if (this.cmd) { this.cmd.vals[k] = v; this.render(); this.emit(); } }
  cmdReady() {
    const c = this.cmd;
    return !!c && c.spec.fields.every((f) => f.kind !== 'pick' || c.vals[f.k].length);
  }
  cmdCancel() { this.cmd = null; this.sel.clear(); this.tool = 'select'; this.render(); this.emit(); }
  cmdInfo() {
    const c = this.cmd;
    if (!c) return null;
    return { type: c.type, title: c.spec.title, active: c.active, ready: this.cmdReady(), fields: c.spec.fields.map((f) => ({ ...f, value: c.vals[f.k] })) };
  }

  cmdApply() {
    const c = this.cmd;
    if (!this.cmdReady()) { this.toast('Completa i campi del comando', 'warn'); return; }
    const v = c.vals;
    let num = null, expr = null;
    const nf = c.spec.fields.find((f) => f.kind === 'num');
    if (nf) {
      expr = String(v[nf.k]).trim();
      try { num = this.evalExpr(expr); } catch { this.toast('Valore non valido', 'warn'); return; }
      if (!(num > 0)) { this.toast('Il valore deve essere maggiore di zero', 'warn'); return; }
    }
    let ok = false;
    if (c.type === 'smirror') ok = this.attempt(() => this.mirrorOp(v.objects, v.axis[0]), 'Specchio non applicabile con questi vincoli');
    else if (c.type === 'sfillet' || c.type === 'schamfer') {
      const bad = v.corners.find((p) => !this.cornerInfo(p) || num > this.cornerInfo(p)[c.type === 'sfillet' ? 'maxR' : 'maxD']);
      if (bad) { const ci = this.cornerInfo(bad); this.toast(ci ? `Misura troppo grande per un angolo (massimo ${fmt(c.type === 'sfillet' ? ci.maxR : ci.maxD, 2)} mm)` : 'Angolo non più valido', 'warn'); return; }
      ok = this.attempt(() => { for (const p of v.corners) (c.type === 'sfillet' ? this.filletCorner(p, num, expr) : this.chamferCorner(p, num, expr)); }, 'Non applicabile con i vincoli presenti');
    } else if (c.type === 'offset') {
      let res;
      try { res = this.offsetCompute(v.objects, num, v.flip); } catch (e) { this.toast(e.message, 'warn'); return; }
      ok = this.attempt(() => this.offsetCommit(res, expr), 'Offset non applicabile con questi vincoli');
    }
    if (ok) { this.cmd = null; this.sel.clear(); this.tool = 'select'; this.render(); this.emit(); }
  }

  // ---------- specchia ----------
  mirrorOp(objIds, axisId) {
    const ax = this.P(axisId), A = this.P(ax.p1_id), B = this.P(ax.p2_id);
    const d = norm2([B.x - A.x, B.y - A.y]);
    const refl = (p) => { const t = (p.x - A.x) * d[0] + (p.y - A.y) * d[1]; const qx = A.x + d[0] * t, qy = A.y + d[1] * t; return { x: 2 * qx - p.x, y: 2 * qy - p.y, on: Math.hypot(qx - p.x, qy - p.y) < 1e-6 }; };
    const map = new Map();
    const C = (o) => this.sk.cons.push({ id: this.nid('c'), ...o });
    const mp = (id) => {
      if (map.has(id)) return map.get(id);
      const p = this.P(id), r = refl(p);
      if (r.on || p.ref) { map.set(id, id); return id; }
      const nid = this.nid('p');
      this.sk.geo.push({ id: nid, type: 'point', x: r.x, y: r.y, fixed: false, construction: p.construction });
      C({ type: 'p2p_symmetric_ppl', p1_id: id, p2_id: nid, l_id: ax.id });
      map.set(id, nid);
      return nid;
    };
    for (const g of objIds.map((id) => this.P(id)).filter(Boolean)) {
      if (g.id === axisId) continue;
      if (g.type === 'point') mp(g.id);
      else if (g.type === 'line') this.sk.geo.push({ id: this.nid('l'), type: 'line', p1_id: mp(g.p1_id), p2_id: mp(g.p2_id), construction: g.construction });
      else if (g.type === 'circle') { const id = this.nid('k'); this.sk.geo.push({ id, type: 'circle', c_id: mp(g.c_id), radius: g.radius, construction: g.construction }); C({ type: 'equal_radius_cc', c1_id: g.id, c2_id: id }); }
      else if (g.type === 'arc') {
        // lo specchio inverte il verso: inizio e fine si scambiano
        const c = mp(g.c_id), s = mp(g.end_id), e = mp(g.start_id);
        const K = this.P(c), S = this.P(s), E = this.P(e);
        const id = this.nid('a');
        this.sk.geo.push({ id, type: 'arc', c_id: c, radius: g.radius, start_id: s, end_id: e, start_angle: Math.atan2(S.y - K.y, S.x - K.x), end_angle: Math.atan2(E.y - K.y, E.x - K.x), construction: g.construction });
        C({ type: 'equal_radius_aa', a1_id: g.id, a2_id: id });
      }
    }
  }

  // ---------- raccordo e smusso 2D ----------
  /** Dati di un angolo tra esattamente due linee (null se non è un angolo). */
  cornerInfo(corner) {
    const lines = this.sk.geo.filter((g) => g.type === 'line' && !g.ref && !g.construction && (g.p1_id === corner || g.p2_id === corner));
    if (lines.length !== 2) return null;
    const C = this.P(corner);
    const other = (l) => this.P(l.p1_id === corner ? l.p2_id : l.p1_id);
    const P1 = other(lines[0]), P2 = other(lines[1]);
    const L1 = Math.hypot(P1.x - C.x, P1.y - C.y), L2 = Math.hypot(P2.x - C.x, P2.y - C.y);
    if (L1 < 1e-9 || L2 < 1e-9) return null;
    const u1 = [(P1.x - C.x) / L1, (P1.y - C.y) / L1], u2 = [(P2.x - C.x) / L2, (P2.y - C.y) / L2];
    const th = Math.acos(Math.max(-1, Math.min(1, u1[0] * u2[0] + u1[1] * u2[1])));
    if (th < 0.02 || th > Math.PI - 0.02) return null;
    return { lines, C, u1, u2, th, maxR: Math.min(L1, L2) * Math.tan(th / 2) * 0.98, maxD: Math.min(L1, L2) * 0.98 };
  }

  /** Il vertice resta come punto di costruzione sull'incrocio delle linee: le quote che lo usavano valgono ancora. */
  keepVirtualCorner(corner, lines) {
    const C = this.P(corner);
    const used = this.sk.geo.some((g) => ['p1_id', 'p2_id', 'c_id', 'start_id', 'end_id'].some((q) => g[q] === corner));
    if (!used && !C.ref) C.construction = true;
    this.sk.cons.push(
      { id: this.nid('c'), type: 'point_on_line_pl', p_id: corner, l_id: lines[0].id },
      { id: this.nid('c'), type: 'point_on_line_pl', p_id: corner, l_id: lines[1].id },
    );
  }

  filletCorner(corner, r, expr) {
    const { lines, C, u1, u2, th } = this.cornerInfo(corner);
    const dd = r / Math.tan(th / 2);
    const bis = norm2([u1[0] + u2[0], u1[1] + u2[1]]);
    const hk = r / Math.sin(th / 2);
    const t1 = this.nid('p'), t2 = this.nid('p'), k = this.nid('p');
    this.sk.geo.push(
      { id: t1, type: 'point', x: C.x + u1[0] * dd, y: C.y + u1[1] * dd, fixed: false },
      { id: t2, type: 'point', x: C.x + u2[0] * dd, y: C.y + u2[1] * dd, fixed: false },
      { id: k, type: 'point', x: C.x + bis[0] * hk, y: C.y + bis[1] * hk, fixed: false },
    );
    for (const [l, t] of [[lines[0], t1], [lines[1], t2]]) { if (l.p1_id === corner) l.p1_id = t; else l.p2_id = t; }
    const K = this.P(k), T1 = this.P(t1), T2 = this.P(t2);
    const a1 = Math.atan2(T1.y - K.y, T1.x - K.x), a2 = Math.atan2(T2.y - K.y, T2.x - K.x);
    const ccw = ((a2 - a1) % TAU + TAU) % TAU <= Math.PI;
    const aId = this.nid('a');
    this.sk.geo.push({ id: aId, type: 'arc', c_id: k, radius: r, start_id: ccw ? t1 : t2, end_id: ccw ? t2 : t1, start_angle: ccw ? a1 : a2, end_angle: ccw ? a2 : a1 });
    this.sk.cons.push(
      { id: this.nid('c'), type: 'tangent_la', l_id: lines[0].id, a_id: aId },
      { id: this.nid('c'), type: 'tangent_la', l_id: lines[1].id, a_id: aId },
      { id: this.nid('d'), type: 'arc_radius', a_id: aId, radius: r, expr, lx: K.x + bis[0] * r * 1.8, ly: K.y + bis[1] * r * 1.8 },
    );
    this.keepVirtualCorner(corner, lines);
  }

  chamferCorner(corner, d, expr) {
    const { lines, C, u1, u2 } = this.cornerInfo(corner);
    const t1 = this.nid('p'), t2 = this.nid('p');
    this.sk.geo.push(
      { id: t1, type: 'point', x: C.x + u1[0] * d, y: C.y + u1[1] * d, fixed: false },
      { id: t2, type: 'point', x: C.x + u2[0] * d, y: C.y + u2[1] * d, fixed: false },
    );
    for (const [l, t] of [[lines[0], t1], [lines[1], t2]]) { if (l.p1_id === corner) l.p1_id = t; else l.p2_id = t; }
    this.addLine(t1, t2, false);
    this.keepVirtualCorner(corner, lines);
    const grp = this.nid('q');
    const m1 = [C.x + u1[0] * d * 0.5, C.y + u1[1] * d * 0.5];
    this.sk.cons.push(
      { id: this.nid('d'), type: 'p2p_distance', p1_id: corner, p2_id: t1, distance: d, expr, grp, lx: m1[0] - u1[1] * 3, ly: m1[1] + u1[0] * 3 },
      { id: this.nid('d'), type: 'p2p_distance', p1_id: corner, p2_id: t2, distance: d, expr, grp, nolabel: true },
    );
  }

  // ---------- offset ----------
  /** Curve collegate a quella data tramite estremi in comune (stesso tipo: normale o costruzione). */
  chainOf(id) {
    const g0 = this.P(id);
    if (g0.type === 'circle') return [id];
    const ends = (g) => (g.type === 'line' ? [g.p1_id, g.p2_id] : g.type === 'arc' ? [g.start_id, g.end_id] : []);
    const curves = this.sk.geo.filter((g) => (g.type === 'line' || g.type === 'arc') && !g.ref && !!g.construction === !!g0.construction);
    const out = new Set([id]);
    const stack = [g0];
    while (stack.length) {
      const g = stack.pop();
      for (const p of ends(g)) for (const h of curves) if (!out.has(h.id) && ends(h).includes(p)) { out.add(h.id); stack.push(h); }
    }
    return [...out];
  }

  /** Calcola la geometria spostata (senza toccare lo schizzo). */
  offsetCompute(ids, d, flip) {
    const P = (id) => this.P(id);
    const ends = (g) => (g.type === 'line' ? [g.p1_id, g.p2_id] : [g.start_id, g.end_id]);
    const set = ids.map(P).filter((g) => g && !g.ref && g.type !== 'point');
    const done = new Set();
    const chains = [];
    for (const g of set) {
      if (done.has(g.id)) continue;
      if (g.type === 'circle') { done.add(g.id); chains.push({ circle: g }); continue; }
      // componente connessa dentro la selezione
      const comp = [g]; done.add(g.id);
      for (let i = 0; i < comp.length; i++) for (const h of set) if (!done.has(h.id) && h.type !== 'circle' && ends(h).some((p) => ends(comp[i]).includes(p))) { done.add(h.id); comp.push(h); }
      // ordine: si parte da un estremo libero se c'è
      const deg = new Map();
      for (const c of comp) for (const p of ends(c)) deg.set(p, (deg.get(p) || 0) + 1);
      if ([...deg.values()].some((n) => n > 2)) throw new Error('Il contorno si ramifica: seleziona un percorso senza diramazioni');
      let startP = [...deg.entries()].find(([, n]) => n === 1)?.[0] || ends(comp[0])[0];
      const used = new Set();
      const segs = [];
      let p = startP;
      while (segs.length < comp.length) {
        const c = comp.find((x) => !used.has(x.id) && ends(x).includes(p));
        if (!c) break;
        used.add(c.id);
        const rev = ends(c)[0] !== p;
        segs.push({ g: c, rev });
        p = ends(c)[rev ? 0 : 1];
      }
      chains.push({ segs, closed: p === startP && segs.length > 1 });
    }
    const out = [];
    for (const ch of chains) {
      if (ch.circle) {
        const r = ch.circle.radius + (flip ? -d : d);
        if (r <= 1e-6) throw new Error('Distanza troppo grande per un cerchio');
        out.push({ circle: ch.circle, r, sgn: flip ? -1 : 1 });
        continue;
      }
      // lato: per i contorni chiusi "fuori" di default, per quelli aperti a sinistra
      const poly = [];
      for (const s of ch.segs) { const a = P(ends(s.g)[s.rev ? 1 : 0]); poly.push([a.x, a.y]); if (s.g.type === 'arc') { const m = arcMid(this, s.g); poly.push([m.x, m.y]); } }
      let area = 0;
      for (let i = 0; i < poly.length; i++) { const a = poly[i], b = poly[(i + 1) % poly.length]; area += a[0] * b[1] - b[0] * a[1]; }
      let s = ch.closed ? (area > 0 ? -1 : 1) : 1;
      if (flip) s = -s;
      const off = ch.segs.map(({ g, rev }) => {
        if (g.type === 'line') {
          const a = P(rev ? g.p2_id : g.p1_id), b = P(rev ? g.p1_id : g.p2_id);
          const u = norm2([b.x - a.x, b.y - a.y]);
          const n = [-u[1] * s * d, u[0] * s * d];
          return { g, rev, kind: 'line', a: [a.x + n[0], a.y + n[1]], b: [b.x + n[0], b.y + n[1]] };
        }
        const K = P(g.c_id);
        const r = g.radius + (rev ? 1 : -1) * s * d;
        if (r <= 1e-6) throw new Error('Distanza troppo grande per un arco del contorno');
        const S = P(rev ? g.end_id : g.start_id), E = P(rev ? g.start_id : g.end_id);
        const at = (q) => { const u = norm2([q.x - K.x, q.y - K.y]); return [K.x + u[0] * r, K.y + u[1] * r]; };
        return { g, rev, kind: 'arc', c: [K.x, K.y], r, a: at(S), b: at(E), dr: r - g.radius };
      });
      // giunzioni: le curve spostate si incontrano nel loro punto d'incrocio più vicino
      const n = off.length;
      for (let i = 0; i < (ch.closed ? n : n - 1); i++) {
        const A = off[i], B = off[(i + 1) % n];
        if (Math.hypot(A.b[0] - B.a[0], A.b[1] - B.a[1]) < 1e-7) continue;
        const guess = [(A.b[0] + B.a[0]) / 2, (A.b[1] + B.a[1]) / 2];
        const X = meetCurves(A, B, guess) || guess;
        A.b = X; B.a = X;
      }
      out.push({ segs: off, closed: ch.closed });
    }
    return out;
  }

  offsetCommit(res, expr) {
    const grp = this.nid('q');
    let first = true;
    const dim = (o) => { this.sk.cons.push({ id: this.nid('d'), grp, ...o, ...(first ? {} : { nolabel: true }) }); first = false; };
    for (const ch of res) {
      if (ch.circle) {
        const id = this.nid('k');
        this.sk.geo.push({ id, type: 'circle', c_id: ch.circle.c_id, radius: ch.r, construction: ch.circle.construction });
        dim({ type: 'difference', param1: { o_id: id, prop: 'radius' }, param2: { o_id: ch.circle.id, prop: 'radius' }, difference: Math.abs(ch.r - ch.circle.radius), sign: ch.sgn, expr });
        continue;
      }
      const np = (q) => { const id = this.nid('p'); this.sk.geo.push({ id, type: 'point', x: q[0], y: q[1], fixed: false }); return id; };
      // punti di giunzione condivisi: ids[i] è l'inizio del tratto i, ids[i+1] la sua fine
      const ids = [np(ch.segs[0].a)];
      for (let i = 0; i < ch.segs.length; i++) ids.push(ch.closed && i === ch.segs.length - 1 ? ids[0] : np(ch.segs[i].b));
      ch.segs.forEach((s, i) => {
        const a = ids[i], b = ids[i + 1];
        if (s.kind === 'line') {
          const id = this.nid('l');
          this.sk.geo.push({ id, type: 'line', p1_id: s.rev ? b : a, p2_id: s.rev ? a : b, construction: s.g.construction });
          this.sk.cons.push({ id: this.nid('c'), type: 'parallel', l1_id: s.g.id, l2_id: id });
          const A = this.P(a);
          dim({ type: 'p2l_distance', p_id: a, l_id: s.g.id, distance: Math.abs(distToLine(A, this.P(s.g.p1_id), this.P(s.g.p2_id))), expr, lx: A.x, ly: A.y });
        } else {
          // arco concentrico: stesso centro, raggio spostato della stessa distanza
          const st = s.rev ? b : a, en = s.rev ? a : b;
          const S = this.P(st), E = this.P(en);
          const id = this.nid('a');
          this.sk.geo.push({ id, type: 'arc', c_id: s.g.c_id, radius: s.r, start_id: st, end_id: en, start_angle: Math.atan2(S.y - s.c[1], S.x - s.c[0]), end_angle: Math.atan2(E.y - s.c[1], E.x - s.c[0]), construction: s.g.construction });
          // il raggio si lega solo per un arco isolato: nelle giunzioni tangenti il vincolo in più renderebbe
          // il sistema singolare; lì bastano centro comune ed estremi sui lati spostati
          if (ch.segs.length === 1) dim({ type: 'difference', param1: { o_id: id, prop: 'radius' }, param2: { o_id: s.g.id, prop: 'radius' }, difference: Math.abs(s.dr), sign: Math.sign(s.dr) || 1, expr });
        }
      });
    }
  }

  // ---------- taglia ----------
  tapTrim(sx, sy, ptype) {
    const h = this.hit(sx, sy, ptype, { dims: false, glyphs: false, points: false, axes: false });
    if (!h) return;
    const g = this.P(h.id);
    const [x, y] = this.toK(sx, sy);
    const cuts = this.cutsOn(g);
    const ok = this.attempt(() => this.trimAt(g, [x, y], cuts), 'Taglio non applicabile con i vincoli presenti');
    if (ok) this.toast('Tagliato', 'ok');
  }

  /** Incroci di una curva con tutte le altre: [{ t, pt, other }] (t = parametro sulla curva). */
  cutsOn(g) {
    const me = curveOf(this, g);
    const out = [];
    for (const o of this.sk.geo) {
      if (o.id === g.id || o.ref || o.type === 'point') continue;
      for (const pt of curveMeet(me, curveOf(this, o))) {
        const t = paramOn(me, pt);
        if (t == null) continue;
        out.push({ t, pt, other: o.id });
      }
    }
    // anche i punti già presenti sulla curva (estremi di altre linee che la toccano)
    out.sort((a, b) => a.t - b.t);
    return out.filter((c, i) => i === 0 || c.t - out[i - 1].t > 1e-7);
  }

  trimAt(g, tap, cuts) {
    const me = curveOf(this, g);
    const tp = paramOn(me, tap, true);
    const span = me.kind === 'line' ? 1 : me.kind === 'circle' ? TAU : me.sw;
    const inner = cuts.filter((c) => (me.kind === 'circle' ? true : c.t > 1e-6 && c.t < span - 1e-6));
    if (!inner.length || (me.kind === 'circle' && inner.length < 2)) { this.removeCurves([g.id]); return; }
    const ptAt = (c) => this.pointAtCut(c);
    if (me.kind === 'circle') {
      // resta l'arco che va dal taglio dopo il tocco a quello prima
      let b = inner.find((c) => c.t > tp) || inner[0];
      let a = [...inner].reverse().find((c) => c.t < tp) || inner[inner.length - 1];
      const sId = ptAt(b), eId = ptAt(a);
      circleToArc(this, g, sId, eId);
      return;
    }
    const before = [...inner].reverse().find((c) => c.t < tp);
    const after = inner.find((c) => c.t > tp);
    const oldEnds = me.kind === 'line' ? [g.p1_id, g.p2_id] : [g.start_id, g.end_id];
    if (!before && !after) { this.removeCurves([g.id]); return; }
    if (!before) {
      const id = ptAt(after);
      if (me.kind === 'line') g.p1_id = id; else { g.start_id = id; g.start_angle = angOf(this, g, id); }
    } else if (!after) {
      const id = ptAt(before);
      if (me.kind === 'line') g.p2_id = id; else { g.end_id = id; g.end_angle = angOf(this, g, id); }
    } else {
      const ia = ptAt(before), ib = ptAt(after);
      if (me.kind === 'line') {
        const oldP2 = g.p2_id;
        g.p2_id = ia;
        const nl = this.nid('l');
        this.sk.geo.push({ id: nl, type: 'line', p1_id: ib, p2_id: oldP2, construction: g.construction });
        this.sk.cons.push({ id: this.nid('c'), type: 'point_on_line_pl', p_id: ib, l_id: g.id }, { id: this.nid('c'), type: 'point_on_line_pl', p_id: oldP2, l_id: g.id });
      } else {
        const oldEnd = g.end_id, oldEa = g.end_angle;
        g.end_id = ia; g.end_angle = angOf(this, g, ia);
        const na = this.nid('a');
        this.sk.geo.push({ id: na, type: 'arc', c_id: g.c_id, radius: g.radius, start_id: ib, end_id: oldEnd, start_angle: angOf(this, g, ib), end_angle: oldEa, construction: g.construction });
        this.sk.cons.push({ id: this.nid('c'), type: 'equal_radius_aa', a1_id: g.id, a2_id: na });
      }
    }
    this.dropOrphans(oldEnds);
  }

  /** Punto sul taglio: riusa un punto esistente lì, altrimenti lo crea vincolato all'altra curva. */
  pointAtCut(c) {
    const ex = this.sk.geo.find((p) => p.type === 'point' && !HIDDEN_PTS.has(p.id) && Math.hypot(p.x - c.pt[0], p.y - c.pt[1]) < 1e-6);
    if (ex) return ex.id;
    const id = this.nid('p');
    this.sk.geo.push({ id, type: 'point', x: c.pt[0], y: c.pt[1], fixed: false });
    const o = this.P(c.other);
    const cid = this.nid('c');
    if (o.type === 'line') this.sk.cons.push({ id: cid, type: 'point_on_line_pl', p_id: id, l_id: o.id });
    else if (o.type === 'circle') this.sk.cons.push({ id: cid, type: 'point_on_circle', p_id: id, c_id: o.id });
    else this.sk.cons.push({ id: cid, type: 'point_on_arc', p_id: id, a_id: o.id });
    return id;
  }

  removeCurves(ids) {
    const gs = ids.map((id) => this.P(id)).filter(Boolean);
    const ends = gs.flatMap((g) => [g.p1_id, g.p2_id, g.start_id, g.end_id, g.type === 'arc' || g.type === 'circle' ? g.c_id : null].filter(Boolean));
    this.sk.geo = this.sk.geo.filter((g) => !ids.includes(g.id));
    this.sk.cons = this.sk.cons.filter((c) => !consRefs(c).some((r) => ids.includes(r)));
    this.dropOrphans(ends);
  }

  /** Elimina i punti che non usa più nessuna curva (tranne i punti singoli voluti e quelli di riferimento). */
  dropOrphans(pts) {
    for (const id of pts) {
      const p = this.P(id);
      if (!p || p.ref || p.construction) continue;
      const used = this.sk.geo.some((g) => ['p1_id', 'p2_id', 'c_id', 'start_id', 'end_id'].some((q) => g[q] === id));
      if (used) continue;
      this.sk.geo = this.sk.geo.filter((g) => g.id !== id);
      this.sk.cons = this.sk.cons.filter((c) => !consRefs(c).includes(id));
    }
  }

  /** Anteprima dei comandi a campi (offset, raccordo, smusso). */
  cmdPreviewSvg() {
    const c = this.cmd;
    if (!c || !this.cmdReady()) return '';
    const nf = c.spec.fields.find((f) => f.kind === 'num');
    let v;
    try { v = this.evalExpr(c.vals[nf ? nf.k : 'x']); } catch { return ''; }
    if (!(v > 0)) return '';
    const S = (p) => this.toS(p[0], p[1]).map((n) => n.toFixed(1)).join(' ');
    const out = [];
    if (c.type === 'offset') {
      let res;
      try { res = this.offsetCompute(c.vals.objects, v, c.vals.flip); } catch { return ''; }
      for (const ch of res) {
        if (ch.circle) { const k = this.P(ch.circle.c_id); const [x, y] = this.toS(k.x, k.y); out.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(ch.r * this.view.s).toFixed(1)}" class="sk-preview"/>`); continue; }
        for (const s of ch.segs) {
          if (s.kind === 'line') out.push(`<path d="M${S(s.a)}L${S(s.b)}" class="sk-preview"/>`);
          else {
            const a0 = Math.atan2(s.a[1] - s.c[1], s.a[0] - s.c[0]), a1 = Math.atan2(s.b[1] - s.c[1], s.b[0] - s.c[0]);
            const [st, en] = s.rev ? [a1, a0] : [a0, a1];
            out.push(`<path d="${this.arcPath({ radius: s.r, start_angle: st, end_angle: en }, { x: s.c[0], y: s.c[1] })}" class="sk-preview"/>`);
          }
        }
      }
    } else if (c.type === 'sfillet' || c.type === 'schamfer') {
      for (const p of c.vals.corners) {
        const ci = this.cornerInfo(p);
        if (!ci) continue;
        const lim = c.type === 'sfillet' ? ci.maxR : ci.maxD;
        const bad = v > lim;
        if (c.type === 'sfillet') {
          const rr = Math.min(v, lim);
          const dd = rr / Math.tan(ci.th / 2);
          const T1 = [ci.C.x + ci.u1[0] * dd, ci.C.y + ci.u1[1] * dd], T2 = [ci.C.x + ci.u2[0] * dd, ci.C.y + ci.u2[1] * dd];
          const bis = norm2([ci.u1[0] + ci.u2[0], ci.u1[1] + ci.u2[1]]);
          const hk = rr / Math.sin(ci.th / 2);
          const K = [ci.C.x + bis[0] * hk, ci.C.y + bis[1] * hk];
          const a1 = Math.atan2(T1[1] - K[1], T1[0] - K[0]), a2 = Math.atan2(T2[1] - K[1], T2[0] - K[0]);
          const ccw = ((a2 - a1) % TAU + TAU) % TAU <= Math.PI;
          const r = rr * this.view.s;
          out.push(`<path d="M${S(T1)}A${r.toFixed(1)} ${r.toFixed(1)} 0 0 ${ccw ? 0 : 1} ${S(T2)}" class="sk-preview ${bad ? 'bad' : ''}"/>`);
        } else {
          const dd = Math.min(v, lim);
          out.push(`<path d="M${S([ci.C.x + ci.u1[0] * dd, ci.C.y + ci.u1[1] * dd])}L${S([ci.C.x + ci.u2[0] * dd, ci.C.y + ci.u2[1] * dd])}" class="sk-preview ${bad ? 'bad' : ''}"/>`);
        }
      }
    }
    return out.join('');
  }

  evalExpr(s) { return evaluate(s, this.getScope()); }

  makeArc(s, e, m) {
    const c = circle3(s, m, e);
    if (!c) { this.toast('I tre punti sono allineati', 'warn'); return; }
    const ccw = (m.x - s.x) * (e.y - m.y) - (m.y - s.y) * (e.x - m.x) > 0;
    const sId = this.materialize(s), eId = this.materialize(e);
    const cId = this.nid('p');
    this.sk.geo.push({ id: cId, type: 'point', x: c.x, y: c.y, fixed: false });
    const [st, en] = ccw ? [sId, eId] : [eId, sId];
    const P1 = this.P(st), P2 = this.P(en);
    this.sk.geo.push({
      id: this.nid('a'), type: 'arc', c_id: cId, radius: c.r,
      start_angle: Math.atan2(P1.y - c.y, P1.x - c.x), end_angle: Math.atan2(P2.y - c.y, P2.x - c.x), start_id: st, end_id: en,
    });
  }

  dragTo(d, sx, sy) {
    const [x, y] = this.toK(sx, sy);
    if (d.kind === 'label') {
      const c = this.sk.cons.find((k) => k.id === d.id);
      if (c) { c.lx = x; c.ly = y; this.render(); }
      return;
    }
    if (d.kind === 'radius') {
      const g = this.P(d.id);
      const c = this.P(g.c_id);
      const r = Math.hypot(x - c.x, y - c.y);
      g.radius = Math.max(r, 0.01);
      if (g.type === 'arc') this.resolve(); else this.resolve();
      this.render();
      return;
    }
    const sn = (v) => (this.snapGrid ? Math.round(v / this.gridStep()) * this.gridStep() : v);
    const drags = d.kind === 'point' ? [{ id: d.id, x: sn(x), y: sn(y) }] : d.ids.map((id, i) => ({ id, x: x + d.off[i][0], y: y + d.off[i][1] }));
    // aggiorno subito le coordinate e poi lascio che il solver rispetti i vincoli
    this.resolve(drags);
    this.render();
  }

  tapSelect(h) {
    if (!h) { this.sel.clear(); this.render(); this.emit(); return; }
    if (h.kind === 'dim') { this.editDim(h.id); return; }
    const id = h.id;
    if (this.sel.has(id)) this.sel.delete(id); else this.sel.add(id);
    this.render();
    this.emit();
  }

  // ---------- quote ----------
  tapDim(sx, sy, ptype) {
    const h = this.hit(sx, sy, ptype, { glyphs: false });
    if (h && h.kind === 'dim') { this.editDim(h.id); return; }
    const st = this.state && this.state.kind === 'dim' ? this.state : (this.state = { kind: 'dim', items: [] });
    const [x, y] = this.toK(sx, sy);
    if (!h) {
      if (st.items.length === 1) {
        const it = this.P(st.items[0].id);
        if (it.type === 'line' && !it.ref) { this.createDim({ type: 'p2p_distance', p1_id: it.p1_id, p2_id: it.p2_id }, [x, y]); return; }
      }
      this.state = null; this.sel.clear(); this.render(); this.emit();
      return;
    }
    const g = this.P(h.id);
    if (h.kind === 'curve' && (g.type === 'circle' || g.type === 'arc') && !st.items.length) {
      this.createDim(g.type === 'circle' ? { type: 'circle_diameter', c_id: g.id } : { type: 'arc_radius', a_id: g.id }, [x, y]);
      return;
    }
    st.items.push(h);
    this.sel.add(h.id);
    if (st.items.length === 2) {
      const [A, B] = st.items.map((i) => this.P(i.id));
      const isL = (q) => q.type === 'line', isP = (q) => q.type === 'point';
      let c = null;
      if (isP(A) && isP(B)) c = { type: 'p2p_distance', p1_id: A.id, p2_id: B.id };
      else if (isP(A) && isL(B)) c = { type: 'p2l_distance', p_id: A.id, l_id: B.id };
      else if (isL(A) && isP(B)) c = { type: 'p2l_distance', p_id: B.id, l_id: A.id };
      else if (isL(A) && isL(B)) {
        const d = (l) => { const a = this.P(l.p1_id), b = this.P(l.p2_id); return norm2([b.x - a.x, b.y - a.y]); };
        const da = d(A), db = d(B);
        if (Math.abs(da[0] * db[1] - da[1] * db[0]) < 1e-6) c = { type: 'p2l_distance', p_id: B.p1_id, l_id: A.id };
        else c = { type: 'l2l_angle_ll', l1_id: A.id, l2_id: B.id };
      }
      if (c) this.createDim(c, [x, y]); else { this.toast('Combinazione non quotabile', 'warn'); this.state = null; this.sel.clear(); this.render(); }
      return;
    }
    this.render();
    this.emit();
  }

  async createDim(c, at) {
    c.id = this.nid('d');
    c.lx = at[0]; c.ly = at[1];
    const v = measureDim(c, this.sk.geo);
    c.expr = fmt(v);
    const df = dimField(c);
    c[df.k] = df.deg ? (v * Math.PI) / 180 : v;
    this.state = null;
    this.sel.clear();
    const ok = this.attempt(() => this.sk.cons.push(c), 'Quota non applicabile: lo schizzo è già vincolato qui');
    if (ok) await this.editDim(c.id, true);
  }

  async editDim(id, fresh = false) {
    const c = this.sk.cons.find((k) => k.id === id);
    if (!c) return;
    const isDist = c.type === 'p2p_distance' || (c.type === 'difference' && c.param1 && (c.param1.prop === 'x' || c.param1.prop === 'y'));
    const options = isDist ? [['al', 'Allineata'], ['h', 'Orizzontale'], ['v', 'Verticale']] : null;
    const curOpt = c.type === 'difference' ? (c.param1.prop === 'x' ? 'h' : 'v') : 'al';
    const deg = c.type === 'l2l_angle_ll';
    const res = await this.promptValue({ title: deg ? 'Angolo (°)' : c.type.includes('diameter') ? 'Diametro (mm)' : c.type.includes('radius') ? 'Raggio (mm)' : 'Distanza (mm)', value: c.expr, options, option: curOpt, allowDelete: !fresh });
    if (!res) return;
    if (res.remove) { this.attempt(() => { this.sk.cons = this.sk.cons.filter((k) => k.id !== id); }); return; }
    this.attempt(() => {
      const k = this.sk.cons.find((q) => q.id === id);
      if (options && res.option !== curOpt) {
        // conversione allineata <-> orizzontale/verticale
        const p1 = k.type === 'difference' ? k.param2.o_id : k.p1_id;
        const p2 = k.type === 'difference' ? k.param1.o_id : k.p2_id;
        for (const f of ['p1_id', 'p2_id', 'param1', 'param2', 'distance', 'difference', 'sign']) delete k[f];
        if (res.option === 'al') { k.type = 'p2p_distance'; k.p1_id = p1; k.p2_id = p2; } else {
          const prop = res.option === 'h' ? 'x' : 'y';
          const A = this.P(p1), B = this.P(p2);
          k.type = 'difference';
          k.param1 = { o_id: p2, prop };
          k.param2 = { o_id: p1, prop };
          k.sign = B[prop] - A[prop] < 0 ? -1 : 1;
        }
      }
      k.expr = res.value;
      // quote di gruppo (offset, smusso): stessa misura per tutte
      if (k.grp) for (const q of this.sk.cons) if (q.grp === k.grp) q.expr = res.value;
    }, 'Valore non applicabile: controlla la quota o i vincoli');
  }

  // ---------- vincoli dalla selezione ----------
  selTypes() {
    const out = { point: 0, line: 0, circle: 0, arc: 0, cons: 0, axis: 0 };
    for (const id of this.sel) {
      const g = this.P(id);
      if (!g) { out.cons++; continue; }
      if (g.ref && g.type === 'line') out.axis++;
      else out[g.type]++;
    }
    return out;
  }

  applyConstraint(kind) {
    const items = [...this.sel].map((id) => this.P(id)).filter(Boolean);
    const pts = items.filter((g) => g.type === 'point');
    const lines = items.filter((g) => g.type === 'line');
    const circs = items.filter((g) => g.type === 'circle' || g.type === 'arc');
    const cs = [];
    const C = (o) => cs.push({ id: this.nid('c'), ...o });
    const fail = (m) => { this.toast(m, 'warn'); };
    switch (kind) {
      case 'coincident':
        if (pts.length === 2) C({ type: 'p2p_coincident', p1_id: pts[0].id, p2_id: pts[1].id });
        else if (pts.length === 1 && lines.length === 1) C({ type: 'point_on_line_pl', p_id: pts[0].id, l_id: lines[0].id });
        else if (pts.length === 1 && circs.length === 1) C(circs[0].type === 'circle' ? { type: 'point_on_circle', p_id: pts[0].id, c_id: circs[0].id } : { type: 'point_on_arc', p_id: pts[0].id, a_id: circs[0].id });
        else return fail('Seleziona due punti, o un punto e una curva');
        break;
      case 'horizontal': case 'vertical': {
        const t = kind === 'horizontal' ? 'horizontal' : 'vertical';
        const ls = lines.filter((l) => !l.ref);
        if (ls.length) ls.forEach((l) => C({ type: `${t}_l`, l_id: l.id }));
        else if (pts.length === 2) C({ type: `${t}_pp`, p1_id: pts[0].id, p2_id: pts[1].id });
        else return fail('Seleziona linee o due punti');
        break;
      }
      case 'parallel': case 'perpendicular':
        if (lines.length !== 2) return fail('Seleziona due linee');
        C({ type: kind === 'parallel' ? 'parallel' : 'perpendicular_ll', l1_id: lines[0].id, l2_id: lines[1].id });
        break;
      case 'tangent': {
        if (lines.length === 1 && circs.length === 1) {
          const c = circs[0];
          C(c.type === 'circle' ? { type: 'tangent_lc', l_id: lines[0].id, c_id: c.id } : { type: 'tangent_la', l_id: lines[0].id, a_id: c.id });
        } else if (circs.length === 2) {
          const [a, b] = circs;
          if (a.type === 'circle' && b.type === 'circle') C({ type: 'tangent_cc', c1_id: a.id, c2_id: b.id });
          else if (a.type === 'arc' && b.type === 'arc') C({ type: 'tangent_aa', a1_id: a.id, a2_id: b.id });
          else { const c = a.type === 'circle' ? a : b, ar = a.type === 'arc' ? a : b; C({ type: 'tangent_ca', c_id: c.id, a_id: ar.id }); }
        } else return fail('Seleziona una linea e una curva, o due curve');
        break;
      }
      case 'equal':
        if (lines.length >= 2) for (let i = 1; i < lines.length; i++) C({ type: 'equal_length', l1_id: lines[0].id, l2_id: lines[i].id });
        else if (circs.length >= 2) for (let i = 1; i < circs.length; i++) {
          const a = circs[0], b = circs[i];
          if (a.type === 'circle' && b.type === 'circle') C({ type: 'equal_radius_cc', c1_id: a.id, c2_id: b.id });
          else if (a.type === 'arc' && b.type === 'arc') C({ type: 'equal_radius_aa', a1_id: a.id, a2_id: b.id });
          else { const c = a.type === 'circle' ? a : b, ar = a.type === 'arc' ? a : b; C({ type: 'equal_radius_ca', c_id: c.id, a_id: ar.id }); }
        }
        else return fail('Seleziona due o più linee, o due o più cerchi/archi');
        break;
      case 'midpoint':
        if (pts.length === 1 && lines.length === 1) C({ type: 'p2p_symmetric_ppp', p1_id: lines[0].p1_id, p2_id: lines[0].p2_id, p_id: pts[0].id });
        else return fail('Seleziona un punto e una linea');
        break;
      case 'concentric':
        if (circs.length === 2) C({ type: 'p2p_coincident', p1_id: circs[0].c_id, p2_id: circs[1].c_id });
        else if (circs.length === 1 && pts.length === 1) C({ type: 'p2p_coincident', p1_id: circs[0].c_id, p2_id: pts[0].id });
        else return fail('Seleziona due cerchi o archi');
        break;
      case 'symmetric':
        if (pts.length === 2 && lines.length === 1) C({ type: 'p2p_symmetric_ppl', p1_id: pts[0].id, p2_id: pts[1].id, l_id: lines[0].id });
        else return fail('Seleziona due punti e la linea di simmetria');
        break;
      case 'fix': {
        const targets = pts.filter((p) => !p.ref);
        if (!targets.length) return fail('Seleziona dei punti');
        this.attempt(() => targets.forEach((p) => { const q = this.P(p.id); q.fixed = !q.fixed; }));
        this.sel.clear(); this.render(); this.emit();
        return;
      }
      default: return;
    }
    if (this.attempt(() => this.sk.cons.push(...cs))) { this.sel.clear(); this.render(); this.emit(); }
  }

  toggleConstruction() {
    const curves = [...this.sel].map((id) => this.P(id)).filter((g) => g && g.type !== 'point' && !g.ref);
    if (!curves.length) { this.toast('Seleziona linee, cerchi o archi', 'warn'); return; }
    this.push();
    const on = !curves.every((g) => g.construction);
    curves.forEach((g) => { g.construction = on; });
    this.sel.clear();
    this.changed();
  }

  deleteSelection() {
    if (!this.sel.size) { this.toast('Seleziona cosa eliminare', 'warn'); return; }
    this.push();
    const del = new Set();
    for (const id of this.sel) {
      const g = this.P(id);
      if (g && g.ref) continue;
      del.add(id);
    }
    // eliminando un punto spariscono le curve che lo usano
    for (const g of this.sk.geo) if (['p1_id', 'p2_id', 'c_id', 'start_id', 'end_id'].some((k) => g[k] && del.has(g[k]))) del.add(g.id);
    // i punti rimasti senza curve (e non creati come punti singoli) si eliminano con la curva
    const removedCurves = this.sk.geo.filter((g) => del.has(g.id) && g.type !== 'point');
    const stillUsed = new Set();
    for (const g of this.sk.geo) if (!del.has(g.id)) for (const k of ['p1_id', 'p2_id', 'c_id', 'start_id', 'end_id']) if (g[k]) stillUsed.add(g[k]);
    for (const c of removedCurves) for (const k of ['p1_id', 'p2_id', 'c_id', 'start_id', 'end_id']) if (c[k] && !stillUsed.has(c[k]) && !this.P(c[k]).ref) del.add(c[k]);
    this.sk.geo = this.sk.geo.filter((g) => !del.has(g.id));
    this.sk.cons = this.sk.cons.filter((c) => !del.has(c.id) && !consRefs(c).some((id) => del.has(id)));
    this.sel.clear();
    this.state = null;
    this.resolve();
    this.changed();
  }

  cancel() {
    if (this.cmd) { this.cmdCancel(); return true; }
    if (this.hasLocks()) { this.clearLocks(); if (this.lastCursor) this.trackCursor(...this.lastCursor, this.lastPointer || 'mouse'); this.emit(); return true; }
    if (this.state) { this.state = null; this.sel.clear(); this.render(); this.emit(); return true; }
    if (this.sel.size) { this.sel.clear(); this.render(); this.emit(); return true; }
    return false;
  }

  // ---------- eventi ----------
  bind() {
    const el = this.svg;
    el.addEventListener('pointerdown', (e) => {
      if (!this.active) return;
      el.setPointerCapture(e.pointerId);
      const r = el.getBoundingClientRect();
      this.pointers.set(e.pointerId, { x: e.clientX - r.left, y: e.clientY - r.top });
      if (this.pointers.size === 2) {
        // due dita: annullo il gesto singolo e passo a pan/zoom
        this.gesture = null;
        if (this.state && this.state.fresh && this.state.kind !== 'dim') this.state = null;
        const [a, b] = [...this.pointers.values()];
        this.pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), m: [(a.x + b.x) / 2, (a.y + b.y) / 2], view: { ...this.view } };
        this.render();
        return;
      }
      if (this.pointers.size > 2) return;
      this.down(e, e.clientX - r.left, e.clientY - r.top);
    });
    el.addEventListener('pointermove', (e) => {
      if (!this.active) return;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      if (this.pointers.has(e.pointerId)) this.pointers.set(e.pointerId, { x, y });
      if (this.pinch && this.pointers.size >= 2) {
        const [a, b] = [...this.pointers.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        const m = [(a.x + b.x) / 2, (a.y + b.y) / 2];
        const v0 = this.pinch.view;
        const s = Math.min(500, Math.max(0.02, v0.s * (d / Math.max(this.pinch.d, 1))));
        // il punto dello schizzo sotto il centro iniziale resta sotto il centro attuale
        const kx = (this.pinch.m[0] - this.W / 2) / v0.s + v0.cx;
        const ky = -(this.pinch.m[1] - this.H / 2) / v0.s + v0.cy;
        this.view = { s, cx: kx - (m[0] - this.W / 2) / s, cy: ky + (m[1] - this.H / 2) / s };
        this.vp.setSketchView(this.view);
        this.render();
        return;
      }
      if (this.pointers.size > 1) return;
      if (!this.pointers.size && e.pointerType === 'mouse') {
        // anteprima col mouse senza tasti premuti
        this.trackCursor(x, y, 'mouse');
        return;
      }
      this.move(e, x, y);
    });
    const end = (e) => {
      if (!this.active) return;
      const had = this.pointers.has(e.pointerId);
      this.pointers.delete(e.pointerId);
      if (this.pinch) { if (!this.pointers.size) this.pinch = null; return; }
      if (!had || e.type === 'pointercancel') { this.gesture = null; return; }
      const r = el.getBoundingClientRect();
      this.up(e, e.clientX - r.left, e.clientY - r.top);
    };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
    el.addEventListener('dblclick', () => { if (this.state && this.state.kind === 'line') { this.state = null; this.render(); } });
    el.addEventListener('wheel', (e) => {
      if (!this.active) return;
      e.preventDefault();
      const r = el.getBoundingClientRect();
      const mx = e.clientX - r.left, my = e.clientY - r.top;
      const [kx, ky] = this.toK(mx, my);
      const s = Math.min(500, Math.max(0.02, this.view.s * Math.exp(-e.deltaY * 0.0015)));
      this.view = { s, cx: kx - (mx - this.W / 2) / s, cy: ky + (my - this.H / 2) / s };
      this.vp.setSketchView(this.view);
      this.render();
    }, { passive: false });
  }

  // ---------- disegno ----------
  render() {
    if (!this.active) return;
    const W = this.W, H = this.H;
    this.svg.setAttribute('width', W);
    this.svg.setAttribute('height', H);
    this.svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const out = [];
    const S = (x, y) => this.toS(x, y);
    const f1 = (n) => n.toFixed(1);
    // griglia adattiva
    const v = this.view;
    let step = 1;
    step = this.gridStep();
    const [x0, y1] = this.toK(0, 0), [x1, y0] = this.toK(W, H);
    const grid = [], major = [];
    for (let x = Math.ceil(x0 / step) * step; x <= x1; x += step) { const sx = f1(S(x, 0)[0]); (Math.abs(x / (step * 5) - Math.round(x / (step * 5))) < 1e-6 ? major : grid).push(`M${sx} 0V${H}`); }
    for (let y = Math.ceil(y0 / step) * step; y <= y1; y += step) { const sy = f1(S(0, y)[1]); (Math.abs(y / (step * 5) - Math.round(y / (step * 5))) < 1e-6 ? major : grid).push(`M0 ${sy}H${W}`); }
    out.push(`<path d="${grid.join('')}" class="sk-grid"/><path d="${major.join('')}" class="sk-grid major"/>`);
    // profili chiusi
    if (!this.regions) { try { this.regions = findRegions(this.sk.geo); } catch { this.regions = []; } }
    for (const r of this.regions) {
      const d = [r.poly, ...r.holePolys].map((pl) => 'M' + pl.map(([x, y]) => S(x, y).map(f1).join(' ')).join('L') + 'Z').join('');
      out.push(`<path d="${d}" class="sk-region" fill-rule="evenodd"/>`);
    }
    // assi
    const mAxis = this.cmd && this.cmd.vals.axis ? this.cmd.vals.axis[0] : null;
    const [ox, oy] = S(0, 0);
    out.push(`<path d="M0 ${f1(oy)}H${W}" class="sk-axis x ${this.sel.has('AX') || mAxis === 'AX' ? 'sel' : ''}"/><path d="M${f1(ox)} 0V${H}" class="sk-axis y ${this.sel.has('AY') || mAxis === 'AY' ? 'sel' : ''}"/>`);
    const full = this.status && this.status.dof === 0;
    const conflict = new Set((this.status && this.status.conflicting) || []);
    // curve
    for (const g of this.sk.geo) {
      if (g.ref || g.type === 'point') continue;
      const cls = ['sk-curve', g.construction ? 'cons' : '', full ? 'full' : '', this.sel.has(g.id) ? 'sel' : '', mAxis === g.id ? 'maxis' : ''].join(' ');
      if (g.type === 'line') {
        const a = this.P(g.p1_id), b = this.P(g.p2_id);
        const [ax, ay] = S(a.x, a.y), [bx, by] = S(b.x, b.y);
        out.push(`<path d="M${f1(ax)} ${f1(ay)}L${f1(bx)} ${f1(by)}" class="${cls}"/>`);
      } else if (g.type === 'circle') {
        const c = this.P(g.c_id);
        const [cx, cy] = S(c.x, c.y);
        out.push(`<circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(g.radius * v.s)}" class="${cls}"/>`);
      } else if (g.type === 'arc') {
        out.push(`<path d="${this.arcPath(g)}" class="${cls}"/>`);
      }
    }
    // punti
    const used = new Set();
    for (const g of this.sk.geo) for (const k of ['p1_id', 'p2_id', 'c_id', 'start_id', 'end_id']) if (g[k] && !g.ref) used.add(g[k]);
    for (const g of this.sk.geo) {
      if (g.type !== 'point' || HIDDEN_PTS.has(g.id)) continue;
      const [x, y] = S(g.x, g.y);
      if (g.id === 'O') { out.push(`<circle cx="${f1(x)}" cy="${f1(y)}" r="5" class="sk-origin ${this.sel.has('O') ? 'sel' : ''}"/>`); continue; }
      const lone = !used.has(g.id);
      const cls = ['sk-pt', lone ? 'lone' : '', g.fixed ? 'fixed' : '', g.construction ? 'cpt' : '', this.sel.has(g.id) ? 'sel' : '', full ? 'full' : ''].join(' ');
      out.push(lone ? `<path d="M${f1(x - 6)} ${f1(y)}H${f1(x + 6)}M${f1(x)} ${f1(y - 6)}V${f1(y + 6)}" class="${cls}"/><circle cx="${f1(x)}" cy="${f1(y)}" r="3" class="${cls}"/>` : `<circle cx="${f1(x)}" cy="${f1(y)}" r="${g.fixed ? 4.5 : 3.5}" class="${cls}"/>`);
    }
    // vincoli geometrici
    this.glyphBoxes = [];
    const glyphCount = new Map();
    for (const c of this.sk.cons) {
      const gl = GLYPH[c.type];
      if (!gl || c.type === 'p2p_coincident') continue;
      const anchor = this.consAnchor(c);
      if (!anchor) continue;
      const key = anchor.map((n) => Math.round(n / 4)).join(',');
      const k = glyphCount.get(key) || 0;
      glyphCount.set(key, k + 1);
      const [x, y] = [anchor[0] + 12 + k * 18, anchor[1] - 12];
      this.glyphBoxes.push({ id: c.id, x, y });
      out.push(`<g class="sk-glyph ${this.sel.has(c.id) ? 'sel' : ''} ${conflict.has(c.id) ? 'bad' : ''}"><rect x="${f1(x - 8)}" y="${f1(y - 8)}" width="16" height="16" rx="4"/><text x="${f1(x)}" y="${f1(y + 4.2)}">${gl}</text></g>`);
    }
    // quote
    this.labelBoxes = [];
    for (const c of this.sk.cons) if (DIM_TYPES.has(c.type) && !c.nolabel) out.push(this.dimSvg(c, conflict.has(c.id)));
    // anteprima strumento
    out.push(this.previewSvg());
    out.push(this.cmdPreviewSvg());
    this.svg.innerHTML = out.join('');
  }

  arcPath(g, center = null) {
    const c = center || this.P(g.c_id);
    const a0 = g.start_angle, a1 = g.end_angle;
    let sw = a1 - a0;
    while (sw <= 0) sw += TAU;
    while (sw > TAU) sw -= TAU;
    const [sx, sy] = this.toS(c.x + g.radius * Math.cos(a0), c.y + g.radius * Math.sin(a0));
    const [ex, ey] = this.toS(c.x + g.radius * Math.cos(a1), c.y + g.radius * Math.sin(a1));
    const r = g.radius * this.view.s;
    return `M${sx.toFixed(1)} ${sy.toFixed(1)}A${r.toFixed(1)} ${r.toFixed(1)} 0 ${sw > Math.PI ? 1 : 0} 0 ${ex.toFixed(1)} ${ey.toFixed(1)}`;
  }

  consAnchor(c) {
    const mid = (l) => { const a = this.P(l.p1_id), b = this.P(l.p2_id); return this.toS((a.x + b.x) / 2, (a.y + b.y) / 2); };
    const curveAnchor = (id) => {
      const g = this.P(id);
      if (!g) return null;
      if (g.type === 'line') return g.ref ? this.toS(0, 0) : mid(g);
      if (g.type === 'circle') { const k = this.P(g.c_id); return this.toS(k.x + g.radius * 0.707, k.y + g.radius * 0.707); }
      if (g.type === 'arc') { const k = this.P(g.c_id); const m = (g.start_angle + g.end_angle) / 2 + (g.end_angle < g.start_angle ? Math.PI : 0); return this.toS(k.x + g.radius * Math.cos(m), k.y + g.radius * Math.sin(m)); }
      if (g.type === 'point') return this.toS(g.x, g.y);
      return null;
    };
    const id = c.l_id || c.l1_id || c.c_id || c.a_id || c.c1_id || c.a1_id || c.p_id || c.p1_id;
    return curveAnchor(id);
  }

  dimSvg(c, bad) {
    const S = (x, y) => this.toS(x, y);
    const f1 = (n) => n.toFixed(1);
    const P = (id) => this.P(id);
    let path = '';
    let val = measureDim(c, this.sk.geo);
    const isAngle = c.type === 'l2l_angle_ll';
    let lx = c.lx, ly = c.ly;
    try {
      if (c.type === 'p2p_distance' || c.type === 'difference') {
        const a = c.type === 'difference' ? P(c.param2.o_id) : P(c.p1_id);
        const b = c.type === 'difference' ? P(c.param1.o_id) : P(c.p2_id);
        let A1, B1;
        if (c.type === 'difference' && c.param1.prop === 'x') { A1 = [a.x, ly]; B1 = [b.x, ly]; }
        else if (c.type === 'difference') { A1 = [lx, a.y]; B1 = [lx, b.y]; }
        else {
          const u = norm2([b.x - a.x, b.y - a.y]);
          const n = [-u[1], u[0]];
          const d = (lx - a.x) * n[0] + (ly - a.y) * n[1];
          A1 = [a.x + n[0] * d, a.y + n[1] * d]; B1 = [b.x + n[0] * d, b.y + n[1] * d];
        }
        const [ax, ay] = S(a.x, a.y), [bx, by] = S(b.x, b.y), [a1x, a1y] = S(...A1), [b1x, b1y] = S(...B1);
        path = `M${f1(ax)} ${f1(ay)}L${f1(a1x)} ${f1(a1y)}M${f1(bx)} ${f1(by)}L${f1(b1x)} ${f1(b1y)}M${f1(a1x)} ${f1(a1y)}L${f1(b1x)} ${f1(b1y)}`;
        path += arrowHeads([a1x, a1y], [b1x, b1y]);
      } else if (c.type === 'p2l_distance') {
        const p = P(c.p_id), l = P(c.l_id), a = P(l.p1_id), b = P(l.p2_id);
        const t = lineT([p.x, p.y], [a.x, a.y], [b.x, b.y]);
        const F = [a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t];
        const [px, py] = S(p.x, p.y), [fx, fy] = S(...F);
        path = `M${f1(px)} ${f1(py)}L${f1(fx)} ${f1(fy)}` + arrowHeads([px, py], [fx, fy]);
      } else if (c.type === 'circle_diameter' || c.type === 'arc_diameter' || c.type === 'circle_radius' || c.type === 'arc_radius') {
        const g = P(c.c_id || c.a_id), k = P(g.c_id);
        const u = norm2([lx - k.x, ly - k.y]);
        const dia = c.type.includes('diameter');
        const A = dia ? [k.x - u[0] * g.radius, k.y - u[1] * g.radius] : [k.x, k.y];
        const B = [k.x + u[0] * g.radius, k.y + u[1] * g.radius];
        const [ax, ay] = S(...A), [bx, by] = S(...B), [lsx, lsy] = S(lx, ly);
        path = `M${f1(ax)} ${f1(ay)}L${f1(bx)} ${f1(by)}L${f1(lsx)} ${f1(lsy)}` + arrowHeads([ax, ay], [bx, by], !dia);
      } else if (isAngle) {
        const l1 = P(c.l1_id), l2 = P(c.l2_id);
        let X = lineIntersect(P(l1.p1_id), P(l1.p2_id), P(l2.p1_id), P(l2.p2_id));
        // angolo rispetto a un asse: l'arco parte dal primo punto della linea, con un tratto di riferimento
        if (l1.ref && !l2.ref) {
          const q = P(l2.p1_id);
          X = [q.x, q.y];
          const [qx, qy] = S(q.x, q.y);
          const ux = l1.id === 'AX' ? 1 : 0, uy = l1.id === 'AX' ? 0 : -1;
          const rr = Math.hypot(lx - q.x, ly - q.y) * this.view.s + 10;
          path += `M${f1(qx)} ${f1(qy)}L${f1(qx + ux * rr)} ${f1(qy + uy * rr)}`;
        }
        if (X) {
          const r = Math.hypot(lx - X[0], ly - X[1]) * this.view.s;
          const d1 = Math.atan2(P(l1.p2_id).y - P(l1.p1_id).y, P(l1.p2_id).x - P(l1.p1_id).x);
          const [xs, ys] = S(X[0], X[1]);
          const a0 = d1, a1 = d1 + (val * Math.PI) / 180;
          const p0 = [xs + r * Math.cos(a0), ys - r * Math.sin(a0)], p1 = [xs + r * Math.cos(a1), ys - r * Math.sin(a1)];
          path += `M${f1(p0[0])} ${f1(p0[1])}A${f1(r)} ${f1(r)} 0 0 ${val > 0 ? 0 : 1} ${f1(p1[0])} ${f1(p1[1])}`;
        }
        val = Math.abs(val);
      }
    } catch { /* quota su geometria eliminata */ }
    const [tx, ty] = S(lx, ly);
    const num = Number(c.expr);
    const prefix = c.type.includes('diameter') ? '⌀' : c.type.includes('radius') ? 'R' : '';
    const label = Number.isFinite(num) && String(c.expr).trim() !== '' ? `${prefix}${fmt(val, 2)}${isAngle ? '°' : ''}` : `${prefix}${c.expr} = ${fmt(val, 2)}${isAngle ? '°' : ''}`;
    const w = label.length * 7.4 + 14;
    this.labelBoxes.push({ id: c.id, x0: tx - w / 2, x1: tx + w / 2, y0: ty - 12, y1: ty + 12 });
    return `<g class="sk-dim ${bad ? 'bad' : ''} ${this.sel.has(c.id) ? 'sel' : ''}"><path d="${path}"/><rect x="${f1(tx - w / 2)}" y="${f1(ty - 11)}" width="${f1(w)}" height="22" rx="6"/><text x="${f1(tx)}" y="${f1(ty + 4.5)}">${esc(label)}</text></g>`;
  }

  previewSvg() {
    const st = this.state;
    if (!st || !st.cur) return '';
    const S = (x, y) => this.toS(x, y);
    const f1 = (n) => n.toFixed(1);
    const cur = st.cur;
    const out = [];
    const snap = (p) => {
      if (p.point || p.curve) { const [x, y] = S(p.x, p.y); out.push(`<circle cx="${f1(x)}" cy="${f1(y)}" r="9" class="sk-snap ${p.point ? 'pt' : ''}"/>`); }
      else if (p.grid) { const [x, y] = S(p.x, p.y); out.push(`<path d="M${f1(x - 6)} ${f1(y)}L${f1(x)} ${f1(y - 6)}L${f1(x + 6)} ${f1(y)}L${f1(x)} ${f1(y + 6)}Z" class="sk-snap grid"/>`); }
    };
    if (st.kind === 'line') {
      const a = st.lastId ? this.P(st.lastId) : st.start;
      const [ax, ay] = S(a.x, a.y), [bx, by] = S(cur.x, cur.y);
      if (!st.fresh || this.gesture?.moved) {
        out.push(`<path d="M${f1(ax)} ${f1(ay)}L${f1(bx)} ${f1(by)}" class="sk-preview"/>`);
        const L = Math.hypot(cur.x - a.x, cur.y - a.y);
        const deg = (Math.atan2(cur.y - a.y, cur.x - a.x) * 180) / Math.PI;
        // arco dell'angolo rispetto all'orizzontale, partendo dal punto iniziale
        const R = Math.min(42, Math.hypot(bx - ax, by - ay) * 0.6);
        if (R > 12 && Math.abs(deg) > 0.5 && Math.abs(Math.abs(deg) - 180) > 0.5) {
          const ex = ax + R * Math.cos((deg * Math.PI) / 180), ey = ay - R * Math.sin((deg * Math.PI) / 180);
          out.push(`<path d="M${f1(ax)} ${f1(ay)}H${f1(ax + R + 10)}" class="sk-preview thin"/><path d="M${f1(ax + R)} ${f1(ay)}A${f1(R)} ${f1(R)} 0 0 ${deg > 0 ? 0 : 1} ${f1(ex)} ${f1(ey)}" class="sk-angle"/>`);
        }
        out.push(`<text x="${f1(bx + 14)}" y="${f1(by - 14)}" class="sk-hint">${fmt(L, 2)} mm  ∠ ${fmt(deg, 1)}°</text>`);
        const ang = Math.abs(Math.atan2(cur.y - a.y, cur.x - a.x));
        const tolA = (3 * Math.PI) / 180;
        if (ang < tolA || Math.abs(ang - Math.PI) < tolA) out.push(`<text x="${f1((ax + bx) / 2)}" y="${f1((ay + by) / 2 - 10)}" class="sk-hint hv">H</text>`);
        else if (Math.abs(ang - Math.PI / 2) < tolA) out.push(`<text x="${f1((ax + bx) / 2 + 10)}" y="${f1((ay + by) / 2)}" class="sk-hint hv">V</text>`);
      }
      out.push(`<circle cx="${f1(ax)}" cy="${f1(ay)}" r="4" class="sk-pt sel"/>`);
    } else if (st.kind === 'rect') {
      const a = st.start;
      const [ax, ay] = S(a.x, a.y), [bx, by] = S(cur.x, cur.y);
      out.push(`<path d="M${f1(ax)} ${f1(ay)}H${f1(bx)}V${f1(by)}H${f1(ax)}Z" class="sk-preview"/>`);
      out.push(`<text x="${f1(bx + 14)}" y="${f1(by - 14)}" class="sk-hint">${fmt(Math.abs(cur.x - a.x), 2)} × ${fmt(Math.abs(cur.y - a.y), 2)}</text>`);
    } else if (st.kind === 'circle') {
      const a = st.start;
      const [ax, ay] = S(a.x, a.y);
      const r = Math.hypot(cur.x - a.x, cur.y - a.y);
      out.push(`<circle cx="${f1(ax)}" cy="${f1(ay)}" r="${f1(r * this.view.s)}" class="sk-preview"/><circle cx="${f1(ax)}" cy="${f1(ay)}" r="3" class="sk-pt sel"/>`);
      const [bx, by] = S(cur.x, cur.y);
      out.push(`<text x="${f1(bx + 14)}" y="${f1(by - 14)}" class="sk-hint">⌀ ${fmt(r * 2, 2)}</text>`);
    } else if (st.kind === 'arc') {
      const pts = [...st.pts, cur];
      for (const p of st.pts) { const [x, y] = S(p.x, p.y); out.push(`<circle cx="${f1(x)}" cy="${f1(y)}" r="4" class="sk-pt sel"/>`); }
      if (pts.length === 2) { const [ax, ay] = S(pts[0].x, pts[0].y), [bx, by] = S(pts[1].x, pts[1].y); out.push(`<path d="M${f1(ax)} ${f1(ay)}L${f1(bx)} ${f1(by)}" class="sk-preview thin"/>`); }
      if (pts.length === 3) {
        const c = circle3(pts[0], pts[2], pts[1]);
        if (c) {
          const ccw = (pts[2].x - pts[0].x) * (pts[1].y - pts[2].y) - (pts[2].y - pts[0].y) * (pts[1].x - pts[2].x) > 0;
          const [s0, e0] = ccw ? [pts[0], pts[1]] : [pts[1], pts[0]];
          out.push(`<path d="${this.arcPath({ radius: c.r, start_angle: Math.atan2(s0.y - c.y, s0.x - c.x), end_angle: Math.atan2(e0.y - c.y, e0.x - c.x) }, c)}" class="sk-preview"/>`);
        }
      }
    } else if (st.kind === 'point') {
      const [x, y] = S(cur.x, cur.y);
      out.push(`<circle cx="${f1(x)}" cy="${f1(y)}" r="4" class="sk-pt sel"/>`);
    }
    snap(cur);
    return out.join('');
  }
}

/** Id delle geometrie a cui si riferisce un vincolo. */
export function consRefs(c) {
  const out = [];
  for (const [k, v] of Object.entries(c)) {
    if (k !== 'id' && k.endsWith('_id') && typeof v === 'string') out.push(v);
    if (v && typeof v === 'object' && v.o_id) out.push(v.o_id);
  }
  return out;
}

// ---------- comandi a campi dello schizzo ----------
export const SKETCH_CMDS = {
  smirror: { title: 'Specchia', icon: 'mirror', fields: [
    { k: 'objects', kind: 'pick', what: 'curves', multi: true, label: 'Oggetti', hint: 'Tocca linee, cerchi, archi o punti da specchiare' },
    { k: 'axis', kind: 'pick', what: 'line', multi: false, label: 'Linea di specchio', hint: 'Tocca la linea di simmetria (vanno bene anche gli assi tratteggiati)' },
  ] },
  sfillet: { title: 'Raccordo', icon: 'fillet', fields: [
    { k: 'corners', kind: 'pick', what: 'corner', multi: true, label: 'Angoli', hint: 'Tocca gli angoli tra due linee (o una linea vicino all\'angolo)' },
    { k: 'r', kind: 'num', label: 'Raggio', unit: 'mm', init: '3' },
  ] },
  schamfer: { title: 'Smusso', icon: 'chamfer', fields: [
    { k: 'corners', kind: 'pick', what: 'corner', multi: true, label: 'Angoli', hint: 'Tocca gli angoli tra due linee (o una linea vicino all\'angolo)' },
    { k: 'd', kind: 'num', label: 'Distanza', unit: 'mm', init: '2' },
  ] },
  offset: { title: 'Offset', icon: 'offset', fields: [
    { k: 'objects', kind: 'pick', what: 'chain', multi: true, label: 'Contorno', hint: 'Tocca il contorno da copiare: si prende tutto il tratto collegato' },
    { k: 'd', kind: 'num', label: 'Distanza', unit: 'mm', init: '2' },
    { k: 'flip', kind: 'toggle', label: 'Dall\'altro lato' },
  ] },
};

// ---------- curve come oggetti geometrici semplici ----------
function curveOf(sk, g) {
  const P = (id) => sk.P(id);
  if (g.type === 'line') { const a = P(g.p1_id), b = P(g.p2_id); return { kind: 'line', a: [a.x, a.y], b: [b.x, b.y] }; }
  const c = P(g.c_id);
  if (g.type === 'circle') return { kind: 'circle', c: [c.x, c.y], r: g.radius };
  const a0 = ((g.start_angle % TAU) + TAU) % TAU;
  let sw = (((g.end_angle - g.start_angle) % TAU) + TAU) % TAU;
  if (sw < 1e-9) sw = TAU;
  return { kind: 'arc', c: [c.x, c.y], r: g.radius, a0, sw };
}

/** Parametro di un punto sulla curva: linea 0..1, cerchio angolo, arco angolo dall'inizio (null se fuori). */
function paramOn(c, p, clamp = false) {
  if (c.kind === 'line') {
    const dx = c.b[0] - c.a[0], dy = c.b[1] - c.a[1];
    const L = dx * dx + dy * dy;
    let t = L ? ((p[0] - c.a[0]) * dx + (p[1] - c.a[1]) * dy) / L : 0;
    if (clamp) return Math.max(0, Math.min(1, t));
    return t < -1e-7 || t > 1 + 1e-7 ? null : Math.max(0, Math.min(1, t));
  }
  const ang = (((Math.atan2(p[1] - c.c[1], p[0] - c.c[0])) % TAU) + TAU) % TAU;
  if (c.kind === 'circle') return ang;
  let u = (((ang - c.a0) % TAU) + TAU) % TAU;
  if (u > c.sw + 1e-7) { if (TAU - u < 1e-7) u = 0; else return clamp ? (u - c.sw < TAU - u ? c.sw : 0) : null; }
  return Math.min(u, c.sw);
}

/** Incroci tra due curve dentro i loro tratti. */
function curveMeet(c1, c2) {
  const pts = infiniteMeet(c1, c2);
  return pts.filter((p) => paramOn(c1, p) != null && paramOn(c2, p) != null);
}

/** Incroci tra le curve prolungate (retta infinita, cerchio intero). */
function infiniteMeet(c1, c2) {
  const isLine = (c) => c.kind === 'line';
  if (isLine(c1) && isLine(c2)) {
    const r = [c1.b[0] - c1.a[0], c1.b[1] - c1.a[1]], s = [c2.b[0] - c2.a[0], c2.b[1] - c2.a[1]];
    const den = r[0] * s[1] - r[1] * s[0];
    if (Math.abs(den) < 1e-12) return [];
    const t = ((c2.a[0] - c1.a[0]) * s[1] - (c2.a[1] - c1.a[1]) * s[0]) / den;
    return [[c1.a[0] + r[0] * t, c1.a[1] + r[1] * t]];
  }
  if (!isLine(c1) && isLine(c2)) return infiniteMeet(c2, c1);
  if (isLine(c1)) {
    const d = [c1.b[0] - c1.a[0], c1.b[1] - c1.a[1]];
    const f = [c1.a[0] - c2.c[0], c1.a[1] - c2.c[1]];
    const A = d[0] * d[0] + d[1] * d[1], B = 2 * (f[0] * d[0] + f[1] * d[1]), C = f[0] * f[0] + f[1] * f[1] - c2.r * c2.r;
    let disc = B * B - 4 * A * C;
    if (A < 1e-18 || disc < -1e-9 * A * c2.r) return [];
    disc = Math.max(0, disc);
    const q = Math.sqrt(disc);
    const ts = q < 1e-12 ? [-B / (2 * A)] : [(-B - q) / (2 * A), (-B + q) / (2 * A)];
    return ts.map((t) => [c1.a[0] + d[0] * t, c1.a[1] + d[1] * t]);
  }
  const dx = c2.c[0] - c1.c[0], dy = c2.c[1] - c1.c[1];
  const d = Math.hypot(dx, dy);
  if (d < 1e-9 || d > c1.r + c2.r + 1e-7 || d < Math.abs(c1.r - c2.r) - 1e-7) return [];
  const a = (c1.r * c1.r - c2.r * c2.r + d * d) / (2 * d);
  const h = Math.sqrt(Math.max(0, c1.r * c1.r - a * a));
  const mx = c1.c[0] + (a * dx) / d, my = c1.c[1] + (a * dy) / d;
  if (h < 1e-9) return [[mx, my]];
  return [[mx - (h * dy) / d, my + (h * dx) / d], [mx + (h * dy) / d, my - (h * dx) / d]];
}

/** Incrocio di due tratti spostati (offset) più vicino al punto indicato. */
function meetCurves(A, B, guess) {
  const asC = (s) => (s.kind === 'line' ? { kind: 'line', a: s.a, b: s.b } : { kind: 'circle', c: s.c, r: s.r });
  const pts = infiniteMeet(asC(A), asC(B));
  if (!pts.length) return null;
  pts.sort((p, q) => Math.hypot(p[0] - guess[0], p[1] - guess[1]) - Math.hypot(q[0] - guess[0], q[1] - guess[1]));
  return pts[0];
}

function arcMid(sk, g) {
  const c = sk.P(g.c_id);
  let sw = g.end_angle - g.start_angle;
  while (sw <= 0) sw += TAU;
  const m = g.start_angle + sw / 2;
  return { x: c.x + g.radius * Math.cos(m), y: c.y + g.radius * Math.sin(m) };
}
function distToLine(p, a, b) {
  const dx = b.x - a.x, dy = b.y - a.y;
  return ((p.x - a.x) * dy - (p.y - a.y) * dx) / (Math.hypot(dx, dy) || 1);
}
function angOf(sk, g, pid) { const c = sk.P(g.c_id), p = sk.P(pid); return Math.atan2(p.y - c.y, p.x - c.x); }

/** Un cerchio tagliato diventa arco: anche i suoi vincoli passano alla versione "arco". */
function circleToArc(sk, g, sId, eId) {
  g.type = 'arc';
  g.start_id = sId; g.end_id = eId;
  g.start_angle = angOf(sk, g, sId); g.end_angle = angOf(sk, g, eId);
  for (const c of sk.sk.cons) {
    if (c.type === 'circle_diameter' && c.c_id === g.id) { c.type = 'arc_diameter'; c.a_id = g.id; delete c.c_id; }
    else if (c.type === 'circle_radius' && c.c_id === g.id) { c.type = 'arc_radius'; c.a_id = g.id; delete c.c_id; }
    else if (c.type === 'point_on_circle' && c.c_id === g.id) { c.type = 'point_on_arc'; c.a_id = g.id; delete c.c_id; }
    else if (c.type === 'tangent_lc' && c.c_id === g.id) { c.type = 'tangent_la'; c.a_id = g.id; delete c.c_id; }
    else if ((c.type === 'equal_radius_cc' || c.type === 'tangent_cc') && (c.c1_id === g.id || c.c2_id === g.id)) {
      const other = c.c1_id === g.id ? c.c2_id : c.c1_id;
      c.type = c.type === 'equal_radius_cc' ? 'equal_radius_ca' : 'tangent_ca';
      c.c_id = other; c.a_id = g.id; delete c.c1_id; delete c.c2_id;
    } else if ((c.type === 'equal_radius_ca' || c.type === 'tangent_ca') && c.c_id === g.id) {
      const other = c.a_id;
      c.type = c.type === 'equal_radius_ca' ? 'equal_radius_aa' : 'tangent_aa';
      c.a1_id = g.id; c.a2_id = other; delete c.c_id; delete c.a_id;
    }
  }
}

// ---------- geometria 2D ----------
function segT(p, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const L = dx * dx + dy * dy;
  return L ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L)) : 0;
}
function lineT(p, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const L = dx * dx + dy * dy;
  return L ? ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L : 0;
}
function segDist(p, a, b) { const t = segT(p, a, b); return Math.hypot(p[0] - a[0] - t * (b[0] - a[0]), p[1] - a[1] - t * (b[1] - a[1])); }
function norm2(v) { const l = Math.hypot(v[0], v[1]) || 1; return [v[0] / l, v[1] / l]; }
function angIn(a, a0, a1) {
  const n = (x) => ((x % TAU) + TAU) % TAU;
  const sw = n(a1 - a0) || TAU;
  return n(a - a0) <= sw + 1e-9;
}
function circle3(a, b, c) {
  const d = 2 * (a.x * (b.y - c.y) + b.x * (c.y - a.y) + c.x * (a.y - b.y));
  if (Math.abs(d) < 1e-12) return null;
  const a2 = a.x * a.x + a.y * a.y, b2 = b.x * b.x + b.y * b.y, c2 = c.x * c.x + c.y * c.y;
  const x = (a2 * (b.y - c.y) + b2 * (c.y - a.y) + c2 * (a.y - b.y)) / d;
  const y = (a2 * (c.x - b.x) + b2 * (a.x - c.x) + c2 * (b.x - a.x)) / d;
  return { x, y, r: Math.hypot(a.x - x, a.y - y) };
}
function lineIntersect(a, b, c, d) {
  const r = [b.x - a.x, b.y - a.y], s = [d.x - c.x, d.y - c.y];
  const den = r[0] * s[1] - r[1] * s[0];
  if (Math.abs(den) < 1e-12) return null;
  const t = ((c.x - a.x) * s[1] - (c.y - a.y) * s[0]) / den;
  return [a.x + r[0] * t, a.y + r[1] * t];
}
function arrowHeads(a, b, onlyEnd = false) {
  const u = norm2([b[0] - a[0], b[1] - a[1]]);
  const n = [-u[1], u[0]];
  const L = 8, Wd = 3;
  const head = (p, dir) => `M${(p[0] - dir[0] * L + n[0] * Wd).toFixed(1)} ${(p[1] - dir[1] * L + n[1] * Wd).toFixed(1)}L${p[0].toFixed(1)} ${p[1].toFixed(1)}L${(p[0] - dir[0] * L - n[0] * Wd).toFixed(1)} ${(p[1] - dir[1] * L - n[1] * Wd).toFixed(1)}`;
  return (onlyEnd ? '' : head(a, [-u[0], -u[1]])) + head(b, u);
}
function esc(s) { return String(s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c])); }
