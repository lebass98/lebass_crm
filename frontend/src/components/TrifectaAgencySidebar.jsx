import React from 'react';
import { ArrowUpRight, Grid } from 'lucide-react';

export default function TrifectaAgencySidebar() {
  const navItems = [
    { label: '/Home', href: '#', active: true },
    { label: '/About', href: '#' },
    { label: '/Case Studies', href: '#', badge: '/009/' },
    { label: '/Blog', href: '#' },
    { label: '/Contact', href: '#' },
  ];

  return (
    <aside className="w-full md:w-80 lg:w-88 shrink-0 bg-white border-r border-slate-200/80 flex flex-col justify-between p-6 relative min-h-screen">
      
      {/* Top Section: Jessica Call Card & Open Slots */}
      <div className="space-y-6">
        
        {/* Book a 30-Min Call Card */}
        <a 
          href="#contact" 
          className="flex items-center justify-between p-3.5 bg-[#181818] text-white rounded-xl hover:bg-black transition-all group shadow-md"
        >
          <div className="flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
              alt="Jessica" 
              className="w-9 h-9 rounded-full object-cover border border-slate-700"
            />
            <div className="text-xs">
              <div className="font-bold font-outfit text-white">Book a 30-Min Call</div>
              <div className="text-[10px] text-slate-400 font-mono">with Jessica</div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        {/* 3 Open Slots Status Bar */}
        <div className="flex items-center gap-2.5 pt-2">
          <div className="w-6 h-4 barcode-red-graphic" />
          <span className="text-xs font-mono font-semibold text-slate-700">
            <strong className="text-slate-900">3 open slots for</strong> May 2026
          </span>
        </div>

        {/* Navigation Links List */}
        <nav className="pt-6 space-y-3 font-outfit font-extrabold text-2xl sm:text-3xl text-slate-900">
          {navItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <a
                href={item.href}
                className="hover:text-trifecta-red transition-colors flex items-center gap-1.5"
              >
                {item.label}
              </a>
              {item.badge && (
                <span className="text-xs font-mono font-bold text-trifecta-red">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Middle Vertical Text Branding */}
      <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-xs font-extrabold tracking-widest text-slate-900 uppercase font-outfit pointer-events-none">
        (t)rifecta®
      </div>

      {/* Bottom Section: Contact & Social Footer */}
      <div className="pt-12 space-y-6 border-t border-slate-100">
        
        {/* Barcode Graphic */}
        <div className="w-16 h-4 barcode-graphic opacity-70" />

        {/* Phone & Email */}
        <div className="space-y-1 font-outfit">
          <div className="text-xs text-slate-500 font-mono">(312) 555-2468</div>
          <a href="mailto:hello@trifecta.agency" className="text-lg font-extrabold text-slate-900 hover:text-trifecta-red transition-colors block">
            hello@trifecta.agency
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[10px] text-slate-400 font-sans leading-relaxed">
          © 2026 trifecta agency.<br />All rights reserved.
        </p>

        {/* Social Icons & 2026 Grid */}
        <div className="flex items-end justify-between pt-2">
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <a href="#" className="hover:text-black transition-colors font-bold font-mono">𝕏</a>
            <a href="#" className="hover:text-black transition-colors">📷</a>
            <a href="#" className="hover:text-black transition-colors">🌐</a>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-[10px] font-extrabold font-mono text-slate-900 leading-tight">
              20<br />26
            </span>
            <div className="grid grid-cols-3 gap-0.5 mt-1">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="w-1 h-1 rounded-full bg-slate-900" />
              ))}
            </div>
          </div>
        </div>

      </div>

    </aside>
  );
}
