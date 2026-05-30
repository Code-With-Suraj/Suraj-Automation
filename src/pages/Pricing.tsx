import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Info, ArrowRight, ShieldCheck, Zap, Plus, Layers, MonitorSmartphone } from 'lucide-react';

export default function Pricing() {
  const [activeTab, setActiveTab ] = useState<'web' | 'data'>('web');

  const plans = [
    {
      badge: "Starter",
      name: "Basic Website",
      bestFor: "Best for local shops & small businesses starting online",
      price: "₹3,999",
      period: "one-time payment",
      color: "emerald",
      popular: false,
      features: [
        "1-Page Landing Website",
        "Mobile Responsive Design",
        "Business Info (About, Services, Contact)",
        "WhatsApp Button Integration",
        "Contact Form"
      ],
      cta: "Get Started →",
      link: "https://wa.me/918851666208?text=Hi%20Suraj,%20I'm%20interested%20in%20the%20Starter%20Basic%20Website%20package."
    },
    {
      badge: "Standard",
      name: "Standard Website",
      bestFor: "Best for serious businesses that want to generate leads",
      price: "₹9,999",
      period: "one-time payment",
      color: "blue",
      popular: true,
      features: [
        "4–5 Pages Professional Website",
        "Lead Capture System",
        "WhatsApp + Call Integration",
        "Basic SEO Setup",
        "Admin Panel (basic content edit)"
      ],
      cta: "Get Started →",
      link: "https://wa.me/918851666208?text=Hi%20Suraj,%20I'm%20interested%20in%20the%20Standard%20Website%20package."
    },
    {
      badge: "Business System",
      name: "System Website",
      bestFor: "Best for businesses that need automation + tracking",
      price: "₹19,999",
      period: "+ custom features",
      color: "indigo",
      popular: false,
      features: [
        "Everything in Standard",
        "Payment Tracking Module",
        "Customer Management (CRM)",
        "Inventory Tracking",
        "Google Sheets Integration",
        "Automation Workflows"
      ],
      cta: "Let's Discuss →",
      link: "https://wa.me/918851666208?text=Hi%20Suraj,%20I'm%20interested%20in%20the%20Business%20System%20package."
    },
    {
      badge: "Enterprise",
      name: "Advanced Web App",
      bestFor: "Best for full business automation with custom software",
      price: "₹29,999",
      period: "+ scope-based",
      color: "rose",
      popular: false,
      features: [
        "Custom Web Application",
        "Role-Based Access (Admin/Staff)",
        "Full Dashboard & Reports",
        "Email Alerts & Automation",
        "Data Management System",
        "Scalable Architecture"
      ],
      cta: "Let's Discuss →",
      link: "https://wa.me/918851666208?text=Hi%20Suraj,%20I'm%20interested%20in%20the%20Enterprise%20Advanced%20Web%20App%20package."
    }
  ];

  const dashboardPlans = [
    {
      badge: "Excel Analyst",
      name: "Basic Offline Dashboard",
      bestFor: "Best for local ledgers, structured financial models, and static spreadsheets",
      price: "₹2,000",
      period: "one-time setup fee",
      color: "emerald",
      popular: false,
      features: [
        "Fully Offline Excel Dashboard Layout",
        "Pivot Tables & Dynamic Power Queries",
        "Clean Data Modeling & Custom Formulas",
        "User-Friendly Pivot Chart Drill-Downs",
        "Up to 3 Custom Visual Analytics Tabs",
        "Excel Macro & VBA Assistance (Optional)"
      ],
      cta: "Order Offline Setup →",
      link: "https://wa.me/918851666208?text=Hi%20Suraj,%20I'm%20interested%20in%20the%20Basic%20Offline%20Excel%20Dashboard%20starting%20at%202000."
    },
    {
      badge: "Apps Script Pro",
      name: "Basic Online Live Dashboard",
      bestFor: "Best for teams needing real-time tracking with cloud Apps Script features",
      price: "₹3,000",
      period: "one-time setup fee",
      color: "blue",
      popular: true,
      features: [
        "Live Google Sheets & Apps Script System",
        "Cloud Data Stored Directly in Google Drive",
        "Automated Web Forms & Data Entry Tables",
        "Real-Time Multi-User Collaboration",
        "Auto-Trigger Email Alerts & Notifications",
        "Full Phone & Responsive Screen Layouts",
        "Interactive PDF Generation Scripts"
      ],
      cta: "Order Online Setup →",
      link: "https://wa.me/918851666208?text=Hi%20Suraj,%20I'm%20interested%20in%20the%20Basic%2520Online%20Google%20Sheets%20Dashboard%20starting%20at%203000."
    },
    {
      badge: "Enterprise Analyst",
      name: "Advanced Automation System",
      bestFor: "Best for integrating APIs, payment gateway syncs, and custom CRM sheets",
      price: "₹8,000",
      period: "starting range",
      color: "indigo",
      popular: false,
      features: [
        "Automatic Syncing of Third-Party APIs",
        "Custom Standalone Google Web App Panels",
        "Payment Webhooks & Ingestion Flows",
        "Advanced Multi-Database Backends",
        "Automatic PDF Invoicing & Reports",
        "Comprehensive Support & Performance Tuning"
      ],
      cta: "Let's Discuss Scope →",
      link: "https://wa.me/918851666208?text=Hi%20Suraj,%20I'm%20interested%20in%20the%20Advanced%20Automation%20Dashboard%20service."
    }
  ];

  const addons = [
    { name: "Extra Page / Tab Module", price: "₹1,000" },
    { name: "Custom API Sync", price: "₹3,000+" },
    { name: "Apps Script Automation Setup", price: "₹3,000+" },
    { name: "Monthly Maintenance Support", price: "₹999/mo" },
    { name: "Advanced Custom Feature Integration", price: "₹2K–10K" }
  ];

  const activePlans = activeTab === 'web' ? plans : dashboardPlans;

  return (
    <main className="pt-24 pb-20 dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 bg-slate-950 text-white overflow-hidden transition-colors">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-indigo-500/20 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
              Simple, Clear <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-8">
              No hidden costs. No surprises. Choose the scope that fits your needs.
            </p>
            
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 text-left">
              <Info className="w-6 h-6 text-indigo-300 shrink-0" />
              <p className="text-sm md:text-base text-slate-200">
                <strong className="text-white">Note:</strong> Third-party server hosting or API credentials separate from Sarthi Google Drive systems will apply as per actual project usage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Switcher */}
      <div className="flex justify-center -mt-8 relative z-20">
        <div className="bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex gap-2">
          <button
            onClick={() => setActiveTab('web')}
            className={`px-6 py-3 rounded-xl font-bold text-sm md:text-base flex items-center gap-2 transition-all ${
              activeTab === 'web'
                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <MonitorSmartphone className="w-5 h-5" />
            Websites & Apps
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={`px-6 py-3 rounded-xl font-bold text-sm md:text-base flex items-center gap-2 transition-all ${
              activeTab === 'data'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <Layers className="w-5 h-5" />
            Dashboards & Data Analysis
          </button>
        </div>
      </div>

      {/* Pricing Plans */}
      <section className="py-24 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 w-full h-1/3 bg-slate-50 dark:bg-slate-900/50 -z-10 transition-colors"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">
              {activeTab === 'web' ? 'Business System Pricing and Project Planning' : 'Custom Dashboard Design & Data Analysis Pricing'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 transition-colors">
              {activeTab === 'web' 
                ? 'Clear packages for modern websites, automation, and backend business applications'
                : 'Professional analytics dashboards using Excel or Google Sheets & Apps Script'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8">
            {activePlans.map((plan, idx) => {
              const colorMaps: any = {
                emerald: {
                  badgeBg: "bg-emerald-100 dark:bg-emerald-500/20",
                  badgeText: "text-emerald-700 dark:text-emerald-300",
                  iconColor: "text-emerald-500",
                  borderActive: "border-emerald-500",
                  btnClass: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/20"
                },
                blue: {
                  badgeBg: "bg-blue-100 dark:bg-blue-500/20",
                  badgeText: "text-blue-700 dark:text-blue-300",
                  iconColor: "text-blue-500",
                  borderActive: "border-blue-500",
                  btnClass: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                },
                indigo: {
                  badgeBg: "bg-indigo-100 dark:bg-indigo-500/20",
                  badgeText: "text-indigo-700 dark:text-indigo-300",
                  iconColor: "text-indigo-500",
                  borderActive: "border-indigo-500",
                  btnClass: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 dark:hover:bg-indigo-500/20"
                },
                rose: {
                  badgeBg: "bg-rose-100 dark:bg-rose-500/20",
                  badgeText: "text-rose-700 dark:text-rose-300",
                  iconColor: "text-rose-500",
                  borderActive: "border-rose-500",
                  btnClass: "bg-rose-50 text-rose-700 hover:bg-rose-100 dark:bg-rose-500/10 dark:text-rose-400 dark:hover:bg-rose-500/20"
                }
              };
              const c = colorMaps[plan.color];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-white dark:bg-slate-900 border-2 ${plan.popular ? `${c.borderActive} shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] dark:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] md:-mt-4 relative` : 'border-slate-200 dark:border-slate-800 shadow-sm'} rounded-[2rem] p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 group`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-md z-20 whitespace-nowrap">
                      💥 Highly Recommended
                    </div>
                  )}

                  <div className="mb-6">
                    <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-4 ${c.badgeBg} ${c.badgeText}`}>
                      {plan.badge}
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white mb-2 transition-colors">{plan.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors h-10">{plan.bestFor}</p>
                  </div>

                  <div className="mb-8">
                    <p className="text-4xl font-black text-slate-900 dark:text-white tracking-tight transition-colors">{plan.price}</p>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 transition-colors">{plan.period}</p>
                  </div>

                  <div className="flex-grow mb-8 border-t border-slate-100 dark:border-slate-800 pt-8 transition-colors">
                    <ul className="space-y-4">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex gap-3 text-sm">
                          <CheckCircle2 className={`w-5 h-5 ${c.iconColor} shrink-0`} />
                          <span className="text-slate-700 dark:text-slate-300 font-medium transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all duration-300 ${c.btnClass}`}
                  >
                    {plan.cta}
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-20 bg-indigo-50 dark:bg-slate-900/40 relative transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-12 lg:col-span-5 text-center lg:text-left mb-8 lg:mb-0">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <Plus className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 transition-colors">Add-Ons</h2>
              <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold mb-3">Power Up Your Package</p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md transition-colors mx-auto lg:mx-0">
                Add exactly what you need — nothing more. Customize your chosen setup with custom integrations.
              </p>
            </div>
            
            <div className="md:col-span-12 lg:col-span-7">
              <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[2rem] shadow-xl shadow-indigo-100/50 dark:shadow-none border border-slate-200 dark:border-slate-800 transition-colors">
                <div className="space-y-4">
                  {addons.map((addon, idx) => (
                    <div key={idx} className={`flex justify-between items-center p-4 rounded-xl ${idx !== addons.length - 1 ? 'border-b border-slate-100 dark:border-slate-800' : ''} hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors`}>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{addon.name}</span>
                      <span className="font-black text-indigo-600 dark:text-indigo-400">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 md:p-16 rounded-[2.5rem] shadow-2xl shadow-indigo-100/50 dark:shadow-none relative overflow-hidden transition-colors">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
            
            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-10 transition-colors">Have questions about custom dashboards or systems?</p>
            
            <a 
              href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%252520have%2520questions%2520about%2520your%2520websites%2520or%2520dashboard%2520packages." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xl transition-all shadow-xl shadow-indigo-200 dark:shadow-none items-center justify-center gap-3 mx-auto group hover:-translate-y-1"
            >
              Consult For Free
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
