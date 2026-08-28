# Program visuals and equipment evolution — TDD evidence

- Journey: visitors can distinguish face, body, and private programs through alternating, purpose-specific visuals.
- Journey: visitors can understand the Apogee platform's progression to the dual-wavelength Elite+ selected by JJ.

| Guarantee | Validation | Result |
|---|---|---|
| Program visuals use the approved assets in a left/right/left pattern | `node scripts/check-static-export.mjs` | PASS |
| Static export contains APOGEE, APOGEE+, ELITE+ and the dual-wavelength evolution headline | `node scripts/check-static-export.mjs` | PASS |
| The approved five-generation Cynosure visual and revised body/private assets are present in the export | `node scripts/check-static-export.mjs` | PASS |
| Exported local page has no horizontal overflow or console errors at 1440px | In-app browser render | PASS |
| Labels and body copy use the enlarged editorial type scale | `node scripts/check-static-export.mjs` + computed-style browser check | PASS (`13px` label, `16px` desktop lead, `15px` mobile lead) |
| Title, visual drift, and treatment-line sweep motions are exported with reduced-motion fallbacks | `node scripts/check-static-export.mjs` | PASS |
| Desktop and 390px mobile layouts have no horizontal overflow | In-app browser render | PASS |

RED evidence: the static check failed first because `program-face-symbol-v3.png` and then `APOGEE+` were absent. Checkpoints: `ca45fd8`, `d9bef88`.

GREEN evidence: `static export OK (27 linked assets)` after implementation. No separate code-coverage runner exists; this static landing page is covered by export assertions, build, lint, and browser rendering.

Typography/motion RED checkpoint: `49d8706` failed on missing `.label{font-size:13px`. GREEN: the same export check passed after the CSS-only implementation; lint completed with 0 errors and 7 pre-existing `<img>` optimization warnings.
