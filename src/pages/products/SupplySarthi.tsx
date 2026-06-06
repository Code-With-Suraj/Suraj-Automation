import { motion } from 'motion/react';
import { Package, AlertTriangle, CheckCircle2, ListChecks, FileSpreadsheet, Users, Receipt, Wallet, Smartphone, ShieldCheck, TrendingUp, ArrowRight, MessageSquare, Store, ExternalLink } from 'lucide-react';
import { useUser } from '../../contexts/UserContext';
import { useSEO } from '../../hooks/useSEO';
import RazorpayCheckout from '../../components/RazorpayCheckout';

export default function SupplySarthi() {
  const { hasPurchased } = useUser();
  const isPurchased = hasPurchased('supplysarthi');

  useSEO(
    'SupplySarthi | Suraj Automation',
    'Complete Supply & Distribution Management System - Manage your entire supply business in one Google Sheet-based system.',
    'supply management, distribution software, order tracking, business automation'
  );

  const problems = [
    "Orders getting lost in WhatsApp messages",
    "Mismatch between ordered and delivered quantities",
    "Delayed or incorrect invoice generation",
    "Confusion over outstanding balances and payments",
    "Manual and error-prone GST calculations",
    "Scattered data across WhatsApp, notebooks, and Excel"
  ];

  const features = [
    {
      title: "Client & Site Management",
      icon: <Users className="w-6 h-6" />,
      items: [
        "Centralized client records (Name, GSTIN, Credit Limit)",
        "Manage multiple delivery sites per client",
        "Track site-specific delivery addresses and contacts",
        "Instant access to client balances and history"
      ]
    },
    {
      title: "Client-Wise Custom Pricing",
      icon: <ListChecks className="w-6 h-6" />,
      items: [
        "Set custom price lists for different clients",
        "Auto-apply correct pricing during order placement",
        "Manage default prices, GST percentages, and HSN codes",
        "Eliminate manual pricing errors"
      ]
    },
    {
      title: "Order Placement & Tracking",
      icon: <Package className="w-6 h-6" />,
      items: [
        "Track order status: Pending, Confirmed, Dispatched, Delivered",
        "Log actual delivered quantities vs. ordered quantities",
        "Generate daily Demand Summaries for warehouse planning",
        "Streamline packing and loading operations"
      ]
    },
    {
      title: "Auto GST Invoicing",
      icon: <Receipt className="w-6 h-6" />,
      items: [
        "Generate monthly invoices with a single click",
        "Auto-calculate IGST or CGST+SGST based on state",
        "Handle reverse charge applicability",
        "Print-ready professional HTML invoice formats"
      ]
    },
    {
      title: "Ledger & Outstanding Tracking",
      icon: <Wallet className="w-6 h-6" />,
      items: [
        "Professional account ledgers (Debit/Credit entries)",
        "Track invoices, payments, and credit/debit notes",
        "Real-time running balances for every client",
        "Comprehensive outstanding reports for easy collection"
      ]
    },
    {
      title: "Client Login Portal",
      icon: <Smartphone className="w-6 h-6" />,
      items: [
        "Dedicated secure login for each client",
        "Clients can view their own orders and statuses",
        "Access to past invoices and account balances",
        "Reduce follow-up calls by 70%"
      ]
    }
  ];

  const targetAudience = [
    "Manufacturers supplying to wholesalers/retailers",
    "Distributors with multiple clients and routes",
    "Construction material suppliers (cement, steel, etc.)",
    "Daily supply businesses (dairy, bakery, packaging)",
    "FMCG distributors",
    "Any B2B supplier requiring monthly invoicing"
  ];

  const benefits = [
    "One-time payment, zero recurring subscription fees",
    "100% data ownership (stored in your Google Drive)",
    "No server rent or maintenance costs",
    "Accessible from any device (mobile, tablet, desktop)",
    "Easy to customize and scale as you grow",
    "Replaces WhatsApp, registers, and Excel with one system"
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-bold tracking-wide mb-6 border border-indigo-500/20 backdrop-blur-sm">
                <Package className="w-4 h-4" />
                Featured Product
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                SupplySarthi: Complete <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                  Supply Management System
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Stop taking orders on WhatsApp. Manage your entire supply business in one Google Sheet-based system—from orders to invoices. Pay once, use for a lifetime.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">No Monthly Fees</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Auto GST Invoices</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Client Portal</span>
              </div>
              <div className="flex flex-wrap gap-4">
                {isPurchased ? (
                  <a 
                    href="#checkout-supplysarthi" 
                    className="inline-flex px-8 py-4 bg-emerald-650 hover:bg-emerald-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-emerald-500/20 items-center justify-center gap-2 group hover:-translate-y-1"
                  >
                    View Setup Handbook & Codes
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <a 
                    href="#checkout-supplysarthi" 
                    className="inline-flex px-8 py-4 bg-indigo-650 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-500/25 items-center justify-center gap-2 group hover:-translate-y-1"
                  >
                    Get instant access for ₹1,499
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
                <a 
                  href="https://supplysarthi.surajdx.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex px-8 py-4 bg-slate-900 border border-slate-750 text-slate-300 hover:bg-slate-800 rounded-xl font-bold text-lg transition-all items-center justify-center gap-2"
                >
                  Visit Official Website
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400">
                      <Store className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg">SupplySarthi Dashboard</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { client: "Sharma Traders", status: "Delivered", amount: "₹45,000" },
                    { client: "Gupta Enterprises", status: "Dispatched", amount: "₹12,500" },
                    { client: "City Supermart", status: "Pending", amount: "₹8,200" }
                  ].map((order, i) => (
                    <div key={i} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-slate-200">{order.client}</p>
                        <p className="text-sm text-slate-400">Status: {order.status}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-indigo-400">{order.amount}</p>
                        <p className="text-xs text-slate-500">Today</p>
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
                The Chaos of Supply Business
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                If you are still using Excel and copy-paste, you will fall behind the competition.
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
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">The Solution?</h3>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                A centralized system that replaces your WhatsApp, registers, and Excel sheets.
              </p>
              
              <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                <h4 className="text-lg font-bold text-indigo-900 mb-2">✅ What is SupplySarthi?</h4>
                <p className="text-indigo-800 mb-4">
                  A complete supply management system built on Google Sheets + Google Apps Script. No software to install, no servers to rent, and no expensive ERPs to buy.
                </p>
                <ul className="space-y-2 text-indigo-700 font-medium">
                  <li>• Manage clients & custom pricing</li>
                  <li>• Track orders from pending to delivered</li>
                  <li>• Auto-generate GST invoices</li>
                  <li>• Track ledgers and outstanding balances</li>
                  <li>• Provide clients with their own login portal</li>
                </ul>
                <p className="mt-4 font-bold text-indigo-900">Pay once. Yours for a lifetime.</p>
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
            <p className="text-xl text-slate-600">Everything you need to run your distribution business smoothly.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-indigo-300 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{idx + 1}️⃣ {feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-indigo-500 mt-1">•</span>
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
                <Store className="w-8 h-8 text-indigo-400" />
                💼 Who is SupplySarthi For?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {targetAudience.map((audience, idx) => (
                  <div key={idx} className="bg-slate-800 p-4 rounded-xl border border-slate-700 font-medium text-slate-300">
                    {audience}
                  </div>
                ))}
              </div>
              <p className="text-xl text-indigo-300 font-medium italic">
                "If you supply to multiple clients and generate monthly invoices, this system is built for you."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-indigo-400" />
                🎯 Why Google Sheets?
              </h2>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                    <span className="text-slate-300 font-medium text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl font-bold text-indigo-400">Real business on a reliable platform.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 relative overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Transparent Pricing</h2>
            <p className="text-xl text-slate-600 mb-4">Simple pricing. Zero surprises. 🔐</p>
            <p className="text-lg text-slate-500">
              Chota start karo subscription se, ya ek baar pay karke lifetime ownership lo — dono options available hain.
            </p>
          </div>

          {/* Subscription Plans */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Starter */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 flex flex-col relative">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
              <p className="text-sm text-slate-500 mb-6 h-10">Naya supplier jiske paas abhi thode clients hain aur growth shuru ho rahi hai</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">₹999</span>
                <span className="text-slate-500">/month</span>
                <p className="text-xs text-slate-400 mt-1">billed monthly</p>
              </div>
              <div className="bg-indigo-50 text-indigo-700 text-sm font-bold py-2 px-4 rounded-lg mb-6 inline-block w-fit">
                📊 5 Clients · 50 Orders/month
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Order Management System</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Client & Site Management (5 clients)</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> GST Invoice Auto-Generate</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Delivery Challan Generation</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Account Ledger & Payments</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Client Self-Service Portal</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Admin Dashboard</li>
                <li className="flex items-start gap-2 text-sm text-slate-400 line-through"><span className="w-4 h-4 mt-0.5 shrink-0 inline-block" /> Unlimited Clients</li>
                <li className="flex items-start gap-2 text-sm text-slate-400 line-through"><span className="w-4 h-4 mt-0.5 shrink-0 inline-block" /> Unlimited Orders</li>
                <li className="flex items-start gap-2 text-sm text-slate-400 line-through"><span className="w-4 h-4 mt-0.5 shrink-0 inline-block" /> Priority Support</li>
              </ul>
              <a href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20get%20SupplySarthi%20Starter%20Plan." target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl text-center transition-colors">
                Get Starter Plan →
              </a>
            </div>

            {/* Pro */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-indigo-500 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                ⭐ Most Popular
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Pro</h3>
              <p className="text-sm text-slate-500 mb-6 h-10">Growing supplier jise unlimited freedom chahiye bina kisi restriction ke</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">₹1,499</span>
                <span className="text-slate-500">/month</span>
                <p className="text-xs text-slate-400 mt-1">billed monthly</p>
              </div>
              <div className="bg-indigo-50 text-indigo-700 text-sm font-bold py-2 px-4 rounded-lg mb-6 inline-block w-fit">
                ✨ Unlimited Clients · Unlimited Orders
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm font-bold text-slate-900"><CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" /> Everything in Starter</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" /> Unlimited Clients & Sites</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" /> Unlimited Orders per Month</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" /> Client-wise Custom Price List</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" /> Sales & Outstanding Reports</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" /> Credit & Debit Notes</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" /> Demand Summary Reports</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" /> Printable Ledger Statements</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" /> Priority WhatsApp Support</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" /> Future Feature Updates</li>
              </ul>
              <a href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20get%20SupplySarthi%20Pro%20Plan." target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-center transition-colors shadow-lg shadow-indigo-500/25">
                Get Pro Plan →
              </a>
            </div>

            {/* Pro Annual */}
            <div className="bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-800 flex flex-col relative text-white">
              <div className="absolute top-0 right-0 bg-rose-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-3xl">
                🔥 Best Value
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro Annual</h3>
              <p className="text-sm text-slate-400 mb-6 h-10">Ek saal ek saath pay karo — 13 months ka fayda, sab kuch unlimited</p>
              <div className="mb-6">
                <p className="text-sm text-slate-400 line-through mb-1">₹1,499 × 12 = ₹17,988/year</p>
                <span className="text-4xl font-extrabold">₹10,999</span>
                <span className="text-slate-400">/year</span>
                <p className="text-xs text-slate-400 mt-1">one annual payment</p>
              </div>
              <div className="bg-rose-500/20 text-rose-300 text-sm font-bold py-2 px-4 rounded-lg mb-6 inline-block w-fit border border-rose-500/30">
                🎉 Save ₹6,989 · 👑 13 months ka fayda
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm font-bold"><CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" /> Everything in Pro Plan</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" /> 13 Months for Price of 12</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" /> Unlimited Clients & Orders</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" /> Priority Setup Assistance</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" /> Dedicated WhatsApp Support</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" /> All Future Feature Updates</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" /> Lowest Effective Monthly Cost</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" /> ★ Lock in price for full year</li>
              </ul>
              <a href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20get%20SupplySarthi%20Pro%20Annual%20Plan." target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl text-center transition-colors shadow-lg shadow-rose-500/25">
                Get Pro Annual — Best Deal 🔥
              </a>
            </div>
          </div>

          {/* Lifetime Ownership */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-indigo-500/30 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row gap-12 relative z-10">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-amber-500/20 text-amber-300 text-sm font-bold tracking-wide mb-6 border border-amber-500/30">
                  🏆 Lifetime Ownership
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">One-time setup cost. Ek baar pay karo, hamesha apna.</h3>
                <div className="mb-8">
                  <p className="text-slate-400 line-through mb-1">Market Rate: ₹60,000+</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold text-white">₹19,999</span>
                    <span className="text-indigo-200 font-medium">One-time setup fee</span>
                  </div>
                  <p className="text-indigo-300 mt-2 font-medium">No subscription ever · No hidden fees · Works on any Google account</p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                    <h4 className="font-bold text-lg text-white mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Included in ₹19,999
                    </h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 flex items-start gap-2"><span className="text-emerald-400 mt-1">•</span> Complete SupplySarthi system</li>
                      <li className="text-slate-300 flex items-start gap-2"><span className="text-emerald-400 mt-1">•</span> Full setup & configuration</li>
                      <li className="text-slate-300 flex items-start gap-2"><span className="text-emerald-400 mt-1">•</span> 3 months dedicated support</li>
                      <li className="text-slate-300 flex items-start gap-2"><span className="text-emerald-400 mt-1">•</span> Bug fixes — free in 3 months</li>
                      <li className="text-slate-300 flex items-start gap-2"><span className="text-emerald-400 mt-1">•</span> Training & onboarding</li>
                    </ul>
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                    <h4 className="font-bold text-lg text-white mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-amber-400" /> After 3 Months (on-demand)
                    </h4>
                    <p className="text-amber-300 font-bold mb-2">₹5,000 <span className="text-sm font-normal text-slate-300">Per request — only if needed. Pay jab chahiye tab.</span></p>
                    <ul className="space-y-2">
                      <li className="text-slate-300 flex items-start gap-2"><span className="text-amber-400 mt-1">•</span> Bug fix / sheet crash repair</li>
                      <li className="text-slate-300 flex items-start gap-2"><span className="text-amber-400 mt-1">•</span> New feature request</li>
                      <li className="text-slate-300 flex items-start gap-2"><span className="text-amber-400 mt-1">•</span> Major customization</li>
                    </ul>
                  </div>
                </div>

                <a href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20get%20SupplySarthi%20Lifetime%20Access%20for%20₹19,999." target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 rounded-xl font-bold text-lg transition-all shadow-xl items-center justify-center gap-2 group">
                  Get Lifetime Access — ₹19,999
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="md:w-1/2">
                <div className="bg-slate-950/50 p-8 rounded-3xl border border-indigo-500/20 h-full">
                  <h4 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Everything included — unlocked forever</h4>
                  <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                    <div className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" /> Order Management System</div>
                    <div className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" /> Client & Multi-Site Management</div>
                    <div className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" /> GST Invoice Auto-Generate</div>
                    <div className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" /> Delivery Challan Generation</div>
                    <div className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" /> Account Ledger System</div>
                    <div className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" /> Payment & Outstanding Tracking</div>
                    <div className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" /> Credit & Debit Notes</div>
                    <div className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" /> Client Self-Service Portal</div>
                    <div className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" /> Admin Dashboard & Reports</div>
                    <div className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" /> Client-wise Custom Price List</div>
                    <div className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" /> Sales & Outstanding Reports</div>
                    <div className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" /> Printable Ledger Statements</div>
                    <div className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" /> Demand Summary Reports</div>
                    <div className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" /> Unlimited Clients & Sites</div>
                    <div className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" /> Unlimited Orders</div>
                  </div>
                </div>
              </div>
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
          <RazorpayCheckout productId="supplysarthi" />
        </div>
      </section>

      {/* CTA Section */}
    </main>
  );
}
