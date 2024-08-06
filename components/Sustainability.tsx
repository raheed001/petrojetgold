'use client';
import React from 'react';
import Image from 'next/image';

const Sustainability = () => {
  const images = [
    { src: '/images/env1.jpg', alt: 'Environment Waste Management', title: 'Waste Management', subtitle: 'Efficient and eco-friendly' },
    { src: '/images/env2.jpg', alt: 'Sustainable Practices', title: 'Sustainable Practices', subtitle: 'Adopting green methods' },
    { src: '/images/env4.jpg', alt: 'Eco-friendly Initiatives', title: 'Eco-friendly Initiatives', subtitle: 'For a better future' },
    { src: '/images/env3.jpg', alt: 'Green Energy Solutions', title: 'Green Energy Solutions', subtitle: 'Renewable and clean' }
  ];

  return (
    <div className="p-4 md:p-8 mx-auto">
      <h1 className="text-left text-2xl font-bold mb-6 pl-8">Our Sustainability Efforts</h1>
      <div className="flex overflow-x-auto space-x-4 pb-4 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:overflow-visible">
        {images.map((image, index) => (
          <div key={index} className="relative w-72 flex-shrink-0 sm:w-full sm:flex-shrink sm:flex-grow h-full flex items-center justify-center lg:w-auto lg:flex-shrink-0 lg:flex-grow-0">
           <Image
  src={image.src}
  alt={image.alt}
  className="rounded-lg shadow-lg object-cover"
  style={{ width: '313.6px', height: '470.4px' }}
  width={313.6}
  height={470.4}
/>

            <div className="absolute inset-0 bg-opacity-70 flex flex-col items-center p-4">
              <h2 className="text-white text-4xl font-bold font-sans text-center">{image.title}</h2>
              <p className="text-white text-2xl font-sans text-center mt-2">{image.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sustainability;
