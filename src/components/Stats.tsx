import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { value: "11+", label: "Products Shipped" },
    { value: "50+", label: "Hours Saved Per Month (avg)" },
    { value: "5", label: "Industries Served" },
    { value: "₹3,999", label: "Starting Price" },
  ];

  return (
    <section className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800 border-x border-slate-800/50">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="py-10 flex flex-col items-center justify-center text-center p-4 hover:bg-slate-800/50 transition-colors"
            >
              <div className="text-3xl md:text-5xl font-black text-amber-500 mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-slate-400 font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
