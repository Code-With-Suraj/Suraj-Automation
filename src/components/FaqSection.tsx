import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HOME_FAQS = [
  {
    q: "How much does custom business software cost in India?",
    a: "Costs depend on your workflow scope. Ready-to-deploy Sarthi software systems start at ₹1,499, targeted Google Sheets and Apps Script automations start from ₹1,499–₹2,999, and custom full-stack web applications or internal ERPs are quoted transparently—typically at a fraction of large agency retainers."
  },
  {
    q: "Can Google Sheets be used as an ERP for small businesses?",
    a: "Yes. When structured properly with Google Apps Script triggers, role-based web views, and automated backups, Google Sheets serves as a reliable, lightweight ERP for billing, inventory, procurement, and HR—with zero monthly server costs."
  },
  {
    q: "How does Google Apps Script automate business workflows?",
    a: "Google Apps Script executes custom JavaScript directly inside your Google Workspace account. It connects Sheets, Forms, Docs, Gmail, Drive, and third-party APIs to auto-generate GST invoice PDFs, update stock balances, and trigger email or WhatsApp alerts on schedule."
  },
  {
    q: "Can WhatsApp be integrated with Google Sheets and CRM systems?",
    a: "Yes. We connect Google Sheets, billing ledgers, and custom CRM portals with WhatsApp Business workflows to dispatch order confirmations, PDF invoices, overdue payment reminders, and lead follow-ups automatically."
  },
  {
    q: "How long does it take to build a custom web application?",
    a: "Pre-built Sarthi systems and focused Apps Script automations typically go live in 3 to 7 working days. Custom full-stack React, Node.js, and multi-role web applications generally take 2 to 4 weeks."
  },
  {
    q: "Is Google Apps Script secure for business data?",
    a: "Yes. Your spreadsheets, documents, and automation scripts stay inside your own company Google Workspace or Google Drive account. No external third-party SaaS database holds your customer or financial data."
  },
  {
    q: "Does Suraj Automation provide custom software services in Noida and Delhi NCR?",
    a: "Yes. Based in Noida, Uttar Pradesh, Suraj Automation works directly with businesses across Noida, Greater Noida, Ghaziabad, Gurgaon, and Delhi NCR, alongside remote software delivery and onboarding for SMBs across India."
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

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
            Clear answers on custom software pricing in India, Google Apps Script ERPs, WhatsApp integration, and Noida/Delhi NCR support.
          </p>
        </div>

        <div className="space-y-4">
          {HOME_FAQS.map((faq, idx) => {
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
            <p className="text-sm text-slate-600 dark:text-slate-400 font-body">
              Speak directly with Suraj or explore our <Link to="/custom-software-noida" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Noida & Delhi NCR services</Link>.
            </p>
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
