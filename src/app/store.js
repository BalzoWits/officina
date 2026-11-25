// Progetti salvati nel browser (IndexedDB) e documento vuoto.
const DB = 'officina';
const STORE = 'projects';

function open() {
  return new Promise((resolve, reject) => {
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(STORE, { keyPath: 'id' });
    r.onsuccess = () => resolve(r.result);
    r.onerror = () => reject(r.error);
  });
}
async function tx(mode, fn) {
  const db = await open();
  return new Promise((resolve, reject) => {
    const t = db.transaction(STORE, mode);
    const st = t.objectStore(STORE);
    const req = fn(st);
    t.oncomplete = () => resolve(req && req.result);
    t.onerror = () => reject(t.error);
  });
}

export async function listProjects() {
  const all = (await tx('readonly', (s) => s.getAll())) || [];
  return all.map((p) => ({
    id: p.id, name: p.name, updated: p.updated, features: p.doc ? p.doc.features.length : null,
    dirty: !!p.dirty, remoteOnly: !!p.remoteOnly, rev: p.rev || 0,
  })).sort((a, b) => b.updated - a.updated);
}
export const listFull = async () => (await tx('readonly', (s) => s.getAll())) || [];
export const loadProject = (id) => tx('readonly', (s) => s.get(id));
/** keepTime: conserva la data di modifica (sincronizzazione), altrimenti è "adesso". */
export const saveProject = (p, { keepTime = false } = {}) => tx('readwrite', (s) => s.put({ ...p, updated: keepTime && p.updated ? p.updated : Date.now() }));
export const deleteProject = (id) => tx('readwrite', (s) => s.delete(id));

export function newId() { return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4); }

export function newDoc(name = 'Senza titolo') {
  return { app: 'officina', v: 1, name, params: [], features: [], rollback: null, ui: { hidden: {}, colors: {}, names: {}, sketchVis: {} } };
}

export function lastProjectId() { try { return localStorage.getItem('officina.last'); } catch { return null; } }
export function setLastProjectId(id) { try { localStorage.setItem('officina.last', id); } catch { /* */ } }
