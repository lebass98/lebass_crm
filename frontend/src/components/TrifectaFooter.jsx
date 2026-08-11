import React from 'react';
import { useThemeSystem } from '../context/ThemeContext';
import { Layers, Github, Globe, Heart } from 'lucide-react';

export default function TrifectaFooter() {
  const { colorPreset } = useThemeSystem();

  return (
    <footer className="glass-panel border-t border-slate-200/80 dark:border-slate-800/80 py-12 px-4 mt-20 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Info */}
        <div className="flex items-center gap-3">
          <div 
            className="w-8 h-8 rounded-full p-0.5 shadow-xs flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${colorPreset.primary}, #3b82f6)` }}
          >
            <div className="w-full h-full bg-white dark:bg-slate-950 rounded-full flex items-center justify-center">
              <Layers className="w-4 h-4" style={{ color: colorPreset.primary }} />
            </div>
          </div>
          <div>
            <span className="font-extrabold text-sm text-slate-900 dark:text-white font-outfit">
              LEBASS CRM (TRIFECTA ARCHITECTURE)
            </span>
            <p className="text-[11px] text-slate-500 font-sans">
              Tomcat + Maven + React + Vite + Tailwind CSS Integration
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
          <a 
            href="https://github.com/lebass98/lebass_crm" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Github className="w-4 h-4" /> GitHub Repository
          </a>
          <a 
            href="https://lebass98.github.io/lebass_crm/" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Globe className="w-4 h-4" /> GitHub Pages Live
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500 font-mono flex items-center gap-1">
          <span>© 2026 LEBASS CRM. Built with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
        </div>

      </div>
    </footer>
  );
}
