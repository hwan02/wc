'use client';

import { useState } from 'react';
import { AccountSection } from './AccountSection';
import data from '@/data.json';

interface AccountInfo {
  name: string;
  relation: string;
  bank: string;
  account: string;
  kakaopayAccount?: string;
  tossAccount?: string;
}

interface HostAccount {
  host: string;
  accountInfo: AccountInfo[];
}

export default function Account() {
  const [accounts] = useState<HostAccount[]>(data.accounts || []);

  return (
    <div className="max-w-3xl mx-auto p-8">
      {accounts.map((hostAccount, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl text-center font-serif text-rose-700 mb-6">
            <span className="relative">
              {hostAccount.host}
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-rose-200" />
            </span>
          </h2>
          <div className="grid gap-4">
            {hostAccount.accountInfo.map((account, accountIndex) => (
              <AccountSection
                key={`${index}-${accountIndex}`}
                sectionId={`${index}-${accountIndex}`}
                accountInfo={account}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}