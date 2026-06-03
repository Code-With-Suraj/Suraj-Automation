import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  PhoneCall
} from 'lucide-react';
import { CORE_SERVICES } from '../data/servicesData';
import QuotationTool from '../components/QuotationTool';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'web' | 'data'>('web');

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

  const webPlans = [
    {
      badge: "Starter",
      name: "Basic Website Setup",
      bestFor: "Best for local stores or simple pages looking to grow online",
      price: "₹3,999",
      period: "one-time payment",
      color: "emerald",
      popular: false,
      features: [
        "1-Page Structured Landing Page",
        "100% Mobile & Touch Friendly Layouts",
        "About, Services List, Core Dynamic Gallery",
        "WhatsApp Chat Button Sync Integrations",
        "Secure Contact Leads Verification Form",
        "SEO Header Metadata Tag Adjustments"
      ],
      cta: "Setup Basic Website",
      link: "https://wa.me/918851666208?text=Hi%20Suraj,%2520I%27m%2520interested%2520in%2520the%2520Starter%2520Basic%252520Website%2520package."
    },
    {
      badge: "Standard",
      name: "Professional System Website",
      bestFor: "Best for growing regional operations that want professional reach",
      price: "₹9,999",
      period: "one-time payment",
      color: "blue",
      popular: true,
      features: [
            "4–5 Fully Dynamic Web Page Structures",
            "Automatic Lead Tracker Ingestion Module",
            "Sleek Header Transitions & Interactive UI",
            "WhatsApp Chat Alerts & Call Link Buttons",
            "Basic On-Page SEO Routing Configurations",
            "Administrative Panel (simple text edits)",
            "1-Week Standard QA & Revisions Handover"
      ],
      cta: "Build Standard System",
      link: "https://wa.me/918851666208?text=Hi%20Suraj,%2520I%27m%2520interested%2520in%2520the%2520Standard%252520Website%2520package."
    },
    {
      badge: "Corporate Elite",
      name: "Custom Enterprise Portal",
      bestFor: "Best for companies needing complete automation + payment gateway tracker",
      price: "₹19,999",
      period: "+ scope-based details",
      color: "indigo",
      popular: false,
      features: [
            "Everything in Standard Plans",
            "Razorpay Payment Tracking & Validation Module",
            "Automated Invoice Generator & Logger Setup",
            "Client Contacts Management System CRM",
            "Google Drive/Sheets Real-time Synchronizations",
            "Auto-Generated PDF Dispatch Scripts",
            "Comprehensive 1-Month Diagnostics Support"
      ],
      cta: "Get Enterprise Quote",
      link: "https://wa.me/918851666208?text=Hi%20Suraj,%2520I%27m%2520interested%2520in%2520the%2520Business%252520System%2520package."
    }
  ];

  const dataPlans = [
    {
      badge: "Local Excel Setup",
      name: "Basic Offline Excel Dashboard",
      bestFor: "Best for static sheet ledgers, offline financial sheets or files",
      price: "₹2,000",
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
      link: "https://wa.me/918851666208?text=Hi%20Suraj,%2520I%2520am%2520interested%2520in%2520the%2520Basic%2520Excel%2520Dashboard%2520setup%2520starting%2520at%2520%E2%82%B92,000."
    },
    {
      badge: "Cloud Automation",
      name: "Live Google Sheets Dashboard",
      bestFor: "Best for multi-branch teams needing real-time cloud data access",
      price: "₹3,000",
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
      link: "https://wa.me/918851666208?text=Hi%20Suraj,%2520I%2520am%2520interested%2520in%252520the%2520Google%2520Sheets%2520Basic%2520Dashboard%2520setup%2520starting%2520at%2520%E2%82%B93,000."
    },
    {
      badge: "System Pro",
      name: "Advanced Sheets + Apps Script Suite",
      bestFor: "Best for complete background workflow alerts, PDF generation and notifications",
      price: "₹8,000+",
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
      link: "https://wa.me/918851666208?text=Hi%20Suraj,%2520I%2520need%2520the%2520Advanced%2520Google%252520Sheets%2520%2B%2520Apps%2520Script%2520System."
    }
  ];

  const addonsList = [
    { name: "Extra Page / Spreadsheet Tab Module", price: "₹1,000" },
    { name: "Custom Third-Party API Webhook Sync", price: "₹3,000+" },
    { name: "Google Apps Script Automated PDF Dispatch", price: "₹1,999" },
    { name: "Direct WhatsApp Message Trigger Gateway", price: "₹2,999" },
    { name: "Premium Support & Configuration Modifications", price: "₹999 / mo" }
  ];

  const activePlansSet = activeTab === 'web' ? webPlans : dataPlans;

  return (
    <main className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-900 text-white min-h-[500px] flex items-center">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-emerald-950/40 z-0"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent z-0"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-8 lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-indigo-300 border border-white/10 text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                Suraj Automation — Professional Pricing & Services
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                All-In-One <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 font-black">Services</span> & Flexible Plans
              </h1>
              
              <p className="text-xl text-slate-300 font-medium">
                No expensive ERP subscriptions. No massive monthly overheads. Reasonable one-time costs.
              </p>
              
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
                Elevate your everyday operations. Explore our pre-packaged plans or configure a customized quotation instantly below with our interactive calculator.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
                <a 
                  href="#quick-quotation-tool"
                  className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-indigo-600/30 hover:-translate-y-0.5 transition-all text-base"
                >
                  <FileSpreadsheet className="w-5 h-5" />
                  Instant Quotation Generator
                </a>
                <a 
                  href="#plans-section"
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white rounded-xl font-bold border border-white/10 flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all text-base"
                >
                  View Packages List
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="hidden md:block md:col-span-4 lg:col-span-5 relative">
              <div className="absolute inset-0 bg-indigo-500/20 blur-[80px] rounded-full"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">service_overview.sh</span>
                </div>
                <div className="space-y-4 font-mono text-xs text-indigo-300">
                  <p><span className="text-emerald-400"># Check system integration</span></p>
                  <p className="text-slate-400">$ fetch_merged_services_pricing</p>
                  <div className="pl-4 text-slate-300 space-y-1 border-l border-slate-700">
                    <p className="text-yellow-400">● Website Pricing: Merged & Active</p>
                    <p className="text-sky-400">● Dashboard Pricing: Live & Configured</p>
                    <p className="text-emerald-400">✓ Interactive Quotation Tool Online</p>
                  </div>
                  <p className="text-slate-400">$ load quotes_firestore</p>
                  <p className="text-white animate-pulse">⚙ Waiting for your custom configuration submit...</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="core-services" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3_">
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
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl dark:shadow-none hover:border-transparent dark:hover:border-slate-700/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Gradient Border Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent dark:from-indigo-950/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>

                <div className="relative z-10 space-y-6">
                  
                  {/* Icon & Badges */}
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-indigo-500 transition-colors font-mono uppercase">
                      Core Service {index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase font-mono">
                      {service.title}
                    </h4>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
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

                <div className="relative z-10 pt-8 border-t border-slate-100 dark:border-slate-800/80 mt-6 flex justify-between items-center">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Custom delivery & support included</span>
                  <a
                    href={`https://wa.me/918851666208?text=Hi%20Suraj,%2520I%27m%2520interested%2520in%2520your%2520${encodeURIComponent(service.subtitle)}%2520service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group/link"
                  >
                    Discuss Scope
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Merged Pricing & Standard Packages Section */}
      <section id="plans-section" className="py-24 bg-indigo-50/50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3_">
              Standard Packages & Pricing
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              Select Your Operational Scope
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Whether you need scalable cloud-integrated websites or local business spreadsheets, select a preset plan to get started.
            </p>

            {/* Toggle Tab Switcher */}
            <div className="inline-flex bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1.5 rounded-2xl shadow-sm mt-8">
              <button
                onClick={() => setActiveTab('web')}
                className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 transition-all ${
                  activeTab === 'web'
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <MonitorSmartphone className="w-4 h-4" />
                Website & Dynamic Frontend Portals
              </button>
              <button
                onClick={() => setActiveTab('data')}
                className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 transition-all ${
                  activeTab === 'data'
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <FileSpreadsheet className="w-4 h-4" />
                Live Spreadsheet & Automation Systems
              </button>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Header Description of Selected Type */}
            <AnimatePresence mode="wait">
              {activeTab === 'web' ? (
                <motion.div
                  key="web-desc"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center mb-12 shadow-sm"
                >
                  <p className="text-slate-700 dark:text-slate-300 transform font-semibold max-w-3xl mx-auto leading-relaxed">
                    🌟 <strong className="text-indigo-600 dark:text-indigo-400">Dynamic UI, Lead Capture, Security.</strong> From simple corporate landing pages to full multi-role management dashboards tailored for Indian business operations.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="data-desc"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center mb-12 shadow-sm"
                >
                  <p className="text-slate-700 dark:text-slate-300 transform font-semibold max-w-3xl mx-auto leading-relaxed">
                    ☁ <strong className="text-emerald-600 dark:text-emerald-400">Offline Pivot Tools & Google Drive Scripting.</strong> Connect sheets, create WhatsApp notification hooks, automate invoicing and auto-save raw files.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Plan Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {activePlansSet.map((plan, idx) => {
                const isPopular = !!plan.popular;
                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className={`relative bg-white dark:bg-slate-900 rounded-3xl p-8 border hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${
                      isPopular 
                        ? 'border-indigo-500/80 shadow-xl ring-2 ring-indigo-500/10' 
                        : 'border-slate-250 dark:border-slate-800 shadow-sm'
                    }`}
                  >
                    {isPopular && (
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                        💥 Highly Recommended
                      </span>
                    )}

                    <div className="space-y-6">
                      <div>
                        <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold tracking-widest rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 uppercase font-mono">
                          {plan.badge}
                        </span>
                        
                        <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-3 leading-tight">
                          {plan.name}
                        </h4>
                        
                        <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 leading-relaxed min-h-[40px] font-medium">
                          {plan.bestFor}
                        </p>
                      </div>

                      {/* Pricing */}
                      <div className="flex items-baseline gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-slate-400 text-xs font-mono font-semibold lowercase">
                          / {plan.period}
                        </span>
                      </div>

                      {/* Feature Checklist */}
                      <div className="space-y-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <ul className="space-y-3">
                          {plan.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-slate-705 dark:text-slate-300 text-xs sm:text-sm font-semibold">
                              <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6">
                      <a
                        href={plan.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm text-center block transition-all ${
                          isPopular 
                            ? 'bg-indigo-650 hover:bg-indigo-600 text-white shadow-lg' 
                            : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-800 dark:text-white'
                        }`}
                      >
                        {plan.cta} →
                      </a>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Bento Add-Ons Section */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 border-b border-slate-200/50 dark:border-slate-850">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-center lg:text-left space-y-4">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 border border-indigo-100 dark:border-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Plus className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Modular Add-Ons</h2>
              <p className="text-xl text-indigo-650 dark:text-indigo-400 font-extrabold">Reinforce Your Automation Package</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-md font-semibold">
                Pay only for the exact capabilities you actually require. Add standard script tasks, notifications alerts, and support modules.
              </p>
            </div>
            
            <div className="lg:col-span-7">
              <div className="bg-slate-50 dark:bg-slate-900/40 p-6 md:p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 transition-colors shadow-inner">
                <div className="space-y-4">
                  {addonsList.map((addon, idx) => (
                    <div 
                      key={idx} 
                      className={`flex justify-between items-center p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800/80 shadow-sm transition-transform hover:scale-[1.01]`}
                    >
                      <span className="font-extrabold text-sm text-slate-800 dark:text-slate-200">{addon.name}</span>
                      <span className="font-black text-indigo-600 dark:text-indigo-400 text-sm whitespace-nowrap bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-lg">
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

      {/* Trust & Methodology Section */}
      <section className="py-20 relative overflow-hidden transition-colors border-t border-slate-200/40 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono block mb-2">Our Standard Guidelines</span>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              A Platform Engineered For Growth
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 p-8 rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">Zero Server Cost Overhead</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-semibold">
                Deployments run on stable Google Apps Script structures directly hosted on your Google Drive accounts, completely avoiding month-on-month server hosting charges.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 p-8 rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">Same-Week Ready Launches</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-semibold">
                No endless multi-month development loops. Standard custom worksheets or automatic scripts are completely ready to deploy within 4 to 7 calendar working days.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 p-8 rounded-3xl space-y-4">
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
          <div className="bg-gradient-to-r from-indigo-900 to-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Need custom modifications?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg mb-8 leading-relaxed font-medium">
              Join 50+ businesses automating their registers. Start a quick WhatsApp chat to discuss specific workflow requirements today starting at ₹2,000.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%2520I%27ve%2520used%252520your%2520Pricing%2520calculator%2520and%2520want%2520to%2520discuss%2520a%2520project."
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
