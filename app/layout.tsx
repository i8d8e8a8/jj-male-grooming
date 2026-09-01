import type { Metadata } from 'next';
import './globals.css';
import './area-visuals.css';
export const metadata:Metadata={
  metadataBase:new URL('https://i8d8e8a8.github.io'),
  title:'남성 레이저 제모 | JJ비뇨기과',
  description:'남성의 굵고 깊은 모근부터 얼굴·바디·브라질리언 제모까지. 아포지 엘리트 플러스를 이용한 JJ비뇨기과 남성 맞춤 레이저 제모.',
  keywords:['남성 제모','남자 레이저 제모','남자 브라질리언 제모','강남 남성 제모','양재 남성 제모','아포지 엘리트 플러스','JJ비뇨기과'],
  alternates:{canonical:'/jj-male-grooming/'},
  robots:{index:true,follow:true},
  icons:{icon:'./favicon.svg'},
  openGraph:{type:'website',locale:'ko_KR',url:'/jj-male-grooming/',siteName:'JJ비뇨기과',title:'남성 레이저 제모 | JJ비뇨기과',description:'남성의 피부와 모근, 민감 부위까지 고려한 프라이빗 맞춤 레이저 제모.',images:[{url:'/jj-male-grooming/hero-male-editorial.png',width:1122,height:1402,alt:'JJ비뇨기과 남성 레이저 제모'}]},
  twitter:{card:'summary_large_image',title:'남성 레이저 제모 | JJ비뇨기과',description:'남성의 피부와 모근에 맞춘 프라이빗 레이저 제모.',images:['/jj-male-grooming/hero-male-editorial.png']},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ko"><body>{children}</body></html>}
