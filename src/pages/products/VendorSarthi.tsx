import { motion } from 'motion/react';
import { ShoppingCart, AlertTriangle, CheckCircle2, ListChecks, Mail, ShieldCheck, Scale, FileText, Truck, Users, PieChart, TrendingUp, Settings, ArrowRight, MessageSquare, Store } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';

export default function VendorSarthi() {
  useSEO(
    'VendorSarthi | Suraj Automation',
    'A complete Vendor Management System built entirely on Google Sheets to end manual RFQs, WhatsApp quotes, and Excel comparisons.',
    'vendor management system, procurement software, google sheets backend, RFQ automation'
  );

  const features = [
    {
      title: "RFQ Creation & Dispatch",
      icon: <Mail className="w-6 h-6" />,
      text: "Items select karo, vendors choose karo, system automatically personalized RFQ emails bhej deta hai with a secure link."
    },
    {
      title: "Vendor Self-Quotation Portal",
      icon: <ShieldCheck className="w-6 h-6" />,
      text: "Har vendor ko ek unique portal milta hai to enter rate, MOQ, delivery days. Aapki team kuch manually nahi likhti."
    },
    {
      title: "Automated Comparison Matrix",
      icon: <Scale className="w-6 h-6" />,
      text: "Sabhi vendors ki quotes ek screen pe with weighted scoring: Price 60%, Delivery 25%, Vendor Rating 15%."
    },
    {
      title: "One-Click PO Automation",
      icon: <FileText className="w-6 h-6" />,
      text: "Vendor select karo, PO auto-generate hota hai with GST calculation and terms — aur directly vendor ko email."
    },
    {
      title: "Delivery & GRN Tracking",
      icon: <Truck className="w-6 h-6" />,
      text: "Expected delivery dates track karo, GRN numbers auto-assign ho jaate hain, delayed deliveries dashboard pe flag hoti hain."
    },
    {
      title: "Role-Based Access Control",
      icon: <Users className="w-6 h-6" />,
      text: "Admin, Procurement, Manager, Viewer — har role ke liye alag permissions."
    },
    {
      title: "Dashboard & Analytics",
      icon: <PieChart className="w-6 h-6" />,
      text: "Monthly spend, vendor-wise purchase, open POs — ek nazar mein."
    }
  ];

  const works = [
    {
      step: 1,
      title: "Create RFQ",
      text: "Procurement team ek RFQ banata hai — items aur quantities select karta hai."
    },
    {
      step: 2,
      title: "Auto Email Dispatch",
      text: "System selected vendors ko personalized email bhejta hai with a secure, unique portal link."
    },
    {
      step: 3,
      title: "Vendor Portal",
      text: "Vendors mobile-friendly portal pe directly quotes submit karte hain — koi login required nahi."
    },
    {
      step: 4,
      title: "Auto Compare & PO",
      text: "Lowest rate highlight hoti hai, ek click se PO generate ho jata hai and vendor ko send ho jata hai."
    }
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-300 text-sm font-bold tracking-wide mb-6 border border-blue-500/20 backdrop-blur-sm">
                <ListChecks className="w-4 h-4" />
                VendorSarthi by Suraj Automation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
                Maine ek Vendor Management System banaya Google Sheets mein — <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  ab koi bhi vendor quote miss nahi hoga.
                </span>
              </h1>
              
              <div className="bg-slate-900/80 border border-slate-800 p-6 md:p-8 rounded-2xl mb-10 text-xl text-slate-300 leading-relaxed backdrop-blur-md italic border-l-4 border-l-blue-500">
                "Suraj bhai, hamare purchase manager ke paas 6 vendors ke WhatsApp pe quotes aayi hain — alag alag items, alag alag rates. Ab koi compare kaise karega?"
                <div className="mt-4 text-sm font-bold text-blue-400 uppercase tracking-widest not-italic">
                  — Yahi moment tha. Maine laptop khola aur VendorSarthi build karna shuru kiya.
                </div>
              </div>

              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20see%20a%20demo%20of%20VendorSarthi." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/25 items-center justify-center gap-2 group hover:-translate-y-1"
              >
                Book a 30-Min Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="sticky top-32"
            >
              <div className="inline-flex items-center gap-2 text-red-600 font-bold mb-4">
                <AlertTriangle className="w-5 h-5" />
                THE PROBLEM
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Galat vendor se order aur zero data.
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Kisi bhi Indian manufacturer, trader, ya retailer ka procurement process dekho — woh aaj bhi WhatsApp aur Excel pe chal raha hai.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-red-500">❌</span> Multi-Format Chaos
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Vendor ko WhatsApp pe message karo. Woh apni rate ek alag format mein bhejta hai. Doosra vendor PDF mein bhejta hai. Teesra "bhai kal tak deta hun" bolta hai.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-red-500">❌</span> Manual Data Entry Error
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Ek purchase manager 5-6 vendors ke 10-15 items ke quotes manually ek spreadsheet mein copy karta hai. Haath se. Row by row. Ek galati — aur puri comparison galat.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-red-500">❌</span> Disconnected POs
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Aur jab PO banana padta hai? Ek aur Excel file. GST manually calculate karo. Vendor ko PDF email karo. Delivery track karna? Notepad ya diary mein.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-l-[10rem] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 text-indigo-600 font-bold mb-4">
              <CheckCircle2 className="w-5 h-5" />
              THE SOLUTION ✅
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              VendorSarthi: Smart Web App on top of Google Workspace.
            </h2>
            <p className="text-xl text-slate-600">
              VendorSarthi ek complete Vendor Management System hai — built entirely on Google Apps Script and Google Sheets. Koi ERP nahi. Koi ₹40,000/year SaaS subscription nahi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/20 hover:border-indigo-400 transition-all hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <div className="inline-flex items-center gap-2 text-indigo-400 font-bold mb-4">
              <Settings className="w-5 h-5" />
              HOW IT WORKS ⚙️
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Automated Procurement Workflow</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {works.map((work, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative"
              >
                <div className="text-6xl font-black text-slate-800 absolute -top-6 -left-2 z-0 tracking-tighter">0{work.step}</div>
                <div className="relative z-10 bg-slate-900 border border-slate-800 p-8 rounded-3xl h-full shadow-xl">
                  <h3 className="text-xl font-bold text-indigo-400 mb-4">{work.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{work.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 text-indigo-600 font-bold mb-4">
                <TrendingUp className="w-5 h-5" />
                RESULT / IMPACT 📈
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
                Decisions are now based on data, not memory.
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                Ek manufacturer ke liye jo 8-10 vendors se regular procurement karta tha — yeh process jo pehle 2 din leta tha, ab 3-4 ghante mein complete hota hai.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Zero Manual Data Entry</h4>
                  <p className="text-slate-600">No more picking wrong vendor rate by mistake in quote comparisons.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">More Time for Negotiation</h4>
                  <p className="text-slate-600">Purchase manager ke paas ab time hai to actually negotiate — not just collect and copy data.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Historical Records</h4>
                  <p className="text-slate-600">Company ke paas ab data hai—kaun time pe deliver karta hai, kis item ki rate kab kitni thi, kis month spend zyada tha.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Bigger Point & CTA */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-16 text-left bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-200 shadow-2xl">
              <div className="inline-flex items-center gap-2 text-slate-600 font-bold mb-4 uppercase tracking-widest text-sm">
                <PieChart className="w-4 h-4" />
                The Bigger Point 💡
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 leading-relaxed">
                Indian SMBs mein procurement ek underestimated problem hai. Sab bolte hain "operations automate karo" — lekin purchasing process pe kisi ki nazar nahi jaati jab tak ek bada galat order na ho jaaye.
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                Hamare businesses ko SAP nahi chahiye. Tally plugin nahi chahiye. Unhe chahiye ek smart, affordable system jo unki actual workflow se match kare — aur Google Workspace pe build ho, jisme cost almost zero ho.
              </p>
              <p className="text-lg md:text-xl font-bold text-indigo-600">
                Yahi karta hai Suraj Automation. Real Indian businesses ke liye real automation — without the enterprise price tag.
              </p>
            </div>

            <div className="bg-slate-950 text-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Upgrade Your Procurement.</h2>
              <p className="text-xl text-slate-300 mb-10 relative z-10 max-w-2xl mx-auto">
                Kya aapka procurement team abhi bhi WhatsApp quotes collect karke manually compare kar raha hai?
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20a%20custom%20vendor%20management%20system.%20Show%20me%20VendorSarthi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  <MessageSquare className="w-5 h-5" />
                  DM for a Demo
                </a>
              </div>
              <p className="mt-6 text-slate-400 relative z-10 font-medium">Bina kisi heavy software ke, built on Google Sheets.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
