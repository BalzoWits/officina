// Definizione dei comandi-feature: valori iniziali e campi del pannello.
export const OPS = [['new', 'Nuovo corpo'], ['join', 'Unisci'], ['cut', 'Taglia'], ['intersect', 'Interseca']];
const AX3 = [['X', 'X'], ['Y', 'Y'], ['Z', 'Z']];

export const TYPE_NAMES = {
  sketch: 'Schizzo', extrude: 'Estrusione', revolve: 'Rivoluzione', fillet: 'Raccordo', chamfer: 'Smusso', shell: 'Guscio',
  hole: 'Foro', pattern: 'Serie', mirror: 'Specchio', combine: 'Combina', move: 'Sposta', import: 'Importazione',
};
export const TYPE_ICONS = {
  sketch: 'sketch', extrude: 'extrude', revolve: 'revolve', fillet: 'fillet', chamfer: 'chamfer', shell: 'shell',
  hole: 'hole', pattern: 'pattern', mirror: 'mirror', combine: 'combine', move: 'move', import: 'import',
};

const worldSeg = (k, label, withNone = false, extra = []) => ({
  k, kind: 'seg', label,
  options: [...(withNone ? [['none', '—']] : []), ...AX3, ...extra],
  get: (f) => (f[k] === 'none' || !f[k] ? 'none' : f[k].world || (f[k].edge ? 'edge' : f[k].line ? 'line' : 'Z')),
  set: (f, v) => { f[k] = v === 'none' ? 'none' : v === 'edge' ? { edge: null } : v === 'line' ? { line: null } : { world: v }; },
});

const srcFields = (f, ctx) => [
  { k: 'srcMode', kind: 'seg', label: 'Cosa ripetere', options: [['feature', 'Feature'], ['body', 'Corpo']],
    get: (x) => (x.src && x.src.body !== undefined ? 'body' : 'feature'),
    set: (x, v) => { x.src = v === 'body' ? { body: null } : { feature: ctx.toolFeatures.length ? ctx.toolFeatures[ctx.toolFeatures.length - 1].id : null }; } },
  f.src && f.src.body !== undefined
    ? { k: 'srcBody', kind: 'pick', pick: 'body', label: 'Corpo', get: (x) => (x.src.body ? [x.src.body] : []), set: (x, v) => { x.src = { body: v[v.length - 1] || null }; } }
    : { k: 'srcFeature', kind: 'select', label: 'Feature', options: ctx.toolFeatures.map((t) => [t.id, t.name]), get: (x) => x.src && x.src.feature, set: (x, v) => { x.src = { feature: v }; } },
];

