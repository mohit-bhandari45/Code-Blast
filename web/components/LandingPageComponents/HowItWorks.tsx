import React from 'react';
import { Button } from '@/components/ui/button';
import { steps } from '@/utils/utils';
import Link from 'next/link';

const HowItWorksSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-12 tracking-tight">
          How It Works
        </h2>

        {/* Desktop Connector Line */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%-80px)] h-0.5 bg-white/20" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative z-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center relative"
            >
              {/* Step Icon */}
              <div className="w-20 h-20 mb-6 bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">{step.icon}</span>
              </div>

              {/* Step Number */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-black px-4 py-1 border border-white/20 rounded-full text-sm font-medium"
              >
                Step {idx + 1}
              </div>

              {/* Step Content */}
              <div className="space-y-2  mt-8">
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-white/70 max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-20 mb-4">
          <Link href={'/signup'}>
            <Button
              variant="outline"
              className="bg-white text-black hover:bg-white/90 hover:text-black 
              border-white/20 transition-colors duration-300 px-8 py-3 text-base"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
