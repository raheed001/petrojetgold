import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ReactNode } from 'react';
import Head from 'next/head';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <title>Petrojet Gold - Petroleum, Gold Trading, Crude Oil, Jet Fuel</title>
        <meta name="description" content="Petrojet Gold is your trusted partner in petroleum, gold trading, crude oil, and jet fuel solutions. Discover reliable fuel and lubricant services tailored for businesses and individuals." />
        <meta name="keywords" content="petroleum, gold trading, crude oil, jet fuel, fuel solutions, lubricant services, Petrojet Gold" />
        <meta name="author" content="Petrojet Gold" />
        <meta property="og:title" content="Petrojet Gold - Petroleum, Gold Trading, Crude Oil, Jet Fuel" />
        <meta property="og:description" content="Petrojet Gold provides reliable solutions in petroleum, gold trading, crude oil, and jet fuel. Learn more about our services." />
        <meta property="og:image" content="/images/newlogofull.png" />
        <meta property="og:url" content="https://petrojetgold.com" />
        <meta property="og:type" content="website" />
        
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
