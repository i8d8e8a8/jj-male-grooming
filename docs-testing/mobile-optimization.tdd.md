# Mobile optimization TDD evidence

## Source and journey

- Source: user-requested mobile optimization after the 2026-09-01 mobile and SEO audit.
- Journey: a mobile visitor can read supporting copy, load the page without a multi-megabyte image burst, and scroll the complete page without horizontal overflow or broken imagery.

## RED evidence

- `node scripts/check-static-export.mjs` failed on missing `hero-david-cutout-v2.webp`; checkpoint `d60ae90`.
- The same check later failed on missing `cynosure-product-lineage.webp`, proving CSS background duplication remained; checkpoint `634adf1`.

## GREEN evidence

| Guarantee | Validation | Result |
| --- | --- | --- |
| Static Pages references and contains all optimized assets | `node scripts/check-static-export.mjs` | PASS, 16 linked assets |
| Source compiles for production | `pnpm build` | PASS |
| App source has no lint errors | `pnpm exec eslint app --max-warnings 20` | PASS, 0 errors; 7 existing warnings |
| Mobile viewport has no horizontal overflow or broken loaded images | Browser check at 390×844 | PASS |
| Mobile supporting copy and sticky actions meet the new floor | Computed style check | PASS, 16px minimum for audited items |
| Image delivery and SEO remain healthy | Lighthouse mobile on public Pages at `73e0eda` | PASS: all four categories 100; 601 KiB total; LCP 1.7s |

## Known gap

- Responsive image variants could save a further estimated 194 KiB, but were intentionally deferred because the public payload is already 601 KiB and extra variants would add static-export complexity.
