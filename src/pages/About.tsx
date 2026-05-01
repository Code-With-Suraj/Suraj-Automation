import { motion } from 'motion/react';
import { MapPin, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

import profileImage from '../../public/profile.jpg';

export default function About() {
  const skills = [
    { name: "Google Sheets", icon: "📊" },
    { name: "Apps Script", icon: "⚡" },
    { name: "Web Apps", icon: "🌐" },
    { name: "Power BI", icon: "📈" },
    { name: "SQL", icon: "🗄️" },
    { name: "Python", icon: "🐍" },
    { name: "GST Logic", icon: "📑" },
    { name: "Automation", icon: "🤖" },
    { name: "Dashboards", icon: "📉" },
  ];

  return (
    <main className="pt-24 pb-20 dark:bg-slate-950 transition-colors duration-300">
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 dark:from-slate-900 via-white dark:via-slate-950 to-white dark:to-slate-950 -z-10 transition-colors"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Image/Profile Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 rounded-[2.5rem] blur-3xl transform -rotate-6"></div>
              <div className="relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-4 border border-slate-200 dark:border-slate-800 shadow-2xl transition-colors">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                  <img 
                    src={profileImage} 
                    alt="Suraj Singh" 
                    className="w-full h-full object-cover object-[center_20%]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <p className="text-indigo-500 dark:text-indigo-400 font-bold mb-2">Image Not Found</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Please upload your profile.jpg to the public folder.</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-[280px] transition-colors">
                  <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-1 block">Suraj Automation founder</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 transition-colors">Suraj Singh</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-medium mb-3">Business Automation Studio</p>
                  
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <MapPin className="w-4 h-4 shrink-0 text-rose-500" />
                    <span>Noida, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <Globe className="w-4 h-4 shrink-0 text-blue-500" />
                    <span>India-wide service</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 lg:pl-10 mt-12 lg:mt-0"
            >
              <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-sm font-bold tracking-wide mb-6 border border-indigo-100 dark:border-indigo-500/20">
                About Suraj Automation
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">
                Automation Partner for <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">Small Business India</span>
              </h1>
              
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 font-body transition-colors">
                <p>
                  <strong className="text-slate-900 dark:text-white transition-colors">Suraj Automation</strong> is a professional business automation studio built around one promise: <span className="italic text-indigo-600 dark:text-indigo-400 font-medium">Excel se System tak.</span> We help Indian SMBs turn messy spreadsheets, WhatsApp workflows, and manual follow-ups into structured systems.
                </p>
                <p>
                  We build Google Apps Script solutions, dashboards, internal web apps, and Google Sheets based systems that make daily operations easier to track, control, and scale.
                </p>
              </div>

              <div className="my-10 bg-indigo-600 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden shadow-lg shadow-indigo-600/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-[50px] mix-blend-screen"></div>
                <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3 relative z-10 font-body">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
                  Our goal is simple: Make your business run on systems, not stress.
                </h3>
              </div>

              {/* Skills Grid */}
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6 transition-colors">Technology Stack</p>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all cursor-default"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span className="font-semibold text-sm text-slate-700 dark:text-slate-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I'm%20interested%20in%20your%20automation%20services." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-slate-900/20 dark:shadow-indigo-900/20 group w-full sm:w-auto"
                >
                  Discuss Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
