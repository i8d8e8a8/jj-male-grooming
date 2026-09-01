import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../work/legacy-shell-preview.html', import.meta.url), 'utf8');

for (const marker of [
  'data-legacy-sidebar',
  'data-legacy-quickbar',
  'data-legacy-consultation',
  'data-legacy-contact-footer',
  'data-legacy-mobile-header',
  'data-legacy-mobile-actions',
  'data-reveal-root',
]) {
  if (!html.includes(marker)) throw new Error(`Missing legacy preview marker: ${marker}`);
}

for (const rule of [
  'margin-left:240px',
  'margin-right:95px',
  '@media(max-width:900px)',
  '.legacy-sidebar,.legacy-quickbar{display:none}',
  '.legacy-consultation{position:static',
  '.mobileBar{display:none!important}',
]) {
  if (!html.includes(rule)) throw new Error(`Missing legacy responsive rule: ${rule}`);
}

if (html.includes('legacy-landing-frame')) throw new Error('Preview must use the landing DOM directly, not a wrapper iframe');
if (!html.includes('onsubmit="return false"')) throw new Error('Preview consultation form must not submit');

console.log('legacy shell preview OK');
