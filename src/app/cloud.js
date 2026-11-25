// Salvataggio online dei progetti (Firebase Realtime Database + accesso Google) e sincronizzazione
// tra dispositivi. Ogni utente vede solo users/<suo uid>/… (regole in database.rules.json).
//
// Struttura online:  users/<uid>/meta/<progetto> = { name, rev, updated, size }
//                    users/<uid>/data/<progetto> = { rev, json }
// "rev" cresce a ogni salvataggio: ogni copia locale ricorda su quale rev si basa, così si capisce
// se nel frattempo un altro dispositivo ha salvato una versione più nuova (conflitto).
import { firebaseConfig } from './firebase-config.js';

const SDK = 'https://www.gstatic.com/firebasejs/10.12.2/';
const MAX_BYTES = 15e6;

export const cloudConfigured = () => !!(globalThis.__officinaFakeCloud || (firebaseConfig.apiKey && !firebaseConfig.apiKey.startsWith('INSERISCI')));

/** Backend Firebase vero, caricato solo quando serve. */
async function firebaseBackend() {
  const load = (m) => import(/* @vite-ignore */ SDK + m);
  const [{ initializeApp }, A, D] = await Promise.all([load('firebase-app.js'), load('firebase-auth.js'), load('firebase-database.js')]);
  const app = initializeApp(firebaseConfig);
  const auth = A.getAuth(app);
  const db = D.getDatabase(app);
  let uid = null;
  const R = (p) => D.ref(db, `users/${uid}/${p}`);
  return {
    onUser(cb) {
      A.getRedirectResult(auth).catch(() => { /* nessun rientro da redirect */ });
      A.onAuthStateChanged(auth, (u) => { uid = u ? u.uid : null; cb(u ? { uid: u.uid, name: u.displayName, email: u.email, photo: u.photoURL } : null); });
    },
    async signIn() {
      const prov = new A.GoogleAuthProvider();
      try { await A.signInWithPopup(auth, prov); } catch (e) {
        // app installata sulla schermata Home: i popup a volte sono bloccati, si passa al redirect
        if (/popup|cancelled|operation-not-supported/i.test(String(e && e.code))) await A.signInWithRedirect(auth, prov); else throw e;
      }
    },
    signOut: () => A.signOut(auth),
    async list() {
      const s = await D.get(R('meta'));
      return Object.entries(s.val() || {}).map(([id, m]) => ({ id, ...m }));
    },
    async getData(id) { const s = await D.get(R(`data/${id}`)); return s.val(); },
    /** Prende il numero di revisione successivo solo se online c'è ancora quella attesa. */
    async claim(id, expectRev, meta) {
      let remote = null;
      const res = await D.runTransaction(R(`meta/${id}`), (cur) => {
        remote = cur;
        if (((cur && cur.rev) || 0) !== expectRev) return undefined; // annulla: qualcun altro ha salvato
        return { ...meta, rev: expectRev + 1 };
      }, { applyLocally: false });
      return res.committed ? { ok: true, rev: expectRev + 1 } : { ok: false, remote: res.snapshot.val() || remote };
    },
    putData: (id, rev, json) => D.set(R(`data/${id}`), { rev, json }),
    async remove(id) { await D.remove(R(`data/${id}`)); await D.remove(R(`meta/${id}`)); },
    watch(id, cb) { return D.onValue(R(`meta/${id}`), (s) => { if (s.exists()) cb(s.val()); }); },
  };
}

/** Backend di prova (test automatici): le stesse operazioni passate a funzioni esposte dal test. */
function fakeBackend() {
  const call = (op, ...a) => globalThis.__officinaFakeCloud(op, ...a);
  return {
    onUser(cb) { this._cb = cb; call('user').then((u) => cb(u)); },
    async signIn() { const u = await call('signIn'); this._cb(u); },
    async signOut() { await call('signOut'); this._cb(null); },
    list: () => call('list'),
    getData: (id) => call('getData', id),
    claim: (id, expectRev, meta) => call('claim', id, expectRev, meta),
    putData: (id, rev, json) => call('putData', id, rev, json),
    remove: (id) => call('remove', id),
    watch(id, cb) {
      let last = null;
      const t = setInterval(async () => { const m = await call('meta', id); if (m && JSON.stringify(m) !== last) { last = JSON.stringify(m); cb(m); } }, 300);
      return () => clearInterval(t);
    },
  };
}

