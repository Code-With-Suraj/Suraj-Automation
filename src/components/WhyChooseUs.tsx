import { COMPARISON_ROWS, getWhatsAppUrl } from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

export default function WhyChooseUs() {
  const { lang } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200" id="why-not-erp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
            {lang === 'hinglish' ? 'Imandaar Comparison' : 'Honest Comparison'}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === 'hinglish'
              ? 'Bada ERP kyun nahi, aur manual Excel se aage kyun?'
              : 'Why not a heavy ERP — and why move beyond messy Excel?'}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {lang === 'hinglish'
              ? 'Har business ko ₹2 lakh ka ERP nahi chahiye hota. Seedha comparison dekhiye.'
              : 'Not every growing business needs a complex, expensive ERP suite. Compare the three options clearly.'}
          </p>
        </div>

        {/* Responsive Comparison Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[680px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/80 text-xs font-bold uppercase tracking-wider text-slate-600">
                <th className="py-4 px-5 w-[18%]">
                  {lang === 'hinglish' ? 'Pehlu' : 'Factor'}
                </th>
                <th className="py-4 px-5 w-[27%]">
                  {lang === 'hinglish' ? 'Heavy ERP (SAP / Zoho / Custom)' : 'Heavy ERP'}
                </th>
                <th className="py-4 px-5 w-[27%]">
                  {lang === 'hinglish' ? 'Manual Excel + WhatsApp' : 'Excel + WhatsApp Chaos'}
                </th>
                <th className="py-4 px-5 w-[28%] bg-emerald-50 text-emerald-900 border-l border-emerald-200">
                  Suraj Automation
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr key={idx} className="align-top">
                  <td className="py-4 px-5 font-bold text-slate-900">
                    {row.aspect[lang]}
                  </td>
                  <td className="py-4 px-5 text-slate-600 leading-relaxed">
                    {row.erp[lang]}
                  </td>
                  <td className="py-4 px-5 text-slate-600 leading-relaxed">
                    {row.excel[lang]}
                  </td>
                  <td className="py-4 px-5 font-medium text-slate-900 bg-emerald-50/50 border-l border-emerald-200 leading-relaxed">
                    {row.suraj[lang]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            {lang === 'hinglish'
              ? 'Note: Agar aap Tally accounting use karte hain, to humara system aapke daily operations ke saath side-by-side kaam karta hai.'
              : 'Note: If you already use Tally for statutory filing, our systems work cleanly alongside it for daily operations.'}
          </p>
          <a
            href={getWhatsAppUrl('Hi Suraj, mujhe samajhna hai ki mere business ke liye Google Sheets system sahi rahega ya nahi.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 whitespace-nowrap"
          >
            <span>{lang === 'hinglish' ? 'Apne workflow ke liye poochein' : 'Ask about your setup'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
