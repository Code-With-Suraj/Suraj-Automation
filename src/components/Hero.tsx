import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const words = [
    "Custom Automation Solutions",
    "Interactive MIS Dashboards",
    "Intelligent Apps Script Triggers",
    "AI Automation Softwares & Tools",
    "High-Performance Custom Web Apps"
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typewriter typing & deleting speed controls
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1850);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 25 : 55);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // Caret blinking animation state helper
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  } as const;

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 pb-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
          alt="Business Technology Automation" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]"></div>
        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 backdrop-blur-md text-slate-200 text-sm font-semibold tracking-wide mb-8 border border-white/10 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-indigo-400"></span>
              Custom Business Automation Services
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-white tracking-tight mb-8 leading-[1.05]">
              Replace Excel & WhatsApp With <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-sky-300">
                Smart Automation
              </span>
            </motion.h1>

            <motion.div 
              variants={itemVariants}
              className="min-h-[6.5rem] sm:min-h-[4rem] md:min-h-[4.5rem] flex flex-col sm:flex-row items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-indigo-200/95 font-medium max-w-3xl mx-auto mb-10 font-sans bg-white/5 backdrop-blur-md py-4 px-6 rounded-2xl border border-white/10 shadow-lg"
            >
              <span className="text-slate-400 mr-0 sm:mr-3 select-none font-semibold shrink-0 mb-2 sm:mb-0">I specialize in:</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300 font-extrabold tracking-tight relative text-center sm:text-left px-2">
                {words[index].substring(0, subIndex)}
                <span className={`inline-block w-[3px] h-[0.95em] ml-1.5 bg-sky-300 align-middle ${blink ? 'opacity-100' : 'opacity-0'}`} />
              </span>
            </motion.div>
            
            <motion.p variants={itemVariants} className="mt-6 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-body">
              I build custom web apps and automation systems for ambitious SMBs. Get a premium, low-cost ERP alternative that cuts manual multi-tasking by <span className="font-semibold text-white">50%</span>.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20process%20audit." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] hover:shadow-[0_0_60px_-15px_rgba(79,70,229,0.7)] flex items-center justify-center gap-3 group hover:-translate-y-1 text-lg"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Process Audit
              </a>
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20share%20my%20current%20system%20details." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold transition-all flex items-center justify-center gap-3 group hover:-translate-y-1 text-lg"
              >
                Share Your Current System
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-16 flex items-center justify-center gap-5 pt-8 border-t border-white/10"
            >
              <Link to="/reviews" className="flex items-center gap-5 hover:bg-white/5 px-6 py-3.5 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 group">
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" alt="Client" />
                  <img className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" alt="Client" />
                  <img className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop" alt="Client" />
                  <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-inner">+50</div>
                </div>
                <div className="text-left">
                  <div className="flex text-amber-450 items-center gap-0.5 mb-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform" />
                    ))}
                    <span className="text-white text-xs font-bold ml-1.5 font-mono">4.9/5 Rating</span>
                  </div>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                    Trusted by 50+ clients • View Verified Reviews
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
