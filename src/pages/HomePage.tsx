import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Scientific from '../components/Scientific';
import About from '../components/About';
import Certifications from '../components/Certifications';
import WestMacedonia from '../components/WestMacedonia';
import Transportation from '../components/Transportation';
import EUStrategy from '../components/EUStrategy';
import HealthBenefits from '../components/HealthBenefits';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <HealthBenefits />
      <WestMacedonia />
      <Transportation />
      <Products />
      <Scientific />
      <EUStrategy />
      <About />
      <Certifications />
    </main>
  );
};

export default HomePage;