import { motion } from 'motion/react';
import { Globe, MessageCircle, Database, CheckCircle2 } from 'lucide-react';

export default function WhatWeOffer() {
  const services = [
    {
      num: "01",
      title: "Custom Business Websites",
      icon: <Globe className="w-8 h-8 text-sky-500" />,
      desc: "Simple, fast, and professional websites designed to represent your business and generate leads. Built for first impressions that convert.",
      features: ["Landing Pages", "Lead Capture", "WhatsApp Integration", "Mobile Responsive"],
      color: "sky"
    },
    {
      num: "02",
      badge: "⭐ CORE OFFER",
      title: "WhatsApp Based Business System Solution",
      icon: <MessageCircle className="w-8 h-8 text-emerald-500" />,
      desc: "Custom WhatsApp se order management system kaise banaye? We build it for you. Integrate WhatsApp with your business logic for seamless operations.",
      features: ["WhatsApp Automation", "Order Tracking", "Customer CRM", "Payment Alerts"],
      color: "emerald"
    },
    {
      num: "03",
      title: "Google Sheets Business Automation Service",
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      desc: "Professional google sheets inventory system for shop and small businesses. Excel se business system kaise banaye — we handle the automation for you.",
      features: ["Inventory System", "Auto Reports", "Data Management", "Apps Script"],
      color: "indigo"
    }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/50 rounded-l-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            What We Offer
          </h2>
          <p className="text-2xl text-indigo-400 font-bold mb-4 font-body">
            Automation Services
          </p>
          <p className="text-xl text-slate-400 font-body">
            Choose what fits your business stage — from simple websites to full custom software.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-slate-900 p-8 rounded-[2rem] border ${service.badge ? 'border-emerald-500/50 shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)] md:-translate-y-4' : 'border-slate-800'} relative flex flex-col group hover:border-slate-700 transition-all`}
            >
              {service.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase shadow-lg whitespace-nowrap">
                  {service.badge}
                </div>
              )}
              
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:bg-slate-700 transition-colors">
                  {service.icon}
                </div>
                <div className="text-5xl font-black text-slate-800 font-mono">
                  {service.num}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 tracking-tight min-h-[4rem]">
                {service.title}
              </h3>
              
              <p className="text-slate-400 mb-8 flex-grow">
                {service.desc}
              </p>
              
              <div className="space-y-3 pt-8 border-t border-slate-800">
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-5 h-5 text-${service.color}-500 shrink-0`} />
                    <span className="text-slate-300 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
