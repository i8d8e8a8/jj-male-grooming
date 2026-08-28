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

for (const asset of ['program-face-symbol-v3.png', 'program-body-symbol-v3.png', 'program-private-wide-v2.png']) {
  await access(new URL(asset, docs));
}

if ((html.match(/programVisualLeft/g) ?? []).length !== 2) throw new Error('Expected two left-side program visuals');
if ((html.match(/programVisualRight/g) ?? []).length !== 1) throw new Error('Expected one right-side program visual');

const css = await readFile(new URL(`_next/static/css/${html.match(/_next\/static\/css\/([^\"]+)/)?.[1]}`, docs), 'utf8');
for (const rule of ['animation-timeline:view()', 'prefers-reduced-motion', 'max-width:480px']) {
  if (!css.includes(rule)) throw new Error(`Missing responsive motion rule: ${rule}`);
}

console.log(`static export OK (${localAssets.length} linked assets)`);
