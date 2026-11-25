// Quarta prova: tastiera da PC con Tab, comandi a campi dello schizzo, taglia, selezione 3D, import SVG.
import http from 'node:http';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';
import { chromium } from 'playwright-core';

const root = resolve('.');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.wasm': 'application/wasm', '.png': 'image/png', '.webmanifest': 'application/manifest+json' };
const server = http.createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  try { const data = await readFile(join(root, p)); res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'application/octet-stream' }); res.end(data); } catch { res.writeHead(404); res.end(); }
}).listen(8769);
await mkdir('out', { recursive: true });
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await (await browser.newContext({ viewport: { width: 1280, height: 820 } })).newPage();
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push('[pageerror] ' + e.message));
const idle = () => page.waitForFunction(() => !document.body.classList.contains('busy'), null, { timeout: 60000 }).then(() => page.waitForTimeout(300));
const step = async (name, fn) => { try { await fn(); console.log('ok', name); } catch (e) { console.log('FALLITO', name, e.message); await page.screenshot({ path: `out/fail4-${name}.png` }); throw e; } };
const S = (f) => page.evaluate(f);
const count = (type) => S(`window.officina.sketcher.sk.geo.filter((g) => g.type === '${type}' && !g.ref).length`);
const tool = (t) => page.locator(`#toolbar button[title="${t}"]`).click();
let X, Y;
/** punto dello schizzo â†’ coordinate di pagina */
const at = (x, y) => S(`(() => { const s = window.officina.sketcher; const v = s.toS(${x}, ${y}); const r = s.svg.getBoundingClientRect(); return [v[0] + r.left, v[1] + r.top]; })()`);

