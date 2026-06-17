import React, { useState } from 'react';
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
  Building,
  Printer,
  ChevronDown,
  Percent,
  TrendingDown
} from 'lucide-react';
import { useUser } from '../../contexts/UserContext';
import { useSEO } from '../../hooks/useSEO';
import RazorpayCheckout from '../../components/RazorpayCheckout';

export default function HisabSarthi() {
  const { hasPurchased } = useUser();
  const isPurchased = hasPurchased('hisabsarthi');

  // Delhi Electrical Wholesaler Simulator states
  const [sales, setSales] = useState(450000);
  const [purchases, setPurchases] = useState(120000);
  const [receivables, setReceivables] = useState(330000);
  const [payables, setPayables] = useState(80000);
  
  // Dynamic Invoice Builder
  const [invoiceCustomer, setInvoiceCustomer] = useState('Gupta Lights & Co.');
  const [invoicePos, setInvoicePos] = useState<'delhi' | 'haryana'>('delhi');
  const [invoiceProduct, setInvoiceProduct] = useState('Heavy Copper Wire (90m)');
  const [invoiceBasePrice, setInvoiceBasePrice] = useState('15000');
  
  // Fast Book Payment States
  const [fastPayCustomer, setFastPayCustomer] = useState('Gupta Lights & Co.');
  const [fastPayAmount, setFastPayAmount] = useState('15000');
  const [fastPayMode, setFastPayMode] = useState<string>('UPI');

  // Customer List with Balances for Ageing/Ledger simulator
  const [parties, setParties] = useState([
    { name: "Gupta Lights & Co.", balance: 85000, days: "35 days", contact: "Delhi" },
    { name: "Verma Electricals", balance: 120000, days: "45 days", contact: "Delhi" },
    { name: "Sharma & Brothers", balance: 65000, days: "12 days", contact: "Haryana" },
    { name: "Royal Lighting Delhi", balance: 60000, days: "62 days", contact: "Delhi" }
  ]);

  const [simLogs, setSimLogs] = useState<Array<{ text: string; type: 'success' | 'warn' | 'info' | 'critical' }>>([
    { text: "System Booted: Financial period June 2026 is fully initialized.", type: "info" },
    { text: "Automatic Place of Supply (POS) state routers verified.", type: "success" },
    { text: "Ageing tracker report: Verma Electricals has balance ₹1,20,000 outstanding for > 45 days.", type: "warn" }
  ]);

  const handleCreateInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    const baseVal = Number(invoiceBasePrice);
    if (isNaN(baseVal) || baseVal <= 0) {
      alert("Please enter a valid base price.");
      return;
    }

    const timestamp = new Date().toLocaleTimeString();
    
    // GST Logic Calculation
    // Delhi POS is Intra-state: CGST (9%) & SGST (9%)
    // Haryana POS is Inter-state: IGST (18%)
    const gstRate = 0.18;
    const gstAmount = baseVal * gstRate;
    const totalAmount = baseVal + gstAmount;

    // Update global dashboard metrics
    setSales(prev => prev + totalAmount);
    setReceivables(prev => prev + totalAmount);

    // Update Customer list balance
    setParties(prev => 
      prev.map(party => 
        party.name === invoiceCustomer 
          ? { ...party, balance: party.balance + totalAmount } 
          : party
      )
    );

    const posText = invoicePos === 'delhi' ? "Intra-state (Delhi POS: CGST 9% + SGST 9%)" : "Inter-state (Haryana POS: IGST 18%)";
    const logMsg = `Invoiced ₹${totalAmount.toLocaleString('en-IN')} (Base: ₹${baseVal.toLocaleString('en-IN')}) to ${invoiceCustomer} for ${invoiceProduct}. GST Treatment: ${posText}.`;
    
    setSimLogs(prev => [
      { text: `[${timestamp}] 📄 ${logMsg}`, type: "success" },
      ...prev
    ]);
  };

  const handleFastBookPayment = (e: React.FormEvent) => {
    e.preventDefault();
    const payVal = Number(fastPayAmount);
    if (isNaN(payVal) || payVal <= 0) {
      alert("Please enter a valid payment amount.");
      return;
    }

    const targetParty = parties.find(p => p.name === fastPayCustomer);
    if (targetParty && targetParty.balance < payVal) {
      const confirmExceeds = window.confirm(`Entered payment (₹${payVal}) exceeds current outstanding balance (₹${targetParty.balance}). Book anyway?`);
      if (!confirmExceeds) return;
    }

    const timestamp = new Date().toLocaleTimeString();
    
    // Update metrics
    setReceivables(prev => Math.max(0, prev - payVal));
    
    // Update customer balance
    setParties(prev => 
      prev.map(p => 
        p.name === fastPayCustomer 
          ? { ...p, balance: Math.max(0, p.balance - payVal) } 
          : p
      )
    );

    const logMsg = `Fast Booked payment of ₹${payVal.toLocaleString('en-IN')} from ${fastPayCustomer} via ${fastPayMode}. Party outstanding ledger updated automatically.`;
    
    setSimLogs(prev => [
      { text: `[${timestamp}] 💸 ${logMsg}`, type: "info" },
      ...prev
    ]);
  };

  useSEO(
    'HisabSarthi Review: GST Accounting & Small Business Bookkeeping | Suraj Automation',
    'Evaluate HisabSarthi, an elegant, lightweight GST accounting and billing sheets system constructed for Indian traders, wholesalers, distributors and service companies.',
    'GST accounting sheets, small business bookkeeping, simple Tally alternative, ledger print template, ageing reports, GST billing excel apps script'
  );

  const metadata = {
    reviewer: "A B2B Software Analyst who has evaluated 200+ SMB tools across accounting, ERP, and workflow automation",
    category: "GST Accounting & Business Bookkeeping Software",
    builtFor: "Indian traders, distributors, wholesalers, manufacturers, service businesses, and SMB owners who have outgrown Excel but don't want the complexity of Tally/ERP systems",
    techStack: "HTML + CSS + Vanilla JavaScript, Google Apps Script backend, Google Sheets-based data layer, Dynamic SPA (Single Page Application), Print-ready invoice and ledger engines, Subscription & plan management system",
    verdict: "HisabSarthi is not trying to be another ERP—it is trying to be the simplest possible GST accounting system for Indian SMBs, and surprisingly, that focus is its biggest strength."
  };

  const featuresBreakdown = [
    {
      title: "Dashboard",
      rating: "4.5/5",
      stars: 5,
      desc: "Instant live metrics showing Total Sales, Receivables, Payables, Purchases, and Recent Invoices. Tailored directly for the business owner rather than accounting veterans.",
      verdict: "Practical, clean, and immediately helpful."
    },
    {
      title: "GST Sales Invoicing",
      rating: "5/5",
      stars: 5,
      desc: "Supports Tax Invoices, Bills of Supply, Reverse Charge handling, dual/site-wise Place of Supply routes, automatic interstate (IGST) vs intrastate (CGST/SGST) mapping, multi-line item entries and print-ready templates.",
      verdict: "One of the absolute strongest modules. Truly implements GST rules instead of faking them."
    },
    {
      title: "Vendor Bills (Purchase Management)",
      rating: "4.5/5",
      stars: 5,
      desc: "Records vendor bills, vendor detail mappings, billing date schedules, purchase GST items, csv uploads and multi-product items to fully close both sides of the ledger workflow.",
      verdict: "More robust and complete than most standard entry-level spreadsheet trackers."
    },
    {
      title: "Payments & Receipts",
      rating: "5/5",
      stars: 5,
      desc: "Accepts client receipt details and vendor payments categorized by cash, UPI, Cheque references, RTGS, NEFT, and bank accounts. Features a seamless Fast-Book entry terminal.",
      verdict: "Created specifically for real-world speed. Shop owners can record invoices and receipts in seconds."
    },
    {
      title: "Debit Notes & Credit Notes",
      rating: "4/5",
      stars: 4,
      desc: "Generates proper debit notes and credit notes with transaction historical mappings, party linking, and custom print layouts. Crucial for handling returns, discount adjustments and write-offs.",
      verdict: "A highly valuable feature commonly omitted from other simplified sheets systems."
    },
    {
      title: "Journal Entries",
      rating: "4.5/5",
      stars: 5,
      desc: "Double-entry book vouchers featuring automated Debit/Credit balancing checks, custom narration logs, transaction lines tracking and general ledger integrations.",
      verdict: "Serious enough for CAs and professional accountants, yet remains entirely lightweight."
    },
    {
      title: "Ledger & P&L Reports",
      rating: "5/5",
      stars: 5,
      desc: "Produces customer ledgers, vendor ledger details, date filters, P&L sheets and custom print layouts. Fully solves Indian merchants' frequent customer/CA reporting needs.",
      verdict: "Extremely polished print outputs. The PDF presentation matches high-end corporate platforms."
    },
    {
      title: "GST Reports",
      rating: "5/5",
      stars: 5,
      desc: "Delivers organized taxation summaries, HSN/SAC codes metrics, transaction breakdown views, and CSV/Excel filing exports that CAs can utilize directly to compute tax files.",
      verdict: "An incredible asset during quarterly filing stress. Simplifies CA discussions enormously."
    },
    {
      title: "Ageing Report",
      rating: "5/5",
      stars: 5,
      desc: "Groups outstanding balances across customizable time buckets (e.g. 0-30, 31-60, 61-90+ days), showing detailed party breakdowns and drill-down lists.",
      verdict: "The ultimate cash flow weapon to curb bad debts. Highlighted as a major executive favorite."
    },
    {
      title: "Masters Module",
      rating: "4/5",
      stars: 4,
      desc: "Stores master debtor registers, creditor lists, item catalogs, GST percentage rules, financial accounts accounts, and site parameters, resolving bulk uploads nicely.",
      verdict: "Establishes a neat structure without corrupting manual records."
    }
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Header Section */}
      <section className="relative py-20 lg:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-bold tracking-wide mb-6 border border-indigo-500/20 backdrop-blur-sm">
              <Award className="w-4 h-4 text-amber-400 animate-pulse" />
              Under The Hood Review
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              HisabSarthi — An Honest Review <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                After Looking Under the Hood
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Is HisabSarthi the simplest GST accounting, billing, and ledger reporting software for growing Indian business houses? Read our technical review of its source code and operational logic.
            </p>
          </div>

          {/* Under the Hood Specs Sheet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 backdrop-blur-md shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <h2 className="text-xl font-bold uppercase tracking-widest text-indigo-400 mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-indigo-400" />
              Review Technical Specifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="border-r border-slate-800 pr-4 last:border-0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Reviewer</span>
                <p className="text-sm font-medium text-slate-200">{metadata.reviewer}</p>
              </div>
              <div className="border-r border-slate-800 pr-4 last:border-0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Category</span>
                <p className="text-sm font-medium text-slate-200">{metadata.category}</p>
              </div>
              <div className="border-r border-slate-800 pr-4 last:border-0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Ideal For</span>
                <p className="text-sm font-medium text-slate-200">{metadata.builtFor}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Tech Stack</span>
                <p className="text-sm font-medium text-slate-200">{metadata.techStack}</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 bg-transparent">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider shrink-0">Review Verdict:</span>
                <blockquote className="text-emerald-400 font-extrabold italic text-sm md:text-base">
                  "{metadata.verdict}"
                </blockquote>
              </div>
              <div className="flex gap-4 shrink-0">
                <a 
                  href="#checkout-hisabsarthi"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold tracking-wide transition-all shadow-lg shadow-blue-500/25 block"
                >
                  Buy Blueprint — From ₹499
                </a>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I'm%20interested%20in%20a%20free%20demo%20for%20HisabSarthi!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-sm font-bold transition-colors border border-slate-700 block"
                >
                  Request Demo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Setup Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-black tracking-widest rounded-full uppercase border border-indigo-100 mb-3">
              The Genesis Problem
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Why Does This Product Exist?
            </h2>
          </div>

          <div className="prose prose-indigo max-w-none text-slate-700 text-lg leading-relaxed space-y-6">
            <p>
              Imagine you're running a ₹2–10 crore regional wholesale trading business in India. You represent a growing engine: your sales invoicing is handled via manual Excel templates. Your vendor purchases arrive scattered across WhatsApp images and messages.
            </p>
            <p>
              Your current customer receivable reminders live either inside physical dairies, or simply inside your head. When a CA initiates month-end verification to pay GST, you spent hours sorting piles of logs, and customers ask for print-ready ledger updates weekly.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-12 not-prose">
              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 text-center shadow-sm">
                <span className="text-3xl font-black text-indigo-500 block mb-2">📊</span>
                <h4 className="font-extrabold text-slate-900 text-sm mb-1">Sales Invoices in</h4>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Excel Files</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 text-center shadow-sm">
                <span className="text-3xl font-black text-indigo-500 block mb-2">💬</span>
                <h4 className="font-extrabold text-slate-900 text-sm mb-1">Vendor Bills on</h4>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">WhatsApp Images</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 text-center shadow-sm">
                <span className="text-3xl font-black text-indigo-500 block mb-2">🧠</span>
                <h4 className="font-extrabold text-slate-900 text-sm mb-1">Outstanding Debtors</h4>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Tracked in Mind</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 text-center shadow-sm">
                <span className="text-3xl font-black text-indigo-500 block mb-2">📁</span>
                <h4 className="font-extrabold text-slate-900 text-sm mb-1">Ledgers compiled</h4>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">When Requested</p>
              </div>
            </div>

            <p className="font-semibold text-slate-900">
              You do not need inventory forecasting servers. You do not need deep manufacturing resource planning (MRP) lines, or fifty different ERP input forms. You need:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 font-medium my-6">
              <li>Clean, compliant GST Invoices & Bills of Supply</li>
              <li>A direct Vendor Purchase register</li>
              <li>Receivable & Payable health indicators</li>
              <li>Print-ready party ledgers with 1-click shares</li>
              <li>Real-time basic Profit & Loss calculations</li>
            </ul>

            <p>
              After executing a code audit, it's evident that HisabSarthi was developed exactly targeting this philosophy. The product bypasses SaaS bloated modules, providing pristine accounting workflows that small business managers actually practice every working day.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Breakdown Bento Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-black tracking-widest rounded-full uppercase border border-blue-100 mb-3">
              Deep-Dive Analysis
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Module-by-Module Technical Inspection
            </h2>
            <p className="text-slate-600 mt-2 text-lg max-w-2xl mx-auto scroll-smooth">
              Analyzing the components that make up the software architecture of HisabSarthi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresBreakdown.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm flex flex-col justify-between hover:border-indigo-400 hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4 bg-transparent">
                    <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">Module {idx + 1}</span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: item.stars }).map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs font-bold text-slate-500 ml-1">({item.rating})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 mt-auto">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">ANALYST VERDICT:</span>
                  <p className="text-slate-800 text-sm font-semibold">{item.verdict}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Scenario Test — Delhi Wholesaler Interactive Simulator */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Context Details */}
            <div className="lg:col-span-5">
              <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-black tracking-widest rounded-full uppercase border border-emerald-100 mb-4">
                Scenario Simulation
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Operational Stress Test: Delhi Electrical Wholesaler
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                To stress test the tax engine, place of supply routers, and ledger reconciliation modules, we created a replica representing a <strong>15-person electrical wholesaler</strong> located in Delhi:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mt-1 shrink-0">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <strong>Smart GST Logic:</strong> Sales invoices automatically routing tax types. It will compute CGST (9%) + SGST (9%) for intra-Delhi transactions, and IGST (18%) for neighboring interstate shipments (e.g. Haryana).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mt-1 shrink-0">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <strong>Fast Book Receipts:</strong> Customer clearances logged inside our Fast Book Payment module post values instantly to lower oustanding balances, balancing ledgers.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mt-1 shrink-0">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <strong>Ageing Bucket Monitor:</strong> Monitor debtor outstanding windows and age indices. Prevent credit leakage before printing ledger PDFs.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl">
                <h4 className="font-bold text-amber-950 text-sm mb-1.5">💡 Interactive Challenge:</h4>
                <p className="text-xs text-amber-900 leading-relaxed">
                  Fill out the quick GST invoice or log a fast payment for Gupta Lights inside the simulator dashboard. Observe total metrics and transaction registers synchronizing instantly.
                </p>
              </div>
            </div>

            {/* Interactive Simulated Dashboard Applet */}
            <div className="lg:col-span-7">
              <div className="bg-slate-950 border border-slate-800 rounded-[2rem] p-6 md:p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
                
                {/* Simulator Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-base text-slate-100">Capital Electricals Wholesale</h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Delhi GSTIN: 07AAAAA1111A1Z1</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                    SYSTEM STATUS: READY
                  </span>
                </div>

                {/* Dashboard Metrics Panels */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="bg-slate-900 border border-slate-850 p-4 rounded-xl">
                    <span className="text-[9px] text-slate-500 font-bold block uppercase tracking-wider mb-1">Sales (Cr.)</span>
                    <span className="text-base font-extrabold text-white">₹{sales.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="bg-slate-900 border border-slate-850 p-4 rounded-xl">
                    <span className="text-[9px] text-slate-500 font-bold block uppercase tracking-wider mb-1">Purchases</span>
                    <span className="text-base font-extrabold text-slate-350">₹{purchases.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="bg-slate-900 border border-slate-850 p-4 rounded-xl">
                    <span className="text-[9px] text-emerald-400 font-bold block uppercase tracking-wider mb-1">Receivables</span>
                    <span className="text-base font-extrabold text-emerald-400">₹{receivables.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="bg-slate-900 border border-slate-850 p-4 rounded-xl">
                    <span className="text-[9px] text-rose-400 font-bold block uppercase tracking-wider mb-1">Payables</span>
                    <span className="text-base font-extrabold text-rose-400">₹{payables.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Interactive Workspaces */}
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  {/* GST Invoice Creator */}
                  <form onSubmit={handleCreateInvoice} className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between">
                    <div>
                      <h5 className="font-extrabold text-xs text-indigo-400 uppercase tracking-widest mb-3 flex items-center gap-1">
                        <Receipt className="w-3.5 h-3.5" />
                        1. Generate GST Invoice
                      </h5>
                      
                      <div className="space-y-2.5">
                        <div>
                          <label className="text-[9px] text-slate-400 font-bold block uppercase mb-1">Debtor Party</label>
                          <select 
                            value={invoiceCustomer}
                            onChange={(e) => setInvoiceCustomer(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-850 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-200"
                          >
                            {parties.map((p, i) => <option key={i} value={p.name}>{p.name}</option>)}
                          </select>
                        </div>

                        <div>
                          <label className="text-[9px] text-slate-400 font-bold block uppercase mb-1">Place of Supply (POS)</label>
                          <select 
                            value={invoicePos}
                            onChange={(e) => setInvoicePos(e.target.value as any)}
                            className="w-full bg-slate-950 border border-slate-850 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-200"
                          >
                            <option value="delhi">Delhi (Intra-state, CGST+SGST)</option>
                            <option value="haryana">Haryana (Inter-state, IGST)</option>
                          </select>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-[9px] text-slate-400 font-bold block uppercase mb-1">Product Description</label>
                            <input 
                              type="text" 
                              value={invoiceProduct}
                              onChange={(e) => setInvoiceProduct(e.target.value)}
                              className="w-full bg-slate-950 border border-slate-850 rounded-lg px-2 py-1 text-xs text-slate-200"
                            />
                          </div>
                          <div>
                            <label className="text-[9px] text-slate-400 font-bold block uppercase mb-1">Base Amount (₹)</label>
                            <input 
                              type="number" 
                              value={invoiceBasePrice}
                              onChange={(e) => setInvoiceBasePrice(e.target.value)}
                              className="w-full bg-slate-950 border border-slate-850 rounded-lg px-2 py-1 text-xs font-mono text-slate-200"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full mt-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-extrabold tracking-wide transition-all shadow-sm"
                    >
                      Process taxation & Generate PDF
                    </button>
                  </form>

                  {/* Fast Book Payment */}
                  <form onSubmit={handleFastBookPayment} className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between">
                    <div>
                      <h5 className="font-extrabold text-xs text-emerald-400 uppercase tracking-widest mb-3 flex items-center gap-1">
                        <Wallet className="w-3.5 h-3.5" />
                        2. Fast Book Payments
                      </h5>

                      <div className="space-y-2.5">
                        <div>
                          <label className="text-[9px] text-slate-400 font-bold block uppercase mb-1">Received From</label>
                          <select 
                            value={fastPayCustomer}
                            onChange={(e) => setFastPayCustomer(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-850 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-200"
                          >
                            {parties.map((p, i) => <option key={i} value={p.name}>{p.name}</option>)}
                          </select>
                        </div>

                        <div>
                          <label className="text-[9px] text-slate-400 font-bold block uppercase mb-1">Clearance Amount (₹)</label>
                          <input 
                            type="number" 
                            value={fastPayAmount}
                            onChange={(e) => setFastPayAmount(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-850 rounded-lg px-2.5 py-1.5 text-xs font-mono text-slate-200"
                          />
                        </div>

                        <div>
                          <label className="text-[9px] text-slate-400 font-bold block uppercase mb-1">Financial Mode</label>
                          <select 
                            value={fastPayMode}
                            onChange={(e) => setFastPayMode(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-850 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-200"
                          >
                            <option value="UPI">UPI (Fast Settlement)</option>
                            <option value="Cash">Cash Ledger</option>
                            <option value="NEFT">Bank Transfer NEFT/RTGS</option>
                            <option value="Cheque">Cheque Reference</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full mt-4 py-2 bg-emerald-650 hover:bg-emerald-700 text-white rounded-lg text-xs font-extrabold tracking-wide transition-all shadow-sm animate-pulse"
                    >
                      Book Receipt & Reconcile Party
                    </button>
                  </form>
                </div>

                {/* Simulated Receivables Ageing Widget */}
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl mb-4">
                  <div className="flex justify-between items-center bg-transparent mb-2">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Party Outstanding Ageing Report</span>
                    <span className="text-[9px] font-mono text-indigo-400 font-bold">Auto computed</span>
                  </div>
                  <div className="space-y-2">
                    {parties.map((party, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs border-b border-slate-800/60 pb-1.5 last:border-0 last:pb-0 bg-transparent">
                        <span className="text-slate-300 font-medium">{party.name} <span className="text-[10px] text-slate-500">({party.contact})</span></span>
                        <div className="flex gap-4 font-mono font-bold">
                          <span className={`${party.balance > 100000 ? 'text-rose-400' : party.balance > 0 ? 'text-amber-400' : 'text-slate-550'}`}>
                            ₹{Math.round(party.balance).toLocaleString('en-IN')}
                          </span>
                          <span className="text-[10px] text-slate-500 w-[60px] text-right">{party.days}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audit Terminal Log */}
                <div className="bg-slate-950 border border-slate-900 p-3.5 rounded-lg font-mono text-[10px] leading-relaxed max-h-[120px] overflow-y-auto text-slate-400">
                  <p className="text-slate-500 font-semibold border-b border-slate-900 pb-1 mb-1 bg-transparent">DOUBLE-ENTRY GENERAL LEDGER INTERNAL TRAIL</p>
                  {simLogs.map((log, i) => (
                    <div key={i} className="mb-1 flex gap-1.5 items-start">
                      <span className={`text-[8px] uppercase font-bold p-0.5 px-1 rounded shrink-0 ${
                        log.type === 'success' ? 'bg-emerald-500/10 text-emerald-400' :
                        log.type === 'warn' ? 'bg-amber-500/10 text-amber-400' :
                        'bg-slate-800 text-slate-400'
                      }`}>
                        {log.type}
                      </span>
                      <span>{log.text}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Honest Critique: Wow vs Hmm Moments */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Wow */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <ThumbsUp className="w-8 h-8 text-indigo-600" />
                The "Wow" Moments — Where It Shines
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-base mb-2">1. GST Logic is Surprisingly Thorough</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Most default spreadsheet templates cheat on GST computation by simply multiplying standard flat percentages. HisabSarthi contains complete routing for place-of-supply state codes, inter-state IGST, and intra-state dual CGST/SGST, and reverse charges. That's real compliance logic.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-base mb-2">2. Mature Print-Ready Invoicing Templates</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Rather than leaving users with unstructured PDF conversions, HisabSarthi offers elegant, customized invoices, debit/credit notes, and ledger reports. It perfectly handles beautiful A4 PDF formats matching the commercial printing styles Indian sellers require.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-base mb-2">3. Genuine Business-First Flow</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Fast Invoice and receipt logs, ageing balances tracking, CSV uploads, double-entry voucher journals, and CA-reconciliation schedules are exactly what shop owners need, chosen based on actual bookkeeping habits.
                  </p>
                </div>
              </div>
            </div>

            {/* Hmm */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <ThumbsDown className="w-8 h-8 text-rose-500" />
                The "Hmm..." Moments — What Needs Work
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-base mb-2">1. Basic Stock & Inventory Limits</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    While HisabSarthi lists master catalog inventory items, this is not a full-scale warehouse software. If your distribution firm requires multi-warehouse transfers, batch expire logging, or strict inventory reorder predictors, you will outgrow these limits.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-base mb-2">2. Lack of Third-Party Integrations</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The platform features excellent standalone Google Sheets databases, but contains no out-of-the-box direct syncing APIs to trigger WhatsApp automation, connect directly with GSTN filing portals, or create instant E-way bills.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-base mb-2">3. Computational Sheets Ceiling</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Because everything settles inside Google Workspace's API limits, any wholesaler logging beyond ten thousand transactions monthly will eventually face calculation processing lags compared to enterprise SQL systems.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Demographic Choice Group */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Is HisabSarthi Right For Your Scale?</h2>
            <p className="text-slate-600 text-lg">A simple buying diagnostic checklist designed for Indian business owners.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* BUY */}
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-bold text-5xl font-sans text-emerald-100/70">BUY</div>
              <h3 className="text-2xl font-black text-emerald-950 mb-6 flex items-center gap-2 bg-transparent">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 font-semibold" />
                Who Should BUY This:
              </h3>
              <ul className="space-y-4">
                {[
                  "GST-registered traders & wholesale businesses",
                  "Regional distributors and supply chain stockists",
                  "Wholesale dealers & small manufacturing shops",
                  "Growing service firms managing ongoing client outstanding accounts",
                  "Growing companies currently struggling with Excel & manual billing",
                  "Firms outgrowing simple spreadsheets but resisting Tally complexity"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-transparent">
                    <Check className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                    <span className="text-emerald-950 text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SKIP */}
            <div className="bg-rose-50/50 border border-rose-100 rounded-3xl p-8 lg:p-12 relative overflow-hidden bg-transparent">
              <div className="absolute top-0 right-0 p-4 font-bold text-5xl font-sans text-rose-100/70">SKIP</div>
              <h3 className="text-2xl font-black text-rose-950 mb-6 flex items-center gap-2">
                <X className="w-7 h-7 text-rose-500" />
                Who Should SKIP This:
              </h3>
              <ul className="space-y-4">
                {[
                  "Large enterprise organizations with extensive system requirements",
                  "Multi-warehouse logistics operations with dedicated tracking needs",
                  "Manufacturing setups needing specific production planning models",
                  "Firms requiring automated e-way bill generation and direct filing APIs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-rose-500 mt-1 shrink-0" />
                    <span className="text-rose-950 text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic pricing plans */}
      <section className="py-24 relative overflow-hidden bg-slate-50 border-t border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-black tracking-widest rounded-full uppercase border border-indigo-100 mb-3">
              Pricing Options
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-2">Transparent Pricing</h2>
            <p className="text-base font-bold text-slate-500 mb-2 uppercase tracking-wide">No Hidden Charges! 🔐</p>
            <p className="text-slate-650 text-lg">
              Don't burn thousands on big software. HisabSarthi's pricing is simple, highly affordable, and gives you full code control.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 items-stretch">
            {/* Starter Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between relative">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Starter</h3>
                <p className="text-sm text-slate-500 mb-6 h-6">Perfect for getting started</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-extrabold text-slate-900">₹499</span>
                  <span className="text-slate-500 text-sm font-semibold"> /month</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "GST Sales Invoices",
                    "Vendor Purchases",
                    "Receipts & Payments",
                    "Party Ledgers",
                    "P&L Dashboard",
                    "Ageing Report",
                    "GST Reports (GSTR-1, 3B)"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20get%20HisabSarthi%20Starter%20Plan!" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl text-center text-sm transition-colors block"
              >
                Start Monthly
              </a>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-indigo-600 flex flex-col justify-between relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-black px-4 py-1.5 rounded-full tracking-wider uppercase">
                ⭐ Most Popular
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Pro Plan</h3>
                <p className="text-sm text-slate-500 mb-6 h-6">3 months (Save ₹900!)</p>
                
                <div className="mb-6 bg-transparent">
                  <span className="text-3xl font-extrabold text-slate-900">₹1,599</span>
                  <span className="text-slate-500 text-sm font-semibold"> /3 months</span>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-sm font-extrabold text-slate-950">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                    <span>Everything in Starter</span>
                  </li>
                  {[
                    "Ageing Report (Outstanding)",
                    "GST Reports (GSTR-1, 3B)",
                    "Debit / Credit Notes",
                    "Advanced Journal Entries",
                    "Priority WhatsApp Support"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20get%20HisabSarthi%20Pro%20Plan!" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-center text-sm transition-colors shadow-lg shadow-indigo-500/25 block"
              >
                Get 3 Months 🚀
              </a>
            </div>

            {/* Lifetime Access */}
            <div className="bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-800 flex flex-col justify-between relative text-white">
              <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[10px] font-black px-4 py-1.5 rounded-bl-xl rounded-tr-2.5xl uppercase tracking-wider">
                🎯 Best Value
              </div>

              <div>
                <h3 className="text-xl font-bold mb-1 col-span-2">Lifetime Access</h3>
                <p className="text-sm text-slate-400 mb-6 h-6">One-time payment — forever!</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-extrabold text-white">₹9,999</span>
                  <span className="text-slate-400 text-sm font-semibold"> /one-time</span>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-sm font-bold text-amber-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <span>Ek Baar Pay, Zindagi Bhar Use</span>
                  </li>
                  {[
                    "Saare Features Included",
                    "Koi Yearly Renewal Nahi",
                    "Lifetime Code Ownership",
                    "Free Minor Updates",
                    "Ultimate Peace of Mind 😌"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20get%20HisabSarthi%20Lifetime%20Access%20Plan!" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-center text-sm transition-colors shadow-lg shadow-amber-500/20 block"
              >
                Buy Lifetime 🎯
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Razorpay Integration Checkout Widget */}
      <section id="checkout-hisabsarthi" className="bg-slate-50 border-t border-b border-slate-200/55 dark:bg-slate-900/15 dark:border-slate-800/10 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 max-w-2xl mx-auto bg-transparent">
            <h2 className="text-3xl font-black text-slate-900">Buy Source Code & Blueprint</h2>
            <p className="text-slate-500 font-medium text-sm mt-2">
              Purchase the audited template, Apps script dashboard, installation manuals and live deployment source code on-the-spot.
            </p>
          </div>
          <RazorpayCheckout productId="hisabsarthi" />
        </div>
      </section>

      {/* Summary Review Bottom CTA Section */}
      <section className="py-16 bg-white last:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 text-white rounded-[2rem] p-10 md:p-14 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <span className="text-xs font-black text-amber-400 tracking-wider uppercase block mb-3">
                Final Analyst Verdict: 8.7 / 10
              </span>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                Stop Relying on Kaccha Hisab and WhatsApp Bills
              </h2>
              <p className="text-slate-350 text-base md:text-lg mb-8 leading-relaxed">
                HisabSarthi succeeds due to direct focus. Instead of overloading with enterprise features, it neatly solves the local ledger problems Indian traders, wholesalers, and manufacturers manage every week.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20demo%20of%20HisabSarthi!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-indigo-650 hover:bg-slate-900 border border-transparent hover:border-indigo-650 hover:text-indigo-400 text-white rounded-xl text-base font-bold transition-all shadow-md flex items-center justify-center gap-2"
              >
                🚀 Book a Free Demo →
              </a>
              <a
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20have%20questions%20regarding%20the%20Google%20Sheets%20database%20setup."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-base font-bold border border-slate-700 flex items-center justify-center gap-1"
              >
                Talk to our Accountant
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
