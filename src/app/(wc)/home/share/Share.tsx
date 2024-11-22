'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Share() {
  const [copySuccess, setCopySuccess] = useState(false);
  const currentURL = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyURL = async () => {
    try {
      await navigator.clipboard.writeText(currentURL);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('URL 복사 실패:', err);
    }
  };

  const handleInstagramShare = () => {
    window.open('https://instagram.com', '_blank');
  };

  const handleKakaoShare = () => {
    // 카카오톡 공유하기 API 연동이 필요합니다
    // 카카오 개발자 센터에서 앱 키를 발급받아야 합니다
    window.open('https://developers.kakao.com/docs/latest/ko/message/js-link', '_blank');
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold">청첩장 공유하기</h2>
      
      <div className="flex gap-6">
        {/* 인스타그램 공유 */}
        <button 
          onClick={handleInstagramShare}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center">
            {/* <Image 
              src="/icons/instagram.svg" 
              alt="Instagram" 
              width={24} 
              height={24}
            /> */}
          </div>
          <span className="text-sm">Instagram</span>
        </button>

        {/* 카카오톡 공유 */}
        <button 
          onClick={handleKakaoShare}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center">
            {/* <Image 
              src="/icons/kakao.svg" 
              alt="KakaoTalk" 
              width={24} 
              height={24}
            /> */}
          </div>
          <span className="text-sm">카카오톡</span>
        </button>

        {/* URL 복사 */}
        <button 
          onClick={handleCopyURL}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            {/* <Image 
              src="/icons/link.svg" 
              alt="Copy URL" 
              width={24} 
              height={24}
            /> */}
          </div>
          <span className="text-sm">URL 복사</span>
        </button>
      </div>

      {copySuccess && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full text-sm">
          URL이 복사되었습니다!
        </div>
      )}
    </div>
  );
}