export const COMMANDS = {
  extrude: {
    title: 'Estrudi',
    init: (ctx) => ({ type: 'extrude', sketch: ctx.autoRegions?.sketch || null, regions: ctx.autoRegions?.regions || [], dist: '10', mode: 'one', dist2: '10', flip: false, op: ctx.hasBodies ? 'join' : 'new', targets: [] }),
    fields: (f) => [
      { k: 'regions', kind: 'pick', pick: 'region', multi: true, label: 'Profili', hint: 'Tocca dentro le forme azzurre per sceglierle (tocca di nuovo per toglierle)' },
      { k: 'dist', kind: 'num', label: f.mode === 'sym' ? 'Distanza totale' : 'Distanza', unit: 'mm' },
      { k: 'mode', kind: 'seg', label: 'Estensione', options: [['one', 'Un lato'], ['sym', 'Simmetrica'], ['two', 'Due lati']] },
      f.mode === 'two' && { k: 'dist2', kind: 'num', label: 'Distanza lato 2', unit: 'mm' },
      { k: 'flip', kind: 'toggle', label: 'Inverti direzione' },
      { k: 'op', kind: 'seg', label: 'Operazione', options: OPS },
      f.op !== 'new' && { k: 'targets', kind: 'pick', pick: 'body', multi: true, label: 'Corpi coinvolti', hint: 'Vuoto = automatico', optional: true },
    ],
  },
  revolve: {
    title: 'Rivoluzione',
    init: (ctx) => ({ type: 'revolve', sketch: ctx.autoRegions?.sketch || null, regions: ctx.autoRegions?.regions || [], axis: { world: 'Z' }, angle: '360', flip: false, op: ctx.hasBodies ? 'join' : 'new', targets: [] }),
    fields: (f) => [
      { k: 'regions', kind: 'pick', pick: 'region', multi: true, label: 'Profili', hint: 'Tocca dentro le forme azzurre da far ruotare' },
      worldSeg('axis', 'Asse', false, [['line', 'Linea']]),
      f.axis && f.axis.line !== undefined && { k: 'axisLine', kind: 'pick', pick: 'sketchLine', label: 'Linea asse', hint: "Tocca una linea dello schizzo", get: (x) => (x.axis.line ? [x.axis.line] : []), set: (x, v) => { x.axis = { line: v[v.length - 1] || null }; } },
      { k: 'angle', kind: 'num', label: 'Angolo', unit: '°' },
      { k: 'flip', kind: 'toggle', label: 'Inverti verso' },
      { k: 'op', kind: 'seg', label: 'Operazione', options: OPS },
      f.op !== 'new' && { k: 'targets', kind: 'pick', pick: 'body', multi: true, label: 'Corpi coinvolti', hint: 'Vuoto = automatico', optional: true },
    ],
  },
  fillet: {
    title: 'Raccordo',
    init: () => ({ type: 'fillet', edges: [], r: '2' }),
    fields: () => [
      { k: 'edges', kind: 'pick', pick: 'edge', multi: true, label: 'Spigoli', hint: 'Tocca gli spigoli da arrotondare' },
      { k: 'r', kind: 'num', label: 'Raggio', unit: 'mm' },
    ],
  },
  chamfer: {
    title: 'Smusso',
    init: () => ({ type: 'chamfer', edges: [], d: '1' }),
    fields: () => [
      { k: 'edges', kind: 'pick', pick: 'edge', multi: true, label: 'Spigoli', hint: 'Tocca gli spigoli da smussare' },
      { k: 'd', kind: 'num', label: 'Distanza', unit: 'mm' },
    ],
  },
  shell: {
    title: 'Guscio',
    init: () => ({ type: 'shell', faces: [], t: '2', outside: false }),
    fields: () => [
      { k: 'faces', kind: 'pick', pick: 'face', multi: true, label: 'Facce da aprire', hint: 'Tocca le facce da togliere' },
      { k: 't', kind: 'num', label: 'Spessore', unit: 'mm' },
      { k: 'outside', kind: 'toggle', label: "Verso l'esterno" },
    ],
  },
  hole: {
    title: 'Foro',
    init: () => ({ type: 'hole', place: { face: null, pts: [] }, dia: '5', depth: '10', through: false, cbore: false, cdia: '9', cdepth: '3', flip: false }),
    fields: (f) => [
      f.place ? { k: 'place', kind: 'pick', pick: 'facePoint', multi: true, label: 'Posizioni', hint: 'Tocca una faccia piana dove forare (anche più punti)' }
        : { k: 'note', kind: 'note', text: 'Le posizioni dei fori sono i punti dello schizzo collegato: modificalo per spostarli o quotarli.' },
      { k: 'dia', kind: 'num', label: 'Diametro', unit: 'mm' },
      { k: 'through', kind: 'toggle', label: 'Passante' },
      !f.through && { k: 'depth', kind: 'num', label: 'Profondità', unit: 'mm' },
      { k: 'cbore', kind: 'toggle', label: 'Lamatura' },
      f.cbore && { k: 'cdia', kind: 'num', label: 'Diametro lamatura', unit: 'mm' },
      f.cbore && { k: 'cdepth', kind: 'num', label: 'Profondità lamatura', unit: 'mm' },
      { k: 'flip', kind: 'toggle', label: 'Inverti direzione' },
    ],
  },
  pattern: {
    title: 'Serie',
    init: (ctx) => ({
      type: 'pattern', kind: 'rect',
      src: ctx.toolFeatures.length ? { feature: ctx.toolFeatures[ctx.toolFeatures.length - 1].id } : { body: ctx.lastBody || null },
      d1: { world: 'X' }, n1: '3', s1: '20', d2: 'none', n2: '2', s2: '20', axis: { world: 'Z' }, n: '6', angle: '360', op: 'join',
    }),
    fields: (f, ctx) => [
      { k: 'kind', kind: 'seg', label: 'Tipo', options: [['rect', 'Rettangolare'], ['circ', 'Circolare']] },
      ...srcFields(f, ctx),
      ...(f.kind === 'rect' ? [
        worldSeg('d1', 'Direzione 1'),
        { k: 'n1', kind: 'num', label: 'Quantità', unit: '' },
        { k: 's1', kind: 'num', label: 'Passo', unit: 'mm' },
        worldSeg('d2', 'Direzione 2', true),
        f.d2 && f.d2 !== 'none' && { k: 'n2', kind: 'num', label: 'Quantità 2', unit: '' },
        f.d2 && f.d2 !== 'none' && { k: 's2', kind: 'num', label: 'Passo 2', unit: 'mm' },
      ] : [
        worldSeg('axis', 'Asse', false, [['edge', 'Spigolo']]),
        f.axis && f.axis.edge !== undefined && { k: 'axisEdge', kind: 'pick', pick: 'edge', label: 'Spigolo asse', hint: 'Tocca uno spigolo dritto o circolare', get: (x) => (x.axis.edge ? [x.axis.edge] : []), set: (x, v) => { x.axis = { edge: v[v.length - 1] || null }; } },
        { k: 'n', kind: 'num', label: 'Quantità', unit: '' },
        { k: 'angle', kind: 'num', label: 'Angolo totale', unit: '°' },
      ]),
      f.src && f.src.body !== undefined && { k: 'op', kind: 'seg', label: 'Risultato', options: [['join', 'Unisci'], ['new', 'Nuovi corpi']] },
    ],
  },
  mirror: {
    title: 'Specchio',
    init: (ctx) => ({ type: 'mirror', src: ctx.toolFeatures.length ? { feature: ctx.toolFeatures[ctx.toolFeatures.length - 1].id } : { body: ctx.lastBody || null }, plane: { std: 'YZ' }, op: 'join' }),
    fields: (f, ctx) => [
      ...srcFields(f, ctx),
      { k: 'planeMode', kind: 'seg', label: 'Piano', options: [['XY', 'XY'], ['XZ', 'XZ'], ['YZ', 'YZ'], ['face', 'Faccia']],
        get: (x) => (x.plane.face !== undefined ? 'face' : x.plane.std), set: (x, v) => { x.plane = v === 'face' ? { face: null } : { std: v }; } },
      f.plane.face !== undefined && { k: 'planeFace', kind: 'pick', pick: 'planarFace', label: 'Faccia piana', get: (x) => (x.plane.face ? [x.plane.face] : []), set: (x, v) => { x.plane = { face: v[v.length - 1] || null }; } },
      f.src && f.src.body !== undefined && { k: 'op', kind: 'seg', label: 'Risultato', options: [['join', 'Unisci'], ['new', 'Nuovo corpo']] },
    ],
  },
  combine: {
    title: 'Combina',
    init: () => ({ type: 'combine', target: null, tools: [], op: 'join', keep: false }),
    fields: () => [
      { k: 'targetPick', kind: 'pick', pick: 'body', label: 'Corpo di destinazione', get: (x) => (x.target ? [x.target] : []), set: (x, v) => { x.target = v[v.length - 1] || null; } },
      { k: 'tools', kind: 'pick', pick: 'body', multi: true, label: 'Corpi utensile' },
      { k: 'op', kind: 'seg', label: 'Operazione', options: [['join', 'Unisci'], ['cut', 'Taglia'], ['intersect', 'Interseca']] },
      { k: 'keep', kind: 'toggle', label: 'Mantieni gli utensili' },
    ],
  },
  move: {
    title: 'Sposta',
    init: (ctx) => ({ type: 'move', bodies: ctx.lastBody ? [ctx.lastBody] : [], dx: '0', dy: '0', dz: '0', raxis: 'Z', angle: '0', cx: '0', cy: '0', cz: '0' }),
    fields: (f) => [
      { k: 'bodies', kind: 'pick', pick: 'body', multi: true, label: 'Corpi' },
      { k: 'dx', kind: 'num', label: 'X', unit: 'mm' },
      { k: 'dy', kind: 'num', label: 'Y', unit: 'mm' },
      { k: 'dz', kind: 'num', label: 'Z', unit: 'mm' },
      { k: 'raxis', kind: 'seg', label: 'Rotazione attorno a', options: AX3 },
      { k: 'angle', kind: 'num', label: 'Angolo', unit: '°' },
      Number(f.angle) !== 0 && { k: 'cx', kind: 'num', label: 'Centro X', unit: 'mm' },
      Number(f.angle) !== 0 && { k: 'cy', kind: 'num', label: 'Centro Y', unit: 'mm' },
      Number(f.angle) !== 0 && { k: 'cz', kind: 'num', label: 'Centro Z', unit: 'mm' },
    ],
  },
};

/** Il comando ha i dati minimi per essere confermato? */
export function readyToCommit(f) {
  switch (f.type) {
    case 'extrude': case 'revolve': return f.regions.length > 0 && (f.type !== 'revolve' || !f.axis || f.axis.line !== null);
    case 'fillet': case 'chamfer': return f.edges.length > 0;
    case 'shell': return f.faces.length > 0;
    case 'hole': return f.place ? f.place.pts.length > 0 : !!f.sketch;
    case 'pattern': case 'mirror': return !!(f.src && (f.src.feature || f.src.body)) && (f.type !== 'mirror' || !f.plane || f.plane.face !== null);
    case 'combine': return !!f.target && f.tools.length > 0;
    case 'move': return f.bodies.length > 0;
    default: return true;
  }
}
