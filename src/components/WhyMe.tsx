import { motion } from 'motion/react';
import { Search, Clock, ShieldAlert, ArrowRight } from 'lucide-react';

export default function WhyMe() {
  const steps = [
    { icon: <Search className="w-5 h-5" />, text: "Your order flow" },
    { icon: <Clock className="w-5 h-5" />, text: "Where manual dependency exists" },
    { icon: <ShieldAlert className="w-5 h-5" />, text: "Where data leakage is happening" },
    { icon: <Clock className="w-5 h-5" />, text: "Where the owner's time is being wasted" },
  ];

  const goals = [
    "To get you out of data entry",
    "To give you control",
    "To make your business system-driven"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Why Work With Me?
          </h2>
          <p className="text-xl text-indigo-600 font-semibold">
            I am not just a coder.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">I understand first:</h3>
            <div className="space-y-4 mb-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                    {step.icon}
                  </div>
                  <span className="font-medium text-slate-700">{step.text}</span>
                </div>
              ))}
            </div>
            <div className="bg-indigo-600 text-white p-4 rounded-xl text-center font-semibold">
              Then I design the system.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-indigo-400">My goal is simple:</h3>
            <div className="space-y-6 mb-12">
              {goals.map((goal, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <ArrowRight className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                  <span className="text-xl font-medium text-slate-200">{goal}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-auto pt-8 border-t border-slate-800">
              <p className="text-lg text-slate-400">
                <span className="text-white font-semibold block mb-1">I build for SMBs.</span>
                Not for enterprises.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
