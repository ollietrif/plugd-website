import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How much does it cost to host a station?",
    answer: "Zero. It is completely free to host a Plugd station. We cover the cost of the hardware, installation, and maintenance."
  },
  {
    question: "Do I need to charge the power banks?",
    answer: "No, the station automatically charges the power banks when they are returned. Your staff doesn't need to do anything."
  },
  {
    question: "What happens if a customer steals a power bank?",
    answer: "Customers must provide a valid payment method to rent a power bank. If it's not returned, they are charged a purchase fee. You are not liable for lost or stolen power banks."
  },
  {
    question: "How do I get paid?",
    answer: "We share a percentage of the rental revenue with you. Payments are automatically transferred to your nominated bank account every month."
  },
  {
    question: "What if the station breaks?",
    answer: "We monitor all stations remotely 24/7. If there's an issue, we'll dispatch a technician to fix or replace the unit at no cost to you."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-400">
            Everything you need to know about hosting a Plugd station.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-border rounded-2xl overflow-hidden bg-navy transition-colors hover:border-electric/50"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-slate-200">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-electric transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
