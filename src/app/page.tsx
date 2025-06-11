import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/features/hero/HeroSection';
import ServicesSection from '@/components/features/services/ServicesSection';
import AboutSection from '@/components/features/about/AboutSection';
import PortfolioSection from '@/components/features/portfolio/PortfolioSection';
import ContactSection from '@/components/features/contact/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
