import React from 'react';
import StatusCard from '../component/StatusCard';
import NavBar from '../component/NavBar';

export default function DisplayStatus() {
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        <StatusCard />
      </div>
    </div>
  );
}
