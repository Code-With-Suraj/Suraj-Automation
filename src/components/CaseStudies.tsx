import { Image as ImageIcon, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CUSTOM_CASE_STUDIES, SITE_CONFIG, getWhatsAppUrl } from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';

export default function CaseStudies() {
  const { lang } = useLanguage();
  const hasPermission = SITE_CONFIG.permissions.confirmNcrClientPermissions;

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200" id="proof-of-work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
              {lang === 'hinglish' ? 'Proof of Work · Asli Kaam' : 'Proof of Work · Custom Builds'}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'hinglish'
                ? 'Custom dashboards, MRP tools aur NCR business websites.'
                : 'Custom dashboards, reconciliation apps, and NCR business sites.'}
            </h2>
          </div>

          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-emerald-700 whitespace-nowrap"
          >
            <span>{lang === 'hinglish' ? 'Sabhi Case Studies Dekhein' : 'View all case studies'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Custom Work Cards: Problem -> What we built -> Result */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {CUSTOM_CASE_STUDIES.map((cs) => (
            <article
              key={cs.id}
              className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/9] bg-slate-100 border-b border-slate-200 flex flex-col items-center justify-center p-4 text-center">
                  <ImageIcon className="w-6 h-6 text-slate-400 mb-2" />
                  <span className="font-mono text-[11px] text-slate-600">
                    {cs.screenshotPlaceholder}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-emerald-700">
                      {cs.category}
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900 mt-1">
                      {cs.title}
                    </h3>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Problem
                      </p>
                      <p className="text-slate-700 leading-relaxed">{cs.problem[lang]}</p>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        What We Built
                      </p>
                      <p className="text-slate-700 leading-relaxed">{cs.whatWeBuilt[lang]}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-white border border-slate-200">
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                        Result
                      </p>
                      <p className="font-mono text-xs text-slate-700 leading-relaxed">
                        {cs.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-white border-t border-slate-200">
                <a
                  href={getWhatsAppUrl(`Hi Suraj, mujhe "${cs.title}" jaisa custom system banwana hai.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5"
                >
                  <span>{lang === 'hinglish' ? 'Aisa system discuss karein' : 'Discuss a similar build'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* NCR Client Websites Showcase (Strictly Gated by [CONFIRM_PERMISSIONS]) */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {lang === 'hinglish' ? 'NCR Client Websites (WebSarthi)' : 'NCR Client Websites (WebSarthi)'}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {lang === 'hinglish'
                  ? 'Client naam aur screenshots sirf unki written permission ke baad hi public kiye jaate hain.'
                  : 'Client business names and screenshots are displayed publicly only after confirmed client permission.'}
              </p>
            </div>
          </div>

          {hasPermission ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {SITE_CONFIG.permissions.ncrClients.map((client) => (
                <div
                  key={client.name}
                  className="bg-white p-4 rounded-lg border border-slate-200"
                >
                  <p className="font-bold text-slate-900 text-sm">{client.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{client.type}</p>
                  <p className="font-mono text-[11px] text-emerald-700 mt-2 truncate">
                    {client.url}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 rounded-lg bg-white border border-dashed border-slate-300 flex items-start gap-3">
              <Lock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="font-mono font-bold text-amber-800 block mb-1">
                  [CONFIRM_PERMISSIONS]
                </span>
                {lang === 'hinglish'
                  ? '4 NCR client websites built hain, par permission flag confirm hone tak public names yahan show nahi kiye gaye hain. Live call par relevant demo screen-share par dikhaye ja sakte hain.'
                  : 'Completed NCR client websites are kept private until [CONFIRM_PERMISSIONS] is verified in content.ts. Relevant demos can be shown privately during our 20-min consultation call.'}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
