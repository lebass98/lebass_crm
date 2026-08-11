import React from 'react';
import { useThemeSystem } from '../context/ThemeContext';
import { ArrowRight, Triangle, Github, Globe, Heart } from 'lucide-react';

export default function TrifectaCTABanner() {
  const { colorPreset } = useThemeSystem();

  return (
    <footer className="pt-16 pb-12 px-4 max-w-6xl mx-auto w-full">
      
      {/* Final Call to Action Banner */}
      <div className="glass-card rounded-3xl p-10 sm:p-16 border border-slate-200/80 dark:border-slate-800/80 text-center relative overflow-hidden shadow-2xl mb-16 group">
        
        {/* Glow Background */}
        <div 
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-25 group-hover:opacity-40 transition-opacity"
          style={{ backgroundColor: colorPreset.primary }}
        />

        <span 
          className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white mb-4 inline-block shadow-xs"
          style={{ backgroundColor: colorPreset.primary }}
        >
          START TODAY
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-outfit tracking-tight max-w-2xl mx-auto mb-4">
          Ready to supercharge your workflow?
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-8 font-sans">
          Join thousands of founders, creators, and developers building the next generation of web products with Trifecta.
        </p>

        <a
          href="#pricing"
          className="btn-glow-cta inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-sm font-bold shadow-xl transition-all cursor-pointer"
          style={{ backgroundColor: colorPreset.primary }}
        >
          <span>Get Started Today</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Footer Links & Credits */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-200/80 dark:border-slate-800/80 pt-8">
        
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div 
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white shadow-xs"
            style={{ backgroundColor: colorPreset.primary }}
          >
            <Triangle className="w-3.5 h-3.5 fill-current rotate-180" />
          </div>
          <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white font-outfit">
            Trifecta
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
          <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#workflow" className="hover:text-slate-900 dark:hover:text-white transition-colors">Workflow</a>
          <a href="#integrations" className="hover:text-slate-900 dark:hover:text-white transition-colors">Integrations</a>
          <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-slate-900 dark:hover:text-white transition-colors">FAQ</a>
          <a href="https://github.com/lebass98/lebass_crm" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500 font-mono flex items-center gap-1">
          <span>© 2026 Trifecta. Built with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
        </div>

      </div>

    </footer>
  );
}
