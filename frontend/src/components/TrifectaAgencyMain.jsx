import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, ArrowRight, Check, Sun, Moon } from 'lucide-react';

export default function TrifectaAgencyMain() {
  const [currentTime, setCurrentTime] = useState('');

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

  const clientLogos = [
    { name: 'Luminary', symbol: '◯' },
    { name: 'Norse Star', symbol: '❇' },
    { name: 'Convergence', symbol: '✳' },
    { name: 'Eightball', symbol: '◓' },
  ];

  const caseStudies = [
    {
      id: '/001/',
      year: '/2026',
      title: 'Launched eCommerce store in 3 weeks – Integrated Stripe and inventory sync',
      client: 'Euphoria',
      badge: 'Featured',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1600&q=80',
    },
    {
      id: '/002/',
      year: '/2026',
      title: 'Next-Gen AI Workflow Engine & Real-Time Dashboard for FinTech Enterprise',
      client: 'Apex Capital',
      badge: 'Case Study',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    },
    {
      id: '/003/',
      year: '/2026',
      title: 'Global Brand Identity, WebGL 3D Interactive Web Experience & Mobile App',
      client: 'Vanguard Audio',
      badge: 'Design & Code',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
    },
  ];

  const services = [
    { num: '01', title: 'Websites & Web Apps', desc: 'Custom React, Next.js & Framer applications built for extreme speed and high conversion.' },
    { num: '02', title: 'Brand Identity & Design', desc: 'Iconic visual design, design systems, and typography that make your brand unforgettable.' },
    { num: '03', title: 'Campaigns & Growth', desc: 'Data-driven marketing, SEO strategy, and high-impact digital launch campaigns.' },
  ];

  return (
    <main className="flex-1 bg-trifecta-cream min-h-screen p-6 sm:p-10 lg:p-14 space-y-24 relative overflow-x-hidden">
      
      {/* ---------------------------------------------------- */}
      {/* SECTION 1: HERO SECTION                              */}
      {/* ---------------------------------------------------- */}
      <section className="flex flex-col justify-between min-h-[85vh] relative">
        
        {/* Top Header Row */}
        <div className="flex items-center justify-between font-mono text-xs text-slate-800 font-semibold mb-12">
          <div>(t)®</div>
        </div>

        {/* Hero Headline */}
        <div className="my-auto py-6 max-w-5xl">
          <p className="text-lg sm:text-2xl font-bold text-slate-900 max-w-xl leading-snug mb-8 font-sans">
            We build websites, apps &amp; campaigns that actually move the needle for growing brands.
          </p>

          <h1 className="text-6xl sm:text-8xl lg:text-[110px] xl:text-[130px] font-giant text-slate-950 tracking-tight leading-[0.88] font-outfit mb-12 select-none">
            <div>Dream /Big.</div>
            <div>We’ll /Deliver.</div>
          </h1>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <button className="bg-trifecta-red hover:bg-red-600 text-white px-7 py-4 rounded-lg font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <button className="bg-white hover:bg-slate-50 text-slate-900 px-7 py-4 rounded-lg font-bold text-sm sm:text-base border border-slate-200/80 shadow-xs hover:shadow-md transition-all cursor-pointer">
              See our work
            </button>

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

      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 2: CLIENT LOGOS CAROUSEL TRACK               */}
      {/* ---------------------------------------------------- */}
      <section className="py-6 border-t border-b border-slate-300/60">
        <div className="flex items-center justify-between gap-8 opacity-70 font-outfit font-extrabold text-lg sm:text-xl text-slate-800 uppercase tracking-widest overflow-x-auto no-scrollbar py-2">
          {clientLogos.map((client, idx) => (
            <div key={idx} className="flex items-center gap-3 shrink-0">
              <span className="text-2xl text-slate-600">{client.symbol}</span>
              <span>{client.name}</span>
            </div>
          ))}
          {clientLogos.map((client, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-3 shrink-0 hidden sm:flex">
              <span className="text-2xl text-slate-600">{client.symbol}</span>
              <span>{client.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 3: FEATURED CASE STUDIES / PORTFOLIO         */}
      {/* ---------------------------------------------------- */}
      <section className="space-y-12" id="work">
        
        <div className="flex items-center justify-between font-outfit">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Selected Work
          </h2>
          <span className="text-xs font-mono font-bold text-slate-500">
            Showing 3 of 9 projects
          </span>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-16">
          {caseStudies.map((cs) => (
            <div 
              key={cs.id}
              className="group relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 text-white min-h-[480px] sm:min-h-[580px] flex flex-col justify-between p-8 sm:p-12 transition-transform duration-500 hover:scale-[1.01]"
            >
              {/* Background Image Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                style={{ backgroundImage: `url(${cs.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20 pointer-events-none" />

              {/* Top Card Info Row */}
              <div className="relative z-10 flex items-start justify-between gap-4 font-outfit">
                <div className="text-xs font-mono font-bold text-slate-300">
                  {cs.year}
                </div>

                <h3 className="text-lg sm:text-2xl font-bold max-w-xl text-white leading-snug drop-shadow-md">
                  {cs.title}
                </h3>

                <div className="text-base sm:text-xl font-mono font-extrabold text-white">
                  {cs.id}
                </div>
              </div>

              {/* Bottom Card Footer Row */}
              <div className="relative z-10 flex items-center justify-between pt-12">
                <span className="bg-trifecta-red text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md">
                  {cs.badge}
                </span>

                <div className="flex items-center gap-2 text-xl font-extrabold font-outfit text-white drop-shadow-md">
                  <span className="text-amber-400">✵</span>
                  <span>{cs.client}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 4: SERVICES & CAPABILITIES                   */}
      {/* ---------------------------------------------------- */}
      <section className="py-12 border-t border-slate-300/80 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-trifecta-red uppercase tracking-wider block mb-2">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-outfit tracking-tight">
              What we do best.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-sans leading-relaxed">
            Full-service digital agency capabilities designed to help modern companies scale, convert, and lead their industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.num} className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-slate-200/80 flex flex-col justify-between space-y-6 hover:shadow-xl transition-all">
              <span className="text-3xl font-extrabold font-mono text-slate-300">
                {s.num}
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-outfit">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 5: FINAL INQUIRY CTA                         */}
      {/* ---------------------------------------------------- */}
      <section className="bg-[#181818] text-white rounded-3xl p-10 sm:p-16 border border-slate-800 text-center space-y-6 relative overflow-hidden shadow-2xl">
        <span className="text-xs font-mono text-trifecta-red font-bold uppercase tracking-wider">
          Let's Work Together
        </span>
        <h2 className="text-3xl sm:text-6xl font-giant tracking-tight font-outfit">
          Have a project in mind?
        </h2>
        <p className="text-xs sm:text-base text-slate-400 max-w-md mx-auto font-sans">
          We're currently taking on new projects for Q3/Q4. Send us a message and let's talk.
        </p>

        <a 
          href="mailto:hello@trifecta.agency" 
          className="inline-flex items-center gap-2 bg-trifecta-red hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-sm sm:text-base shadow-xl transition-all"
        >
          <span>hello@trifecta.agency</span>
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </section>

      {/* ---------------------------------------------------- */}
      {/* FLOATING BOTTOM RIGHT WIDGETS                        */}
      {/* ---------------------------------------------------- */}
      

    </main>
  );
}
