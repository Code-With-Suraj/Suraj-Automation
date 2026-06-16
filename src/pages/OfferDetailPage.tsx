import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { SPECIAL_OFFERS } from '../data/offersData';
import { 
  ArrowLeft, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle, 
  Award, 
  DollarSign, 
  ArrowRight,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function OfferDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  const offer = SPECIAL_OFFERS.find(o => o.slug === slug);

  // If offer doesn't exist, redirect to Offers page
  if (!offer) {
    return <Navigate to="/offers" replace />;
  }

  // Set the SEO target keywords and descriptions exactly as requested
  useSEO(
    `${offer.title} | Suraj Automation`,
    offer.metaDescription,
    offer.keywords
  );

  const IconComponent = offer.icon;
  const whatsappUrl = `https://wa.me/918851666208?text=${encodeURIComponent(offer.whatsappMsg)}`;

  return (
    <main className="pt-28 pb-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link 
          to="/offers" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-650 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Special Offers
        </Link>

        {/* Hero Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 md:p-12 shadow-sm mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent -z-10" />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 rounded-lg text-xs font-black uppercase tracking-widest mb-6">
              <IconComponent className="w-4 h-4" />
              Special Premium Deal
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
              {offer.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-650 dark:text-slate-350 font-medium leading-relaxed mb-8">
              {offer.overview}
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-slate-50 dark:bg-slate-950/80 border border-slate-150 dark:border-slate-855 rounded-2xl px-6 py-3.5">
                <span className="block text-[10px] text-slate-450 uppercase font-black tracking-wider">Starting Investment</span>
                <span className="text-3xl font-black text-slate-900 dark:text-white">{offer.startingPrice}</span>
              </div>
              {offer.monthlyMaintenance && (
                <div className="bg-slate-50 dark:bg-slate-950/80 border border-slate-150 dark:border-slate-855 rounded-2xl px-6 py-3.5">
                  <span className="block text-[10px] text-slate-450 uppercase font-black tracking-wider">Monthly Coverage</span>
                  <span className="text-xl font-bold text-slate-950 dark:text-white">{offer.monthlyMaintenance}</span>
                </div>
              )}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-555 dark:hover:bg-indigo-500 text-white rounded-2xl font-black text-sm flex items-center gap-2.5 shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all w-full sm:w-auto justify-center"
              >
                <MessageSquare className="w-5 h-5 fill-white/10" />
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Two Column details: Benefits vs pricing features */}
        <div className="grid md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Key Benefits */}
          <div className="md:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 shadow-sm space-y-6">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Key Benefits & Features
            </h2>
            
            <div className="space-y-6">
              {offer.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-semibold">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Packages Included */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 shadow-sm">
              <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-5 border-b border-slate-100 dark:border-slate-800/80 pb-4">
                What&apos;s Included
              </h2>
              <ul className="space-y-3.5">
                {offer.whatsIncluded.map((item, wIdx) => (
                  <li key={wIdx} className="flex items-start gap-2 text-sm text-slate-650 dark:text-slate-350 font-semibold leading-relaxed">
                    <span className="text-indigo-650 dark:text-indigo-400 font-bold mr-1 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Success Snapshot card */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-8 shadow-md border border-white/5 relative overflow-hidden">
              <div className="absolute top-2 right-4 text-5xl font-black text-white/5 font-mono select-none">100%</div>
              <p className="text-indigo-300 text-[10px] font-black uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                Client Success Snapshot
              </p>
              <p className="text-sm md:text-base leading-relaxed text-slate-100 font-medium italic">
                &quot;<span className="font-extrabold text-indigo-300">{offer.clientSuccess.clientType}</span> {offer.clientSuccess.text}&quot;
              </p>
            </div>
          </div>

        </div>

        {/* Risk Reducer Framework Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-4 mb-6">
            <ShieldCheck className="w-5 h-5 text-indigo-500" />
            Risk Reducers & Guarantees
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {offer.riskReducers.map((risk, rIdx) => (
              <div key={rIdx} className="bg-slate-50 dark:bg-slate-950/60 border border-slate-150 dark:border-slate-855 rounded-2xl p-5 space-y-2">
                <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                  {risk.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed font-semibold">
                  {risk.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Page Bottom High-converting Call To Action */}
        <div className="bg-slate-900 dark:bg-slate-950 text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/10 via-purple-900/5 to-transparent -z-10" />
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
            {offer.ctaText}
          </h2>
          <p className="text-slate-350 max-w-xl mx-auto text-sm md:text-base mb-8 font-semibold">
            {offer.ctaSubtext} Just send a message over WhatsApp and we&apos;ll schedule your secure processes audit call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-550 text-white rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 w-full sm:w-auto"
            >
              <MessageSquare className="w-5 h-5 fill-white/10" />
              Book or Request via WhatsApp
            </a>
            <Link
              to="/offers"
              className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/10 rounded-xl font-bold text-sm w-full sm:w-auto flex items-center justify-center"
            >
              Back to Special Deals
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
