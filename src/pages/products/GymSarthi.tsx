import { motion } from 'motion/react';
import { Dumbbell, AlertTriangle, CheckCircle2, UserPlus, CreditCard, MessageCircle, IdCard, LayoutDashboard, Store, Settings, ArrowRight, MessageSquare, TrendingUp, ShieldCheck } from 'lucide-react';

export default function GymSarthi() {
  const problems = [
    "Register mein fees likh rahe ho",
    "Yaad se renewals track kar rahe ho",
    "Month end pe profit calculate karne mein confuse ho",
    "Members ko follow-up karna bhool jaate ho"
  ];

  const features = [
    {
      title: "Smart Member Admission",
      icon: <UserPlus className="w-6 h-6" />,
      items: [
        "Capture member photo instantly (Selfie Admission)",
        "No paper form, create profile in minutes",
        "Medical history & Emergency contact tracking",
        "All stored securely"
      ]
    },
    {
      title: "Payment & Renewal Management",
      icon: <CreditCard className="w-6 h-6" />,
      items: [
        "Plan selection with price auto-fill",
        "Paid amount entry & Balance auto-calculation",
        "Renewal & Membership validity tracking",
        "Automatic expiry alerts"
      ]
    },
    {
      title: "Smart WhatsApp Automation",
      icon: <MessageCircle className="w-6 h-6" />,
      items: [
        "Payment confirmation",
        "Membership card sharing",
        "Due reminders & Renewal alerts",
        "Professional look & Automatic communication"
      ]
    },
    {
      title: "Digital Membership Cards",
      icon: <IdCard className="w-6 h-6" />,
      items: [
        "Auto-generated ID",
        "Professional layout",
        "Share via WhatsApp",
        "Print option available"
      ]
    },
    {
      title: "Dashboard & Financial Overview",
      icon: <LayoutDashboard className="w-6 h-6" />,
      items: [
        "Total, Active & Expiring members",
        "Monthly collection & Pending dues",
        "Expenses & Financial overview",
        "Clear business visibility"
      ]
    },
    {
      title: "Built-in Gym Store (POS System)",
      icon: <Store className="w-6 h-6" />,
      items: [
        "Add products (supplements, gloves, bottles)",
        "Sell via POS & Add to cart",
        "Accept cash or credit & Track member balance",
        "Track store sales"
      ]
    },
    {
      title: "Owner Settings & Branding",
      icon: <Settings className="w-6 h-6" />,
      items: [
        "Upload gym logo & Update gym name",
        "Add contact details, GST number, Address",
        "Full branding control"
      ]
    },
    {
      title: "Plan-Based Feature Control",
      icon: <ShieldCheck className="w-6 h-6" />,
      items: [
        "Starter Plan & Pro Plan",
        "Feature-based restrictions",
        "Member limit tracking",
        "Subscription expiry alert & access control"
      ]
    }
  ];

  const targetAudience = [
    "Local gym owners",
    "Small fitness centers",
    "Personal training studios",
    "CrossFit boxes",
    "Yoga studios",
    "Growing gym chains"
  ];

  const benefits = [
    "Stop revenue leakage",
    "Never miss renewals",
    "Clear monthly profit visibility",
    "Professional image",
    "Faster admissions",
    "Better member tracking",
    "Organized data",
    "Growth-ready system"
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-900/40 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-orange-500/10 text-orange-300 text-sm font-bold tracking-wide mb-6 border border-orange-500/20 backdrop-blur-sm">
                <Dumbbell className="w-4 h-4" />
                GymSarthi
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                Complete Gym Management System <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                  for Desi Gym Owners
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                STOP Running Your Gym on Register & Memory. GymSarthi is a simple, powerful Gym Management System specially built for Indian gym owners.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Traffic Light Alerts</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">WhatsApp Reminders</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Built-in POS Store</span>
              </div>
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20a%20free%20demo%20of%20GymSarthi." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-orange-500/25 items-center justify-center gap-2 group hover:-translate-y-1"
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
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400">
                      <Dumbbell className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg">GymSarthi Dashboard</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-center">
                    <p className="text-red-400 font-bold text-2xl">12</p>
                    <p className="text-sm text-slate-400">Expiring Today</p>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl text-center">
                    <p className="text-amber-400 font-bold text-2xl">28</p>
                    <p className="text-sm text-slate-400">Expiring in 3 Days</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl text-center">
                    <p className="text-emerald-400 font-bold text-2xl">345</p>
                    <p className="text-sm text-slate-400">Active Members</p>
                  </div>
                  <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl text-center">
                    <p className="text-slate-300 font-bold text-2xl">42</p>
                    <p className="text-sm text-slate-400">Expired Members</p>
                  </div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-slate-200">Rahul Verma</p>
                    <p className="text-sm text-slate-400">Pro Plan • Expires Today</p>
                  </div>
                  <button className="px-3 py-1.5 bg-orange-500/20 text-orange-400 text-sm font-bold rounded-lg border border-orange-500/30">
                    Send Reminder
                  </button>
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
                The Real Problems Gym Owners Face
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Toh aap sirf gym chala rahe ho… Business grow nahi kar rahe.
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
              <ul className="space-y-4 font-medium text-slate-800 mb-8">
                <li>
                  <p className="font-bold flex items-center gap-2">❌ 1. Renewal Bhool Jaana</p>
                  <p className="text-sm text-slate-600 ml-6">Member 10 din extra workout kar leta hai free mein.</p>
                </li>
                <li>
                  <p className="font-bold flex items-center gap-2">❌ 2. Register Mein Data Gum Ho Jaana</p>
                  <p className="text-sm text-slate-600 ml-6">Page palto, naam dhoondo, fees check karo – pura time waste.</p>
                </li>
                <li>
                  <p className="font-bold flex items-center gap-2">❌ 3. Month End Ka Stress</p>
                  <p className="text-sm text-slate-600 ml-6">Kitna profit? Kitna expense? Kaunse members active hain? Koi clear system nahi.</p>
                </li>
              </ul>
              
              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <h4 className="text-lg font-bold text-orange-900 mb-2">✅ What is GymSarthi?</h4>
                <p className="text-orange-800">
                  A complete web-based Gym Management System that gives you full control over admissions, fees, renewals, and expenses.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Traffic Light System */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🚦 The Traffic Light System</h2>
            <p className="text-xl text-slate-400 mb-12">The heart of GymSarthi. No thinking required. System automatically categorizes members.</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800 p-6 rounded-2xl border-t-4 border-red-500 shadow-lg">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 rounded-full bg-red-500"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Red</h3>
                <p className="text-slate-400">Expiring Today</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-2xl border-t-4 border-amber-500 shadow-lg">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 rounded-full bg-amber-500"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Yellow</h3>
                <p className="text-slate-400">Expiring in 3 Days</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-2xl border-t-4 border-emerald-500 shadow-lg">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-500"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Green</h3>
                <p className="text-slate-400">Active Members</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-2xl border-t-4 border-slate-500 shadow-lg">
                <div className="w-12 h-12 rounded-full bg-slate-500/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 rounded-full bg-slate-500"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Gray</h3>
                <p className="text-slate-400">Expired Members</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">🔥 Core Features</h2>
            <p className="text-xl text-slate-600">Everything you need to manage your gym smartly.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-orange-300 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <ul className="space-y-2 text-sm">
                  {feature.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-orange-500 mt-1">•</span>
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
                <Store className="w-8 h-8 text-orange-500" />
                👥 Who Should Use GymSarthi?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {targetAudience.map((audience, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 font-medium text-slate-700 shadow-sm">
                    {audience}
                  </div>
                ))}
              </div>
              <p className="text-xl text-orange-600 font-bold italic">
                "If you run a gym — this system is built for you."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-slate-900">
                <Settings className="w-8 h-8 text-orange-500" />
                🎯 How GymSarthi Works
              </h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-orange-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    1
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <p className="font-bold text-slate-800">Add new member & capture photo</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-orange-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    2
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <p className="font-bold text-slate-800">Select plan & enter payment</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-orange-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    3
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <p className="font-bold text-slate-800">System tracks expiry & updates dashboard</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-orange-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    4
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <p className="font-bold text-slate-800">Send reminder & collect renewal</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-orange-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    5
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <p className="font-bold text-slate-800">Track profit easily</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl font-bold text-orange-500">Simple process. Full control.</p>
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
                <TrendingUp className="w-8 h-8 text-orange-500" />
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
              <div className="bg-orange-500 text-white p-6 rounded-2xl shadow-lg">
                <p className="text-xl font-bold">Gym chalana easy.</p>
                <p className="text-2xl font-extrabold mt-1">Gym grow karna smart.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-orange-500" />
                🔒 Secure & Reliable
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Cloud-based</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Role-based access</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Owner-only sections</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Structured backend</p>
                </div>
              </div>
              <p className="text-center text-orange-600 font-bold text-lg">Designed for real business usage.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing & Customization & CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-orange-100/80 via-white to-white -z-10"></div>
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
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Number of members</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Features required</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Store module usage</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Customization</li>
                </ul>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20get%20a%20custom%20plan%20for%20GymSarthi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-colors"
                >
                  Get Custom Plan
                </a>
              </div>

              <div className="bg-orange-500 p-8 rounded-3xl shadow-xl text-left text-white">
                <h3 className="text-2xl font-bold mb-4 text-white">👨‍💻 About Suraj Automation</h3>
                <p className="text-orange-100 mb-6">We Build Practical Business Systems:</p>
                <ul className="space-y-3 mb-8 text-orange-50">
                  <li className="flex items-center gap-2 font-medium">✨ Manual gym → Smart gym</li>
                  <li className="flex items-center gap-2 font-medium">✨ Stress → Control</li>
                  <li className="flex items-center gap-2 font-medium">✨ Survival → Growth 💪</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">🚀 Ready to Upgrade Your Gym?</h2>
              <p className="text-xl text-slate-300 mb-8 relative z-10">
                Agar aap register system se pareshan ho, fees tracking mein confusion hai, professional look chahte ho, aur revenue leak stop karna chahte ho... <br className="hidden sm:block" />
                <span className="text-white font-bold">Then GymSarthi is your solution.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20demo%20for%20GymSarthi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  Book a Free Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20Let's%20digitize%20my%20gym." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  <MessageSquare className="w-5 h-5" />
                  Let’s Digitize Your Gym
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
