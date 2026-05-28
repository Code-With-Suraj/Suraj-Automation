import { motion } from 'motion/react';
import { ShoppingCart, AlertTriangle, CheckCircle2, ListChecks, History, Upload, Users, Store, TrendingUp, Settings, ArrowRight, MessageSquare, Target, Clock, RefreshCcw, Database } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import RazorpayCheckout from '../../components/RazorpayCheckout';

export default function RationKart() {
  useSEO(
    'RationKart | Suraj Automation',
    'Grocery Request Management System on Google Ecosystem to end the WhatsApp and Excel chaos for Indian SMBs.',
    'grocery store app, digital ordering system, request management, google sheets backend'
  );

  const features = [
    {
      title: "Smart Requisition",
      icon: <ListChecks className="w-6 h-6" />,
      text: "Staff submits requests from site — item name, quantity, unit, priority (Normal / Urgent)."
    },
    {
      title: "Clean Review Panel",
      icon: <CheckCircle2 className="w-6 h-6" />,
      text: "Manager gets a unified panel to approve, partially approve, or deny line by line."
    },
    {
      title: "Partial Approvals",
      icon: <Database className="w-6 h-6" />,
      text: "Supported natively — '50kg mein se 30kg approve' ek click mein."
    },
    {
      title: "Returns Module",
      icon: <RefreshCcw className="w-6 h-6" />,
      text: "Damaged/expired items return workflow with photo evidence and full tracking."
    },
    {
      title: "CSV Bulk Import",
      icon: <Upload className="w-6 h-6" />,
      text: "Bulk upload 1000 rows ek baar mein, with ready-to-use templates."
    },
    {
      title: "Role-Based Access",
      icon: <Users className="w-6 h-6" />,
      text: "Separate views for Staff, Store Keeper, Manager, Area Manager, and Admin."
    },
    {
      title: "Complete Audit Log",
      icon: <History className="w-6 h-6" />,
      text: "Immutable record — kaun ne kya kiya, kab kiya. No more pointing fingers."
    }
  ];

  const works = [
    {
      step: 1,
      title: "Submit",
      text: "Staff logs in, selects their delivery site, picks items from master list, sets priority, and hits Submit."
    },
    {
      step: 2,
      title: "Review",
      text: "Manager gets the request in Review panel — sees items, quantities, and urgency badges clearly."
    },
    {
      step: 3,
      title: "Approve/Deny",
      text: "Manager approves full/partial, or denies with reason — one simple action per item."
    },
    {
      step: 4,
      title: "Track",
      text: "Requester sees updated status in History with challan printout option. Returns process is just as easy."
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
                <ShoppingCart className="w-4 h-4" />
                RationKart by Suraj Automation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
                Maine ek catering business ke liye grocery request management system banaya — <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  WhatsApp chaos khatam.
                </span>
              </h1>
              
              <div className="bg-slate-900/80 border border-slate-800 p-6 md:p-8 rounded-2xl mb-10 text-xl text-slate-300 leading-relaxed backdrop-blur-md italic border-l-4 border-l-blue-500">
                "Suraj bhai, store keeper WhatsApp pe list bhejta hai, manager miss kar deta hai, phir urgent pe urgent aata rehta hai. Kuch toh karo."
                <div className="mt-4 text-sm font-bold text-blue-400 uppercase tracking-widest not-italic">
                  — 12 sites. 3 managers. Aur saara kaam ek WhatsApp group mein. Yahi hai Indian SMB ka daily reality.
                </div>
              </div>

              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20see%20a%20demo%20of%20RationKart." 
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
                Sab andhere mein tukka maaro.
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                12 sites, multiple managers, aur saara critical operation ek hi jagah fasa hua hai — WhatsApp aur Excel.
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
                  <span className="text-red-500">❌</span> Manager Missed It
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Store keeper subah uthke ek WhatsApp message karta hai — "Chawal 50kg chahiye, dal 30kg, tel 10L." Manager ne dekha ya nahi? Pata nahi. Approve hua ya nahi? Koi record nahi.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-red-500">❌</span> Priority Chaos
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Manager ke paas 4 alag sites ke alag groups hain. Kaun si request urgent hai? Kaun si deny karni hai? Kaun si partially fulfill ho sakti hai?
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-red-500">❌</span> The Month-End Nightmare
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  "Kitne ka maal aaya? Kaunsi site ne kitna liya?" — koi data nahi. Sirf stack of WhatsApp screenshots aur ek purana Excel jisme kuch bhi nahi milta.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-red-500">❌</span> Returns = Disaster
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Agar koi item return karna ho — damaged, expired, ya quantity mismatch? Dobara WhatsApp. Dobara confusion. Dobara loss.
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
              THE SOLUTION 🧩
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              RationKart: Built entirely on Google Ecosystem.
            </h2>
            <p className="text-xl text-slate-600">
              No SAP. No ERP. No ₹15,000/month SaaS. Multi-site stock requisition app on Google Sheets ke backend par, ek polished web app frontend ke saath. Har cheez ek jagah.
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
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.7 }}
               className="bg-indigo-600 rounded-3xl p-8 shadow-xl text-white md:col-span-2 lg:col-span-1 flex flex-col justify-center"
            >
               <h3 className="text-2xl font-bold mb-4">Plus Everything Real-Time</h3>
               <p className="text-indigo-100 font-medium leading-relaxed">
                 Dashboard pe live stats. Comment threads har request pe. @mentions for instant follow-ups.
               </p>
            </motion.div>
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
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Seamless Workflow</h2>
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
                RESULT / IMPACT 📊
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
                Data mil gaya, control mil gaya, accountability aa gayi.
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                Ek client ke 12 sites mein pehle mahine mein hi yeh 3 cheezein hui... Yeh business process automation ka asar hai. Sirf WhatsApp chhoda!
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
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">4 Hours ➔ 20 Mins</h4>
                  <p className="text-slate-600">Request processing time gira dramtically.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Zero Missed Requests</h4>
                  <p className="text-slate-600">"Manager ne dekha nahi" wali problem khatam — kyunki ab sirf approve/deny karna hai, ek button se.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                  <Upload className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Automatic Reporting</h4>
                  <p className="text-slate-600">Month-end reporting automatic — download karo CSV, dekhlo kaun si site ne kya liya, kya return hua, kya pending hai.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Razorpay Integration */}
      <section className="bg-slate-50 dark:bg-slate-900/10 py-12 border-t border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Buy Source Code & Blueprint</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium">Get lifetime access to the audited Google Workspace code & template setup guide instantly.</p>
          </div>
          <RazorpayCheckout productId="rationkart" />
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
                <Store className="w-4 h-4" />
                The Bigger Point 💡
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 leading-relaxed">
                Indian SMBs — caterers, hostels, hotel chains, manufacturing units, school canteens — sabko ek problem common hai: operations WhatsApp aur Excel pe chal rahi hain, jab ki actually ek proper workflow system chahiye.
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                Unhe SAP nahi chahiye. Oracle nahi chahiye. ₹50,000/month ka ERP nahi chahiye. Chahiye ek smart, affordable system jo unki team already samajhe — Google login, familiar UI, aur Google Sheets ka data jahan pehle se tha.
              </p>
              <p className="text-lg md:text-xl font-bold text-indigo-600">
                Yahi karta hai Suraj Automation. Indian businesses ke liye, Indian reality ke saath.
              </p>
            </div>

            <div className="bg-slate-950 text-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Stop the Chaos.</h2>
              <p className="text-xl text-slate-300 mb-10 relative z-10 max-w-2xl mx-auto">
                Aapki team bhi abhi WhatsApp groups aur forward-karte-rehte Excel sheets se manage kar rahi hai store requests?
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20my%20team%20also%20uses%20WhatsApp%20for%20grocery/store%20requests.%20I%20want%20to%20see%20RationKart%20demo." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  <MessageSquare className="w-5 h-5" />
                  DM for 30-Min Demo
                </a>
              </div>
              <p className="mt-6 text-slate-400 relative z-10 font-medium">Zero jargon, full solution.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
