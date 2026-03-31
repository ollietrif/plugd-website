import React from 'react';
import { Utensils, ShoppingBag, Dumbbell, GraduationCap, Train, Hotel, Tent, Beer } from 'lucide-react';

export function VenueTypes() {
  const venues = [
    { icon: <Beer className="w-6 h-6" />, name: "Bars & Pubs" },
    { icon: <Utensils className="w-6 h-6" />, name: "Restaurants" },
    { icon: <Hotel className="w-6 h-6" />, name: "Hotels" },
    { icon: <ShoppingBag className="w-6 h-6" />, name: "Retail" },
    { icon: <Dumbbell className="w-6 h-6" />, name: "Leisure & Gyms" },
    { icon: <GraduationCap className="w-6 h-6" />, name: "Education" },
    { icon: <Train className="w-6 h-6" />, name: "Transport Hubs" },
    { icon: <Tent className="w-6 h-6" />, name: "Festivals & Events" },
  ];

  return (
    <section className="py-20 bg-navy border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-2xl font-heading font-bold text-slate-300">
          Powering the best venues across the UK
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy to-transparent z-10" />
        
        <div className="flex space-x-6 animate-marquee whitespace-nowrap py-4">
          {[...venues, ...venues].map((venue, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 text-slate-300 hover:text-electric hover:border-electric/50 transition-colors"
            >
              <span className="text-electric/80">{venue.icon}</span>
              <span className="font-medium text-lg">{venue.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
