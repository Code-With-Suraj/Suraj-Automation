import { motion } from 'motion/react';
import { Package, AlertTriangle, CheckCircle2, ListChecks, History, Upload, Smartphone, Store, TrendingUp, ShieldCheck, Settings, ArrowRight, MessageSquare, FileSpreadsheet, Lock } from 'lucide-react';

export default function StockSarthi() {
  const problems = [
    "Multiple sites, but no centralized tracking",
    "Manual stock entry in Excel",
    "No proper closing stock visibility",
    "No filtering by date or site",
    "No proper report export",
    "No control over who edited what"
  ];

  const features = [
    {
      title: "Smart Stock Entry System",
      icon: <ListChecks className="w-6 h-6" />,
      items: [
        "Add item name, quantity & rate",
        "Auto-calculate amount",
        "Site-wise entry",
        "User tracking",
        "Status control (Active / Inactive)"
      ]
    },
    {
      title: "CSV Bulk Upload",
      icon: <Upload className="w-6 h-6" />,
      items: [
        "Upload multiple stock entries at once",
        "Drag & drop CSV with upload preview",
        "Error detection",
        "Success & failure summary"
      ]
    },
    {
      title: "Date-wise Closing Stock by Site",
      icon: <History className="w-6 h-6" />,
      items: [
        "Select Site and Date",
        "Instantly see Item-wise closing stock",
        "View Quantity, Rate, and Total value",
        "Clear summary with total amount calculation"
      ]
    },
    {
      title: "Advanced Reports & CSV Download",
      icon: <FileSpreadsheet className="w-6 h-6" />,
      items: [
        "Generate filtered reports (Site-wise, Date range)",
        "Preview before download",
        "Total records & Total amount summary",
        "Download CSV in one click (User name excluded for privacy)"
      ]
    },
    {
      title: "Manage & Edit Stock Entries",
      icon: <Settings className="w-6 h-6" />,
      items: [
        "Filter by site & date",
        "Search by item or user",
        "Edit & delete stock entries",
        "Pagination support"
      ]
    },
    {
      title: "Role-Based Structured System",
      icon: <Lock className="w-6 h-6" />,
      items: [
        "User tracking",
        "Site selection",
        "Status badge system",
        "Clean table format",
        "Secure modification flow"
      ]
    }
  ];

  const targetAudience = [
    "Businesses with multiple locations",
    "Companies doing daily stock movement",
    "Owners tired of Excel chaos",
    "Managers needing daily closing stock clarity",
    "Businesses preparing for scale"
  ];

  const benefits = [
    "Save 2–4 hours daily",
    "Reduce stock mismatch",
    "Faster reporting",
    "Clear accountability",
    "Better audit readiness",
    "Professional internal system",
    "Easy scalability"
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-300 text-sm font-bold tracking-wide mb-6 border border-emerald-500/20 backdrop-blur-sm">
                <Package className="w-4 h-4" />
                StockSarthi
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                Smart Stock Entry & <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Closing Stock Management
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Take Full Control of Your Stock – Without Excel Confusion. A simple and powerful web-based stock entry and reporting system built for growing businesses.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Daily stock entry</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Site-wise tracking</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">CSV download reports</span>
              </div>
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20a%20free%20demo%20of%20StockSarthi." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-emerald-500/25 items-center justify-center gap-2 group hover:-translate-y-1"
              >
                Book a Free Demo Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">
                      <Package className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg">StockSarthi Dashboard</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-slate-200">Cement Bags (50kg)</p>
                        <p className="text-sm text-slate-400">Site: North Warehouse • Qty: 150</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-emerald-400">₹45,000</p>
                        <p className="text-xs text-slate-500">Updated Today</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 text-red-600 font-bold mb-4">
                <AlertTriangle className="w-5 h-5" />
                The Problem
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                If your business is scaling but your system is not — this product is for you.
              </h2>
              
              <div className="space-y-4 mb-8">
                {problems.map((prob, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">×</span>
                    </div>
                    <span className="text-slate-700 font-medium">{prob}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Result?</h3>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                Stock mismatch. Reporting delay. Management confusion.
              </p>
              
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <h4 className="text-lg font-bold text-emerald-900 mb-2">✅ What is StockSarthi?</h4>
                <p className="text-emerald-800 mb-4">
                  A complete Stock Entry & Reporting Web App designed for multi-site businesses, warehouses, manufacturing units, and retail chains.
                </p>
                <ul className="space-y-2 text-emerald-700 font-medium">
                  <li>• Add stock entries & bulk upload</li>
                  <li>• Edit & manage entries securely</li>
                  <li>• Track site-wise closing stock</li>
                  <li>• Generate filtered reports</li>
                  <li>• Download CSV reports instantly</li>
                </ul>
                <p className="mt-4 font-bold text-emerald-900">All in one secure dashboard.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">🔥 Core Features</h2>
            <p className="text-xl text-slate-600">Everything you need to control your stock properly.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-emerald-300 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{idx + 1}️⃣ {feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-emerald-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works & Who is it for */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Store className="w-8 h-8 text-emerald-400" />
                💼 Who Should Use StockSarthi?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {targetAudience.map((audience, idx) => (
                  <div key={idx} className="bg-slate-800 p-4 rounded-xl border border-slate-700 font-medium text-slate-300">
                    {audience}
                  </div>
                ))}
              </div>
              <p className="text-xl text-emerald-300 font-medium italic">
                "If stock matters in your business, this system matters."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Settings className="w-8 h-8 text-emerald-400" />
                🎯 How It Works
              </h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    1
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">User logs in & selects site</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    2
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Add stock entry (System calculates amount)</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    3
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Data stored centrally</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    4
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Manager views reports & downloads CSV</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl font-bold text-emerald-400">Clear process. No confusion.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits & Security */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
                📊 Business Benefits
              </h2>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-emerald-600 text-white p-6 rounded-2xl shadow-lg">
                <p className="text-xl font-bold">This is not just data entry.</p>
                <p className="text-2xl font-extrabold mt-1">This is control.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-emerald-600" />
                🔐 Secure & Reliable
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Web-based login system</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Structured data storage</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">User-level tracking</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Clean audit trail</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">🧠 Why This Is Different</h3>
                <p className="text-slate-600 mb-4">Most tools are too complex, too expensive, or just Excel with extra steps. StockSarthi is:</p>
                <ul className="space-y-3 font-medium text-slate-800">
                  <li className="flex items-center gap-2">✔ Simple</li>
                  <li className="flex items-center gap-2">✔ Practical</li>
                  <li className="flex items-center gap-2">✔ Business-focused</li>
                  <li className="flex items-center gap-2">✔ Customizable</li>
                </ul>
                <p className="mt-4 text-emerald-600 font-bold">Designed for Indian operational reality.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing & Customization & CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-100/80 via-white to-white -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">💰 Pricing</h3>
                <p className="text-slate-600 mb-6">Customized based on:</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Number of users</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Number of sites</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Custom feature requirements</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Automation integration</li>
                </ul>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20know%20the%20pricing%20for%20StockSarthi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-colors"
                >
                  Contact for Custom Pricing
                </a>
              </div>

              <div className="bg-emerald-600 p-8 rounded-3xl shadow-xl text-left text-white">
                <h3 className="text-2xl font-bold mb-4 text-white">👨‍💻 About Suraj Automation</h3>
                <p className="text-emerald-100 mb-6">We build:</p>
                <ul className="space-y-3 mb-8 text-emerald-50">
                  <li className="flex items-center gap-2 font-medium">✨ Practical business systems</li>
                  <li className="flex items-center gap-2 font-medium">✨ Smart automation tools</li>
                  <li className="flex items-center gap-2 font-medium">✨ Custom dashboards</li>
                  <li className="flex items-center gap-2 font-medium">✨ Operational control solutions</li>
                </ul>
                <p className="font-bold text-white">Our goal is simple: Turn manual chaos into structured systems.</p>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">🚀 Want to See It Live?</h2>
              <p className="text-xl text-slate-300 mb-8 relative z-10">
                See how your current stock process compares. Understand where you're losing efficiency. <br className="hidden sm:block" />
                <span className="text-white font-bold">No pressure. Just clarity. Stop managing stock blindly. Start managing it professionally.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20demo%20for%20StockSarthi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  Book a Free Demo Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20Let's%20automate%20my%20operations." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  <MessageSquare className="w-5 h-5" />
                  Let’s Automate Your Operations
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
