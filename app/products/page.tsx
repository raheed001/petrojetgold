import React from 'react';
import ServiceCard from "@/components/ServiceCard";
import Image from 'next/image';

const products = [
  {
    title: "TRADING Goods",
    image: "/images/trading_goods.jpeg",
    description: "All kinds of goods trading.",
  },
  {
    title: "CRUDE OIL",
    image: "/images/crudeoil.jpeg",
    description: "Buy & sell Crude Oil, petroleum products, oil tankers.",
  },
  {
    title: "JET FUEL",
    image: "/images/jet_fuel.webp",
    description: "Jet fuel trading.",
  },
  {
    title: "Precious Metal Trading",
    image: "/images/precious_metal.jpeg",
    description: "All kinds of gold and precious metal trading.",
  },
  {
    title: "Aircraft Leasing & Sales",
    image: "/images/aircarft_leasing.jpg",
    description: "Leasing, sales, and parts trading for airplanes and jets.",
  },
  {
    title: "Waste Management",
    image: "/images/waste_management.png",
    description: "Waste to Energy & Sustainable Energy Concepts.",
  },
  {
    title: "Software Development",
    image: "/images/software_development.jpg",
    description: "HIS, HIMS, LIS, RIS, WEB, Mobile APP & other services.",
  },
  {
    title: "Medical Equipment Supplies",
    image: "/images/medical_equipment.jpeg",
    description: "Medical, Lab, Dental & Pharma Equipment Supplies & Services.",
  },
  {
    title: "Healthcare Furniture",
    image: "/images/healthcare_furniture.jpeg",
    description: "Supply & installation of healthcare and laboratory furniture.",
  },
];

const ProductsPage: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
      <Image
  src="/images/productpage.png"
  alt="Hero"
  className="w-full h-full object-cover"
  layout="fill"
/>

        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">
            Our Products
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto p-4 mt-12 pt-10">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ServiceCard
              key={index}
              title={product.title}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
