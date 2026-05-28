import { motion } from 'motion/react';
import { Bot, AlertTriangle, CheckCircle2, TrendingUp, Receipt, Database, PieChart, ShieldCheck, ArrowRight, MessageSquare, Store, Calculator } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import RazorpayCheckout from '../../components/RazorpayCheckout';

export default function CogsDashboard() {
  useSEO(
    'Custom COGS Dashboard | Suraj Automation',
    'Automated COGS Reporting & AI Profit Dashboard - Stop guessing your profit margins with our Google Workspace app.',
    'cogs dashboard, profit tracking, cost of goods sold, branch margin tracker'
  );

  const problems = [
    "COGS is impossible to calculate until the month ends",
    "Staff sending blurry notebook photos and broken Excel files via WhatsApp",
    "Unrecorded site-to-site raw material transfers eating your margins",
    "Manual consolidation of data taking days and causing severe human errors",
    "Heavy ERP systems fail because ground-level staff bypass them",
    "Hidden material costs causing flawed pricing strategies"
  ];

  const features = [
    {
      title: "Zero Learning Curve Backend",
      icon: <Database className="w-6 h-6" />,
      items: [
        "Staff enters data into familiar Google Sheets tabs",
        "No complex new interface for the ground team to learn",
        "System automatically pulls Opening Stock & Vendor Purchases",
        "Calculates Site Transfers & factors in Closing Stock"
      ]
    },
    {
      title: "Deep Drill-Downs by Branch",
      icon: <PieChart className="w-6 h-6" />,
      items: [
        "Interactive drill-down drawer for instant transparency",
        "View every single vendor invoice attached to costs",
        "Review internal transfers without digging through folders",
        "Filter by specific branch, location, or product category"
      ]
    },
    {
      title: "Multi-Period AI Comparisons",
      icon: <Bot className="w-6 h-6" />,
      items: [
        "Dedicated comparison engine (e.g., March vs. April)",
        "Direct integration with Google's Gemini AI",
        "AI generates 5 to 7 actionable insights in plain English",
        "Understand exactly WHY costs shifted instantly"
      ]
    },
    {
      title: "Strict Role-Based Security",
      icon: <ShieldCheck className="w-6 h-6" />,
      items: [
        "Simple but powerful user management system",
        "Branch managers see only their assigned location",
        "Business owners get the complete, consolidated picture",
        "Protect sensitive financial data seamlessly"
      ]
    }
  ];

  const targetAudience = [
    "Retail chains managing inventory across multiple storefronts",
    "FMCG distributors tracking goods from central warehouses to hubs",
    "Service businesses tracking material costs across different client sites",
    "Any SMB owner tired of waiting until the 10th for last month's profit"
  ];

  const benefits = [
    "Adapts to how your team already works (Google Sheets)",
    "Real-time visibility without Excel consolidation nightmares",
    "Get your days back and fix profit leaks instantly",
    "Zero bloatware—built exactly for your required business logic",
    "No heavy monthly SaaS subscriptions",
    "Take control of your margins with data-driven AI insights"
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-[#0A0A0A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-900/30 via-[#0A0A0A] to-[#0A0A0A]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-600/10 to-transparent blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-amber-500/10 text-amber-400 text-sm font-bold tracking-wide mb-6 border border-amber-500/20 backdrop-blur-sm">
                <PieChart className="w-4 h-4" />
                Custom Web App Solution
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-white">
                Stop Guessing Your <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  Profit Margins.
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed font-body">
                Most business owners know their top-line revenue by heart. But ask them to calculate exact Cost of Goods Sold (COGS) across 5 branches? Silence. It's time to automate your multi-branch cost tracking.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-white/5 rounded-lg text-sm font-medium text-slate-300 border border-white/10">Google Sheets Built-in</span>
                <span className="px-4 py-2 bg-white/5 rounded-lg text-sm font-medium text-slate-300 border border-white/10">AI Insights</span>
                <span className="px-4 py-2 bg-white/5 rounded-lg text-sm font-medium text-slate-300 border border-white/10">Multi-Branch Sync</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20automate%20my%20COGS%20Reporting." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl font-bold text-lg transition-all shadow-[0_8px_30px_rgba(245,158,11,0.2)] items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  Let's Build Your System
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-orange-500 rounded-[2rem] blur-2xl opacity-20"></div>
              <div className="bg-slate-900 border border-white/10 p-8 rounded-[2rem] relative shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg text-white">Daily Gross Margin</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: "Branch A (Central)", margin: "32%", stat: "₹1,45,000", alert: false },
                    { label: "Branch B (Noida)", margin: "18%", stat: "₹42,000", alert: true },
                    { label: "Branch C (Gurugram)", margin: "28%", stat: "₹89,500", alert: false }
                  ].map((data, i) => (
                    <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-slate-200 flex items-center gap-2">
                          {data.label}
                          {data.alert && <AlertTriangle className="w-4 h-4 text-amber-500" />}
                        </p>
                        <p className="text-sm text-slate-400">COGS Verified</p>
                      </div>
                      <div className="text-right">
                        <span className={`text-lg font-bold ${data.alert ? 'text-amber-400' : 'text-emerald-400'}`}>
                          {data.margin}
                        </span>
                        <p className="text-xs text-slate-500">{data.stat} Profit</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <p className="text-sm text-amber-200">
                    <strong className="text-amber-400">AI Insight:</strong> Branch B margin dropped 14% due to undocumented material transfers from Central.
                  </p>
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
              <div className="inline-flex items-center gap-2 text-red-600 font-bold mb-4 uppercase tracking-wider text-sm">
                <AlertTriangle className="w-5 h-5" />
                The Month-End Excel Nightmare
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">
                You cannot fix a profit leak if you do not know where it is happening.
              </h2>
              <p className="text-lg text-slate-600 mb-8 font-body leading-relaxed">
                It is the 3rd of the month. Your finance person is chasing branch managers on WhatsApp for closing stock numbers. One sends a blurry photo of a notebook. Another sends a messy Excel file with broken formulas. Meanwhile, site-to-site material transfers aren't recorded properly.
              </p>
              
              <div className="space-y-4 mb-8">
                {problems.map((prob, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
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
              className="bg-white rounded-[2rem] p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">Why Heavy Software Fails Indian SMBs</h3>
              <p className="text-lg text-slate-600 font-body leading-relaxed mb-8">
                The traditional advice is to buy a massive, expensive ERP system. But if a system requires three days of training and a 50-page manual just to enter closing stock, your ground-level team will simply bypass it and go back to WhatsApp.
              </p>
              
              <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100">
                <h4 className="text-lg font-extrabold text-amber-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-600" />
                  The Custom Web App Solution
                </h4>
                <p className="text-amber-800 font-medium mb-4 leading-relaxed">
                  Business automation should adapt to your team. We build tools on top of platforms they already know—Google Sheets. The team updates basic tabs, and the custom web app parses complex logic to fetch your EXACT Gross Margins automatically.
                </p>
                <ul className="space-y-3 text-amber-800 font-semibold text-sm">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Zero training required natively</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Flawless data consolidation</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Instant insights generation</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-700 text-sm font-bold tracking-wide mb-6">
              Transforming Raw Data into Decisions
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Core Features That Drive Profitability</h2>
            <p className="text-xl text-slate-600 font-body">
              How our automated dashboard tracks, analyzes, and guards your margins securely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#F8F9FA] rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200 hover:border-amber-300 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors"></div>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 text-amber-600 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-3 text-slate-600 font-body">
                      <span className="text-amber-500 mt-1 font-bold">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience & Benefits */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-extrabold mb-8 flex items-center gap-4 tracking-tight">
                <Store className="w-8 h-8 text-amber-500" />
                Who Is This Built For?
              </h2>
              <div className="grid gap-4 mb-8">
                {targetAudience.map((audience, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 font-medium text-slate-200">
                    {audience}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-extrabold mb-8 flex items-center gap-4 tracking-tight">
                <ShieldCheck className="w-8 h-8 text-amber-500" />
                Why Upgrade Now?
              </h2>
              <div className="space-y-4 mb-8 text-slate-300">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                    <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
          <RazorpayCheckout productId="cogs-dashboard" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-10 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-amber-500/10 rounded-full blur-[80px]"></div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight relative z-10">Take Control of Your Margins Today</h2>
              <p className="text-xl text-slate-600 mb-10 relative z-10 font-body max-w-2xl mx-auto">
                You do not need a bloated, expensive software suite to get enterprise-level insights. You just need the right logic applied to the tools you already have.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20build%20a%20Custom%20COGS%20Dashboard." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-2xl font-bold text-lg transition-all shadow-[0_8px_30px_rgba(245,158,11,0.2)] hover:shadow-[0_8px_40px_rgba(245,158,11,0.3)] flex items-center justify-center gap-3 group hover:-translate-y-1"
                >
                  Let's Build It
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <p className="mt-8 text-slate-500 text-sm font-semibold max-w-md mx-auto">
                "Main har din Indian SMBs ke liye simple automation tools banata hoon — kyunki complex software sabke liye nahi hota." — Suraj Singh
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
