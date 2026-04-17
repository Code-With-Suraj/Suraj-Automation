import { motion } from 'motion/react';
import { CheckCircle2, Database, Mail, HardDrive, FileText, Code } from 'lucide-react';

export default function WhatIDo() {
  const tools = [
    { name: "Google Sheets", icon: <Database className="w-5 h-5 text-emerald-500" /> },
    { name: "Gmail", icon: <Mail className="w-5 h-5 text-rose-500" /> },
    { name: "Google Drive", icon: <HardDrive className="w-5 h-5 text-blue-500" /> },
    { name: "Google Forms", icon: <FileText className="w-5 h-5 text-purple-500" /> },
    { name: "Google Apps Script", icon: <Code className="w-5 h-5 text-amber-500" /> },
  ];

  const results = [
    "Eliminated 50% manual data entry",
    "Real-time synchronized dashboards",
    "Zero-error automated reporting",
    "Simple owner-friendly interface",
    "Fraction of standard ERP costs"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Custom Automation Systems
          </h2>
          <p className="text-xl text-slate-600 font-body">
            I don't sell bloated software. I build precision tools for your exact workflows using the built-in power of Google Workspace.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 bg-[#F8F9FA] rounded-[2rem] p-10 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-slate-300 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors"></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Powered by Google Ecosystem</h3>
            <div className="flex flex-wrap gap-4 relative z-10">
              {tools.map((tool, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white px-5 py-3.5 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all">
                  <div className="bg-slate-50 border border-slate-100 p-2 rounded-lg">{tool.icon}</div>
                  <span className="font-semibold text-slate-700">{tool.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">Custom Infrastructure</p>
                <p className="text-sm text-slate-500">Secure, scalable, and entirely yours</p>
              </div>
              <div className="h-12 w-12 bg-slate-900 rounded-full flex items-center justify-center shadow-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 bg-slate-950 rounded-[2rem] p-10 text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500 rounded-full blur-[80px] opacity-40"></div>
            <h3 className="text-2xl font-bold mb-8 tracking-tight text-white">The Bottom Line</h3>
            <div className="space-y-6 relative z-10">
              {results.map((result, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="bg-emerald-500/10 p-1.5 rounded-full mt-0.5 border border-emerald-500/20">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-lg text-slate-300 font-medium leading-tight">{result}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
