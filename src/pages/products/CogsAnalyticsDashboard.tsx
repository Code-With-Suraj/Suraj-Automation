import { motion } from 'motion/react';
import { 
  Bot, AlertTriangle, CheckCircle2, TrendingUp, Receipt, Database, PieChart, ShieldCheck, 
  ArrowRight, MessageSquare, Store, Calculator, BarChart3, Layers, UserCheck, Smartphone, Factory, Home, Settings
} from 'lucide-react';
import { useUser } from '../../contexts/UserContext';
import { useSEO } from '../../hooks/useSEO';
import RazorpayCheckout from '../../components/RazorpayCheckout';

export default function CogsAnalyticsDashboard() {
  const { hasPurchased } = useUser();
  const isPurchased = hasPurchased('cogs-analytics-dashboard');

  useSEO(
    'COGS Analytics Dashboard | Complete Visibility',
    'Gain complete control over your food cost & inventory performance. Turn raw purchase, inventory & revenue data into actionable profit insights.',
    'cogs dashboard, profit tracking, cost of goods sold, restaurant inventory, cloud kitchen dashboard'
  );

  const monitorItems = [
    "Cost of Goods Sold (COGS)",
    "Revenue vs Cost Analysis",
    "Multi-Location Performance",
    "Vendor Purchase Contribution",
    "Inventory Consumption Tracking",
    "Stock Transfer Monitoring",
    "Category & Item-Level Analytics",
    "Comparative Period Analysis"
  ];

  const problemItems = [
    "Which category is consuming the highest cost",
    "Which vendor contributes most purchases",
    "Which location is underperforming",
    "How stock transfers affect profitability",
    "Which items are driving COGS growth",
    "Why margins fluctuate month after month"
  ];

  const features = [
    {
      title: "Revenue vs COGS Performance Tracking",
      icon: <TrendingUp className="w-6 h-6" />,
      items: [
        "Monitor revenue, purchases, transfers, stock movement and actual Cost of Goods Sold in real-time.",
        "Know exactly how much revenue is being consumed by operational costs."
      ]
    },
    {
      title: "Multi-Period Comparison Engine",
      icon: <BarChart3 className="w-6 h-6" />,
      items: [
        "Compare multiple date ranges side-by-side.",
        "Analyze: Week vs Week, Month vs Month, Quarter vs Quarter, Seasonal Performance",
        "Instantly identify trends and anomalies."
      ]
    },
    {
      title: "Category Wise Cost Analysis",
      icon: <Layers className="w-6 h-6" />,
      items: [
        "Understand which categories contribute the highest cost.",
        "Examples: Vegetables, Dairy, Meat, Beverages, Packaging",
        "Take corrective action before costs impact margins."
      ]
    },
    {
      title: "Item Wise Consumption Intelligence",
      icon: <Database className="w-6 h-6" />,
      items: [
        "Track every inventory item individually.",
        "View: Opening Stock, Purchases, Transfers, Closing Stock, Consumption Value, COGS Contribution",
        "Perfect for inventory-heavy businesses."
      ]
    },
    {
      title: "Vendor Performance Dashboard",
      icon: <Store className="w-6 h-6" />,
      items: [
        "Evaluate suppliers based on: Purchase Volume, Item Contribution, Supply Distribution, Cost Dependency",
        "Identify your most critical vendors instantly."
      ]
    },
    {
      title: "Multi Location Performance Matrix",
      icon: <PieChart className="w-6 h-6" />,
      items: [
        "Compare all sites and CPUs on a single screen.",
        "Measure: Revenue, Purchases, Transfers, Inventory Value, COGS, COGS %",
        "Perfect for franchises and multi-branch businesses."
      ]
    },
    {
      title: "Advanced Filtering System",
      icon: <Settings className="w-6 h-6" />,
      items: [
        "Filter reports by: Site, Category, Item, Vendor, Date Range",
        "Get highly specific insights in seconds."
      ]
    },
    {
      title: "Role Based Access Control & Reporting",
      icon: <UserCheck className="w-6 h-6" />,
      items: [
        "Secure data visibility by location.",
        "Allow managers to access only their assigned sites while administrators maintain complete control.",
        "Export professional Excel & PDF reports instantly (Executive, Audit, Inventory, Management)."
      ]
    }
  ];

  const targetAudience = [
    { title: "Restaurants", desc: "Monitor food cost and inventory performance." },
    { title: "Cloud Kitchens", desc: "Track ingredient consumption across brands." },
    { title: "Catering Businesses", desc: "Control event-based inventory and purchasing." },
    { title: "Bakery Chains", desc: "Manage raw material cost and profitability." },
    { title: "Food Manufacturers", desc: "Analyze production cost trends." },
    { title: "Franchise Networks", desc: "Compare branch performance from a single dashboard." },
    { title: "QSR Chains", desc: "Standardize reporting and cost monitoring." }
  ];

  const benefits = [
    "Reduce inventory wastage",
    "Improve purchasing decisions",
    "Identify cost leakages faster",
    "Increase profit margins",
    "Monitor multiple locations centrally",
    "Improve vendor negotiations",
    "Reduce manual reporting effort",
    "Enable data-driven management decisions"
  ];

  return (
    <main className="pt-24 pb-20 bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-[#0A0A0A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#0A0A0A] to-[#0A0A0A]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-600/10 to-transparent blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold tracking-wide mb-6 border border-indigo-500/20 backdrop-blur-sm">
                <BarChart3 className="w-4 h-4" />
                Actionable Profit Insights
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-white">
                Gain Complete Control Over Your <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
                  Food Cost & Inventory Performance
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed font-body">
                Turn Raw Purchase, Inventory & Revenue Data Into Actionable Profit Insights. Track COGS, inventory movement, vendor performance, stock consumption, site profitability, and revenue trends across all your locations from a single intelligent dashboard.
              </p>
              <p className="text-sm text-slate-400 mb-8 font-medium">
                Designed for restaurants, cloud kitchens, catering businesses, QSR chains, food manufacturers, and multi-location operations.
              </p>
              <div className="flex flex-wrap gap-4">
                {isPurchased ? (
                  <a 
                    href="#checkout-cogs-analytics-dashboard" 
                    className="inline-flex px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-emerald-500/20 items-center justify-center gap-2 group hover:-translate-y-1"
                  >
                    View Setup Handbook & Codes
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <a 
                    href="#checkout-cogs-analytics-dashboard" 
                    className="inline-flex px-8 py-4 bg-indigo-50 hover:bg-indigo-600 justify-center hover:text-white text-slate-950 rounded-xl font-bold text-lg transition-all shadow-[0_8px_30px_rgba(99,102,241,0.2)] items-center gap-2 group hover:-translate-y-1"
                  >
                    Get Dashboard Access
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20demo%20for%20the%20COGS%20Analytics%20Dashboard." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex px-8 py-4 bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 rounded-xl font-bold text-lg transition-all items-center justify-center gap-2"
                >
                  Book Free Demo
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-[2rem] blur-2xl opacity-20"></div>
              <div className="bg-slate-900 border border-white/10 p-8 rounded-[2rem] relative shadow-2xl backdrop-blur-xl">
                 <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">What You Can Monitor</h3>
                 <ul className="space-y-4">
                  {monitorItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-300 font-medium">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                 </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Businesses Need This Dashboard */}
      <section className="py-20 bg-white">
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
                The Missing Profits
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Most businesses know their sales. Very few know where profits disappear.
              </h2>
              <p className="text-lg text-slate-600 mb-8 font-body leading-relaxed">
                Without visibility, profits silently disappear. This dashboard transforms scattered spreadsheet data into a centralized decision-making system that helps management reduce waste, improve purchasing decisions, and increase profitability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-red-50 rounded-[2rem] p-10 border border-red-100/50"
            >
              <h3 className="text-2xl font-extrabold text-red-900 mb-6">Are you struggling to answer:</h3>
              <ul className="space-y-4">
                {problemItems.map((prob, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-red-100">
                    <span className="text-red-500 mt-1 font-bold">?</span>
                    <span className="text-slate-700 font-medium">{prob}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced COGS Calculation Engine */}
      <section className="py-16 bg-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
           <Calculator className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
           <h2 className="text-3xl font-extrabold mb-6">Accurate Cost Calculation Framework</h2>
           <p className="text-lg text-indigo-200 mb-8 max-w-2xl mx-auto">
             The dashboard automatically calculates exact true values across all locations:
           </p>
           <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl font-mono text-sm md:text-lg overflow-x-auto text-indigo-50 font-bold whitespace-nowrap shadow-xl">
             COGS = Opening Stock + Purchases + Inward Transfers − Outward Transfers − Closing Stock
           </div>
           <p className="text-indigo-300 mt-6 max-w-2xl mx-auto font-medium">
             This ensures accurate inventory consumption and cost measurement across all locations. Based on the application logic, COGS is derived using opening stock, purchases, transfers and closing stock values automatically.
           </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-100 text-indigo-800 text-sm font-bold tracking-wide mb-6">
              Powerful Features
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Built For Cost Control</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-slate-600 font-body text-sm leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-16">Simple 3-Step Process</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-0.5 bg-slate-200"></div>
            
            <div className="relative z-10 flex flex-col items-center">
               <div className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-indigo-600/30">1</div>
               <h3 className="text-xl font-bold mb-4">Connect Google Sheets</h3>
               <p className="text-slate-600 font-medium">Import Purchases, Inventory, Revenue, and Transfers.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
               <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-blue-600/30">2</div>
               <h3 className="text-xl font-bold mb-4">Dashboard Processes Data</h3>
               <p className="text-slate-600 font-medium">The system calculates Opening Stock, Closing Stock, Net Transfers, Inventory Consumption, Total COGS, and COGS Percentage automatically.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
               <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-emerald-600/30">3</div>
               <h3 className="text-xl font-bold mb-4">Make Faster Decisions</h3>
               <p className="text-slate-600 font-medium">Identify Cost Leakages, Inventory Issues, Poor Performing Locations, Vendor Dependency, and Margin Risks before they impact profitability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-extrabold mb-4">Perfect For Growing Businesses</h2>
             <p className="text-slate-400 max-w-2xl mx-auto">Scalable solutions across the F&B and manufacturing industry.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
             {targetAudience.map((ta, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                   <h3 className="font-bold text-indigo-300 text-lg mb-2">{ta.title}</h3>
                   <p className="text-slate-300 text-sm">{ta.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Pricing / Razorpay */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="mb-10">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">One Dashboard. Complete Cost Visibility.</h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-700 font-medium mb-10 max-w-2xl mx-auto">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Lifetime Ownership</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Google Sheets Powered</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> No Monthly Software Fees</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Cloud Based Access</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Mobile Friendly Interface</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Professional Support Available</span>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-indigo-100 max-w-3xl mx-auto">
             <div className="mb-8 p-4 bg-indigo-50 rounded-xl text-indigo-900 font-bold border border-indigo-100 flex justify-between items-center px-8">
               <span className="text-xl">Starting From</span>
               <span className="text-4xl">₹3,999</span>
             </div>
             <RazorpayCheckout productId="cogs-analytics-dashboard" />
             <p className="mt-4 text-sm text-slate-500 font-medium">Custom Enterprise Versions Available</p>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
         <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-center text-3xl font-extrabold text-slate-900 mb-10">The Business Impact</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
               {benefits.map((b, i) => (
                 <div key={i} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <TrendingUp className="w-8 h-8 text-indigo-500 mb-3" />
                    <span className="font-bold text-slate-700">{b}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Stop Guessing Your Costs. <br/>Start Managing Them.</h2>
            <p className="text-xl text-indigo-100 mb-10 font-medium max-w-2xl mx-auto leading-relaxed">
              Get complete visibility into revenue, inventory, purchases, transfers and Cost of Goods Sold with a professional analytics platform built for growing businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20demo%20for%20the%20COGS%20Analytics%20Dashboard." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-white text-indigo-900 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3"
              >
                Book Your Free Demo Today
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
