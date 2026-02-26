import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Target, Lightbulb, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/80 via-white to-white"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold tracking-wide mb-6 border border-indigo-100 shadow-sm">
              Authority Positioning
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Main Code Nahi… <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                Business Systems Banata Hoon.
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-indigo max-w-none text-slate-600"
          >
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 mb-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
              <p className="text-2xl font-medium text-slate-900 mb-8 leading-relaxed">
                Main ek cheez notice karta tha — India ke 80% small aur medium businesses ke paas data hota hai… par control nahi hota.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8 flex flex-wrap gap-4">
                <span className="px-5 py-2.5 bg-white rounded-xl shadow-sm font-medium text-slate-700 border border-slate-200">Excel hai.</span>
                <span className="px-5 py-2.5 bg-white rounded-xl shadow-sm font-medium text-slate-700 border border-slate-200">WhatsApp hai.</span>
                <span className="px-5 py-2.5 bg-white rounded-xl shadow-sm font-medium text-slate-700 border border-slate-200">Register hai.</span>
                <span className="px-5 py-2.5 bg-white rounded-xl shadow-sm font-medium text-slate-700 border border-slate-200">Staff hai.</span>
                <span className="px-5 py-2.5 bg-red-50 text-red-600 rounded-xl shadow-sm font-bold border border-red-100">Par system nahi hai.</span>
              </div>

              <p className="text-xl text-slate-700 font-medium">
                Business grow kar raha hota hai… par owner ka stress bhi grow kar raha hota hai. Yahin se meri journey start hui.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-10 md:p-14 rounded-3xl shadow-2xl shadow-indigo-200 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white leading-tight">Main Google Apps Script use karke aise custom web apps aur automation systems design karta hoon jo:</h3>
              <ul className="space-y-5">
                <li className="flex items-center gap-4 text-lg"><CheckCircle2 className="text-indigo-300 w-6 h-6 flex-shrink-0" /> Manual kaam kam kare</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle2 className="text-indigo-300 w-6 h-6 flex-shrink-0" /> Owner ko real-time visibility de</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle2 className="text-indigo-300 w-6 h-6 flex-shrink-0" /> Process ko structured banaye</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle2 className="text-indigo-300 w-6 h-6 flex-shrink-0" /> Aur expensive ERP ki zarurat hi khatam kar de</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mera Approach – Pehle Samajhta Hoon, Phir Banata Hoon</h2>
            <p className="text-xl text-indigo-600 font-semibold">Main ready-made template sell nahi karta.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-indigo-200 transition-colors"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                  <Lightbulb className="text-amber-500 w-6 h-6" />
                </div>
                Main pehle samajhta hoon:
              </h3>
              <ul className="space-y-5 text-slate-600">
                <li className="flex items-start gap-3 text-lg"><span className="text-indigo-500 mt-1 font-bold">•</span> Aapka order flow kaise chalta hai</li>
                <li className="flex items-start gap-3 text-lg"><span className="text-indigo-500 mt-1 font-bold">•</span> Payment tracking kaise hoti hai</li>
                <li className="flex items-start gap-3 text-lg"><span className="text-indigo-500 mt-1 font-bold">•</span> Inventory kaise manage hoti hai</li>
                <li className="flex items-start gap-3 text-lg"><span className="text-indigo-500 mt-1 font-bold">•</span> Follow-up kahan miss hota hai</li>
                <li className="flex items-start gap-3 text-lg"><span className="text-indigo-500 mt-1 font-bold">•</span> Reporting kaise hoti hai</li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-900 p-10 rounded-3xl shadow-xl text-white flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <Target className="text-emerald-400 w-6 h-6" />
                </div>
                Result?
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" /> WhatsApp se structured order system</li>
                <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" /> Auto invoice generation</li>
                <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" /> Low stock alerts</li>
                <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" /> Outstanding payment tracking</li>
                <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" /> MIS dashboard</li>
                <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" /> Lead to conversion tracking</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-white -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm border border-indigo-200">
              <ShieldCheck className="w-10 h-10 text-indigo-600" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Mera Mission</h2>
            <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 italic mb-10 border-l-4 border-indigo-500 pl-8 text-left bg-white p-8 rounded-r-2xl shadow-sm">
              "Indian SMB owners ko manual dependency se system-driven business tak le jaana."
            </blockquote>
            <p className="text-xl text-slate-600 mb-16 leading-relaxed">
              Aap business owner ho. Aapka time strategic decisions mein lagna chahiye. <br className="hidden md:block" />
              <span className="font-bold text-slate-900 bg-indigo-100 px-2 py-1 rounded">Data entry mein nahi.</span>
            </p>

            <div className="bg-white rounded-3xl p-10 md:p-14 border border-slate-200 shadow-2xl shadow-indigo-100/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Agar aap genuinely chahte ho:</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <span className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-semibold shadow-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Clear visibility</span>
                <span className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-semibold shadow-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Automated workflow</span>
                <span className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-semibold shadow-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Time saving</span>
                <span className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-semibold shadow-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Stress reduction</span>
              </div>
              
              <p className="text-xl font-semibold text-slate-800 mb-8">Toh ek step lo. Apna current process share karo. Main batata hoon system kaise ban sakta hai.</p>
              
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20share%20my%20current%20process%20with%20you." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xl transition-all shadow-xl shadow-indigo-200 items-center justify-center gap-3 mx-auto group hover:-translate-y-1"
              >
                Let's Talk
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
