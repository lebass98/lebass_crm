import React, { useEffect, useState } from 'react';
import { useThemeSystem } from '../context/ThemeContext';
import { Search, X, Layers, CornerDownLeft, Server, Sparkles } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function SearchModal({ items = [] }) {
  const { isSearchOpen, setIsSearchOpen, colorPreset, setPreviewItem } = useThemeSystem();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      } else if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredItems = items.filter(item => 
    item.title?.toLowerCase().includes(query.toLowerCase()) ||
    item.category?.toLowerCase().includes(query.toLowerCase()) ||
    item.desc?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-2xl rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 gap-3">
          <Search className="w-5 h-5 text-slate-400" style={{ color: colorPreset.primary }} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="페이지, API 서비스, 모듈 및 기능 검색... (ESC 키로 닫기)"
            className="flex-1 bg-transparent text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-3 overflow-y-auto divide-y divide-slate-200/50 dark:divide-slate-800/50 flex-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-xs">
              검색 결과가 없습니다: "<span className="text-slate-800 dark:text-slate-300">{query}</span>"
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setPreviewItem(item);
                  setIsSearchOpen(false);
                }}
                className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 cursor-pointer transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 group-hover:border-slate-300 dark:group-hover:border-slate-700">
                    {item.category === 'API' ? <Server className="w-4 h-4 text-amber-500" /> : <Layers className="w-4 h-4 text-indigo-500" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">{item.desc}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <StatusBadge progress={item.progress} />
                  <CornerDownLeft className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: colorPreset.primary }} />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-100/80 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400 font-mono">↑↓</kbd> 이동</span>
            <span><kbd className="px-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400 font-mono">↵</kbd> 선택</span>
            <span><kbd className="px-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400 font-mono">ESC</kbd> 닫기</span>
          </div>
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-indigo-500" /> Global Search Enabled
          </span>
        </div>
      </div>
    </div>
  );
}
