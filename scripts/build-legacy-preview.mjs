import { mkdir, readFile, writeFile } from 'node:fs/promises';

const source = await readFile(new URL('../docs/index.html', import.meta.url), 'utf8');
const liveBase = 'https://i8d8e8a8.github.io/jj-male-grooming/';

const menu = ['병원소개','남성수술','쁘띠남성수술','재수술/재건수술','정관/포경수술','남성제모','상담예약','커뮤니티','진행중인 이벤트'];
const quick = [
  ['nav-menu-1.png','진행중인 이벤트'],
  ['nav-menu-2.png','온라인 상담'],
  ['nav-menu-3.png','카톡 상담'],
  ['nav-menu-4.png','온라인 예약'],
  ['nav-menu-5.png','오시는 길'],
];
const brands = Array.from({length:7},(_,i)=>`<img src="https://jj-man.co.kr/child/img/footer-brand-${i+1}.png" alt="">`).join('');

const style = `<style data-legacy-preview-style>
:root{--legacy-left:240px;--legacy-right:95px;--legacy-navy:#0d1933;--legacy-blue:#1978c8}
body{margin:0;background:#fff}.legacy-stage{min-width:0;margin-left:240px;margin-right:95px;overflow:hidden}.legacy-stage .mobileBar{display:none!important}
.legacy-sidebar{position:fixed;z-index:10000;inset:0 auto 0 0;width:var(--legacy-left);background:var(--legacy-navy);color:#fff;overflow:auto}.legacy-logo{height:140px;background:url('https://jj-man.co.kr/child/img/ci.png') center/178px auto no-repeat;border-bottom:1px solid #ffffff0d}.legacy-menu{display:grid}.legacy-menu button{display:flex;align-items:center;justify-content:space-between;height:61px;padding:0 20px;border:0;border-bottom:1px solid #ffffff0d;background:transparent;color:#fff;font:700 16px/1.2 Arial,sans-serif;text-align:left}.legacy-menu button:not(:last-child):after{content:'⌄';font-size:21px;font-weight:300}
.legacy-quickbar{position:fixed;z-index:9999;inset:0 0 0 auto;width:var(--legacy-right);background:#fff;border-left:1px solid #ddd;color:#555;font:13px/1.3 Arial,sans-serif;text-align:center}.legacy-auth{display:grid;gap:9px;padding:34px 8px 58px}.legacy-auth span{padding-bottom:8px;border-bottom:1px solid #ddd}.legacy-quick-items{display:grid;gap:25px}.legacy-quick-item{display:grid;justify-items:center;gap:8px}.legacy-quick-item img{width:43px;height:43px;object-fit:contain}.legacy-quick-contact{position:absolute;left:0;right:0;bottom:30px;display:grid;gap:22px}.legacy-quick-contact img{max-width:78px;margin:auto}
.legacy-mobile-header,.legacy-mobile-actions{display:none}
.legacy-consultation{position:static;background:#858585;color:#fff;padding:25px 4vw 28px;font:14px/1.4 Arial,sans-serif}.legacy-consultation form{display:grid;grid-template-columns:1fr 1.15fr 1.4fr 1.25fr;gap:20px;align-items:end;max-width:1480px;margin:auto}.legacy-field{display:grid;gap:8px}.legacy-field label{font-weight:700}.legacy-field input,.legacy-field select{width:100%;height:42px;border:0;border-radius:2px;padding:0 11px;background:#fff;color:#333}.legacy-consent{display:grid;grid-template-columns:1fr;gap:8px}.legacy-consent label{display:flex;align-items:center;gap:8px;font-weight:700}.legacy-consent input{width:22px;height:22px}.legacy-consent button{height:42px;border:0;border-radius:2px;background:#176fc0;color:#fff;font-weight:700}
.legacy-contact-footer{background:#474c50;color:#fff;font:14px/1.7 Arial,sans-serif}.legacy-contact{display:grid;grid-template-columns:1fr 1.15fr;gap:55px;max-width:1220px;margin:auto;padding:55px 28px}.legacy-contact h2{margin:0 0 22px;color:#4ba4ff;font-size:25px}.legacy-contact strong{color:#4ba4ff;font-size:28px;font-weight:400}.legacy-address{display:grid;gap:20px}.legacy-address p{margin:0}.legacy-map{min-height:250px;border:1px solid #ffffff22;background:linear-gradient(90deg,transparent 49.7%,#bfc3c5 50%,transparent 50.3%),linear-gradient(0deg,transparent 49.7%,#bfc3c5 50%,transparent 50.3%),#41464a;position:relative}.legacy-map:before{content:'JJ비뇨기과 · 양재역 4번 출구';position:absolute;inset:45% auto auto 50%;transform:translate(-50%,-50%);padding:9px 12px;background:#176fc0;color:#fff;white-space:nowrap}.legacy-map:after{content:'강남대로';position:absolute;left:0;right:0;bottom:28%;height:3px;background:#c86e24}.legacy-brands{display:flex;align-items:center;justify-content:center;gap:45px;min-height:95px;padding:18px;background:#fff}.legacy-brands img{max-width:115px;max-height:48px;object-fit:contain}
@media(max-width:900px){body{padding:52px 0 62px}.legacy-sidebar,.legacy-quickbar{display:none}.legacy-stage{margin:0;overflow:hidden}.legacy-mobile-header{display:flex;position:fixed;z-index:10000;inset:0 0 auto;height:52px;align-items:center;justify-content:center;background:var(--legacy-navy);color:#fff}.legacy-mobile-header button{position:absolute;left:15px;border:0;background:transparent;color:#fff;font-size:28px}.legacy-mobile-header img{width:126px}.legacy-mobile-actions{display:grid;position:fixed;z-index:10001;right:18px;bottom:18px;gap:9px}.legacy-mobile-actions button{width:52px;height:52px;border:0;border-radius:50%;background:#1677c8;color:#fff;font-weight:800}.legacy-mobile-actions button+button{background:#fee500;color:#4b2500}.legacy-consultation{position:static;padding:35px 20px}.legacy-consultation form{grid-template-columns:1fr;gap:18px}.legacy-contact{grid-template-columns:1fr;gap:28px;padding:42px 22px}.legacy-map{min-height:210px}.legacy-brands{gap:15px;overflow:hidden;justify-content:flex-start}.legacy-brands img{max-width:85px}.legacy-stage .mobileBar{display:none!important}}
</style>`;

