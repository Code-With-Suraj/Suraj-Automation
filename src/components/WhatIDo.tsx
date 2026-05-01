import { motion } from 'motion/react';
import { Layers, LineChart, Link as LinkIcon, FileCheck } from 'lucide-react';

export default function WhatIDo() {
  const tools = [
    { 
      name: "Operations Automation", 
      desc: "Convert repetitive daily tasks into automated workflows. Orders, alerts, follow-ups — all handled by the system.",
      icon: <Layers className="w-6 h-6 text-indigo-500" /> 
    },
    { 
      name: "Data Tracking & Dashboards", 
      desc: "Real-time visibility on payments, inventory, clients, and staff. See your business clearly without digging through WhatsApp.",
      icon: <LineChart className="w-6 h-6 text-emerald-500" /> 
    },
    { 
      name: "Google Ecosystem Integration", 
      desc: "Built on Google Sheets, Apps Script, and Web Apps — tools your team already uses, supercharged with automation.",
      icon: <LinkIcon className="w-6 h-6 text-blue-500" /> 
    },
    { 
      name: "GST-Ready Business Logic", 
      desc: "Invoice generation, CGST/SGST/IGST auto-switching, ledger, ageing reports — built for Indian business compliance.",
      icon: <FileCheck className="w-6 h-6 text-rose-500" /> 
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-slate-50 dark:bg-slate-800/30 -z-10 rounded-l-[100px] transition-colors"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-sm font-bold tracking-wide mb-6 border border-indigo-100 dark:border-indigo-500/20">
            Positioning
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">
            Custom Business Software for Small Business India
          </h2>
          <p className="text-2xl text-indigo-600 dark:text-indigo-400 font-bold mb-4 font-body transition-colors">
            Excel se System tak.
          </p>
          <p className="text-xl text-slate-600 dark:text-slate-300 font-body transition-colors mb-4">
            Suraj Automation gives small businesses a practical path from scattered sheets to complete operational systems.
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-body transition-colors">
            Most businesses need more than a beautiful website. We provide a specialized Google Sheets business automation service that solves real business problems. We build working systems that run your logic and track everything automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl dark:shadow-none hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {tool.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors">
                {tool.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                {tool.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
