'use client'

import Link from "next/link";
import Image from "next/image"
import Invitation from "@/app/(wc)/home/invitation/Invitation";
import Account from "@/app/(wc)/home/account/Account";
import Gallery from "@/app/(wc)/home/gallery/Gallery";
import Location from "@/app/(wc)/home/location/Location";
import Calendar from "@/app/(wc)/home/calendar/Calendar";
import Guide from "@/app/(wc)/home/guide/Guide";
import GuestBook from "@/app/(wc)/home/guestbook/GuestBook";
import Share from "@/app/(wc)/home/share/Share";
import { useIsMobile } from "@/components/hooks/use-mobile";
import AttendanceModal from "@/app/(wc)/home/attendance/AttendanceModal";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import { useState, useEffect } from 'react'
import NavBar from "@/components/ui/NavBar";

export default function Home() {
  const isMobile = useIsMobile();
  useIntersectionObserver();
  
  const animationClass = "opacity-0 translate-x-[-100px] transition-all duration-1000 ease-out data-[visible=true]:translate-x-0 data-[visible=true]:opacity-100";
  
  return (
    <>
    <NavBar />
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50/50 to-white relative overflow-hidden">
      {/* 배경 장식 요소들 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full 
          bg-gradient-to-br from-pink-100/20 to-rose-100/20 blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full 
          bg-gradient-to-tl from-rose-100/20 to-pink-100/20 blur-3xl" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full 
          bg-gradient-to-t from-pink-50/30 to-rose-50/30 blur-3xl" />
      </div>
      {/* 메인 컨텐츠 */}
      <div className="relative max-w-4xl mx-auto px-4">
        {/* 큰 사진 */}
        <div className={`w-full aspect-square ${animationClass}`} id="hero-image">
          <Image 
            className="m-0 rounded-xl w-full h-full object-cover"
            src="/images/first.jpg" 
            width={1200} 
            height={1200}
            sizes="(max-width: 768px) 100vw, 1200px"
            alt={isMobile ? "신랑 신부 모바일 사진" : "신랑 신부 웨딩 사진"}
            priority={true}
            quality={75}
          />
        </div>
        {/* 예식 일시 장소 */}
        <section className={`py-12 ${animationClass}`}>
          <Invitation />
        </section>
        {/* 혼주에게 연락하기 */}
        {/* 달력표시 & D-day */}
        <section className={`py-12 ${animationClass}`}>
          <Calendar/>
        </section>
        {/* 갤러리 */}
        <section className={`py-12 ${animationClass}`}>
          <Gallery />
        </section>
        {/* 오시는 길 */}
        <section className={`py-12 ${animationClass}`}>
          <Location />
        </section>
        {/* 참석여부전달 */}
        <section className={`py-12 ${animationClass}`}>
          <AttendanceModal />
        </section>
        
        {/* 마음 전하실 곳 */}
        <section className={`py-12 ${animationClass}`}>
          <Account />
        </section>
        {/* 안내사항 */}
        <section className={`py-12 ${animationClass}`}>
          <Guide />
        </section>
        {/* 방명록 */}
        <section className={`py-12 ${animationClass}`}>
          <GuestBook />
        </section>
        {/* 공유하기 */}
        <section className={`py-12 ${animationClass}`}>
          <Share />
        </section>
      </div>
    </main>
    </>
  )
}