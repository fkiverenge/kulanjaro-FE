// src/pages/HomePage.js
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import AnimatedSection from '../components/AnimatedSection';

function HomePage() {
  return (
    <>
      <Hero />
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <HowItWorks />
      </AnimatedSection>
    </>
  );
}

export default HomePage;