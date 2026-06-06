import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Map, Cpu, CheckSquare, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      num: "01",
      id: "audit",
      icon: Search,
      title: "Diagnostic Audit",
      shortDesc: "Understand workflow",
      desc: "We perform a deep dive into your daily business operations, team dynamics, and major pain points.",
      highlights: ["Identify manual bottlenecks", "Map current software stack", "Analyze cost leakages"]
    },
    {
      num: "02",
      id: "blueprint",
      icon: Map,
      title: "Solution Blueprint",
      shortDesc: "Design logic",
      desc: "We draft a practical, simple architecture that fits your local staff's existing workflow perfectly.",
      highlights: ["UI/UX wireframing", "Database architecture", "AI prompt engineering"]
    },
    {
      num: "03",
      id: "build",
      icon: Cpu,
      title: "Automate & Build",
      shortDesc: "Develop systems",
      desc: "Our team develops and connects the core processes using clean code, Google Workspace, and AI integrations.",
      highlights: ["Custom Google Apps Script", "WhatsApp API integration", "Dashboard development"]
    },
    {
      num: "04",
      id: "test",
      icon: CheckSquare,
      title: "UAT & Refine",
      shortDesc: "Test rigorously",
      desc: "We test the system under real-world scenarios to ensure zero-touch operations without fail.",
      highlights: ["Edge-case testing", "Performance optimization", "Security & permissions check"]
    },
    {
      num: "05",
      id: "delivery",
      icon: Rocket,
      title: "Launch & Delivery",
      shortDesc: "Go live",
      desc: "We seamlessly deploy the automation, provide staff training, and ensure a smooth operational transition.",
      highlights: ["Staff transition training", "Live monitoring", "Ongoing priority support"]
    }
  ];

  return (
    <section id="our-process" className="py-24 relative overflow-hidden bg-slate-900 border-b border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900 to-slate-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold tracking-wide mb-6 border border-indigo-500/20">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            From Audit to Delivery
          </h2>
          <p className="text-xl text-slate-400 font-medium">
            Hover over each phase to see how we replace manual chaos with intelligent systems.
          </p>
        </div>

        {/* Stepper Tracking Line (Desktop) */}
        <div className="hidden lg:block relative max-w-5xl mx-auto mb-12">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-800 -translate-y-1/2 rounded-full overflow-hidden">
             {/* Progress Fill could be animated based on hoveredStep, but keeping it simple/elegant here */}
             <motion.div 
               className="h-full bg-indigo-500 rounded-full"
               initial={{ width: '0%' }}
               animate={{ width: hoveredStep !== null ? `${(hoveredStep / (steps.length - 1)) * 100}%` : '0%' }}
               transition={{ duration: 0.5, ease: "easeInOut" }}
             />
          </div>
          
          <div className="relative flex justify-between">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="relative z-10"
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300 backdrop-blur-sm cursor-pointer
                    ${hoveredStep === idx 
                      ? 'bg-indigo-500 border-slate-900 text-white scale-125 shadow-[0_0_20px_rgba(99,102,241,0.5)]' 
                      : (hoveredStep !== null && idx < hoveredStep 
                          ? 'bg-indigo-900/50 border-indigo-500/30 text-indigo-300' 
                          : 'bg-slate-800 border-slate-900 text-slate-500 hover:bg-slate-700 hover:text-slate-300')
                    }
                  `}
                >
                  <step.icon className={`w-5 h-5 ${hoveredStep === idx ? 'animate-pulse' : ''}`} />
                </div>
                <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center w-32 cursor-pointer pointer-events-none">
                  <p className={`text-sm font-bold transition-colors ${hoveredStep === idx ? 'text-indigo-400' : 'text-slate-400'}`}>
                    {step.title}
                  </p>
                  <p className={`text-xs mt-1 transition-colors ${hoveredStep === idx ? 'text-slate-300' : 'text-slate-600'}`}>
                    {step.shortDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Detail Panel */}
        <div className="max-w-3xl mx-auto mt-24 lg:mt-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={hoveredStep !== null ? hoveredStep : 'default'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-[2rem] p-8 md:p-10 border border-slate-700 min-h-[300px] flex flex-col justify-center"
            >
              {hoveredStep !== null ? (
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="text-sm font-black text-indigo-500/50 mb-2 font-mono">STEP {steps[hoveredStep].num}</div>
                    <h3 className="text-3xl font-bold text-white mb-4">{steps[hoveredStep].title}</h3>
                    <p className="text-slate-300 leading-relaxed">
                      {steps[hoveredStep].desc}
                    </p>
                  </div>
                  <div className="md:col-span-3 bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Key Deliverables in this phase</h4>
                    <ul className="space-y-3">
                      {steps[hoveredStep].highlights.map((highlight, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 + 0.2 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-slate-300">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 flex flex-col items-center">
                  <Search className="w-16 h-16 text-slate-700 mb-6" />
                  <h3 className="text-2xl font-bold text-slate-400 mb-2">Explore the Workflow</h3>
                  <p className="text-slate-500 max-w-sm mx-auto">
                    Interact with the timeline above to see the precise engineering phases we follow to transform your operations.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile View (Vertical List) */}
        <div className="lg:hidden space-y-4 mt-12">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className={`bg-slate-800/80 rounded-2xl p-6 border transition-colors ${hoveredStep === idx ? 'border-indigo-500' : 'border-slate-700'}`}
              onClick={() => setHoveredStep(hoveredStep === idx ? null : idx)}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${hoveredStep === idx ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">{step.title}</h3>
                    <p className="text-sm text-indigo-400 font-mono">{step.num}</p>
                  </div>
                </div>
                <ArrowRight className={`w-5 h-5 transition-transform ${hoveredStep === idx ? 'rotate-90 text-indigo-400' : 'text-slate-500'}`} />
              </div>
              
              <AnimatePresence>
                {hoveredStep === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-slate-700/50 mt-2">
                      <p className="text-sm text-slate-300 mb-4">{step.desc}</p>
                      <ul className="space-y-2">
                        {step.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                            <span className="text-xs text-slate-400">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
