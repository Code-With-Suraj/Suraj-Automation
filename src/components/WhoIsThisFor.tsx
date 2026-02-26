import { motion } from 'motion/react';
import { Store, Briefcase, Factory, Calculator, Building2, Truck, Users } from 'lucide-react';

export default function WhoIsThisFor() {
  const categories = [
    { name: "Retailers", icon: <Store className="w-6 h-6" /> },
    { name: "Traders", icon: <Briefcase className="w-6 h-6" /> },
    { name: "Distributors", icon: <Truck className="w-6 h-6" /> },
    { name: "Service Businesses", icon: <Users className="w-6 h-6" /> },
    { name: "Small Manufacturers", icon: <Factory className="w-6 h-6" /> },
    { name: "CA / Consultant Firms", icon: <Calculator className="w-6 h-6" /> },
    { name: "Local Business Owners", icon: <Building2 className="w-6 h-6" /> },
  ];

  return (
    <section className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Who Is This For?
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100 flex flex-col items-center justify-center text-center gap-4 hover:shadow-md hover:border-indigo-300 transition-all group"
            >
              <div className="text-indigo-500 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <span className="font-semibold text-slate-700">{cat.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl p-8 text-center shadow-xl shadow-indigo-100 border border-indigo-200"
        >
          <p className="text-xl text-slate-700 font-medium mb-2">
            Agar aapka business <span className="text-emerald-600 font-bold">Excel + WhatsApp</span> pe chal raha hai —
          </p>
          <p className="text-2xl font-bold text-indigo-600">
            Toh yeh aapke liye hai.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
