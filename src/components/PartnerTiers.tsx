import React from 'react';
import { Building2, Tent } from 'lucide-react';

export function PartnerTiers() {
  return (
    <section id="venues" className="py-24 bg-navy border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Hardware for every scale.
          </h2>
          <p className="text-xl text-slate-400">
            From compact countertop units to larger stations. All power banks feature fast-charging and built-in universal cables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Permanent Venues */}
          <div className="bg-card border border-border rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            
            <div className="w-16 h-16 rounded-2xl bg-navy border border-border flex items-center justify-center mb-8 relative z-10">
              <Building2 className="w-8 h-8 text-electric" />
            </div>
            
            <h3 className="text-3xl font-heading font-bold text-white mb-4 relative z-10">Permanent Venues</h3>
            <p className="text-slate-400 text-lg mb-8 relative z-10">
              Perfect for bars, restaurants, gyms, and cafes. Sleek, compact stations that blend into your decor.
            </p>
            
            <ul className="space-y-4 mb-8 relative z-10">
              {[
                '8-slot stations & more available',
                'HD screens for venue promotions',
                'Zero installation cost',
                'Monthly revenue share'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Live Events */}
          <div className="bg-card border border-border rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            
            <div className="w-16 h-16 rounded-2xl bg-navy border border-border flex items-center justify-center mb-8 relative z-10">
              <Tent className="w-8 h-8 text-purple-400" />
            </div>
            
            <h3 className="text-3xl font-heading font-bold text-white mb-4 relative z-10">Live Events</h3>
            <p className="text-slate-400 text-lg mb-8 relative z-10">
              High-capacity deployments for festivals, expos, and stadiums. Keep attendees connected all day.
            </p>
            
            <ul className="space-y-4 mb-8 relative z-10">
              {[
                'Massive 48+ slot towers',
                'Dedicated on-site support staff',
                'Custom branding opportunities',
                'Detailed post-event analytics'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
