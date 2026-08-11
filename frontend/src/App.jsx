import React from 'react';
import { ThemeProvider, useThemeSystem } from './context/ThemeContext';
import TrifectaNavbar from './components/TrifectaNavbar';
import TrifectaHeroSection from './components/TrifectaHeroSection';
import TrifectaStats from './components/TrifectaStats';
import TrifectaBentoFeatures from './components/TrifectaBentoFeatures';
import TrifectaWorkflow from './components/TrifectaWorkflow';
import TrifectaIntegrations from './components/TrifectaIntegrations';
import TrifectaPricing from './components/TrifectaPricing';
import TrifectaTestimonials from './components/TrifectaTestimonials';
import TrifectaFAQ from './components/TrifectaFAQ';
import TrifectaCTABanner from './components/TrifectaCTABanner';

function MainLanding() {
  const { colorPreset } = useThemeSystem();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col relative overflow-x-hidden font-sans transition-colors duration-300">
      
      {/* Glow Ambient background effects */}
      <div 
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-20 transition-all duration-700"
        style={{ backgroundColor: colorPreset.primary }}
      />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Navbar */}
      <TrifectaNavbar />

      {/* Hero Section */}
      <TrifectaHeroSection />

      {/* Stats Section */}
      <TrifectaStats />

      {/* Features Bento Grid */}
      <TrifectaBentoFeatures />

      {/* 3-Step Workflow */}
      <TrifectaWorkflow />

      {/* Tech Integrations Grid */}
      <TrifectaIntegrations />

      {/* Pricing Section */}
      <TrifectaPricing />

      {/* Testimonials */}
      <TrifectaTestimonials />

      {/* FAQ Accordion */}
      <TrifectaFAQ />

      {/* Final CTA Banner & Footer */}
      <TrifectaCTABanner />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainLanding />
    </ThemeProvider>
  );
}
