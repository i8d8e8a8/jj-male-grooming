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
| Image delivery and SEO remain healthy | Lighthouse mobile on production build | PASS: 1,019 KiB total; Accessibility 100; Best Practices 100; SEO 100 |

## Known gap

- Lighthouse performance was 77 on the local Vinext production server because the CSS-composited hero remained the LCP element at 5.3s. The prior public Pages audit measured a materially faster LCP; the public deployment must be measured again after Pages publishes this commit.
- Responsive image variants could save a further estimated 194 KiB, but were intentionally deferred because the current WebP payload is already close to 1 MiB and extra variants would add static-export complexity.