/**
 * Motore di sincronizzazione.
 * deps: { store, toast, onStatus(st), onUser(user), onRemoteDoc(id, doc, rev), askConflict(local, remoteMeta) → 'local'|'remote'|'both', currentId() }
 */
export class Sync {
  constructor(deps) {
    this.d = deps;
    this.user = null;
    this.backend = null;
    this.timers = new Map();
    this.busy = new Set();
    this.unwatch = null;
    this.status = { state: cloudConfigured() ? 'out' : 'off' };
  }

  setStatus(state, extra = {}) { this.status = { state, ...extra }; this.d.onStatus(this.status); }

  async start() {
    if (!cloudConfigured()) { this.setStatus('off'); return; }
    try { this.backend = globalThis.__officinaFakeCloud ? fakeBackend() : await firebaseBackend(); } catch {
      this.setStatus('error', { msg: 'Servizio online non raggiungibile' });
      return;
    }
    this.backend.onUser(async (u) => {
      this.user = u;
      this.d.onUser(u);
      if (!u) { this.setStatus('out'); if (this.unwatch) { this.unwatch(); this.unwatch = null; } return; }
      await this.syncAll();
      this.watch(this.d.currentId());
    });
    window.addEventListener('online', () => { if (this.user) this.syncAll(); });
  }

  async signIn() {
    if (!this.backend) await this.start();
    if (!this.backend) throw new Error('Salvataggio online non disponibile');
    await this.backend.signIn();
  }
  async signOut() { if (this.backend) await this.backend.signOut(); }

  /** Dopo ogni salvataggio locale: carica online dopo un attimo di calma. */
  schedulePush(id, delay = 1500) {
    if (!this.user) return;
    clearTimeout(this.timers.get(id));
    this.timers.set(id, setTimeout(() => this.push(id), delay));
    this.setStatus('pending');
  }

  async push(id) {
    if (!this.user || this.busy.has(id)) { if (this.user) this.schedulePush(id, 1000); return; }
    const rec = await this.d.store.loadProject(id);
    if (!rec || !rec.dirty || !rec.doc) { this.setStatus('ok'); return; }
    const json = JSON.stringify(rec.doc);
    if (json.length > MAX_BYTES) { this.setStatus('warn', { msg: `«${rec.name}» è troppo grande per il salvataggio online (oltre 15 MB, di solito per STL importati)` }); return; }
    if (!navigator.onLine) { this.setStatus('offline'); return; }
    this.busy.add(id);
    this.setStatus('sync');
    try {
      const meta = { name: rec.name, updated: rec.updated, size: json.length };
      let res = await this.backend.claim(id, rec.rev || 0, meta);
      if (!res.ok) {
        const choice = await this.d.askConflict(rec, res.remote);
        if (choice === 'remote') { await this.pull(id, true); return; }
        if (choice === 'both') {
          const copy = { ...rec, id: this.d.store.newId(), name: `${rec.name} (questo dispositivo)`, rev: 0, dirty: true };
          await this.d.store.saveProject(copy, { keepTime: true });
          await this.pull(id, true);
          this.busy.delete(id);
          await this.push(copy.id);
          return;
        }
        // tieni questa versione: sovrascrive quella online partendo dalla sua revisione
        res = await this.backend.claim(id, res.remote ? res.remote.rev || 0 : 0, meta);
        if (!res.ok) throw new Error('Il progetto è cambiato di nuovo online: riprova');
      }
      await this.backend.putData(id, res.rev, json);
      const now = await this.d.store.loadProject(id);
      // se intanto è stato modificato ancora, resta "da caricare" e riparte
      const still = now && now.updated !== rec.updated;
      await this.d.store.saveProject({ ...(now || rec), rev: res.rev, dirty: !!still }, { keepTime: true });
      if (this.d.onSynced) this.d.onSynced(id, res.rev);
      if (still) { this.busy.delete(id); this.schedulePush(id, 500); return; }
      this.setStatus('ok');
    } catch (e) {
      this.setStatus(navigator.onLine ? 'error' : 'offline', { msg: e.message });
    } finally { this.busy.delete(id); }
  }

