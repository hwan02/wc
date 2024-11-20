import data from '@/data.json';
import {BrideAndGroom} from "@/types/data";
import React from "react";
const Invitation = () => {
  const { greeting } = data;
  const { groom, bride } = data.greeting.host;
  return (
    <div className="text-center py-16 space-y-8">
      <h1 className="text-3xl font-serif italic text-rose-800">{greeting.message}</h1>
      <div className="space-y-6">
        <HostInfo person={groom} />
        <div className="text-2xl font-serif text-rose-600">&</div>
        <HostInfo person={bride} />
      </div>
    </div>
  );
};

const HostInfo = ({ person }: { person: BrideAndGroom }) => {
  return (
    <div className="space-y-3">
      {person.parents && (
        <div className="text-gray-700 font-medium">
          {person.parents.map((parent, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' · '}
              {parent.name}
            </React.Fragment>
          ))}
        </div>
      )}
      <div className="text-gray-600 font-light">
        <span>의</span>
        <span className="mx-2">{person.relation}</span>
      </div>
      <div className="text-2xl font-medium text-gray-800">{person.name}</div>
    </div>
  );
};
export default Invitation;