import FeatureSection from '@/components/LandingPageComponents/FeatureSection';
import Footer from '@/components/LandingPageComponents/Footer';
import Header from '@/components/LandingPageComponents/header';
import HeroSection from '@/components/LandingPageComponents/HeroSection';
import HowItWorksSection from '@/components/LandingPageComponents/HowItWorks';
import React from 'react';

const page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default page;
