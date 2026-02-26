import { motion } from 'motion/react';
import { AlertCircle, MessageSquare, CreditCard, FileSpreadsheet, Users } from 'lucide-react';

export default function Problem() {
  const problems = [
    { icon: <MessageSquare className="w-5 h-5" />, text: "Orders WhatsApp pe aa rahe hain." },
    { icon: <CreditCard className="w-5 h-5" />, text: "Payments kabhi UPI, kabhi bank transfer." },
    { icon: <FileSpreadsheet className="w-5 h-5" />, text: "Inventory Excel mein hai… par update kabhi hoti hai, kabhi nahi." },
    { icon: <Users className="w-5 h-5" />, text: "Staff alag data maintain karta hai." },
  ];

  const confusions = [
    "Actual profit kitna?",
    "Kiska payment pending hai?",
    "Stock kab khatam hoga?",
    "Kaun follow-up bhool gaya?",
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Aapka business chal raha hai... <br/>
              <span className="text-slate-500">Par system bikhra hua hai.</span>
            </h2>
            
            <div className="space-y-4 mb-8">
              {problems.map((prob, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                  <div className="text-indigo-500 mt-0.5">{prob.icon}</div>
                  <p className="text-slate-700">{prob.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <AlertCircle className="text-red-500 w-6 h-6" />
              Month end pe confusion:
            </h3>
            
            <ul className="space-y-4 mb-8">
              {confusions.map((conf, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  {conf}
                </li>
              ))}
            </ul>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <p className="text-lg font-semibold text-slate-900 mb-2">Problem growth ki nahi hai.</p>
              <p className="text-lg font-semibold text-indigo-600 mb-4">Problem system ki hai.</p>
              <p className="text-slate-600 italic">Aur yahin main help karta hoon.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
