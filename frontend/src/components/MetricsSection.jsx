import React from 'react';
import { useThemeSystem } from '../context/ThemeContext';
import { DollarSign, ShieldCheck, Users, Zap } from 'lucide-react';

export default function MetricsSection() {
  const { colorPreset } = useThemeSystem();

  const metrics = [
    {
      label: '누적 수익 실적 (Revenue Stream)',
      value: '$4.8M+',
      change: '▲ 38% YOY',
      icon: DollarSign,
      color: 'text-emerald-500',
    },
    {
      label: '시스템 가동률 (WAS Uptime)',
      value: '99.99%',
      change: 'SLA Guaranteed',
      icon: ShieldCheck,
      color: 'text-indigo-500',
    },
    {
      label: '월간 활성 유저 (Active Users)',
      value: '12,400+',
      change: 'Global Enterprise',
      icon: Users,
      color: 'text-purple-500',
    },
    {
      label: '평균 응답 속도 (Latency)',
      value: '18ms',
      change: 'Vite & Servlet Optimized',
      icon: Zap,
      color: 'text-amber-500',
    },
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto w-full">
      <div className="glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className={`flex flex-col items-center text-center ${idx !== 0 ? 'pt-4 md:pt-0' : ''}`}>
                <div className={`p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-3 ${m.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-outfit mb-1">
                  {m.value}
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 font-sans mb-1">
                  {m.label}
                </div>
                <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  {m.change}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
