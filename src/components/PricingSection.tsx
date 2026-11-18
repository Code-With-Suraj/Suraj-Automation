import { Check, Minus, MessageSquare } from 'lucide-react';
import { PRICING_TIERS, PRICING_TERMS, getWhatsAppUrl } from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';

export default function PricingSection() {
  const { lang } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
            {lang === 'hinglish' ? 'Transparent Pricing' : 'Transparent Pricing'}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === 'hinglish'
              ? 'Saaf pricing — kya milega aur kya extra lagega, pehle se clear.'
              : 'Clear pricing ranges — with exact inclusions and exclusions.'}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {lang === 'hinglish'
              ? 'Koi surprise billing nahi. Discovery call ke baad fixed written quote milta hai.'
              : 'No surprise invoices. After our 20-minute discovery call, you receive a fixed written quote.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-xl p-6 sm:p-8 border flex flex-col justify-between ${
                tier.highlighted
                  ? 'bg-[#0B1528] text-white border-slate-800'
                  : 'bg-slate-50 text-slate-900 border-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs font-semibold mb-2">
                  <span className={tier.highlighted ? 'text-emerald-400' : 'text-emerald-700'}>
                    {tier.timeline}
                  </span>
                  {tier.highlighted && (
                    <span className="text-amber-400">
                      {lang === 'hinglish' ? 'Most Requested' : 'Most Requested'}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-extrabold mb-2">{tier.name[lang]}</h3>
                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    tier.highlighted ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {tier.subtitle[lang]}
                </p>

                <div
                  className={`p-4 rounded-lg border mb-6 font-mono text-sm font-bold tabular-nums ${
                    tier.highlighted
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-200 text-slate-900'
                  }`}
                >
                  {tier.priceRange}
                </div>

                {/* What You Get */}
                <div className="mb-5">
                  <p
                    className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                      tier.highlighted ? 'text-emerald-400' : 'text-emerald-700'
                    }`}
                  >
                    {lang === 'hinglish' ? 'Kya Included Hai' : 'What You Get'}
                  </p>
                  <ul className="space-y-2.5 text-sm">
                    {tier.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            tier.highlighted ? 'text-emerald-400' : 'text-emerald-700'
                          }`}
                        />
                        <span className={tier.highlighted ? 'text-slate-200' : 'text-slate-700'}>
                          {item[lang]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What Costs Extra */}
                <div className="mb-8">
                  <p
                    className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                      tier.highlighted ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {lang === 'hinglish' ? 'Kya Extra / Excluded Hai' : 'What Costs Extra'}
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {tier.excluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Minus
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            tier.highlighted ? 'text-slate-500' : 'text-slate-400'
                          }`}
                        />
                        <span className={tier.highlighted ? 'text-slate-400' : 'text-slate-600'}>
                          {item[lang]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={getWhatsAppUrl(`Hi Suraj, mujhe "${tier.name.en}" plan aur pricing ke baare me baat karni hai.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-sm font-bold transition-colors min-h-[44px] ${
                  tier.highlighted
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>{tier.ctaText[lang]}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Payment Terms & Support Period Notice */}
        <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200 grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div>
            <span className="font-bold text-slate-900 block mb-1">
              {lang === 'hinglish' ? 'Payment Terms:' : 'Payment Terms:'}
            </span>
            <span className="font-mono text-xs">{PRICING_TERMS.paymentTerms}</span>
          </div>
          <div>
            <span className="font-bold text-slate-900 block mb-1">
              {lang === 'hinglish' ? 'Post-Launch Support:' : 'Support Period:'}
            </span>
            <span className="font-mono text-xs">{PRICING_TERMS.supportPeriod}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
