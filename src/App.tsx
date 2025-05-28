import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedJobs from './components/FeaturedJobs';
import EmployersSection from './components/EmployersSection';
import MobileAppSection from './components/MobileAppSection';
import LocationsSection from './components/LocationsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-dark-900 text-light-100 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedJobs />
        <EmployersSection />
        <MobileAppSection />
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;