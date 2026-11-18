import { ShieldCheck, KeyRound, Lock, FileSpreadsheet, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SECURITY_POINTS } from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';

export default function SecurityOwnership() {
  const { lang } = useLanguage();
  const icons = [FileSpreadsheet, KeyRound, Lock, ShieldCheck, LogOut];

  return (
    <section className="py-16 lg:py-24 bg-[#0B1528] text-white border-b border-slate-800" id="security">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            {lang === 'hinglish' ? 'Security & Data Ownership' : 'Security & Data Ownership'}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            {lang === 'hinglish'
              ? 'Aapka data, aapka Google account — bina kisi hawa-baazi ke.'
              : 'Your data stays in your Google account — explained plainly.'}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {lang === 'hinglish'
              ? 'Hum "100% unhackable" ya "bank-grade" jaise jhoothe daave nahi karte. Jo architecture actually build hota hai, wahi neeche likha hai.'
              : 'We do not make unverifiable claims. Here is the exact engineering architecture used in every deployment.'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECURITY_POINTS.map((point, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800"
              >
                <Icon className="w-5 h-5 text-emerald-400 mb-4" />
                <h3 className="text-base font-bold text-white mb-2">
                  {point.title[lang]}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {point.desc[lang]}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-sm">
          <p className="text-slate-300">
            {lang === 'hinglish'
              ? 'Aap kabhi bhi apni poori Sheet Excel/CSV me export karke exit kar sakte hain.'
              : 'You can export your complete dataset to Excel/CSV anytime with zero exit barrier.'}
          </p>
          <Link
            to="/refund-policy"
            className="font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4 whitespace-nowrap"
          >
            {lang === 'hinglish' ? 'Data Ownership & Exit Policy padhein' : 'Read Data Ownership & Exit Policy'}
          </Link>
        </div>
      </div>
    </section>
  );
}
