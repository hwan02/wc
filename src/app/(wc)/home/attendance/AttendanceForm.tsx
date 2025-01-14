'use client';

import { useState, useEffect } from 'react';

export default function AttendanceForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">참석여부 전달</h1>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              성함
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              참석인원
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              참석여부
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="yes">참석</option>
              <option value="no">불참</option>
              <option value="maybe">미정</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              메시지
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90"
          >
            전달하기
          </button>
        </form>
      </div>

      {/* 팝업 */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full mx-4">
            <h2 className="text-xl font-semibold mb-4">참석여부 전달</h2>
            <p className="text-gray-600 mb-6">
              소중한 날, 함께해주시면 감사하겠습니다.
              참석여부를 알려주시면 감사하겠습니다.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 