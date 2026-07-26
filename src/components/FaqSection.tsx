import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does Google Apps Script compare to traditional software?",
      a: "Google Apps Script runs natively inside your Google Workspace account. It turns Google Sheets into a secure cloud database with zero recurring server hosting fees ($0/month). You get web portal speed with 100% data ownership and no third-party vendor lock-in."
    },
    {
      q: "Will there be any monthly recurring software fees?",
      a: "No! Unlike standard SaaS subscriptions that charge $50–$500 per month forever, our custom solutions run on your personal or company Google Cloud infrastructure. You pay a one-time development fee with lifetime access."
    },
    {
      q: "Can you build custom Web Applications and APIs?",
      a: "Yes! We build modern full-stack web applications (React, Node.js, Express) and custom SaaS platforms. We also integrate third-party APIs like WhatsApp Business, Razorpay Payment Gateway, Gemini AI, and Google Maps."
    },
    {
      q: "How does WhatsApp Automation work?",
      a: "Whenever a form is submitted, a bill is generated, or a inventory threshold is hit, our system automatically formats a personalized PDF invoice or alert message and dispatches it directly to the customer or staff member's WhatsApp number in real-time."
    },
    {
      q: "How secure is my company's business data?",
      a: "Your data never leaves your own Google Drive and server account. We write the software script directly into your Google Workspace domain. Only authorized personnel from your company have access."
    },
    {
      q: "How long does it take to deliver a custom software system?",
      a: "Standard Sarthi products and custom Google Apps Script tools are typically configured and deployed in 3 to 7 days. Full-stack custom web applications and complex ERP systems usually take 2 to 3 weeks."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold text-xs uppercase tracking-wider mb-4 border border-blue-500/20">
            Got Questions? We Have Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Questions</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-body">
            Everything you need to know about our business automation engineering, pricing, and deployment.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left font-bold text-slate-900 dark:text-white flex items-center justify-between gap-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span className="flex items-center gap-3 text-base sm:text-lg">
                    <HelpCircle className="w-5 h-5 text-blue-500 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-body">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-6 bg-blue-50 dark:bg-slate-900 rounded-2xl border border-blue-200 dark:border-blue-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-slate-900 dark:text-white text-base">Have a unique business requirement?</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-body">Speak directly with Suraj to get a custom software architecture plan.</p>
          </div>
          <a
            href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20have%20a%20question%20about%20custom%20software%20automation."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shrink-0 flex items-center gap-2 shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            Chat On WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
