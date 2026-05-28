import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  AlertTriangle, CheckCircle2, ArrowRight, MessageSquare, 
  ShieldCheck, Calculator, Users, PieChart, CreditCard, 
  Smartphone, LineChart, Lock, Target, ChevronLeft, ChevronRight
} from 'lucide-react';
import { useUser } from '../../contexts/UserContext';
import { useSEO } from '../../hooks/useSEO';
import RazorpayCheckout from '../../components/RazorpayCheckout';

export default function LoanSarthi() {
  const { hasPurchased } = useUser();
  const isPurchased = hasPurchased('loansarthi');

  useSEO(
    'LoanSarthi | Suraj Automation',
    'Finance business control system - Track karo. Loan do. Recovery karo - Sab kuch ek hi system me.',
    'loan management software, finance business, emi tracking, recovery optimization, loan app'
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3); // We have 3 screenshots
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const problems = [
    "Excel + WhatsApp = Data mess 😵",
    "EMI tracking manually = mistakes 😓",
    "Recovery follow-up = headache 😤",
    "Customers ka proper record nahi 📉",
    "Defaulters identify karna mushkil 😶"
  ];

  const solutions = [
    "Customer add kar sakte ho",
    "Loan create kar sakte ho (Daily / Weekly / Monthly)",
    "EMI auto calculate hoti hai",
    "Collection track hota hai",
    "Defaulters automatically detect hote hain",
    "Reports ek click me milte hain"
  ];

  const screenshots = [
    {
      url: "https://blogger.googleusercontent.com/img/a/AVvXsEh5zZHbpxiw_k6uVI42WF3xsmx5ufKvjLCZmmNF7Wx1w3JXIFvgHSu6IQuiigrjGxnmzU99q-ZLe143TGx1uqJwdDWgBGzvwXLdcatbImKrD8TRKda9y4PnW6m_88uEs9JmwklolKLHhMnD4dFrJ3fxBXKncoDZyu4YPXgZ5vGfLE2vSbNUXEH-iHeUVbw=s16000",
      alt: "LoanSarthi Dashboard & Overview"
    },
    {
      url: "https://blogger.googleusercontent.com/img/a/AVvXsEhRwZ7jr27Aex3DkMF2H3BqRhc2BniAv718FR-O7y1mWKbbzapoAqoduJwO8XXHt6SrsBzDMSDkiro4eeIszkMkAfvEOaPUaE-RTywgxYtQ2YBir6qwPcQXq83P9ediOyHf9SU1SBQgqWRDr5Matusd3oyXCyWBCiNjRI4DRxc_NlvPPnkgzmq0QNweP6M=s16000",
      alt: "Customer & Loan Management"
    },
    {
      url: "https://blogger.googleusercontent.com/img/a/AVvXsEgTKZ12p4akvWrmyqk_VoUqoFnEeLqd6cT2S24OXfzFtuQA7TVlUM4Z6mxG7_ygK4HMAGAMwisyw_AE53vzOAesgi9jrPbcXkrxk6-VhNvtEbz9Fq9apnLCkhY3ikuJIXEbD5nsbygZj4cWjTejZ4brVn7qhqyJ77WWqBUO-TJss-SeXbV5nGEz-T4Z6eo=s16000",
      alt: "Recovery & Reports Interface"
    }
  ];

  const features = [
    {
      title: "Customer Management",
      icon: <Users className="w-6 h-6" />,
      items: [
        "Full customer profile (phone, address, Aadhaar)",
        "Outstanding balance tracking",
        "Credit score + risk level system",
        "Active loan visibility"
      ]
    },
    {
      title: "Smart Loan Creation",
      icon: <Calculator className="w-6 h-6" />,
      items: [
        "Daily / Weekly / Monthly loan system",
        "Flat + Reducing interest support",
        "Auto EMI calculation + preview",
        "File charges + late fee setup"
      ]
    },
    {
      title: "Powerful Dashboard",
      icon: <PieChart className="w-6 h-6" />,
      items: [
        "Total customers, loans, revenue",
        "Daily collection tracking",
        "Recovery % analysis",
        "Top defaulters list",
      ],
      note: "Owner ko real-time business ka full control"
    },
    {
      title: "Payment & Collection System",
      icon: <CreditCard className="w-6 h-6" />,
      items: [
        "EMI collection tracking",
        "Receipt generation",
        "WhatsApp receipt sharing",
        "Payment history & audit trail"
      ]
    },
    {
      title: "Customer Mobile Portal",
      icon: <Smartphone className="w-6 h-6" />,
      items: [
        "Active loans & EMI schedule check",
        "Remaining balance & Next EMI due",
        "Customer khud login kar sakta hai",
        "Pay Now button (UPI integration ready)"
      ]
    },
    {
      title: "Reports & Analytics",
      icon: <LineChart className="w-6 h-6" />,
      items: [
        "Daily collection report",
        "Defaulter report",
        "Profit & interest report",
        "Collector performance"
      ],
      note: "Decision making becomes data-driven"
    },
    {
      title: "Secure & Role-Based System",
      icon: <Lock className="w-6 h-6" />,
      items: [
        "Admin / Staff / Customer roles",
        "Secure login + session management",
        "Token-based authentication",
        "Complete data privacy"
      ]
    }
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-bold tracking-wide mb-6 border border-indigo-500/20 backdrop-blur-sm">
                <Target className="w-4 h-4" />
                Recovery Optimization System
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
                Track karo. Loan do.<br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  Recovery karo.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed font-medium">
                Sab kuch ek hi system me.
              </p>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                Small finance businesses ke liye powerful, mobile-first loan management system — jahan se aap loan create, EMI track, recovery manage aur reports sab kuch ek dashboard se control kar sakte ho.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {isPurchased ? (
                  <a 
                    href="#checkout-loansarthi" 
                    className="inline-flex px-8 py-4 bg-emerald-605 hover:bg-emerald-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-emerald-500/20 items-center justify-center gap-2 group hover:-translate-y-1"
                  >
                    View Setup Handbook & Codes
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <a 
                    href="#checkout-loansarthi" 
                    className="inline-flex px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-500/25 items-center justify-center gap-2 group hover:-translate-y-1"
                  >
                    Get instant access for ₹1,499
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%2520a%2520free%2520demo%2520of%2520LoanSarthi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex px-8 py-4 bg-slate-900 border border-slate-750 text-slate-300 hover:bg-slate-800 rounded-xl font-bold text-lg transition-all items-center justify-center gap-2"
                >
                  Book Free Demo On WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 text-red-600 font-bold mb-4">
                <AlertTriangle className="w-5 h-5" />
                The Pain Point
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Aapka current system kuch aisa hai?
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
              <div className="p-4 bg-red-50 text-red-800 rounded-xl font-bold border border-red-100 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                Result? Paisa atakta hai. Time waste hota hai.
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-indigo-500" />
                LoanSarthi kya karta hai?
              </h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                Yeh ek complete digital system hai jisme aap:
              </p>
              
              <div className="space-y-4 mb-8">
                {solutions.map((sol, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{sol}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                <p className="text-lg font-bold text-indigo-900">
                  👉 Basically: Excel hatao → Smart System lao
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Positioning & USP */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 text-center lg:text-left">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-indigo-400">Marketing Apps vs LoanSarthi</h2>
              <p className="text-xl text-slate-400 mb-8">Market me apps free hai (Khatabook etc.) BUT unme yeh nahi hai:</p>
              <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
                <div className="bg-slate-800 p-4 rounded-xl text-slate-300 font-medium border border-slate-700">Loan EMI automation ❌</div>
                <div className="bg-slate-800 p-4 rounded-xl text-slate-300 font-medium border border-slate-700">Defaulter tracking ❌</div>
                <div className="bg-slate-800 p-4 rounded-xl text-slate-300 font-medium border border-slate-700">Interest calculation ❌</div>
                <div className="bg-slate-800 p-4 rounded-xl text-slate-300 font-medium border border-slate-700">Recovery analytics ❌</div>
              </div>
              <p className="mt-8 text-xl font-bold text-white bg-indigo-600/20 py-3 px-6 rounded-xl border border-indigo-500/30 inline-block">
                👉 LoanSarthi = Finance business ke liye specialized system
              </p>
            </div>
            <div className="flex flex-col justify-center bg-slate-800/50 p-10 rounded-3xl border border-slate-700">
              <h3 className="text-2xl font-bold text-slate-300 mb-6">Tum yeh mat bolo:</h3>
              <p className="text-xl text-slate-500 line-through mb-8">❌ "Loan management software"</p>
              <h3 className="text-2xl font-bold text-white mb-6">Tum yeh bolo:</h3>
              <div className="space-y-4 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                <p>👉 "Finance business control system"</p>
                <p>👉 "Recovery optimization system"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">⚙️ Core Features</h2>
            <p className="text-xl text-slate-600">Everything you need to automate your finance business.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-indigo-300 transition-colors flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <ul className="space-y-3 mb-6 flex-grow">
                  {feature.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-indigo-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {feature.note && (
                  <div className="mt-auto pt-4 border-t border-slate-100 text-sm font-bold text-indigo-600">
                    👉 {feature.note}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Interface / Screenshots */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">🖥️ System Interface</h2>
            <p className="text-xl text-slate-400">Clean, professional, and easy to use across any device.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Slider Container */}
            <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-800 shadow-2xl border border-slate-700 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col"
                >
                  <div className="relative overflow-hidden flex-1 bg-slate-900/50 p-4 md:p-8 flex items-center justify-center">
                    <img 
                      src={screenshots[currentSlide].url} 
                      alt={screenshots[currentSlide].alt} 
                      className="w-full h-full object-contain drop-shadow-2xl rounded-xl ring-1 ring-white/10"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 md:p-6 border-t border-slate-700/50 bg-slate-800/90 backdrop-blur-md shrink-0">
                    <h3 className="text-lg md:text-xl font-bold text-white text-center flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                      {screenshots[currentSlide].alt}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/50 text-white hover:bg-indigo-600 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all z-10 hidden sm:block"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/50 text-white hover:bg-indigo-600 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all z-10 hidden sm:block"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'bg-indigo-500 w-10' : 'bg-slate-700 hover:bg-slate-500 w-2.5'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 relative overflow-hidden bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Pricing Strategy</h2>
            <p className="text-xl text-slate-600 mb-4">Affordable. Transparent. Zero hidden charges.</p>
            <p className="text-lg text-slate-500">
              Ek baar setup — lifetime use. Koi monthly subscription nahi. Koi per-user charge nahi.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-indigo-500 flex flex-col items-center relative text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white font-bold px-6 py-2 rounded-full text-lg shadow-lg">
              ⭐ Lifetime License
            </div>
            
            <h3 className="text-3xl font-bold text-slate-900 mb-2 mt-4">Professional Setup</h3>
            <p className="text-slate-500 mb-8 max-w-xl mx-auto">Complete loan management system with all premium features. One-time setup fee + 6 months free support included.</p>
            
            <div className="mb-10">
              <span className="text-5xl md:text-6xl font-extrabold text-slate-900">₹34,999</span>
              <span className="text-xl text-slate-500 block mt-2">/ one-time</span>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 text-left w-full max-w-2xl mx-auto mb-10">
              <div className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> Unlimited Customers & Loans</div>
              <div className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> UPI Payment Gateway Ready</div>
              <div className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> WhatsApp Auto-Receipts</div>
              <div className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> Admin, Staff & Customer Roles</div>
              <div className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> Auto Loan Agreement PDF</div>
              <div className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> Advanced Reports & Analytics</div>
            </div>

            <a href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20get%20LoanSarthi%20Lifetime%20License." target="_blank" rel="noopener noreferrer" className="inline-flex py-4 px-10 bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold rounded-xl text-center transition-all shadow-xl shadow-indigo-500/25 hover:-translate-y-1 mb-8">
              Get LoanSarthi Now →
            </a>
            
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-800 text-sm w-full font-medium">
              💡 Important Note: Domain registration and Hosting charges are extra (alag se) and billed as per actuals.
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-100 w-full text-center">
              <p className="text-xl font-bold text-slate-900 mb-2">👉 Kyun?</p>
              <p className="text-lg text-slate-600">Tumhara system direct paisa recover karata hai → ROI clear hai.</p>
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
          <RazorpayCheckout productId="loansarthi" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-100/80 via-white to-white -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10 leading-tight">
                Agar aapka paisa logon me atka hua hai...
              </h2>
              <p className="text-xl text-indigo-300 font-bold mb-8 relative z-10">
                👉 Ab manual system chhodo<br/>
                👉 Smart recovery system use karo
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20demo%20for%20LoanSarthi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  🔥 Free Demo Book karo
                </a>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20details%20for%20LoanSarthi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-lg transition-all border border-slate-700 flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  📲 WhatsApp pe demo lo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
