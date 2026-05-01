import { motion } from 'motion/react';
import { Frown, Clock, DollarSign, UserX, Smartphone } from 'lucide-react';

export default function Problem() {
  const problems = [
    { 
      icon: <Frown className="w-6 h-6 text-rose-500" />, 
      title: "Data scattered in whatsapp and excel solution",
      text: "Stop searching through chats. Get a centralized small business data management system india." 
    },
    { 
      icon: <Clock className="w-6 h-6 text-amber-500" />, 
      title: "Business reports automatically kaise banaye?",
      text: "Manual work kaise reduce kare business mein? We automate your reports so they are ready every morning." 
    },
    { 
      icon: <DollarSign className="w-6 h-6 text-emerald-500" />, 
      title: "Outstanding payment kaise track kare automatically?",
      text: "Never miss a payment. Get an automated tracking system that sends alerts for pending dues." 
    },
    { 
      icon: <UserX className="w-6 h-6 text-indigo-500" />, 
      title: "Staff mistakes kaise control kare system se?",
      text: "Reduce human error with role-based access and automated validation in your business system." 
    },
    { 
      icon: <Smartphone className="w-6 h-6 text-sky-500" />, 
      title: "Excel se automation kaise kare small business?",
      text: "Move beyond simple sheets. Transform your Excel files into a powerful automation engine." 
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 text-sm font-bold tracking-wide mb-6 border border-rose-100 dark:border-rose-500/20">
            Ideal Clients
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">
            Small Business Data Management System India
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-body transition-colors">
            We help businesses solve the "data scattered in WhatsApp and Excel" problem with automated solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {problems.map((prob, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl shrink-0">
                  {prob.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">{prob.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{prob.text}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 bg-indigo-600 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-center text-center">
              <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
                Then you don't need just a website…
              </h3>
              
              <div className="inline-block bg-white text-indigo-700 px-8 py-5 rounded-2xl font-black text-3xl md:text-4xl shadow-xl transform -rotate-2 mb-10 mx-auto">
                You need a system. <span className="animate-bounce inline-block">👇</span>
              </div>
              
              <div className="bg-indigo-700/50 p-6 rounded-2xl backdrop-blur-sm border border-indigo-500/50">
                <p className="text-lg font-bold mb-2">Small business owner using digital management system</p>
                <p className="text-indigo-200 text-sm">Built for local teams that still depend on Excel and WhatsApp</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
