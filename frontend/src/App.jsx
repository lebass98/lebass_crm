import React from 'react';
import TrifectaAgencySidebar from './components/TrifectaAgencySidebar';
import TrifectaAgencyMain from './components/TrifectaAgencyMain';

export default function App() {
  return (
    <div className="min-h-screen bg-trifecta-cream flex flex-col md:flex-row antialiased selection:bg-trifecta-red selection:text-white">
      {/* Left Sidebar Navigation */}
      <TrifectaAgencySidebar />

      {/* Right Giant Typography Main Hero */}
      <TrifectaAgencyMain />
    </div>
  );
}
