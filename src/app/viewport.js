// Vista 3D: three.js con gesti touch (1 dito ruota, 2 dita sposta/zoom), selezione di
// facce, spigoli, corpi, profili e piani; modalità schizzo con camera ortogonale.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { STD_FRAMES } from '../shared/frames.js';

const COLORS = ['#b9c3cf', '#d9b38c', '#9fc7a8', '#c9a3c9', '#e0c56e', '#8fb6d9', '#d99a9a', '#a8b38f'];
export const bodyColor = (i) => COLORS[i % COLORS.length];
const ACCENT = 0x1f7ae0;
const PRE = 0xff8a1f;

export class Viewport {
  constructor(host) {
    this.host = host;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setClearColor(0xe9edf2);
    host.appendChild(this.renderer.domElement);
    this.canvas = this.renderer.domElement;
    this.canvas.style.touchAction = 'none';

    this.scene = new THREE.Scene();
    this.persp = new THREE.PerspectiveCamera(35, 1, 0.1, 100000);
    this.persp.up.set(0, 0, 1);
    this.persp.position.set(160, -220, 150);
    this.ortho = new THREE.OrthographicCamera(-1, 1, 1, -1, -100000, 100000);
    this.camera = this.persp;

    this.controls = new OrbitControls(this.persp, this.canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.15;
    this.controls.zoomToCursor = true;
    this.controls.screenSpacePanning = true;
    this.controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };
    this.controls.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.PAN, RIGHT: THREE.MOUSE.PAN };

