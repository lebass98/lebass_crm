import React, { useState } from 'react';
import { useThemeSystem } from '../context/ThemeContext';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export default function TrifectaPricing() {
  const { colorPreset } = useThemeSystem();
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'

  const plans = [
    {
      name: 'Starter',
      desc: 'Ideal for individuals, freelancers, and small side projects.',
      monthlyPrice: '$29',
      annualPrice: '$23',
      badge: null,
      features: [
        '1 Active Project',
        'Standard Analytics Dashboard',
        'Community Support',
        'Basic CDN Edge Distribution',
        'Up to 10k Monthly Visitors',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Pro',
      desc: 'Designed for growing teams requiring advanced automation.',
      monthlyPrice: '$79',
      annualPrice: '$63',
      badge: 'MOST POPULAR',
      features: [
        'Unlimited Active Projects',
        'Advanced Real-time Analytics',
        'AI Automated Workflows',
        '24/7 Priority Email & Chat Support',
        'Custom Domain & SSL',
        'Up to 500k Monthly Visitors',
      ],
      cta: 'Get Started Now',
      popular: true,
    },
    {
      name: 'Enterprise',
      desc: 'For large organizations requiring custom SLAs & security.',
      monthlyPrice: '$199',
      annualPrice: '$159',
      badge: 'ENTERPRISE',
      features: [
        'Everything in Pro Plan',
        'Dedicated Account Manager',
        'SOC2 Type II & SAML SSO',
        'Custom SLA Guarantee (99.99%)',
        'Tailored Backend Integrations',
        'Unlimited Monthly Visitors',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto w-full" id="pricing">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span 
          className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white mb-3 inline-block shadow-xs"
          style={{ backgroundColor: colorPreset.primary }}
        >
          PRICING
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-outfit tracking-tight">
          Simple, transparent pricing for every stage
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
          No hidden fees. Upgrade, downgrade, or cancel anytime.
        </p>

        {/* Billing Cycle Toggle */}
        <div className="mt-8 inline-flex items-center gap-2 p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
              billingCycle === 'monthly'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              billingCycle === 'annual'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>Annual Billing</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`glass-card rounded-3xl p-8 border flex flex-col justify-between transition-all relative ${
              plan.popular
                ? 'border-indigo-500/60 dark:border-indigo-500/80 shadow-2xl scale-105 z-10'
                : 'border-slate-200/80 dark:border-slate-800/80 shadow-lg hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-white shadow-md" style={{ backgroundColor: colorPreset.primary }}>
                {plan.badge}
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-outfit mb-2">
                {plan.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-sans">
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-outfit">
                  {billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                </span>
                <span className="text-xs text-slate-500 font-mono">/ month</span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8 text-xs text-slate-700 dark:text-slate-300 font-sans border-t border-slate-200 dark:border-slate-800 pt-6">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button
              className={`w-full py-3.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer ${
                plan.popular
                  ? 'btn-glow-cta text-white'
                  : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100'
              }`}
              style={plan.popular ? { backgroundColor: colorPreset.primary } : {}}
            >
              <span>{plan.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}
