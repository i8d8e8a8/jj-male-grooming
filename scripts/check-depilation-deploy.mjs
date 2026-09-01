import {readFile} from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(process.argv[2] || 'work/depilation-upload');
const read = file => readFile(path.join(root, file), 'utf8');
const [one, two, info, areas, infoCss, areasCss] = await Promise.all([
  read('UPLOAD_TO_WEB_ROOT/child/sub/depilation/1.php'), read('UPLOAD_TO_WEB_ROOT/child/sub/depilation/2.php'),
  read('UPLOAD_TO_WEB_ROOT/child/sub/landing/male-grooming/depilation-info.html'), read('UPLOAD_TO_WEB_ROOT/child/sub/landing/male-grooming/depilation-areas.html'),
  read('UPLOAD_TO_WEB_ROOT/child/sub/landing/male-grooming/depilation-info.css'), read('UPLOAD_TO_WEB_ROOT/child/sub/landing/male-grooming/depilation-areas-v3.css'),
]);
const checks = [
  one.includes('depilation-info.html'), two.includes('depilation-areas.html'),
  info.includes('/depilation/1.php') && areas.includes('/depilation/2.php'),
  infoCss.includes('.program') && infoCss.includes('.pricing'),
  areasCss.includes('.hero') && areasCss.includes('.careGuide') && areasCss.includes('.faq') && areasCss.includes('.priceCta'),
  !areasCss.includes('.program') && !areasCss.includes('.pricing'),
];
if (checks.includes(false)) throw new Error(`depilation deployment check failed: ${checks}`);
console.log('depilation deployment OK');
