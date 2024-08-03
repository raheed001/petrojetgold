import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
