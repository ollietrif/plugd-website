import React from 'react';
import { Mail, MessageCircle, FileText, AlertCircle, RefreshCw, Building2, Package, MapPin, ChevronDown } from 'lucide-react';

const faqs = [
  {
    category: "Billing & Charges",
    questions: [
      {
        q: "When does billing start?",
        a: "Billing starts once the power bank is released from the station and payment authorisation is completed."
      },
      {
        q: "When does billing stop?",
        a: "Billing stops as soon as the power bank is returned to the station and successfully docked."
      },
      {
        q: "How are charges calculated?",
        a: "You receive 10 minutes free, then billing continues hourly, with a daily cap applied automatically."
      },
      {
        q: "Is there a maximum charge?",
        a: "Yes. Charges are capped at £7 per 24 hours, for a maximum of 2 days."
      },
      {
        q: "Why was I charged?",
        a: "Charges apply when the power bank is kept beyond the free period or not returned within the rental window."
      },
      {
        q: "What happens if I don't return the power bank?",
        a: "If the power bank is not returned within 48 hours, a £35 replacement fee is charged. This covers the cost of the unit and is not a penalty."
      }
    ]
  },
  {
    category: "Common Issues",
    questions: [
      {
        q: "My power bank isn't charging my phone",
        a: "Try another cable or ensure your phone is properly connected. If the issue continues, return the power bank within 10 minutes to avoid being charged."
      },
      {
        q: "The cable isn't working",
        a: "Check all cable ends are fully inserted. If faulty, return the unit within the free period and take another."
      },
      {
        q: "I can't return the power bank",
        a: "Ensure the power bank is fully inserted into the slot. If the station doesn't respond, try another nearby station or contact support."
      },
      {
        q: "The station isn't responding",
        a: "Please contact support and include the station location. Do not leave the power bank without docking it."
      },
      {
        q: "I returned it but was still charged",
        a: "If the system didn't register your return correctly, contact support and we'll review the station logs."
      }
    ]
  },
  {
    category: "Returns & Responsibility",
    questions: [
      {
        q: "How do I return the power bank?",
        a: "Insert the power bank back into any available slot at the station. Once docked, your rental ends automatically."
      },
      {
        q: "Can I return it to any station?",
        a: "Yes, as long as it's within the Plugd network (where available)."
      },
      {
        q: "What if I lose the power bank?",
        a: "A £35 replacement fee will be charged if the unit is not returned within 48 hours."
      },
      {
        q: "What if the power bank is damaged?",
        a: "If the unit is returned damaged or unusable, it may be treated as a non-return."
      },
      {
        q: "What happens if I keep it too long?",
        a: "After 48 hours, the system will automatically apply the replacement fee."
      },
      {
        q: "Can I get a refund?",
        a: "Refunds are only issued in cases such as system errors or confirmed faults. They are not issued for late returns or misunderstandings of pricing."
      }
    ]
  }
];

export function Support() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-navy">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Support
        </h1>
        <p className="text-xl text-slate-400">
          Quick answers
        </p>
      </div>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="space-y-12">
          {faqs.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-white mb-6">{section.category}</h2>
              <div className="space-y-4">
                {section.questions.map((faq, faqIdx) => (
                  <details key={faqIdx} className="group bg-card border border-border rounded-2xl overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-white hover:text-electric transition-colors">
                      {faq.q}
                      <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6 text-slate-400">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Contact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="https://wa.me/447492167664" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 bg-card hover:bg-slate-800 border border-border text-white font-semibold p-6 rounded-xl transition-colors w-full">
            <MessageCircle className="w-6 h-6 text-electric" />
            WhatsApp Support
          </a>
          <a href="mailto:support@plugd.co.uk" className="flex flex-col items-center justify-center gap-3 bg-card hover:bg-slate-800 border border-border text-white font-semibold p-6 rounded-xl transition-colors w-full">
            <Mail className="w-6 h-6 text-electric" />
            Email Support
          </a>
          <a href="mailto:returns@plugd.co.uk" className="flex flex-col items-center justify-center gap-3 bg-card hover:bg-slate-800 border border-border text-white font-semibold p-6 rounded-xl transition-colors w-full">
            <Package className="w-6 h-6 text-electric" />
            Postal Returns
          </a>
          <a href="mailto:stations@plugd.co.uk" className="flex flex-col items-center justify-center gap-3 bg-card hover:bg-slate-800 border border-border text-white font-semibold p-6 rounded-xl transition-colors w-full">
            <MapPin className="w-6 h-6 text-electric" />
            Station Request
          </a>
        </div>
      </div>
    </div>
  );
}
