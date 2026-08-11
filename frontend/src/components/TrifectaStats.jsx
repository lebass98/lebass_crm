import React from 'react';

export default function TrifectaStats() {
  const stats = [
    { value: '99.9%', label: 'Platform Uptime', sub: 'Enterprise SLA Guaranteed' },
    { value: '10M+', label: 'Monthly API Calls', sub: 'High throughput pipeline' },
    { value: '4.9/5', label: 'Average User Rating', sub: 'Based on 2,500+ reviews' },
    { value: '2.5x', label: 'Faster Deployment Time', sub: 'Zero-config boilerplate' },
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto w-full">
      <div className="glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
          {stats.map((s, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center ${idx !== 0 ? 'pt-6 md:pt-0' : ''}`}>
              <div className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-outfit tracking-tight mb-2">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 font-sans mb-1">
                {s.label}
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
