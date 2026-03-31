import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, MapPin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.svg" 
                alt="Plugd Logo" 
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden font-heading font-bold text-2xl tracking-tight text-electric">
                plugd.
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Frictionless power bank rentals for venues and events. Keep your customers charged and engaged.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-electric transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-electric transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-electric transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/#how-it-works" className="hover:text-electric transition-colors">How it Works</Link></li>
              <li><Link to="/#venues" className="hover:text-electric transition-colors">For Venues</Link></li>
              <li><Link to="/#partners" className="hover:text-electric transition-colors">Partner Program</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/support" className="hover:text-electric transition-colors">Help Center</Link></li>
              <li><Link to="/support" className="hover:text-electric transition-colors">FAQs</Link></li>
              <li><a href="mailto:support@plugd.co.uk" className="hover:text-electric transition-colors flex items-center gap-2"><Mail className="w-4 h-4" /> Contact Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-electric transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Plugd Ltd. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>London, United Kingdom</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

