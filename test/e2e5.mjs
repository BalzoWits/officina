// Quinta prova: selezione delle forme senza menu e frecce di controllo trascinabili.
import http from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';
import { chromium } from 'playwright-core';

const root = resolve('.');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.wasm': 'application/wasm', '.png': 'image/png', '.webmanifest': 'application/manifest+json' };
const server = http.createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  try { const data = await readFile(join(root, p)); res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'application/octet-stream' }); res.end(data); } catch { res.writeHead(404); res.end(); }
}).listen(8771);
await mkdir('out', { recursive: true });
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await (await browser.newContext({ viewport: { width: 1280, height: 820 } })).newPage();
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push('[pageerror] ' + e.message));
const idle = () => page.waitForFunction(() => !document.body.classList.contains('busy'), null, { timeout: 60000 }).then(() => page.waitForTimeout(350));
const step = async (name, fn) => { try { await fn(); console.log('ok', name); } catch (e) { console.log('FALLITO', name, e.message); await page.screenshot({ path: `out/fail5-${name}.png` }); throw e; } };
const S = (f, a) => page.evaluate(f, a);
/** posizione della maniglia sullo schermo (coordinate pagina) */
const knob = (id) => S((id) => { const { vp } = window.officina; const h = vp.handles.find((x) => x.id === id); const s = vp.project(vp.handlePos(h).toArray()); const r = vp.canvas.getBoundingClientRect(); return [s[0] + r.left, s[1] + r.top]; }, id);
const drag = async (from, to) => { await page.mouse.move(...from); await page.mouse.down(); await page.mouse.move((from[0] + to[0]) / 2, (from[1] + to[1]) / 2, { steps: 4 }); await page.mouse.move(...to, { steps: 6 }); await page.mouse.up(); };
const REF = [{ id: 'O', type: 'point', x: 0, y: 0, fixed: true, ref: true }, { id: 'X1', type: 'point', x: 1, y: 0, fixed: true, ref: true }, { id: 'Y1', type: 'point', x: 0, y: 1, fixed: true, ref: true },
  { id: 'AX', type: 'line', p1_id: 'O', p2_id: 'X1', ref: true }, { id: 'AY', type: 'line', p1_id: 'O', p2_id: 'Y1', ref: true }];
const P = (id, x, y) => ({ id, type: 'point', x, y, fixed: false });
const L = (id, a, b) => ({ id, type: 'line', p1_id: a, p2_id: b });

