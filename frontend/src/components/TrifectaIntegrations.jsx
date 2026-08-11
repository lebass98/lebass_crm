import React from 'react';
import { useThemeSystem } from '../context/ThemeContext';
import { 
  Atom, 
  Zap, 
  Palette, 
  Server, 
  Github, 
  Figma, 
  FileText, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';

export default function TrifectaIntegrations() {
  const { colorPreset } = useThemeSystem();

  const integrations = [
    { name: 'React 19', desc: 'UI Framework', icon: Atom, color: 'text-cyan-400' },
    { name: 'Vite 6', desc: 'Dev Tool & Bundler', icon: Zap, color: 'text-purple-400' },
    { name: 'Tailwind CSS v4', desc: 'Utility Styling', icon: Palette, color: 'text-sky-400' },
    { name: 'Tomcat WAS', desc: 'Java Servlet Engine', icon: Server, color: 'text-amber-400' },
    { name: 'GitHub Actions', desc: 'CI/CD & Hosting', icon: Github, color: 'text-slate-200' },
    { name: 'Figma', desc: 'Design Tokens Sync', icon: Figma, color: 'text-pink-400' },
    { name: 'Notion API', desc: 'CMS & Knowledge', icon: FileText, color: 'text-emerald-400' },
    { name: 'Slack Bot', desc: 'Realtime Alerts', icon: MessageSquare, color: 'text-rose-400' },
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto w-full" id="integrations">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span 
          className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white mb-3 inline-block shadow-xs"
          style={{ backgroundColor: colorPreset.primary }}
        >
          INTEGRATIONS
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-outfit tracking-tight">
          Seamlessly integrates with your favorite tech stack
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
          Connect your workflow tools in seconds with native pre-built plugins and REST endpoints.
        </p>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {integrations.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 flex flex-col items-center text-center hover:border-slate-300 dark:hover:border-slate-700 transition-all group cursor-pointer"
            >
              <div className={`p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-3 group-hover:scale-110 transition-transform ${item.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-outfit mb-1">
                {item.name}
              </h4>
              <p className="text-[11px] text-slate-500 font-sans">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
}
