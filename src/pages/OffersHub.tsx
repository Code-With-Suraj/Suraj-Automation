import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SPECIAL_OFFERS, OfferData } from '../data/offersData';
import { ArrowRight, Sparkles, CheckCircle, Flame, Tag, ShieldCheck } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function OffersHub() {
  useSEO(
    'Special Custom Offers | Suraj Automation',
    'Boost your small business output. Explore our exclusive business automation offers starting at just ₹1499. Google Sheets automation, custom Excel dashboards, Google Apps Script and custom web solutions with zero server cost.',
    'business automation offers, excel dashboards India, google sheets developer, custom web systems price'
  );

  return (
    <main className="pt-28 pb-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      
      {/* Hero Banner Grid */}
      <section className="relative overflow-hidden mb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-emerald-950/5 -z-10 rounded-3xl max-w-7xl mx-auto" />
        <div className="max-w-7xl mx-auto py-16 px-6 sm:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 rounded-full text-xs font-black uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500/10 animate-spin animate-duration-3000" />
            Limited-Time Special Packages
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
            Pristine Custom Systems<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-650 via-purple-500 to-emerald-500 font-extrabold">
              Affordable Starting Prices
            </span>
          </h1>
          
          <p className="text-lg text-slate-650 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Choose your automated system blueprint below. We design, deploy, and support tailored workflows in your own Workspace environment with zero monthly subscription overheads.
          </p>
        </div>
      </section>

      {/* Grid of Offers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {SPECIAL_OFFERS.map((offer, idx) => {
            const IconComponent = offer.icon;
            
            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 group hover:-translate-y-1"
                id={`offer-card-${offer.id}`}
              >
                {/* Custom High-Fidelity Interactive Thumbnail Representation */}
                <div className={`h-56 bg-gradient-to-br ${offer.colorTheme.gradient} p-0.5 relative overflow-hidden group-hover:opacity-95 transition-all`}>
                  <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[1px] flex flex-col justify-between p-6">
                    
                    {/* Header Details */}
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white shadow-lg">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="bg-emerald-500 text-white font-black uppercase text-[10px] tracking-wider px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1">
                        <Tag className="w-3.5 h-3.5" />
                        Best Value
                      </span>
                    </div>

                    {/* Interactive representation representing what the user receives */}
                    {offer.id === "sheets-automation" && (
                      <div className="absolute bottom-4 right-4 left-24 h-28 bg-slate-950/90 rounded-xl border border-white/10 p-3 font-mono text-[9px] text-emerald-400 overflow-hidden flex flex-col justify-between shadow-2xl">
                        <div className="flex justify-between text-slate-500 border-b border-white/10 pb-1">
                          <span>pos_import.gs</span>
                          <span className="text-emerald-500 animate-pulse font-bold">● AUTOMATED</span>
                        </div>
                        <div className="space-y-1 text-slate-300 py-1 flex-grow">
                          <p className="text-indigo-300">function runDailyIngest() {"{"}</p>
                          <p className="pl-2">let sheet = SpreadApp.getActive();</p>
                          <p className="pl-2">let logs = sheet.appendRow([Date.now(), &quot;POS_SYNC&quot;, 18900]);</p>
                          <p className="text-indigo-300">{"}"}</p>
                        </div>
                        <div className="text-slate-500 text-right text-[8px] border-t border-white/10 pt-1">
                          Rows: <span className="text-yellow-400 font-bold">Auto Ingested +1</span>
                        </div>
                      </div>
                    )}

                    {offer.id === "excel-dashboard" && (
                      <div className="absolute bottom-4 right-4 left-24 h-28 bg-slate-950/90 rounded-xl border border-white/10 p-3 flex flex-col justify-between shadow-2xl">
                        <div className="flex justify-between items-center border-b border-white/10 pb-1.5 text-slate-400 font-mono text-[8px]">
                          <span>SALES MIS DASHBOARD</span>
                          <span className="text-indigo-400 font-extrabold">KPIs LIVE</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 py-1 flex-grow items-center">
                          <div className="bg-white/5 p-1 rounded border border-white/5 text-center">
                            <span className="block text-[8px] text-slate-400">MARGIN</span>
                            <span className="text-[10px] font-black text-emerald-400">+22.4%</span>
                          </div>
                          <div className="bg-white/5 p-1 rounded border border-white/5 text-center">
                            <span className="block text-[8px] text-slate-400">UNITS</span>
                            <span className="text-[10px] font-black text-indigo-400">14.8K</span>
                          </div>
                          <div className="bg-white/5 p-1 rounded border border-white/5 text-center">
                            <span className="block text-[8px] text-slate-400">REVENUE</span>
                            <span className="text-[10px] font-black text-yellow-400">₹8.4L</span>
                          </div>
                        </div>
                        <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 w-[78%] rounded-full" />
                        </div>
                      </div>
                    )}

                    {offer.id === "apps-script" && (
                      <div className="absolute bottom-4 right-4 left-24 h-28 bg-slate-950/90 rounded-xl border border-white/10 p-3 font-mono text-[8px] text-blue-400 overflow-hidden flex flex-col justify-between shadow-2xl">
                        <div className="flex justify-between text-slate-500 border-b border-white/5 pb-1">
                          <span>workspace_triggers.js</span>
                          <span className="text-indigo-400 animate-pulse">Running Triggers...</span>
                        </div>
                        <div className="space-y-1 text-slate-400 py-1">
                          <p className="text-slate-500">// Trigger pipeline</p>
                          <p><span className="text-indigo-300">Gmail</span>.sendMail(&quot;admin@&quot;, &quot;PDF Contract&quot;);</p>
                          <p><span className="text-emerald-400">Drive</span>.createFolder(&quot;Client_Folder_892&quot;);</p>
                        </div>
                        <p className="text-[8px] text-emerald-400 mt-1">✓ Process completed under 3.5s</p>
                      </div>
                    )}

                    {offer.id === "web-app-sheets" && (
                      <div className="absolute bottom-4 right-4 left-24 h-28 bg-slate-950/90 rounded-xl border border-white/10 p-2.5 flex flex-col justify-between shadow-2xl">
                        <div className="flex justify-between items-center border-b border-white/10 pb-1">
                          <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          </div>
                          <span className="text-[8px] text-slate-500 font-mono">booking-app.vercel.app</span>
                        </div>
                        <div className="space-y-1.5 py-1 font-sans">
                          <div className="flex justify-between text-[8px]">
                            <span className="text-slate-400">Service Name:</span>
                            <span className="text-white font-bold">Standard Wash</span>
                          </div>
                          <div className="flex justify-between text-[8px]">
                            <span className="text-slate-400">Assigned Team:</span>
                            <span className="text-indigo-400 font-bold">Crew Alpha</span>
                          </div>
                        </div>
                        <button className="bg-purple-600 text-white font-black py-1.5 rounded text-[8px] text-center w-full uppercase tracking-wider">
                          Submit Reservation Data
                        </button>
                      </div>
                    )}

                    {/* Left corner titles */}
                    <div className="relative text-left z-10 select-none">
                      <span className="text-[10px] text-indigo-200 dark:text-indigo-300 tracking-wider inline-block uppercase font-black mb-1">
                        Suraj Automation System
                      </span>
                      <h3 className="text-lg font-extrabold text-white leading-tight">
                        {offer.title.split(' ')[0]} Ecosystem
                      </h3>
                    </div>

                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between">
                      <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors">
                        {offer.title}
                      </h2>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-semibold">
                      {offer.overview.slice(0, 155)}...
                    </p>

                    <table className="w-full text-left text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-2">
                      <tbody>
                        <tr className="border-b border-slate-50 dark:border-slate-900/50">
                          <td className="py-2.5 font-bold text-slate-650 dark:text-slate-300">📦 Starting Cost</td>
                          <td className="py-2.5 text-right font-black text-slate-900 dark:text-white text-sm">{offer.startingPrice}</td>
                        </tr>
                        {offer.monthlyMaintenance && (
                          <tr className="border-b border-slate-50 dark:border-slate-900/50">
                            <td className="py-2.5 font-bold text-slate-650 dark:text-slate-300">🛠️ Maintenance</td>
                            <td className="py-2.5 text-right font-black text-purple-650 dark:text-purple-400 text-xs">{offer.monthlyMaintenance}</td>
                          </tr>
                        )}
                        <tr>
                          <td className="py-2.5 font-bold text-slate-650 dark:text-slate-300">👥 Success Snapshot</td>
                          <td className="py-2.5 text-right text-[10px] text-emerald-650 dark:text-emerald-400 font-extrabold">Save Hours Weekly</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="pt-6 border-t border-slate-100 dark:border-slate-850 mt-6 flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      to={`/offers/${offer.slug}`}
                      className="w-full text-center px-5 py-3.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-extrabold text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                      id={`btn-learn-more-${offer.id}`}
                    >
                      Learn More & Features
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Modern Client Onboarding Framework Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-slate-900 dark:bg-slate-950 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent -z-10" />
          <div className="max-w-3xl relative">
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-4">
              ✓ Client Onboarding Guarantees
            </span>
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">
              Secure Operations, Complete Privacy
            </h3>
            <p className="text-slate-450 leading-relaxed text-sm md:text-base mb-6 font-semibold">
              All automation code is deployed securely into your personal Google Workspace. We never host your production database, meaning your customer lists and financial tallies stay 100% private to you.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-bold">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                Lifetime Source Rights
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-bold">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                Zero Ongoing Server Costs
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-bold">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                7-14 Days Launch Cover
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
