const strengths = [
  ['01', 'doctor', '남성 전담 진료', '상담부터 시술과 후케어까지 남성 의료진과 스태프가 함께합니다.'],
  ['02', 'private', '1인 프라이빗 룸', '시선과 동선을 분리한 독립 공간에서 편안하게 진행합니다.'],
  ['03', 'tune', '부위별 맞춤 출력', '피부 톤, 모질, 굵기와 모근 깊이에 맞춰 파장과 출력을 설정합니다.'],
  ['04', 'cool', '통증 부담을 낮춘 케어', '표면 마취와 연속 에어 쿨링을 병행해 열감과 통증 부담을 낮춥니다.'],
];

const programs = [
  ['FACE', 'face', '얼굴 제모', '인중 · 턱 · 볼 · 구레나룻 · 목', '반복되는 면도 자극과 푸른 수염 자국을 줄여 보다 단정한 인상으로'],
  ['BODY', 'body', '바디 제모', '가슴 · 배 · 등 · 팔 · 다리', '털 박힘과 운동 중 쓸림을 줄여 깔끔하고 쾌적한 바디라인으로'],
  ['PRIVATE', 'lock', '프라이빗 제모', '브라질리언 · 음낭 · 회음부 · 항문', '남성 전담 스태프와 독립 공간에서 위생과 프라이버시까지 세심하게'],
];

const programVisuals = ['program-face-symbol-v3.png', 'program-body-flow-v6.png', 'program-private-valley-v3.png'];

const videos = [
  ['KteJgdWUTAE', 'LATEST · 2025.09.24', '남자제모는 JJ에서 해야하는 이유?'],
  ['KU8cPyx_Xv4', 'RECENT POPULAR · 2025.01.10', '남성 제모, 이렇게 쉬울 줄이야!'],
  ['GZRrmqLd-z0', 'MOST VIEWED', '남자들이 항문제모를 해야하는 이유는?'],
];

const videoNotes = [
  ['왁싱과 레이저의 차이', '왁싱은 털을 뽑는 방식이고, 레이저는 성장기의 모근을 반복적으로 조사해 감소를 유도합니다.'],
  ['남성 모근에 맞는 세팅', '남성은 피부 두께와 모근의 밀도·굵기가 달라 부위와 피부 반응에 맞춘 출력 설정이 중요합니다.'],
  ['민감 부위도 빠르고 비접촉으로', '아포지 엘리트 플러스의 비접촉 조사 방식으로 넓거나 민감한 부위도 위생적으로 진행합니다.'],
];

const priceVisuals = ['face-marble-v2.png', 'chest-marble-v2.png', 'arm-marble.png', 'leg-marble-v4.png', 'private-marble.png'];

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

type IconName = 'doctor' | 'private' | 'tune' | 'cool' | 'face' | 'body' | 'lock' | 'consult' | 'cream' | 'laser' | 'snow' | 'guide' | 'before' | 'after';

