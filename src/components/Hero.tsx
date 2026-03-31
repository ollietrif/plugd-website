import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const VENUES = ["Bar", "Restaurant", "Cafe", "Hotel"];

export function Hero() {
  const [venueIndex, setVenueIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVenueIndex((prev) => (prev + 1) % VENUES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-electric animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300">Zero cost to your venue</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white mb-6 leading-tight"
            >
              Power Up Your Venue <br className="hidden md:block" />
              <span className="text-slate-300 text-3xl md:text-4xl lg:text-5xl block mt-2 font-medium">without lifting a finger</span>
              <span className="relative inline-flex h-[1.2em] overflow-hidden align-bottom mt-2 w-full justify-center lg:justify-start">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={venueIndex}
                    initial={{ y: "100%", rotateX: -90, opacity: 0 }}
                    animate={{ y: "0%", rotateX: 0, opacity: 1 }}
                    exit={{ y: "-100%", rotateX: 90, opacity: 0 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan-200 origin-center"
                  >
                    {VENUES[venueIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Keep your customers connected with tap-and-go charging. Cables for iPhone & Android built-in. Increase dwell time and boost revenue with zero maintenance.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a 
                href="#host" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-electric hover:bg-cyan-400 text-navy font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(0,180,216,0.3)] hover:shadow-[0_0_30px_rgba(0,180,216,0.5)] text-lg"
              >
                <Zap className="w-5 h-5" />
                Host a Station Free
              </a>
              <a 
                href="#benefits" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-card hover:bg-slate-800 border border-border text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
              >
                See How It Works
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-electric/20 to-transparent rounded-3xl blur-3xl" />
            <img 
              src="https://assets.cdn.filesafe.space/Vp4BIF23DahCIW4n0GDs/media/699ec10e9810930c3a1da9cd.png" 
              alt="Plugd Charging Station" 
              className="relative z-10 w-full h-auto drop-shadow-2xl object-contain"
              onError={(e) => {
                // Fallback styling if image is missing
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback UI if image isn't found */}
            <div className="hidden relative z-10 w-full aspect-[3/4] bg-card border border-border rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto bg-navy rounded-2xl border border-border flex items-center justify-center mb-6">
                  <Zap className="w-10 h-10 text-electric" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Plugd Station</h3>
                <p className="text-slate-400">Image failed to load</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
