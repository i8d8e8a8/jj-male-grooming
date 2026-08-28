# Program visuals and equipment evolution — TDD evidence

- Journey: visitors can distinguish face, body, and private programs through alternating, purpose-specific visuals.
- Journey: visitors can understand the Apogee platform's progression to the dual-wavelength Elite+ selected by JJ.

| Guarantee | Validation | Result |
|---|---|---|
| Program visuals use the approved assets in a left/right/left pattern | `node scripts/check-static-export.mjs` | PASS |
| Static export contains APOGEE, APOGEE+, ELITE+ and the dual-wavelength evolution headline | `node scripts/check-static-export.mjs` | PASS |
| Exported local page has no horizontal overflow or console errors at 1440px | In-app browser render | PASS |

RED evidence: the static check failed first because `program-face-symbol-v3.png` and then `APOGEE+` were absent. Checkpoints: `ca45fd8`, `d9bef88`.

GREEN evidence: `static export OK (27 linked assets)` after implementation. No separate code-coverage runner exists; this static landing page is covered by export assertions, build, lint, and browser rendering.
