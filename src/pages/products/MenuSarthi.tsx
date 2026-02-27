import { motion } from 'motion/react';
import { Utensils, AlertTriangle, CheckCircle2, Smartphone, ShoppingBag, Edit3, LayoutDashboard, BarChart3, Settings, ArrowRight, MessageSquare, Store, TrendingUp, ShieldCheck } from 'lucide-react';

export default function MenuSarthi() {
  const problems = [
    "Menu printed once, never updated",
    "Out-of-stock items still shown",
    "No direct customer data",
    "Commission eating profit",
    "No order dashboard",
    "No upselling or customization options"
  ];

  const customerFeatures = [
    {
      title: "Beautiful Digital Menu",
      icon: <Smartphone className="w-6 h-6" />,
      items: [
        "Category tabs & Smooth animations",
        "Glassmorphism header & Premium card layout",
        "Dietary indicators (Veg / Non-Veg / Egg)",
        "Unavailable badge support"
      ]
    },
    {
      title: "Smart Variants & Customization",
      icon: <Settings className="w-6 h-6" />,
      items: [
        "Size options (Half / Full) & Multiple pricing",
        "Add-ons & Special notes section",
        "GST calculation",
        "Customer gets full control while ordering"
      ]
    },
    {
      title: "Add Special Instructions",
      icon: <Edit3 className="w-6 h-6" />,
      items: [
        "Customers can add notes (Less spicy, No onion, etc.)",
        "Notes appear clearly in admin dashboard",
        "Personalized ordering experience"
      ]
    },
    {
      title: "Smart Cart System",
      icon: <ShoppingBag className="w-6 h-6" />,
      items: [
        "Live cart count & Animated cart panel",
        "GST calculation & Subtotal breakdown",
        "Add/remove quantity & Variant-based logic",
        "No manual billing required"
      ]
    }
  ];

  const adminFeatures = [
    {
      title: "Secure Admin Login",
      icon: <ShieldCheck className="w-6 h-6" />,
      items: [
        "Password-protected kitchen dashboard",
        "Secure access for staff"
      ]
    },
    {
      title: "Order Management",
      icon: <LayoutDashboard className="w-6 h-6" />,
      items: [
        "View all & pending orders",
        "Mark completed",
        "Search by token or mobile number",
        "Clear kitchen control"
      ]
    },
    {
      title: "Live Stats Dashboard",
      icon: <BarChart3 className="w-6 h-6" />,
      items: [
        "Total orders today",
        "Pending & Completed orders",
        "Total revenue tracking",
        "One glance = Full clarity"
      ]
    },
    {
      title: "Manage Menu Items",
      icon: <Utensils className="w-6 h-6" />,
      items: [
        "Add/Edit items & image URLs",
        "Set GST & Dietary type",
        "Mark available / out-of-stock",
        "Add variants & add-ons (JSON support)"
      ]
    }
  ];

  const targetAudience = [
    "Restaurants wanting direct orders",
    "Cloud kitchens",
    "Cafes",
    "QSR brands",
    "Multi-branch outlets",
    "Food startups"
  ];

  const benefits = [
    "Increase direct sales",
    "Reduce aggregator dependency",
    "Improve brand image",
    "Faster order processing",
    "Less staff confusion",
    "Real-time revenue visibility",
    "Upsell via add-ons",
    "Structured data"
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-900/40 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-red-500/10 text-red-300 text-sm font-bold tracking-wide mb-6 border border-red-500/20 backdrop-blur-sm">
                <Utensils className="w-4 h-4" />
                MenuSarthi
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                Premium Digital Menu & <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Online Ordering System
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Turn Your Restaurant Into a Smart Digital Ordering System. MenuSarthi gives you your own premium digital menu and direct ordering system — without heavy commission.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Zero Commission</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Direct Orders</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Premium UI</span>
              </div>
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20a%20free%20demo%20of%20MenuSarthi." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-red-500/25 items-center justify-center gap-2 group hover:-translate-y-1"
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
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-orange-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400">
                      <Store className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg">MenuSarthi Kitchen</span>
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
                      <p className="font-medium text-slate-200">Token: #402</p>
                      <span className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs font-bold rounded-md">Preparing</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-400 mb-4">
                      <p>2x Paneer Tikka (Half)</p>
                      <p>+ Extra Spicy</p>
                    </div>
                    <div className="border-t border-slate-700/50 pt-3 flex justify-between items-center">
                      <p className="text-sm text-slate-400">Table 4</p>
                      <button className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 text-sm font-bold rounded-lg border border-emerald-500/30">
                        Mark Ready
                      </button>
                    </div>
                  </div>
                  <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-200">Today's Orders</p>
                      <p className="text-sm text-slate-400">45 Completed • 8 Pending</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-red-400 text-xl">₹12,450</p>
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
                The Real Problem Restaurants Face
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Still taking orders on waiter notebooks or paying high commissions to aggregators? You are losing control and profit.
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6">The Solution</h3>
              <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-8">
                <h4 className="text-lg font-bold text-red-900 mb-2">✅ What is MenuSarthi?</h4>
                <p className="text-red-800 mb-4">
                  A Premium Digital Menu & Online Ordering System built for Restaurants, Cafes, Cloud Kitchens, and Fast Food Outlets.
                </p>
              </div>
              
              <h4 className="text-lg font-bold text-slate-900 mb-4">💳 Direct Ordering = More Profit</h4>
              <p className="text-slate-600 mb-4">Instead of paying 20–30% commission to aggregator apps, you get:</p>
              <ul className="space-y-3 font-medium text-slate-800">
                <li className="flex items-center gap-2">✔ Direct orders & payments</li>
                <li className="flex items-center gap-2">✔ Full customer data</li>
                <li className="flex items-center gap-2">✔ Higher profit margin</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">✨ Premium Customer Experience</h2>
            <p className="text-xl text-slate-600">Your restaurant instantly looks premium.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-red-300 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{idx + 1}️⃣ {feature.title}</h3>
                <ul className="space-y-2 text-sm">
                  {feature.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-red-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">👨‍🍳 Admin Dashboard (Kitchen View)</h2>
            <p className="text-xl text-slate-600">Full control over your kitchen and menu.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adminFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-slate-300 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <ul className="space-y-2 text-sm">
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
                <Store className="w-8 h-8 text-red-400" />
                👥 Who Should Use MenuSarthi?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {targetAudience.map((audience, idx) => (
                  <div key={idx} className="bg-slate-800 p-4 rounded-xl border border-slate-700 font-medium text-slate-300">
                    {audience}
                  </div>
                ))}
              </div>
              <p className="text-xl text-red-300 font-medium italic">
                "If you serve food — you need your own digital system."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Settings className="w-8 h-8 text-red-400" />
                🎯 How MenuSarthi Works
              </h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    1
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Customer scans QR code & opens digital menu</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    2
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Selects items, customizes & adds notes</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    3
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Proceeds to checkout</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    4
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Order appears in kitchen dashboard</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    5
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Admin marks complete</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl font-bold text-red-400">Simple. Fast. Professional.</p>
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
                <TrendingUp className="w-8 h-8 text-red-600" />
                📈 Business Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-red-600 text-white p-6 rounded-2xl shadow-lg">
                <p className="text-xl font-bold">This is not just a menu.</p>
                <p className="text-2xl font-extrabold mt-1">This is your digital growth engine.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-red-600" />
                🔒 Secure & Scalable
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Cloud-based system</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Admin password protection</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Role-based view (Customer/Admin)</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Starter plan / Pro plan control</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing & Customization & CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-red-100/80 via-white to-white -z-10"></div>
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
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-red-500"></span> Number of items</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-red-500"></span> Feature requirements</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-red-500"></span> Custom branding</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-red-500"></span> Multi-branch setup</li>
                </ul>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20get%20a%20custom%20quote%20for%20MenuSarthi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-colors"
                >
                  Get Custom Quote
                </a>
              </div>

              <div className="bg-red-600 p-8 rounded-3xl shadow-xl text-left text-white">
                <h3 className="text-2xl font-bold mb-4 text-white">👨‍💻 About Suraj Automation</h3>
                <p className="text-red-100 mb-6">We Build Practical Business Systems:</p>
                <ul className="space-y-3 mb-8 text-red-50">
                  <li className="flex items-center gap-2 font-medium">✨ Printed Menu → Smart Digital Menu</li>
                  <li className="flex items-center gap-2 font-medium">✨ Manual Orders → Structured System</li>
                  <li className="flex items-center gap-2 font-medium">✨ Commission Dependency → Direct Growth 🍽️🔥</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">🚀 Ready to Launch Your Own Digital Menu?</h2>
              <p className="text-xl text-slate-300 mb-8 relative z-10">
                If you want more profit, more control, less commission, premium branding, and direct customer data... <br className="hidden sm:block" />
                <span className="text-white font-bold">MenuSarthi is built for you.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20demo%20for%20MenuSarthi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-red-500/25 flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  Book a Free Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20Let's%20digitize%20my%20restaurant." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  <MessageSquare className="w-5 h-5" />
                  Let’s Digitize Your Restaurant
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
