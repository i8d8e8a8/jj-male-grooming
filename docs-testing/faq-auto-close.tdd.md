# FAQ auto-close TDD evidence

- Journey: 사용자는 FAQ 답변을 부드럽게 열고, 포인터를 벗어나거나 질문이 화면 밖으로 스크롤되면 자동으로 닫히는 것을 기대한다.
- RED: `node scripts/check-static-export.mjs` failed with `Missing FAQ auto-close behavior: addEventListener('pointerleave'`.
- GREEN: the same command passed with `static export OK (25 linked assets)`.
- Browser: first FAQ changed to `faqItem is-open` after click, `faqItem is-closed` after pointer leave, and remained `is-closed` after scrolling it outside the viewport.
- Coverage: the project has no unit-test runner; the static export integration check and browser interaction cover both deployed script presence and visible behavior.

| Guarantee | Evidence | Result |
| --- | --- | --- |
| Pointer leave closes an open FAQ | local browser class transition | PASS |
| Scrolling an FAQ outside the viewport closes it | IntersectionObserver browser check | PASS |
| Static Pages contains the same behavior | `node scripts/check-static-export.mjs` | PASS |
