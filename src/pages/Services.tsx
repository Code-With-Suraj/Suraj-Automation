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
  ExternalLink
} from 'lucide-react';

export default function Services() {
  const [dashboardType, setDashboardType] = useState<'excel' | 'sheets'>('excel');

  const coreServices = [
    {
      id: "mis-reporting",
      title: "MIS & Reporting",
      subtitle: "MIS Reports & Business Intelligence",
      description: "Scattered data ko ek jagah laao. Daily, weekly, monthly reports jo automatically ban jayein — bina copy-paste ke.",
      icon: BarChart3,
      color: "from-indigo-500 to-blue-600",
      darkColor: "group-hover:text-indigo-400 border-indigo-500/20",
      points: [
        "Custom MIS report design & automation",
        "Multi-branch & department-wise reporting",
        "KPI tracking & business health summaries",
        "Excel + Google Sheets based delivery"
      ]
    },
    {
      id: "process-automation",
      title: "Process Automation",
      subtitle: "Google Apps Script Automation",
      description: "Gmail, Sheets, Forms, Drive — sab ek system mein connect karo. Manual kaam ko automate karo bina ek rupee extra kharche ke.",
      icon: Cpu,
      color: "from-emerald-500 to-teal-600",
      darkColor: "group-hover:text-emerald-400 border-emerald-500/20",
      points: [
        "Auto email alerts & WhatsApp triggers",
        "Form-to-sheet data pipelines",
        "Scheduled report delivery",
        "Custom workflow automation for your business"
      ]
    },
    {
      id: "sql-data",
      title: "Data & SQL",
      subtitle: "SQL & Data Analytics",
      description: "Raw data se real insights nikalo. Sales trends, inventory gaps, customer patterns — sab kuch numbers mein clearly dikhao.",
      icon: Database,
      color: "from-blue-500 to-cyan-600",
      darkColor: "group-hover:text-blue-400 border-blue-500/20",
      points: [
        "SQL query writing & database management",
        "Data cleaning & transformation",
        "Sales, inventory & ops analytics",
        "Power BI dashboard development"
      ]
    },
    {
      id: "web-apps",
      title: "Web Apps",
      subtitle: "Lightweight Web Apps (Google Ecosystem)",
      description: "Chote business ke liye full-featured apps — UdharSarthi, StockSarthi, BillSarthi jaise systems jo Google Sheets pe chalte hain.",
      icon: Layers,
      color: "from-purple-500 to-pink-600",
      darkColor: "group-hover:text-purple-400 border-purple-500/20",
      points: [
        "Custom apps for your exact workflow",
        "Mobile-friendly & multi-user access",
        "No server cost — runs on Google Drive",
        "Training & onboarding included"
      ]
    }
  ];

  const excelPlans = [
    {
      badge: "Local & Efficient",
      name: "Excel Basic Dashboard",
      description: "Single-source, single-view dashboard for daily tracking and monitoring.",
      price: "₹2,000",
      period: "one-time",
      color: "indigo",
      features: [
        "1–2 data sources connected",
        "Charts: bar, line, pie (up to 5)",
        "Auto-refresh via Excel formulas",
        "Filter by date, category, branch",
        "Pre-built for sales / stock / expenses",
        "1 revision included"
      ],
      cta: "Setup Basic Excel Dashboard",
      msg: "Hi Suraj, I am interested in the Basic Excel Dashboard setup starting at ₹2,000."
    },
    {
      badge: "Power Query Powered",
      name: "Excel Advanced Dashboard",
      description: "Multi-source, dynamic dashboard with deep drill-downs and business logic.",
      price: "₹5,000+",
      period: "quote based",
      color: "indigo",
      popular: true,
      features: [
        "Multiple data sheets connected via Power Query",
        "10+ chart types + sparklines",
        "Dynamic slicers & interactive filters",
        "Branch-wise / category-wise views",
        "VBA macros for automation & alerts",
        "COGS, P&L, inventory use cases",
        "Training session + 2 revisions"
      ],
      cta: "Setup Advanced Excel System",
      msg: "Hi Suraj, I want to discuss the Excel Advanced Dashboard setup for my business."
    }
  ];

  const googlePlans = [
    {
      badge: "Form & Sheets Sync",
      name: "Google Sheets Basic Dashboard",
      description: "Straightforward live dashboard for small teams using Google ecosystem.",
      price: "₹3,000",
      period: "one-time",
      color: "emerald",
      features: [
        "Google Forms → Sheets data pipeline",
        "Live charts that auto-update",
        "Date & category filters",
        "Shared access for team members",
        "Email summary alert (1 trigger)",
        "Mobile-friendly view"
      ],
      cta: "Setup Live Sheets Dashboard",
      msg: "Hi Suraj, I am interested in the Basic Google Sheets Live Dashboard starting at ₹3,000."
    },
    {
      badge: "Apps Script Automation",
      name: "Google Sheets + Apps Script Advanced",
      description: "Fully automated, multi-source live dashboard with custom logic and alerts.",
      price: "₹8,000+",
      period: "quote based",
      color: "emerald",
      popular: true,
      features: [
        "Apps Script custom backend logic",
        "Multi-sheet / multi-branch data merge",
        "Scheduled auto-refresh & reporting",
        "WhatsApp / Email alert triggers",
        "Role-based views (owner vs staff)",
        "Custom KPI cards & live summary",
        "Embedded web app interface option",
        "Training + documentation + 3 revisions"
      ],
      cta: "Build Custom Automation Suite",
      msg: "Hi Suraj, I want the Advanced Google Sheets + Apps Script Custom System. Let's discuss."
    }
  ];

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
                Suraj Automation — www.surajdx.com
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Apne Business ko <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400">System</span> mein Convert karo
              </h1>
              
              <p className="text-xl text-slate-300 font-medium">
                Practical. Affordable. Made for Indian SMBs.
              </p>
              
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
                Excel dashboards se lekar Google Sheets automation tak — hum aapke liye custom systems banate hain jo actually kaam karte hain. <span className="text-white font-semibold">No expensive ERPs. No IT team needed.</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%2520to%2520convert%2520my%2520business%2520into%2520an%2520automated%2520system."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-indigo-600/30 hover:-translate-y-0.5 transition-all text-base"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  Free System Audit Book Karo
                </a>
                <a 
                  href="#core-services"
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white rounded-xl font-bold border border-white/10 flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all text-base"
                >
                  Explore Services
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
                  <span className="text-xs text-slate-500 font-mono">system_flow.sh</span>
                </div>
                <div className="space-y-4 font-mono text-xs text-indigo-300">
                  <p><span className="text-emerald-400"># Check business status</span></p>
                  <p className="text-slate-400">$ check_data_pipelines --smb</p>
                  <div className="pl-4 text-slate-300 space-y-1 border-l border-slate-700">
                    <p className="text-yellow-400">● Core Data: Scattered on WhatsApp/Paper</p>
                    <p className="text-indigo-400">💡 Solution Suggested: Suraj Automation</p>
                    <p className="text-emerald-400">✓ Excel + Sheets Auto Sync Activated</p>
                  </div>
                  <p className="text-slate-400">$ run automation_agent</p>
                  <p className="text-white animate-pulse">⚙ Processing 100% of manual entries automated...</p>
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
            <h2 className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
               What We Offer
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
              Our Core Services
            </h3>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
              Scattered paper records, manual entries, and fragmented WhatsApp tools ko efficient dashboards mein transform karein.
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
                      <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                <div className="relative z-10 pt-8 border-t border-slate-100 dark:border-slate-800/80 mt-6 flex justify-between items-center">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Custom delivery & support included</span>
                  <a
                    href={`https://wa.me/918851666208?text=Hi%20Suraj,%20I'm%20interested%2520in%2520your%2520${encodeURIComponent(service.subtitle)}%2520service.`}
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

      {/* Interactive Dashboards Section */}
      <section className="py-24 bg-indigo-50/50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
              Dashboard Services
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              Interactive Dashboard Plans
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Apne convenience ke anusar pick karein: Ek offline dynamic spreadsheet ya fir ek pure automatic live Google platform setup.
            </p>

            {/* Toggle Switch */}
            <div className="inline-flex bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1.5 rounded-2xl shadow-sm mt-8">
              <button
                onClick={() => setDashboardType('excel')}
                className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 transition-all ${
                  dashboardType === 'excel'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <FileSpreadsheet className="w-4 h-4" />
                Offline but Live — Excel
              </button>
              <button
                onClick={() => setDashboardType('sheets')}
                className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 transition-all ${
                  dashboardType === 'sheets'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" />
                Online & Live — Google Sheets
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Header Description of Selected Type */}
            <AnimatePresence mode="wait">
              {dashboardType === 'excel' ? (
                <motion.div
                  key="excel-desc"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center mb-10 shadow-sm"
                >
                  <p className="text-slate-700 dark:text-slate-300 text-base font-semibold max-w-3xl mx-auto leading-relaxed">
                    🌟 <strong className="text-indigo-600 dark:text-indigo-400">Internet ki zaroorat nahi.</strong> Excel mein powerful, real-time updating dashboards — jo aapki local files se seedha connect hote hain. Perfect for businesses with limited connectivity or sensitive internal data.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="sheets-desc"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center mb-10 shadow-sm"
                >
                  <p className="text-slate-700 dark:text-slate-300 text-base font-semibold max-w-3xl mx-auto leading-relaxed">
                    ☁ <strong className="text-emerald-600 dark:text-emerald-400">Real-time. Cloud-based. Anywhere access.</strong> Google Sheets aur Apps Script ki power se dashboards jo automatically update hote hain — multiple users, multiple locations, ek hi view.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Plan Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <AnimatePresence mode="wait">
                {(dashboardType === 'excel' ? excelPlans : googlePlans).map((plan, idx) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className={`relative bg-white dark:bg-slate-900 rounded-3xl p-8 border ${
                      plan.popular 
                        ? 'border-indigo-500 shadow-xl dark:shadow-none' 
                        : 'border-slate-200 dark:border-slate-800 shadow-sm'
                    } flex flex-col justify-between`}
                  >
                    
                    {plan.popular && (
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                        💥 Highly Recommended
                      </span>
                    )}

                    <div className="space-y-6">
                      
                      {/* Badge and Name */}
                      <div>
                        <span className={`inline-block px-3 py-1 text-[11px] font-mono font-bold tracking-wider rounded-lg uppercase ${
                          dashboardType === 'excel' 
                            ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' 
                            : 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        }`}>
                          {plan.badge}
                        </span>
                        
                        <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-3">
                          {plan.name}
                        </h4>
                        
                        <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                          {plan.description}
                        </p>
                      </div>

                      {/* Pricing Tier */}
                      <div className="flex items-baseline gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                        <span className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-slate-500 text-xs font-medium uppercase tracking-wide">
                          / {plan.period}
                        </span>
                      </div>

                      {/* Feature Checklist */}
                      <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Includes Features:
                        </p>
                        <ul className="space-y-3.5">
                          {plan.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                              <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Action Button */}
                    <div className="pt-8 mt-8 border-t border-slate-100 dark:border-slate-800">
                      <a
                        href={`https://wa.me/918851666208?text=${encodeURIComponent(plan.msg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-4 px-6 rounded-xl font-bold text-center block transition-all hover:-translate-y-0.5 ${
                          plan.popular 
                            ? dashboardType === 'excel'
                              ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20'
                              : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20'
                            : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white'
                        }`}
                      >
                        {plan.cta}
                      </a>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

      {/* Trust & Methodology Section */}
      <section className="py-24 relative overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
              Why Work With Us
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
              Designed For Real Growth
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Sarthi products are trusted by 50+ business entities across India due to simplified execution and flat upfront rates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Zero Server Cost Overhead</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                App humare secure templates use karke complete backend automation free Google Drive structures pe chalta hai, protecting your operational costs.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Same-Week Deployments</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Custom complex systems require months, whereas basic worksheets or triggers are configured ready-to-test and launched in less than 7 days.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">100% Onboarding Training</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Har system setup ke saath manual setup docs, video clips, and 1-on-1 team screenshare onboarding session default package ka hissa hain.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="py-12 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-900 to-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to automate your workflows?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
              Ek WhatsApp ping kariye, simple requirements discuss kariye, static excel registers update kariye, and actual automatic solution payein starting ₹2,000.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20have%20reviewed%20your%20services%20and%20want%2520to%2520discuss%2520a%2520project."
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
