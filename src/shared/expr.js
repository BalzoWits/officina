// Valutatore di espressioni per quote e parametri: numeri, nomi di parametro,
// + - * / ^, parentesi, funzioni matematiche. Gli angoli delle funzioni
// trigonometriche sono in gradi, come si scrivono in un CAD.

const FUNCS = {
  sqrt: Math.sqrt, abs: Math.abs, round: Math.round, floor: Math.floor, ceil: Math.ceil,
  min: Math.min, max: Math.max,
  sin: (d) => Math.sin((d * Math.PI) / 180), cos: (d) => Math.cos((d * Math.PI) / 180),
  tan: (d) => Math.tan((d * Math.PI) / 180),
  asin: (x) => (Math.asin(x) * 180) / Math.PI, acos: (x) => (Math.acos(x) * 180) / Math.PI,
  atan: (x) => (Math.atan(x) * 180) / Math.PI,
};
const CONSTS = { pi: Math.PI, PI: Math.PI };

function tokenize(src) {
  const out = [];
  let i = 0;
  const s = String(src).replace(/,/g, '.');
  while (i < s.length) {
    const c = s[i];
    if (/\s/.test(c)) { i++; continue; }
    if (/[0-9.]/.test(c)) {
      let j = i;
      while (j < s.length && /[0-9.eE]/.test(s[j])) {
        if ((s[j] === 'e' || s[j] === 'E') && (s[j + 1] === '-' || s[j + 1] === '+')) j++;
        j++;
      }
      const v = Number(s.slice(i, j));
      if (!Number.isFinite(v)) throw new Error(`Numero non valido: ${s.slice(i, j)}`);
      out.push({ t: 'n', v });
      i = j;
      continue;
    }
    if (/[A-Za-z_À-ſ]/.test(c)) {
      let j = i;
      while (j < s.length && /[A-Za-z0-9_À-ſ]/.test(s[j])) j++;
      const name = s.slice(i, j);
      // unità di misura scritte dopo un numero: si ignorano
      if (['mm', 'deg', 'gradi'].includes(name) && out.length && out[out.length - 1].t === 'n') { i = j; continue; }
      out.push({ t: 'id', v: name });
      i = j;
      continue;
    }
    if ('+-*/^();'.includes(c)) { out.push({ t: c }); i++; continue; }
    if (c === '°') { i++; continue; }
    throw new Error(`Carattere non valido: ${c}`);
  }
  return out;
}

export function evaluate(src, scope = {}) {
  if (typeof src === 'number') return src;
  const tk = tokenize(src);
  if (!tk.length) throw new Error('Valore mancante');
  let p = 0;
  const peek = () => tk[p];
  const take = (t) => { if (!tk[p] || tk[p].t !== t) throw new Error(`Atteso "${t}"`); return tk[p++]; };

  function primary() {
    const k = tk[p++];
    if (!k) throw new Error('Espressione incompleta');
    if (k.t === 'n') return k.v;
    if (k.t === '(') { const v = expr(); take(')'); return v; }
    if (k.t === '-') return -unary();
    if (k.t === '+') return unary();
    if (k.t === 'id') {
      if (peek() && peek().t === '(') {
        const f = FUNCS[k.v];
        if (!f) throw new Error(`Funzione sconosciuta: ${k.v}`);
        p++;
        const args = [];
        if (peek() && peek().t !== ')') {
          args.push(expr());
          while (peek() && peek().t === ';') { p++; args.push(expr()); }
        }
        take(')');
        return f(...args);
      }
      if (k.v in scope) return scope[k.v];
      if (k.v in CONSTS) return CONSTS[k.v];
      throw new Error(`Parametro sconosciuto: ${k.v}`);
    }
    throw new Error('Espressione non valida');
  }
  function unary() { return power(); }
  function power() {
    const b = primary();
    if (peek() && peek().t === '^') { p++; return b ** unary(); }
    return b;
  }
  function term() {
    let v = unary();
    while (peek() && (peek().t === '*' || peek().t === '/')) {
      const op = tk[p++].t;
      const r = unary();
      v = op === '*' ? v * r : v / r;
    }
    return v;
  }
  function expr() {
    let v = term();
    while (peek() && (peek().t === '+' || peek().t === '-')) {
      const op = tk[p++].t;
      const r = term();
      v = op === '+' ? v + r : v - r;
    }
    return v;
  }
  const v = expr();
  if (p < tk.length) throw new Error('Espressione non valida');
  if (!Number.isFinite(v)) throw new Error('Risultato non numerico');
  return v;
}

/** Valuta i parametri utente in ordine: ognuno può usare quelli prima. */
export function evalParams(params = []) {
  const scope = {};
  const errors = {};
  for (const prm of params) {
    try { scope[prm.name] = evaluate(prm.expr, scope); } catch (e) { errors[prm.name] = e.message; scope[prm.name] = 0; }
  }
  return { scope, errors };
}

export function isValidName(n) { return /^[A-Za-z_][A-Za-z0-9_]*$/.test(n) && !(n in FUNCS) && !(n in CONSTS); }

/** Formatta un numero per l'interfaccia (al massimo 3 decimali, senza zeri inutili). */
export function fmt(v, dec = 3) {
  if (!Number.isFinite(v)) return '?';
  const r = Number(v.toFixed(dec));
  return String(Object.is(r, -0) ? 0 : r);
}
