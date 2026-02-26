import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';

export default function FinalCTA() {
  const benefits = [
    "Time bachana hai",
    "Manual errors kam karne hain",
    "Clear visibility chahiye",
    "Growth ke liye ready system chahiye"
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/50 via-slate-900 to-slate-900"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 md:p-12 rounded-3xl shadow-2xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Aap business owner ho. <br/>
              <span className="text-indigo-400">Data entry operator nahi.</span>
            </h2>
            <p className="text-xl text-slate-300 font-medium">Agar aapko:</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-200 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-white mb-8">Toh wait mat karo.</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20discuss%20automating%20my%20business." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 group hover:-translate-y-1"
              >
                <MessageSquare className="w-5 h-5" />
                Message karo
              </a>
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20Here%20are%20the%20details%20of%20my%20current%20system..." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group hover:-translate-y-1"
              >
                Apna current system bhejo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <p className="mt-8 text-indigo-300 font-medium text-lg">
              Let’s automate your business smartly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
