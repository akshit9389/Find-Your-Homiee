import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import PropertiesSection from './components/PropoertiesSection';
import RoommateFinderSection from './components/RoommateFinderSection';
import Features from './components/Features';
import TestimonialsSection from './components/TestimonialsCard';
import Footer from './components/Footer';

function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <SearchSection />
      <PropertiesSection />
      <RoommateFinderSection />
      <Features />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}

export default Landing