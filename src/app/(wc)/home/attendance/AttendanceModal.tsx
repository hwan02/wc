'use client'

import { useState, useEffect } from 'react';
import weddingData from '@/data.json';
import { dataloaderIntegration } from '@sentry/nextjs';

export default function AttendanceModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    greeting: { 
      host: { groom, bride },
      date
    },
    locationInfo,
    venue: { address1: hall } 
  } = weddingData;

  useEffect(() => {
    const shouldShow = !localStorage.getItem('hideAttendanceModal') || 
      new Date(localStorage.getItem('hideAttendanceModal')!).getTime() < new Date().setHours(0, 0, 0, 0);
    
    setIsOpen(shouldShow);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleHideToday = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    localStorage.setItem('hideAttendanceModal', tomorrow.toISOString());
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={handleClose}
      />
      
      <div className="fixed top-[20vh] left-1/2 transform -translate-x-1/2 bg-white/95 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-50 w-[90%] max-w-md text-center">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-6 text-gray-800">참석 여부 전달</h2>
        
        <p className="mb-6 text-gray-700 leading-relaxed">
          결혼식에 참석해주시는 모든 분들을<br />
          더욱 특별하게 모시고자 하오니,<br />
          참석 여부 전달을 부탁드립니다.
        </p>
        
        <div className="mb-8 py-6 px-4 bg-pink-50/50 rounded-xl text-gray-700">
          <p className="mb-2">신랑 {groom.name} ❤️ 신부 {bride.name}</p>
          <p className="mb-2">{date.year}년 {date.month}월 {date.day}일 {date.time}</p>
          <p>{hall}</p>
        </div>

        <div className="space-x-4 mb-8">
          <button 
            onClick={() => {/* 참석 로직 */}}
            className="px-8 py-3 bg-pink-50 text-pink-700 border border-pink-200 rounded-full hover:bg-pink-100 transition-colors font-medium"
          >
            참석
          </button>
          <button 
            onClick={() => {/* 불참석 로직 */}}
            className="px-8 py-3 bg-gray-50 text-gray-700 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors font-medium"
          >
            불참석
          </button>
        </div>

        <label className="flex items-center justify-center text-sm text-gray-500 cursor-pointer hover:text-gray-700 transition-colors">
          <input 
            type="checkbox"
            onChange={handleHideToday}
            className="mr-2 accent-pink-500"
          />
          오늘 하루 보지 않기
        </label>
      </div>
    </>
  );
}