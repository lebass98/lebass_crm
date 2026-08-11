import React from 'react';
import { useThemeSystem, COLOR_PRESETS, DEVICE_PRESETS } from '../context/ThemeContext';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  Search, 
  Sun, 
  Moon, 
  SlidersHorizontal,
  Layers,
  Sparkles,
  Maximize2
} from 'lucide-react';

export default function HeaderBar() {
  const {
    themeMode,
    toggleTheme,
    colorPreset,
    setColorPreset,
    deviceMode,
    setDeviceMode,
    previewScale,
    setPreviewScale,
    setIsSearchOpen,
  } = useThemeSystem();

  return (
    <header className="glass-panel sticky top-0 z-50 border-b border-slate-800/80 px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-xl p-0.5 shadow-lg flex items-center justify-center transition-transform hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${colorPreset.primary}, #3b82f6)` }}
          >
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Layers className="w-5 h-5" style={{ color: colorPreset.primary }} />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-extrabold tracking-tight text-white font-outfit">
                LEBASS CRM
              </h1>
              <span 
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md text-white/90 shadow-xs"
                style={{ backgroundColor: colorPreset.primary }}
              >
                v2.5 UI/UX
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-sans hidden sm:block">
              Tomcat + Maven + React + Vite + Tailwind CSS Architecture
            </p>
          </div>
        </div>

        {/* Center: Device Resolution Selector & Scale Toggle */}
        <div className="hidden md:flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800/80 shadow-inner">
          <div className="flex items-center gap-1 border-r border-slate-800 pr-2">
            {DEVICE_PRESETS.map((dev) => {
              const Icon = dev.id === 'pc' ? Monitor : dev.id === 'tablet' ? Tablet : Smartphone;
              const isActive = deviceMode === dev.id;
              return (
                <button
                  key={dev.id}
                  onClick={() => setDeviceMode(dev.id)}
                  title={`${dev.name} (${dev.width}x${dev.height})`}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: isActive ? colorPreset.primary : 'currentColor' }} />
                  <span className="hidden lg:inline">{dev.name}</span>
                </button>
              );
            })}
          </div>

          {/* Scale Selector */}
          <div className="flex items-center gap-1 pl-1">
            <Maximize2 className="w-3.5 h-3.5 text-slate-500 ml-1" />
            {[100, 75, 50].map((scale) => (
              <button
                key={scale}
                onClick={() => setPreviewScale(scale)}
                className={`px-2 py-1 rounded text-[11px] font-mono transition-all ${
                  previewScale === scale
                    ? 'bg-slate-800 text-slate-100 font-bold border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {scale}%
              </button>
            ))}
          </div>
        </div>

        {/* Right Action Controls: Search Modal & Theme Color Presets & Dark Mode */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Cmd+K Search Modal Trigger Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 text-xs transition-all shadow-xs group"
          >
            <Search className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">전역 검색...</span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Color Preset Palette Selection Dropdown */}
          <div className="flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
            <Sparkles className="w-3.5 h-3.5 text-slate-400 ml-1 hidden sm:block" />
            <div className="flex items-center gap-1">
              {COLOR_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => setColorPreset(preset)}
                  title={preset.name}
                  className={`w-5 h-5 rounded-full transition-all flex items-center justify-center ${
                    colorPreset.id === preset.id ? 'scale-125 ring-2 ring-white/50 shadow-md' : 'hover:scale-110 opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: preset.primary }}
                />
              ))}
            </div>
          </div>

          {/* Theme Mode Toggle (Dark / Light) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
            title="테마 모드 전환"
          >
            {themeMode === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button>
        </div>
      </div>
    </header>
  );
}
