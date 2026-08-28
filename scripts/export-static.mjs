import { cp, mkdir, rm, writeFile } from 'node:fs/promises';

const docs = new URL('../docs/', import.meta.url);
let html = await (await fetch('http://localhost:3000/')).text();
html = html
  .replace(/<script[\s\S]*?<\/script>/g, '')
  .replace(/<link[^>]+rel="modulepreload"[^>]*>/g, '')
  .replaceAll('href="/_next/', 'href="./_next/')
  .replaceAll('src="/_next/', 'src="./_next/');

await rm(docs, { recursive: true, force: true });
await mkdir(docs, { recursive: true });
await cp(new URL('../dist/client/_next/', import.meta.url), new URL('_next/', docs), { recursive: true });
await cp(new URL('../public/favicon.svg', import.meta.url), new URL('favicon.svg', docs));
await cp(new URL('../public/jj-urology-logo.png', import.meta.url), new URL('jj-urology-logo.png', docs));
await writeFile(new URL('.nojekyll', docs), '');
await writeFile(new URL('index.html', docs), html);
console.log('docs/index.html');
