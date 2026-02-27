import { motion } from 'motion/react';
import { Cake, AlertTriangle, CheckCircle2, Globe, ShoppingBag, PlusCircle, Tag, Coins, CreditCard, Lock, LayoutDashboard, BarChart3, MessageSquare, ArrowRight, Store, TrendingUp, ShieldCheck, Settings } from 'lucide-react';

export default function CakeSarthi() {
  const problems = [
    "Take orders only on WhatsApp",
    "Forget order details",
    "Lose track of advance payments",
    "Have no online menu",
    "No proper revenue tracking",
    "No customer data history",
    "No upselling system"
  ];

  const customerFeatures = [
    {
      title: "Beautiful Online Cake Menu",
      icon: <Globe className="w-6 h-6" />,
      items: [
        "Category-based filtering",
        "Cake variations (weight-wise pricing)",
        "Ratings & reviews",
        "WhatsApp product sharing",
        "Mobile optimized pagination system"
      ]
    },
    {
      title: "Smart Checkout Flow",
      icon: <ShoppingBag className="w-6 h-6" />,
      items: [
        "Step-by-step guided checkout",
        "Review cart & Add-ons selection",
        "Customer & Delivery details",
        "Smooth payment experience"
      ]
    },
    {
      title: "Add-ons & Smart Upselling",
      icon: <PlusCircle className="w-6 h-6" />,
      items: [
        "Regular & Smart recommended add-ons",
        "Occasion-based suggestions",
        "Feature-based access control",
        "Helps increase average order value"
      ]
    },
    {
      title: "Coupon System",
      icon: <Tag className="w-6 h-6" />,
      items: [
        "Apply coupon code",
        "Automatic discount calculation",
        "Plan-based coupon control",
        "Perfect for offers & campaigns"
      ]
    },
    {
      title: "Sweet Coins (Loyalty System)",
      icon: <Coins className="w-6 h-6" />,
      items: [
        "Customer wallet",
        "Coin redemption",
        "Reward-based retention",
        "Encourages repeat orders"
      ]
    },
    {
      title: "Secure UPI Payment Page",
      icon: <CreditCard className="w-6 h-6" />,
      items: [
        "Dedicated payment page with order summary",
        "Advance paid vs pending amount",
        "Direct UPI payment button",
        "WhatsApp fallback option"
      ]
    }
  ];

  const ownerFeatures = [
    {
      title: "Secure Owner Login",
      icon: <Lock className="w-6 h-6" />,
      items: [
        "Password protected",
        "Session-based authentication",
        "Controlled access"
      ]
    },
    {
      title: "Real-Time Order Management",
      icon: <LayoutDashboard className="w-6 h-6" />,
      items: [
        "View all & pending orders",
        "Revenue & payment status tracking",
        "Search functionality & Pagination"
      ]
    },
    {
      title: "Customer Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      items: [
        "Total revenue & pending payments",
        "Customer tracking",
        "Occasion reminders",
        "WhatsApp offer trigger"
      ]
    },
    {
      title: "Custom Cake Requests",
      icon: <Cake className="w-6 h-6" />,
      items: [
        "Customers can submit budget range & notes",
        "Custom design requests",
        "Owner can manage separately"
      ]
    },
    {
      title: "Subscription & Feature Control",
      icon: <Settings className="w-6 h-6" />,
      items: [
        "Plan-based feature access & custom branding",
        "Enable/disable revenue tracking, coupons, add-ons",
        "Expiry warning system"
      ]
    }
  ];

  const targetAudience = [
    "Local bakeries",
    "Home bakers",
    "Custom cake businesses",
    "Growing bakery chains",
    "Bakers wanting online presence",
    "Businesses tired of WhatsApp-only orders"
  ];

  const benefits = [
    "24/7 online ordering",
    "Professional brand image",
    "Higher order value via add-ons",
    "Clear revenue tracking",
    "Secure payment flow",
    "Customer data collection",
    "Repeat business via loyalty",
    "Reduced manual errors"
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-rose-900/40 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-rose-500/10 text-rose-300 text-sm font-bold tracking-wide mb-6 border border-rose-500/20 backdrop-blur-sm">
                <Cake className="w-4 h-4" />
                CakeSarthi
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                Complete Online Ordering & <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
                  Growth System for Bakeries
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Turn your local bakery into a smart online business. CakeSarthi gives you your own online cake ordering website, smart checkout, UPI payments, and an owner dashboard.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Online Menu</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">UPI Payments</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Owner Dashboard</span>
              </div>
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20a%20free%20demo%20of%20CakeSarthi." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-rose-500/25 items-center justify-center gap-2 group hover:-translate-y-1"
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
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-500/20 rounded-lg flex items-center justify-center text-rose-400">
                      <Store className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg">Sweet Treats Bakery</span>
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
                      <p className="font-medium text-slate-200">New Order: #1042</p>
                      <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-md">Paid</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-400 mb-4">
                      <p>Chocolate Truffle (1kg)</p>
                      <p>+ Candles & Knife</p>
                    </div>
                    <div className="border-t border-slate-700/50 pt-3 flex justify-between items-center">
                      <p className="text-sm text-slate-400">Delivery: Today, 5 PM</p>
                      <p className="font-bold text-rose-400 text-lg">₹850</p>
                    </div>
                  </div>
                  <div className="bg-rose-500/10 p-4 rounded-xl border border-rose-500/20 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-200">Today's Revenue</p>
                      <p className="text-sm text-slate-400">12 Orders • 3 Pending</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-rose-400 text-xl">₹9,450</p>
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
                The Real Problem in Most Bakeries
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Taking orders only on WhatsApp leads to forgotten details, lost payments, and missed sales.
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
                <li className="flex items-center gap-2">❌ Missed sales</li>
                <li className="flex items-center gap-2">❌ Manual confusion</li>
                <li className="flex items-center gap-2">❌ Payment disputes</li>
                <li className="flex items-center gap-2">❌ No growth system</li>
              </ul>
              
              <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                <h4 className="text-lg font-bold text-rose-900 mb-2">✅ What is CakeSarthi?</h4>
                <p className="text-rose-800 mb-4">
                  A web-based online ordering & owner dashboard system for bakeries.
                </p>
                <p className="font-bold text-rose-900">It includes a customer ordering website, smart checkout, UPI payments, owner dashboard, and customer analytics.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">🛍️ Customer Website Features</h2>
            <p className="text-xl text-slate-600">Give your customers a seamless ordering experience.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-rose-300 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{idx + 1}️⃣ {feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-rose-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">👨‍💼 Owner Dashboard Features</h2>
            <p className="text-xl text-slate-600">Everything you need to manage and grow your bakery.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {ownerFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-slate-300 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{idx + 1}️⃣ {feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-slate-400 mt-1">•</span>
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
                <Store className="w-8 h-8 text-rose-400" />
                👥 Who Should Use CakeSarthi?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {targetAudience.map((audience, idx) => (
                  <div key={idx} className="bg-slate-800 p-4 rounded-xl border border-slate-700 font-medium text-slate-300">
                    {audience}
                  </div>
                ))}
              </div>
              <p className="text-xl text-rose-300 font-medium italic">
                "If you sell cakes — you need a system like this."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Settings className="w-8 h-8 text-rose-400" />
                🎯 How CakeSarthi Works
              </h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    1
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Customer visits your bakery website</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    2
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Selects cake, adds add-ons & applies coupon</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    3
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Pays advance via UPI</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    4
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Order appears in owner dashboard</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    5
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Owner tracks revenue & customer returns again</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl font-bold text-rose-400">Simple. Structured. Growth-focused.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits & Security */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-rose-600" />
                📊 Business Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-rose-600 text-white p-6 rounded-2xl shadow-lg">
                <p className="text-xl font-bold">This is not just a website.</p>
                <p className="text-2xl font-extrabold mt-1">This is a revenue engine.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-rose-600" />
                🔐 Secure & Scalable
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Google Apps Script backend</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Controlled dashboard access</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Feature-based restriction</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Plan-based scaling & Modular architecture</p>
                </div>
              </div>
              <p className="text-center text-rose-600 font-bold text-lg">Built for real business growth.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing & Customization & CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-rose-100/80 via-white to-white -z-10"></div>
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
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Bakery size</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Feature access</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Branding needs</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Custom requirements</li>
                </ul>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20get%20a%20custom%20quote%20for%20CakeSarthi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-colors"
                >
                  Get Custom Quote
                </a>
              </div>

              <div className="bg-rose-600 p-8 rounded-3xl shadow-xl text-left text-white">
                <h3 className="text-2xl font-bold mb-4 text-white">👨‍💻 About Suraj Automation</h3>
                <p className="text-rose-100 mb-6">We Build Smart Business Systems:</p>
                <ul className="space-y-3 mb-8 text-rose-50">
                  <li className="flex items-center gap-2 font-medium">✨ Manual orders → Digital system</li>
                  <li className="flex items-center gap-2 font-medium">✨ Confusion → Control</li>
                  <li className="flex items-center gap-2 font-medium">✨ Local bakery → Online brand 🚀</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">🚀 Ready to Take Your Bakery Online?</h2>
              <p className="text-xl text-slate-300 mb-8 relative z-10">
                If you want more orders, better control, a professional brand, and higher revenue... <br className="hidden sm:block" />
                <span className="text-white font-bold">CakeSarthi is built for you.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20demo%20for%20CakeSarthi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-rose-500/25 flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  Book a Free Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20Let's%20build%20my%20online%20bakery%20system." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  <MessageSquare className="w-5 h-5" />
                  Let’s Build Your Online Bakery System
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
