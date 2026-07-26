import { Building2, Factory, Utensils, ShoppingBag, Stethoscope, GraduationCap, Truck, Landmark, Store, PackageCheck, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrustedByMarquee() {
  const stats = [
    { value: "8+", label: "Micro-SaaS Products Built", sub: "Production Ready Web Apps", icon: PackageCheck },
    { value: "50+", label: "Automations Delivered", sub: "Google Apps Script & Custom APIs", icon: Zap },
    { value: "100%", label: "Custom, No Bloated ERP", sub: "Zero Monthly Software Lock-In", icon: ShieldCheck }
  ];

  const industries = [
    { name: "Manufacturing & Production", icon: Factory, badge: "30+ Systems" },
    { name: "FMCG & Wholesale", icon: Store, badge: "Custom Supply Chain" },
    { name: "Restaurants & QSR", icon: Utensils, badge: "POS & KOT Systems" },
    { name: "Retail & E-commerce", icon: ShoppingBag, badge: "Inventory Automation" },
    { name: "Healthcare & Clinics", icon: Stethoscope, badge: "Patient & Claims" },
    { name: "Education & Schools", icon: GraduationCap, badge: "Fee & Staff Portals" },
    { name: "Logistics & Fleet", icon: Truck, badge: "Dispatch & Tracking" },
    { name: "Finance & Micro-Lending", icon: Landmark, badge: "EMI & Loan Sarthi" },
    { name: "Corporate Services", icon: Building2, badge: "MIS & CFO Dashboards" },
  ];

  return (
    <section className="py-12 bg-slate-900 border-y border-slate-800/80 overflow-hidden relative">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Trust Bar Counters */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-5 backdrop-blur-sm flex items-center gap-4 hover:border-indigo-500/50 transition-all group hover:-translate-y-0.5"
              >
                <div className="p-3.5 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-black text-white tracking-tight flex items-baseline gap-1">
                    <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-white bg-clip-text text-transparent font-mono">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-200 leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          ENGINEERING CUSTOM SOFTWARE FOR LEADING INDUSTRIES & SMBs ACROSS INDIA
        </p>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="flex overflow-hidden select-none group">
        <div className="flex space-x-6 animate-marquee shrink-0 py-2 group-hover:[animation-play-state:paused]">
          {industries.concat(industries).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 backdrop-blur-md hover:border-blue-500/50 hover:bg-slate-800/90 transition-all duration-300"
              >
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200 whitespace-nowrap">{item.name}</h4>
                  <span className="text-[10px] font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded-full inline-block mt-0.5">
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
