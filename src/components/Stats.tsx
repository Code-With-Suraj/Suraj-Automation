import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Database, Award } from 'lucide-react';

export default function Stats() {
  const stats = [
    { value: "15+", label: "Automated Tools Shipped", icon: <Cpu className="w-4 h-4 text-emerald-400" />, trace: "SYS_SHIPPED" },
    { value: "50-80h", label: "Hours Saved Per Month", icon: <Database className="w-4 h-4 text-indigo-400" />, trace: "RETENTION_SAVINGS" },
    { value: "5 Sectors", label: "Industries Transformed", icon: <Award className="w-4 h-4 text-violet-400" />, trace: "VERTICALS_SYNCED" },
    { value: "₹1,499", label: "Starting Lifetime License", icon: <ShieldCheck className="w-4 h-4 text-amber-400" />, trace: "PRICING_FLOOR" },
  ];

  return (
    <section className="bg-slate-950 border-y border-slate-800/80 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px)] bg-[size:100px_1px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-900 border-x border-slate-900">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="py-12 flex flex-col items-center justify-center text-center p-6 hover:bg-slate-900/50 transition-all group relative overflow-hidden"
            >
              {/* Monospace Trace parameter */}
              <div className="absolute top-3 left-4 font-mono text-[9px] text-slate-500 tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse inline-block"></span>
                {stat.trace}
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 group-hover:border-indigo-500/40 group-hover:scale-105 transition-all mb-4">
                {stat.icon}
              </div>

              <div className="text-3xl md:text-4.5xl font-black text-white group-hover:text-indigo-400 transition-colors mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-400 font-semibold tracking-wide max-w-[150px]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

