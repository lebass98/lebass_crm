import React from 'react';
import { useThemeSystem } from '../context/ThemeContext';
import { Star } from 'lucide-react';

export default function TrifectaTestimonials() {
  const { colorPreset } = useThemeSystem();

  const reviews = [
    {
      quote: "Trifecta allowed us to launch our SaaS landing page in less than 2 hours. The conversion rate jumped by 45% immediately after switching.",
      name: "Alex Rivera",
      role: "CEO & Co-founder at Horizon AI",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    },
    {
      quote: "The clean layout, pre-built components, and Tailwind styling are absolute game-changers. Best Framer template experience we've ever had.",
      name: "Sophia Chen",
      role: "Head of Product Design at Vertex",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
    },
    {
      quote: "Bank-grade security features and lightning-fast edge performance. Our engineering team loves how easy it is to customize.",
      name: "Marcus Vance",
      role: "CTO at Nexus Stream",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    },
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto w-full">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span 
          className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white mb-3 inline-block shadow-xs"
          style={{ backgroundColor: colorPreset.primary }}
        >
          TESTIMONIALS
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-outfit tracking-tight">
          Loved by founders & creators worldwide
        </h2>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-lg"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-8 font-sans">
                "{rev.quote}"
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 border-t border-slate-200/80 dark:border-slate-800/80 pt-4">
              <img
                src={rev.avatar}
                alt={rev.name}
                className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
              />
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white font-outfit">
                  {rev.name}
                </h4>
                <p className="text-[11px] text-slate-500 font-sans">
                  {rev.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
