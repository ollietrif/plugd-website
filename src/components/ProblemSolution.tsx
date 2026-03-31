import React from 'react';
import { motion } from 'motion/react';
import { BatteryWarning, Clock, TrendingUp } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section id="problem" className="py-24 bg-navy relative border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              The 5% Battery Exodus.
            </h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              When phones die, customers leave. It's that simple. You're losing revenue to dead batteries every single night. Plugd stops the exodus.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <BatteryWarning className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">The Problem</h3>
                  <p className="text-slate-400">Guests cut their night short when they can't order an Uber, pay with Apple Pay, or find their friends.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-electric" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">The Solution</h3>
                  <p className="text-slate-400">Portable power banks let them charge at their table. No leaving their drinks, no standing by a wall outlet.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">The Result</h3>
                  <p className="text-slate-400">Longer stays. Higher average transaction value. Happier customers who stay until closing.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-electric/20 to-transparent rounded-3xl blur-2xl" />
            <div className="relative bg-card border border-border rounded-3xl p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric/10 rounded-bl-full" />
              
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-border pb-6">
                  <div>
                    <p className="text-sm font-medium text-slate-400 mb-1">Average Dwell Time</p>
                    <p className="text-3xl font-heading font-bold text-white">Without Plugd</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-heading font-bold text-red-400">1h 45m</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-400 mb-1">Average Dwell Time</p>
                    <p className="text-3xl font-heading font-bold text-white">With Plugd</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-heading font-bold text-electric">2h 30m+</p>
                  </div>
                </div>
                
                <div className="pt-6 mt-6 border-t border-border">
                  <div className="bg-navy rounded-xl p-4 flex items-center justify-between border border-border">
                    <span className="text-slate-300 font-medium">Revenue Impact</span>
                    <span className="text-green-400 font-bold text-xl">+24%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
