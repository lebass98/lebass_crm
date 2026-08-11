import React, { useState } from 'react';
import { useThemeSystem } from '../context/ThemeContext';
import { ChevronDown } from 'lucide-react';

export default function TrifectaFAQ() {
  const { colorPreset } = useThemeSystem();
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How quickly can I set up Trifecta?',
      a: 'You can launch your complete web application or landing page in less than 10 minutes using our modular components and pre-configured build pipeline.',
    },
    {
      q: 'Is 24/7 technical support included?',
      a: 'Yes, all Pro and Enterprise plans include round-the-clock dedicated priority support via email, chat, and private Slack channel.',
    },
    {
      q: 'Can I fully customize the design & components?',
      a: '100%. Trifecta is built with clean React 19 code, Tailwind CSS v4, and flexible ThemeContext variables, allowing complete styling freedom.',
    },
    {
      q: 'Do you offer a money-back guarantee?',
      a: 'Absolutely. We offer a 14-day 100% money-back guarantee. If you are not completely satisfied, you get a full refund with no questions asked.',
    },
  ];

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto w-full" id="faq">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span 
          className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white mb-3 inline-block shadow-xs"
          style={{ backgroundColor: colorPreset.primary }}
        >
          FAQ
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-outfit tracking-tight">
          Frequently asked questions
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
          Everything you need to know about Trifecta and our deployment workflow.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-outfit text-base font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-500' : 'text-slate-400'}`} />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800/60 pt-4 font-sans animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}
