import {readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(process.argv[2] || 'work/filezilla-deploy-2026-09-01/landing/male-grooming');
const indexPath = path.join(root, 'index.html');
let html = await readFile(indexPath, 'utf8');
html = html
  .replaceAll('https://i8d8e8a8.github.io/jj-male-grooming/', 'https://jj-man.co.kr/child/sub/landing/')
  .replace('</head>', '<link rel="stylesheet" href="./production-overrides.css"/></head>')
  .replace('</body>', '<script src="./frame-resize-grooming.js"></script></body>');
await writeFile(indexPath, html);

await writeFile(path.join(root, 'frame-resize-grooming.js'), `(function(){
  function reportHeight(){
    var height=Math.max(document.documentElement.scrollHeight,document.documentElement.offsetHeight,document.body?document.body.scrollHeight:0,document.body?document.body.offsetHeight:0);
    if(window.parent!==window&&height>0)window.parent.postMessage({type:'jj-grooming-frame-height',height:height},window.location.origin);
  }
  window.addEventListener('load',reportHeight);
  window.addEventListener('resize',reportHeight);
  if(window.ResizeObserver)new ResizeObserver(reportHeight).observe(document.documentElement);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(reportHeight);
  [100,500,1200,2500].forEach(function(delay){window.setTimeout(reportHeight,delay)});
})();\n`);

const sitemapPath = path.join(root, 'sitemap.xml');
let sitemap = await readFile(sitemapPath, 'utf8');
sitemap = sitemap.replaceAll('https://i8d8e8a8.github.io/jj-male-grooming/', 'https://jj-man.co.kr/child/sub/landing/');
await writeFile(sitemapPath, sitemap);

console.log(root);
