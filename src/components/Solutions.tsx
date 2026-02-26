import { motion } from 'motion/react';
import { MessageCircle, Package, Bell, BarChart3, PieChart, Target } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      title: "WhatsApp Order Management System",
      icon: <MessageCircle className="w-6 h-6" />,
      features: [
        "Auto-entry of orders into structured sheets",
        "Daily sales summary emailed to owner",
        "Auto-generate invoices"
      ]
    },
    {
      title: "Inventory & Low Stock Alert System",
      icon: <Package className="w-6 h-6" />,
      features: [
        "Auto stock deduction",
        "Low stock email alert",
        "Purchase planning dashboard"
      ]
    },
    {
      title: "Outstanding Payment Reminder Automation",
      icon: <Bell className="w-6 h-6" />,
      features: [
        "Client-wise due tracking",
        "Automatic reminder email",
        "Follow-up dashboard"
      ]
    },
    {
      title: "Staff Performance Dashboard",
      icon: <Target className="w-6 h-6" />,
      features: [
        "Daily entry tracking",
        "Sales target vs achievement",
        "Owner visibility without micromanagement"
      ]
    },
    {
      title: "Custom MIS Reporting Dashboard",
      icon: <PieChart className="w-6 h-6" />,
      features: [
        "One-click business overview",
        "Eliminate manual Excel reporting",
        "Real-time performance tracking"
      ]
    },
    {
      title: "Lead to Conversion Tracking Web App",
      icon: <BarChart3 className="w-6 h-6" />,
      features: [
        "Inquiry capture",
        "Follow-up tracking",
        "Conversion analytics"
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Solutions I’ve Built for SMBs
          </h2>
          <p className="text-lg text-slate-400">
            This is not generic development. This is real-world SMB automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-indigo-500 transition-colors"
            >
              <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center mb-6">
                {sol.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{sol.title}</h3>
              <ul className="space-y-3">
                {sol.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className="text-indigo-400 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="inline-block bg-slate-800 px-6 py-3 rounded-full text-slate-300 border border-slate-700">
            And all within the Google ecosystem. <span className="text-white font-semibold">No complicated login jungle.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
