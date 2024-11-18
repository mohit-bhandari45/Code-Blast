import FeatureSection from '@/components/ui/LandingPageComponents/FeatureSection';
import Footer from '@/components/ui/LandingPageComponents/Footer';
import Header from '@/components/ui/LandingPageComponents/header';
import HeroSection from '@/components/ui/LandingPageComponents/HeroSection';
import HowItWorksSection from '@/components/ui/LandingPageComponents/HowItWorks';
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
