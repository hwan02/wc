import { Metadata } from 'next'
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '서승환 ❤️ 홍예나 결혼합니다.',
  description: '2025년 10월 18일 결혼식에 초대합니다',
}

export default async function WCLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
      />
      <Script
        strategy="beforeInteractive"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&libraries=services`}
      />
      <div
        className={`
          antialiasing
          min-h-screen
          bg-gradient-to-b from-rose-50 via-white to-rose-50
          bg-[url('/images/floral.png')] bg-repeat bg-opacity-10
        `}
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="px-4 py-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}