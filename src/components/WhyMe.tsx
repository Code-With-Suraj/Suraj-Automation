import { motion } from 'motion/react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function WhyMe() {
  const dontDo = [
    "E-commerce / online stores (Shopify etc.)",
    "Generic template-based websites",
    "Pure design/branding work only",
    "Maintaining someone else's messy code"
  ];

  const doDo = [
    "Operational systems that run your business",
    "Internal tools your team uses every day",
    "Data-driven applications with real dashboards",
    "Automation that saves hours every week",
    "GST-ready business logic for Indian SMBs"
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 text-sm font-bold tracking-wide mb-6 border border-rose-100 dark:border-rose-500/20">
            Focused Work = Better Results
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">
            What We Don't Do
            <span className="block text-2xl text-slate-500 dark:text-slate-400 mt-2 font-medium">(And Why That's Good)</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 font-body transition-colors">
            We specialize. That means we say no to some things. Specialization means every project gets focused expertise — not half-effort on something outside our core work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* What We Don't Do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-rose-50 dark:bg-rose-950/20 rounded-[2rem] p-8 md:p-10 border border-rose-100 dark:border-rose-900/50 shadow-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-bl-[100px]"></div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight flex items-center justify-between">
              We say NO to
              <X className="w-8 h-8 text-rose-500 opacity-20" />
            </h3>
            <ul className="space-y-5 relative z-10">
              {dontDo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 bg-white dark:bg-slate-800 rounded-full p-1 border border-slate-200 dark:border-slate-700 shrink-0 shadow-sm">
                    <X className="w-4 h-4 text-rose-500" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What We Focus On */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-indigo-600 rounded-[2rem] p-8 md:p-10 text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[80px]"></div>
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight flex items-center justify-between relative z-10">
              Instead, we focus on:
              <CheckCircle2 className="w-8 h-8 text-emerald-400 opacity-20" />
            </h3>
            <ul className="space-y-5 relative z-10 mb-10">
              {doDo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-indigo-100 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="mt-auto relative z-10 pt-8 border-t border-indigo-500/50">
              <p className="text-indigo-100 text-sm font-medium mb-6">
                So you get a solution that actually improves your business, not just an online store nobody manages.
              </p>
              <a 
                href="#process" 
                className="inline-flex items-center text-sm font-bold bg-white text-indigo-600 px-5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                Check if We're the Right Fit
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
