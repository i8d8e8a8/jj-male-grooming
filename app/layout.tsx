import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'남성 레이저 제모 | JJ비뇨기과',description:'남성의 피부와 체모를 이해하는 비뇨의학과 전문의의 프라이빗 맞춤 레이저 제모'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ko"><body>{children}</body></html>}
