import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/80 via-white to-white"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold tracking-wide mb-6 border border-indigo-100 shadow-sm">
            Custom Automation for SMBs
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
            Sab Data Hai… <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              Par Control Nahi Hai?
            </span>
          </h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Main Google Apps Script se custom web apps aur automation systems banata hoon jo SMBs ka manual kaam <span className="font-semibold text-slate-900">50% tak kam kar dete hain</span> — bina costly ERP ke.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20process%20audit." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5" />
              Free Process Audit Book Karein
            </a>
            <a 
              href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20share%20my%20current%20system%20details." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-medium transition-all flex items-center justify-center gap-2 group hover:-translate-y-1 shadow-sm"
            >
              Apna Current System Share Karein
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
