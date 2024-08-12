'use client';
import Hero from '../components/Hero';
import './globals.css';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Affiliation from '@/components/Affiliation';
import Sustainability from '@/components/Sustainability';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main>
      {/* <LanguageSwitcher /> */}
      <Hero />
      <div className="container mx-auto p-4">
        <div className="">
          <Sustainability />
          <Affiliation />
          {/* <ServiceCard title={t('exploration')} image="/images/service1.jpg" />
          <ServiceCard title={t('drilling')} image="/images/service2.jpg" /> */}
        </div>
        <Testimonial />
      </div>
     
    </main>
  );
}
