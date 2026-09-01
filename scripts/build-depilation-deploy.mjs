import {copyFile, mkdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';

const backup = path.resolve(process.argv[2]);
const output = path.resolve(process.argv[3] || 'work/depilation-upload');
const webRoot = path.join(output, 'UPLOAD_TO_WEB_ROOT');
const depilation = path.join(webRoot, 'child/sub/depilation');
const shared = path.join(webRoot, 'child/sub/landing/male-grooming');
const rollback = path.join(output, 'ROLLBACK_ONLY');
await Promise.all([mkdir(depilation, {recursive: true}), mkdir(shared, {recursive: true}), mkdir(rollback, {recursive: true})]);

const wrapper = (page, label) => `<?php include $_SERVER['DOCUMENT_ROOT'] . '/child/inc/head.php'; ?>
<?php include $_SERVER['DOCUMENT_ROOT'] . '/child/inc/header.php'; ?>
<div id="sub-wrap" class="jj-grooming-wrap"><div class="sub-contents"><div class="landing-area">
<iframe id="jj-grooming-frame" src="/child/sub/landing/male-grooming/${page}.html?v=${page === 'depilation-areas' ? '20260901d' : '20260901a'}" title="${label}" scrolling="no" loading="eager"></iframe>
</div></div></div>
<?php include $_SERVER['DOCUMENT_ROOT'] . '/child/inc/footer.php'; ?>
<link rel="stylesheet" href="/child/sub/landing/frame-host-grooming.css?v=20260901c">
<script src="/child/sub/landing/frame-host-grooming.js?v=20260901c"></script>
`;

await writeFile(path.join(depilation, '1.php'), wrapper('depilation-info', 'JJ비뇨기과 남성 레이저 제모'));
await writeFile(path.join(depilation, '2.php'), wrapper('depilation-areas', 'JJ비뇨기과 남성 제모 부위 및 비용'));
await copyFile(path.join(backup, '1.php'), path.join(rollback, '1.php'));
await copyFile(path.join(backup, '2.php'), path.join(rollback, '2.php'));

const source = await readFile('docs/index.html', 'utf8');
const variant = (canonical, css) => source
  .replaceAll('https://i8d8e8a8.github.io/jj-male-grooming/', canonical)
  .replace('</head>', `<link rel="stylesheet" href="./${css}"/></head>`)
  .replace('</body>', '<script src="./frame-resize-grooming-v2.js"></script></body>');
await writeFile(path.join(shared, 'depilation-info.html'), variant('https://jj-man.co.kr/child/sub/depilation/1.php', 'depilation-info.css'));
await writeFile(path.join(shared, 'depilation-areas.html'), variant('https://jj-man.co.kr/child/sub/depilation/2.php', 'depilation-areas-v3.css'));
await writeFile(path.join(shared, 'depilation-info.css'), '.program,.pricing,.consultation,.mobileBar{display:none!important}\n');
await writeFile(path.join(shared, 'depilation-areas-v3.css'), '.hero,.intro,.strengths,.equipment,.videos,.process,.careGuide,.faq,.consultation,.mobileBar,.priceCta{display:none!important}\n');
await writeFile(path.join(shared, 'frame-resize-grooming-v2.js'), `(function(){function reportHeight(){var h=Math.max(document.documentElement.scrollHeight,document.documentElement.offsetHeight,document.body?document.body.scrollHeight:0,document.body?document.body.offsetHeight:0);if(window.parent!==window&&h>0){try{if(window.frameElement){window.frameElement.style.setProperty('height',Math.ceil(h)+'px','important');window.frameElement.style.setProperty('min-height',Math.ceil(h)+'px','important')}}catch(e){}window.parent.postMessage({type:'jj-grooming-frame-height',height:h},window.location.origin)}}window.addEventListener('load',reportHeight);window.addEventListener('resize',reportHeight);if(window.ResizeObserver)new ResizeObserver(reportHeight).observe(document.documentElement);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(reportHeight);[100,500,1200,2500].forEach(function(d){window.setTimeout(reportHeight,d)})})();\n`);
console.log(output);
