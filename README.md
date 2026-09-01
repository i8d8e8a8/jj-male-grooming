# JJ 남성 레이저 제모 랜딩페이지

JJ비뇨기과의 기존 남성 제모 안내 정보를 바탕으로 구성한 반응형 랜딩페이지입니다.

- 공개 페이지: `https://i8d8e8a8.github.io/jj-male-grooming/`
- 배포: `main` 브랜치의 `docs/`를 사용하는 GitHub Pages
- 이미지: 대리석 계열의 추상 인체 이미지, 실제 관리 사진, 공식 장비 자료를 조합
- 콘텐츠: 장비, 파장, 쿨링, 시술 부위·비용, 5단계 과정, 전후 관리, FAQ와 상담 정보
- 제외: 특정 원장 개인 정보
- 원본 개발: `pnpm dev`
- 정적 페이지 생성: 프로덕션 서버 실행 후 `node scripts/export-static.mjs`
- 프로젝트 상태와 디자인 원칙: [`HANDOFF.md`](./HANDOFF.md)

## 병원 웹사이트 적용본

- 파일질라 업로드 구조 생성: `node scripts/prepare-filezilla-deploy.mjs <landing/male-grooming 경로>`
- 제모 1·2 페이지 분리본 생성: `node scripts/build-depilation-deploy.mjs <기존 depilation 백업> <출력 경로>`
- 분리본 검사: `node scripts/check-depilation-deploy.mjs <출력 경로>`
- `/child/sub/landing/`은 전체 랜딩, `/child/sub/depilation/1.php`는 안내 영역, `2.php`는 부위·가격 영역을 사용한다.
- `2.php`에는 히어로·전후관리·FAQ·상담 CTA가 포함되지 않는다.
