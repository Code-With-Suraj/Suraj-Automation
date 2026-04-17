import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#F8F9FA]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/80 backdrop-blur-sm text-slate-800 text-sm font-semibold tracking-wide mb-8 border border-slate-200/60 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
              Custom Business Automation Services
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
              Replace Excel & WhatsApp With <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                Smart Automation
              </span>
            </h1>
            <p className="mt-4 text-[1.15rem] text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-body">
              I build custom web apps and automation systems for ambitious SMBs. Get a premium, low-cost ERP alternative that cuts manual multi-tasking by <span className="font-semibold text-slate-900">50%</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20process%20audit." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-slate-950 hover:bg-slate-800 text-white rounded-xl font-semibold transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex items-center justify-center gap-2 group hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Process Audit
              </a>
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20share%20my%20current%20system%20details." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white/80 hover:bg-white backdrop-blur-sm text-slate-700 border border-slate-200 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                Share Your Current System
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm font-medium text-slate-500">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="Client" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="Client" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt="Client" />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">+50</div>
              </div>
              <span>Trusted by 50+ growing businesses</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 rounded-[2rem] blur-3xl transform -rotate-6"></div>
            
            <div className="relative rounded-[2rem] p-2 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Business Dashboard and Analytics" 
                className="rounded-[1.5rem] object-cover w-full h-[540px] shadow-sm"
                referrerPolicy="no-referrer"
              />
              
              {/* Premium Floating UI Elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -left-12 top-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-100/50 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-xl shadow-inner border border-emerald-100/50">✓</div>
                <div>
                  <p className="font-bold text-slate-800 tracking-tight">Task Automated</p>
                  <p className="text-sm text-slate-500 font-medium">2 hours saved daily</p>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }} 
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                className="absolute -right-10 bottom-24 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-100/50 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xl shadow-inner border border-indigo-100/50">📈</div>
                <div>
                  <p className="font-bold text-slate-800 tracking-tight">Revenue Sync</p>
                  <p className="text-sm text-slate-500 font-medium">Real-time update</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
