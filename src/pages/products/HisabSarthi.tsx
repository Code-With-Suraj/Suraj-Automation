import { motion } from 'motion/react';
import { Calculator, AlertTriangle, CheckCircle2, FileText, Receipt, Wallet, FileSpreadsheet, TrendingUp, ShieldCheck, ArrowRight, MessageSquare, PieChart, Database, Zap, Store, ExternalLink } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import RazorpayCheckout from '../../components/RazorpayCheckout';

export default function HisabSarthi() {
  useSEO(
    'HisabSarthi | Suraj Automation',
    'Google Sheets-based GST Accounting Tool - A simple, affordable GST invoicing and accounting system.',
    'gst invoicing software, small business accounting, google sheets gst tool, simple billing app'
  );

  const problems = [
    "Risk of ₹2-5L GST notices due to 'Kaccha Hisab' (Diary/WhatsApp)",
    "Paying ₹20,000+ for Tally but only using it for basic invoicing",
    "Spending days compiling data for your CA every quarter",
    "Staff unable to use complex accounting software without long training",
    "Fear of PC crashes causing complete data loss",
    "Paying ₹18,000+ every year just for software renewals"
  ];

  const features = [
    {
      title: "Smart GST Sales Invoicing",
      icon: <Receipt className="w-6 h-6" />,
      items: [
        "Auto-detect Tax Invoice vs Bill of Supply",
        "Automatic CGST/SGST or IGST switching",
        "CA-level accuracy for all invoices",
        "Professional, print-ready formats"
      ]
    },
    {
      title: "Vendor Bills & Purchases",
      icon: <FileText className="w-6 h-6" />,
      items: [
        "Easy purchase bill entry",
        "Automatic creditor ledger updates",
        "Simple and fast stock entry",
        "Track all your payables in one place"
      ]
    },
    {
      title: "Payments & Receipts Module",
      icon: <Wallet className="w-6 h-6" />,
      items: [
        "Single-entry payment tracking",
        "Auto-update ledgers for debtors and creditors",
        "Zero confusion on outstanding balances",
        "Clear visibility of cash flow"
      ]
    },
    {
      title: "Debit & Credit Notes",
      icon: <FileSpreadsheet className="w-6 h-6" />,
      items: [
        "Easily handle sales/purchase returns",
        "Manage discounts professionally",
        "CA-compliant note generation",
        "Automatically adjusts party ledgers"
      ]
    },
    {
      title: "1-Click Ledger Reports",
      icon: <Database className="w-6 h-6" />,
      items: [
        "Instant ledger for any party",
        "Print-ready A4 format generation",
        "Share data with your CA in seconds",
        "Complete transaction history"
      ]
    },
    {
      title: "Profit & Loss Dashboard",
      icon: <PieChart className="w-6 h-6" />,
      items: [
        "1-click monthly P&L generation",
        "Track sales, expenses, and net profit",
        "Crystal clear business insights",
        "Make data-driven decisions easily"
      ]
    }
  ];

  const targetAudience = [
    "Retailers & Shop Owners",
    "Traders & Wholesalers",
    "Distributors & Supply Chains",
    "Small Manufacturers",
    "Freelancers & Service Providers",
    "Any SMB tired of complex ERPs"
  ];

  const benefits = [
    "Learn it in just 2 hours—as simple as Excel",
    "100% Data Control (Stored in your Google Drive)",
    "No bloatware—only the features you actually use",
    "Zero installation or local PC dependency",
    "Export data for your CA in 1 minute",
    "Lifetime ownership option available"
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
                <Calculator className="w-4 h-4" />
                Smart Accounting Tool
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                Ditch Tally. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Adopt HisabSarthi.
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                From GST Invoicing to P&L Reports—everything inside your Google Sheets. No heavy software, no expensive training. Just simple, fast, and 100% under your control.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">2 Hrs to Learn</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">100% Data Control</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Starts at ₹499/mo</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20a%20free%20demo%20of%20HisabSarthi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/25 items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  Book a Free Demo Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://hisabsarthi.surajdx.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-lg transition-all border border-slate-700 items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  Visit Official Website
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                      <PieChart className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg">HisabSarthi Dashboard</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { title: "Total Sales (This Month)", amount: "₹4,50,000", trend: "+12%" },
                    { title: "Total Expenses", amount: "₹1,20,000", trend: "-5%" },
                    { title: "Net Profit", amount: "₹3,30,000", trend: "+18%" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-slate-400">{stat.title}</p>
                        <p className="text-xl font-bold text-slate-200">{stat.amount}</p>
                      </div>
                      <div className="text-right">
                        <span className={`text-sm font-bold ${stat.trend.startsWith('+') ? 'text-emerald-400' : 'text-amber-400'}`}>
                          {stat.trend}
                        </span>
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
                The Reality of SMB Accounting
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Are you paying ₹20,000 for software just to make invoices?
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
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">The Solution?</h3>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                You just need simple Invoicing, Ledgers, and P&L. Not rocket science.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h4 className="text-lg font-bold text-blue-900 mb-2">✅ What is HisabSarthi?</h4>
                <p className="text-blue-800 mb-4">
                  A Google Sheets-based GST accounting tool built specifically for Indian small businesses. It has exactly what you need—not a single extra confusing feature.
                </p>
                <ul className="space-y-2 text-blue-700 font-medium">
                  <li>• Setup in just 2 hours</li>
                  <li>• As simple as using Excel</li>
                  <li>• 100% data control in your Drive</li>
                  <li>• CA-ready reports in 1 click</li>
                </ul>
                <p className="mt-4 font-bold text-blue-900">If you know basic computer, you can use it today.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">⚔️ Honest Comparison</h2>
            <p className="text-xl text-slate-400">Why pay for features you will never use?</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="p-4 text-slate-400 font-medium">Feature / Problem</th>
                  <th className="p-4 text-blue-400 font-bold text-lg">🏆 HisabSarthi</th>
                  <th className="p-4 text-slate-300 font-medium">💻 Tally / Busy</th>
                  <th className="p-4 text-slate-300 font-medium">📱 Vyapar / Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-medium">Pricing</td>
                  <td className="p-4 text-blue-300 font-bold">₹499/mo or ₹9,999 Lifetime!</td>
                  <td className="p-4 text-slate-400">₹18,000–22,500/year</td>
                  <td className="p-4 text-slate-400">₹3,000–5,000/year</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-medium">Data Ownership</td>
                  <td className="p-4 text-emerald-400 font-medium">✅ Your Google Drive. 100% Control.</td>
                  <td className="p-4 text-amber-400">⚠️ Local PC (crash risk)</td>
                  <td className="p-4 text-red-400">❌ Company server</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-medium">Learning Curve</td>
                  <td className="p-4 text-emerald-400 font-medium">✅ Just 2 Hours. Like Excel.</td>
                  <td className="p-4 text-red-400">❌ Months of training needed</td>
                  <td className="p-4 text-amber-400">⚠️ Moderate</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-medium">Unnecessary Features</td>
                  <td className="p-4 text-emerald-400 font-medium">✅ Only what SMBs need</td>
                  <td className="p-4 text-red-400">❌ 90% features never used</td>
                  <td className="p-4 text-amber-400">⚠️ Mixed</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-medium">Customization</td>
                  <td className="p-4 text-emerald-400 font-medium">✅ Open in Sheets, custom formulas</td>
                  <td className="p-4 text-red-400">❌ TDL code (needs developer)</td>
                  <td className="p-4 text-red-400">❌ Closed system</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-medium">Sharing Data with CA</td>
                  <td className="p-4 text-emerald-400 font-medium">✅ 1 minute — 1-click export</td>
                  <td className="p-4 text-red-400">❌ 2–3 days wasted per quarter</td>
                  <td className="p-4 text-amber-400">⚠️ Easier, but limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">🛠️ Core Features</h2>
            <p className="text-xl text-slate-600">Exactly what a small business needs. Not a single feature extra.</p>
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
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
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

      {/* Why HisabSarthi */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-slate-900">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
                Why HisabSarthi?
              </h2>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-slate-900">
                <Store className="w-8 h-8 text-blue-600" />
                Who is it for?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {targetAudience.map((audience, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 font-medium text-slate-700 shadow-sm">
                    {audience}
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-600 rounded-2xl text-white shadow-lg">
                <p className="text-xl font-bold">Stop relying on Kaccha Hisab.</p>
                <p className="mt-2 text-blue-100">Get professional, stay compliant, and save lakhs in potential GST notices.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Transparent Pricing</h2>
            <p className="text-xl text-slate-600 mb-4">No Hidden Charges! 🔐</p>
            <p className="text-lg text-slate-500">
              Don't burn thousands on big software. HisabSarthi's pricing is simple and affordable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Starter */}
            <div className="bg-slate-50 rounded-3xl p-8 shadow-lg border border-slate-200 flex flex-col relative">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
              <p className="text-sm text-slate-500 mb-6 h-6">Perfect for getting started</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">₹499</span>
                <span className="text-slate-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> GST Sales Invoice</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Vendor Purchases</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Receipts & Payments</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Party Ledgers</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> P&L Dashboard</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Ageing Report</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> GST Reports (GSTR-1, 3B)</li>
              </ul>
              <a href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20get%20HisabSarthi%20Starter%20Plan." target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold rounded-xl text-center transition-colors">
                Start Monthly
              </a>
            </div>

            {/* Pro */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-blue-500 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                ⭐ Most Popular
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Pro Plan</h3>
              <p className="text-sm text-slate-500 mb-6 h-6">3 months (Save ₹900!)</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">₹1,599</span>
                <span className="text-slate-500">/3 months</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm font-bold text-slate-900"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" /> Everything in Starter</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" /> Ageing Report (Outstanding)</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" /> GST Reports (GSTR-1, 3B)</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" /> Debit / Credit Notes</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" /> Advanced Journal Entries</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" /> Priority WhatsApp Support</li>
              </ul>
              <a href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20get%20HisabSarthi%20Pro%20Plan." target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-center transition-colors shadow-lg shadow-blue-500/25">
                Get 3 Months 🚀
              </a>
            </div>

            {/* Lifetime */}
            <div className="bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-800 flex flex-col relative text-white">
              <div className="absolute top-0 right-0 bg-amber-500 text-slate-900 text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-3xl">
                🎯 Best Value
              </div>
              <h3 className="text-2xl font-bold mb-2">Lifetime Access</h3>
              <p className="text-sm text-slate-400 mb-6 h-6">One-time payment — forever!</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">₹9,999</span>
                <span className="text-slate-400">/one-time</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm font-bold"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> Ek Baar Pay, Zindagi Bhar Use</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> Saare Features Included</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> Koi Yearly Renewal Nahi</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> Lifetime Code Ownership</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> Free Minor Updates</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> Ultimate Peace of Mind 😌</li>
              </ul>
              <a href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20get%20HisabSarthi%20Lifetime%20Plan." target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-xl text-center transition-colors shadow-lg shadow-amber-500/25">
                Buy Lifetime 🎯
              </a>
            </div>
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
          <RazorpayCheckout productId="hisabsarthi" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-100/80 via-white to-white -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">🎯 Ab Decision Lene Ka Time Aa Gaya Hai!</h2>
              <p className="text-xl text-slate-300 mb-8 relative z-10">
                Apne business ka data apne control mein lijiye. Aaj hi free demo book karein!
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20demo%20for%20HisabSarthi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  WhatsApp Demo
                  <MessageSquare className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://hisabsarthi.surajdx.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-lg transition-all border border-slate-700 flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  Visit Official Website
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