    const hemi = new THREE.HemisphereLight(0xffffff, 0x8090a0, 1.6);
    this.scene.add(hemi);
    this.sun = new THREE.DirectionalLight(0xffffff, 1.5);
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);

    this.lineMats = [];
    this.world = new THREE.Group();
    this.scene.add(this.world);
    this.buildGrid();
    this.bodiesGroup = new THREE.Group();
    this.overlay = new THREE.Group();
    this.planesGroup = new THREE.Group();
    this.world.add(this.bodiesGroup, this.overlay, this.planesGroup);
    this.buildPlanes();

    this.bodies = new Map(); // id -> { key, mesh, edges, data, visible }
    this.meshCache = new Map(); // key -> { geom, lineGeom, data }
    this.selection = { faces: [], edges: [], bodies: [] };
    this.preselect = null;
    this.sketchMode = null;
    this.dirty = true;
    this.tapHandlers = [];
    this.hoverHandler = null;

    this.controls.addEventListener('change', () => { this.dirty = true; });
    this.setupTap();
    this.setupHandles();
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(host);
    this.resize();
    const loop = () => {
      const moved = this.camera === this.persp ? this.controls.update() : false;
      if (moved || this.dirty) this.render();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  lineMat(color, width, opts = {}) {
    const m = new LineMaterial({ color, linewidth: width, worldUnits: false, ...opts });
    m.resolution.set(this.w || 1, this.h || 1);
    this.lineMats.push(m);
    return m;
  }

  buildGrid() {
    const g = new THREE.Group();
    const mk = (step, size, color, op) => {
      const pts = [];
      for (let x = -size; x <= size + 1e-9; x += step) { pts.push(x, -size, 0, x, size, 0); pts.push(-size, x, 0, size, x, 0); }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
      return new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color, transparent: true, opacity: op, depthWrite: false }));
    };
    g.add(mk(10, 300, 0x7a8796, 0.22));
    g.add(mk(50, 300, 0x56636f, 0.35));
    const axes = new THREE.BufferGeometry();
    axes.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 60], 3));
    axes.setAttribute('color', new THREE.Float32BufferAttribute([0.85, 0.2, 0.2, 0.85, 0.2, 0.2, 0.2, 0.65, 0.25, 0.2, 0.65, 0.25, 0.2, 0.35, 0.9, 0.2, 0.35, 0.9], 3));
    g.add(new THREE.LineSegments(axes, new THREE.LineBasicMaterial({ vertexColors: true, depthTest: false, transparent: true })));
    g.renderOrder = -1;
    this.grid = g;
    this.world.add(g);
  }

  buildPlanes() {
    this.planeMeshes = {};
    const colors = { XY: 0x3a7bd5, XZ: 0x3ab36b, YZ: 0xd5533a };
    for (const [name, fr] of Object.entries(STD_FRAMES)) {
      const s = 40;
      const geo = new THREE.BufferGeometry();
      const P = (u, v) => [fr.x[0] * u + fr.y[0] * v, fr.x[1] * u + fr.y[1] * v, fr.x[2] * u + fr.y[2] * v];
      geo.setAttribute('position', new THREE.Float32BufferAttribute([...P(0, 0), ...P(s, 0), ...P(s, s), ...P(0, s)], 3));
      geo.setIndex([0, 1, 2, 0, 2, 3]);
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: colors[name], transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthWrite: false }));
      m.userData = { plane: name };
      const edge = new THREE.LineLoop(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute([...P(0, 0), ...P(s, 0), ...P(s, s), ...P(0, s)], 3)), new THREE.LineBasicMaterial({ color: colors[name] }));
      m.add(edge);
      this.planesGroup.add(m);
      this.planeMeshes[name] = m;
    }
    this.planesGroup.visible = false;
  }

  setPlanesVisible(v, highlight = null) {
    this.planesGroup.visible = v;
    for (const [n, m] of Object.entries(this.planeMeshes)) m.material.opacity = highlight === n ? 0.42 : 0.16;
    this.dirty = true;
  }

  resize() {
    const r = this.host.getBoundingClientRect();
    this.w = Math.max(1, r.width);
    this.h = Math.max(1, r.height);
    this.renderer.setSize(this.w, this.h, false);
    this.canvas.style.width = this.w + 'px';
    this.canvas.style.height = this.h + 'px';
    this.persp.aspect = this.w / this.h;
    this.persp.updateProjectionMatrix();
    for (const m of this.lineMats) m.resolution.set(this.w, this.h);
    if (this.sketchMode) this.applySketchView();
    this.dirty = true;
    if (this.onResize) this.onResize();
  }

  render() {
    this.dirty = false;
    this.updateHandles();
    const cam = this.camera;
    this.sun.position.copy(cam.position).add(new THREE.Vector3(0, 0, 1).multiplyScalar(this.sceneRadius() * 0.5));
    this.sun.target.position.copy(this.controls.target);
    this.renderer.render(this.scene, cam);
  }

  sceneRadius() {
    const box = this.bodiesBox();
    if (box.isEmpty()) return 100;
    return box.getBoundingSphere(new THREE.Sphere()).radius || 100;
  }

  bodiesBox() {
    const box = new THREE.Box3();
    for (const b of this.bodies.values()) if (b.visible && b.mesh) box.expandByObject(b.mesh);
    return box;
  }

  // ---------- corpi ----------
  /** Memorizza le mesh arrivate dal worker (chiave = forma). */
  ingest(list) {
    for (const b of list) if (b.mesh && !this.meshCache.has(b.key)) this.meshCache.set(b.key, this.buildGeom(b.mesh));
  }

  /** Corpi su cui si fanno le selezioni quando diversi da quelli mostrati (anteprima di un comando). */
  setPickBodies(list) {
    if (!list) { this.pickSet = null; this.refreshSelection(); return; }
    this.pickSet = new Map();
    for (const b of list) {
      const c = this.meshCache.get(b.key);
      if (!c) continue;
      const mesh = new THREE.Mesh(c.geom);
      mesh.userData = { body: b.id };
      this.pickSet.set(b.id, { id: b.id, key: b.key, data: c.data, mesh, visible: b.visible !== false });
    }
    this.refreshSelection();
  }
  get pickBodies() { return this.pickSet || this.bodies; }

  /** Libera le geometrie che non servono più. */
  gc() {
    const used = new Set([...this.bodies.values()].map((e) => e.key));
    if (this.pickSet) for (const e of this.pickSet.values()) used.add(e.key);
    for (const [k, c] of this.meshCache) if (!used.has(k)) { c.geom.dispose(); c.lineGeom.dispose(); this.meshCache.delete(k); }
  }

  setBodies(list) {
    const seen = new Set();
    list.forEach((b) => {
      seen.add(b.id);
      let entry = this.bodies.get(b.id);
      if (!entry) { entry = { id: b.id }; this.bodies.set(b.id, entry); }
      const cached = this.meshCache.get(b.key);
      if (entry.key !== b.key && cached) {
        if (entry.mesh) { this.bodiesGroup.remove(entry.mesh, entry.edges); }
        entry.key = b.key;
        entry.data = cached.data;
        entry.mesh = new THREE.Mesh(cached.geom, new THREE.MeshStandardMaterial({ color: b.color, roughness: 0.55, metalness: 0.05, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, side: THREE.DoubleSide }));
        entry.mesh.userData = { body: b.id };
        entry.edges = new LineSegments2(cached.lineGeom, this.edgeMat || (this.edgeMat = this.lineMat(0x1d2733, 1.3)));
        this.bodiesGroup.add(entry.mesh, entry.edges);
      }
      if (entry.mesh) {
        entry.mesh.material.color.set(b.color);
        entry.mesh.material.transparent = !!b.ghost;
        entry.mesh.material.opacity = b.ghost ? 0.35 : 1;
        entry.mesh.material.depthWrite = !b.ghost;
        entry.visible = b.visible !== false;
        entry.mesh.visible = entry.visible;
        entry.edges.visible = entry.visible;
      }
      entry.name = b.name;
    });
    for (const [id, e] of this.bodies) {
      if (!seen.has(id)) { if (e.mesh) this.bodiesGroup.remove(e.mesh, e.edges); this.bodies.delete(id); }
    }
    this.refreshSelection();
    this.dirty = true;
  }

  buildGeom(mesh) {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(mesh.vertices, 3));
    geom.setAttribute('normal', new THREE.BufferAttribute(mesh.normals, 3));
    geom.setIndex(new THREE.BufferAttribute(mesh.triangles, 1));
    geom.computeBoundingSphere();
    geom.computeBoundingBox();
    const lineGeom = new LineSegmentsGeometry();
    lineGeom.setPositions(mesh.lines.length ? mesh.lines : new Float32Array(6));
    return { geom, lineGeom, data: mesh };
  }

  // ---------- selezione evidenziata ----------
  setSelection(sel) {
    this.selection = { faces: sel.faces || [], edges: sel.edges || [], bodies: sel.bodies || [] };
    this.refreshSelection();
  }
  setPreselect(p) { this.preselect = p; this.refreshSelection(); }

  refreshSelection() {
    if (this.selGroup) { this.overlay.remove(this.selGroup); this.selGroup.traverse((o) => { if (o.geometry && o.userData.own) o.geometry.dispose(); }); }
    const g = new THREE.Group();
    const faceMat = (c, op) => new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: op, depthTest: true, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1, side: THREE.DoubleSide });
    const addFace = (ref, color, op) => {
      const e = this.pickBodies.get(ref.body);
      if (!e || !e.data) return;
      const grp = e.data.faceGroups.find((x) => x.i === ref.i);
      if (!grp) return;
      const idx = e.data.triangles.slice(grp.start, grp.start + grp.count);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', e.mesh.geometry.getAttribute('position'));
      geo.setIndex(new THREE.BufferAttribute(idx, 1));
      const m = new THREE.Mesh(geo, faceMat(color, op));
      m.userData.own = true;
      g.add(m);
    };
    const addEdge = (ref, color, w) => {
      const e = this.pickBodies.get(ref.body);
      if (!e || !e.data) return;
      const grp = e.data.edgeGroups.find((x) => x.i === ref.i);
      if (!grp) return;
      const pts = e.data.lines.slice(grp.start * 3, (grp.start + grp.count) * 3);
      const lg = new LineSegmentsGeometry();
      lg.setPositions(pts);
      const l = new LineSegments2(lg, this.lineMat(color, w, { depthTest: false, transparent: true }));
      l.renderOrder = 5;
      l.userData.own = true;
      g.add(l);
    };
    for (const f of this.selection.faces) addFace(f, ACCENT, 0.45);
    for (const ed of this.selection.edges) addEdge(ed, ACCENT, 4);
    for (const id of this.selection.bodies) {
      const e = this.pickBodies.get(id);
      if (e && e.mesh) {
        const m = new THREE.Mesh(e.mesh.geometry, faceMat(ACCENT, 0.25));
        g.add(m);
      }
    }
    const p = this.preselect;
    if (p) {
      if (p.kind === 'face') addFace(p, PRE, 0.35);
      if (p.kind === 'edge') addEdge(p, PRE, 4);
    }
    this.selGroup = g;
    this.overlay.add(g);
    this.dirty = true;
  }

  // ---------- schizzi e profili in 3D ----------
  setSketchOverlays(list) {
    if (this.sketchGroup) { this.overlay.remove(this.sketchGroup); this.sketchGroup.traverse((o) => o.geometry && o.geometry.dispose()); }
    const g = new THREE.Group();
    this.regionMeshes = [];
    this.sketchLines = [];
    for (const s of list) {
      const fr = s.frame;
      const W = (u, v) => [fr.o[0] + fr.x[0] * u + fr.y[0] * v, fr.o[1] + fr.x[1] * u + fr.y[1] * v, fr.o[2] + fr.x[2] * u + fr.y[2] * v];
      const pts = [], cpts = [];
      for (const c of s.polylines) {
        const target = c.construction ? cpts : pts;
        for (let i = 0; i + 1 < c.pts.length; i++) target.push(...W(...c.pts[i]), ...W(...c.pts[i + 1]));
        if (s.pickLines && !c.construction && c.kind === 'line') this.sketchLines.push({ sketch: s.id, id: c.id, a: W(...c.pts[0]), b: W(...c.pts[c.pts.length - 1]) });
        if (s.pickLines && c.construction && c.kind === 'line') this.sketchLines.push({ sketch: s.id, id: c.id, a: W(...c.pts[0]), b: W(...c.pts[c.pts.length - 1]) });
      }
      for (const [arr, color, w] of [[pts, 0x1f6fd1, 2], [cpts, 0xd08a2a, 1.2]]) {
        if (!arr.length) continue;
        const lg = new LineSegmentsGeometry();
        lg.setPositions(arr);
        const l = new LineSegments2(lg, this.lineMat(color, w, { depthTest: false, transparent: true, opacity: 0.95 }));
        l.renderOrder = 3;
        g.add(l);
      }
      if (s.regions) {
        s.regions.forEach((r, ri) => {
          const shape = new THREE.Shape(r.poly.map(([u, v]) => new THREE.Vector2(u, v)));
          for (const h of r.holePolys) shape.holes.push(new THREE.Path(h.map(([u, v]) => new THREE.Vector2(u, v))));
          const sg = new THREE.ShapeGeometry(shape);
          const pos = sg.getAttribute('position');
          for (let i = 0; i < pos.count; i++) {
            const p = W(pos.getX(i), pos.getY(i));
            pos.setXYZ(i, p[0], p[1], p[2]);
          }
          sg.computeBoundingSphere();
          const sel = s.selected && s.selected.includes(ri);
          const m = new THREE.Mesh(sg, new THREE.MeshBasicMaterial({ color: sel ? ACCENT : 0x7fb0ea, transparent: true, opacity: sel ? 0.55 : 0.22, side: THREE.DoubleSide, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
          m.renderOrder = 2;
          m.userData = { sketch: s.id, region: ri };
          g.add(m);
          this.regionMeshes.push(m);
        });
      }
    }
    this.sketchGroup = g;
    this.overlay.add(g);
    this.dirty = true;
  }

  // ---------- tocchi ----------
  setupTap() {
    const downs = new Map();
    let multi = false;
    this.canvas.addEventListener('pointerdown', (e) => {
      downs.set(e.pointerId, { x: e.clientX, y: e.clientY, t: performance.now() });
      if (downs.size > 1) multi = true;
    });
    const end = (e) => {
      const d = downs.get(e.pointerId);
      downs.delete(e.pointerId);
      if (!d) return;
      const wasMulti = multi;
      if (!downs.size) multi = false;
      if (wasMulti || e.type === 'pointercancel') return;
      const moved = Math.hypot(e.clientX - d.x, e.clientY - d.y);
      if (moved < 9 && performance.now() - d.t < 600) {
        const r = this.canvas.getBoundingClientRect();
        for (const h of this.tapHandlers) h(e.clientX - r.left, e.clientY - r.top, e.pointerType);
      }
    };
    this.canvas.addEventListener('pointerup', end);
    this.canvas.addEventListener('pointercancel', end);
    this.canvas.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse' || downs.size || !this.hoverHandler) return;
      const r = this.canvas.getBoundingClientRect();
      this.hoverHandler(e.clientX - r.left, e.clientY - r.top);
    });
    this.canvas.addEventListener('pointerleave', () => { if (this.hoverHandler) this.hoverHandler(null); });
  }
  onTap(fn) { this.tapHandlers.push(fn); }

  /** Centro e diagonale dei corpi indicati (tra quelli selezionabili). */
  boundsOf(ids) {
    const box = new THREE.Box3();
    for (const id of ids) { const e = this.pickBodies.get(id); if (e && e.mesh) { e.mesh.geometry.computeBoundingBox(); box.union(e.mesh.geometry.boundingBox); } }
    if (box.isEmpty()) return null;
    return { center: box.getCenter(new THREE.Vector3()).toArray(), size: box.getSize(new THREE.Vector3()).length() };
  }

  // ---------- frecce di controllo (maniglie trascinabili dei comandi) ----------
  /**
   * list: [{ id, kind:'linear', origin, dir, value, offset?, scale?, min?, color?, locked? }
   *        | { id, kind:'arc', center, axis, ref, radius, value (gradi), locked? }]
   */
  setHandles(list) {
    if (this.hdrag) { this.pendingHandles = list || []; return; }
    if (this.handleGroup) {
      this.overlay.remove(this.handleGroup);
      this.handleGroup.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    }
    this.handles = (list || []).map((h) => ({ offset: 0, scale: 1, ...h }));
    const g = new THREE.Group();
    for (const h of this.handles) {
      const color = h.locked ? 0x9aa4ae : (h.color ?? ACCENT);
      const mat = new THREE.MeshBasicMaterial({ color, depthTest: false, transparent: true, opacity: 0.95 });
      h.knob = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 14), mat);
      h.line = new LineSegments2(new LineSegmentsGeometry(), this.lineMat(color, 2.5, { depthTest: false, transparent: true }));
      h.knob.renderOrder = h.line.renderOrder = 20;
      g.add(h.knob, h.line);
      if (h.kind === 'linear') {
        h.cone = new THREE.Mesh(new THREE.ConeGeometry(0.75, 2.2, 20), mat);
        h.cone.renderOrder = 20;
        g.add(h.cone);
      }
    }
    this.handleGroup = g;
    this.overlay.add(g);
    this.updateHandles();
    this.dirty = true;
  }

  /** Millimetri per pixel attorno a un punto (per tenere costante la grandezza a schermo). */
  worldPerPx(p) {
    if (this.camera === this.persp) return (2 * this.persp.position.distanceTo(p) * Math.tan((this.persp.fov * Math.PI) / 360)) / this.h;
    return (this.ortho.top - this.ortho.bottom) / this.h;
  }

  handlePos(h, value = h.value) {
    if (h.kind === 'linear') {
      const t = h.offset + value * h.scale;
      return new THREE.Vector3(h.origin[0] + h.dir[0] * t, h.origin[1] + h.dir[1] * t, h.origin[2] + h.dir[2] * t);
    }
    const a = (value * Math.PI) / 180;
    const u = new THREE.Vector3(...h.ref), ax = new THREE.Vector3(...h.axis);
    const w = new THREE.Vector3().crossVectors(ax, u);
    return new THREE.Vector3(...h.center).addScaledVector(u, Math.cos(a) * h.radius).addScaledVector(w, Math.sin(a) * h.radius);
  }

  updateHandles() {
    if (!this.handles || !this.handles.length) return;
    for (const h of this.handles) {
      const p = this.handlePos(h);
      const s = this.worldPerPx(p) * 8;
      h.knob.position.copy(p);
      h.knob.scale.setScalar(s);
      if (h.kind === 'linear') {
        const d = new THREE.Vector3(...h.dir);
        const sign = h.offset + h.value * h.scale >= 0 ? 1 : -1;
        h.cone.position.copy(p).addScaledVector(d, sign * s * 2.2);
        h.cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().multiplyScalar(sign));
        h.cone.scale.setScalar(s);
        h.line.geometry.setPositions([...h.origin, p.x, p.y, p.z]);
      } else {
        const pts = [];
        const n = 48;
        for (let i = 0; i < n; i++) {
          const a = this.handlePos(h, (h.value * i) / n), b = this.handlePos(h, (h.value * (i + 1)) / n);
          pts.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
        h.line.geometry.setPositions(pts.length ? pts : [0, 0, 0, 0, 0, 0]);
      }
    }
  }

  /** Passo "tondo" adattivo: almeno ~6 pixel per passo. */
  niceStep(pxPerUnit, steps) {
    for (const s of steps) if (s * pxPerUnit >= 6) return s;
    return steps[steps.length - 1];
  }

  setupHandles() {
    const el = this.canvas;
    // in cattura: la maniglia ha la precedenza sulla rotazione della vista
    el.addEventListener('pointerdown', (e) => {
      if (!this.handles || !this.handles.length) return;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const tol = e.pointerType === 'touch' ? 28 : 16;
      let best = null, bd = tol;
      for (const h of this.handles) {
        const s = this.project(this.handlePos(h).toArray());
        const d = Math.hypot(s[0] - x, s[1] - y);
        if (d < bd) { bd = d; best = h; }
      }
      if (!best) return;
      e.stopImmediatePropagation();
      e.preventDefault();
      if (best.locked) { if (this.onHandleLocked) this.onHandleLocked(best); return; }
      this.hdrag = { h: best, id: e.pointerId };
      el.setPointerCapture(e.pointerId);
      this.controls.enabled = false;
    }, { capture: true });
    el.addEventListener('pointermove', (e) => {
      const dg = this.hdrag;
      if (!dg || e.pointerId !== dg.id) return;
      e.stopImmediatePropagation();
      const r = el.getBoundingClientRect();
      const ray = new THREE.Raycaster();
      ray.setFromCamera(this.ndc(e.clientX - r.left, e.clientY - r.top), this.camera);
      const h = dg.h;
      let v;
      if (h.kind === 'linear') {
        // punto della retta della maniglia più vicino al raggio del dito
        const O = new THREE.Vector3(...h.origin), D = new THREE.Vector3(...h.dir);
        const P = ray.ray.origin, V = ray.ray.direction;
        const a = D.dot(D), b = D.dot(V), c = V.dot(V);
        const w = O.clone().sub(P);
        const den = a * c - b * b;
        if (Math.abs(den) < 1e-9) return;
        const t = (b * V.dot(w) - c * D.dot(w)) / den;
        v = (t - h.offset) / h.scale;
        const step = this.niceStep(h.scale / this.worldPerPx(this.handlePos(h)), [0.01, 0.05, 0.1, 0.5, 1, 5, 10, 50]);
        v = Math.round(v / step) * step;
        if (h.min != null) v = Math.max(h.min, v);
      } else {
        const C = new THREE.Vector3(...h.center), A = new THREE.Vector3(...h.axis);
        const hit = new THREE.Vector3();
        if (!ray.ray.intersectPlane(new THREE.Plane().setFromNormalAndCoplanarPoint(A, C), hit)) return;
        const u = new THREE.Vector3(...h.ref), wv = new THREE.Vector3().crossVectors(A, u);
        const q = hit.sub(C);
        let ang = (Math.atan2(q.dot(wv), q.dot(u)) * 180) / Math.PI;
        // continuità oltre i 180°: il valore più vicino al precedente
        while (ang - h.value > 180) ang -= 360;
        while (h.value - ang > 180) ang += 360;
        const pxPerDeg = (h.radius / this.worldPerPx(C)) * (Math.PI / 180);
        const step = this.niceStep(pxPerDeg, [0.5, 1, 5, 15, 45]);
        v = Math.max(step, Math.min(360, Math.round(ang / step) * step));
      }
      if (v === h.value) return;
      h.value = v;
      this.dirty = true;
      if (this.onHandle) this.onHandle(h.id, v, false);
    }, { capture: true });
    const end = (e) => {
      const dg = this.hdrag;
      if (!dg || e.pointerId !== dg.id) return;
      e.stopImmediatePropagation();
      this.hdrag = null;
      this.controls.enabled = !this.sketchMode;
      if (this.onHandle) this.onHandle(dg.h.id, dg.h.value, true);
      if (this.pendingHandles) { const p = this.pendingHandles; this.pendingHandles = null; this.setHandles(p); }
    };
    el.addEventListener('pointerup', end, { capture: true });
    el.addEventListener('pointercancel', end, { capture: true });
  }

  ndc(x, y) { return new THREE.Vector2((x / this.w) * 2 - 1, -(y / this.h) * 2 + 1); }
  project(p) {
    const v = new THREE.Vector3(p[0], p[1], p[2]).project(this.camera);
    return [(v.x + 1) / 2 * this.w, (1 - v.y) / 2 * this.h, v.z];
  }

  /**
   * Cosa c'è sotto il dito. filter: { face, edge, body, region, plane, sketchLine }
   * tol: tolleranza in pixel per spigoli e linee.
   */
  pick(x, y, filter, tol = 14) {
    const ray = new THREE.Raycaster();
    ray.setFromCamera(this.ndc(x, y), this.camera);
    const meshes = [...this.pickBodies.values()].filter((b) => b.visible && b.mesh).map((b) => b.mesh);
    const hits = ray.intersectObjects(meshes, false);
    const hit = hits[0];
    const camPos = this.camera === this.persp ? this.camera.position : null;
    const depthOf = (p) => (camPos ? camPos.distanceTo(p) : -new THREE.Vector3().copy(p).applyMatrix4(this.camera.matrixWorldInverse).z);
    const hitDepth = hit ? depthOf(hit.point) : Infinity;
    const slack = this.sceneRadius() * 0.015 + 0.1;

    if (filter.sketchLine && this.sketchLines && this.sketchLines.length) {
      let best = null, bd = tol;
      for (const l of this.sketchLines) {
        const a = this.project(l.a), b = this.project(l.b);
        const d = segDist2([x, y], a, b);
        if (d < bd) { bd = d; best = l; }
      }
      if (best) return { kind: 'sketchLine', sketch: best.sketch, id: best.id };
    }
    if (filter.region && this.regionMeshes && this.regionMeshes.length) {
      const rh = ray.intersectObjects(this.regionMeshes, false);
      if (rh.length) {
        // la regione più piccola sotto il dito (le regioni interne vincono)
        return { kind: 'region', sketch: rh[0].object.userData.sketch, region: rh[0].object.userData.region, point: rh[0].point.toArray() };
      }
    }
    if (filter.edge) {
      let best = null, bd = tol;
      for (const b of this.pickBodies.values()) {
        if (!b.visible || !b.data) continue;
        const L = b.data.lines;
        for (const g of b.data.edgeGroups) {
          for (let k = g.start; k < g.start + g.count; k += 2) {
            const pa = [L[k * 3], L[k * 3 + 1], L[k * 3 + 2]], pb = [L[k * 3 + 3], L[k * 3 + 4], L[k * 3 + 5]];
            const a = this.project(pa), c = this.project(pb);
            const d = segDist2([x, y], a, c);
            if (d < bd) {
              // spigolo visibile? punto del segmento più vicino al raggio, confrontato con la faccia colpita
              const wp = new THREE.Vector3();
              ray.ray.distanceSqToSegment(new THREE.Vector3(...pa), new THREE.Vector3(...pb), null, wp);
              if (depthOf(wp) > hitDepth + slack) continue;
              bd = d;
              best = { kind: 'edge', body: b.id, i: g.i };
            }
          }
        }
      }
      if (best) return best;
    }
    if (hit && (filter.face || filter.body)) {
      const body = hit.object.userData.body;
      if (filter.face) {
        const e = this.pickBodies.get(body);
        const idx = hit.faceIndex * 3;
        const grp = e.data.faceGroups.find((g) => idx >= g.start && idx < g.start + g.count);
        if (grp) {
          const n = hit.face ? hit.face.normal.clone().transformDirection(hit.object.matrixWorld).toArray() : null;
          return { kind: 'face', body, i: grp.i, point: hit.point.toArray(), normal: n };
        }
      }
      if (filter.body) return { kind: 'body', body };
    }
    if (filter.plane && this.planesGroup.visible) {
      const ph = ray.intersectObjects(Object.values(this.planeMeshes), false);
      if (ph.length) return { kind: 'plane', plane: ph[0].object.userData.plane };
    }
    return null;
  }

  // ---------- camera ----------
  fit(animate = true) {
    const box = this.bodiesBox();
    let center = new THREE.Vector3(0, 0, 0), radius = 80;
    if (!box.isEmpty()) { const s = box.getBoundingSphere(new THREE.Sphere()); center = s.center; radius = Math.max(s.radius, 5); }
    const dir = this.persp.position.clone().sub(this.controls.target).normalize();
    const dist = radius / Math.sin((this.persp.fov * Math.PI) / 360) * 1.15;
    this.animateTo(center.clone().add(dir.multiplyScalar(dist)), center, animate);
  }

  view(name) {
    const dirs = {
      top: [0, 0, 1], bottom: [0, 0, -1], front: [0, -1, 0], back: [0, 1, 0], right: [1, 0, 0], left: [-1, 0, 0], iso: [1, -1.25, 0.9],
    };
    const d = new THREE.Vector3(...dirs[name]).normalize();
    const box = this.bodiesBox();
    let center = new THREE.Vector3(), radius = 80;
    if (!box.isEmpty()) { const s = box.getBoundingSphere(new THREE.Sphere()); center = s.center; radius = Math.max(s.radius, 5); }
    const dist = radius / Math.sin((this.persp.fov * Math.PI) / 360) * 1.15;
    if (name === 'top' || name === 'bottom') this.persp.up.set(0, 1, 0); else this.persp.up.set(0, 0, 1);
    this.animateTo(center.clone().add(d.multiplyScalar(dist)), center, true, () => { this.persp.up.set(0, 0, 1); this.controls.update(); });
  }

  animateTo(pos, target, animate = true, done) {
    const p0 = this.persp.position.clone(), t0 = this.controls.target.clone();
    if (!animate) { this.persp.position.copy(pos); this.controls.target.copy(target); this.controls.update(); this.dirty = true; if (done) done(); return; }
    const start = performance.now(), dur = 380;
    const step = () => {
      const k = Math.min(1, (performance.now() - start) / dur);
      const e = k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2;
      this.persp.position.lerpVectors(p0, pos, e);
      this.controls.target.lerpVectors(t0, target, e);
      this.persp.lookAt(this.controls.target);
      this.dirty = true;
      if (k < 1) requestAnimationFrame(step); else { this.controls.update(); if (done) done(); }
    };
    step();
  }

  // ---------- modalità schizzo ----------
  enterSketch(frame, view) {
    this.sketchMode = { frame, view };
    this.camera = this.ortho;
    this.controls.enabled = false;
    this.grid.visible = false;
    this.applySketchView();
  }
  setSketchView(view) { if (this.sketchMode) { this.sketchMode.view = view; this.applySketchView(); } }
  applySketchView() {
    const { frame: fr, view } = this.sketchMode;
    const hw = this.w / 2 / view.s, hh = this.h / 2 / view.s;
    const c = [fr.o[0] + fr.x[0] * view.cx + fr.y[0] * view.cy, fr.o[1] + fr.x[1] * view.cx + fr.y[1] * view.cy, fr.o[2] + fr.x[2] * view.cx + fr.y[2] * view.cy];
    const D = 5000;
    this.ortho.position.set(c[0] + fr.n[0] * D, c[1] + fr.n[1] * D, c[2] + fr.n[2] * D);
    this.ortho.up.set(fr.y[0], fr.y[1], fr.y[2]);
    this.ortho.lookAt(c[0], c[1], c[2]);
    this.ortho.left = -hw; this.ortho.right = hw; this.ortho.top = hh; this.ortho.bottom = -hh;
    this.ortho.near = 0.1; this.ortho.far = D * 2;
    this.ortho.updateProjectionMatrix();
    this.ortho.updateMatrixWorld();
    this.dirty = true;
  }
  exitSketch() {
    this.sketchMode = null;
    this.camera = this.persp;
    this.controls.enabled = true;
    this.grid.visible = this.gridOn !== false;
    this.dirty = true;
  }
  setGrid(on) { this.gridOn = on; if (!this.sketchMode) this.grid.visible = on; this.dirty = true; }
}

function segT(p, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const L = dx * dx + dy * dy;
  return L ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L)) : 0;
}
function segDist2(p, a, b) {
  if (a[2] > 1 || b[2] > 1) return Infinity; // dietro la camera
  const t = segT(p, a, b);
  return Math.hypot(p[0] - a[0] - t * (b[0] - a[0]), p[1] - a[1] - t * (b[1] - a[1]));
}
