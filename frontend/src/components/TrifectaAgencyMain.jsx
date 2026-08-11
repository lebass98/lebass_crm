import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function TrifectaAgencyMain() {
  const [currentTime, setCurrentTime] = useState('');

  // Live Local Time calculation matching Korean format in image ("8월 10, 10:09 오후")
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const month = now.getMonth() + 1;
      const date = now.getDate();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const period = hours >= 12 ? '오후' : '오전';
      hours = hours % 12 || 12;
      setCurrentTime(`${month}월 ${date}, ${hours}:${minutes} ${period}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex-1 bg-trifecta-cream min-h-screen p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
      
      {/* Top Header Row */}
      <div className="flex items-center justify-between font-mono text-xs text-slate-800 font-semibold mb-12">
        <div>(t)®</div>
        <div>
          Local time: <span className="font-bold">{currentTime || '8월 11, 11:10 오전'}</span>
        </div>
      </div>

      {/* Middle Hero Content */}
      <div className="my-auto py-8 max-w-5xl">
        
        {/* Sub-headline */}
        <p className="text-lg sm:text-2xl font-bold text-slate-900 max-w-xl leading-snug mb-8 font-sans">
          We build websites, apps &amp; campaigns that actually move the needle for growing brands.
        </p>

        {/* Ultra Giant Headline (Swiss Style) */}
        <h1 className="text-6xl sm:text-8xl lg:text-[110px] xl:text-[130px] font-giant text-slate-950 tracking-tight leading-[0.88] font-outfit mb-12 select-none">
          <div>Dream /Big.</div>
          <div>We’ll /Deliver.</div>
        </h1>

        {/* Bottom CTA Buttons & Rating Group */}
        <div className="flex flex-wrap items-center gap-6 pt-4">
          
          {/* Start a Project Red Button */}
          <button className="bg-trifecta-red hover:bg-red-600 text-white px-7 py-4 rounded-lg font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer">
            <span>Start a Project</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          {/* See our work White Button */}
          <button className="bg-white hover:bg-slate-50 text-slate-900 px-7 py-4 rounded-lg font-bold text-sm sm:text-base border border-slate-200/80 shadow-xs hover:shadow-md transition-all cursor-pointer">
            See our work
          </button>

          {/* Rating & Social Proof */}
          <div className="flex flex-col text-xs space-y-0.5 ml-2">
            <div className="flex items-center gap-1 text-trifecta-red font-mono font-extrabold">
              <span>✦✦✦✦✦</span>
              <span className="text-slate-900 ml-1">4.9 / 5</span>
            </div>
            <div className="text-[11px] font-semibold text-slate-600 max-w-xs font-sans">
              <strong className="text-slate-900">We've helped 95+ businesses</strong> hit their targets—yours could be next.
            </div>
          </div>

        </div>

      </div>

      {/* Floating Widgets Bottom Right */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-2.5 z-40">
        
        {/* Template Purchase Card */}
        <div className="bg-[#181818] text-white p-2.5 pr-4 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-800 hover:scale-105 transition-transform cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-slate-800 overflow-hidden border border-slate-700 flex items-center justify-center text-xs font-mono font-bold text-slate-300">
            (t)®
          </div>
          <div className="text-[11px]">
            <div className="font-bold font-outfit text-white">(t)rifecta® Template</div>
            <div className="text-slate-400 text-[10px]">from <strong className="text-white">$129</strong></div>
          </div>
        </div>

        {/* Made in Framer Badge */}
        <div className="bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-md text-xs font-bold font-sans flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-black rotate-45" />
          <span>Made in Framer</span>
        </div>

      </div>

    </main>
  );
}
