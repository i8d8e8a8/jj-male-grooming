import {readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(process.argv[2] || 'work/filezilla-deploy-2026-09-01/landing/male-grooming');
const indexPath = path.join(root, 'index.html');
let html = await readFile(indexPath, 'utf8');
html = html
  .replaceAll('https://i8d8e8a8.github.io/jj-male-grooming/', 'https://jj-man.co.kr/child/sub/landing/')
  .replace('</head>', '<link rel="stylesheet" href="./production-overrides.css"/></head>');
await writeFile(indexPath, html);

const sitemapPath = path.join(root, 'sitemap.xml');
let sitemap = await readFile(sitemapPath, 'utf8');
sitemap = sitemap.replaceAll('https://i8d8e8a8.github.io/jj-male-grooming/', 'https://jj-man.co.kr/child/sub/landing/');
await writeFile(sitemapPath, sitemap);

console.log(root);
