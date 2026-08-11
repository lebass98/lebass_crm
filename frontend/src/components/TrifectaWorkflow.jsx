import React from 'react';
import { useThemeSystem } from '../context/ThemeContext';
import { Link2, Cpu, LineChart } from 'lucide-react';

export default function TrifectaWorkflow() {
  const { colorPreset } = useThemeSystem();

  const steps = [
    {
      num: '01',
      title: 'Connect',
      desc: 'Integrate your existing tools in seconds with 50+ pre-built connectors and seamless API endpoints.',
      icon: Link2,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      num: '02',
      title: 'Automate',
      desc: 'Set up intelligent workflows, triggers, and automated notification loops without writing complex code.',
      icon: Cpu,
      color: 'from-purple-500 to-pink-600',
    },
    {
      num: '03',
      title: 'Scale',
      desc: 'Monitor product growth with real-time analytics, SLA reliability, and enterprise-grade performance.',
      icon: LineChart,
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto w-full" id="workflow">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span 
          className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white mb-3 inline-block shadow-xs"
          style={{ backgroundColor: colorPreset.primary }}
        >
          WORKFLOW
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-outfit tracking-tight">
          Designed for modern teams
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
          Three simple steps to transform your product workflow and launch in minutes.
        </p>
      </div>

      {/* 3 Step Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div 
              key={idx}
              className="glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all relative overflow-hidden group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-extrabold font-mono text-slate-300 dark:text-slate-700 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {step.num}
                  </span>
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-outfit">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 text-[11px] font-mono text-slate-400">
                Step {idx + 1} of 3 • Fully Automated
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
