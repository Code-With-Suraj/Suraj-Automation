import { PROBLEM_ITEMS, getWhatsAppUrl } from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

export default function Problem() {
  const { lang } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200" id="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            {lang === 'hinglish' ? 'Rozana Ki Pareshani' : 'Common Operational Bottlenecks'}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === 'hinglish'
              ? 'Business badh raha hai, par hisab abhi bhi WhatsApp aur Excel me atka hai?'
              : 'Your business is growing, but daily operations are still stuck in Excel and WhatsApp?'}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {lang === 'hinglish'
              ? 'Zyadatar Indian traders, distributors aur service owners roz in 4 problems me time aur paisa gawaate hain.'
              : 'Most Indian traders, distributors, and service businesses lose hours and cash flow every week to these four issues.'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEM_ITEMS.map((item) => (
            <div
              key={item.num}
              className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-sm font-bold text-amber-700 block mb-3 tabular-nums">
                  {item.num}.
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                  {item.title[lang]}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
          <p className="text-sm font-medium text-slate-700">
            {lang === 'hinglish'
              ? 'Inme se koi bhi problem aapke business me roz aati hai?'
              : 'Dealing with any of these daily bottlenecks?'}
          </p>
          <a
            href={getWhatsAppUrl('Hi Suraj, mere business me Excel/WhatsApp tracking ki problem hai, baat karni hai.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 whitespace-nowrap"
          >
            <span>
              {lang === 'hinglish' ? 'WhatsApp par apna workflow batayein' : 'Share your workflow on WhatsApp'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
