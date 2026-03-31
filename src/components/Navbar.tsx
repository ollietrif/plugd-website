import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              src="/logo.svg" 
              alt="Plugd Logo" 
              className="h-10 w-auto object-contain"
              onError={(e) => {
                // Fallback if image isn't found
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden font-heading font-bold text-3xl tracking-tight text-electric">
              plugd.
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {isHome ? (
                <>
                  <a href="#problem" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">The Problem</a>
                  <a href="#benefits" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Benefits</a>
                  <a href="#venues" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Venues</a>
                </>
              ) : (
                <>
                  <Link to="/#problem" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">The Problem</Link>
                  <Link to="/#benefits" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Benefits</Link>
                  <Link to="/#venues" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Venues</Link>
                </>
              )}
              <Link to="/support" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Support</Link>
              {isHome ? (
                <a 
                  href="#host" 
                  className="bg-electric hover:bg-cyan-400 text-navy font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-[0_0_15px_rgba(0,180,216,0.3)] hover:shadow-[0_0_25px_rgba(0,180,216,0.5)]"
                >
                  Host a Station
                </a>
              ) : (
                <Link 
                  to="/#host" 
                  className="bg-electric hover:bg-cyan-400 text-navy font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-[0_0_15px_rgba(0,180,216,0.3)] hover:shadow-[0_0_25px_rgba(0,180,216,0.5)]"
                >
                  Host a Station
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-card focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isHome ? (
              <>
                <a href="#problem" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">The Problem</a>
                <a href="#benefits" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Benefits</a>
                <a href="#venues" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Venues</a>
                <Link to="/support" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Support</Link>
                <a href="#host" onClick={() => setIsOpen(false)} className="text-electric font-semibold block px-3 py-2 rounded-md text-base">Host a Station</a>
              </>
            ) : (
              <>
                <Link to="/#problem" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">The Problem</Link>
                <Link to="/#benefits" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Benefits</Link>
                <Link to="/#venues" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Venues</Link>
                <Link to="/support" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Support</Link>
                <Link to="/#host" onClick={() => setIsOpen(false)} className="text-electric font-semibold block px-3 py-2 rounded-md text-base">Host a Station</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