try {
  await step('avvio', async () => {
    await page.goto('http://localhost:8769/');
    await page.waitForFunction(() => document.querySelector('#loading').hidden, null, { timeout: 90000 });
    await S(async () => { const o = window.officina; o.app.doc.features = []; o.app.doc.params = []; await o.refresh(); });
    await idle();
    await S(() => window.officina.startSketch({ std: 'XY' }));
    await page.waitForTimeout(300);
    const box = await page.locator('.sketch-svg').boundingBox();
    X = (dx) => box.x + box.width / 2 + dx; Y = (dy) => box.y + box.height / 2 + dy;
  });

  await step('linea da tastiera: 40 Tab 30 Invio', async () => {
    await tool('Linea');
    await page.mouse.click(X(-300), Y(150));
    await page.mouse.move(X(-200), Y(100));
    await page.waitForSelector('#dynInput:not([hidden])');
    await page.keyboard.type('40');
    await page.keyboard.press('Tab');
    await page.keyboard.type('30');
    await page.mouse.move(X(-150), Y(80));
    await page.screenshot({ path: 'out/40-tastiera.png' });
    await page.keyboard.press('Enter');
    await page.waitForTimeout(150);
    const r = await S(() => { const s = window.officina.sketcher; return { d: s.sk.cons.filter((c) => c.type === 'p2p_distance').map((c) => c.expr), a: s.sk.cons.filter((c) => c.type === 'l2l_angle_ll').map((c) => c.expr), chain: s.state && s.state.kind }; });
    console.log('   ', JSON.stringify(r));
    if (r.d.join() !== '40' || r.a.join() !== '30') throw new Error('quote attese 40 e 30Â°');
    await page.keyboard.press('Escape');
    await page.keyboard.press('Escape');
  });

  await step('rettangolo col mouse e valori bloccati', async () => {
    await tool('Rettangolo');
    await page.mouse.click(X(0), Y(0));
    await page.mouse.move(X(60), Y(-60));
    await page.keyboard.type('50');
    await page.keyboard.press('Tab');
    await page.keyboard.type('30');
    await page.mouse.move(X(120), Y(-90));
    await page.mouse.click(X(120), Y(-90));
    await page.waitForTimeout(150);
    const d = await S(() => window.officina.sketcher.sk.cons.filter((c) => c.type === 'p2p_distance').map((c) => c.expr));
    if (!d.includes('50') || !d.includes('30')) throw new Error('quote rettangolo ' + d);
  });

  await step('raccordo con due linee selezionate prima', async () => {
    await tool('Seleziona');
    const [l1, l2] = await S(() => { const s = window.officina.sketcher; const d = s.sk.cons.find((c) => c.expr === '50'); const ls = s.sk.geo.filter((g) => g.type === 'line' && [g.p1_id, g.p2_id].includes(d.p2_id)); return ls.map((l) => { const a = s.P(l.p1_id), b = s.P(l.p2_id); return [a.x * 0.7 + b.x * 0.3, a.y * 0.7 + b.y * 0.3]; }); });
    await page.mouse.click(...(await at(...l1)));
    await page.mouse.click(...(await at(...l2)));
    await tool('Raccordo');
    const n = await S(() => window.officina.sketcher.cmd.vals.corners.length);
    if (n !== 1) throw new Error('angoli precompilati ' + n);
    await page.fill('#panel input[data-skk="r"]', '6');
    await page.waitForTimeout(100);
    await page.screenshot({ path: 'out/41-raccordo-pannello.png' });
    await page.click('#panel [data-skok]');
    if (await count('arc') !== 1) throw new Error('arco mancante');
  });

  await step('smusso dal pannello', async () => {
    await tool('Smusso');
    const c = await S(() => { const s = window.officina.sketcher; const d = s.sk.cons.find((c) => c.expr === '50'); const p = s.P(d.p1_id); return [p.x, p.y]; });
    await page.mouse.click(...(await at(...c)));
    await page.fill('#panel input[data-skk="d"]', '4');
    await page.click('#panel [data-skok]');
    const L = await count('line');
    console.log('   linee dopo smusso', L);
  });

  await step('offset del rettangolo', async () => {
    const before = await count('line');
    await tool('Offset');
    const mid = await S(() => { const s = window.officina.sketcher; const d = s.sk.cons.find((c) => c.expr === '30' && c.type === 'p2p_distance'); const a = s.P(d.p1_id), b = s.P(d.p2_id); return [(a.x + b.x) / 2, (a.y + b.y) / 2]; });
    await page.mouse.click(...(await at(...mid)));
    const n = await S(() => window.officina.sketcher.cmd.vals.objects.length);
    console.log('   tratti presi', n);
    await page.fill('#panel input[data-skk="d"]', '3');
    await page.waitForTimeout(150);
    await page.screenshot({ path: 'out/42-offset.png' });
    const dbg = await S(() => {
      const s = window.officina.sketcher;
      try {
        const res = s.offsetCompute(s.cmd.vals.objects, 3, false);
        const snap = s.snapshot();
        s.offsetCommit(res, '3');
        const r = s.resolve();
        Object.assign(s.sk, JSON.parse(snap)); s.resolve();
        return { segs: res.map((c) => c.segs ? c.segs.map((x) => x.kind) : 'cerchio'), ok: r.ok, conflicting: r.conflicting, redundant: r.redundant, err: r.error };
      } catch (e) { return { ex: e.message }; }
    });
    console.log('   debug', JSON.stringify(dbg));
    await page.click('#panel [data-skok]');
    console.log('   avvisi', await S(() => [...document.querySelectorAll('.toast')].map((t) => t.textContent).join(' | ')));
    const after = await count('line');
    const r = await S(() => window.officina.sketcher.statusInfo());
    console.log('   linee', before, '->', after, 'archi', await count('arc'), 'liberi', r.dof, 'conflitti', r.conflicting.length);
    if (after <= before) throw new Error('offset non creato');
  });

  await step('specchia con i due campi', async () => {
    const before = await count('line');
    await tool('Specchia');
    // oggetti: la linea a 30Â°
    const mid = await S(() => { const s = window.officina.sketcher; const c = s.sk.cons.find((k) => k.type === 'l2l_angle_ll'); const l = s.P(c.l2_id); const a = s.P(l.p1_id), b = s.P(l.p2_id); return [(a.x + b.x) / 2, (a.y + b.y) / 2]; });
    await page.mouse.click(...(await at(...mid)));
    await page.click('#panel [data-skpick="axis"]');
    await page.mouse.click(X(0), Y(-300)); // asse Y
    await page.screenshot({ path: 'out/43-specchia.png' });
    await page.click('#panel [data-skok]');
    if (await count('line') !== before + 1) throw new Error('linea specchiata mancante');
  });

  await step('taglia un pezzo di cerchio', async () => {
    // cerchio che attraversa la linea a 30Â°: lo creo dallo strumento
    const p = await S(() => { const s = window.officina.sketcher; const c = s.sk.cons.find((k) => k.type === 'l2l_angle_ll'); const l = s.P(c.l2_id); const a = s.P(l.p1_id), b = s.P(l.p2_id); return [(a.x + b.x) / 2, (a.y + b.y) / 2]; });
    await tool('Cerchio');
    await page.mouse.click(...(await at(p[0] + 4, p[1] - 4)));
    await page.mouse.click(...(await at(p[0] + 4 + 8, p[1] - 4)));
    const circles = await count('circle');
    await tool('Taglia');
    await page.mouse.click(...(await at(p[0] + 4 + 8, p[1] - 4))); // lato destro del cerchio
    await page.waitForTimeout(150);
    const r = { circles: await count('circle'), arcs: await count('arc') };
    console.log('   cerchi', circles, '->', r.circles, 'archi', r.arcs);
    await page.screenshot({ path: 'out/44-taglia.png' });
    if (r.circles !== circles - 1) throw new Error('cerchio non tagliato');
    await page.click('#sketchFinish [data-finish]');
    await idle();
  });

  await step('selezione spigoli nel 3D e raccordo', async () => {
    await S(async () => {
      const o = window.officina;
      const sk = o.app.doc.features[0];
      const { findRegions } = await import('./dist/app.js').catch(() => ({}));
      void findRegions; void sk;
    });
    await page.click('#quickbar [data-qcmd="extrude"]');
    await idle();
    await page.click('#panel [data-act="ok"]');
    await idle();
    await S(() => window.officina.vp.view('iso'));
    await page.waitForTimeout(600);
    const p = await S(() => { const { vp } = window.officina; const b = [...vp.bodies.values()][0]; let best = null; b.data.edgeInfo.forEach((e, i) => { if (e.t === 'LINE' && e.m[2] > 5) { const s = vp.project(e.m); if (!best || s[1] > best[1]) best = s; } }); const r = vp.canvas.getBoundingClientRect(); return [best[0] + r.left, best[1] + r.top]; });
    await page.mouse.click(p[0], p[1]);
    await page.waitForSelector('#selbar:not([hidden])');
    await page.screenshot({ path: 'out/45-selezione-3d.png' });
    await page.click('#selbar [data-scmd="fillet"]');
    await idle();
    const n = await S(() => window.officina.app.cmd.draft.edges.length);
    if (n !== 1) throw new Error('spigoli nel comando ' + n);
    await page.click('#panel [data-act="ok"]');
    await idle();
    const err = await S(() => window.officina.app.model.errors);
    console.log('   errori modello', JSON.stringify(err));
  });

  await step('import SVG con curve', async () => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80mm" height="40mm" viewBox="0 0 80 40">
      <path d="M5 35 C5 5, 35 5, 35 20 S 60 40, 75 10 L75 35 Z"/>
      <rect x="45" y="22" width="20" height="10" rx="3"/>
      <circle cx="15" cy="25" r="4"/>
      <g transform="translate(60 8) rotate(30)"><ellipse cx="0" cy="0" rx="5" ry="2.5"/></g>
    </svg>`;
    await writeFile('out/prova.svg', svg);
    const fc = page.waitForEvent('filechooser');
    await S(() => document.querySelector('#toolbar button[title="Importa"]').click());
    await (await fc).setFiles('out/prova.svg');
    await page.waitForSelector('#modal [data-w]');
    await page.screenshot({ path: 'out/46-svg-finestra.png' });
    await page.fill('#modal [data-w]', '120');
    await page.click('#modal [data-go]');
    await idle();
    const r = await S(() => { const o = window.officina; const sk = o.app.doc.features.at(-1); return { name: sk.name, n: sk.geo.length }; });
    console.log('   ', JSON.stringify(r));
    await page.waitForSelector('#quickbar:not([hidden])');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'out/47-svg-schizzo.png' });
    await page.click('#quickbar [data-qcmd="extrude"]');
    await idle();
    const regs = await S(() => window.officina.app.cmd.draft.regions.length);
    await page.click('#panel [data-act="ok"]');
    await idle();
    const st = await S(() => ({ bodies: window.officina.app.model.bodies.length, errors: window.officina.app.model.errors }));
    console.log('   profili', regs, JSON.stringify(st));
    await page.screenshot({ path: 'out/48-svg-estruso.png' });
    if (Object.keys(st.errors).length) throw new Error('errori estrusione SVG');
  });
} finally {
  console.log('--- errori console ---');
  console.log(errors.join('\n') || '(nessuno)');
  await browser.close();
  server.close();
}
