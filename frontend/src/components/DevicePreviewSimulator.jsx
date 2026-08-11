import React, { useState, useRef, useEffect } from 'react';
import { useThemeSystem, DEVICE_PRESETS } from '../context/ThemeContext';
import { Monitor, Tablet, Smartphone, X, ExternalLink, RefreshCw, Play, Pause, ChevronLeft } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function DevicePreviewSimulator({ item, onClose }) {
  const { deviceMode, setDeviceMode, previewScale, setPreviewScale, colorPreset } = useThemeSystem();
  const [isAutoScroll, setIsAutoScroll] = useState(false);
  const scrollContainerRef = useRef(null);

  const activeDevice = DEVICE_PRESETS.find(d => d.id === deviceMode) || DEVICE_PRESETS[0];

  // Auto Scroll Interaction
  useEffect(() => {
    let interval = null;
    if (isAutoScroll && scrollContainerRef.current) {
      interval = setInterval(() => {
        if (scrollContainerRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
          if (scrollTop + clientHeight >= scrollHeight - 5) {
            scrollContainerRef.current.scrollTop = 0;
          } else {
            scrollContainerRef.current.scrollTop += 2;
          }
        }
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isAutoScroll]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-950/90 backdrop-blur-xl animate-fadeIn">
      {/* Top Simulator Toolbar */}
      <header className="glass-panel border-b border-slate-800 px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            돌아가기
          </button>
          <div className="h-4 w-[1px] bg-slate-800" />
          <h3 className="text-sm font-bold text-white font-outfit">{item.title}</h3>
          <StatusBadge progress={item.progress} />
        </div>

        {/* Resolution selector buttons */}
        <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
          {DEVICE_PRESETS.map((dev) => {
            const Icon = dev.id === 'pc' ? Monitor : dev.id === 'tablet' ? Tablet : Smartphone;
            const isActive = deviceMode === dev.id;
            return (
              <button
                key={dev.id}
                onClick={() => setDeviceMode(dev.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: isActive ? colorPreset.primary : 'currentColor' }} />
                <span>{dev.name} ({dev.width}×{dev.height})</span>
              </button>
            );
          })}
        </div>

        {/* Controls: Auto Scroll Toggle & Scale */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAutoScroll(!isAutoScroll)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
              isAutoScroll
                ? 'bg-indigo-600/20 border-indigo-500/50 text-indigo-300'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {isAutoScroll ? <Pause className="w-3.5 h-3.5 text-indigo-400" /> : <Play className="w-3.5 h-3.5" />}
            Auto Scroll {isAutoScroll ? 'ON' : 'OFF'}
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Frame Preview Canvas */}
      <main className="flex-1 overflow-auto flex items-center justify-center p-8 bg-slate-950/60 relative">
        <div 
          className="transition-all duration-300 relative shadow-2xl rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 flex flex-col"
          style={{
            width: `${activeDevice.width}px`,
            maxHeight: `${activeDevice.height}px`,
            height: '80vh',
            transform: `scale(${previewScale / 100})`,
            transformOrigin: 'top center'
          }}
        >
          {/* Mock Browser Header */}
          <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between gap-3 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex-1 max-w-md bg-slate-900 border border-slate-800 px-3 py-1 rounded-md text-[11px] text-center text-slate-400 overflow-hidden text-ellipsis whitespace-nowrap">
              https://lebass-crm.internal/{item.id}
            </div>
            <div className="text-[10px] text-slate-500 font-bold">
              {activeDevice.width} × {activeDevice.height}
            </div>
          </div>

          {/* Simulator Content Area */}
          <div 
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-950"
          >
            {/* Live Component Preview Card */}
            <div className="glass-card rounded-xl p-6 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {item.category}
                </span>
                <StatusBadge progress={item.progress} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 font-outfit">{item.title}</h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">{item.desc}</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">엔드포인트</div>
                  <div className="text-sm font-mono text-emerald-400">{item.endpoint || '/api/service'}</div>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">담당 모듈</div>
                  <div className="text-sm font-mono text-indigo-400">{item.module || 'Core Module'}</div>
                </div>
              </div>
            </div>

            {/* Mock Content Blocks for Auto Scroll Demo */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">서비스 연동 사양</h4>
              {[1, 2, 3, 4].map((idx) => (
                <div key={idx} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                  <div>
                    <div className="font-semibold text-white">모듈 스펙 #{idx}: 라이브 모니터링 노드</div>
                    <div className="text-[11px] text-slate-500">실시간 데이터 스트림 핑 24ms</div>
                  </div>
                  <span className="text-emerald-400 font-mono">ACTIVE</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
