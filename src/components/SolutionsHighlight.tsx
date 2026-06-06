import { motion } from 'motion/react';
import { Bot, BarChart3, MessageSquareText, Layers } from 'lucide-react';

export default function SolutionsHighlight() {
  const solutions = [
    {
      icon: <Bot className="w-8 h-8 text-indigo-500" />,
      title: "AI Integration",
      desc: "Connect Gemini & ChatGPT APIs to auto-process messages, categorize data, and extract insights without manual work.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-500" />,
      title: "Custom Dashboards",
      desc: "Real-time analytics and tracking interfaces built to give you 360-degree visibility over your entire operation.",
    },
    {
      icon: <MessageSquareText className="w-8 h-8 text-green-500" />,
      title: "WhatsApp Automation",
      desc: "Transform WhatsApp into an automated CRM. Auto-reply to leads, process orders, and send instantaneous alerts.",
    },
    {
      icon: <Layers className="w-8 h-8 text-blue-500" />,
      title: "ERP Development",
      desc: "End-to-end custom operational software that connects your inventory, billing, team tasks, and ledgers in one place.",
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4">Core Pillars</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Solutions Highlight
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Purpose-built automation engineered to replace manual chaos with streamlined systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-1 transition-all group"
            >
              <div className="bg-slate-50 dark:bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
