import React, { useState } from 'react';
import { useThemeSystem } from '../context/ThemeContext';
import { 
  Sparkles, 
  ArrowRight, 
  Sun, 
  Moon, 
  Menu, 
  X,
  Triangle
} from 'lucide-react';

export default function TrifectaNavbar() {
  const { themeMode, toggleTheme, colorPreset } = useThemeSystem();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-5 z-50 px-4 max-w-6xl mx-auto w-full transition-all">
      <div className="floating-pill-nav rounded-full px-6 py-3 flex items-center justify-between shadow-xl backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80">
        
        {/* Trifecta Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div 
            className="w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105"
            style={{ backgroundColor: colorPreset.primary }}
          >
            <Triangle className="w-4 h-4 fill-current rotate-180" />
          </div>
          <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white font-outfit">
            Trifecta
          </span>
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 px-4 py-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/60">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all border border-slate-200 dark:border-slate-800"
            title="Toggle theme"
          >
            {themeMode === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Sign In */}
          <a
            href="#pricing"
            className="px-4 py-2 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all"
          >
            Sign In
          </a>

          {/* Get Started CTA */}
          <a
            href="#pricing"
            className="btn-glow-cta px-5 py-2 rounded-full text-xs font-bold text-white shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
            style={{ backgroundColor: colorPreset.primary }}
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300"
          >
            {themeMode === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-slate-700 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="mt-3 p-5 glass-card rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col gap-3 sm:hidden shadow-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: colorPreset.primary }}
            >
              Get Started Free →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
