import { motion } from 'motion/react';
import { Globe, MessageCircle, Database, BarChart3, Sparkles, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhatWeOffer() {
  const services = [
    {
      title: "Custom Web Applications & SaaS",
      icon: Globe,
      desc: "Modern, high-speed web apps, portals, and SaaS platforms engineered using React, Next.js, and Node.js.",
      features: ["Custom Portal Architecture", "API Integration & Webhooks", "Responsive UI/UX Design", "Global Vercel Hosting"],
      highlight: "High-Performance Code"
    },
    {
      title: "Google Apps Script & Sheets ERPs",
      icon: Database,
      desc: "Turn Google Workspace into a zero-maintenance cloud database for inventory, billing, procurement & operations.",
      features: ["Custom Apps Script Code", "Automated Sheet Triggers", "Zero Monthly Hosting Fees", "100% Data Privacy"],
      highlight: "50% Savings vs SaaS"
    },
    {
      title: "WhatsApp Business API Automation",
      icon: MessageCircle,
      desc: "Automate real-time WhatsApp order booking, PDF GST invoice dispatches, payment alerts, and customer CRM logs.",
      features: ["Instant PDF Generation", "Bulk Status Broadcaster", "CRM Chat History", "Auto-Reminder Workflows"],
      highlight: "98% Open Rate"
    },
    {
      title: "Interactive MIS & CFO Dashboards",
      icon: BarChart3,
      desc: "Executive financial dashboards, COGS analytics, profit margins, and cash position tracking built with live charts.",
      features: ["Live Data Connectors", "Financial Profit & Loss", "COGS Leakage Alerts", "Executive PDF Reports"],
      highlight: "Real-Time Decision Intelligence"
    },
    {
      title: "AI Model & Gemini API Integrations",
      icon: Sparkles,
      desc: "Smart OCR invoice reading, auto-categorization of expenses, automated support bots, and Gemini AI search.",
      features: ["Document OCR Processing", "Smart Categorization", "AI Sales Assistants", "Custom AI Prompt Logic"],
      highlight: "Next-Gen AI Capabilities"
    },
    {
      title: "Internal Software Systems (CRM/ERP)",
      icon: Building2,
      desc: "Tailor-made internal business software: Inventory, Supply Chain, HR Attendance, Payroll, and Micro-Lending.",
      features: ["Inventory & Reorder Levels", "Staff Attendance & Payroll", "Loan EMI Collection", "Multi-User Role Access"],
      highlight: "Built To Your Exact Needs"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Mesh */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 font-semibold text-xs uppercase tracking-wider mb-4 border border-blue-500/20">
            Our Core Engineering Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Software Solutions That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">Run Businesses</span>
          </h2>
          <p className="text-lg text-slate-400 font-body">
            From sleek web applications to automated Google Workspace ERPs and WhatsApp triggers — we build software tailored to your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-slate-850/80 rounded-3xl p-8 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-800/80 px-3 py-1 rounded-full">
                      {service.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6 font-body">
                    {service.desc}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20discuss%20your%20software%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-cyan-300 transition-colors pt-4 border-t border-slate-800 group/link"
                >
                  <span>Request Service Scope & Proposal</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg hover:shadow-blue-500/30"
          >
            <span>View All Service Plans & Packages</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
