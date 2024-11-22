import data from '@/data.json';
import {BrideAndGroom} from "@/types/data";
import React from "react";
const Invitation = () => {
  const { greeting } = data;
  const { host, date } = greeting;
  const { groom, bride } = host;
  
  return (
    <div className="text-center py-16 space-y-12 max-w-2xl mx-auto px-4">
      <h1 className="text-3xl font-serif italic text-rose-800">{greeting.message}</h1>
      
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="w-full flex items-center justify-center gap-6">
          <HostInfo person={groom} />
          <div className="text-3xl font-serif text-rose-400 px-4">♥</div>
          <HostInfo person={bride} />
        </div>
      </div>

      <div className="text-gray-600 font-light text-sm">
        <span>{date.day}</span>
        <span className="mx-2">{date.month}</span>
        <span>{date.year}</span>
        <span className="ml-2">{date.time}</span>
      </div>
    </div>
  );
};

const HostInfo = ({ person }: { person: BrideAndGroom }) => {
  return (
    <div className="relative flex-1 py-6 px-8 rounded-lg bg-white/50 shadow-sm">
      <div className="text-2xl font-medium text-gray-800 mb-4">
        {person.name}
      </div>
      
      <div className="text-rose-600/80 font-medium text-sm mb-3">
        {person.relation}
      </div>

      {person.parents && (
        <div className="text-gray-600 text-sm font-medium">
          {person.parents.map((parent, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' · '}
              {parent.name}
            </React.Fragment>
          ))}
          <span className="text-gray-500 ml-1">의 {person.relation}</span>
        </div>
      )}
    </div>
  );
};
export default Invitation;