import { motion } from 'motion/react';
import { Receipt, AlertTriangle, CheckCircle2, ListChecks, Search, Calculator, BrainCircuit, LayoutDashboard, FileSpreadsheet, Settings, ArrowRight, MessageSquare, Store, TrendingUp, ShieldCheck } from 'lucide-react';

export default function BillSarthi() {
  const problems = [
    "Store team enters bills manually",
    "GST calculations are wrong",
    "HSN missing",
    "Duplicate vendor bill numbers",
    "Wrong unit prices",
    "Accounts team keeps rejecting entries"
  ];

  const features = [
    {
      title: "Smart Bill Entry",
      icon: <ListChecks className="w-6 h-6" />,
      items: [
        "Add multiple line items",
        "Enter quantity, unit price, GST, CESS",
        "Auto calculate total amount",
        "Freight & MRP bill support"
      ]
    },
    {
      title: "Smart Price Lookup",
      icon: <Search className="w-6 h-6" />,
      items: [
        "Select Site, Vendor, Item",
        "System auto-suggests price based on historical data",
        "No manual guessing",
        "No wrong pricing"
      ]
    },
    {
      title: "GST & Tax Validation",
      icon: <Calculator className="w-6 h-6" />,
      items: [
        "GST % auto calculation",
        "CESS support & HSN tracking",
        "Duplicate vendor bill detection",
        "Real-time validation before submission"
      ]
    },
    {
      title: "SarthiAI – Intelligent Insights",
      icon: <BrainCircuit className="w-6 h-6" />,
      items: [
        "Pattern detection",
        "Duplicate detection",
        "Smart checks",
        "Data intelligence"
      ]
    },
    {
      title: "Real-Time Dashboard",
      icon: <LayoutDashboard className="w-6 h-6" />,
      items: [
        "Total bills & Total amount",
        "Active sites & Active vendors",
        "Bill status tracking",
        "Clean overview for management"
      ]
    },
    {
      title: "Advanced Reports & Management",
      icon: <FileSpreadsheet className="w-6 h-6" />,
      items: [
        "Generate reports by Date, Site, Vendor",
        "View bills with filters & pagination",
        "Edit (if permitted) & Delete (if allowed)",
        "Download PDF & share easily"
      ]
    }
  ];

  const targetAudience = [
    "Retail chains",
    "Multi-location businesses",
    "Construction companies",
    "Manufacturing units",
    "Warehouse operations",
    "Any company handling vendor bills"
  ];

  const benefits = [
    "Reduce billing errors by 80%+",
    "Faster approval cycle",
    "Clean structured database",
    "Better audit readiness",
    "Clear accountability",
    "Time saved for Accounts team",
    "Data-driven decisions"
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-300 text-sm font-bold tracking-wide mb-6 border border-blue-500/20 backdrop-blur-sm">
                <Receipt className="w-4 h-4" />
                BillSarthi
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                Smart Vendor Bill <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Management System
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Bills with errors? Accounts team rejecting entries? Not anymore. BillSarthi is a smart web-based billing system that helps store teams enter vendor bills correctly — the first time.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">No more Excel confusion</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">No more GST mistakes</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Clean, validated bills</span>
              </div>
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20a%20free%20demo%20of%20BillSarthi." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/25 items-center justify-center gap-2 group hover:-translate-y-1"
              >
                Book a Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                      <Receipt className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg">BillSarthi Entry</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <div className="flex justify-between mb-2">
                      <p className="font-medium text-slate-200">Vendor: ABC Traders</p>
                      <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-md">Validated</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-400 mb-4">
                      <p>Bill No: INV-2024-089</p>
                      <p>Date: Today</p>
                    </div>
                    <div className="border-t border-slate-700/50 pt-3 flex justify-between items-center">
                      <p className="text-sm text-slate-400">Items: 5</p>
                      <p className="font-bold text-blue-400 text-lg">₹1,24,500</p>
                    </div>
                  </div>
                  <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 flex items-center gap-3">
                    <BrainCircuit className="w-5 h-5 text-blue-400" />
                    <p className="text-sm text-blue-300">SarthiAI: GST calculation verified. No duplicate bill found.</p>
                  </div>
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
                The Real Problem
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                If billing errors are slowing your operations — BillSarthi fixes that.
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
                Time waste. Frustration. Delayed payments. No data clarity.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h4 className="text-lg font-bold text-blue-900 mb-2">✅ What is BillSarthi?</h4>
                <p className="text-blue-800 mb-4">
                  A structured Vendor Bill Entry & Validation System built for Store Executives, Site In-charges, Billing Operators, and Accounts Teams.
                </p>
                <ul className="space-y-2 text-blue-700 font-medium">
                  <li>✔ Validated</li>
                  <li>✔ Calculated correctly</li>
                  <li>✔ Properly structured</li>
                  <li>✔ Traceable</li>
                  <li>✔ Ready for Accounts</li>
                </ul>
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
            <p className="text-xl text-slate-600">Everything you need for clean, validated, trackable bills.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-300 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{idx + 1}️⃣ {feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-blue-500 mt-1">•</span>
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
                <Store className="w-8 h-8 text-blue-400" />
                💼 Who Should Use BillSarthi?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {targetAudience.map((audience, idx) => (
                  <div key={idx} className="bg-slate-800 p-4 rounded-xl border border-slate-700 font-medium text-slate-300">
                    {audience}
                  </div>
                ))}
              </div>
              <p className="text-xl text-blue-300 font-medium italic">
                "If vendor billing is part of your operations — this system saves you serious time."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Settings className="w-8 h-8 text-blue-400" />
                🎯 How It Works
              </h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    1
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">User logs in & selects site/vendor</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    2
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Add line items (System auto calculates)</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    3
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Validation checks run & Submit bill</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    4
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Accounts receives clean data</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl font-bold text-blue-400">Simple workflow. Zero confusion.</p>
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
                <TrendingUp className="w-8 h-8 text-blue-600" />
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
              <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                <p className="text-xl font-bold">This is not just billing.</p>
                <p className="text-2xl font-extrabold mt-1">This is operational control.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
                🔐 Secure & Structured
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Role-based navigation</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Admin-only sections</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Controlled editing</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Structured database</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">💡 Why BillSarthi is Different</h3>
                <p className="text-slate-600 mb-4">Most businesses use Excel, WhatsApp, or manual entry. BillSarthi gives you:</p>
                <ul className="space-y-3 font-medium text-slate-800">
                  <li className="flex items-center gap-2">✔ Validation</li>
                  <li className="flex items-center gap-2">✔ Intelligence</li>
                  <li className="flex items-center gap-2">✔ Automation</li>
                  <li className="flex items-center gap-2">✔ Standardization</li>
                  <li className="flex items-center gap-2">✔ Accountability</li>
                </ul>
                <p className="mt-4 text-blue-600 font-bold">This is system-driven billing.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing & Customization & CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-100/80 via-white to-white -z-10"></div>
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
                <p className="text-slate-600 mb-6">Pricing depends on:</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Number of users</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Number of sites</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Custom features required</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Integration needs</li>
                </ul>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20know%20the%20pricing%20for%20BillSarthi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-colors"
                >
                  Contact for Custom Pricing
                </a>
              </div>

              <div className="bg-blue-600 p-8 rounded-3xl shadow-xl text-left text-white">
                <h3 className="text-2xl font-bold mb-4 text-white">👨‍💻 About Suraj Automation</h3>
                <p className="text-blue-100 mb-6">We build smart internal systems for growing businesses:</p>
                <ul className="space-y-3 mb-8 text-blue-50">
                  <li className="flex items-center gap-2 font-medium">✨ Billing automation</li>
                  <li className="flex items-center gap-2 font-medium">✨ Stock management</li>
                  <li className="flex items-center gap-2 font-medium">✨ Internal approval systems</li>
                  <li className="flex items-center gap-2 font-medium">✨ Custom dashboards</li>
                  <li className="flex items-center gap-2 font-medium">✨ AI-supported business tools</li>
                </ul>
                <p className="font-bold text-white">Goal is simple: Manual chaos → Structured automation.</p>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">🚀 Ready to Fix Your Billing System?</h2>
              <p className="text-xl text-slate-300 mb-8 relative z-10">
                If billing errors are slowing your growth, if Accounts keeps rejecting bills, if Excel is creating confusion… <br className="hidden sm:block" />
                <span className="text-white font-bold">BillSarthi is your solution.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20demo%20for%20BillSarthi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  Book Your Free Demo Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20Let's%20build%20a%20smart%20billing%20system." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  <MessageSquare className="w-5 h-5" />
                  Let’s Build a Smart Billing System
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
