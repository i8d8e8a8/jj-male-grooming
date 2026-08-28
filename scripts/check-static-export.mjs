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
for (const rule of ['animation-timeline:view()', 'prefers-reduced-motion', 'max-width:480px', 'PRIVATE CARE']) {
  if (!css.includes(rule)) throw new Error(`Missing responsive motion rule: ${rule}`);
}

for (const rule of ['.label{font-size:13px', '--copy-size:15px', '@keyframes titleRise', '@keyframes visualDrift', '@keyframes lineSweep']) {
  if (!css.includes(rule)) throw new Error(`Missing enhanced typography or motion rule: ${rule}`);
}

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

if (!html.includes('data-reveal-root')) throw new Error('Missing reliable reveal observer root');
await access(new URL('strengths-hesitation.jpg', docs));

console.log(`static export OK (${localAssets.length} linked assets)`);
