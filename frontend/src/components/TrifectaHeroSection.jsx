import React from 'react';
import { useThemeSystem } from '../context/ThemeContext';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  TrendingUp, 
  Users, 
  Zap, 
  Activity, 
  CheckCircle2,
  ShieldCheck,
  Globe,
  Layers
} from 'lucide-react';

export default function TrifectaHeroSection() {
  const { colorPreset } = useThemeSystem();

  const trustedLogos = [
    'Stripe', 'Vercel', 'Linear', 'Raycast', 'Notion', 'Figma'
  ];

  return (
    <section className="relative pt-16 pb-24 px-4 max-w-6xl mx-auto w-full text-center flex flex-col items-center overflow-hidden">
      
      {/* Floating Announcement Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold shadow-xs mb-8 animate-fadeIn cursor-pointer hover:border-slate-300 dark:hover:border-slate-700 transition-all">
        <Sparkles className="w-4 h-4 text-amber-400" />
        <span className="text-slate-800 dark:text-slate-200 font-sans">
          ✨ Introducing Trifecta 2.0 • The Ultimate Framer Template
        </span>
        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
      </div>

      {/* Main Big Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.08] mb-6 font-outfit">
        <span className="gradient-text-trifecta">Build faster. </span>
        <span className="gradient-text-trifecta">Launch smarter. </span>
        <br />
        <span className="gradient-text-accent" style={{ '--primary-color': colorPreset.primary }}>
          Grow bigger.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-10 font-sans font-normal">
        Empower your business with a next-generation Framer template designed for SaaS, startups, and digital agencies.
      </p>

      {/* Dual CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        <a 
          href="#pricing"
          className="btn-glow-cta px-8 py-4 rounded-full text-white text-sm font-bold shadow-xl transition-all flex items-center gap-2 cursor-pointer"
          style={{ backgroundColor: colorPreset.primary }}
        >
          <span>Get Started Now</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <a 
          href="#features"
          className="px-7 py-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-all flex items-center gap-2.5 shadow-sm cursor-pointer"
        >
          <Play className="w-4 h-4 fill-current text-indigo-500" />
          <span>Explore Demo</span>
        </a>
      </div>

      {/* Social Proof Logos Track */}
      <div className="mb-16 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 font-mono">
          Trusted by 10,000+ ambitious teams worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
          {trustedLogos.map((logo) => (
            <span key={logo} className="font-extrabold text-sm sm:text-base tracking-widest font-outfit text-slate-600 dark:text-slate-400">
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* High-Fidelity 3D Glass App Dashboard Mockup Stage */}
      <div className="w-full max-w-5xl glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl relative overflow-hidden group">
        
        {/* Glow ambient background */}
        <div 
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20 transition-opacity group-hover:opacity-35"
          style={{ backgroundColor: colorPreset.primary }}
        />

        {/* Mock Stage Window Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-4 mb-6 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
            <span className="ml-2 text-slate-700 dark:text-slate-300 font-bold">app.trifecta.io / dashboard</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
              <Activity className="w-3.5 h-3.5" /> Systems Operational
            </span>
          </div>
        </div>

        {/* Mock Stage Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-left">
          
          <div className="bg-slate-50/90 dark:bg-slate-900/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Total Revenue</span>
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-outfit">$48,290.00</div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">▲ 32.4% vs last month</div>
          </div>

          <div className="bg-slate-50/90 dark:bg-slate-900/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Active Subscribers</span>
              <Users className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-outfit">12,480</div>
            <div className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold mt-1">▲ 18.2% new signups</div>
          </div>

          <div className="bg-slate-50/90 dark:bg-slate-900/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Conversion Speed</span>
              <Zap className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-outfit">18ms</div>
            <div className="text-[11px] text-slate-500 font-mono mt-1">Ultra-fast Global Edge</div>
          </div>

        </div>

        {/* Mock Live Chart Banner */}
        <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 text-left flex flex-col justify-between h-44 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
            <span>Real-time Traffic Analytics (Global CDN)</span>
            <span className="text-emerald-400 font-bold">100% Uptime</span>
          </div>

          {/* SVG Wave Line */}
          <svg className="w-full h-28 overflow-visible" viewBox="0 0 500 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="tfGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={colorPreset.primary} stopOpacity="0.4" />
                <stop offset="100%" stopColor={colorPreset.primary} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0,70 Q 100,10 200,50 T 400,20 L 500,40 L 500,100 L 0,100 Z"
              fill="url(#tfGrad)"
            />
            <path
              d="M 0,70 Q 100,10 200,50 T 400,20 L 500,40"
              fill="none"
              stroke={colorPreset.primary}
              strokeWidth="3"
            />
          </svg>
        </div>

      </div>

    </section>
  );
}
