import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises';

const docs = new URL('../docs/', import.meta.url);
let html = await (await fetch('http://localhost:3000/')).text();
const cssFiles = (await readdir(new URL('../dist/client/_next/static/css/', import.meta.url)))
  .filter((file) => /^index\..+\.css$/.test(file));

if (cssFiles.length !== 1) throw new Error(`Expected one index CSS file, found ${cssFiles.length}`);

html = html
  .replace(/<script[\s\S]*?<\/script>/g, '')
  .replace(/<link[^>]+rel="modulepreload"[^>]*>/g, '')
  .replaceAll('href="/_next/', 'href="./_next/')
  .replaceAll('src="/_next/', 'src="./_next/')
  .replace(/href="\.\/_next\/static\/css\/index\.[^"]+\.css"/g, `href="./_next/static/css/${cssFiles[0]}"`);

await rm(docs, { recursive: true, force: true });
await mkdir(docs, { recursive: true });
await cp(new URL('../dist/client/_next/', import.meta.url), new URL('_next/', docs), { recursive: true });
await cp(new URL('../public/favicon.svg', import.meta.url), new URL('favicon.svg', docs));
await cp(new URL('../public/jj-urology-logo.png', import.meta.url), new URL('jj-urology-logo.png', docs));
await cp(new URL('../public/jj-mark.png', import.meta.url), new URL('jj-mark.png', docs));
await cp(new URL('../public/hero-male-editorial.png', import.meta.url), new URL('hero-male-editorial.png', docs));
await cp(new URL('../public/face-marble.png', import.meta.url), new URL('face-marble.png', docs));
await cp(new URL('../public/face-marble-v2.png', import.meta.url), new URL('face-marble-v2.png', docs));
await cp(new URL('../public/chest-marble.png', import.meta.url), new URL('chest-marble.png', docs));
await cp(new URL('../public/chest-marble-v2.png', import.meta.url), new URL('chest-marble-v2.png', docs));
await cp(new URL('../public/arm-marble.png', import.meta.url), new URL('arm-marble.png', docs));
await cp(new URL('../public/leg-marble.png', import.meta.url), new URL('leg-marble.png', docs));
await cp(new URL('../public/leg-marble-v2.png', import.meta.url), new URL('leg-marble-v2.png', docs));
await cp(new URL('../public/leg-marble-v3.png', import.meta.url), new URL('leg-marble-v3.png', docs));
await cp(new URL('../public/leg-marble-v4.png', import.meta.url), new URL('leg-marble-v4.png', docs));
await cp(new URL('../public/private-marble.png', import.meta.url), new URL('private-marble.png', docs));
await cp(new URL('../public/apogee-elite-plus-device.png', import.meta.url), new URL('apogee-elite-plus-device.png', docs));
await cp(new URL('../public/apogee-elite-plus-logo.png', import.meta.url), new URL('apogee-elite-plus-logo.png', docs));
await writeFile(new URL('.nojekyll', docs), '');
await writeFile(new URL('index.html', docs), html);
console.log('docs/index.html');
