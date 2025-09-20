import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FaqAccordion from '@/components/FaqAccordion';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FaqAccordion />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
