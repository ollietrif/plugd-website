import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VenueTypes } from './components/VenueTypes';
import { ProblemSolution } from './components/ProblemSolution';
import { HowItWorks } from './components/HowItWorks';
import { ValueProp } from './components/ValueProp';
import { PartnerTiers } from './components/PartnerTiers';
import { CTAForm } from './components/CTAForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Support } from './pages/Support';

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
}

function Home() {
  return (
    <main>
      <Hero />
      <VenueTypes />
      <ProblemSolution />
      <HowItWorks />
      <ValueProp />
      <PartnerTiers />
      <FAQ />
      <CTAForm />
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-navy selection:bg-electric/30 selection:text-white">
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </div>
  );
}


