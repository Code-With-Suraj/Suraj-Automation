import { motion } from 'motion/react';
import { Target, CheckCircle2 } from 'lucide-react';

export default function WhoIsThisFor() {
  const categories = [
    "Small business owners managing everything in Excel",
    "Businesses struggling with manual data & errors",
    "Teams using WhatsApp for operations",
    "Companies needing dashboards & reporting",
    "Distributors, retailers, and service agencies",
    "Dairy, agriculture & FMCG suppliers",
    "Coaching institutes & service businesses",
    "Anyone tired of messy, unorganized operations"
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-sm font-bold tracking-wide mb-8 border border-indigo-100 dark:border-indigo-500/20">
              <Target className="w-4 h-4" />
              Target Audience
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              Who Should Work With Suraj Automation?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-body">
              If your business relies heavily on manual intervention to move data from one screen to another, we can help.
            </p>
            
            <div className="space-y-4">
              {categories.map((cat, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="bg-emerald-100 dark:bg-emerald-500/10 p-1 rounded-full mt-0.5 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-lg">{cat}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-sky-500 rounded-[2.5rem] blur-3xl opacity-20 dark:opacity-40"></div>
            <div className="bg-slate-900 dark:bg-slate-950 border border-slate-800 rounded-[2.5rem] p-10 relative overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                alt="Business collaboration" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-slate-900/80"></div>
              
              <div className="relative z-10 text-center">
                <p className="text-xl md:text-2xl text-slate-300 font-medium mb-6">
                  If your business runs on <span className="text-emerald-400 font-bold bg-emerald-900/50 px-3 py-1.5 rounded-xl border border-emerald-500/30">Excel + WhatsApp</span> —
                </p>
                <div className="w-16 h-1 bg-indigo-500 mx-auto my-8 rounded-full"></div>
                <p className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  Then this is for you.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
