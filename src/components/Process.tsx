import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "Deep dive into your business workflow, team, and pain points"
    },
    {
      num: "02",
      title: "Identify",
      desc: "Spot the inefficiencies & manual tasks costing you time and money"
    },
    {
      num: "03",
      title: "Design",
      desc: "Plan a simple, practical system that fits your team's workflow"
    },
    {
      num: "04",
      title: "Build",
      desc: "Develop and automate processes with clean, maintainable code"
    },
    {
      num: "05",
      title: "Deliver",
      desc: "Launch with dashboards, training, and ongoing support"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512758684069-2a912bbdb828?q=80&w=2070&auto=format&fit=crop" 
          alt="Process Workflow" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold tracking-wide mb-6 border border-indigo-500/20">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Our Approach
          </h2>
          <p className="text-2xl text-indigo-400 font-bold mb-4 font-body">
            Simple, practical, result-focused
          </p>
          <p className="text-xl text-slate-300 font-body">
            No tech jargon, no overcomplication. We map your real workflow first, then build the system around it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[3rem] left-[55%] w-full h-[2px] bg-indigo-500/30 group-hover:bg-indigo-400/80 transition-colors"></div>
              )}
              <div className="bg-slate-800/80 backdrop-blur-md rounded-[2rem] p-6 border border-slate-700/80 relative z-10 h-full hover:border-indigo-500 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.4)] transition-all">
                <div className="text-5xl font-black text-indigo-500/20 mb-4 font-mono group-hover:text-indigo-400/40 transition-colors">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                <p className="text-slate-400 font-medium text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
