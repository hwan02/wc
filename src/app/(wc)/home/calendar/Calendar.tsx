'use client'

import { useEffect, useState, useMemo } from 'react'
import data from '@/data.json'

export default function CalendarPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const weddingDate = useMemo(() => {
    const month = String(data.greeting.date.month).padStart(2, '0')
    const day = String(data.greeting.date.day).padStart(2, '0')
    return new Date(`${data.greeting.date.year}-${month}-${day}T${data.greeting.date.time}`)
  }, [])

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const diff = weddingDate.getTime() - now.getTime()

      if (isNaN(diff)) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      return { days, hours, minutes, seconds }
    }

    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [weddingDate])

  // 2025년 10월 1일이 수요일(3)부터 시작
  const firstDayOffset = 3
  const totalDays = 31
  const calendar = Array(firstDayOffset).fill(null).concat(Array.from({ length: totalDays }, (_, i) => i + 1))

  return (
    <div className="flex flex-col items-center space-y-8 p-4">
      <div className="w-full max-w-sm bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm overflow-hidden">
        <div className="bg-rose-50/80 px-4 py-3 text-center">
          <p className="font-serif-kr text-lg text-gray-700">
            {data.greeting.date.year}년 {data.greeting.date.month}월
          </p>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
              <div key={day} className={`text-sm font-medium ${index === 0 ? 'text-rose-400' : 'text-gray-400'}`}>
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {calendar.map((date, index) => (
              <div
                key={index}
                className={`relative aspect-square flex flex-col items-center
                  ${date === null ? '' : 'text-gray-600'}
                  ${(index % 7 === 0) ? 'text-rose-400' : ''}`}
              >
                <div className="relative h-7 w-7 flex items-center justify-center">
                  <span>{date}</span>
                  {date === 18 && (
                    <div className="absolute inset-0 border-2 border-rose-400 rounded-full"></div>
                  )}
                </div>
                {date === 18 && (
                  <div className="text-[10px] text-rose-500 mt-0.5">
                    {`${parseInt(data.greeting.date.time) >= 12 ? '오후' : '오전'} ${parseInt(data.greeting.date.time) > 12 ? parseInt(data.greeting.date.time) - 12 : parseInt(data.greeting.date.time)}시`}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        {[
          { value: timeLeft.days, label: '일' },
          { value: timeLeft.hours, label: '시' },
          { value: timeLeft.minutes, label: '분' },
          { value: timeLeft.seconds, label: '초' }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-rose-400 flex items-center justify-center mb-1 bg-white/60 backdrop-blur-sm">
              <span className="font-medium text-xl text-gray-700">
                {String(item.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-sm text-gray-500">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}