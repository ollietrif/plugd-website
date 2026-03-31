import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export function CTAForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "1656a6bb-60a5-434a-89d2-ced601d2e235");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000); // Reset status after 5s
      } else {
        console.error("Error", data);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Error", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="host" className="py-24 bg-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-electric/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Ready to plug in?
            </h2>
            <p className="text-lg text-slate-400">
              Request a station for your venue today. Zero cost, zero hassle.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="subject" value="New Station Request from Plugd Website" />
            <input type="hidden" name="from_name" value="Plugd Website" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="venueName" className="block text-sm font-medium text-slate-300">Venue Name</label>
                <input 
                  type="text" 
                  id="venueName" 
                  name="venueName"
                  required
                  className="w-full bg-navy border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors"
                  placeholder="The Red Lion"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="venueType" className="block text-sm font-medium text-slate-300">Venue Type</label>
                <select 
                  id="venueType" 
                  name="venueType"
                  required
                  className="w-full bg-navy border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors appearance-none"
                >
                  <option value="">Select type...</option>
                  <option value="bar">Bar / Pub</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="cafe">Cafe</option>
                  <option value="gym">Gym / Leisure</option>
                  <option value="event">Live Event / Festival</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="contactName" className="block text-sm font-medium text-slate-300">Contact Name</label>
                <input 
                  type="text" 
                  id="contactName" 
                  name="contactName"
                  required
                  className="w-full bg-navy border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full bg-navy border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors"
                  placeholder="jane@theredlion.com"
                />
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 bg-electric hover:bg-sky-400 text-navy font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] text-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <div className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {status === 'submitting' ? 'Sending...' : 'Request Your Station'}
              </button>
              
              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center gap-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Request sent successfully! We'll be in touch soon.</span>
                </div>
              )}
              
              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center gap-2 text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  <span>Something went wrong. Please try again or contact us directly.</span>
                </div>
              )}
              
              <p className="text-center text-sm text-slate-500 mt-4">
                By submitting, you agree to our terms. We'll be in touch within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
