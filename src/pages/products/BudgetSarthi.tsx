import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  AlertTriangle, 
  CheckCircle2, 
  ListChecks, 
  FileSpreadsheet, 
  Users, 
  Receipt, 
  Wallet, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  MessageSquare, 
  Store, 
  ExternalLink, 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  Sliders, 
  Clock, 
  HelpCircle, 
  ChevronRight, 
  FileText, 
  Database, 
  Play, 
  Sparkles, 
  Activity,
  ArrowUpRight,
  Info,
  Award,
  Check,
  X,
  Lock,
  Eye,
  Mail,
  Zap,
  Building
} from 'lucide-react';
import { useUser } from '../../contexts/UserContext';
import { useSEO } from '../../hooks/useSEO';
import RazorpayCheckout from '../../components/RazorpayCheckout';

export default function BudgetSarthi() {
  const { hasPurchased } = useUser();
  const isPurchased = hasPurchased('budgetsarthi');

  // Custom simulator state for interactivity
  const [marketingBudget, setMarketingBudget] = useState(500000); // 5 Lakhs
  const [marketingSpent, setMarketingSpent] = useState(410000); // 4.1 Lakhs
  const [eventsSpent, setEventsSpent] = useState(190000); // 1.9 Lakhs of 2L budget
  const [digitalAdsSpent, setDigitalAdsSpent] = useState(120000); // 1.2 Lakhs of 2L budget
  const [brandingSpent, setBrandingSpent] = useState(100000); // 1 Lakh of 1L budget
  
  const [simLock, setSimLock] = useState(false);
  const [simAlerts, setSimAlerts] = useState<Array<{ text: string; type: 'warning' | 'critical' | 'success' | 'info' }>>([
    { text: "System Booted: Financial period June 2026 is Active.", type: "info" },
    { text: "Marketing department utilization is at 82% (Warning Threshold passed).", type: "warning" },
    { text: "Branding cost center is at 100% capacity (Critical alert generated).", type: "critical" }
  ]);
  const [logInputAmount, setLogInputAmount] = useState('20000');
  const [selectedCostCenter, setSelectedCostCenter] = useState<'events' | 'digital' | 'branding'>('events');
  const [selectedDeptLog, setSelectedDeptLog] = useState('Marketing');
  const [logDesc, setLogDesc] = useState('Venue catering advance payment');

  const triggerSearchLog = (amt: number, center: string, desc: string) => {
    if (simLock) {
      setSimAlerts(prev => [
        { text: "❌ Transaction Blocked: Period lock is currently Active. Under the hood validation failed.", type: "critical" },
        ...prev
      ]);
      return;
    }

    const value = Number(amt);
    if (isNaN(value) || value <= 0) {
      alert("Please enter a valid expense amount");
      return;
    }

    // Process simulation log
    const timestamp = new Date().toLocaleTimeString();
    
    if (center === 'events') {
      const newExp = eventsSpent + value;
      const totalNewSpent = marketingSpent + value;
      setEventsSpent(newExp);
      setMarketingSpent(totalNewSpent);
      
      let alertType: 'info' | 'warning' | 'success' | 'critical' = 'info';
      let msg = `[${timestamp}] Added ₹${value.toLocaleString('en-IN')} to Events. Submitter status: logged.`;
      
      if (newExp >= 200000) {
        alertType = 'critical';
        msg += ` 🚨 Events Limit EXCEEDED (₹2,00,000 threshold breached!) - Email alert routed.`;
      } else if (newExp >= 160000) {
        alertType = 'warning';
        msg += ` ⚠️ Events Budget at ${Math.round((newExp / 200000) * 100)}% (Warning active).`;
      }
      
      setSimAlerts(prev => [{ text: msg, type: alertType }, ...prev]);
    } else if (center === 'digital') {
      const newExp = digitalAdsSpent + value;
      const totalNewSpent = marketingSpent + value;
      setDigitalAdsSpent(newExp);
      setMarketingSpent(totalNewSpent);
      
      let alertType: 'info' | 'warning' | 'success' | 'critical' = 'info';
      let msg = `[${timestamp}] Added ₹${value.toLocaleString('en-IN')} to Digital Ads. Submitter status: logged.`;
      
      if (newExp >= 200000) {
        alertType = 'critical';
        msg += ` 🚨 Digital Ads Limit EXCEEDED - Email alert generated.`;
      } else if (newExp >= 160000) {
        alertType = 'warning';
        msg += ` ⚠️ Digital Ads Budget approaching critical.`;
      }
      
      setSimAlerts(prev => [{ text: msg, type: alertType }, ...prev]);
    } else {
      const newExp = brandingSpent + value;
      const totalNewSpent = marketingSpent + value;
      setBrandingSpent(newExp);
      setMarketingSpent(totalNewSpent);
      
      let alertType: 'info' | 'warning' | 'success' | 'critical' = 'info';
      let msg = `[${timestamp}] Added ₹${value.toLocaleString('en-IN')} to Branding. Submitter status: logged.`;
      
      if (newExp >= 100000) {
        alertType = 'critical';
        msg += ` 🚨 Branding Limit EXCEEDED - Transaction flagged.`;
      }
      
      setSimAlerts(prev => [{ text: msg, type: alertType }, ...prev]);
    }
  };

  useSEO(
    'BudgetSarthi Review: Under-The-Hood Spend Governance | Suraj Automation',
    'BudgetSarthi is a robust expense control & finance governance system built on Google Workspace, resolving spreadsheet chaos with locking mechanism, alerts, and audit logs.',
    'budget monitoring, expense logging, cost center analytics, financial controls sheets, google apps script budget, mid-sized business expense system'
  );

  const productMetadata = {
    reviewer: "A B2B Software Analyst who's evaluated 200+ SMB tools and Google Workspace-based business systems",
    category: "Budget Management, Expense Control & Departmental Finance Governance",
    builtFor: "Mid-sized businesses, manufacturing units, service companies, NGOs, educational institutions, and multi-department organizations managing departmental budgets",
    techStack: "Google Apps Script, Google Sheets Database, HTML, CSS, Vanilla JavaScript, Google Charts, Gmail/MailApp Automation, Google Workspace Authentication",
    verdict: "A surprisingly serious finance governance system hiding inside a Google Sheets-powered web app."
  };

  const featureCards = [
    {
      title: "Executive Budget Dashboard",
      rating: "5/5",
      ratingStars: 5,
      description: "Provides organization-wide visibility into allocated budget, actual spend, utilization ratios, MoM spend trends, and automatically calculates department health scores.",
      usecase: "A CFO can open the dashboard and immediately know which departments are likely to overspend before month-end closure happens.",
      verdictCategory: "One of the strongest modules in the product."
    },
    {
      title: "Department Budget Monitoring",
      rating: "5/5",
      ratingStars: 5,
      description: "Analyzes each department separately showing total allocation, current actual spend, variance, percentage utilization, remaining balance ticker, and status health indicators.",
      usecase: "HR managers can manage training costs and administrative budgets without ever seeing marketing campaigns or manufacturing overhead costs.",
      verdictCategory: "Makes the product feel like an integrated management tool."
    },
    {
      title: "Cost Center Analysis",
      rating: "5/5",
      ratingStars: 5,
      description: "Breaks departments down into granular cost centers with micro-budgets (e.g. Marketing department split into Events, Digital Ads, Branding, Content creation).",
      usecase: "Instead of stating a generic 'Marketing overspent limit', you drill down to locate the precise budget bucket responsible for the overspend.",
      verdictCategory: "Proper corporate finance governance. Superior to most entry level SMB ERPs."
    },
    {
      title: "Smart Overspending Alerts",
      rating: "5/5",
      ratingStars: 5,
      description: "Continuously tracks live budget utilization against threshold boundaries: triggers an 80% warning condition and a 100% critical block flag. Supports email alerts.",
      usecase: "Finance receives instant email notification before spending pools are fully exhausted, preventing retrospective damage.",
      verdictCategory: "The most valuable proactive measure. Prevention beats post-mortem reporting."
    },
    {
      title: "Expense Logging System",
      rating: "4/5",
      ratingStars: 4,
      description: "Structured transaction workspace supporting CRUD transactions (create, edit, delete), bill attachment code mappings, submitter records, and categories.",
      usecase: "Department managers log operational spending directly without wasting finance desk time with bulk email receipts.",
      verdictCategory: "Clean validation design. Solid and reliable operational workflow."
    },
    {
      title: "Bulk Import Engine",
      rating: "4/5",
      ratingStars: 4,
      description: "Enables administrative staff to import raw transactional rows in bulk. Imported items instantly trigger department threshold alerts and sweeps.",
      usecase: "Migrating existing business expenses from offline Excel rosters into the automated control database without manual single-entry drag.",
      verdictCategory: "Reduces initial friction and implementation delays."
    },
    {
      title: "Budget Locking & Financial Control",
      rating: "5/5",
      ratingStars: 5,
      description: "Permits administrators to securely freeze distinct financial periods. Locked periods prevent edits, modifications, backdating, and budget changes.",
      usecase: "Standardizing the month-end finance closure routine, guaranteeing no post-period ledger tampering or modification happens.",
      verdictCategory: "A mature corporate governance mechanism that ensures audit integrity."
    },
    {
      title: "Role-Based Access Control",
      rating: "5/5",
      ratingStars: 5,
      description: "Locks sections by role: Admin (full system access), Manager (restricted to assigned department cost centers), and Viewer (read-only charts & metrics).",
      usecase: "Department Heads log and view stats strictly inside their areas of financial responsibility, protecting sensitive corporate cost datasets.",
      verdictCategory: "Much more cohesive and complete than standard Apps Script integrations."
    },
    {
      title: "Audit Logging",
      rating: "5/5",
      ratingStars: 5,
      description: "Maintains a persistent, un-erasable record of all core transactions: budget movements, sheet updates, import commands, locking actions, and email prompts.",
      usecase: "Finance team matches transactions back to users in disputes, maintaining complete system transparency.",
      verdictCategory: "A pristine safeguard that internal compliance teams and CA auditors will love."
    }
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Header Section */}
      <section className="relative py-20 lg:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-300 text-sm font-bold tracking-wide mb-6 border border-blue-500/20 backdrop-blur-sm">
              <Calculator className="w-4 h-4 animate-pulse" />
              Under The Hood Review
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              BudgetSarthi — An Honest Review <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                After Looking Under the Hood
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Drowning in excel chaos and WhatsApp expense claims? Read this comprehensive software review of BudgetSarthi — a shockingly robust finance governance system built entirely on Google Sheets.
            </p>
          </div>

          {/* Under the Hood Specs Sheet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-md shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <h2 className="text-xl font-bold uppercase tracking-widest text-indigo-400 mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-indigo-400" />
              Review Parameters & Metadata
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="border-r border-slate-800 pr-4 last:border-0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Reviewed By</span>
                <p className="text-sm font-medium text-slate-200">{productMetadata.reviewer}</p>
              </div>
              <div className="border-r border-slate-800 pr-4 last:border-0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Acreage & Category</span>
                <p className="text-sm font-medium text-slate-200">{productMetadata.category}</p>
              </div>
              <div className="border-r border-slate-800 pr-4 last:border-0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Target Industries</span>
                <p className="text-sm font-medium text-slate-200">{productMetadata.builtFor}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Platform Tech Stack</span>
                <p className="text-sm font-medium text-slate-200">{productMetadata.techStack}</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Review Verdict:</span>
                <blockquote className="text-emerald-400 font-extrabold italic text-lg">
                  "{productMetadata.verdict}"
                </blockquote>
              </div>
              <div className="flex gap-4 shrink-0">
                <a 
                  href="#checkout-section"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold tracking-wide transition-all shadow-lg shadow-blue-500/25 shrink-0"
                >
                  Buy Blueprint — ₹3,999
                </a>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I'm%20interested%20in%20a%20free%20demo%20for%20BudgetSarthi!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-sm font-bold transition-colors border border-slate-700"
                >
                  Request Demo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why This Product Exist — The Reality of Indian SMBs */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-rose-50 text-rose-700 text-xs font-black tracking-widest rounded-full uppercase border border-rose-100 mb-3">
              The Genesis Problem
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Excel Chaos, WhatsApp Tracking & Post-Mortem Reporting
            </h2>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 text-lg leading-relaxed font-normal space-y-6">
            <p>
              Imagine you're running a 50-person manufacturing factory or high-volume service agency in Greater Noida. 
              Marketing spends capital on ad campaigns. HR books corporate training events. Admin purchases office pantry elements. 
              Operations logs replacement manufacturing tools.
            </p>
            <p>
              Your finance department creates budgets at the absolute beginning of the month. 
              Yet, by the time month-end rolls around, <strong>nobody really knows where the budget evaporated.</strong>
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-12 not-prose">
              <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6 text-center shadow-sm">
                <span className="text-3xl font-black text-rose-500 block mb-2">📁</span>
                <h4 className="font-extrabold text-rose-950 text-base mb-1">Budgets Live in</h4>
                <p className="text-sm font-bold text-rose-700 uppercase tracking-wider font-mono">Static Excel</p>
              </div>
              <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6 text-center shadow-sm">
                <span className="text-3xl font-black text-rose-500 block mb-2">💬</span>
                <h4 className="font-extrabold text-rose-950 text-base mb-1">Expenses Logged via</h4>
                <p className="text-sm font-bold text-rose-700 uppercase tracking-wider font-mono">WhatsApp Chats</p>
              </div>
              <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6 text-center shadow-sm">
                <span className="text-3xl font-black text-rose-500 block mb-2">🗣️</span>
                <h4 className="font-extrabold text-rose-950 text-base mb-1">Approvals happen</h4>
                <p className="text-sm font-bold text-rose-700 uppercase tracking-wider font-mono">Verbally</p>
              </div>
              <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6 text-center shadow-sm">
                <span className="text-3xl font-black text-rose-500 block mb-2">📉</span>
                <h4 className="font-extrabold text-rose-950 text-base mb-1">Reports compiled</h4>
                <p className="text-sm font-bold text-rose-700 uppercase tracking-wider font-mono">After Damage</p>
              </div>
            </div>

            <p className="font-medium text-slate-800">
              The reality is brutally simple: Finance teams in deep-growing organizations spend more hours chasing numbers than actually controlling them. That is the exact problem BudgetSarthi appears to solve.
            </p>
            <p>
              After reviewing the underlying module architecture, BudgetSarthi is explicitly not an accounting ledger software. It is not trying to replace Tally, Zoho Books, or high-tier ERPs. 
              Instead, it operates <strong>directly one layer above accounting tables</strong>, focusing cleanly on budget enforcement and spend transparency before the money actually walks out the door.
            </p>
          </div>
        </div>
      </section>

      {/* Main Feature Rollout Breakdown */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-black tracking-widest rounded-full uppercase border border-blue-100 mb-3">
              Feature Matrix
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              An Architectural Deep-Dive Study
            </h2>
            <p className="text-slate-600 mt-2 text-lg max-w-2xl mx-auto">
              Investigating the nine modules that compose the core engine of BudgetSarthi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((feat, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-8 hover:border-blue-400 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-400 font-mono text-sm font-bold">MODULE 0{idx+1}</span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: feat.ratingStars }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs font-bold text-slate-500 ml-1">({feat.rating})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2 truncate group-hover:text-blue-600 transition-colors">
                    {feat.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {feat.description}
                  </p>
                  
                  <div className="bg-slate-50 border border-slate-200/50 p-4 rounded-2xl mb-4 text-xs font-normal">
                    <span className="text-indigo-600 font-bold block uppercase mb-1">Real-World Case:</span>
                    <p className="text-slate-700 leading-normal">{feat.usecase}</p>
                  </div>
                </div>

                <div className="mt-auto border-t border-slate-100 pt-4">
                  <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider mb-1">Review Verdict:</span>
                  <p className="text-slate-800 text-sm font-semibold">{feat.verdictCategory}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Scenario Test — Greater Noida Factory Simulator */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wider rounded-full uppercase border border-emerald-100 mb-4">
                Operational Validation
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Scenario Test Simulator: Greater Noida Factory
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                To test the core business validation logic, we've loaded a live interactive replica representing a 15-person manufacturing operations company in Greater Noida:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                  <span className="text-slate-700 text-base"><strong>Total Budget Pool:</strong> ₹25,00,000 allocated for Operations control.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                  <span className="text-slate-700 text-base"><strong>Department under review:</strong> Marketing (Budget: ₹5 Lakh, spent ₹4.1 Lakh).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                  <span className="text-slate-700 text-base"><strong>Marketing Cost Centers:</strong> Events (₹2L Cap), Digital Ads (₹2L Cap), Branding (₹1L Cap).</span>
                </li>
              </ul>

              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2.5xl">
                <h4 className="font-bold text-slate-900 text-base mb-2">💡 Try the Simulator:</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Log an expense into the Marketing cost centers. Watch how utilization ratios climb, warning thresholds trigger email alerts (simulated), or activate the period freeze lock to test security governance.
                </p>
              </div>
            </div>

            {/* Simulated Live UI Container */}
            <div className="lg:col-span-7">
              <div className="bg-slate-950 border border-slate-800 text-slate-100 rounded-[2rem] p-6 lg:p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-5">
                  <div className="flex items-center gap-3">
                    <Building className="w-6 h-6 text-blue-400" />
                    <div>
                      <h4 className="font-black text-lg text-white">Greater Noida Factory Control</h4>
                      <p className="text-xs text-slate-500">Period: June 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${simLock ? 'bg-rose-500/10 border-rose-500/25 text-rose-400' : 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400'}`}>
                      STATUS: {simLock ? 'LOCKED' : 'ACTIVE'}
                    </span>
                    <button 
                      onClick={() => {
                        setSimLock(!simLock);
                        const timestamp = new Date().toLocaleTimeString();
                        setSimAlerts(prev => [
                          { text: simLock ? `[${timestamp}] Administrator unlocked financial period.` : `[${timestamp}] Finance Controller locked period June 2026. No modifications allowed.`, type: simLock ? "info" : "warning" },
                          ...prev
                        ]);
                      }}
                      className="px-3.5 py-1.5 bg-slate-800 text-xs font-bold text-slate-200 border border-slate-700 hover:bg-slate-700 rounded-xl transition-all flex items-center gap-1"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      {simLock ? "Unlock" : "Lock Period"}
                    </button>
                  </div>
                </div>

                {/* Dashboard Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider block mb-1">ALLOCATED</span>
                    <span className="text-lg md:text-xl font-extrabold text-white">₹25.0 Lakh</span>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider block mb-1">TOTAL SPENT</span>
                    <span className="text-lg md:text-xl font-extrabold text-white">₹{(1900000 + (marketingSpent - 410000)).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider block mb-1">UTILIZATION</span>
                    <span className="text-lg md:text-xl font-extrabold text-indigo-400">
                      {Math.round(((1900000 + (marketingSpent - 410000)) / 2500000) * 100)}%
                    </span>
                  </div>
                </div>

                {/* Sub-division breakdown */}
                <h5 className="font-bold text-sm text-slate-400 uppercase tracking-widest mb-3">Cost Centers Analysis (Marketing)</h5>
                <div className="space-y-4 mb-8">
                  {/* Events */}
                  <div className="bg-slate-900/50 p-4 border border-slate-800/60 rounded-2xl">
                    <div className="flex justify-between items-center mb-1 bg-transparent">
                      <span className="font-bold text-sm">Events (Max ₹2,00,000)</span>
                      <span className="font-mono text-sm font-bold text-slate-300">₹{eventsSpent.toLocaleString('en-IN')} ({Math.round((eventsSpent / 200000) * 100)}%)</span>
                    </div>
                    <div className="w-full bg-slate-850 h-2.5 rounded-full overflow-hidden mt-2">
                      <div className={`h-full transition-all duration-300 ${eventsSpent >= 200000 ? 'bg-rose-500' : 'bg-blue-500'}`} style={{ width: `${Math.min((eventsSpent / 200000) * 100, 100)}%` }} />
                    </div>
                  </div>
                  {/* Digital Ads */}
                  <div className="bg-slate-900/50 p-4 border border-slate-800/60 rounded-2xl">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm">Digital Ads (Max ₹2,00,000)</span>
                      <span className="font-mono text-sm font-bold text-slate-300">₹{digitalAdsSpent.toLocaleString('en-IN')} ({Math.round((digitalAdsSpent / 200000) * 100)}%)</span>
                    </div>
                    <div className="w-full bg-slate-850 h-2.5 rounded-full overflow-hidden mt-2">
                      <div className={`h-full transition-all duration-300 ${digitalAdsSpent >= 200000 ? 'bg-rose-500' : 'bg-indigo-500'}`} style={{ width: `${Math.min((digitalAdsSpent / 200000) * 100, 100)}%` }} />
                    </div>
                  </div>
                  {/* Branding */}
                  <div className="bg-slate-900/50 p-4 border border-slate-800/60 rounded-2xl">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm">Branding (Max ₹1,00,000)</span>
                      <span className="font-mono text-sm font-bold text-rose-400">₹{brandingSpent.toLocaleString('en-IN')} ({Math.round((brandingSpent / 100000) * 100)}%)</span>
                    </div>
                    <div className="w-full bg-slate-850 h-2.5 rounded-full overflow-hidden mt-2">
                      <div className={`h-full transition-all duration-300 ${brandingSpent >= 100000 ? 'bg-rose-600' : 'bg-emerald-500'}`} style={{ width: `${Math.min((brandingSpent / 100000) * 100, 100)}%` }} />
                    </div>
                  </div>
                </div>

                {/* Entry Action form */}
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-2.5xl mb-6">
                  <h6 className="font-extrabold text-sm text-slate-350 mb-3 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-amber-400" />
                    Log Direct Expense
                  </h6>
                  <div className="grid sm:grid-cols-3 gap-3 mb-4">
                    <div>
                      <label className="text-[10px] text-slate-500 font-bold uppercase block mb-1">Cost Center</label>
                      <select 
                        value={selectedCostCenter}
                        onChange={(e) => setSelectedCostCenter(e.target.value as any)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 font-bold text-xs text-white"
                      >
                        <option value="events">Events</option>
                        <option value="digital">Digital Ads</option>
                        <option value="branding">Branding</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-500 font-bold uppercase block mb-1">Amount (₹)</label>
                      <input 
                        type="number"
                        value={logInputAmount}
                        onChange={(e) => setLogInputAmount(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 font-mono text-xs text-white"
                        placeholder="e.g. 10000"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-500 font-bold uppercase block mb-1">Submit Transaction</label>
                      <button 
                        onClick={() => triggerSearchLog(Number(logInputAmount), selectedCostCenter, logDesc)}
                        className="w-full h-[28px] shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold tracking-wide rounded-xl text-xs flex items-center justify-center transition-all shadow-sm"
                      >
                        Save Entry
                      </button>
                    </div>
                  </div>
                </div>

                {/* Simulated Audit console */}
                <div className="bg-slate-950 border border-slate-850 p-4 rounded-xl font-mono text-[11px] leading-relaxed max-h-[160px] overflow-y-auto scrollbar-thin text-slate-350">
                  <p className="text-slate-500 mb-2 border-b border-slate-850 pb-1 font-bold">SYSTEM INTEGRITY CONSOLE LOGS & EVENTS</p>
                  {simAlerts.map((alert, index) => (
                    <div key={index} className="flex gap-2 mb-1.5 items-start">
                      <span className={`text-[9px] uppercase tracking-wider font-bold p-0.5 px-1.5 rounded shrink-0 ${
                        alert.type === 'critical' ? 'bg-rose-500/10 text-rose-500' :
                        alert.type === 'warning' ? 'bg-amber-500/10 text-amber-500' :
                        alert.type === 'success' ? 'bg-emerald-500/10 text-emerald-500' :
                        'bg-slate-800 text-slate-400'
                      }`}>
                        {alert.type}
                      </span>
                      <span>{alert.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wow & Hmm Critique Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* The Wow moments */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <ThumbsUp className="w-8 h-8 text-indigo-600" />
                The "Wow" Moments — Where It Shines
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl border border-slate-250 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-lg mb-2">1. Deep Operational Business Logic</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Most default spreadsheet databases and Google Apps script integrations freeze on basic CRUD. Note that BudgetSarthi implements advanced algorithms to determine department health weights and running period locks. That's genuine corporate governance engineering.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-slate-250 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-lg mb-2">2. Authentic Finance Thinking</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The platform developers explicitly understand how modern accounts systems and CFO desks operate. Guardrails such as Cost center level subdivision, variance notifications, and hard-locked calendar periods represent real financial control measures.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-slate-250 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-lg mb-2">3. Visually Premium Glassmorphic Layout</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Rather than default raw spreadsheet views, the customized web dashboard matches contemporary SaaS platforms: gorgeous custom responsive layout charts, risk thresholds highlight matrices, and KPI grids.
                  </p>
                </div>
              </div>
            </div>

            {/* The Hmm moments */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <ThumbsDown className="w-8 h-8 text-rose-500" />
                The "Hmm..." Moments — What Needs Work
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl border border-slate-250 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-lg mb-2">1. Physical Spreadsheet Scalability Lock</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    As with any system leveraging Google Workspace, there's an administrative boundary. If your organization processes beyond 10,000 monthly expense entries, Google Sheets' computational limits will begin yielding operational performance lag.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-slate-250 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-lg mb-2">2. No Multi-Tier Approval Chain</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We expected a clear validation loop (e.g. Submitter Logs → Department head Approves → Finance releases cap). Instead, BudgetSarthi logs transactions directly to records. While simple for speed-ups, larger enterprises will require an approval chain.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-slate-250 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-lg mb-2">3. Missing Native Attachment Drive Linkage</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    While invoice code references can be manually logged, we found no direct Google Drive document linkage or invoice PDF snapshot previews inside the core dashboard UI, marking a clear upgrade opportunity.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-slate-250 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-lg mb-2">4. Limited External Integrations</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    There are no direct pathways out-of-the-box syncing transaction rows with GST filing systems, Razorpay payment flows, or accounting catalogs like Tally ERP, Zoho Books, or QuickBooks.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Audience Comparison Matrix (Buy vs Skip) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Who is BudgetSarthi For?</h2>
            <p className="text-slate-600 text-lg">Use this diagnostic filter to determine if this product aligns with your organizational scale.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* BUY card */}
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-bold text-5xl font-sans text-emerald-100">YES</div>
              <h3 className="text-2xl font-black text-emerald-950 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                Who Should BUY This:
              </h3>
              <ul className="space-y-4">
                {[
                  "Manufacturing companies managing department cost-centers",
                  "Educational institutions tracking program budgets & facilities",
                  "NGOs seeking structured reporting on program expenditures",
                  "Service Agencies handling distinct project budgets",
                  "Growing SMBs looking to move beyond spreadsheet chaos",
                  "Finance heads seeking hard budget controls & locks"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                    <span className="text-emerald-900 font-medium text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SKIP card */}
            <div className="bg-rose-50/50 border border-rose-100 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-bold text-5xl font-sans text-rose-100">SKIP</div>
              <h3 className="text-2xl font-black text-rose-950 mb-6 flex items-center gap-2">
                <X className="w-7 h-7 text-rose-500" />
                Who Should SKIP This:
              </h3>
              <ul className="space-y-4">
                {[
                  "A 3-person early startup with minimal operating costs",
                  "Accounting desks requiring full bookkeeping capabilities",
                  "CAs expecting direct GST filing and automated bookkeeping portals",
                  "Firms needing inventory, payroll, CRM, and ERP in on single engine"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-rose-500 mt-1 shrink-0" />
                    <span className="text-rose-900 font-medium text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Razorpay Section */}
      <section id="checkout-section" className="bg-slate-50 dark:bg-slate-900/15 py-16 border-t border-b border-slate-200/50 dark:border-slate-800/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Buy Sources, Blueprints & Codes</h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto">
              Unlock the entire Google Workspace script, standard formatted sheets database templates, and integration codes instantly.
            </p>
          </div>
          <RazorpayCheckout productId="budgetsarthi" />
        </div>
      </section>

      {/* Lifetime Blueprint Implementation Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-8 border-b pb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-indigo-600" />
            🔧 Deployment Protocol & Setup Guideline
          </h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center font-bold text-indigo-700 shrink-0">1</div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Spreadsheet Template Copier</h4>
                <p className="text-slate-600 text-sm">
                  Open your purchased blueprint file and click the "Make a Copy" action. This copies four sheets ('Budgets', 'Expenses', 'Audit_Log', and 'Settings') directly into your secure Google Drive.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center font-bold text-indigo-700 shrink-0">2</div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Open Server Script Integration</h4>
                <p className="text-slate-600 text-sm">
                  Navigate to Extensions ➔ Apps Script. Erase default placeholder scripts, copy our audited server-authoritative logic files from the blueprint download directory, and paste the code.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center font-bold text-indigo-700 shrink-0">3</div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Run Web App Publish Deployment</h4>
                <p className="text-slate-600 text-sm">
                  Click 'New deployment'. Select type as 'Web App'. Choose execute as: 'Me' (your administrator email) and authorized access level: 'Anyone'. Grant requested security permissions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center font-bold text-indigo-700 shrink-0">4</div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Lock Security & Distribute</h4>
                <p className="text-slate-600 text-sm">
                  Map Web App URLs directly to your staff to enable responsive mobile logging. Administrators preserve raw control over the underlying Google Sheets tables, locking periods, and audit histories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic CTA Footer Box */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 text-white rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-2xl">
            {/* Ambient visual balance glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-500/20 rounded-full blur-[90px] pointer-events-none" />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <span className="text-xs font-black text-indigo-300 tracking-wider uppercase block mb-3">
                Rating verdict: 8.6/10
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                Enforce Budget Discipline & Stop Spending Chaos Today
              </h2>
              <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                BudgetSarthi provides the structure, cost-center visibility, user permissions, locking mechanisms, and automated warnings required to keep financial allocations intact.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20demo%20of%20BudgetSarthi!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-md font-bold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Book a Free Demo → See Where Your Budget Is Actually Going
              </a>
              <a
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20collaborate%20on%20building%20custom%20accounting%20tools."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl text-md font-semibold transition-colors flex items-center justify-center gap-2 border border-slate-800"
              >
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                Collaborate on Custom Tools
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
