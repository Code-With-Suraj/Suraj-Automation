import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Explain",
      desc: "Aap apna current process explain karo (voice note bhi chalega)."
    },
    {
      num: "02",
      title: "Identify",
      desc: "Main bataunga automation kahan possible hai."
    },
    {
      num: "03",
      title: "Build",
      desc: "Custom web app ya automation system build hoga."
    },
    {
      num: "04",
      title: "Result",
      desc: "Aapka manual load half ho jayega."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What Happens Next?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-slate-100"></div>
              )}
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative z-10 h-full hover:border-indigo-200 transition-colors">
                <div className="text-5xl font-black text-indigo-100 mb-6 font-mono">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-4">
            <span className="text-indigo-600">Simple.</span>
            <span className="w-2 h-2 rounded-full bg-slate-300"></span>
            <span className="text-indigo-600">Clear.</span>
            <span className="w-2 h-2 rounded-full bg-slate-300"></span>
            <span className="text-indigo-600">Practical.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
