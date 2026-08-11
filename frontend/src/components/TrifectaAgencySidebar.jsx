import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function TrifectaAgencySidebar() {
  const navItems = [
    { label: '/Home', href: '#', active: true },
    { label: '/About', href: '#' },
    { label: '/Case Studies', href: '#', badge: '/009/' },
    { label: '/Blog', href: '#' },
    { label: '/Contact', href: '#' },
  ];

  return (
    <aside className="w-full md:w-96 lg:w-[420px] shrink-0 bg-white border-r border-slate-200 hidden md:flex flex-col sticky top-0 h-screen z-30 font-sans shadow-xs">
      
      {/* ---------------------------------------------------- */}
      {/* 1. TOP HEADER ROW (Square Profile + Dark Call Bar)   */}
      {/* ---------------------------------------------------- */}
      <div className="flex items-center h-14 shrink-0 bg-[#181818]">
        
        {/* Left Column: Square Profile Picture (1:1 with Dark Bar) */}
        <div className="w-16 h-14 bg-slate-800 overflow-hidden shrink-0 border-r border-slate-700">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
            alt="Jessica" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Dark Call Bar (Book a 30-Min Call / with Jessica ↗) */}
        <a 
          href="#contact" 
          className="flex-1 h-14 bg-[#181818] text-white px-5 flex items-center justify-between hover:bg-black transition-all group font-outfit text-xs sm:text-sm"
        >
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-white">Book a 30-Min Call</span>
            <span className="text-trifecta-red font-bold text-sm">/</span>
            <span className="text-slate-400 font-mono text-[11px] sm:text-xs">with Jessica</span>
          </div>
          <ArrowUpRight className="w-5 h-5 text-white stroke-[1.75] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. MAIN BODY WITH LEFT STRIP & RIGHT CONTENT         */}
      {/* ---------------------------------------------------- */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Far-Left Column: Vertical (t)rifecta® & ::: icon */}
        <div className="w-16 border-r border-slate-100 flex flex-col justify-between items-center py-6 shrink-0 bg-slate-50/30">
          {/* Vertical Branding Text (t)rifecta® */}
          <div className="rotate-[-90deg] font-outfit font-extrabold text-slate-950 tracking-wider text-sm whitespace-nowrap select-none my-auto">
            (t)rifecta®
          </div>

          {/* Bottom: ::: 6-dot Grid Icon */}
          <div className="grid grid-cols-2 gap-1 p-1 mt-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
          </div>
        </div>

        {/* Right Content Area: Open Slots, Nav, Contact Footer */}
        <div className="flex-1 flex flex-col justify-between p-6 overflow-y-auto no-scrollbar">
          
          <div className="space-y-6">
            
            {/* 3 Open Slots Status Bar (Red & Light Gray 5-bars) */}
            <div className="pb-4 border-b border-slate-200/80 flex items-center gap-3">
              <div className="flex items-center gap-0.5 shrink-0">
                <span className="w-1 h-4 bg-trifecta-red rounded-xs" />
                <span className="w-1 h-4 bg-trifecta-red rounded-xs" />
                <span className="w-1 h-4 bg-trifecta-red rounded-xs" />
                <span className="w-1 h-4 bg-slate-200 rounded-xs" />
                <span className="w-1 h-4 bg-slate-200 rounded-xs" />
              </div>

              <span className="text-xs font-mono text-slate-600">
                <strong className="text-slate-950 font-bold">3 open slots for</strong> May 2026
              </span>
            </div>

            {/* Main Navigation Links List */}
            <nav className="pt-2 space-y-4 font-outfit font-extrabold text-2xl sm:text-3xl text-slate-950">
              {navItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <a
                    href={item.href}
                    className="hover:text-trifecta-red transition-colors block"
                  >
                    {item.label}
                  </a>
                  {item.badge && (
                    <span className="text-xs font-mono font-bold text-trifecta-red -mt-3">
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </nav>

          </div>

          {/* Bottom Contact & Footer Info Section */}
          <div className="pt-10 space-y-5 border-t border-slate-100 mt-auto">
            
            {/* Barcode Graphic */}
            <div className="w-20 h-4 barcode-graphic opacity-80" />

            {/* Phone & Email */}
            <div className="space-y-1">
              <div className="text-xs text-slate-500 font-mono">(312) 555-2468</div>
              <a 
                href="mailto:hello@trifecta.agency" 
                className="text-2xl font-extrabold text-slate-950 hover:text-trifecta-red transition-colors block font-outfit tracking-tight"
              >
                hello@trifecta.agency
              </a>
            </div>

            {/* Copyright */}
            <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
              © 2026 trifecta agency.<br />All rights reserved.
            </p>

            {/* Social Icons & 20©26 Typography */}
            <div className="flex items-end justify-between pt-2">
              <div className="flex items-center gap-3 text-base text-slate-800">
                <a href="#" className="hover:text-trifecta-red transition-colors font-bold font-mono">𝕏</a>
                <a href="#" className="hover:text-trifecta-red transition-colors">📷</a>
                <a href="#" className="hover:text-trifecta-red transition-colors">🌐</a>
              </div>

              {/* 20©26 Typography */}
              <div className="text-right font-outfit font-extrabold text-xs text-slate-900 leading-tight">
                <div>20©</div>
                <div>26</div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </aside>
  );
}
