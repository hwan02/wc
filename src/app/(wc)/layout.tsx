import { Header } from "@/components/Header";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '모바일 청첩장',
  description: '2025년 10월 18일 결혼식에 초대합니다',
}
export default async function WCLayout({
    children,
                                       }: {
  children: React.ReactNode
}){
  return (
      <div className="mx-auto w-full max-w-7xl">
        {/*<Header/>*/}
        <div className="px-4 py-2">
          {children}
        </div>
      </div>
  )
}