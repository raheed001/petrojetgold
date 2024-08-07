'use client';
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const HeaderTop = () => {
  return (
    <div className="bg-black text-white text-sm py-2 fixed top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 md:px-8">
        <div>
          <a href="mailto:info@petrojetgold.com" className="hover:underline"> Enquires:info@petrojetgold.com</a>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-1" />
          <a 
            href="https://maps.app.goo.gl/feRpVb57KLe1F6Fr8"
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Find us on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
