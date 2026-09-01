import { access, readFile } from 'node:fs/promises';

const docs = new URL('../docs/', import.meta.url);
const html = await readFile(new URL('index.html', docs), 'utf8');
const localAssets = [...html.matchAll(/(?:href|src)="\.\/([^"#?]+)"/g)].map((match) => match[1]);

for (const asset of localAssets) {
  await access(new URL(asset, docs));
}

for (const id of ['KteJgdWUTAE', 'KU8cPyx_Xv4', 'GZRrmqLd-z0']) {
  if (!html.includes(`youtube.com/embed/${id}`)) throw new Error(`Missing YouTube embed: ${id}`);
}

for (const copy of ['APOGEE', 'APOGEE+', 'ELITE+', '단일 파장에서 듀얼 파장으로']) {
  if (!html.includes(copy)) throw new Error(`Missing equipment evolution copy: ${copy}`);
}

for (const copy of ['강남대로 238', '스카이쏠라빌딩 13·14층', '양재역 4번 출구']) {
  if (!html.includes(copy)) throw new Error(`Missing verified clinic location: ${copy}`);
}

for (const asset of ['program-face-symbol-v3.png', 'program-body-organic-v10.png', 'program-private-valley-v3.png']) {
  await access(new URL(asset, docs));
}

await access(new URL('cynosure-product-lineage.png', docs));
await access(new URL('care-before-shaving.jpg', docs));
await access(new URL('care-after-sunscreen.jpg', docs));

if ((html.match(/programVisualLeft/g) ?? []).length !== 2) throw new Error('Expected two left-side program visuals');
if ((html.match(/programVisualRight/g) ?? []).length !== 1) throw new Error('Expected one right-side program visual');

const css = await readFile(new URL(`_next/static/css/${html.match(/_next\/static\/css\/([^\"]+)/)?.[1]}`, docs), 'utf8');
const sourceCss = await readFile(new URL('../app/area-visuals.css', import.meta.url), 'utf8');
if (/filter\s*:\s*blur\(/.test(sourceCss)) throw new Error('Text blur animation must not be present');
if (!sourceCss.includes('.careColumns article,.faq>.sectionTitle,.faq>.faqList,.consultation>*')) throw new Error('Final sections must remain fully legible');
for (const rule of ['animation-timeline:view()', 'prefers-reduced-motion', 'max-width:480px', 'PRIVATE CARE']) {
  if (!css.includes(rule)) throw new Error(`Missing responsive motion rule: ${rule}`);
}

for (const rule of ['.label{font-size:19px', '--copy-size:22px', '.heroInner{', 'width:min(1440px,100% - 96px)', 'min-aspect-ratio:12/5', 'width:min(1840px,100% - 96px)', '.heroVisual>img.heroDefault{display:none}', 'object-position:center 24%', '@media (min-width:1500px)', '@keyframes titleRise', '@keyframes visualDrift', '@keyframes lineSweep']) {
  if (!css.includes(rule)) throw new Error(`Missing enhanced typography or motion rule: ${rule}`);
}

for (const text of ['<span>UROLOGY</span>', '<p class="label">남성 레이저 제모</p>']) {
  if (!html.includes(text)) throw new Error(`Missing updated hero copy: ${text}`);
}

if (!html.includes('<div class="heroInner">') || !html.includes('<div class="heroContent">')) throw new Error('Hero content must share one centered layout canvas');
if (!html.includes('hero-david-cutout-v2.webp') || !sourceCss.includes("mask:url('../../../hero-david-cutout-v1.webp')")) throw new Error('Missing refined hero subject or verified alpha mask');
if (!sourceCss.includes(':root{--copy-size:22px}') || !sourceCss.includes('.label{font-size:19px}')) throw new Error('Missing expanded supporting typography');
if (!sourceCss.includes("hero-wave-field-v2.svg') center/cover") || !sourceCss.includes('grid-template-columns:650px minmax(520px,846px)')) throw new Error('Missing refined wave field or stable desktop hero grid');

for (const rule of ['--display-size:clamp(72px,7vw,112px)', '--section-size:clamp(52px,5.7vw,84px)', '.reveal.is-visible', '--stagger']) {
  if (!css.includes(rule)) throw new Error(`Missing editorial type or cascade rule: ${rule}`);
}

for (const rule of ['.introCopy{display:flex;flex-direction:column;align-items:center', '.introCopy>.label{width:100%;margin:0 auto;text-align:center!important', '.process .sectionTitle{text-align:center', '--reveal-x:-180px', '--reveal-x:180px', '.programVisual{clip-path:inset', '.faqItem:hover .faqAnswer', '@keyframes faqAnswerProximity']) {
  if (!sourceCss.includes(rule)) throw new Error(`Missing requested layout or directional motion: ${rule}`);
}

for (const rule of ['.deviceStage{height:760px;background:transparent', '.deviceStage:before', '.device{width:132%', '.equipmentWave', '.deviceTitle']) {
  if (!sourceCss.includes(rule)) throw new Error(`Missing premium equipment stage: ${rule}`);
}

for (const copy of ['faqItem', 'faqQuestion', 'faqAnswer']) {
  if (!html.includes(copy)) throw new Error(`Missing static FAQ answer interaction: ${copy}`);
}
if (!html.includes('data-static-faq')) throw new Error('Missing static FAQ toggle script');
for (const behavior of ["addEventListener('pointerleave'", "faqVisibilityObserver", "closeFaqItem"]) {
  if (!html.includes(behavior)) throw new Error(`Missing FAQ auto-close behavior: ${behavior}`);
}
for (const rule of ["mobileBar.classList.toggle('is-hidden'", "new IntersectionObserver", '.mobileBar.is-hidden']) {
  if (!(html + sourceCss).includes(rule)) throw new Error(`Missing mobile footer collision fix: ${rule}`);
}
for (const seo of ['rel="canonical"','og:title','application/ld+json','MedicalClinic']) {
  if (!html.includes(seo)) throw new Error(`Missing SEO metadata: ${seo}`);
}
await access(new URL('robots.txt', docs));
await access(new URL('sitemap.xml', docs));

for (const asset of [
  'hero-david-cutout-v2.webp',
  'apogee-elite-plus-device-cutout.webp',
  'program-face-symbol-v3.webp',
  'program-body-organic-v10.webp',
  'program-private-valley-v3.webp',
  'face-marble-v2.webp',
  'chest-marble-v2.webp',
  'arm-marble.webp',
  'leg-marble-v4.webp',
  'private-marble.webp',
]) {
  if (!html.includes(asset)) throw new Error(`Missing optimized image reference: ${asset}`);
  await access(new URL(asset, docs));
}
for (const asset of ['cynosure-product-lineage.webp', 'care-before-shaving.webp', 'care-after-sunscreen.webp', 'strengths-hesitation.webp']) {
  if (!sourceCss.includes(asset)) throw new Error(`Missing optimized CSS image reference: ${asset}`);
  await access(new URL(asset, docs));
}
for (const markup of ['fetchPriority="high"', 'loading="lazy"', 'width="1672" height="941"', 'rel="icon"']) {
  if (!html.includes(markup)) throw new Error(`Missing mobile delivery markup: ${markup}`);
}
await access(new URL('favicon.svg', docs));
for (const rule of ['.specs p{font-size:16px', '.equipmentText li span{font-size:16px', '.mobileBar a{font-size:16px', '.faqQuestion span{color:#5f6f80']) {
  if (!sourceCss.includes(rule)) throw new Error(`Missing mobile legibility rule: ${rule}`);
}
const sitemap = await readFile(new URL('sitemap.xml', docs), 'utf8');
if (!sitemap.includes('<lastmod>2026-09-01</lastmod>')) throw new Error('Sitemap lastmod must match the latest mobile optimization');
for (const legacyAsset of ['program-body-organic-v10.png', 'program-face-symbol-v3.png', 'program-private-valley-v3.png', 'cynosure-product-lineage.png', 'care-before-shaving.jpg', 'care-after-sunscreen.jpg', 'strengths-hesitation.jpg']) {
  if (css.includes(legacyAsset)) throw new Error(`CSS still loads a legacy mobile asset: ${legacyAsset}`);
}

if (!html.includes('data-reveal-root')) throw new Error('Missing reliable reveal observer root');
for (const rule of ["revealRoot.classList.add('motion-ready')", "section.classList.add('reveal')", "entry.target.classList.add('is-visible')"]) {
  if (!html.includes(rule)) throw new Error(`Missing static reveal motion: ${rule}`);
}
await access(new URL('strengths-hesitation.jpg', docs));

console.log(`static export OK (${localAssets.length} linked assets)`);
