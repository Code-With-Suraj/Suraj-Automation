import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Star, ShieldCheck, CheckCircle2, Play, Sparkles, MessageSquare, Database, FileSpreadsheet, Activity, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'overview' | 'automation' | 'whatsapp'>('overview');

  const words = [
    "Custom Web Applications",
    "Google Apps Script ERPs",
    "WhatsApp Business Automation",
    "Interactive MIS & CFO Dashboards",
    "AI-Powered Operational Systems"
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1850);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 25 : 50);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] pt-28 pb-20 overflow-hidden bg-slate-950 text-white">
      {/* Abstract Background Gradients & Mesh */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[140px]" />
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-600/25 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Main Hero Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 py-2 px-5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold tracking-wide mb-8 shadow-xl backdrop-blur-xl"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-cyan-400 font-extrabold uppercase tracking-widest text-[11px]">POSITIONING PROMISE</span>
            <span className="text-slate-400">|</span>
            <span>Custom Software Architecture & Automation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-extrabold tracking-tight mb-8 leading-[1.08] font-sans"
          >
            We don't just build websites. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
              We build software that runs businesses.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="min-h-[4.5rem] flex flex-col sm:flex-row items-center justify-center text-lg sm:text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto mb-8 bg-slate-900/80 backdrop-blur-xl py-3.5 px-6 rounded-2xl border border-slate-800/80 shadow-2xl"
          >
            <span className="text-slate-400 mr-2 font-semibold shrink-0">Specializing in:</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 font-extrabold tracking-tight relative">
              {words[index].substring(0, subIndex)}
              <span className={`inline-block w-[3px] h-[0.9em] ml-1 bg-cyan-400 align-middle ${blink ? 'opacity-100' : 'opacity-0'}`} />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-body"
          >
            Replace chaotic spreadsheets, manual WhatsApp messaging, and expensive SaaS subscriptions with high-speed custom internal software. Cut operational development costs by <span className="font-bold text-white underline decoration-cyan-400">50%</span> with zero recurring monthly server fees.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          >
            <a
              href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%2015-min%20software%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-base transition-all shadow-[0_0_35px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] flex items-center justify-center gap-3 group hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5 text-cyan-200" />
              <span>Book Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-bold text-base transition-all flex items-center justify-center gap-2 group hover:-translate-y-0.5"
            >
              <span>Explore Pre-Built Software</span>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Ratings & Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-slate-800/80 text-xs sm:text-sm text-slate-400"
          >
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">4.9/5 Rating</span>
              <span>(50+ Enterprise Clients)</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Google Drive Data Ownership</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Zero Monthly Subscriptions</span>
            </div>
          </motion.div>
        </div>

        {/* Interactive Dashboard Mockup Showcase (Stripe/Linear/Vercel Style) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-5xl mx-auto bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden relative"
        >
          {/* Mac Window Header Bar */}
          <div className="px-6 py-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-4 text-xs font-mono text-slate-400 font-semibold">surajdx-enterprise-core-v4.2</span>
            </div>

            {/* Dashboard Tabs */}
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'overview' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                Executive Overview
              </button>
              <button
                onClick={() => setActiveTab('automation')}
                className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'automation' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                Apps Script Engine
              </button>
              <button
                onClick={() => setActiveTab('whatsapp')}
                className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'whatsapp' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                WhatsApp Automation
              </button>
            </div>
          </div>

          {/* Interactive Window Content */}
          <div className="p-6 md:p-8 bg-slate-900 text-slate-100">
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                    <span className="text-xs text-slate-400 font-semibold uppercase">Monthly Automated Invoices</span>
                    <h4 className="text-2xl font-bold text-white mt-1">₹14,85,000</h4>
                    <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1 mt-1">
                      <Activity className="w-3.5 h-3.5" /> 100% Auto-Dispatched via WhatsApp
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                    <span className="text-xs text-slate-400 font-semibold uppercase">Hours Saved Per Week</span>
                    <h4 className="text-2xl font-bold text-cyan-400 mt-1">42.5 Hours</h4>
                    <span className="text-[11px] text-slate-400 font-medium mt-1 block">Equivalent to 1.5 Full Time Staff</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                    <span className="text-xs text-slate-400 font-semibold uppercase">Annual Software Bills</span>
                    <h4 className="text-2xl font-bold text-emerald-400 mt-1">₹0.00 / Mo</h4>
                    <span className="text-[11px] text-emerald-400 font-medium mt-1 block">Lifetime Free Google Workspace DB</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                      <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                      Live Custom ERP Activity Feeds
                    </h4>
                    <span className="text-[10px] text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded-full border border-cyan-800 font-mono">STATUS: ACTIVE</span>
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300">[10:42 AM] Vendor PO #8842 Auto-Compiled</span>
                      <span className="text-emerald-400 font-bold">PDF Sent To WhatsApp</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300">[10:39 AM] Staff Attendance Checked In</span>
                      <span className="text-blue-400 font-bold">KarmSarthi DB Synced</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'automation' && (
              <div className="space-y-4 animate-in fade-in duration-300 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 leading-relaxed">
                  <span className="text-purple-400">// Custom Google Apps Script Event Trigger</span><br />
                  <span className="text-blue-400">function</span> <span className="text-yellow-300">onFormSubmitAndDispatchInvoice</span>(e) &#123;<br />
                  &nbsp;&nbsp;<span className="text-blue-400">const</span> sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();<br />
                  &nbsp;&nbsp;<span className="text-blue-400">const</span> pdfFile = DriveApp.createInvoicePDF(e.values);<br />
                  &nbsp;&nbsp;<span className="text-emerald-400">WhatsAppAPI</span>.sendDocument(&#123; recipient: e.values[2], document: pdfFile &#125;);<br />
                  &#125;
                </div>
                <p className="text-xs text-slate-400 font-sans">
                  Runs instantly inside your Google Cloud environment. Zero external server maintenance.
                </p>
              </div>
            )}

            {activeTab === 'whatsapp' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="max-w-md mx-auto p-4 bg-emerald-950/60 border border-emerald-800/80 rounded-2xl text-xs text-emerald-200">
                  <div className="flex items-center gap-2 mb-2 font-bold text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                    Automated Business WhatsApp Receipt
                  </div>
                  <p className="leading-relaxed font-sans">
                    "Hello Rajeshji! 🧾 Your GST Tax Invoice #INV-1092 for ₹12,450 has been auto-generated. Click below to view your verified PDF receipt:"
                  </p>
                  <div className="mt-3 p-2 bg-emerald-900/80 rounded-lg text-center font-bold text-white text-[11px] hover:bg-emerald-800 transition-colors cursor-pointer">
                    📥 Download Invoice PDF
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