try {
  await step('avvio con uno schizzo a due forme', async () => {
    await page.goto('http://localhost:8771/');
    await page.waitForFunction(() => document.querySelector('#loading').hidden, null, { timeout: 90000 });
    const geo = [...REF, P('a', 0, 0), P('b', 40, 0), P('c', 40, 30), P('d', 0, 30), L('l1', 'a', 'b'), L('l2', 'b', 'c'), L('l3', 'c', 'd'), L('l4', 'd', 'a'), P('m1', 20, -5), P('m2', 20, 35), L('m', 'm1', 'm2')];
    await S(async (geo) => { const o = window.officina; o.app.doc.params = [{ name: 'h', expr: '8' }]; o.app.doc.features = [{ id: 's1', type: 'sketch', name: 'Schizzo 1', plane: { std: 'XY' }, geo, cons: [] }]; await o.refresh(); o.vp.view('iso'); }, geo);
    await idle();
    await page.waitForTimeout(500);
  });

  await step('tocco su una forma: selezione e barra, niente menu', async () => {
    const p = await S(() => { const { vp } = window.officina; const s = vp.project([30, 15, 0]); const r = vp.canvas.getBoundingClientRect(); return [s[0] + r.left, s[1] + r.top]; });
    await page.mouse.click(...p);
    await page.waitForSelector('#selbar:not([hidden])');
    if (await page.locator('#popover .menu').count()) throw new Error('il menu compare ancora');
    const q = await S(() => { const { vp } = window.officina; const s = vp.project([10, 15, 0]); const r = vp.canvas.getBoundingClientRect(); return [s[0] + r.left, s[1] + r.top]; });
    await page.mouse.click(...q);
    const n = await S(() => window.officina.app.msel.regions.length);
    if (n !== 2) throw new Error('forme selezionate ' + n);
    await page.screenshot({ path: 'out/50-forme-selezionate.png' });
    await page.click('#selbar [data-scmd="extrude"]');
    await idle();
    const r = await S(() => window.officina.app.cmd.draft.regions.length);
    if (r !== 2) throw new Error('profili nel comando ' + r);
  });

  await step('freccia dell\'estrusione trascinata', async () => {
    const before = await S(() => window.officina.app.cmd.draft.dist);
    const k = await knob('dist');
    await page.screenshot({ path: 'out/51-freccia-estrudi.png' });
    await drag(k, [k[0], k[1] - 120]);
    await idle();
    const after = await S(() => window.officina.app.cmd.draft.dist);
    console.log('   distanza', before, '->', after, 'campo', await page.inputValue('#panel input[data-k="dist"]'));
    if (Number(after) <= Number(before)) throw new Error('la distanza non è aumentata');
    await page.screenshot({ path: 'out/52-freccia-trascinata.png' });
    await page.click('#panel [data-act="ok"]');
    await idle();
  });

  await step('freccia bloccata con un parametro', async () => {
    await S(() => window.officina.openCommand('extrude', window.officina.app.doc.features[1]));
    await idle();
    await page.fill('#panel input[data-k="dist"]', 'h*2');
    await page.waitForTimeout(600);
    await idle();
    const k = await knob('dist');
    await drag(k, [k[0], k[1] - 80]);
    await page.waitForTimeout(200);
    const v = await S(() => window.officina.app.cmd.draft.dist);
    const msg = await S(() => [...document.querySelectorAll('.toast')].map((t) => t.textContent).join('|'));
    console.log('   valore', v, '· avviso:', msg);
    if (v !== 'h*2') throw new Error('il legame col parametro si è perso');
    await page.click('#panel [data-act="ok"]');
    await idle();
  });

  await step('freccia del raccordo', async () => {
    await S(async () => {
      const o = window.officina;
      o.openCommand('fillet');
      await o.refresh();
      while (document.body.classList.contains('busy')) await new Promise((r) => setTimeout(r, 100));
      const b = [...o.vp.pickBodies.values()][0];
      const i = b.data.edgeInfo.findIndex((e) => e.t === 'LINE' && Math.abs(e.m[2] - 16) < 1e-6 && Math.abs(e.m[1]) < 1e-6);
      o.applyPick(o.activePickField(), { kind: 'edge', body: b.id, i });
    });
    await idle();
    const k = await knob('r');
    // la freccia punta fuori dallo spigolo: trascino nella sua direzione
    const dir = await S(() => { const { vp } = window.officina; const h = vp.handles[0]; const a = vp.project(h.origin), b = vp.project(vp.handlePos(h, h.value + 10).toArray()); return [b[0] - a[0], b[1] - a[1]]; });
    const L2 = Math.hypot(...dir) || 1;
    await drag(k, [k[0] + (dir[0] / L2) * 40, k[1] + (dir[1] / L2) * 40]);
    await idle();
    const r = await S(() => window.officina.app.cmd.draft.r);
    console.log('   raggio', r);
    if (!(Number(r) > 2)) throw new Error('raggio non aumentato');
    await page.screenshot({ path: 'out/53-freccia-raccordo.png' });
    await page.click('#panel [data-act="ok"]');
    await idle();
  });

  await step('frecce di Sposta', async () => {
    const id = await S(() => window.officina.app.model.bodies[0].id);
    await S((id) => window.officina.openCommand('move', null, { bodies: [id] }), id);
    await idle();
    const n = await S(() => window.officina.vp.handles.length);
    if (n !== 3) throw new Error('frecce ' + n);
    const k = await knob('dx');
    const dir = await S(() => { const { vp } = window.officina; const h = vp.handles.find((x) => x.id === 'dx'); const a = vp.project(vp.handlePos(h).toArray()), b = vp.project(vp.handlePos(h, h.value + 10).toArray()); return [b[0] - a[0], b[1] - a[1]]; });
    const L2 = Math.hypot(...dir) || 1;
    await drag(k, [k[0] + (dir[0] / L2) * 80, k[1] + (dir[1] / L2) * 80]);
    await idle();
    const dx = await S(() => window.officina.app.cmd.draft.dx);
    console.log('   dx', dx);
    if (!(Number(dx) > 0)) throw new Error('nessuno spostamento');
    await page.screenshot({ path: 'out/54-frecce-sposta.png' });
    await page.click('#panel [data-act="cancel"]');
    await idle();
  });

  await step('maniglia ad arco della rivoluzione', async () => {
    await S(async () => {
      const o = window.officina;
      o.openCommand('revolve', null, { sketch: 's1', regions: [{ key: 'l1,l2,l3,m', seed: [30, 15] }], axis: { world: 'Y' }, angle: '90', op: 'new' });
    });
    await idle();
    const k = await knob('angle');
    await page.screenshot({ path: 'out/55-arco-prima.png' });
    const k2 = await S(() => { const { vp } = window.officina; const h = vp.handles[0]; const s = vp.project(vp.handlePos(h, 150).toArray()); const r = vp.canvas.getBoundingClientRect(); return [s[0] + r.left, s[1] + r.top]; });
    await drag(k, k2);
    await idle();
    const a = await S(() => window.officina.app.cmd.draft.angle);
    console.log('   angolo', a);
    if (!(Number(a) > 100)) throw new Error('angolo non cambiato');
    await page.screenshot({ path: 'out/56-arco-dopo.png' });
  });
} finally {
  console.log('--- errori console ---');
  console.log(errors.join('\n') || '(nessuno)');
  await browser.close();
  server.close();
}