const shellStart = `<header class="legacy-mobile-header" data-legacy-mobile-header><button type="button" aria-label="전체 메뉴">☰</button><img src="https://jj-man.co.kr/child/img/ci.png" alt="JJ비뇨기과"></header>
<aside class="legacy-sidebar" data-legacy-sidebar><div class="legacy-logo" aria-label="JJ비뇨기과"></div><nav class="legacy-menu">${menu.map(x=>`<button type="button">${x}</button>`).join('')}</nav></aside>
<nav class="legacy-quickbar" data-legacy-quickbar><div class="legacy-auth"><span>로그인</span><span>회원가입</span></div><div class="legacy-quick-items">${quick.map(([icon,label])=>`<div class="legacy-quick-item"><img src="https://jj-man.co.kr/child/img/icon/${icon}" alt=""><span>${label}</span></div>`).join('')}</div><div class="legacy-quick-contact"><img src="https://jj-man.co.kr/child/img/icon/nav-contact1.png" alt="대표상담전화 1599-5952"><img src="https://jj-man.co.kr/child/img/icon/nav-contact2.png" alt="카톡상담 @jjmanclinic"></div></nav>
<div class="legacy-stage">`;

const shellEnd = `<section class="legacy-consultation" data-legacy-consultation><form onsubmit="return false"><div class="legacy-field"><label>성명</label><input type="text" aria-label="성명"></div><div class="legacy-field"><label>연락처</label><input type="tel" aria-label="연락처"></div><div class="legacy-field"><label>이메일</label><input type="email" aria-label="이메일"></div><div class="legacy-consent"><label><input type="checkbox"> 개인정보취급방침에 동의합니다.</label><button type="submit">상담요청</button></div></form></section>
<footer class="legacy-contact-footer" data-legacy-contact-footer><div class="legacy-contact"><div class="legacy-address"><h2>CONTACT US</h2><p><b>오시는 길</b><br>서울특별시 강남구 강남대로 238 스카이쏠라빌딩<br>진료·상담 14F / 수술실·회복실 13F<br>3호선·신분당선 양재역 4번 출구</p><p><b>대표번호</b><br><strong>1599-5952</strong><br>* 일요일, 공휴일 휴무</p></div><div><div class="legacy-map" aria-label="약도 모의 영역"></div><p>양재역 사거리 뱅뱅사거리 방향 골목으로 들어오시면 건물 주차장이 있습니다.</p></div></div><div class="legacy-brands">${brands}</div></footer></div>
<div class="legacy-mobile-actions" data-legacy-mobile-actions><button type="button" aria-label="전화 상담">☎</button><button type="button" aria-label="카카오 상담">TALK</button></div>`;

let html = source
  .replaceAll('href="./', `href="${liveBase}`)
  .replaceAll('src="./', `src="${liveBase}`)
  .replace('</head>', `${style}</head>`)
  .replace('<body>', `<body>${shellStart}`)
  .replace('</main>', `</main>${shellEnd}`);

const output = new URL('../work/legacy-shell-preview.html', import.meta.url);
await mkdir(new URL('../work/', import.meta.url), {recursive:true});
await writeFile(output, html);
console.log(output.pathname);
