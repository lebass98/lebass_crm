import React from 'react';
import { useThemeSystem, COLOR_PRESETS } from '../context/ThemeContext';
import { 
  Search, 
  Sun, 
  Moon, 
  Sparkles, 
  ArrowRight,
  Layers,
  Activity
} from 'lucide-react';

export default function TrifectaHeader({ activeSection, setActiveSection }) {
  const {
    themeMode,
    toggleTheme,
    colorPreset,
    setColorPreset,
    setIsSearchOpen,
  } = useThemeSystem();

  const navItems = [
    { id: 'overview', label: '개요 (Overview)' },
    { id: 'features', label: '주요 기능 (Features)' },
    { id: 'metrics', label: '성과 지표 (Analytics)' },
    { id: 'showcase', label: '디바이스 시뮬레이터' },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 max-w-7xl mx-auto w-full transition-all">
      <div className="floating-pill-nav rounded-full px-5 py-2.5 flex items-center justify-between shadow-lg backdrop-blur-2xl">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div 
            className="w-9 h-9 rounded-full p-0.5 shadow-md flex items-center justify-center transition-transform hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${colorPreset.primary}, #3b82f6)` }}
          >
            <div className="w-full h-full bg-white dark:bg-slate-950 rounded-full flex items-center justify-center">
              <Layers className="w-4 h-4" style={{ color: colorPreset.primary }} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white font-outfit">
              TRIFECTA
            </span>
            <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: colorPreset.primary }}>
              CRM v2.5
            </span>
          </div>
        </div>

        {/* Center Pill Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 px-3 py-1 rounded-full border border-slate-200/80 dark:border-slate-800/80">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs border border-slate-200 dark:border-slate-700'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Actions: Cmd+K Search, Palette, Theme Toggle & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Cmd+K Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs transition-all"
          >
            <Search className="w-3.5 h-3.5" />
            <kbd className="hidden sm:inline-block text-[10px] font-mono px-1 rounded bg-slate-200 dark:bg-slate-800">
              ⌘K
            </kbd>
          </button>

          {/* Color Presets */}
          <div className="hidden sm:flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-full border border-slate-200 dark:border-slate-800">
            {COLOR_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => setColorPreset(preset)}
                title={preset.name}
                className={`w-4 h-4 rounded-full transition-all ${
                  colorPreset.id === preset.id ? 'scale-125 ring-2 ring-slate-400 dark:ring-white/50' : 'opacity-60 hover:opacity-100'
                }`}
                style={{ backgroundColor: preset.primary }}
              />
            ))}
          </div>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all"
            title="테마 전환"
          >
            {themeMode === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Glowing CTA Button */}
          <button 
            className="btn-glow-cta hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
            style={{ backgroundColor: colorPreset.primary }}
          >
            <span>무료 시작하기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
