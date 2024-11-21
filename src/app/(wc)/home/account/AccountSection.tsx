'use client';

import { useState } from 'react';

interface AccountInfo {
  name: string;
  relation: string;
  bank: string;
  account: string;
  kakaopayAccount?: string;
  tossAccount?: string;
}

interface AccountSectionProps {
  accountInfo: AccountInfo;
  sectionId: string;
}

export function AccountSection({ accountInfo, sectionId }: AccountSectionProps) {
  const [showToast, setShowToast] = useState(false);
  const copyButtonClass = "bg-rose-500 text-white px-5 py-2 rounded-full hover:bg-rose-600 transition-colors duration-300 flex items-center space-x-1 cursor-copy";
  const paymentButtonClass = "flex-1 px-4 py-2.5 rounded-full transition-colors duration-300 font-medium cursor-copy";

  const handleCopy = async (account: string) => {
    try {
      await navigator.clipboard.writeText(account);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-pink-100 hover:shadow-lg transition-shadow duration-300 relative">
      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-800 text-lg">
              {accountInfo.name}
            </span>
            <span className="text-rose-500 text-sm bg-rose-50 px-3 py-1 rounded-full">
              {accountInfo.relation}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between bg-rose-50 rounded-xl p-4">
          <div className="flex flex-col">
            <span className="text-gray-600 text-sm mb-1">{accountInfo.bank}</span>
            <span className="font-mono text-gray-800">{accountInfo.account}</span>
          </div>
          <button
            type="button"
            onClick={() => handleCopy(accountInfo.account)}
            className={copyButtonClass}
          >
            <span>복사하기</span>
            <span className="text-lg">✨</span>
          </button>
        </div>

        {(accountInfo.kakaopayAccount || accountInfo.tossAccount) && (
          <div className="flex space-x-3 mt-2">
            {accountInfo.kakaopayAccount && (
              <button
                type="button"
                onClick={() => handleCopy(accountInfo.kakaopayAccount!)}
                className={`${paymentButtonClass} bg-yellow-400 text-yellow-900 hover:bg-yellow-500`}
              >
                카카오페이 💛
              </button>
            )}
            {accountInfo.tossAccount && (
              <button
                type="button"
                onClick={() => handleCopy(accountInfo.tossAccount!)}
                className={`${paymentButtonClass} bg-blue-400 text-white hover:bg-blue-500`}
              >
                토스 💙
              </button>
            )}
          </div>
        )}
      </div>

      {/* Toast Message */}
      {showToast && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      bg-pink-50 text-rose-600 px-4 py-2 rounded-lg shadow-lg 
                      border border-pink-200 text-sm z-50 animate-fade-in">
          💝 소중한 마음과 함께 계좌번호가 복사되었어요!
        </div>
      )}
    </div>
  );
}