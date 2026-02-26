import { motion } from 'motion/react';
import { CheckCircle2, Database, Mail, HardDrive, FileText, Code } from 'lucide-react';

export default function WhatIDo() {
  const tools = [
    { name: "Google Sheets", icon: <Database className="w-6 h-6" /> },
    { name: "Gmail", icon: <Mail className="w-6 h-6" /> },
    { name: "Google Drive", icon: <HardDrive className="w-6 h-6" /> },
    { name: "Google Forms", icon: <FileText className="w-6 h-6" /> },
    { name: "Google Apps Script", icon: <Code className="w-6 h-6" /> },
  ];

  const results = [
    "Automated workflows",
    "Real-time dashboards",
    "Error-free reporting",
    "Owner-friendly system",
    "Low cost, no heavy subscription"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            I Build Custom Business Systems Using Google Apps Script
          </h2>
          <p className="text-lg text-slate-600">
            Main ready-made software sell nahi karta. Main aapke business ke hisaab se system build karta hoon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Using the Google Ecosystem:</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="text-blue-500">{tool.icon}</div>
                  <span className="font-medium text-slate-700">{tool.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Result?</h3>
            <div className="space-y-4">
              {results.map((result, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-slate-700">{result}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
