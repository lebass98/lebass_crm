import React from 'react';
import { useThemeSystem } from '../context/ThemeContext';
import StatusBadge from './StatusBadge';
import { ArrowRight } from 'lucide-react';

export default function GlassCardGrid({ items = [] }) {
  const { gridColumns, setPreviewItem, colorPreset } = useThemeSystem();

  const gridColClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
  };

  return (
    <div className={`grid gap-5 ${gridColClasses[gridColumns] || gridColClasses[3]}`}>
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => setPreviewItem(item)}
          className="glass-card rounded-2xl p-5 flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-1 border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 relative overflow-hidden"
        >
          {/* Subtle Color Ambient Glow */}
          <div 
            className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-15 transition-opacity pointer-events-none"
            style={{ backgroundColor: colorPreset.primary }}
          />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                {item.category}
              </span>
              <StatusBadge progress={item.progress} />
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors font-outfit">
              {item.title}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-6">
              {item.desc}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="font-mono text-[11px]">{item.endpoint || 'Module Service'}</span>
            <div 
              className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform"
              style={{ color: colorPreset.primary }}
            >
              <span>시뮬레이션</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
