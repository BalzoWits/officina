// Terza prova: il triangolo dell'utente, azioni rapide, misure esatte, vincoli a tocchi, specchio e raccordo 2D, guida.
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
}).listen(8768);
await mkdir('out', { recursive: true });
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await (await browser.newContext({ viewport: { width: 1180, height: 820 }, hasTouch: true })).newPage();
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push('[pageerror] ' + e.message));
const idle = () => page.waitForFunction(() => !document.body.classList.contains('busy'), null, { timeout: 60000 }).then(() => page.waitForTimeout(300));
const step = async (name, fn) => { try { await fn(); console.log('ok', name); } catch (e) { console.log('FALLITO', name, e.message); await page.screenshot({ path: `out/fail3-${name}.png` }); throw e; } };
const sk = () => page.evaluate(() => { const s = window.officina.sketcher; return { geo: s.sk.geo.filter((g) => !g.ref).length, cons: s.sk.cons.length, regions: (s.regions || []).length, dof: s.status.dof, tool: s.tool, state: s.state && s.state.kind }; });
let box, X, Y;
const tool = (t) => page.locator(`#toolbar button[title="${t}"]`).click();

try {
  await step('benvenuto', async () => {
    await page.goto('http://localhost:8768/');
    await page.waitForFunction(() => document.querySelector('#loading').hidden, null, { timeout: 90000 });
    await page.evaluate(async () => { const o = window.officina; o.app.doc.features = []; o.app.doc.params = []; await o.refresh(); });
    await idle();
    if (await page.locator('#welcome').isHidden()) throw new Error('scheda di benvenuto assente');
    await page.screenshot({ path: 'out/30-benvenuto.png' });
  });

  await step('triangolo come l\'utente (passa per l\'origine)', async () => {
    await page.click('#welcome [data-wstart]');
    await page.evaluate(() => window.officina.startSketch({ std: 'XY' }));
    await page.waitForTimeout(300);
    box = await page.locator('.sketch-svg').boundingBox();
    X = (dx) => box.x + box.width / 2 + dx; Y = (dy) => box.y + box.height / 2 + dy;
    await tool('Linea');
    await page.mouse.click(X(-200), Y(0));
    await page.mouse.click(X(0), Y(0)); // origine: la catena deve proseguire
    let s = await sk();
    if (s.state !== 'line') throw new Error('la catena si è fermata sull\'origine');
    await page.mouse.move(X(-80), Y(-120));
    await page.waitForTimeout(100);
    await page.screenshot({ path: 'out/31-angolo.png' });
    await page.mouse.click(X(-80), Y(-120));
    await page.mouse.click(X(-200), Y(0)); // ritorno al primo punto: chiude
    s = await sk();
    console.log('   ', JSON.stringify(s));
    if (s.state) throw new Error('la catena non si è chiusa');
    if (s.regions !== 1) throw new Error('regioni ' + s.regions);
  });

  await step('misure esatte: rettangolo 30 x 20 con la barra', async () => {
    await tool('Rettangolo');
    await page.mouse.click(X(100), Y(50));
    await page.waitForSelector('#sketchInput:not([hidden]) input[data-k="w"]');
    await page.fill('#sketchInput input[data-k="w"]', '30');
    await page.fill('#sketchInput input[data-k="h"]', '20');
    await page.click('#sketchInput [data-xok]');
    await page.waitForTimeout(200);
    const d = await page.evaluate(() => window.officina.sketcher.sk.cons.filter((c) => c.type === 'p2p_distance').map((c) => c.expr));
    if (d.join() !== '30,20') throw new Error('quote ' + d);
    // linea con lunghezza e angolo
    await tool('Linea');
    await page.mouse.click(X(100), Y(-150));
    await page.fill('#sketchInput input[data-k="len"]', '25');
    await page.fill('#sketchInput input[data-k="ang"]', '30');
    await page.press('#sketchInput input[data-k="ang"]', 'Enter');
    await page.waitForTimeout(200);
    const a = await page.evaluate(() => window.officina.sketcher.sk.cons.filter((c) => c.type === 'l2l_angle_ll').map((c) => c.expr));
    if (a.join() !== '30') throw new Error('angolo ' + a);
    await page.keyboard.press('Escape');
    await page.screenshot({ path: 'out/32-misure.png' });
  });

  await step('vincolo a tocchi: parallela', async () => {
    const before = (await sk()).cons;
    await tool('Parallela');
    // linea inclinata a 30° e lato inclinato del triangolo
    const pts = await page.evaluate(() => {
      const s = window.officina.sketcher;
      const ang = s.sk.cons.find((c) => c.type === 'l2l_angle_ll');
      const l = s.P(ang.l2_id); const a = s.P(l.p1_id), b = s.P(l.p2_id);
      const tri = s.sk.geo.find((g) => g.type === 'line' && !g.ref && ![...s.sk.cons].some((c) => c.l_id === g.id));
      const c = s.P(tri.p1_id), d = s.P(tri.p2_id);
      const r = s.svg.getBoundingClientRect();
      const m = (p, q) => { const v = s.toS((p.x + q.x) / 2, (p.y + q.y) / 2); return [v[0] + r.left, v[1] + r.top]; };
      return [m(a, b), m(c, d)];
    });
    await page.mouse.click(...pts[0]);
    await page.mouse.click(...pts[1]);
    await page.waitForTimeout(200);
    const after = (await sk()).cons;
    console.log('   vincoli', before, '->', after);
  });

  await step('specchia il triangolo sull\'asse Y', async () => {
    const n0 = (await sk()).geo;
    await tool('Specchia');
    await page.mouse.click(X(0), Y(-250)); // asse Y tratteggiato
    const lines = await page.evaluate(() => {
      const s = window.officina.sketcher;
      const r = s.svg.getBoundingClientRect();
      // i tre lati del triangolo: linee con un estremo a x < -1
      return s.sk.geo.filter((g) => g.type === 'line' && !g.ref).filter((g) => { const a = s.P(g.p1_id), b = s.P(g.p2_id); return (a.x < -1 || b.x < -1) && a.x < 0.01 && b.x < 0.01; })
        .map((g) => { const a = s.P(g.p1_id), b = s.P(g.p2_id); const v = s.toS(a.x * 0.6 + b.x * 0.4, a.y * 0.6 + b.y * 0.4); return [v[0] + r.left, v[1] + r.top]; });
    });
    for (const p of lines) await page.mouse.click(...p);
    await page.screenshot({ path: 'out/33-specchia-scelta.png' });
    await page.click('#sketchInput [data-mapply]');
    await page.waitForTimeout(200);
    const s = await sk();
    console.log('   elementi', n0, '->', s.geo, 'regioni', s.regions);
    if (s.geo <= n0) throw new Error('nessuna copia');
  });

  await step('raccordo 2D su un angolo del rettangolo', async () => {
    const p = await page.evaluate(() => {
      const s = window.officina.sketcher;
      const d = s.sk.cons.find((c) => c.type === 'p2p_distance' && c.expr === '30');
      const q = s.P(d.p2_id); const v = s.toS(q.x, q.y); const r = s.svg.getBoundingClientRect();
      return [v[0] + r.left, v[1] + r.top];
    });
    await tool('Raccordo');
    await page.mouse.click(...p);
    await page.waitForSelector('#modal:not([hidden]) input.big');
    await page.fill('#modal input.big', '4');
    await page.click('#modal [data-ok]');
    await page.waitForTimeout(300);
    const arcs = await page.evaluate(() => window.officina.sketcher.sk.geo.filter((g) => g.type === 'arc').length);
    if (arcs !== 1) throw new Error('archi ' + arcs);
    const keep = await page.evaluate(() => window.officina.sketcher.sk.cons.some((c) => c.expr === '30'));
    if (!keep) throw new Error('la quota 30 è sparita col raccordo');
    await page.screenshot({ path: 'out/34-raccordo2d.png' });
  });

  await step('guida nello schizzo', async () => {
    await page.click('#btnHelp');
    await page.waitForSelector('#modal ul.help');
    await page.screenshot({ path: 'out/35-guida.png' });
    await page.click('#modal [data-close]');
  });

  await step('fine schizzo → azioni rapide → estrudi', async () => {
    await page.click('#sketchFinish [data-finish]');
    await idle();
    await page.waitForSelector('#quickbar:not([hidden])');
    await page.screenshot({ path: 'out/36-azioni-rapide.png' });
    await page.click('#quickbar [data-qcmd="extrude"]');
    await idle();
    const n = await page.evaluate(() => window.officina.app.cmd.draft.regions.length);
    console.log('   profili preselezionati', n);
    if (!n) throw new Error('nessun profilo preselezionato');
    await page.screenshot({ path: 'out/37-estrudi.png' });
    await page.click('#panel [data-act="ok"]');
    await idle();
    const b = await page.evaluate(() => window.officina.app.model.bodies.length);
    console.log('   corpi', b);
  });

  await step('tocco su forma in modello → menu', async () => {
    await page.evaluate(async () => {
      const o = window.officina;
      // nuovo schizzo con un cerchio, lasciato senza estrusione
      o.app.doc.features.push({ id: 'sx', type: 'sketch', name: 'Cerchio', plane: { std: 'XY', }, cons: [], geo: [
        { id: 'O', type: 'point', x: 0, y: 0, fixed: true, ref: true }, { id: 'X1', type: 'point', x: 1, y: 0, fixed: true, ref: true }, { id: 'Y1', type: 'point', x: 0, y: 1, fixed: true, ref: true },
        { id: 'AX', type: 'line', p1_id: 'O', p2_id: 'X1', ref: true }, { id: 'AY', type: 'line', p1_id: 'O', p2_id: 'Y1', ref: true },
        { id: 'c', type: 'point', x: 0, y: -60 }, { id: 'k', type: 'circle', c_id: 'c', radius: 12 }] });
      await o.refresh();
      o.vp.view('top');
    });
    await page.waitForTimeout(700);
    const p = await page.evaluate(() => { const o = window.officina; const s = o.vp.project([0, -60, 0]); const r = o.vp.canvas.getBoundingClientRect(); return [s[0] + r.left, s[1] + r.top]; });
    await page.mouse.click(...p);
    await page.waitForSelector('#popover .menu');
    await page.screenshot({ path: 'out/38-menu-forma.png' });
  });
} finally {
  console.log('--- errori console ---');
  console.log(errors.join('\n') || '(nessuno)');
  await browser.close();
  server.close();
}