function Icon({name}: {name: IconName}) {
  const shapes: Record<IconName, React.ReactNode> = {
    doctor: <><circle cx="12" cy="7" r="3"/><path d="M6.5 20v-2.5a5.5 5.5 0 0 1 11 0V20M12 13v7M9.5 16.5h5"/></>,
    private: <><path d="M5 21V5.5A2.5 2.5 0 0 1 7.5 3H18v18M9 12h5M9 7h5"/><circle cx="14.5" cy="16.5" r=".8" fill="currentColor" stroke="none"/></>,
    tune: <><path d="M4 7h7M15 7h5M4 17h3M11 17h9"/><circle cx="13" cy="7" r="2"/><circle cx="9" cy="17" r="2"/></>,
    cool: <><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9 5l3 2 3-2M9 19l3-2 3 2"/></>,
    face: <><path d="M8 4.5A7.5 7.5 0 0 1 19 11c0 5-3 9-7 9s-7-4-7-9c0-2 .7-4 2-5.3"/><path d="M9.5 10.5h.01M15 10.5h.01M9.5 15c1.7 1.2 3.3 1.2 5 0"/></>,
    body: <><path d="M9 4c0 2-1.5 3-3 4l2 4v8M15 4c0 2 1.5 3 3 4l-2 4v8M9 4h6M8 12h8M12 4v16"/></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></>,
    consult: <><path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 9h8M8 12h5"/></>,
    cream: <><path d="M8 4h8l1 4H7l1-4ZM7 8h10l1 13H6L7 8Z"/><path d="M10 12h4"/></>,
    laser: <><path d="m4 16 8-8 4 4-8 8H4v-4ZM14 6l2-2 4 4-2 2M17 14l3 1M15 17l1 3M18 11l2-1"/></>,
    snow: <><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/><circle cx="12" cy="12" r="2"/></>,
    guide: <><path d="M6 3h9l3 3v15H6V3Z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></>,
    before: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2M5 5l-2 2"/></>,
    after: <><path d="M12 3a9 9 0 1 0 9 9"/><path d="m8 12 3 3 9-10"/></>,
  };
  return <span className="icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">{shapes[name]}</svg></span>;
}

