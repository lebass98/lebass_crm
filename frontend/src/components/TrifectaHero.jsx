import React, { useState, useEffect } from 'react';
import { useThemeSystem } from '../context/ThemeContext';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Server, 
  Activity, 
  TrendingUp, 
  Users, 
  Zap, 
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function TrifectaHero({ onOpenDemo }) {
  const { colorPreset } = useThemeSystem();
  const [apiStatus, setApiStatus] = useState({ loading: false, connected: false, message: 'Tomcat Servlet 대기 중' });

  const fetchStatus = async () => {
    setApiStatus(prev => ({ ...prev, loading: true }));
    try {
      const res = await fetch('/api/status');
      if (res.ok) {
        const data = await res.json();
        setApiStatus({ loading: false, connected: true, message: data.message });
      } else {
        throw new Error();
      }
    } catch {
      setApiStatus({ loading: false, connected: false, message: 'Tomcat API 연결 가능 (Jetty / Tomcat 8080)' });
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <section className="relative pt-12 pb-20 px-4 max-w-7xl mx-auto w-full text-center flex flex-col items-center">
      
      {/* Top Floating Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold shadow-xs mb-8 animate-fadeIn">
        <Sparkles className="w-3.5 h-3.5" style={{ color: colorPreset.primary }} />
        <span className="text-slate-700 dark:text-slate-300">✨ AI-Powered Next-Gen CRM Platform</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
      </div>

      {/* Main Gradient Typography Title */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-6 font-outfit">
        <span className="gradient-text-trifecta">Scale Your Business With </span>
        <span className="gradient-text-accent" style={{ '--primary-color': colorPreset.primary }}>
          Intelligent CRM
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-10 font-sans">
        Tomcat WAS와 Maven 파이프라인 위에 구축된 **React 19 & Tailwind CSS v4** 기반의 통합 어드민 플랫폼. 
        고객 워크플로우를 자동화하고 매출을 극대화하세요.
      </p>

      {/* Dual CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        <button 
          onClick={onOpenDemo}
          className="btn-glow-cta px-8 py-3.5 rounded-full text-white text-sm font-bold shadow-xl transition-all flex items-center gap-2 cursor-pointer"
          style={{ backgroundColor: colorPreset.primary }}
        >
          <span>무료로 시작하기</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button 
          onClick={onOpenDemo}
          className="px-6 py-3.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold hover:border-slate-300 dark:hover:border-slate-700 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
        >
          <Play className="w-4 h-4 fill-current text-indigo-500" />
          <span>라이브 시뮬레이터 보기</span>
        </button>
      </div>

      {/* Interactive Live Dashboard Stage Mockup */}
      <div className="w-full max-w-5xl glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl relative overflow-hidden group">
        
        {/* Glow ambient background */}
        <div 
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[100px] pointer-events-none opacity-20 transition-opacity group-hover:opacity-30"
          style={{ backgroundColor: colorPreset.primary }}
        />

        {/* Mock Stage Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-4 mb-6 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
            <span className="ml-2 text-slate-700 dark:text-slate-300 font-bold">LEBASS CRM Real-Time Dashboard</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <Activity className="w-3.5 h-3.5" /> Live Engine Active
            </span>
            <button 
              onClick={fetchStatus}
              className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800"
              title="상태 새로고침"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${apiStatus.loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mock Stage Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          
          <div className="bg-slate-50/80 dark:bg-slate-900/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-left">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>월 매출 (Monthly Revenue)</span>
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-outfit">$128,450</div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-1">▲ 24.8% vs last month</div>
          </div>

          <div className="bg-slate-50/80 dark:bg-slate-900/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-left">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>활성 고객 (Active Users)</span>
              <Users className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-outfit">14,290</div>
            <div className="text-[11px] text-indigo-600 font-semibold mt-1">▲ 12.3% active streams</div>
          </div>

          <div className="bg-slate-50/80 dark:bg-slate-900/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-left">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Tomcat Servlet Status</span>
              <Server className="w-4 h-4" style={{ color: colorPreset.primary }} />
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white font-mono mt-1">
              {apiStatus.connected ? '200 OK (CONNECTED)' : 'STANDBY'}
            </div>
            <div className="text-[11px] text-slate-500 truncate mt-1">
              {apiStatus.message}
            </div>
          </div>

        </div>

        {/* Mock Chart Area */}
        <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 text-left flex flex-col justify-between h-40 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>실시간 서버 응답 속도 및 데이터 트래픽 (24시간)</span>
            <span className="font-mono text-emerald-400">Latency: 18ms</span>
          </div>

          {/* SVG Wave Chart */}
          <svg className="w-full h-24 overflow-visible" viewBox="0 0 500 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={colorPreset.primary} stopOpacity="0.4" />
                <stop offset="100%" stopColor={colorPreset.primary} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0,80 Q 75,20 150,60 T 300,30 T 450,50 L 500,20 L 500,100 L 0,100 Z"
              fill="url(#chartGrad)"
            />
            <path
              d="M 0,80 Q 75,20 150,60 T 300,30 T 450,50 L 500,20"
              fill="none"
              stroke={colorPreset.primary}
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
