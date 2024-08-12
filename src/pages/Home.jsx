import React from 'react';
import NavBar from '../component/NavBar';

export default function Home() {
  return (
      <>
      <NavBar />
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
      <div className="flex justify-center items-center w-full flex-grow">
        <img
          src="/images/czarlogo.svg"
          alt="Czar Logo"
          className="h-40 w-auto"
        />
      </div>
    </div>
      </>
  );
}
