import { motion } from 'motion/react';
import { Wallet, AlertTriangle, CheckCircle2, ListChecks, Calculator, Save, UserCheck, LayoutDashboard, PieChart, Clock, Upload, ArrowRight, MessageSquare, Store, TrendingUp, ShieldCheck, Settings } from 'lucide-react';

export default function Claimo() {
  const problems = [
    "Expense claims come via email, WhatsApp, Excel",
    "No standard format",
    "Missing receipts",
    "No approval tracking",
    "Finance doesn’t know what is pending",
    "No proper audit trail"
  ];

  const features = [
    {
      title: "Easy Expense Submission",
      icon: <ListChecks className="w-6 h-6" />,
      items: [
        "Enter name, email, department & expense type",
        "Add travel mode (Car, Bike, Public Transport)",
        "Upload receipt (PDF, JPG, PNG) or capture via camera",
        "Save draft before submission"
      ]
    },
    {
      title: "Smart Travel Calculation",
      icon: <Calculator className="w-6 h-6" />,
      items: [
        "Distance-based calculation for Car & Bike",
        "Auto rate calculation",
        "No manual math errors",
        "System automatically calculates amount based on KM"
      ]
    },
    {
      title: "Draft Save Feature",
      icon: <Save className="w-6 h-6" />,
      items: [
        "Save incomplete expense",
        "Load saved draft",
        "Delete draft or submit later",
        "No data loss. No re-entry."
      ]
    },
    {
      title: "Multi-Level Approval Workflow",
      icon: <UserCheck className="w-6 h-6" />,
      items: [
        "Employee submission",
        "Manager approval/rejection",
        "Finance processing",
        "Status updates (Pending / Approved / Rejected / Paid)"
      ]
    },
    {
      title: "Manager Approval Dashboard",
      icon: <LayoutDashboard className="w-6 h-6" />,
      items: [
        "See claims pending approval",
        "View full details & approve or reject",
        "Filter by employee or department",
        "Track approval history"
      ]
    },
    {
      title: "Finance Dashboard",
      icon: <PieChart className="w-6 h-6" />,
      items: [
        "Total pending, approved & paid claims",
        "Total amount summary & paid amount tracking",
        "Update payment status",
        "Add finance notes"
      ]
    },
    {
      title: "Real-Time Status Tracking",
      icon: <Clock className="w-6 h-6" />,
      items: [
        "Submission & approval dates",
        "Manager email & finance notes",
        "Current status badge",
        "No more “Sir mera claim approve hua kya?”"
      ]
    },
    {
      title: "Receipt Upload & Storage",
      icon: <Upload className="w-6 h-6" />,
      items: [
        "Secure file upload (PDF / Image)",
        "Camera capture support",
        "Direct receipt view link",
        "Complete digital record"
      ]
    }
  ];

  const targetAudience = [
    "Companies with 10+ employees",
    "Growing startups",
    "Sales teams with travel expenses",
    "Manufacturing companies",
    "Construction companies",
    "Any business handling reimbursements"
  ];

  const benefits = [
    "Faster reimbursements",
    "Clear approval workflow",
    "Complete audit trail",
    "Reduced manual errors",
    "Centralized expense tracking",
    "Budget visibility by department",
    "Professional internal system"
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-900/40 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-amber-500/10 text-amber-300 text-sm font-bold tracking-wide mb-6 border border-amber-500/20 backdrop-blur-sm">
                <Wallet className="w-4 h-4" />
                Claimo
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                Smart Expense & <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  Reimbursement System
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Tired of Excel Expense Sheets & Approval Delays? Claimo brings structure, transparency, and speed to your entire expense process.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">No lost receipts</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Fast approvals</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Clear audit trail</span>
              </div>
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20a%20free%20demo%20of%20Claimo." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-amber-500/25 items-center justify-center gap-2 group hover:-translate-y-1"
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
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-orange-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400">
                      <Wallet className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg">Claimo Dashboard</span>
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
                      <p className="font-medium text-slate-200">Rahul Sharma</p>
                      <span className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs font-bold rounded-md">Pending Approval</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-400 mb-4">
                      <p>Type: Client Meeting (Travel)</p>
                      <p>Date: Today</p>
                    </div>
                    <div className="border-t border-slate-700/50 pt-3 flex justify-between items-center">
                      <p className="text-sm text-slate-400">Receipt Attached</p>
                      <p className="font-bold text-amber-400 text-lg">₹1,250</p>
                    </div>
                  </div>
                  <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-200">Priya Singh</p>
                      <p className="text-sm text-slate-400">Type: Office Supplies</p>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-md mb-1 inline-block">Paid</span>
                      <p className="font-bold text-emerald-400">₹4,500</p>
                    </div>
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
                The Real Problem in Most Companies
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Employees submit bills on WhatsApp. Managers forget approvals. Finance keeps asking for missing details.
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
              <ul className="space-y-3 font-medium text-slate-800 mb-8">
                <li className="flex items-center gap-2">❌ Delayed reimbursements</li>
                <li className="flex items-center gap-2">❌ Frustrated employees</li>
                <li className="flex items-center gap-2">❌ No financial clarity</li>
                <li className="flex items-center gap-2">❌ Risk during audit</li>
              </ul>
              
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                <h4 className="text-lg font-bold text-amber-900 mb-2">✅ What is Claimo?</h4>
                <p className="text-amber-800 mb-4">
                  A smart, web-based Expense Management System built for Employees, Managers, Finance Teams, and Growing organizations.
                </p>
                <p className="font-bold text-amber-900">It manages the full process: Submit → Approve → Track → Pay → Report</p>
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
            <p className="text-xl text-slate-600">Everything you need for a smooth reimbursement process.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-amber-300 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{idx + 1}️⃣ {feature.title}</h3>
                <ul className="space-y-2 text-sm">
                  {feature.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-amber-500 mt-1">•</span>
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
                <Store className="w-8 h-8 text-amber-400" />
                👥 Who Should Use Claimo?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {targetAudience.map((audience, idx) => (
                  <div key={idx} className="bg-slate-800 p-4 rounded-xl border border-slate-700 font-medium text-slate-300">
                    {audience}
                  </div>
                ))}
              </div>
              <p className="text-xl text-amber-300 font-medium italic">
                "If you reimburse employees — you need Claimo."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Settings className="w-8 h-8 text-amber-400" />
                🎯 How Claimo Works
              </h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    1
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Employee submits claim</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    2
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Manager reviews and approves</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    3
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Finance processes payment</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    4
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Status updates automatically</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    5
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Data available anytime for reporting</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl font-bold text-amber-400">Simple. Structured. Transparent.</p>
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
                <TrendingUp className="w-8 h-8 text-amber-600" />
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
              <div className="bg-amber-600 text-white p-6 rounded-2xl shadow-lg">
                <p className="text-xl font-bold">This is not just expense tracking.</p>
                <p className="text-2xl font-extrabold mt-1">This is financial discipline.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-amber-600" />
                🔐 Secure & Role-Based Access
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Role-based UI</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Controlled dashboard visibility</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Secure data storage</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Centralized database</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">💡 Why Claimo is Different</h3>
                <p className="text-slate-600 mb-4">Most companies use Excel sheets, Email threads, or WhatsApp screenshots. Claimo gives you:</p>
                <ul className="space-y-3 font-medium text-slate-800">
                  <li className="flex items-center gap-2">✔ Structured workflow</li>
                  <li className="flex items-center gap-2">✔ Digital receipt storage</li>
                  <li className="flex items-center gap-2">✔ Multi-role dashboard</li>
                  <li className="flex items-center gap-2">✔ Automated calculations</li>
                  <li className="flex items-center gap-2">✔ Clean reporting</li>
                  <li className="flex items-center gap-2">✔ Real-time tracking</li>
                </ul>
                <p className="mt-4 text-amber-600 font-bold">Manual chaos → Structured system.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing & Customization & CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-amber-100/80 via-white to-white -z-10"></div>
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
                <p className="text-slate-600 mb-6">Custom pricing based on:</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Number of employees</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Departments</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Custom workflow needs</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Additional automation requirements</li>
                </ul>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20know%20the%20pricing%20for%20Claimo." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-colors"
                >
                  Contact for Pricing
                </a>
              </div>

              <div className="bg-amber-600 p-8 rounded-3xl shadow-xl text-left text-white">
                <h3 className="text-2xl font-bold mb-4 text-white">👨‍💻 About Suraj Automation</h3>
                <p className="text-amber-100 mb-6">Building Smart Internal Business Systems:</p>
                <ul className="space-y-3 mb-8 text-amber-50">
                  <li className="flex items-center gap-2 font-medium">✨ Billing automation</li>
                  <li className="flex items-center gap-2 font-medium">✨ Stock management</li>
                  <li className="flex items-center gap-2 font-medium">✨ Internal approval systems</li>
                  <li className="flex items-center gap-2 font-medium">✨ Custom dashboards</li>
                </ul>
                <p className="font-bold text-white">Simple. Practical. Business-Focused.</p>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">🚀 Ready to Control Your Expense System?</h2>
              <p className="text-xl text-slate-300 mb-8 relative z-10">
                If expense approvals are slow… If employees keep asking for reimbursement updates… If finance team is struggling with tracking… <br className="hidden sm:block" />
                <span className="text-white font-bold">Claimo will fix your entire workflow.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20demo%20for%20Claimo." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  Book Your Free Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20Let's%20automate%20my%20expense%20system." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  <MessageSquare className="w-5 h-5" />
                  Let’s Automate Your Expense System
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
