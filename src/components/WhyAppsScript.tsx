import { motion } from 'motion/react';
import { ShieldCheck, Settings, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';

export default function WhyAppsScript() {
  const reasons = [
    {
      title: "You already use Google tools",
      icon: <CheckCircle2 className="w-5 h-5" />
    },
    {
      title: "Secure & cloud-based",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: "Customizable as per business flow",
      icon: <Settings className="w-5 h-5" />
    },
    {
      title: "No unnecessary features",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Scalable as business grows",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Google Apps Script?
            </h2>
            
            <div className="bg-red-50 border border-red-100 p-6 rounded-2xl mb-8">
              <p className="text-red-800 font-medium flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Enterprise ERP is expensive.
              </p>
              <p className="text-red-800 font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                No-code tools are limited.
              </p>
            </div>

            <p className="text-xl font-semibold text-slate-900 mb-6">
              Google Apps Script is perfect for SMBs because:
            </p>

            <div className="space-y-4">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="text-indigo-600">{reason.icon}</div>
                  <span className="font-medium text-slate-700">{reason.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-indigo-600 rounded-3xl p-10 text-white text-center shadow-2xl shadow-indigo-200 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
              alt="Team collaborating on a system" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 opacity-90">In simple words:</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                  <p className="text-3xl font-extrabold tracking-tight">Affordable</p>
                </div>
                <div className="text-indigo-300 text-3xl font-bold">+</div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                  <p className="text-3xl font-extrabold tracking-tight">Powerful</p>
                </div>
                <div className="text-indigo-300 text-3xl font-bold">+</div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                  <p className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">Customized</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
