'use client';
import React from 'react';

const Affiliation = () => {
  return (
    <div className="p-4 md:p-8  rounded-lg shadow-md mx-auto max-w-screen-lg">
      <h1 className="text-center text-2xl font-bold mb-6">We Are a Proud Company of</h1>
      <div className="flex justify-center mb-6">
        <img src="/images/ahs.png" alt="Qasr Al Ainaya Logo" className="w-1/2 md:w-1/4 rounded-lg shadow-lg" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        <div className="flex items-center justify-center">
          <img src="/images/QasralAinaya.png" alt="Qasr Al Ainaya Logo" className="w-full h-full object-contain rounded-lg shadow-lg" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/images/petrojectgold.png" alt="PETROJET GOLD" className="w-full h-full object-contain rounded-lg shadow-lg" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/images/scanlab.png" alt="Scanlab" className="w-full h-full object-contain rounded-lg shadow-lg" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/images/scubematrix.png" alt="SCUBE MATRIX" className="w-full h-full object-contain rounded-lg shadow-lg" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/images/blu.png" alt="BLU" className="w-full h-full object-contain rounded-lg shadow-lg" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/images/anaya.png" alt="Anaya" className="w-full h-full object-contain rounded-lg shadow-lg" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/images/tabuk.png" alt="TABUK" className="w-full h-full object-contain rounded-lg shadow-lg" />
        </div>
        {/* Add more logos as needed */}
      </div>
    </div>
  );
};

export default Affiliation;
