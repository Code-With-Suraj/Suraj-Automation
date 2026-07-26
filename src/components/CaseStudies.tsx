import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "FMCG Distributor Supply Chain Automation",
      client: "North India FMCG Distributor",
      before: "Field agents taking orders on paper notebook. 4+ hours daily entering data manually into Excel with 15% billing errors.",
      after: "Automated WhatsApp ordering bot + Google Sheets ERP (SupplySarthi). Field agents book orders in 10 seconds on mobile.",
      metrics: [
        { label: "Order Booking Speed", val: "10x Faster" },
        { label: "Data Leakage", val: "0% Errors" },
        { label: "Monthly Admin Savings", val: "₹28,000" }
      ]
    },
    {
      title: "Multi-Location Bakery COGS & Recipe System",
      client: "CakeSarthi Client Chain",
      before: "Untracked raw material wastage, raw ingredient cost fluctuations wiping out 20% profit margins across 5 outlets.",
      after: "Custom COGS Analytics & Recipe BOM system. Real-time ingredient wastage alerts sent directly to WhatsApp.",
      metrics: [
        { label: "Margin Recovery", val: "+18% Profit" },
        { label: "Ingredient Leakage", val: "Audited 100%" },
        { label: "Daily WhatsApp Alerts", val: "Instant" }
      ]
    },
    {
      title: "Micro-Lending & Loan EMI Recovery Portal",
      client: "Financial Services Agency",
      before: "Manual phone calls for overdue loan EMIs, physical register books, and lost borrower payment history.",
      after: "LoanSarthi EMI recovery system with automated WhatsApp payment links & instant UPI QR codes.",
      metrics: [
        { label: "On-Time Collection", val: "94% Rate" },
        { label: "Recovery Hours Saved", val: "60 Hrs/Mo" },
        { label: "Zero Lost Records", val: "100% Cloud" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-4 border border-emerald-500/20">
            Real Business Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Proven Results & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">Operational Transformation</span>
          </h2>
          <p className="text-lg text-slate-400 font-body">
            See how our custom software systems eliminate manual friction, prevent revenue leakage, and accelerate business throughput.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 shadow-xl"
            >
              <div>
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block mb-2">{cs.client}</span>
                <h3 className="text-xl font-extrabold text-white mb-6 leading-snug">
                  {cs.title}
                </h3>

                {/* Before vs After Comparison */}
                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-900/50 text-rose-200 text-xs leading-relaxed">
                    <span className="font-bold text-rose-400 flex items-center gap-1.5 mb-1 text-[11px] uppercase tracking-wider">
                      <AlertTriangle className="w-3.5 h-3.5" /> BEFORE AUTOMATION
                    </span>
                    {cs.before}
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-900/50 text-emerald-200 text-xs leading-relaxed">
                    <span className="font-bold text-emerald-400 flex items-center gap-1.5 mb-1 text-[11px] uppercase tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5" /> AFTER CUSTOM SOFTWARE
                    </span>
                    {cs.after}
                  </div>
                </div>
              </div>

              <div>
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800 text-center">
                  {cs.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/50">
                      <span className="text-sm sm:text-base font-extrabold text-cyan-300 block">{m.val}</span>
                      <span className="text-[9px] text-slate-400 font-semibold block uppercase mt-0.5">{m.label}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20a%20similar%20case%20study%20solution%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Build Similar System For Your Business</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
