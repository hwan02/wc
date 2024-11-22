import data from '@/data.json';
import {BrideAndGroom} from "@/types/data";
import React from "react";
const Invitation = () => {
  const { greeting, venue } = data;
  const { host, date } = greeting;
  const { groom, bride } = host;
  const { address1 } = venue;
  
  return (
    <div className="text-center py-16 space-y-12 max-w-2xl mx-auto px-4">
      <div className="text-gray-700 py-6 border-t-2 border-b-2 border-gray-200 space-y-3">
        <div className="font-medium">
          {date.year}년 {date.month}월 {date.day}일 {date.time}
        </div>
        <div className="font-medium">
          {address1}
        </div>
      </div>

      <h1 className="whitespace-pre-line text-lg md:text-xl font-serif-kr leading-relaxed md:leading-loose text-gray-800">
        {greeting.message}
      </h1>
      
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-full flex flex-col items-center gap-3">
          <HostInfo 
            person={groom} 
            className="w-full max-w-md"
          />
          <HostInfo 
            person={bride} 
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

const HostInfo = ({ person, className }: { person: BrideAndGroom; className?: string }) => {
  return (
    <div className={`${className || ''} text-lg font-serif-kr text-gray-700`}>
      {person.parents && (
        <span className="text-gray-500 ml-1">
          {person.parents.map((parent, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' · '}
              {parent.name}
            </React.Fragment>
          ))}
          의 {person.relation}
        </span>
      )}
      <span className="font-medium">  {person.name}</span>
    </div>
  );
};
export default Invitation;