import React from 'react';
import { useThemeSystem } from '../context/ThemeContext';
import { 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  Globe, 
  ArrowUpRight, 
  Lock, 
  Cpu,
  Layers
} from 'lucide-react';

export default function TrifectaBentoFeatures() {
  const { colorPreset } = useThemeSystem();

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto w-full" id="features">
      
      {/* Section Tag & Title */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span 
          className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white mb-3 inline-block shadow-xs"
          style={{ backgroundColor: colorPreset.primary }}
        >
          FEATURES
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-outfit tracking-tight">
          Everything you need to scale your product
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
          Discover powerful features designed to transform your workflow and boost conversion rates.
        </p>
      </div>

      {/* Bento Grid Layout (2-Column & 1-Column mix) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 (2-Column Large): Real-time Analytics */}
        <div className="md:col-span-2 glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between group hover:border-slate-300 dark:hover:border-slate-700 transition-all relative overflow-hidden">
          <div>
            <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 w-fit mb-6">
              <BarChart3 className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-outfit group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
              Real-time Analytics & Revenue Growth
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
              Track performance with dynamic graphs, live metrics, and user behavior insights in one unified dashboard.
            </p>
          </div>

          {/* Bento Visual Element */}
          <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 flex items-center justify-between text-xs text-slate-300 font-mono">
            <div>
              <div className="text-[10px] text-slate-500 uppercase">Live Growth Stream</div>
              <div className="text-lg font-bold text-emerald-400">+42.8% Conversion Rate</div>
            </div>
            <div className="flex items-center gap-1 font-semibold text-white group-hover:translate-x-1 transition-transform" style={{ color: colorPreset.primary }}>
              <span>Learn more</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Card 2 (1-Column): Automated Workflows */}
        <div className="glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between group hover:border-slate-300 dark:hover:border-slate-700 transition-all">
          <div>
            <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 w-fit mb-6">
              <Zap className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-outfit">
              Automated Workflows
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Streamline repetitive tasks with drag-and-drop automation and intelligent triggers.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>50+ Trigger Actions</span>
            <span className="text-emerald-500 font-semibold">Instant Execution</span>
          </div>
        </div>

        {/* Card 3 (1-Column): Enterprise Security */}
        <div className="glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between group hover:border-slate-300 dark:hover:border-slate-700 transition-all">
          <div>
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 w-fit mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-outfit">
              Enterprise Security
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Bank-grade encryption, SOC2 Type II compliance, and SAML SSO out of the box.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>SOC2 & ISO 27001</span>
            <Lock className="w-4 h-4 text-indigo-500" />
          </div>
        </div>

        {/* Card 4 (2-Column Large): Global Performance */}
        <div className="md:col-span-2 glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between group hover:border-slate-300 dark:hover:border-slate-700 transition-all relative overflow-hidden">
          <div>
            <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 w-fit mb-6">
              <Globe className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-outfit group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
              Global Edge CDN & Lightning Latency
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
              Deliver sub-50ms page load speeds worldwide with edge caching, automated asset compression, and Vite bundling.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 flex items-center justify-between text-xs text-slate-300 font-mono">
            <div>
              <div className="text-[10px] text-slate-500 uppercase">Edge Edge Regions</div>
              <div className="text-sm font-bold text-indigo-400">300+ Edge Nodes Worldwide</div>
            </div>
            <div className="flex items-center gap-1 font-semibold text-white group-hover:translate-x-1 transition-transform" style={{ color: colorPreset.primary }}>
              <span>View Benchmark</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
