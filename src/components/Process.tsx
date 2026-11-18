import { PROCESS_STEPS, getWhatsAppUrl } from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';
import { MessageSquare } from 'lucide-react';

export default function Process() {
  const { lang } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
              {lang === 'hinglish' ? 'Kaam Kaise Hota Hai' : 'How We Work'}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'hinglish'
                ? '4 simple steps me Excel se apna working system.'
                : 'From scattered sheets to a working system in 4 steps.'}
            </h2>
          </div>

          <a
            href={getWhatsAppUrl('Hi Suraj, mujhe step-by-step process aur timeline samajhna hai.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{lang === 'hinglish' ? 'Step 1: Free Call Book Karein' : 'Step 1: Book Free Call'}</span>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                <span className="font-mono text-lg font-extrabold text-emerald-700 tabular-nums">
                  {step.step}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {lang === 'hinglish' ? 'Clear Milestone' : 'Clear Milestone'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {step.title[lang]}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