  /** Scarica la versione online (i dati possono arrivare un attimo dopo il numero di revisione). */
  async pull(id, force = false) {
    const local = await this.d.store.loadProject(id);
    if (local && local.dirty && !force) return false;
    let data = null;
    for (let i = 0; i < 8; i++) {
      data = await this.backend.getData(id);
      const metas = await this.backend.list();
      const m = metas.find((x) => x.id === id);
      if (data && m && data.rev >= m.rev) break;
      await new Promise((r) => setTimeout(r, 400));
    }
    if (!data) return false;
    const doc = JSON.parse(data.json);
    const rec = { id, name: doc.name || (local && local.name) || 'Progetto', doc, rev: data.rev, dirty: false, remoteOnly: false, updated: Date.now() };
    await this.d.store.saveProject(rec, { keepTime: true });
    this.d.onRemoteDoc(id, doc, data.rev);
    return true;
  }

  async syncAll() {
    if (!this.user) return;
    this.setStatus('sync');
    try {
      const metas = await this.backend.list();
      const locals = await this.d.store.listFull();
      for (const m of metas) {
        const l = locals.find((x) => x.id === m.id);
        if (!l) await this.d.store.saveProject({ id: m.id, name: m.name, doc: null, rev: 0, dirty: false, remoteOnly: true, updated: m.updated }, { keepTime: true });
        else if ((m.rev || 0) > (l.rev || 0) && !l.remoteOnly) {
          if (l.dirty) await this.push(m.id); // conflitto: lo chiede push
          else if (l.id === this.d.currentId()) await this.pull(m.id);
          else await this.d.store.saveProject({ ...l, remoteOnly: true, doc: l.doc, staleRev: m.rev }, { keepTime: true });
        }
      }
      // progetti mai caricati o con modifiche locali
      for (const l of locals) {
        if (l.remoteOnly) continue;
        const m = metas.find((x) => x.id === l.id);
        if (!m && !l.dirty) await this.d.store.saveProject({ ...l, dirty: true }, { keepTime: true });
        if (!m || l.dirty) await this.push(l.id);
      }
      if (this.status.state === 'sync') this.setStatus('ok');
    } catch (e) { this.setStatus(navigator.onLine ? 'error' : 'offline', { msg: e.message }); }
  }

  /** Il progetto aperto si aggiorna da solo quando un altro dispositivo salva. */
  watch(id) {
    if (this.unwatch) { this.unwatch(); this.unwatch = null; }
    if (!this.user || !id) return;
    this.unwatch = this.backend.watch(id, async (m) => {
      const l = await this.d.store.loadProject(id);
      if (!l || (m.rev || 0) <= (l.rev || 0) || this.busy.has(id)) return;
      if (l.dirty) await this.push(id); else await this.pull(id);
    });
  }

  /** Apertura di un progetto che c'è solo online (o è più vecchio della versione online). */
  async ensureLocal(id) {
    const l = await this.d.store.loadProject(id);
    if (l && !l.remoteOnly && l.doc) return l;
    if (!this.user) throw new Error('Questo progetto è online: accedi per aprirlo');
    if (!navigator.onLine && !(l && l.doc)) throw new Error('Serve la connessione per scaricare questo progetto');
    if (l && l.doc && !navigator.onLine) return { ...l, remoteOnly: false };
    await this.pull(id, true);
    return this.d.store.loadProject(id);
  }

  async remove(id) { if (this.user && this.backend) { try { await this.backend.remove(id); } catch { /* offline: resta online */ } } }
}