export default function Home() {
  return <main>
    <section className="hero">
      <div className="heroBrand"><img src="./jj-mark.png" alt="JJ비뇨기과"/><span>JJ UROLOGY</span></div>
      <div className="heroCopy"><p className="label">JJ 남성 레이저 제모</p><h1><span>남자의 제모는</span><span>달라야 합니다.</span></h1><p className="lead">굵고 깊은 모근부터 민감한 프라이빗 부위까지.<br/>남성의 피부와 신체 구조를 고려한 맞춤 레이저 제모</p><div className="actions"><a className="button light" href="#consultation">1:1 비밀 상담</a><a className="quietLink" href="#program">시술 부위 확인 <span>↓</span></a></div></div>
      <div className="heroVisual" aria-label="자연스러운 남성 피부와 턱선을 표현한 이미지"><img src="./hero-male-editorial.png" alt="자연스러운 피부결의 남성 측면 인물"/><div className="heroPanel"><span>남성 전담 제모 클리닉</span><strong>오직 남성을 위한<br/>프라이빗 제모</strong><dl><div><dt>100%</dt><dd>남성 의료진·스태프</dd></div><div><dt>1:1</dt><dd>피부·모질 맞춤 출력</dd></div><div><dt>독립 공간</dt><dd>프라이버시를 고려한 시술</dd></div></dl></div></div>
    </section>

    <section className="intro wrap"><p className="label blue">왜 비뇨의학과인가</p><div className="introBody"><div className="introCopy"><h2>남성의 굵고 깊은 털,<br/>남성을 잘 아는 곳에서.</h2><p>남성 체모는 모근이 깊고 밀도가 높으며 호르몬의 영향을 강하게 받습니다. 피부 상태와 신체 구조를 세심하게 살피고, 부위별 모근 깊이와 모질에 맞춘 계획이 중요합니다.</p></div><div className="introFacts"><article><span>01</span><strong>남성 신체 구조</strong><p>얼굴부터 프라이빗 부위까지 구조와 피부 특성을 고려합니다.</p></article><article><span>02</span><strong>굵고 깊은 모근</strong><p>부위별 밀도와 깊이에 맞춰 파장과 출력을 세밀하게 설정합니다.</p></article><article><span>03</span><strong>민감 부위 진료 경험</strong><p>말하기 어려운 부위도 익숙하고 편안한 진료 과정으로 안내합니다.</p></article></div></div></section>

    <section className="strengths"><div className="wrap strengthsInner"><header className="sectionTitle"><p className="label sky">남성 전담 프라이빗 케어</p><h2>망설였던 이유까지<br/>케어의 기준으로.</h2><p className="privacyLead">마주치지 않도록, 드러나지 않도록,<br/>처음부터 끝까지 남성만을 위한 동선과 응대.</p></header><div className="strengthList">{strengths.map(([n, icon, title, text]) => <article key={n}><span>{n}</span><Icon name={icon as IconName}/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="equipment"><div className="equipmentInner wrap"><div className="deviceStage"><img className="deviceLogo" src="./apogee-elite-plus-logo.png" alt="Apogee Elite Plus"/><img className="device" src="./apogee-elite-plus-device.png" alt="사이노슈어 아포지 엘리트 플러스 레이저 장비"/><small>CYNOSURE APOGEE ELITE+</small></div><div className="equipmentText"><p className="label sky">아포지 엘리트 플러스</p><h2>남성의 모근을 겨냥하는<br/>두 개의 정밀한 파장.</h2><p className="equipmentLead">아포지 엘리트 플러스의 755nm 알렉산드라이트와 1064nm 롱펄스 엔디야그를 피부 톤과 모질에 맞춰 선택합니다.</p><div className="specs"><div><strong>755<span>nm</span></strong><p>상대적으로 얕은 모근과 밝은 피부 타입에 효과적으로 접근</p></div><div><strong>1064<span>nm</span></strong><p>깊고 굵은 모근과 다양한 피부 톤을 고려한 롱펄스 파장</p></div></div><ul><li><b>24mm 대형 스팟</b><span>넓은 부위를 빠르고 균일하게 조사</span></li><li><b>연속 에어 쿨링</b><span>시술 전·중·후 피부 표면을 냉각</span></li><li><b>비접촉 방식</b><span>젤을 바르지 않는 쾌적한 시술</span></li></ul></div></div><div className="equipmentEvolution wrap"><header><p className="label sky">APOGEE EVOLUTION</p><h3>단일 파장에서 듀얼 파장으로.</h3><p>오랜 시간 다듬어진 아포지 플랫폼의 정밀함에 서로 다른 깊이를 공략하는 두 파장을 더했습니다.</p></header><ol><li><span>01</span><small>APOGEE</small><strong>755nm의 정밀함</strong><p>알렉산드라이트 파장을 기반으로 모근을 정밀하게 조사하는 아포지의 시작.</p></li><li><span>02</span><small>APOGEE+</small><strong>더 넓어진 조사 범위</strong><p>강력한 755nm 플랫폼과 넓은 스팟으로 속도와 효율을 발전시킨 세대.</p></li><li className="selected"><span>03</span><small>ELITE+ <em>JJ CHOICE</em></small><strong>두 파장의 유연함</strong><p>755nm와 1064nm를 한 시스템에 담아 피부 톤과 모근 깊이에 맞춰 선택하는 듀얼 파장 워크스테이션.</p></li></ol></div></section>

    <section className="program wrap" id="program"><header className="sectionTitle split"><div><p className="label blue">부위별 맞춤 프로그램</p><h2>보이는 곳부터<br/>말하기 어려운 곳까지.</h2></div><p>원하는 부위만 선택하거나 여러 부위를 함께 상담할 수 있습니다. 부위별 털의 굵기와 피부 민감도에 맞춰 계획합니다.</p></header><div className="programList">{programs.map(([tag, icon, title, parts, text], i) => <article className={i % 2 === 0 ? 'programVisualLeft' : 'programVisualRight'} key={tag}><div className="programIndex"><span>0{i + 1}</span><Icon name={icon as IconName}/></div><div className="programCopy"><small>{tag}</small><h3>{title}</h3><b>{parts}</b><p>{text}</p></div><div className="programVisual"><img src={`./${programVisuals[i]}`} alt=""/></div></article>)}</div></section>

    <section className="videos"><div className="wrap"><header className="sectionTitle split"><div><p className="label sky">JJ UROLOGY YOUTUBE</p><h2>영상으로 먼저 보는<br/>남성 제모.</h2></div><p>최신 영상과 실제 시청 반응이 좋았던 제모 콘텐츠를 선별했습니다. 시술 과정과 민감 부위 제모가 궁금하다면 영상으로 먼저 확인해 보세요.</p></header><div className="videoGrid">{videos.map(([id, meta, title]) => <article key={id}><div className="videoFrame"><iframe src={`https://www.youtube.com/embed/${id}`} title={title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/></div><small>{meta}</small><h3>{title}</h3></article>)}</div><div className="videoNotes">{videoNotes.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="process"><div className="wrap"><header className="sectionTitle"><p className="label blue">남성 맞춤 5단계</p><h2>처음부터 끝까지<br/>안심할 수 있도록.</h2></header><ol>{process.map(([title, text], i) => <li key={title}><span>0{i + 1}</span><Icon name={(['consult','cream','laser','snow','guide'] as IconName[])[i]}/><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

    <section className="pricing wrap" id="price"><header className="sectionTitle split"><div><p className="label blue">비용 안내</p><h2>시술 부위별<br/>비용 안내</h2></div><p>표기 금액 단위는 만원입니다.<br/>개인의 상태와 실제 시술 범위에 따라 달라질 수 있습니다.</p></header><div className="priceTable">{priceGroups.map(([group, items], i) => <section key={group}><div className="priceVisual"><img src={`./${priceVisuals[i]}`} alt={`${group} 제모 부위를 표현한 이미지`}/><h3>{group}</h3></div><div>{items.map(([name, price]) => <p key={name}><span>{name}</span><strong>{price}<small>만원</small></strong></p>)}</div></section>)}</div><a className="priceCta" href="#consultation">내게 맞는 부위 상담하기 <span>→</span></a></section>

    <section className="careGuide"><div className="wrap careColumns"><article><Icon name="before"/><span>시술 전 확인사항</span><h3>시술 전</h3><p>시술 1~2일 전 면도기로 가볍게 면도해 주세요. 털을 뽑거나 왁싱하면 레이저가 목표로 하는 모근이 사라질 수 있습니다. 최소 2주간 선탠과 과도한 야외 활동도 피해주세요.</p></article><article><Icon name="after"/><span>시술 후 관리</span><h3>시술 후</h3><p>당일 미온수 샤워는 가능하며 3~5일간 사우나·찜질방·격한 운동을 피해주세요. 노출 부위에는 자외선 차단제를 꼼꼼히 사용하고 이상 반응이 지속되면 의료진에게 문의하세요.</p></article></div></section>

    <section className="faq wrap"><header className="sectionTitle"><p className="label blue">제모 상담 안내</p><h2>자주 묻는 질문</h2></header><div className="faqList">{faqs.map(([q, a], i) => <details key={q}><summary><span>0{i + 1}</span><b>{q}</b><i>＋</i></summary><p>{a}</p></details>)}</div></section>

    <section className="consultation" id="consultation"><img src="./jj-mark.png" alt=""/><p className="label sky">1:1 비밀 상담</p><h2>남성을 위한 관리,<br/><em>JJ에서 시작하세요.</em></h2><p>원하는 부위와 현재 피부 상태를 알려주세요.<br/>남성 전담 스태프가 부담 없이 안내해 드립니다.</p><div className="contactActions"><a className="button kakao" href="https://pf.kakao.com/_qYlyV" target="_blank" rel="noreferrer">카카오톡 1:1 상담 ↗</a><a className="button outline" href="tel:1599-5952">전화 상담 1599-5952</a></div><div className="clinicInfo"><span>서울 강남구 선릉로 815, 신한양빌딩</span><span>수인분당선 압구정로데오역 5번 출구</span></div></section>
    <div className="mobileBar"><a href="https://pf.kakao.com/_qYlyV" target="_blank" rel="noreferrer">카카오 상담</a><a href="tel:1599-5952">전화 상담</a></div>
  </main>;
}
