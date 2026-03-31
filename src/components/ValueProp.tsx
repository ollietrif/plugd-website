import React from 'react';
import { PoundSterling, Wrench, Coins, MonitorPlay } from 'lucide-react';

export function ValueProp() {
  return (
    <section id="benefits" className="py-24 bg-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Built for your bottom line.
          </h2>
          <p className="text-xl text-slate-400">
            We don't just provide chargers. We provide a utility that drives revenue and requires zero effort from your staff. All we need is a plug socket and a visible space.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          
          {/* Card 1: Increase Spend (Large) */}
          <div className="lg:col-span-2 bg-card border border-border rounded-3xl p-8 relative overflow-hidden group hover:border-electric/50 transition-colors">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <PoundSterling className="w-32 h-32 text-electric" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-electric/10 border border-electric/20 flex items-center justify-center mb-6">
                <PoundSterling className="w-7 h-7 text-electric" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">Increase Spend</h3>
                <p className="text-slate-400 text-lg max-w-md">
                  Longer stays equal higher average transaction values. When customers aren't worried about their battery, they order another round.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Zero Maintenance */}
          <div className="bg-card border border-border rounded-3xl p-8 relative overflow-hidden group hover:border-electric/50 transition-colors">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-slate-300" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">Zero Maintenance</h3>
                <p className="text-slate-400">
                  We handle 24/7 customer support, hardware maintenance, and automated inventory balancing (refill/unfill). Your staff never touches it.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Passive Revenue */}
          <div className="bg-card border border-border rounded-3xl p-8 relative overflow-hidden group hover:border-electric/50 transition-colors">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                <Coins className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">Passive Revenue</h3>
                <p className="text-slate-400">
                  Earn a commission from every rental. It's a pure profit center with absolutely zero overhead or upfront cost.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Digital Presence (Wide) */}
          <div className="lg:col-span-2 bg-card border border-border rounded-3xl p-8 relative overflow-hidden group hover:border-electric/50 transition-colors">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-electric/5 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                <MonitorPlay className="w-7 h-7 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">Digital Presence</h3>
                <p className="text-slate-400 text-lg max-w-md">
                  Our stations feature HD screens. Use them to promote your own specials, events, and venue-specific marketing directly to a captive audience.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
