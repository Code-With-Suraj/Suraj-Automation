import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { 
  BarChart3, 
  Database, 
  Cpu, 
  FileSpreadsheet, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  MessageSquare,
  Sparkles,
  Zap,
  Check,
  Shield,
  HelpCircle,
  Clock,
  ExternalLink,
  Plus,
  MonitorSmartphone,
  PhoneCall,
  Globe,
  Palette,
  Wrench,
  ChevronDown,
  ChevronUp,
  Lock,
  Layout,
  Calendar,
  Sparkle
} from 'lucide-react';
import { CORE_SERVICES } from '../data/servicesData';
import QuotationTool from '../components/QuotationTool';

export default function Services() {
  useSEO(
    'Services & Pricing | Custom Business Automation using Google Sheets',
    'Explore premium custom business automation using Google Sheets, custom Apps Script macros, secure cloud databases, automated workflows, and high-converting website packages.',
    'business automation using Google Sheets, google sheets automation, custom business automation, apps script triggers, mis dashboards, automation company in noida'
  );
  const [activeTab, setActiveTab] = useState<'web' | 'data'>('web');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const serviceIcons: Record<string, any> = {
    "mis-reporting": BarChart3,
    "process-automation": Cpu,
    "sql-data": Database,
    "web-apps": Layers
  };

  const serviceColors: Record<string, { color: string; darkColor: string }> = {
    "mis-reporting": { color: "from-indigo-500 to-blue-600", darkColor: "group-hover:text-indigo-400 border-indigo-500/20" },
    "process-automation": { color: "from-emerald-500 to-teal-600", darkColor: "group-hover:text-emerald-400 border-emerald-500/20" },
    "sql-data": { color: "from-blue-500 to-cyan-600", darkColor: "group-hover:text-blue-400 border-blue-500/20" },
    "web-apps": { color: "from-purple-500 to-pink-600", darkColor: "group-hover:text-purple-400 border-purple-500/20" }
  };

  const coreServices = CORE_SERVICES.map(s => ({
    ...s,
    icon: serviceIcons[s.id] || Cpu,
    color: serviceColors[s.id]?.color || "from-indigo-500 to-blue-600",
    darkColor: serviceColors[s.id]?.darkColor || "group-hover:text-indigo-400 border-indigo-500/20"
  }));

  const dataPlans = [
    {
      badge: "Local Excel Setup",
      name: "Basic Offline Excel Dashboard",
      bestFor: "Best for static sheet ledgers, offline financial sheets or files",
      textPrice: "₹2,000",
      period: "one-time system fee",
      color: "emerald",
      popular: false,
      features: [
        "1–2 Data Worksheet Sources connected",
        "Interactive Charts: bar, line, pie (up to 5)",
        "Pivot Table Layouts & Data Modeling",
        "Slicer Filters: filter by date & manager",
        "Clean formulas setup (VLOOKUP, SUMIFS, Pivot)",
        "No internet required - 100% private offline file"
      ],
      cta: "Order Offline Excel Dashboard",
      link: "https://wa.me/918851666208?text=Hi%20Suraj,%20I%20am%20interested%20in%20the%20Basic%20Excel%2520Dashboard%20setup%20starting%20at%2520%E2%82%B92,000."
    },
    {
      badge: "Cloud Automation",
      name: "Live Google Sheets Dashboard",
      bestFor: "Best for multi-branch teams needing real-time cloud data access",
      textPrice: "₹3,000",
      period: "one-time system fee",
      color: "blue",
      popular: true,
      features: [
        "Google Forms → Google Sheets linked pipeline",
        "Real-Time Multi-User Collaboration dashboard",
        "Automated Summary metrics & dynamic cards",
        "Date ranges, category, and personnel filters",
        "Auto Email Alerts trigger (1 configuration)",
        "Fully responsive on mobile Google Sheets app",
        "1-Hour team call walkthrough training session"
      ],
      cta: "Deploy Google Sheets Dashboard",
      link: "https://wa.me/918851666208?text=Hi%20Suraj,%20I%20am%20interested%20in%20the%20Google%20Sheets%2520Basic%2520Dashboard%2520setup%2520starting%252520at%2520%E2%82%B93,000."
    },
    {
      badge: "System Pro",
      name: "Advanced Sheets + Apps Script Suite",
      bestFor: "Best for complete background workflow alerts, PDF generation and notifications",
      textPrice: "₹8,000+",
      period: "quote based pricing",
      color: "indigo",
      popular: false,
      features: [
        "Google Apps Script custom backend compiler",
        "Bi-directional WhatsApp / Email notification triggers",
        "Scheduled background automated spreadsheet refreshers",
        "Interactive automated PDF reporter (Drive Dispatcher)",
        "Role-based view filters (Staff vs Administrative)",
        "Third-party API webhook ingest integrations",
        "Team instructions manuals + 3 scope iterations"
      ],
      cta: "Design Custom Automation Suite",
      link: "https://wa.me/918851666208?text=Hi%20Suraj,%2520I%20need%252520the%2520Advanced%2520Google%2520Sheets%2520%2B%2520Apps%252520Script%2520System."
    }
  ];

  const addonsList = [
    { name: "Extra Page / Spreadsheet Tab Module", price: "₹1,000" },
    { name: "Custom Third-Party API Webhook Sync", price: "₹3,000+" },
    { name: "Google Apps Script Automated PDF Dispatch", price: "₹1,999" },
    { name: "Direct WhatsApp Message Trigger Gateway", price: "₹2,999" },
    { name: "Premium Support & Configuration Modifications", price: "₹999 / mo" }
  ];

  // Specific Website FAQs requested by User
  const webFaqs = [
    {
      q: "Is there any hidden setup fee?",
      a: "No! Your monthly fee of ₹799 covers the design, domain, and hosting. There are absolutely no hidden charges."
    },
    {
      q: "What does \"Monthly Maintenance\" include?",
      a: "Maintenance includes keeping your site secure, ensuring 99.9% uptime, and making minor edits like updating a phone number, changing an image, or editing text. Completely redesigning the website is not included in regular maintenance."
    },
    {
      q: "What is the minimum commitment?",
      a: "Since we purchase the domain name and invest time in designing your site upfront, we require a minimum 6-month commitment for the monthly plan."
    },
    {
      q: "What if I want to cancel my subscription?",
      a: "You can cancel anytime after your minimum lock-in period. If you cancel, your website will be taken offline. If you wish to keep the domain name, you can purchase it from us at standard transfer rates."
    }
  ];

  // Specific Data FAQs
  const dataFaqs = [
    {
      q: "Do I need a paid server or hosting?",
      a: "No! All automation scripts and utilities run completely free in the cloud on your standard Google Suite or Google Drive account, with zero monthly server costs."
    },
    {
      q: "Where is my business data stored?",
      a: "Your data remains inside your own Google Drive files and Google Sheets. We do not host your database, offering you 100% privacy and full control over your secure operations."
    },
    {
      q: "How long does it take to deliver an automation system?",
      a: "Standard dashboards are delivered in 4-5 working days. Advanced Custom Suites with background scripts and Webhooks are typically completed within 7-10 calendar working days."
    }
  ];

  const currentFaqs = activeTab === 'web' ? webFaqs : dataFaqs;

  return (
    <main className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Category Tab Selector - Sticky & High Contrast to let users toggle immediately */}
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-2 flex justify-center sticky top-20 z-40">
        <div className="bg-slate-900/90 backdrop-blur-md border border-white/15 p-1.5 rounded-2xl shadow-xl flex gap-2">
          <button
            onClick={() => {
              setActiveTab('web');
              setOpenFaq(null);
            }}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-2 transition-all duration-350 ${
              activeTab === 'web'
                ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
            id="tab-web-plans"
          >
            <Globe className="w-4 h-4" />
            Website Subscription Plans
          </button>
          
          <button
            onClick={() => {
              setActiveTab('data');
              setOpenFaq(null);
            }}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-2 transition-all duration-350 ${
              activeTab === 'data'
                ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
            id="tab-data-plans"
          >
            <FileSpreadsheet className="w-4 h-4" />
            Spreadsheets & Automation
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'web' ? (
          <motion.div
            key="web-section"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {/* HERO SECTION - WEBSITE BUILDING */}
            <section className="relative py-20 overflow-hidden bg-slate-900 text-white min-h-[480px] flex items-center">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 z-0"></div>
              <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent z-0"></div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
                <div className="grid md:grid-cols-12 gap-12 items-center">
                  
                  <div className="md:col-span-8 lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 backdrop-blur-md rounded-full text-indigo-300 border border-indigo-500/30 text-xs font-semibold uppercase tracking-widest">
                      <Sparkles className="w-3.5 h-3.5" />
                      Website Building Plans — Zero Upfront Cost
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                      Your Complete Website.<br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 font-extrabold">
                        Zero Upfront Hassle.
                      </span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 leading-relaxed font-medium">
                      Stop paying thousands for web design. Get your Custom Domain, High-Speed Hosting, Professional Design, and Monthly Maintenance—all for less than your daily coffee.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
                      <a 
                        href="#web-pricing-table"
                        className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 hover:-translate-y-0.5 transition-all text-base"
                        id="hero-see-plans-btn"
                      >
                        Choose Plan & Get Started
                        <ArrowRight className="w-5 h-5" />
                      </a>
                      <a 
                        href="#what-is-included"
                        className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white rounded-xl font-bold border border-white/10 flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all text-base animate-pulse"
                      >
                        What&apos;s Included?
                      </a>
                    </div>
                  </div>

                  <div className="hidden md:block md:col-span-4 lg:col-span-5 relative">
                    <div className="absolute inset-0 bg-indigo-500/10 blur-[80px] rounded-full"></div>
                    <div className="relative bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-white/15 shadow-2xl space-y-6">
                      <div className="flex justify-between items-center border-b border-white/10 pb-4">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-red-500 block"></span>
                          <span className="w-3 h-3 rounded-full bg-yellow-400 block"></span>
                          <span className="w-3 h-3 rounded-full bg-green-500 block"></span>
                        </div>
                        <span className="text-xs text-slate-400 font-mono">website_package.json</span>
                      </div>
                      <div className="space-y-3 font-mono text-xs text-indigo-300">
                        <p><span className="text-emerald-400">{"{"}</span></p>
                        <p className="pl-4"><span className="text-sky-400">&quot;upfront_cost&quot;</span>: <span className="text-amber-400">0</span>,</p>
                        <p className="pl-4"><span className="text-sky-400">&quot;domain_registration&quot;</span>: <span className="text-emerald-400">&quot;Free (.in/.com)&quot;</span>,</p>
                        <p className="pl-4"><span className="text-sky-400">&quot;hosting_server&quot;</span>: <span className="text-emerald-400">&quot;Premium High-Speed&quot;</span>,</p>
                        <p className="pl-4"><span className="text-sky-400">&quot;ssl_security&quot;</span>: <span className="text-emerald-400">&quot;Included (HTTPS)&quot;</span>,</p>
                        <p className="pl-4"><span className="text-sky-400">&quot;monthly_maintenance&quot;</span>: <span className="text-emerald-400">&quot;100% Managed&quot;</span>,</p>
                        <p className="pl-4"><span className="text-sky-400">&quot;starting_price&quot;</span>: <span className="text-emerald-400">&quot;₹799/month&quot;</span></p>
                        <p><span className="text-emerald-400">{"}"}</span></p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* PRICING PLANS SECTION (PRICING TABLE) */}
            <section id="web-pricing-table" className="py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 font-mono">
                    Flexible Packages
                  </h2>
                  <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                    Choose Your Subscription Plan
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-semibold">
                    We offer two options. Selecting the Yearly Plan provides immediate hosting & domain security while offering you a massive <span className="text-emerald-600 dark:text-emerald-400">16% discount</span>!
                  </p>
                </div>

                {/* Pricing Table & Cards Grid */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
                  
                  {/* Monthly Starter Card */}
                  <div className="relative bg-white dark:bg-slate-950 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-slate-350 dark:hover:border-slate-700 transition-all duration-300">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-wider rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 uppercase font-mono mb-2">
                            🚀 Monthly Starter
                          </span>
                          <h4 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
                            ₹799 <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">/ month</span>
                          </h4>
                        </div>
                      </div>
                      
                      <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed mb-6">
                        Perfect plan to launch your website online immediately matching local businesses and dynamic startups with low running plans.
                      </p>

                      <ul className="space-y-4 border-t border-slate-100 dark:border-slate-800/80 pt-6">
                        <li className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5">
                            🌐 Domain Name
                          </span>
                          <span className="font-extrabold text-slate-900 dark:text-white">Free (.in or .com)</span>
                        </li>
                        <li className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400 font-semibold">⚡ Web Hosting</span>
                          <span className="font-extrabold text-slate-900 dark:text-white">Included (High-Speed)</span>
                        </li>
                        <li className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400 font-semibold">📄 Website Pages</span>
                          <span className="font-extrabold text-slate-900 dark:text-white font-mono">Up to 5 Pages</span>
                        </li>
                        <li className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400 font-semibold">📱 Mobile Responsive</span>
                          <span className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1">
                            <span className="text-emerald-500 text-xs font-semibold">✅ Yes</span>
                          </span>
                        </li>
                        <li className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400 font-semibold">🔒 SSL Security</span>
                          <span className="font-extrabold text-slate-900 dark:text-white text-xs">✅ Included</span>
                        </li>
                        <li className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400 font-semibold">🛠 Monthly Updates</span>
                          <span className="font-bold text-slate-900 dark:text-white text-xs">Text & Image Updates</span>
                        </li>
                        <li className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400 font-semibold">📅 Commitment</span>
                          <span className="font-bold text-slate-700 dark:text-slate-200 text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700">6-Month Lock-in</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-8 mt-6 border-t border-slate-100 dark:border-slate-800">
                      <a
                        href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20am%20interested%20in%2520the%20Monthly%20Starter%20website%2520plan%20for%2520Rs%20799/mo.%20Please%20share%20the%20onboarding%20form."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 px-4 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-950 rounded-xl font-extrabold text-sm text-center block transition-all hover:scale-[1.01] shadow-md shadow-slate-900/10"
                        id="btn-starter-monthly"
                      >
                        Get Started Now
                      </a>
                    </div>
                  </div>

                  {/* Yearly Pro Card - HIGHLIGHTED */}
                  <div className="relative bg-white dark:bg-slate-950 rounded-3xl p-8 border-2 border-indigo-600 dark:border-indigo-500/80 shadow-xl ring-4 ring-indigo-500/5 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300">
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                      🏆 Best Value - Save 16%
                    </span>

                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-wider rounded-lg bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 uppercase font-mono">
                            Yearly Pro
                          </span>
                          <h4 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-3">
                            ₹7,999 <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">/ year</span>
                          </h4>
                          <p className="text-xs text-emerald-600 dark:text-emerald-400 font-black mt-1 font-bold">
                            Equivalent to ₹666 / month (Save ₹1,589!)
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed mb-6">
                        The ultimate choice for growing operations, providing maximum design flexibility, layout changes and priority service throughout the year.
                      </p>

                      <ul className="space-y-4 border-t border-slate-100 dark:border-slate-800/80 pt-6">
                        <li className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5">
                            🌐 Domain Name
                          </span>
                          <span className="font-extrabold text-indigo-600 dark:text-indigo-400">Free (.in or .com)</span>
                        </li>
                        <li className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400 font-semibold">⚡ Web Hosting</span>
                          <span className="font-extrabold text-indigo-600 dark:text-indigo-400">Included (High-Speed)</span>
                        </li>
                        <li className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400 font-semibold">📄 Website Pages</span>
                          <span className="font-extrabold text-slate-900 dark:text-white font-mono">Up to 5 Pages</span>
                        </li>
                        <li className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400 font-semibold">📱 Mobile Responsive</span>
                          <span className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1">
                            <span className="text-emerald-500 text-xs font-semibold">✅ Yes</span>
                          </span>
                        </li>
                        <li className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400 font-semibold">🔒 SSL Security</span>
                          <span className="font-extrabold text-slate-900 dark:text-white text-xs">✅ Included</span>
                        </li>
                        <li className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400 font-semibold">🛠 Monthly Updates</span>
                          <span className="font-bold text-slate-900 dark:text-white text-xs">Text, Image & Layout Updates</span>
                        </li>
                        <li className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400 font-semibold">📅 Commitment</span>
                          <span className="font-bold text-emerald-700 dark:text-emerald-400 text-xs bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-200 dark:border-emerald-500/20">1 Year</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-8 mt-6 border-t border-slate-100 dark:border-slate-800">
                      <a
                        href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%2520am%20interested%20in%20the%20Yearly%20Pro%2520website%20plan%20for%20Rs%207,999/yr%20to%20save%2016%25.%20Please%20share%20the%20onboarding%20form."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-extrabold text-sm text-center block transition-all shadow-md shadow-indigo-600/20 hover:scale-[1.01]"
                        id="btn-pro-yearly"
                      >
                        Go Yearly & Save
                      </a>
                    </div>
                  </div>

                </div>

                {/* Additional Web Comparison Table Option (Desktop only) */}
                <div className="hidden md:block max-w-4xl mx-auto mt-16 bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                  <h4 className="text-lg font-extrabold text-slate-800 dark:text-slate-200 mb-6 px-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500" /> Plan Features Comparison
                  </h4>
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-slate-100 dark:border-slate-800/80">
                        <th className="py-4 px-4 text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Features</th>
                        <th className="py-4 px-4 text-xs font-extrabold text-indigo-650 dark:text-indigo-400 uppercase tracking-wide">🚀 Monthly Starter</th>
                        <th className="py-4 px-4 text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">🏆 Yearly Pro</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm font-semibold text-slate-600 dark:text-slate-350">
                      <tr className="border-b border-slate-50 dark:border-slate-800/40 hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                        <td className="py-4 px-4 font-bold text-slate-700 dark:text-slate-300">Pricing</td>
                        <td className="py-4 px-4">₹799 / month</td>
                        <td className="py-4 px-4">₹7,999 / year (Save 16%)</td>
                      </tr>
                      <tr className="border-b border-slate-50 dark:border-slate-800/40 hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                        <td className="py-4 px-4 font-bold text-slate-700 dark:text-slate-300">Domain Name</td>
                        <td className="py-4 px-4">Free (.in or .com)</td>
                        <td className="py-4 px-4">Free (.in or .com)</td>
                      </tr>
                      <tr className="border-b border-slate-50 dark:border-slate-800/40 hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                        <td className="py-4 px-4 font-bold text-slate-700 dark:text-slate-300">Web Hosting</td>
                        <td className="py-4 px-4">Included (High-Speed Premium)</td>
                        <td className="py-4 px-4">Included (High-Speed Premium)</td>
                      </tr>
                      <tr className="border-b border-slate-50 dark:border-slate-800/40 hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                        <td className="py-4 px-4 font-bold text-slate-700 dark:text-slate-300">Website Pages</td>
                        <td className="py-4 px-4">Up to 5 Pages</td>
                        <td className="py-4 px-4">Up to 5 Pages</td>
                      </tr>
                      <tr className="border-b border-slate-50 dark:border-slate-800/40 hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                        <td className="py-4 px-4 font-bold text-slate-700 dark:text-slate-300">Mobile Responsive</td>
                        <td className="py-4 px-4 text-emerald-500">✅ Yes</td>
                        <td className="py-4 px-4 text-emerald-500">✅ Yes</td>
                      </tr>
                      <tr className="border-b border-slate-50 dark:border-slate-800/40 hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                        <td className="py-4 px-4 font-bold text-slate-700 dark:text-slate-300">SSL Security</td>
                        <td className="py-4 px-4">✅ Included</td>
                        <td className="py-4 px-4">✅ Included</td>
                      </tr>
                      <tr className="border-b border-slate-50 dark:border-slate-800/40 hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                        <td className="py-4 px-4 font-bold text-slate-700 dark:text-slate-300">Monthly Updates</td>
                        <td className="py-4 px-4 text-xs">Text & Image Updates</td>
                        <td className="py-4 px-4 text-xs text-indigo-600 dark:text-indigo-400 font-bold">Text, Image & Layout Updates</td>
                      </tr>
                      <tr className="border-b border-slate-50 dark:border-slate-800/40 hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                        <td className="py-4 px-4 font-bold text-slate-700 dark:text-slate-300">Commitment</td>
                        <td className="py-4 px-4 text-xs font-mono">6-Month Lock-in</td>
                        <td className="py-4 px-4 text-xs font-mono text-emerald-600 dark:text-emerald-400">1 Year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </section>

            {/* "WHAT'S INCLUDED" SECTION (VALUE DIKHANE KE LIYE) */}
            <section id="what-is-included" className="py-24 bg-white dark:bg-slate-950 transition-colors">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-xs font-black uppercase tracking-widest text-emerald-650 dark:text-emerald-400 mb-3 font-mono">
                    What&apos;s Included?
                  </h2>
                  <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4One">
                    Complete Built-In Value
                  </h3>
                  <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                    Yahan hum client ko dikhayenge ki unhe iss package mein kya-kya milta hai — everything managed seamlessly:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  
                  {/* Item 1 */}
                  <div className="bg-slate-50 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 hover:border-slate-300 dark:hover:border-slate-750 transition-all duration-200">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 flex items-center justify-center">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">🌐 Free Custom Domain</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-semibold">
                      Aapke business ka professional naam (e.g., <span className="text-indigo-650 dark:text-indigo-300 font-mono">www.yourbusiness.com</span>) register karke configure kiya jayega.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-slate-50 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 hover:border-slate-300 dark:hover:border-slate-750 transition-all duration-200">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 flex items-center justify-center">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">⚡ Premium Hosting</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-semibold">
                      Fast loading aur secure server, jiska alag se koi charge nahi. Aapki site speed high-performance rahegi.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-slate-50 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 hover:border-slate-300 dark:hover:border-slate-750 transition-all duration-200">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 flex items-center justify-center">
                      <Palette className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">🎨 Professional Design</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-semibold">
                      Mobile aur tablet-friendly modern website design jo aapke core business identity ke saath fit baithegi.
                    </p>
                  </div>

                  {/* Item 4 */}
                  <div className="bg-slate-50 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 hover:border-slate-300 dark:hover:border-slate-750 transition-all duration-200">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 flex items-center justify-center">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">🛠️ Monthly Maintenance</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-semibold">
                      Website down ho gayi ya photo/number change karna hai? Hum karenge, aap sirf apne business par dhyan dein.
                    </p>
                  </div>

                  {/* Item 5 */}
                  <div className="bg-slate-50 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 hover:border-slate-300 dark:hover:border-slate-750 transition-all duration-200">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 flex items-center justify-center">
                      <Lock className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">🔒 Free SSL Certificate</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-semibold">
                      Aapki aur aapke customers ki full data security ke liye (HTTPS encryptions) protocol support automatically standard setup.
                    </p>
                  </div>

                  {/* Item 6 */}
                  <div className="bg-slate-50 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 hover:border-slate-300 dark:hover:border-slate-750 transition-all duration-200">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 flex items-center justify-center">
                      <PhoneCall className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">📱 WhatsApp & Call Button</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-semibold">
                      Direct website se leads aur customer inquiries paane ke liye quick dial aur active WhatsApp text chat integration.
                    </p>
                  </div>

                </div>

              </div>
            </section>

            {/* "HOW IT WORKS" SECTION (TRUST BANANE KE LIYE) */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors border-y border-slate-200 dark:border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-20">
                  <h2 className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 font-mono">
                    How It Works
                  </h2>
                  <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                    Pristine Process, Zero Stress
                  </h3>
                  <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                    Client ko batayein ki process kitna aasan hai setup hone mein — complete in 3 standard phases:
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
                  
                  {/* Step 1 */}
                  <div className="relative bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="absolute top-4 right-6 text-5xl font-black text-indigo-500/10 font-mono">01</div>
                      <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-[10px] font-bold tracking-widest uppercase rounded mb-4">
                        Phase 1
                      </span>
                      <h4 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight mb-2">
                        Step 1: Subscribe & Onboard
                      </h4>
                      <p className="text-slate-550 dark:text-slate-400 text-sm leading-relaxed font-semibold">
                        ₹799 ka monthly starter plan select karein aur apne business ki detail, details files form mein bharein.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="absolute top-4 right-6 text-5xl font-black text-indigo-500/10 font-mono">02</div>
                      <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-[10px] font-bold tracking-widest uppercase rounded mb-4">
                        Phase 2
                      </span>
                      <h4 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight mb-2">
                        Step 2: We Build It
                      </h4>
                      <p className="text-slate-550 dark:text-slate-400 text-sm leading-relaxed font-semibold">
                        Hum aapka custom domain register karenge aur <span className="text-indigo-650 dark:text-indigo-400 font-bold">48-72 hours</span> mein pehla design ready karke feedback ke liye dikhayenge.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="absolute top-4 right-6 text-5xl font-black text-indigo-500/10 font-mono">03</div>
                      <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-[10px] font-bold tracking-widest uppercase rounded mb-4">
                        Phase 3
                      </span>
                      <h4 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight mb-2">
                        Step 3: Go Live & Relax
                      </h4>
                      <p className="text-slate-550 dark:text-slate-400 text-sm leading-relaxed font-semibold">
                        Aapki professional website live ho jayegi. Aage ki hosting, backups aur ongoing monthly maintenance humari complete zimmedari hai.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </section>

          </motion.div>
        ) : (
          <motion.div
            key="data-section"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {/* HERO SECTION - GOOGLE SHEETS & AUTOMATION */}
            <section className="relative py-20 overflow-hidden bg-slate-900 text-white min-h-[480px] flex items-center">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 z-0"></div>
              <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent z-0"></div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
                <div className="grid md:grid-cols-12 gap-12 items-center">
                  
                  <div className="md:col-span-8 lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 backdrop-blur-md rounded-full text-emerald-300 border border-emerald-500/30 text-xs font-semibold uppercase tracking-widest">
                      <Sparkles className="w-3.5 h-3.5" />
                      Google Ecosystem Developer & Automation
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                      All-In-One <br />
                      <span className="text-gradient text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400 font-extrabold">
                        Spreadsheet Automation
                      </span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 leading-relaxed font-medium">
                      No expensive ERP subscriptions. No massive monthly overheads. Stable, secure business systems with zero server cost designed exclusively for your custom registers.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
                      <a 
                        href="#data-pricing-table"
                        className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-555 text-white rounded-xl font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 hover:-translate-y-0.5 transition-all text-base"
                        id="hero-data-plans-btn"
                      >
                        Explore Sheets Packages
                        <ArrowRight className="w-5 h-5" />
                      </a>
                      <a 
                        href="#quick-quotation-tool"
                        className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white rounded-xl font-bold border border-white/10 flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all text-base"
                      >
                        Instant Calculator Tool
                      </a>
                    </div>
                  </div>

                  <div className="hidden md:block md:col-span-4 lg:col-span-5 relative">
                    <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full"></div>
                    <div className="relative bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-white/15 shadow-2xl space-y-6">
                      <div className="flex justify-between items-center border-b border-white/10 pb-4">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-red-500 block"></span>
                          <span className="w-3 h-3 rounded-full bg-yellow-400 block"></span>
                          <span className="w-3 h-3 rounded-full bg-green-500 block"></span>
                        </div>
                        <span className="text-xs text-slate-400 font-mono">sheets_automation.sh</span>
                      </div>
                      <div className="space-y-4 font-mono text-xs text-emerald-300">
                        <p><span className="text-indigo-400"># Trigger live pipeline</span></p>
                        <p className="text-slate-400">$ load data_analytics_suite</p>
                        <div className="pl-4 text-slate-350 space-y-1 border-l border-slate-700">
                          <p className="text-emerald-400">● Core Google Workspace connection</p>
                          <p className="text-yellow-400">● Auto-PDF and Email Alert system</p>
                          <p className="text-sky-400">● 100% cloud secure & zero server bills</p>
                        </div>
                        <p className="text-slate-500 animate-pulse">✓ Ready to customize for your sheet...</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* CORE SERVICES LIST SECTION (ONLY FOR SHEETS/DATA TAB TO HIGHLIGHT AUTOMATION DETAILS) */}
            <section id="core-services" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-20">
                  <h2 className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
                    What We Offer
                  </h2>
                  <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
                    Our Professional Services
                  </h3>
                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
                    Turn your business manual registers, phone logs, and files into 100% automated systems that grow organically.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {coreServices.map((service, index) => (
                    <div
                      key={service.id}
                      className="group relative bg-slate-50 dark:bg-slate-900 border border-slate-205 dark:border-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                    >
                      <div className="relative z-10 space-y-6">
                        {/* Icon & Badges */}
                        <div className="flex items-start justify-between">
                          <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                            <service.icon className="w-7 h-7" />
                          </div>
                          <span className="text-xs font-bold text-slate-450 dark:text-slate-505 group-hover:text-emerald-500 transition-colors font-mono uppercase">
                            Core Service {index + 1}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase font-mono">
                            {service.title}
                          </h4>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">
                            {service.subtitle}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                            {service.description}
                          </p>
                        </div>

                        {/* Feature Points */}
                        <ul className="space-y-3 pt-2">
                          {service.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm font-semibold">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                      </div>

                      <div className="relative z-10 pt-8 border-t border-slate-200 dark:border-slate-800/80 mt-6 flex justify-between items-center">
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Custom delivery & support included</span>
                        <a
                          href={`https://wa.me/918851666208?text=Hi%20Suraj,%2520I%27m%2520interested%2520in%2520your%2520${encodeURIComponent(service.subtitle)}%2520service.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group/link"
                        >
                          Discuss Scope
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* SPREADSHEETS PLANS DISPLAY */}
            <section id="data-pricing-table" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-mono">One-Time Solutions</span>
                  <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                    Standard Automation Presets
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
                    Whether you need offline pivot dashboard reports or Google Workspace background JavaScript alert notifications.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
                  {dataPlans.map((plan, idx) => {
                    const isPopular = !!plan.popular;
                    return (
                      <div
                        key={plan.name}
                        className={`relative bg-white dark:bg-slate-950 rounded-3xl p-8 border hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                          isPopular 
                            ? 'border-emerald-500/85 shadow-xl ring-2 ring-emerald-500/10' 
                            : 'border-slate-200 dark:border-slate-800 shadow-sm'
                        }`}
                      >
                        {isPopular && (
                          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                            💥 Popular Pick
                          </span>
                        )}

                        <div className="space-y-6">
                          <div>
                            <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold tracking-widest rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 uppercase font-mono">
                              {plan.badge}
                            </span>
                            
                            <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-3 leading-tight">
                              {plan.name}
                            </h4>
                            
                            <p className="text-slate-550 dark:text-slate-400 text-xs mt-2 leading-relaxed min-h-[40px] font-medium">
                              {plan.bestFor}
                            </p>
                          </div>

                          <div className="flex items-baseline gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                            <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                              {plan.textPrice}
                            </span>
                            <span className="text-slate-400 text-xs font-mono font-semibold lowercase">
                              / {plan.period}
                            </span>
                          </div>

                          <div className="space-y-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                            <ul className="space-y-3">
                              {plan.features.map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-2 text-slate-705 dark:text-slate-300 text-xs sm:text-sm font-semibold">
                                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100 dark:border-slate-805 mt-6">
                          <a
                            href={plan.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm text-center block transition-all ${
                              isPopular 
                                ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white'
                            }`}
                          >
                            {plan.cta} →
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </section>

            {/* BENTO ADD-ONS SECTION */}
            <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 border-b border-slate-200/50 dark:border-slate-800">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-12 xl:col-span-5 text-center xl:text-left space-y-4">
                    <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto xl:mx-0 border border-emerald-100 dark:border-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Plus className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Modular Add-Ons</h2>
                    <p className="text-xl text-emerald-650 dark:text-emerald-400 font-extrabold">Reinforce Your Custom Scripts</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-md font-semibold">
                      Pay only for the exact capabilities you actually require. Add standard pivot updates, direct notification alerts, and premium handoff modules.
                    </p>
                  </div>
                  
                  <div className="lg:col-span-12 xl:col-span-7">
                    <div className="bg-slate-50 dark:bg-slate-900/40 p-6 md:p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 transition-colors shadow-inner">
                      <div className="space-y-4">
                        {addonsList.map((addon, idx) => (
                          <div 
                            key={idx} 
                            className="flex justify-between items-center p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 shadow-sm hover:scale-[1.005] transition-transform"
                          >
                            <span className="font-extrabold text-sm text-slate-850 dark:text-slate-200">{addon.name}</span>
                            <span className="font-black text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm whitespace-nowrap bg-emerald-50 /10 px-3 py-1 rounded-lg">
                              {addon.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* INTERACTIVE CUSTOM QUOTATION PLANNER SECTION */}
            <section id="quick-quotation-tool" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3 font-mono">
                    ₹ Dynamic Planning
                  </h2>
                  <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                    Instant Price Estimator
                  </h3>
                  <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                    Answer the simple Yes/No questions regarding what modules you require. Click <strong>Generate Proposal</strong> to instantly secure a corporate proposal copy and download the PDF list.
                  </p>
                </div>

                <QuotationTool />
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FREQUENTLY ASKED QUESTIONS (FAQS) (UNIVERSAL ACCORDION COMPONENT WITH CORRESPONDING DATA) */}
      <section className="py-24 bg-white dark:bg-slate-950/20 border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono">Got Questions?</span>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-500 dark:text-slate-450 text-sm font-semibold mt-2">
              {activeTab === 'web' 
                ? "Yeh section clients ke doubts clear karega aur aapke terms set karega:" 
                : "Common questions regarding our custom sheet developments & hosting support:"}
            </p>
          </div>

          <div className="space-y-4">
            {currentFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 transition-colors hover:bg-slate-100/50 dark:hover:bg-slate-850"
                  >
                    <span className="font-extrabold text-slate-900 dark:text-white text-base md:text-lg leading-snug">
                      Q. {faq.q}
                    </span>
                    <span className="text-slate-550 dark:text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-indigo-505" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-slate-650 dark:text-slate-350 text-sm md:text-base font-semibold leading-relaxed border-t border-slate-200/50 dark:border-slate-800/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Trust & Methodology Section */}
      <section className="py-20 relative overflow-hidden transition-colors border-t border-slate-200/40 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-505 uppercase tracking-widest font-mono block mb-2">Our Standard Guidelines</span>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              A Partner Engineered For Growth
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">Zero Server Cost Overhead</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-semibold">
                No expensive recurring server bills or hidden licensing fees. All systems are optimized for maximum cloud speed with no maintenance fees unless requested.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">Same-Week Ready Launches</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-semibold">
                No endless multi-month development loops. Standard custom worksheets, landing pages, or automatic scripts are completely ready to deploy within 3 to 7 calendar working days.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">100% Onboarding Training</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-semibold">
                Every project handoff incorporates comprehensive video tutorials manuals, plain-English setup instruction guides and a 1-on-1 team onboarding setup call.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-905 to-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Need custom modifications?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg mb-8 leading-relaxed font-medium">
              Join 50+ businesses automating their registers and launching fast web presences. Start a quick WhatsApp chat to discuss specific workflow requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%2520I%27ve%2520used%252520your%2520Pricing%252520page%2520and%2520want%2520to%2520discuss%2520a%2520project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-base shadow-lg transition-all hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
              >
                Let&apos;s Build Solutions Together
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
