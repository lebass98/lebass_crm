import React from 'react';
import StatusBadge from './StatusBadge';
import { useThemeSystem } from '../context/ThemeContext';
import { ArrowRight, Layers } from 'lucide-react';

export default function MobileSwiper({ items = [] }) {
  const { setPreviewItem, colorPreset } = useThemeSystem();

  return (
    <div className="w-full py-4 space-y-3 md:hidden">
      <div className="flex items-center justify-between px-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Layers className="w-4 h-4 text-indigo-500" style={{ color: colorPreset.primary }} />
          모바일 전용 스와이프 뷰
        </h3>
        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">가로로 슬라이드 ➔</span>
      </div>

      {/* Horizontal scroll-snap swiper container */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-4 no-scrollbar">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setPreviewItem(item)}
            className="snap-center shrink-0 w-[85vw] glass-card rounded-2xl p-5 flex flex-col justify-between border border-slate-200 dark:border-slate-800 shadow-md active:scale-95 transition-transform"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {item.category}
                </span>
                <StatusBadge progress={item.progress} />
              </div>

              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-outfit">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
                {item.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">터치하여 상세 보기</span>
              <div className="flex items-center gap-1 font-semibold text-slate-900 dark:text-white" style={{ color: colorPreset.primary }}>
                <span>미리보기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
