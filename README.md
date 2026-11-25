# Officina

CAD parametrico essenziale che gira nel browser, pensato per l'iPad (dito e Apple Pencil) ma usabile anche col mouse.
Si disegnano schizzi vincolati, si ricavano solidi con estrusioni e rivoluzioni, si rifiniscono con raccordi, smussi,
gusci e fori, e si esporta in 3MF/STL per la stampa o in STEP per altri CAD.

## Cosa sa fare

- **Schizzi 2D vincolati** su piani di origine (XY, XZ, YZ) o su facce piane: linea, rettangolo, cerchio, arco per 3 punti, punto.
  Vincoli: coincidente, orizzontale, verticale, parallela, perpendicolare, tangente, uguale, punto medio, concentrico,
  simmetria, fisso. Quote di lunghezza, distanza (allineata, orizzontale, verticale), diametro, raggio, angolo.
  Il solver è planegcs di FreeCAD: mostra i gradi di libertà e segnala i vincoli in conflitto.
  Mentre disegni vedi lunghezza e angolo, e una barra in basso permette di scrivere le misure esatte
  (lunghezza/angolo, larghezza/altezza, diametro), che diventano quote. I vincoli si usano come strumenti:
  tocchi il vincolo e poi gli elementi. Nello schizzo ci sono anche **Specchia** (asse, elementi, conferma: la copia
  resta simmetrica) e **Raccordo 2D** sugli angoli tra due linee.
- **Guida**: scheda di benvenuto sul progetto vuoto, pulsante «?» sempre disponibile, suggerimenti passo per passo
  nello schizzo e nei comandi; dopo uno schizzo compaiono le azioni rapide Estrudi/Rivoluzione, e toccando una forma
  azzurra nel modello si apre il menu per estruderla.
- **Profili automatici**: le curve si spezzano alle intersezioni e ogni regione chiusa (anche con fori) si tocca per estruderla.
- **Feature 3D**: estrusione (un lato, simmetrica, due lati), rivoluzione (attorno a X/Y/Z o a una linea dello schizzo),
  foro (passante o cieco, con lamatura), raccordo, smusso, guscio, serie rettangolare e circolare, specchio,
  combina (unisci, taglia, interseca), sposta/ruota, importazione di STL e STEP.
  Ogni feature crea un nuovo corpo o si unisce, taglia o interseca con quelli esistenti.
- **Cronologia parametrica**: ogni feature resta modificabile; si può sopprimere, rinominare, eliminare o riportare
  indietro la cronologia. Una cache per feature fa ricalcolare solo da quella cambiata in poi.
- **Parametri utente**: valori con nome (`larghezza = 60`) usabili in ogni quota e campo numerico, con espressioni
  (`larghezza/2 + 3`, `sin(30)`, `max(a; b)`).
- **Export**: 3MF con i corpi separati (in Bambu Studio diventano oggetti distinti), STL, STEP con le superfici esatte.
  Su iPad il pulsante "Condividi / Salva su File" apre il foglio di condivisione.
- **Progetti** salvati nel browser (IndexedDB), con copia su file `.officina` per backup o passaggio ad altri dispositivi.
- **Offline**: dopo la prima apertura il service worker tiene in cache tutto, motore compreso.
  Da Safari: Condividi → Aggiungi alla schermata Home per usarla a tutto schermo.

## Gesti

| Dove | Gesto | Effetto |
|---|---|---|
| Vista 3D | un dito | ruota |
| Vista 3D | due dita | sposta e zoom |
| Vista 3D | tocco | seleziona (faccia, spigolo, corpo, profilo secondo il comando aperto) |
| Schizzo | dito o Pencil con uno strumento | disegna (tocchi successivi o trascinando) |
| Schizzo | due dita | sposta e zoom |
| Schizzo, strumento Seleziona | trascina un punto o una linea | muove rispettando i vincoli |
| Schizzo, strumento Seleziona | un dito sul vuoto | sposta la vista |

Con la tastiera: `S` schizzo, `E` estrudi, `F` raccordo, `H` foro; nello schizzo `L` `R` `C` `A` `P` `D`,
`Canc` elimina, `Invio` chiude lo schizzo, `Ctrl/Cmd+Z` annulla.

## Come funziona

- `src/worker/kernel.js` riesegue la cronologia con **OpenCascade** (via [replicad](https://replicad.xyz)) in un Web Worker.
  Facce e spigoli scelti dall'utente si salvano come "firma geometrica" (punto, direzione, normali delle due facce
  adiacenti) e si ritrovano dopo le modifiche a monte: un compromesso semplice al problema dei nomi topologici.
- `src/shared/profiles.js` trova le regioni chiuse degli schizzi (grafo planare con intersezioni).
- `src/app/solver.js` è il ponte con **planegcs** (solver di vincoli di FreeCAD in WebAssembly).
- `src/app/sketcher.js` è l'editor di schizzi in SVG sopra la vista three.js; `src/app/viewport.js` la vista 3D.

## Sviluppo

```
npm install
npm run build        # dist/app.js, dist/worker.js + i due .wasm
npm test             # profili, solver, kernel in Node
node test/e2e.mjs    # prova completa nel browser (serve Chrome)
node test/e2e2.mjs   # altri comandi, finestre, iPad in verticale
powershell -File publish.ps1 "messaggio"   # pubblica su GitHub Pages
```

## Limiti noti

- Il guscio non riesce su alcune geometrie (ad esempio una faccia aperta tangente a un raccordo su un solo spigolo):
  il messaggio suggerisce di spostarlo prima dei raccordi nella cronologia.
- I riferimenti geometrici reggono bene le modifiche di quote e parametri; stravolgimenti della topologia a monte
  (profili molto diversi) possono far scegliere uno spigolo vicino a quello originale.
- Niente assiemi, giunti, superfici libere, loft/sweep, disegni 2D o rendering: è un CAD da pezzo singolo per la stampa 3D.
