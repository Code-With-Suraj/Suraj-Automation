import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  AlertTriangle, CheckCircle2, ArrowRight, ShieldCheck, 
  Wallet, Calculator, LineChart, Lock, Target, ChevronLeft, 
  ChevronRight, ArrowDownRight, TrendingUp, Sparkles, HelpCircle,
  PiggyBank, ShieldAlert, Check, RefreshCw
} from 'lucide-react';
import { useUser } from '../../contexts/UserContext';
import { useSEO } from '../../hooks/useSEO';
import { calculateDiscount } from '../../data/productSolutions';
import RazorpayCheckout from '../../components/RazorpayCheckout';

export default function PersonalFinSarthi() {
  const { hasPurchased } = useUser();
  const isPurchased = hasPurchased('personalfinsarthi');

  useSEO(
    'PersonalFin Sarthi | India’s Smartest Personal Finance Tracker',
    'Track expenses, savings, debt, investments, and subscriptions in one beautiful dashboard. Your secure, offline-first personal CFO based on Google Sheets.',
    'personal finance tracker, expense tracker sheets, debt avalanche calculator, snowball tracker, budget planner sarthi'
  );

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const problems = [
    {
      title: "Salary comes on 1st, gone on 25th!",
      emoji: "😩",
      description: "You work hard all month. But before you know it, you are asking: 'Paise jaa kahan rahe hain?'"
    },
    {
      title: "Ugly Excel Sheets",
      emoji: "📊",
      description: "Standard spreadsheets are slow, clunky, and absolutely impossible to read or update on your mobile screen."
    },
    {
      title: "Privacy Nightmare Apps",
      emoji: "🕵️",
      description: "Free finance tracking apps harvest your SMS history, transaction SMS alerts, and sell your personal data to ad networks."
    },
    {
      title: "Expensive Subscription Software",
      emoji: "💳",
      description: "Traditional finance tools charge ₹1,000–₹2,000 every single month just to see your own money data."
    }
  ];

  const benefits = [
    { title: "Modern Web Application Interface", desc: "Designed with modern UI cards & responsive layouts.", icon: <Sparkles className="w-5 h-5 text-emerald-500" /> },
    { title: "Mobile Friendly & 3-Tap Entry", desc: "Log transactions instantly on the go directly from your phone screen.", icon: <Target className="w-5 h-5 text-emerald-505" /> },
    { title: "100% Secure Google Drive Hosting", desc: "Your metrics are kept on your personal Drive account — complete data ownership.", icon: <ShieldCheck className="w-5 h-5 text-emerald-500" /> },
    { title: "Lifetime License for a One-Time Fee", desc: "Pay once (₹599) and enjoy forever. Absolutely zero future recurring subscription bills.", icon: <PiggyBank className="w-5 h-5 text-emerald-500" /> },
    { title: "Strict No-Data-Harvesting Rules", desc: "We read zero text messages. We display zero advertisements.", icon: <Lock className="w-5 h-5 text-emerald-500" /> }
  ];

  const features = [
    {
      title: "Live 50/30/20 Dashboard",
      description: "Instantly visualize if your spending balances are healthy. Track Needs, Wants, and Savings/Investments allocations in real-time.",
      badge: "Financial Health Status",
      colorClass: "from-emerald-500/20 to-teal-500/20 border-emerald-500/20 text-emerald-700 dark:text-emerald-400"
    },
    {
      title: "Debt Freedom Calculator",
      description: "Clear credits faster with Avalanche & Snowball simulations. Predict your exact debt-free date instantly based on active payments.",
      badge: "Interactive Simulations",
      colorClass: "from-blue-500/20 to-indigo-500/20 border-blue-500/20 text-blue-700 dark:text-blue-400"
    },
    {
      title: "Subscription Waste Detector",
      description: "Find silent money drainers and unused recurring products immediately. Stop wasting ₹1,799+/month on unattended streaming or SaaS platforms.",
      badge: "Alerts & Reminders",
      colorClass: "from-rose-500/20 to-orange-500/20 border-rose-500/20 text-rose-700 dark:text-rose-400"
    },
    {
      title: "Complete Asset Tracker",
      description: "A synchronized ledger for your full portfolio: Mutual Funds, SIPs, Gold, Crypto accounts, and Real Estate investments.",
      badge: "Unified Net Worth",
      colorClass: "from-amber-500/20 to-orange-500/20 border-amber-500/20 text-amber-950 dark:text-amber-400"
    },
    {
      title: "Smart Search Ledger",
      description: "Stop scrolling spreadsheets. Instantly lookup any past transaction, tag, or receipt inside a clean, modern web filter table.",
      badge: "3-Tap Instant Entry",
      colorClass: "from-purple-500/20 to-pink-500/20 border-purple-500/20 text-purple-700 dark:text-purple-400"
    }
  ];

  const steps = [
    {
      num: "Step 1",
      title: "Buy PersonalFin Sarthi",
      priceLabel: "₹599",
      description: "Secure lifetime authorization for the code file and Google Sheet framework."
    },
    {
      num: "Step 2",
      title: "Automatic Setup",
      priceLabel: "Drive Authorized",
      description: "Initialize your own private Google Sheets Database under your personal Google Drive."
    },
    {
      num: "Step 3",
      title: "Track Daily Expenses",
      priceLabel: "3-Tap Log",
      description: "Quick transaction entry directly from your mobile home screen in seconds."
    },
    {
      num: "Step 4",
      title: "Get Financial Insights",
      priceLabel: "Auto CFO Reports",
      description: "Beautiful live graphs for Savings Rate, Debt status, cash flows, and unified net worth."
    }
  ];

  const comparison = [
    { feature: "One-Time Purchase Price", sarthi: "✅ Only ₹599 (Lifetime)", traditional: "❌ Monthly subscription model" },
    { feature: "Storage Database", sarthi: "✅ Private Google Drive account", traditional: "❌ Third-party cloud servers" },
    { feature: "Data Ownership & Security", sarthi: "✅ 100% Secure. Yours alone", traditional: "❌ Hidden data-selling to advertisers" },
    { feature: "Mobile-Friendly Dashboard UI", sarthi: "✅ Modern, lightweight mobile web-app", traditional: "⚠️ Clunky layout, SMS scraper bugs" },
    { feature: "Recurring Billing Fee", sarthi: "✅ Absolute 0 (Zero annual charges)", traditional: "❌ ₹1,000–₹2,000/month recurring drain" }
  ];

  const faqs = [
    { q: "Is my financial data secure and private?", a: "ABSOLUTELY. Unlike standard apps that require SMS-reading scripts or central databases, PersonalFin Sarthi runs fully client-side on your browser. Your transaction history and ledger are stored in a private spreadsheet inside your personal Google Drive. Nobody else (including us) can ever see your balances." },
    { q: "Do I have to pay any monthly or annual fee?", a: "No. PersonalFin Sarthi features a strict Lifetime License framework. You pay a single flat charge of ₹599 today, and can use, customize, and clone the script forever. There are zero billing intervals or surprise renewal costs." },
    { q: "Does this application work on my mobile phone?", a: "Yes! The spreadsheet is accompanied by a modern, responsive web application layout constructed to look sharp and function perfectly on iOS and Android viewports. Adding a transaction takes exactly three taps on your mobile screen." },
    { q: "Can I track mutual funds, SIPs, gold, and other investments?", a: "Yes. The Complete Asset Tracker module holds structured ledgers for Mutual Funds, SIPs, Crypto, Real Estate, Gold, and precious metals so you see your unified net worth grow daily." },
    { q: "Can I manage debts, EMIs, and active loans?", a: "Yes. Sarthi comes with a built-in Debt Freedom Simulator. It supports both Avalanche and Snowball repay methods to help inspect which monthly debts to clear first to avoid unnecessary interest waste." }
  ];

  const handleScrollToCheckout = () => {
    const el = document.getElementById('checkout-personalfinsarthi');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="pt-24 pb-20 dark:bg-slate-950 transition-colors duration-300">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/40 overflow-hidden border-b border-slate-100 dark:border-slate-800">
        <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/50 dark:from-emerald-950/20 via-white dark:via-slate-950 to-white dark:to-slate-950 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-sm font-bold tracking-wide border border-emerald-100 dark:border-emerald-500/20 shadow-sm animate-fade-in">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                Stop Guessing Where Your Money Goes
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                India’s Smartest <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400">
                  Personal Finance Tracker
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-medium">
                Track expenses, savings, debt, investments & subscriptions from one beautiful dashboard. Your secure, offline-first personal CFO built on Google Sheets.
              </p>
              
              {/* Feature bullet list */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>One-Time Price: ₹599</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>Data In Your Google Drive</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>No Monthly Subscription</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={handleScrollToCheckout}
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white rounded-xl font-bold text-lg shadow-lg shadow-emerald-555/20 hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Get PersonalFin Sarthi
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="#faq-section"
                  className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-bold text-lg shadow-sm hover:shadow-md transition-all text-center"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Hero Mockup Panel */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 rounded-[2rem] blur-3xl transform rotate-6"></div>
              
              {/* Laptop & Phone dashboard visualization mockups */}
              <div className="relative bg-slate-900 dark:bg-slate-950 rounded-[2rem] border border-slate-800 p-5 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 select-none">personalfinsarthi_dashboard.app</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-black tracking-widest border border-emerald-500/10">ACTIVE DATABASE</span>
                </div>

                {/* Simulated charts inside the hero mockup dashboard */}
                <div className="flex-grow space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800/80">
                      <span className="text-[9px] font-bold text-slate-500 uppercase block tracking-wider">MONTHLY EXPENSES</span>
                      <span className="text-xl font-black text-white">₹31,450</span>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
                        <div className="w-[58%] h-full bg-emerald-500 rounded-full" />
                      </div>
                    </div>
                    <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800/80">
                      <span className="text-[9px] font-bold text-slate-500 uppercase block tracking-wider">NET SAVINGS RATE</span>
                      <span className="text-xl font-black text-emerald-400">23%</span>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
                        <div className="w-[23%] h-full bg-teal-400 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800/80 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-slate-400">50/30/20 Budget Allocations</span>
                      <span className="text-[9px] font-extrabold text-slate-500">Target vs Realized</span>
                    </div>
                    <div className="space-y-1.5 text-[11px] font-semibold text-slate-300">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Essential Needs (Target 50%)</span>
                        <span>42% Realized</span>
                      </div>
                      <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[42%] h-full bg-emerald-500/90 rounded-full" />
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Lifestyle Wants (Target 30%)</span>
                        <span className="text-rose-450">35% Realized ⚠️</span>
                      </div>
                      <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[35%] h-full bg-rose-500/90 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-3 mt-4 text-[10px] text-slate-500 flex justify-between select-none">
                  <span>Host: sarthi-drive-link</span>
                  <span>v1.0.4 production</span>
                </div>
              </div>

              {/* A set of floating cards requested: 
                  - Savings Rate 23%
                  - Debt-Free in 14 Months
                  - Subscription Waste ₹1,799/month */}
              <div className="absolute top-1/4 -left-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xl max-w-[200px] hover:scale-105 transition-transform hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">SAVINGS RATE</span>
                    <strong className="text-slate-900 dark:text-white font-extrabold text-base">23% Saved</strong>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-6 bg-white dark:bg-slate-900 border border-emerald-100 dark:border-slate-800 rounded-2xl p-4 shadow-xl max-w-[220px] hover:scale-105 transition-transform hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">DEBT FREEDOM</span>
                    <strong className="text-slate-900 dark:text-white font-black text-sm">Debt-Free in 14 Mo</strong>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-1/3 -right-10 bg-white dark:bg-slate-900 border border-rose-100 dark:border-slate-800 rounded-2xl p-4 shadow-xl max-w-[220px] hover:scale-105 transition-transform hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">WASTE DETECTOR</span>
                    <strong className="text-slate-900 dark:text-white font-black text-xs text-rose-600">₹1,799/mo Waste</strong>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-4 py-1.5 rounded-full border border-rose-150">
              SOUND FAMILIAR?
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Where Does All Your Money Go?
            </h2>
            <div className="flex justify-center items-center gap-3 text-lg md:text-2xl font-bold py-2 font-body text-slate-700 dark:text-slate-300">
              <span>😩 Salary comes on 1st</span>
              <span className="text-slate-350 shrink-0">➔</span>
              <span className="text-rose-500">😬 Bank balance disappears by 25th</span>
            </div>
            <p className="text-slate-650 dark:text-slate-400 font-bold italic text-lg max-w-xl mx-auto pr-2 pb-2">
              You ask: <span className="text-slate-900 dark:text-white underline font-extrabold">"Paise jaa kahan rahe hain?"</span>
            </p>
          </div>

          {/* Problem Red warning cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.slice(1).map((p, idx) => (
              <div 
                key={idx}
                className="bg-rose-50/50 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-950/20 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-start group hover:-translate-y-1 transition-transform"
              >
                <div className="text-4xl mb-4 select-none">{p.emoji}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                  {p.description}
                </p>
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Solution Reveal */}
      <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Benefits detail */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-100">
                  MEET PERSONALFIN SARTHI
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                  Your Personal CFO
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                  Built on Google Apps Script + Google Sheets. Complete financial surveillance with 100% data confidentiality in your personal storage folder.
                </p>
              </div>

              <div className="space-y-5">
                {benefits.map((b, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-emerald-500 font-bold text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">{b.title}</h4>
                      <p className="text-sm text-slate-550 dark:text-slate-400 font-medium mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Screenshot / Visual representation */}
            <div className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/15 to-transparent rounded-[2.5rem] blur-2xl transform rotate-3"></div>
              
              <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 p-2 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80" 
                  alt="PersonalFin Sarthi Comprehensive Dashboard" 
                  className="w-full h-auto rounded-2xl object-cover hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-5 left-5 right-5 bg-slate-950/85 backdrop-blur-md border border-slate-800 p-4 rounded-xl text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-sm tracking-tight">Sarthi Complete Dashboard Screenshot</h4>
                      <p className="text-[10px] text-slate-400 font-semibold">Pre-configured Google sheet view mapped automatically</p>
                    </div>
                    <span className="text-emerald-400 text-xs font-black bg-emerald-950/60 border border-emerald-800/10 p-1.5 px-3 rounded-lg uppercase tracking-wide">CONFIDENTIAL</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Features Bento Grid */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-20">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-100">
              SYSTEM POWER
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Powerful Modules. Simpler Tech.
            </h2>
            <p className="text-slate-600 dark:text-slate-450 font-medium max-w-2xl mx-auto">
              Everything you need to regain ultimate control over your funds, assets, and passive budgets. Designed with gorgeous Bento structures.
            </p>
          </div>

          {/* Bento grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            
            {/* Item 1: Live 50/30/20 budget (Wide) */}
            <div className="md:col-span-3 bg-gradient-to-br from-emerald-50/40 to-teal-50/20 dark:from-slate-900/40 dark:to-slate-900/20 border border-slate-150 dark:border-slate-800 p-8 rounded-[2rem] shadow-sm flex flex-col justify-between group">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-md border border-emerald-100/40">
                  {features[0].badge}
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-4 mb-2 tracking-tight">
                  {features[0].title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                  {features[0].description}
                </p>
              </div>
              <div className="mt-8 relative bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800/80 p-5">
                <span className="text-[10px] font-bold text-slate-400 block mb-3 uppercase tracking-wider">LIFESTYLE BUDGET ALLOCATION</span>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                    <span>Wants Target</span>
                    <span>30%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[30%] h-full bg-emerald-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2: Debt simulator (Narrow) */}
            <div className="md:col-span-3 bg-gradient-to-br from-blue-50/40 to-indigo-50/20 dark:from-slate-900/40 dark:to-slate-900/20 border border-slate-150 dark:border-slate-800 p-8 rounded-[2rem] shadow-sm flex flex-col justify-between group">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-md border border-blue-100/40">
                  {features[1].badge}
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-4 mb-2 tracking-tight">
                  {features[1].title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                  {features[1].description}
                </p>
              </div>
              <div className="mt-8 relative bg-white dark:bg-slate-950 rounded-2xl p-5 border border-slate-200 dark:border-slate-800/80">
                <span className="text-[10px] font-bold text-slate-400 block mb-2 uppercase tracking-wider">SNOWBALL EMIs SIMULATOR</span>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <div className="bg-slate-50 dark:bg-slate-900 p-2.5 rounded-lg border border-slate-100">
                    <span className="text-[9px] text-slate-400 block">AVALANCHE DATE</span>
                    <span>Aug 2027</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900 p-2.5 rounded-lg border border-slate-100">
                    <span className="text-[9px] text-slate-400 block">SAVINGS INTEREST</span>
                    <span className="text-emerald-500">₹42,890</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3: Subscription Waste detector (Wide 4 columns) */}
            <div className="md:col-span-4 bg-gradient-to-br from-rose-50/40 to-orange-50/20 dark:from-slate-900/40 dark:to-slate-900/20 border border-slate-150 dark:border-slate-800 p-8 rounded-[2rem] shadow-sm flex flex-col justify-between group">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 bg-rose-50 dark:bg-rose-550/10 text-rose-700 dark:text-rose-400 rounded-md border border-rose-100/40">
                  {features[2].badge}
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-4 mb-2 tracking-tight">
                  {features[2].title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                  {features[2].description}
                </p>
              </div>
              <div className="mt-8 bg-white dark:bg-slate-950 rounded-2xl p-5 border border-slate-200 dark:border-slate-800/80 divide-y divide-slate-100">
                <div className="flex justify-between items-center py-2 text-xs font-bold">
                  <span className="text-slate-700 dark:text-slate-300">Unused Streaming SaaS</span>
                  <span className="text-rose-500">₹799/month</span>
                </div>
                <div className="flex justify-between items-center py-2 text-xs font-bold">
                  <span className="text-slate-700 dark:text-slate-300">Expired Domain Auto-Renewal</span>
                  <span className="text-rose-500">₹1,000/month</span>
                </div>
              </div>
            </div>

            {/* Item 4: Asset Tracking (Narrow 2 columns) */}
            <div className="md:col-span-2 bg-gradient-to-br from-amber-50/40 to-orange-50/20 dark:from-slate-900/40 dark:to-slate-900/20 border border-slate-150 dark:border-slate-800 p-8 rounded-[2rem] shadow-sm flex flex-col justify-between group">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-md border border-amber-100/40">
                  {features[3].badge}
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-4 mb-2 tracking-tight">
                  {features[3].title}
                </h3>
                <p className="text-sm text-slate-650 dark:text-slate-400 leading-normal font-semibold">
                  {features[3].description}
                </p>
              </div>
              <div className="mt-6 font-mono text-[10px] font-bold text-slate-400 block mr-2 p-1.5 uppercase tracking-widest text-center border-t border-slate-150">
                ⭐ GOLD • CRYPTO • SIPS
              </div>
            </div>

            {/* Item 5: Smart Search Ledger (Bottom wide span) */}
            <div className="md:col-span-6 bg-gradient-to-r from-slate-50 to-slate-100/50 dark:from-slate-900/40 dark:to-slate-900/20 border border-slate-150 dark:border-slate-850 p-8 rounded-[2rem] shadow-sm md:flex justify-between items-center gap-10">
              <div className="max-w-xl">
                <span className="text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 rounded-md border border-purple-100/40">
                  {features[4].badge}
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-4 mb-2 tracking-tight">
                  {features[4].title}
                </h3>
                <p className="text-sm md:text-base text-slate-650 dark:text-slate-400 leading-relaxed font-semibold mb-6 md:mb-0">
                  {features[4].description}
                </p>
              </div>
              <div className="shrink-0 bg-white dark:bg-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 w-full md:w-80">
                <div className="flex gap-2 items-center justify-between font-bold text-slate-800 dark:text-slate-200 text-xs mb-3 border-b pb-2">
                  <span>Fast Search ledger</span>
                  <span className="text-[10px] text-emerald-500 font-extrabold">ONLINE</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 text-[11px] font-semibold flex justify-between">
                  <span>Filter category: 'Rent'</span>
                  <span className="font-bold text-slate-800 dark:text-slate-350">₹14,500</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Privacy Section */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
        <div className="absolute -right-40 -top-40 w-[35rem] h-[35rem] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Shield and copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-emerald-500/15 border border-emerald-500/20 rounded-full text-xs font-black uppercase text-emerald-400 tracking-wider">
                100% PRIVATE & CONFIDENTIAL
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                Your Money Data. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Your Secure Rules.</span>
              </h2>
              <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-xl">
                Traditional finance apps strip away your confidentiality by scrubbing private SMS messages and tracking transaction alerts. PersonalFin Sarthi is different.
              </p>

              {/* Warnings and security bullet layout */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 text-rose-500 text-xs font-bold mt-1">✗</div>
                  <div>
                    <strong className="text-sm font-semibold text-slate-205 block">No SMS Reading Scrips</strong>
                    <span className="text-xs text-slate-400 leading-relaxed block">We NEVER scrape, parse, or read your private text.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 text-rose-500 text-xs font-bold mt-1">✗</div>
                  <div>
                    <strong className="text-sm font-semibold text-slate-205 block">No Hidden Data Aggregation</strong>
                    <span className="text-xs text-slate-400 leading-relaxed block">Zero tracking scripts. Absolute zero metadata scraping.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 text-rose-500 text-xs font-bold mt-1">✗</div>
                  <div>
                    <strong className="text-sm font-semibold text-slate-205 block">No Advertisement Logs</strong>
                    <span className="text-xs text-slate-400 leading-relaxed block">Enjoy clean interfaces. No surprise popups or targeted finance ads.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400 text-xs font-bold mt-1">✓</div>
                  <div>
                    <strong className="text-sm font-semibold text-emerald-300 block">Stored In Your Google Drive</strong>
                    <span className="text-xs text-slate-450 leading-relaxed block">Everything resides inside your private Google sheets database.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Drive Shield visual asset */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 max-w-[340px] text-center shadow-2xl overflow-hidden flex flex-col items-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-[2.5rem]" />
                
                {/* Simulated Shield Graphic */}
                <div className="w-24 h-24 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border-2 border-emerald-500/20 mb-6 scale-110 relative">
                  <div className="absolute inset-2 border-2 border-dashed border-emerald-500/30 rounded-full animate-spin-slow"></div>
                  <ShieldCheck className="w-10 h-10 select-none relative z-10" />
                </div>
                
                <h3 className="text-xl font-bold tracking-tight mb-2">Google Drive Shield</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Google Apps Script establishes secure end-to-end OAuth directly between you and your drive. Direct secure server connections.
                </p>
                <span className="text-[10px] font-mono font-bold text-slate-500 tracking-wider">SECURE OAUTH GATEWAY ACTIVE</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. How It Works - Step Cards */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-20">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-100">
              DEPLOYMENT TIMELINE
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Get Active in 4 Simple Steps
            </h2>
            <p className="text-slate-650 dark:text-slate-400 font-medium max-w-2xl mx-auto">
              Skip custom engineering costs. Initialize Sarthi ledger in less than 5 minutes.
            </p>
          </div>

          {/* Stepper Card Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/80 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between hover:border-emerald-300 dark:hover:border-emerald-500/30 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{s.num}</span>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold font-mono text-[10px] border border-emerald-100/10">
                      {s.priceLabel}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
                
                {/* Bottom decorative arrow */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-slate-300 group-hover:translate-x-1 transition-transform select-none z-10 font-bold">
                    ➔
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Impact Section - Large Numbers */}
      <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-100">
              CFO METRICS SUMMARY
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              What Changes With Sarthi?
            </h2>
            <p className="text-slate-650 dark:text-slate-400 font-medium max-w-2xl mx-auto">
              Real functional transformations experienced by professionals tracking metrics correctly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-150 p-8 rounded-3xl text-center shadow-sm">
              <span className="text-[12px] font-bold text-slate-450 uppercase block tracking-wider">WASTEFUL EXPENSES</span>
              <strong className="text-4xl md:text-5xl font-black text-rose-500 block my-2 tracking-tight">📉 -15%</strong>
              <p className="text-xs text-slate-500 leading-normal font-semibold">Immediate reduction in unmonitored subscriptions.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-150 p-8 rounded-3xl text-center shadow-sm">
              <span className="text-[12px] font-bold text-slate-450 block uppercase tracking-wider">DEBT LIQUIDITY SPEED</span>
              <strong className="text-4xl md:text-5xl font-black text-emerald-500 block my-2 tracking-tight">💳 2x Fast</strong>
              <p className="text-xs text-slate-500 leading-normal font-semibold">Repay target debts earlier via snowball calculators.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-150 p-8 rounded-3xl text-center shadow-sm">
              <span className="text-[12px] font-bold text-slate-450 block uppercase tracking-wider">MONTHLY SAVINGS RATE</span>
              <strong className="text-4xl md:text-5xl font-black text-teal-500 block my-2 tracking-tight">📈 +8%</strong>
              <p className="text-xs text-slate-500 leading-normal font-semibold">Structured allocation pushes more funds to mutual accounts.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-150 p-8 rounded-3xl text-center shadow-sm">
              <span className="text-[12px] font-bold text-slate-450 block uppercase tracking-wider">TIME SPENT RECORDING</span>
              <strong className="text-4xl md:text-5xl font-black text-purple-605 block my-2 tracking-tight">⏰ -4 Hours</strong>
              <p className="text-xs text-slate-500 leading-normal font-semibold">Save hours every month compared to manual spreadsheets.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Comparison Section */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-100">
              WHY SARTHI SYSTEM
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Why Pay Monthly Fees?
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-3xl max-w-4xl mx-auto shadow-sm">
            <table className="w-full text-left text-sm font-semibold text-slate-705 divide-y divide-slate-200 border-collapse">
              <thead className="bg-slate-50 dark:bg-slate-900 font-extrabold text-slate-900 dark:text-white border-b border-slate-200">
                <tr>
                  <th scope="col" className="px-6 py-5">Feature Module</th>
                  <th scope="col" className="px-6 py-5 text-emerald-650 bg-emerald-50/20 dark:bg-emerald-950/20">PersonalFin Sarthi</th>
                  <th scope="col" className="px-6 py-5">Traditional Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white dark:bg-slate-900">
                {comparison.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4.5 font-bold text-slate-850 dark:text-slate-200">{item.feature}</td>
                    <td className="px-6 py-4.5 text-emerald-650 dark:text-emerald-400 bg-emerald-50/10 dark:bg-emerald-950/10 font-black">{item.sarthi}</td>
                    <td className="px-6 py-4.5 text-slate-500 dark:text-slate-400 font-medium">{item.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 9. Founder Section */}
      <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Founder Profile image */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/10 rounded-[2rem] blur-3xl transform"></div>
              
              <div className="relative bg-white dark:bg-slate-900 p-4 border border-slate-200 rounded-[2.5rem] shadow-2xl overflow-hidden max-w-[340px]">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100 relative">
                  <img 
                    src="https://sarthi-automations.vercel.app/static/suraj.png" 
                    alt="Founder Suraj Singh Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-4 text-center">
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-lg">Suraj Singh</h4>
                  <span className="text-xs text-emerald-650 font-bold block">Developer & Founder, Suraj Automation</span>
                </div>
              </div>
            </div>

            {/* Founder Philosophy copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-black tracking-widest text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-100 border-dashed">
                BUILT BY SURAJ AUTOMATION
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                No Complex Apps. <br />
                Just Powerful Systems.
              </h2>
              <div className="text-slate-600 dark:text-slate-305 space-y-4 font-semibold text-base leading-relaxed">
                <p>
                  "I help Indian professionals and SMB owners replace messy spreadsheets with powerful automation systems. Sarthi tools are designed to keep things simple."
                </p>
                <p>
                  "My design philosophy is straightforward: Keep the tech invisible. Keep your private data secure. Solve the real operational bottlenecks with sheets database structures that you already use every day."
                </p>
              </div>

              {/* Bullet checks */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/80 mt-6 text-xs text-slate-500 font-extrabold">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Keep tech invisible</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Keep data secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Solve real problem</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. Pricing Section */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div id="pricing-trigger" className="max-w-4xl mx-auto px-4">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-100">
              LIFETIME BLUEPRINT LICENSE
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Simple One-Time Fast pricing
            </h2>
          </div>

          {/* Centred Card */}
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl border border-slate-800 text-center flex flex-col items-center">
            <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/10 rounded-full blur-[80px]" />
            
            <span className="text-xs font-black uppercase text-emerald-400 bg-emerald-500/15 border border-emerald-500/20 py-1.5 px-4 rounded-full mb-6">
              PERSONALFIN SARTHI LICENSE
            </span>
            
            <p className="text-slate-400 font-medium text-base max-w-md mb-8">
              Everything included: Dashboard, Debt snowflake calculator, asset tracker ledger feeds, and deployment documentation.
            </p>

            <div className="flex items-center justify-center gap-3.5 mb-2.5">
              <span className="text-2xl text-slate-500 line-through font-bold">₹1,499</span>
              <strong className="text-5xl md:text-6xl font-black text-white leading-none tracking-tight">₹599</strong>
            </div>
            <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase mb-8">ONE-TIME PAYMENT • LIFETIME ACCESS</span>

            <div className="w-full max-w-sm space-y-3 pt-4 border-t border-slate-800 flex flex-col items-center">
              <button
                onClick={handleScrollToCheckout}
                className="w-full py-4.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-bold transition-all text-center text-lg block cursor-pointer shadow-lg shadow-emerald-555/10"
              >
                Get Instant Access
              </button>
              <span className="text-[10px] text-slate-550 block font-semibold">100% Secure Checkout verified via Razorpay API integrations.</span>
            </div>
          </div>

        </div>
      </section>

      {/* 11. FAQ Section */}
      <section id="faq-section" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-100">
              HAVE QUESTIONS?
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Queries
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:border-slate-300 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 flex justify-between items-center transition-colors text-base"
                >
                  <span>{f.q}</span>
                  <span className="text-slate-400 text-xl font-bold transition-transform transform">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-650 dark:text-slate-350 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. Razorpay Checkout Module Mount */}
      <section className="bg-white dark:bg-slate-950 py-10">
        <RazorpayCheckout productId="personalfinsarthi" />
      </section>

      {/* 13. Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-slate-900 text-white relative overflow-hidden border-t border-slate-800 text-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Stop Wondering Where Your Money Went.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Start Managing It.</span>
          </h2>
          
          <div className="text-center">
            <h3 className="text-lg font-bold text-slate-400">PersonalFin Sarthi</h3>
            <span className="text-2xl font-black text-white block mt-1">₹599 One-Time Payment</span>
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={handleScrollToCheckout}
              className="px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl font-black text-lg shadow-xl shadow-emerald-500/10 hover:shadow-emerald-555/20 transition-transform transform hover:-translate-y-0.5 cursor-pointer"
            >
              Get Access Now
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
