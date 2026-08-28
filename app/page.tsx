const strengths = [
  ['01', '남성 전담 진료', '상담부터 시술과 후케어까지 남성 의료진과 스태프가 함께합니다.'],
  ['02', '1인 프라이빗 룸', '시선과 동선을 분리한 독립 공간에서 편안하게 진행합니다.'],
  ['03', '부위별 맞춤 출력', '피부 톤, 모질, 굵기와 모근 깊이에 맞춰 파장과 출력을 설정합니다.'],
  ['04', '통증 부담을 낮춘 케어', '표면 마취와 연속 에어 쿨링을 병행해 열감과 통증 부담을 낮춥니다.'],
];

const programs = [
  ['FACE', '얼굴 제모', '인중 · 턱 · 볼 · 구레나룻 · 목', '반복되는 면도 자극과 푸른 수염 자국을 줄여 보다 단정한 인상으로'],
  ['BODY', '바디 제모', '가슴 · 배 · 등 · 팔 · 다리', '털 박힘과 운동 중 쓸림을 줄여 깔끔하고 쾌적한 바디라인으로'],
  ['PRIVATE', '프라이빗 제모', '브라질리언 · 음낭 · 회음부 · 항문', '남성 전담 스태프와 독립 공간에서 위생과 프라이버시까지 세심하게'],
];

const priceGroups = [
  ['얼굴', [['인중', '15'], ['턱', '25'], ['목', '20'], ['볼', '20'], ['구레나룻', '20'], ['얼굴 전체', '50'], ['뒷목 헤어라인', '25']]],
  ['상체', [['가슴', '40'], ['배', '40'], ['가슴 + 배', '75'], ['유륜', '20'], ['허리', '35'], ['등', '75']]],
  ['팔', [['겨드랑이', '5'], ['어깨', '35'], ['상완', '35'], ['하완', '35'], ['손', '20']]],
  ['하체', [['엉덩이', '50'], ['종아리', '100'], ['허벅지', '100'], ['발', '20']]],
  ['프라이빗', [['삼각라인', '50'], ['브라질리언', '150'], ['성기', '50'], ['음모', '50'], ['음낭', '80'], ['회음부', '40'], ['항문', '40'], ['항문 + 회음부', '75']]],
] as const;

const process = [
  ['1:1 정밀 상담', '피부 타입과 털의 밀도·굵기, 원하는 라인을 확인합니다.'],
  ['표면 마취', '부위와 통증 민감도에 따라 표면 마취 후 충분히 기다립니다.'],
  ['맞춤 레이저 시술', '모근 깊이와 피부 반응에 맞춰 파장과 출력을 설정합니다.'],
  ['급속 쿨링 & 진정', '레이저 열감을 낮추고 자극받은 피부를 편안하게 진정시킵니다.'],
  ['관리 수칙 안내', '모낭염 예방과 일상 관리 방법을 자세히 안내합니다.'],
];

const faqs = [
  ['몇 회 정도 받아야 효과가 나타나나요?', '남성 모근은 굵고 재생력이 강해 보통 4~6주 간격으로 5회 이상을 권장합니다. 개인의 모질과 부위에 따라 필요한 횟수는 달라질 수 있습니다.'],
  ['브라질리언 제모가 민망하지 않을까요?', '남성 의료진과 스태프가 독립된 1인 룸에서 진행합니다. 프라이버시를 우선한 동선과 편안한 안내로 부담을 덜어드립니다.'],
  ['남성 수술 전후에도 가능한가요?', '가능합니다. 다만 수술 후에는 회복 상태에 따라 일정 조율이 필요하므로 전문의 상담 후 진행합니다.'],
  ['화상이나 모낭염이 걱정됩니다.', '피부와 모근 상태에 맞춘 출력, 연속 에어 쿨링, 시술 후 진정 처치로 위험을 낮춥니다. 모든 시술에는 개인차와 부작용 가능성이 있어 사전 상담이 필요합니다.'],
];

