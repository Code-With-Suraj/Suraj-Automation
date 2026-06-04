import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Frown, 
  Clock, 
  DollarSign, 
  UserX, 
  Smartphone, 
  AlertCircle, 
  CheckCircle, 
  FileSpreadsheet, 
  Share2, 
  ShieldAlert, 
  Zap, 
  CheckCircle2, 
  Smartphone as Phone, 
  Users 
} from 'lucide-react';

export default function Problem() {
  const [activeTab, setActiveTab] = useState<'chaos' | 'sarthi'>('chaos');

  const problems = [
    { 
      icon: <Frown className="w-6 h-6 text-rose-500" />, 
      title: "Data scattered in WhatsApp and Excel solution",
      text: "Stop searching through chats. Get a centralized small business data management system India." 
    },
    { 
      icon: <Clock className="w-6 h-6 text-amber-500" />, 
      title: "Business reports automatically kaise banaye?",
      text: "Manual work kaise reduce kare business mein? We automate your reports so they are ready every morning." 
    },
    { 
      icon: <DollarSign className="w-6 h-6 text-emerald-500" />, 
      title: "Outstanding payment kaise track kare automatically?",
      text: "Never miss a payment. Get an automated tracking system that sends alerts for pending dues." 
    },
    { 
      icon: <UserX className="w-6 h-6 text-indigo-500" />, 
      title: "Staff mistakes kaise control kare system se?",
      text: "Reduce human error with role-based access and automated validation in your business system." 
    },
    { 
      icon: <Smartphone className="w-6 h-6 text-sky-500" />, 
      title: "Excel se automation kaise kare small business?",
      text: "Move beyond simple sheets. Transform your Excel files into a powerful automation engine." 
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 text-sm font-bold tracking-wide mb-6 border border-rose-100 dark:border-rose-500/20">
            Ideal Clients
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">
            Small Business Data Management System India
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-body transition-colors">
            We help businesses solve the "data scattered in WhatsApp and Excel" problem with automated solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Current Pain Points list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6 flex flex-col justify-center"
          >
            {problems.map((prob, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl shrink-0 animate-pulse">
                  {prob.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">{prob.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{prob.text}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Side: Interactive Workflow Comparison (Visual Playground) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-between bg-slate-900 dark:bg-slate-950 rounded-[2.5rem] border border-slate-800 p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 w-full">
              {/* Heading */}
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
                  System vs Static Webpage
                </h3>
                <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">
                  Click tabs below to see comparison in action
                </p>
              </div>

              {/* Slider Tabs */}
              <div className="grid grid-cols-2 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-850 mb-8 max-w-md mx-auto">
                <button
                  onClick={() => setActiveTab('chaos')}
                  className={`py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all uppercase flex items-center justify-center gap-2 ${
                    activeTab === 'chaos'
                      ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 font-extrabold shadow-[inset_0_1px_2px_rgba(239,68,68,0.2)]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  Manual Mess (Before)
                </button>
                <button
                  onClick={() => setActiveTab('sarthi')}
                  className={`py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all uppercase flex items-center justify-center gap-2 ${
                    activeTab === 'sarthi'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-extrabold shadow-[inset_0_1px_2px_rgba(16,185,129,0.2)]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Zap className="w-4 h-4 shrink-0" />
                  Sarthi Automation
                </button>
              </div>

              {/* Console comparison body */}
              <div className="rounded-2xl bg-slate-950 p-5 border border-slate-850/80 min-h-[300px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {activeTab === 'chaos' ? (
                    <motion.div
                      key="chaos"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 pb-3 border-b border-rose-950/40">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
                        <p className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest">
                          Warning: Operational Bottleneck
                        </p>
                      </div>

                      <div className="space-y-3 font-body text-xs sm:text-sm text-slate-300">
                        <div className="flex items-start gap-3 p-3 bg-rose-950/10 rounded-xl border border-rose-950/30">
                          <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-slate-200">Scattered WhatsApp order taking</p>
                            <p className="text-xs text-slate-400 mt-1">Customer texts on 3 different chats. Admin miscounts quantity or misses item details.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 bg-rose-950/10 rounded-xl border border-rose-950/30">
                          <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-slate-200">Manual Excel billing entry</p>
                            <p className="text-xs text-slate-400 mt-1">Staff types invoices one-by-one. Formulas get overwritten, pending due alerts get left completely unnotified.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 bg-rose-950/10 rounded-xl border border-rose-950/30">
                          <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-slate-200">No morning daily reports built</p>
                            <p className="text-xs text-slate-400 mt-1">Owner stays back till 11:30 PM with staff just to understand total collections and stock leftover balances.</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sarthi"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 pb-3 border-b border-emerald-950/40">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <p className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                          Normal State: Streamined Workflow
                        </p>
                      </div>

                      <div className="space-y-3 font-body text-xs sm:text-sm text-slate-300">
                        <div className="flex items-start gap-3 p-3 bg-emerald-950/10 rounded-xl border border-emerald-950/20">
                          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-slate-100">3-Clicks Ordering Web App</p>
                            <p className="text-xs text-slate-400 mt-1">Customer adds items on Sarthi interface. Done. Direct auto-notifications with receipts triggers in WhatsApp.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 bg-emerald-950/10 rounded-xl border border-emerald-950/20">
                          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-slate-100">Centrally Sync'd Ledger & Google Sheet</p>
                            <p className="text-xs text-slate-400 mt-1">Database automatically structures compliance GST invoices in PDF. Overdue balances alert admins via scheduled SMS triggers.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 bg-emerald-950/10 rounded-xl border border-emerald-950/20">
                          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-slate-100">Automated Daily PDF Reports at 8:00 AM</p>
                            <p className="text-xs text-slate-400 mt-1">Google App Script compiles stats. You get a tidy summary of sales, staff entries, and cash flow directly on email.</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Micro-interactive prompt footer */}
                <div className="pt-4 mt-4 border-t border-slate-850 flex items-center justify-between text-xs text-slate-450">
                  <span className="font-mono text-slate-400">Status: {activeTab === 'chaos' ? '🔴 Time Leakage' : '🟢 100% Automatic'}</span>
                  <span>Click other tab to switch view</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

