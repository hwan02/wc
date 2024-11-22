'use client'

import { useEffect, useState } from 'react'

export default function CalendarPage() {
  const [dday, setDday] = useState<number>(0)
  const weddingDate = new Date('2025-10-18')

  useEffect(() => {
    const calculateDday = () => {
      const today = new Date()
      const diff = weddingDate.getTime() - today.getTime()
      return Math.ceil(diff / (1000 * 60 * 60 * 24))
    }
    setDday(calculateDday())
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">결혼식 일정</h1>
      <div className="text-center mb-8">
        <p className="text-xl">2025년 10월 18일</p>
        <p className="text-2xl font-bold text-red-500 mt-2">D-{dday}</p>
      </div>
      {/* 달력 컴포넌트 추가 */}
    </div>
  )
}