import {createHash} from 'node:crypto';
import {mkdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';

const source = new URL('https://jj-man.co.kr/child/sub/landing/');
const output = path.resolve(process.argv[2] || 'work/production-backup');
const seen = new Set();
const manifest = [];

function urls(text, base, css = false) {
  const found = [];
  const patterns = css
    ? [/url\((['"]?)(.*?)\1\)/gi, /@import\s+(?:url\()?['"]([^'"]+)['"]/gi]
    : [/(?:src|poster)\s*=\s*['"]([^'"]+)['"]/gi, /<link\b[^>]*href\s*=\s*['"]([^'"]+)['"]/gi];
  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) {
      const value = match[2] || match[1];
      if (!value || /^(?:data:|javascript:|#)/i.test(value)) continue;
      try {
        const url = new URL(value, base);
        if (url.origin === source.origin) found.push(url);
      } catch {}
    }
  }
  return found;
}

function destination(url) {
  let pathname = decodeURIComponent(url.pathname);
  if (pathname.endsWith('/')) pathname += 'index.html';
  const relative = pathname.replace(/^\/+/, '');
  const target = path.resolve(output, relative);
  if (!target.startsWith(output + path.sep)) throw new Error(`unsafe path: ${url}`);
  return target;
}

async function save(url) {
  url.hash = '';
  const key = url.href;
  if (seen.has(key)) return;
  seen.add(key);
  const response = await fetch(url, {redirect: 'follow'});
  if (!response.ok) {
    manifest.push({url: key, status: response.status});
    return;
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  const target = destination(url);
  await mkdir(path.dirname(target), {recursive: true});
  await writeFile(target, bytes);
  manifest.push({
    url: key,
    file: path.relative(output, target).replaceAll('\\', '/'),
    bytes: bytes.length,
    sha256: createHash('sha256').update(bytes).digest('hex'),
  });
  const type = response.headers.get('content-type') || '';
  if (type.includes('text/css') || url.pathname.endsWith('.css')) {
    await Promise.all(urls(bytes.toString('utf8'), url, true).map(save));
  }
}

const html = await readFile(path.join(output, 'landing-original.html'), 'utf8');
await Promise.all(urls(html, source).map(save));
manifest.sort((a, b) => a.url.localeCompare(b.url));
await writeFile(path.join(output, 'manifest.json'), JSON.stringify({source: source.href, createdAt: new Date().toISOString(), files: manifest}, null, 2));
console.log(`backed up ${manifest.filter(item => item.file).length}/${manifest.length} referenced files to ${output}`);
