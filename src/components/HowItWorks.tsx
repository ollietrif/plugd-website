import React from 'react';
import { CreditCard, BatteryCharging, ArrowRightLeft } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: <CreditCard className="w-8 h-8 text-electric" />,
      title: "1. Tap & Go",
      description: "Customers tap their card or phone on the contactless reader. No app download required. Apple Pay and Google Pay get them a power bank instantly."
    },
    {
      icon: <BatteryCharging className="w-8 h-8 text-electric" />,
      title: "2. Grab & Charge",
      description: "A fully charged power bank ejects automatically. Built-in Lightning and USB-C cables mean universal compatibility for iPhone & Android."
    },
    {
      icon: <ArrowRightLeft className="w-8 h-8 text-electric" />,
      title: "3. Return Anywhere",
      description: "Guests stay charged anywhere in the venue. When they're done, they simply push the power bank back into any empty slot."
    }
  ];

  return (
    <section className="py-24 bg-card border-t border-border relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-electric/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Frictionless for them. <br className="hidden sm:block" />
            <span className="text-electric">Effortless for you.</span>
          </h2>
          <p className="text-xl text-slate-400">
            The customer experience is designed to be completely self-serve. Your staff never has to handle cables, deposits, or complaints again.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, index) => (
            <div key={index} className="relative bg-navy border border-border rounded-3xl p-8 hover:border-electric/30 transition-colors group">
              <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,180,216,0.1)]">
                {step.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
