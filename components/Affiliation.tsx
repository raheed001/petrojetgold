'use client';

import React from 'react';
import Image from 'next/image';

const Affiliation = () => {
  return (
    <div className="p-4 md:p-8 rounded-lg  mx-auto ">
      <h1 className="text-center text-2xl font-bold mb-6">We are a Proud Group of Companies</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
        <div className="flex items-center justify-center">
          <div className="relative w-full h-32">
            <Image 
              src="/images/ahs.png"
              alt="AHS"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full h-32">
            <Image 
              src="/images/QasralAinaya.png"
              alt="Qasr Al Ainaya Logo"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full h-32">
            <Image 
              src="/images/petrojectgold.png"
              alt="PETROJET GOLD"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full h-32">
            <Image 
              src="/images/scanlab.png"
              alt="Scanlab"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full h-32">
            <Image 
              src="/images/scubematrix.png"
              alt="SCUBE MATRIX"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full h-32">
            <Image 
              src="/images/blu.png"
              alt="BLU"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full h-32">
            <Image 
              src="/images/anaya.png"
              alt="Anaya"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full h-32">
            <Image 
              src="/images/Tabuk.png"
              alt="TABUK"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliation;