export default function Home() {
  return <main>
    <section className="hero">
      <div className="heroBrand"><img src="./jj-mark.png" alt="JJ비뇨기과"/><span>JJ UROLOGY</span></div>
      <div className="heroCopy"><p className="label">MEN&apos;S LASER HAIR REMOVAL</p><h1>남자의 제모는<br/><em>달라야 합니다.</em></h1><p className="lead">굵고 깊은 모근부터 민감한 프라이빗 부위까지.<br/>남성의 피부와 신체 구조를 고려한 맞춤 레이저 제모</p><div className="actions"><a className="button light" href="#consultation">1:1 비밀 상담</a><a className="quietLink" href="#program">시술 부위 확인 <span>↓</span></a></div></div>
      <div className="heroPanel" aria-label="JJ 남성 제모 핵심 원칙"><span>JJ MEN&apos;S GROOMING</span><strong>오직 남성을 위한<br/>프라이빗 제모</strong><dl><div><dt>100%</dt><dd>남성 의료진·스태프</dd></div><div><dt>1:1</dt><dd>피부·모질 맞춤 출력</dd></div><div><dt>PRIVATE</dt><dd>독립된 시술 공간</dd></div></dl></div>
    </section>

    <section className="intro wrap"><p className="label blue">WHY JJ UROLOGY</p><div><h2>남성의 굵고 깊은 털,<br/>남성을 잘 아는 곳에서.</h2><p>남성 체모는 모근이 깊고 밀도가 높으며 호르몬의 영향을 강하게 받습니다. 높은 출력이 필요한 만큼 피부 상태와 신체 구조를 세심하게 살피고, 부위별 모근 깊이와 모질에 맞춘 계획이 중요합니다.</p></div></section>

    <section className="strengths wrap"><header className="sectionTitle"><p className="label blue">PRIVATE &amp; PROFESSIONAL</p><h2>망설였던 이유까지<br/>케어의 기준으로.</h2></header><div className="strengthList">{strengths.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="equipment"><div className="equipmentInner wrap"><div className="deviceStage"><img className="deviceLogo" src="./apogee-elite-plus-logo.png" alt="Apogee Elite Plus"/><img className="device" src="./apogee-elite-plus-device.png" alt="사이노슈어 아포지 엘리트 플러스 레이저 장비"/><small>CYNOSURE APOGEE ELITE+</small></div><div className="equipmentText"><p className="label sky">DUAL-WAVELENGTH LASER</p><h2>남성의 모근을 겨냥하는<br/>두 개의 정밀한 파장.</h2><p className="equipmentLead">아포지 엘리트 플러스의 755nm 알렉산드라이트와 1064nm 롱펄스 엔디야그를 피부 톤과 모질에 맞춰 선택합니다.</p><div className="specs"><div><strong>755<span>nm</span></strong><p>상대적으로 얕은 모근과 밝은 피부 타입에 효과적으로 접근</p></div><div><strong>1064<span>nm</span></strong><p>깊고 굵은 모근과 다양한 피부 톤을 고려한 롱펄스 파장</p></div></div><ul><li><b>24mm XL SPOT</b><span>넓은 부위를 빠르고 균일하게 조사</span></li><li><b>COLD AIR</b><span>시술 전·중·후 연속 에어 쿨링 병행</span></li><li><b>NON-CONTACT</b><span>젤을 바르지 않는 쾌적한 시술 방식</span></li></ul></div></div></section>

    <section className="program wrap" id="program"><header className="sectionTitle split"><div><p className="label blue">CUSTOM PROGRAM</p><h2>보이는 곳부터<br/>말하기 어려운 곳까지.</h2></div><p>원하는 부위만 선택하거나 여러 부위를 함께 상담할 수 있습니다. 부위별 털의 굵기와 피부 민감도에 맞춰 계획합니다.</p></header><div className="programList">{programs.map(([tag, title, parts, text], i) => <article key={tag}><div className={`programGraphic graphic${i + 1}`}><span>0{i + 1}</span><i/><b>{tag}</b></div><div className="programCopy"><span>{tag}</span><h3>{title}</h3><b>{parts}</b><p>{text}</p></div></article>)}</div></section>

    <section className="process"><div className="wrap"><header className="sectionTitle"><p className="label blue">5-STEP PROCESS</p><h2>처음부터 끝까지<br/>안심할 수 있도록.</h2></header><ol>{process.map(([title, text], i) => <li key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

    <section className="pricing wrap" id="price"><header className="sectionTitle split"><div><p className="label blue">PRICE GUIDE</p><h2>시술 부위별<br/>비용 안내</h2></div><p>표기 금액 단위는 만원입니다.<br/>개인의 상태와 실제 시술 범위에 따라 달라질 수 있습니다.</p></header><div className="priceTable">{priceGroups.map(([group, items]) => <section key={group}><h3>{group}</h3><div>{items.map(([name, price]) => <p key={name}><span>{name}</span><strong>{price}<small>만원</small></strong></p>)}</div></section>)}</div><a className="priceCta" href="#consultation">내게 맞는 부위 상담하기 <span>→</span></a></section>

    <section className="careGuide"><div className="wrap careColumns"><article><span>BEFORE</span><h3>시술 전</h3><p>시술 1~2일 전 면도기로 가볍게 면도해 주세요. 털을 뽑거나 왁싱하면 레이저가 목표로 하는 모근이 사라질 수 있습니다. 최소 2주간 선탠과 과도한 야외 활동도 피해주세요.</p></article><article><span>AFTER</span><h3>시술 후</h3><p>당일 미온수 샤워는 가능하며 3~5일간 사우나·찜질방·격한 운동을 피해주세요. 노출 부위에는 자외선 차단제를 꼼꼼히 사용하고 이상 반응이 지속되면 의료진에게 문의하세요.</p></article></div></section>

    <section className="faq wrap"><header className="sectionTitle"><p className="label blue">FAQ</p><h2>자주 묻는 질문</h2></header><div className="faqList">{faqs.map(([q, a], i) => <details key={q}><summary><span>0{i + 1}</span><b>{q}</b><i>＋</i></summary><p>{a}</p></details>)}</div></section>

    <section className="consultation" id="consultation"><img src="./jj-mark.png" alt=""/><p className="label sky">PRIVATE CONSULTATION</p><h2>남성을 위한 관리,<br/><em>JJ에서 시작하세요.</em></h2><p>원하는 부위와 현재 피부 상태를 알려주세요.<br/>남성 전담 스태프가 부담 없이 안내해 드립니다.</p><div className="contactActions"><a className="button kakao" href="https://pf.kakao.com/_qYlyV" target="_blank" rel="noreferrer">카카오톡 1:1 상담 ↗</a><a className="button outline" href="tel:1599-5952">전화 상담 1599-5952</a></div><div className="clinicInfo"><span>서울 강남구 선릉로 815, 신한양빌딩</span><span>수인분당선 압구정로데오역 5번 출구</span></div></section>
    <div className="mobileBar"><a href="https://pf.kakao.com/_qYlyV" target="_blank" rel="noreferrer">카카오 상담</a><a href="tel:1599-5952">전화 상담</a></div>
  </main>;
}
