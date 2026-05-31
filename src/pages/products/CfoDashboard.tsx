import { motion } from 'motion/react';
import { 
  AlertTriangle, CheckCircle2, TrendingUp, HandCoins, Building2, UserCircle, Briefcase, Calculator, Building, Landmark, LineChart, PieChart, ShieldCheck, 
  ArrowRight, Store, DollarSign, Key, Users
} from 'lucide-react';
import { useUser } from '../../contexts/UserContext';
import { useSEO } from '../../hooks/useSEO';
import RazorpayCheckout from '../../components/RazorpayCheckout';

export default function CfoDashboard() {
  const { hasPurchased } = useUser();
  const isPurchased = hasPurchased('cfo-dashboard');

  useSEO(
    'CFO Dashboard for Indian SMBs | Complete Financial Control',
    'See your cash position instantly and forecast cash flow with the CFO Dashboard. Transform spreadsheets into a single financial control center.',
    'cfo dashboard, cash flow, financial health, business dashboard, cash reserve, indian smb finance'
  );

  const businessTypes = [
    { title: "Retail Store", icon: <Store className="w-5 h-5" /> },
    { title: "Trading Business", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "Distribution Company", icon: <Building className="w-5 h-5" /> },
    { title: "Manufacturing Unit", icon: <Building2 className="w-5 h-5" /> },
    { title: "Service Agency", icon: <HandCoins className="w-5 h-5" /> },
    { title: "Consultancy Firm", icon: <Briefcase className="w-5 h-5" /> },
    { title: "CA Practice", icon: <Calculator className="w-5 h-5" /> },
    { title: "Wholesale Business", icon: <Store className="w-5 h-5" /> },
    { title: "Logistics Company", icon: <Briefcase className="w-5 h-5" /> },
    { title: "Small Enterprise", icon: <Landmark className="w-5 h-5" /> },
  ];

  const problemItems = [
    "How much cash do we actually have?",
    "Which customers haven't paid yet?",
    "Can we afford next month's expenses?"
  ];

  const visualFeatures = [
    {
      title: "See Your Cash Position Instantly",
      description: "Cash is the lifeline of every business. The dashboard automatically consolidates balances across your accounts.",
      icon: <DollarSign className="w-8 h-8" />,
      features: [
        { name: "Available Cash", desc: "Know exactly how much money is available today." },
        { name: "Cash Reserve Monitoring", desc: "Track whether you're maintaining safe operating reserves." },
        { name: "Cash Runway Visibility", desc: "See how long your current cash position can sustain operations." }
      ]
    },
    {
      title: "Stay Ahead With Cash Flow Forecasting",
      description: "Many businesses don't fail because they are unprofitable. They fail because cash runs out unexpectedly.",
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        { name: "Customer receivables", desc: "Future projected inflows." },
        { name: "Vendor payables", desc: "Forthcoming expenses and bills." },
        { name: "Historical transactions & Obligations", desc: "See projected balances for 30, 60, and 90 Days." }
      ]
    },
    {
      title: "Track Every Outstanding Customer Payment",
      description: "Customers paying late can silently damage your business. Quickly identify critical overdue accounts.",
      icon: <UserCircle className="w-8 h-8" />,
      features: [
        { name: "Current invoices", desc: "Recently generated statements." },
        { name: "Overdue Tiers", desc: "1-30, 31-60, 61-90 day overdue invoices." },
        { name: "Collection Priority", desc: "Identify which collections need immediate follow-up." }
      ]
    },
    {
      title: "Manage Vendor Payments Without Chaos",
      description: "Never miss important supplier payments. Know exactly what needs attention before due dates arrive.",
      icon: <Store className="w-8 h-8" />,
      features: [
        { name: "Monitor upcoming bills", desc: "Track overdue liabilities." },
        { name: "Prioritize vendor payments", desc: "Allocate funds accurately." },
        { name: "Build supplier relationships", desc: "Never be late on commitments." }
      ]
    }
  ];

  const financialIndicators = [
    { title: "Days Sales Outstanding", val: "DSO", desc: "How quickly customers pay you.", icon: <TrendingUp className="w-6 h-6" /> },
    { title: "Cash Conversion Cycle", val: "CCC", desc: "How long cash remains locked inside operations.", icon: <Key className="w-6 h-6" /> },
    { title: "Net Profit Margin", val: "%", desc: "Understand actual profitability.", icon: <PieChart className="w-6 h-6" /> },
    { title: "Debt-to-Equity Ratio", val: "D/E", desc: "Monitor financial stability and leverage.", icon: <LineChart className="w-6 h-6" /> },
    { title: "Working Capital Health", val: "WCH", desc: "Know whether your business has enough liquidity.", icon: <Landmark className="w-6 h-6" /> }
  ];

  return (
    <main className="pt-24 pb-20 bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-[#001524] text-white overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
             >
                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-300 text-sm font-bold tracking-wide mb-6 border border-blue-500/20 backdrop-blur-sm">
                  <PieChart className="w-4 h-4" />
                  CFO Dashboard for Indian SMBs
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight text-white drop-shadow-md">
                  Stop Running Your <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    Business Blind.
                  </span>
                </h1>
                
                <div className="text-xl md:text-2xl text-slate-300 mb-10 font-bold max-w-2xl mx-auto space-y-2">
                   <p>You know sales are happening.</p>
                   <p>You know money is coming in.</p>
                   <p>You know bills need to be paid.</p>
                </div>
                
                <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
                   {problemItems.map((q, i) => (
                      <div key={i} className="bg-slate-900 border border-red-500/20 p-6 rounded-2xl shadow-xl hover:border-red-500/50 transition-colors flex flex-col justify-center">
                         <h3 className="font-bold text-red-300 italic text-lg leading-tight">"{q}"</h3>
                      </div>
                   ))}
                </div>
                
                <p className="text-slate-400 font-medium max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
                  Most business owners start opening multiple Excel sheets, WhatsApp chats, bank apps, and handwritten records.<br/>
                  <span className="text-blue-300 font-bold">That's exactly the problem this dashboard solves.</span>
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  {isPurchased ? (
                    <a 
                      href="#checkout-cfo-dashboard" 
                      className="inline-flex px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-emerald-500/20 items-center justify-center gap-2 group hover:-translate-y-1"
                    >
                      View Setup Handbook
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <a 
                      href="#checkout-cfo-dashboard" 
                      className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_8px_30px_rgba(37,99,235,0.2)] items-center gap-2 group hover:-translate-y-1"
                    >
                      Get Dashboard Access
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                  <a 
                    href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20demo%20for%20the%20CFO%20Dashboard." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex px-8 py-4 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-xl font-bold text-lg transition-all items-center justify-center gap-2"
                  >
                    Book Free Demo
                  </a>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Your Entire Business Financial Health. One Dashboard. */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Your Entire Business Financial Health. <br/>One Dashboard.</h2>
              <p className="text-xl text-slate-600 font-medium mb-10 leading-relaxed">
                Connect your Google Sheet once and instantly see cash available, outstanding payments, vendor dues, cash flow forecasts, profitability trends, working capital health, financial risks, and aging reports.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-slate-800 font-bold mb-10">
                 <span className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                   <ShieldCheck className="w-5 h-5 text-emerald-500" /> No complicated software
                 </span>
                 <span className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                   <ShieldCheck className="w-5 h-5 text-emerald-500" /> No expensive ERP
                 </span>
                 <span className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                   <ShieldCheck className="w-5 h-5 text-emerald-500" /> No finance team required
                 </span>
              </div>
           </div>

           <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {visualFeatures.map((feat, idx) => (
                 <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }} 
                    className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:border-blue-200 transition-all"
                 >
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                         {feat.icon}
                       </div>
                       <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">{feat.title}</h3>
                    </div>
                    <p className="text-slate-600 font-medium mb-6">{feat.description}</p>
                    <div className="space-y-4">
                       {feat.features.map((f, i) => (
                          <div key={i} className="flex gap-4">
                             <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                             <div>
                               <h4 className="font-bold text-slate-900">{f.name}</h4>
                               <p className="text-sm text-slate-500">{f.desc}</p>
                             </div>
                          </div>
                       ))}
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>
      
      {/* Visual Alerts Section */}
      <section className="py-24 bg-red-50 border-y border-red-100 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-32 opacity-10 blur-3xl rounded-full bg-red-400"></div>
         <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Intelligent Financial Alerts</h2>
            <p className="text-xl text-slate-700 font-medium mb-8">
              Instead of manually checking dozens of reports, the dashboard continuously highlights:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
               {['Cash Shortages', 'Collection Delays', 'High Outstanding Receivables', 'Working Capital Risks', 'Overdue Supplier Payments', 'Financial Health Warnings'].map((alert, idx) => (
                  <span key={idx} className="bg-white border border-red-200 text-red-700 font-bold px-5 py-3 rounded-xl shadow-sm">
                    {alert}
                  </span>
               ))}
            </div>
            <p className="mt-8 text-rose-900 font-bold bg-rose-200/50 inline-block px-6 py-2 rounded-full">
              Focus only on what needs attention.
            </p>
         </div>
      </section>

      {/* CFO Level Insights */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">CFO-Level Insights Without Hiring a CFO</h2>
             <p className="text-xl text-slate-400 max-w-2xl mx-auto">
               The dashboard automatically calculates important financial indicators so you always know where you stand.
             </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
             {financialIndicators.map((ind, idx) => (
                <div key={idx} className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-slate-800 transition-colors group">
                   <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                     {ind.icon}
                   </div>
                   <h3 className="font-bold text-slate-200 text-lg mb-1">{ind.title}</h3>
                   <span className="text-blue-400 text-sm font-bold mb-3 tracking-widest">{ind.val}</span>
                   <p className="text-slate-400 text-sm leading-relaxed">{ind.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Built For Indian Business Owners */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Built For Indian Business Owners</h2>
            <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
              Whether you run a trading business, a service agency, or a retail store, this dashboard helps you understand exactly where your business stands financially.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
               {businessTypes.map((type, idx) => (
                 <div key={idx} className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl text-slate-700 shadow-sm font-bold">
                   <span className="text-indigo-600">{type.icon}</span>
                   {type.title}
                 </div>
               ))}
            </div>
        </div>
      </section>

      {/* Why business owners love it */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
         <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Why Business Owners Love It</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                   <h3 className="text-xl font-bold text-slate-900 mb-3">Save Hours Every Week</h3>
                   <p className="text-slate-600">Stop updating multiple spreadsheets manually.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                   <h3 className="text-xl font-bold text-slate-900 mb-3">Better Decisions</h3>
                   <p className="text-slate-600">Make decisions using real numbers instead of assumptions.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                   <h3 className="text-xl font-bold text-slate-900 mb-3">Improve Cash Flow</h3>
                   <p className="text-slate-600">Identify collection bottlenecks faster and collect funds efficiently.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                   <h3 className="text-xl font-bold text-slate-900 mb-3">Reduce Financial Stress</h3>
                   <p className="text-slate-600">Know exactly where the business stands at any moment without fear.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 lg:col-span-2">
                   <h3 className="text-xl font-bold text-slate-900 mb-3">Scale With Confidence</h3>
                   <p className="text-slate-600">Build resilient systems instead of depending on memory and manual tracking routines to keep your business running.</p>
                </div>
            </div>
         </div>
      </section>

      {/* Checkout / Pricing */}
      <section className="bg-slate-900 py-24 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900 to-slate-900"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="mb-10">
            <h2 className="text-4xl font-extrabold mb-6">Works With Google Sheets</h2>
            <p className="text-lg text-slate-300 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              No complicated setup. Simply connect your Google Sheet and start tracking your business. The system can automatically generate a ready-to-use financial template so you can get started immediately.
              <br/><br/>
              <span className="text-emerald-400 font-bold bg-emerald-900/30 px-6 py-2 rounded-full mt-4 inline-block">
                Your data remains in your Google account. You stay in control.
              </span>
            </p>
          </div>
          
          <div className="bg-white text-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative mt-8">
             <div className="mb-8 p-4 bg-blue-50 rounded-2xl text-blue-900 font-bold border border-blue-100 flex justify-between items-center px-8 shadow-sm">
               <span className="text-xl">One Lifetime Payment</span>
               <span className="text-4xl">₹1,499</span>
             </div>
             <RazorpayCheckout productId="cfo-dashboard" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to See Your Business Like a CFO?</h2>
            <p className="text-xl text-blue-100 mb-10 font-bold leading-relaxed">
              Get your CFO Dashboard today and start managing your business with complete financial visibility. Know your numbers, protect your cash flow, and grow with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="#checkout-cfo-dashboard" 
                className="w-full sm:w-auto px-8 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20buy%20the%20CFO%20Dashboard." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-5 bg-white text-blue-700 hover:bg-blue-50 rounded-2xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-3"
              >
                Talk to Suraj Automation
                <Store className="w-5 h-5" />
              </a>
            </div>
        </div>
      </section>
    </main>
  );
}
