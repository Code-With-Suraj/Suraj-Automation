import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Package, 
  AlertTriangle, 
  CheckCircle2, 
  ListChecks, 
  FileSpreadsheet, 
  Users, 
  Receipt, 
  Wallet, 
  Smartphone, 
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
  X
} from 'lucide-react';
import { useUser } from '../../contexts/UserContext';
import { useSEO } from '../../hooks/useSEO';
import RazorpayCheckout from '../../components/RazorpayCheckout';

export default function SupplySarthi() {
  const { hasPurchased } = useUser();
  const isPurchased = hasPurchased('supplysarthi');

  // Custom states for interactive elements
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ops' | 'fin' | 'client'>('all');
  const [activeTimelineStep, setActiveTimelineStep] = useState<number>(0);

  // SEO configuration using the review keywords
  useSEO(
    'SupplySarthi Review: Lightweight ERP for SMB Distributors | Suraj Automation',
    'SupplySarthi — An honest, under-the-hood evaluation of the order management, ledger, and GST generation system built on Google Workspace, sheets, and Tally XML integration.',
    'supply management software, order tracking sheets, Tally XML export, FMCG distributor automation, GST invoicing sheets, restaurant supply pricing list, lightweight ERP India'
  );

  // Core review overview
  const reviewMetadata = {
    reviewer: "A B2B Software Analyst Who Has Evaluated 200+ SMB Software Products",
    category: "Supply Chain Management / Order Management / Distributor Automation",
    builtFor: "FMCG distributors, catering suppliers, wholesalers, institutional suppliers, food service vendors, and SMB distribution businesses",
    techStack: "Google Apps Script, Google Sheets Database, HTML/CSS Interface, JavaScript, Tally XML Export Engine, WhatsApp Workflow Support, GST Invoice Engine, Ledger & Credit Management System",
    overallScore: 8.7,
    verdict: 'This is not another "Google Sheet with a form"—it\'s surprisingly close to a lightweight ERP built specifically for Indian SMB distributors.'
  };

  // Feature Deep Dive Data from Review
  const detailedFeatures = [
    {
      id: "client-mgmt",
      title: "Client & Site Management",
      category: "ops",
      score: 4.5,
      description: "Maintains customer records, login credentials, client-specific information, and multiple delivery sites.",
      usecase: "A distributor supplying multiple branches of the same customer (e.g., a café chain across Delhi NCR or Pune) can manage all delivery locations separately.",
      verdict: "Much deeper than a simple customer master. Multi-site support is a genuinely useful business feature.",
      ratingStars: 5,
      ratingHalf: true
    },
    {
      id: "product-catalog",
      title: "Product & Item Management",
      category: "ops",
      score: 4.0,
      description: "Stores item catalog, pricing, units, images, and inventory-related information.",
      usecase: "A catering supplier selling hundreds of SKUs (rice, spices, oils) can maintain standardized product metadata and categories.",
      verdict: "Strong foundation. Enough for most distributors without becoming overly complicated.",
      ratingStars: 4,
      ratingHalf: false
    },
    {
      id: "custom-pricing",
      title: "Client-Specific Price Lists",
      category: "ops",
      score: 5.0,
      description: "Allows different pricing scales for different tier customers.",
      usecase: "Client A buys potatoes at ₹22/kg, while Client B (smaller volume) buys at ₹24/kg. The system auto-applies this during order placement, skipping manual calculations.",
      verdict: "One of the strongest business features in the product. This is where many SMB operations struggle.",
      ratingStars: 5,
      ratingHalf: false
    },
    {
      id: "order-mgmt",
      title: "Order Management System",
      category: "ops",
      score: 5.0,
      description: "Handles order placement, real-time status updates, delivery workflows, order item updates, and status tracking.",
      usecase: "Field sales teams place orders real-time; warehouse operations fulfill them; management tracks dispatch from a central monitor.",
      verdict: "This is clearly the heart of the platform. The workflow feels designed around actual distribution businesses rather than generic CRM logic.",
      ratingStars: 5,
      ratingHalf: false
    },
    {
      id: "gst-invoice",
      title: "Invoice Generation Engine",
      category: "fin",
      score: 5.0,
      description: "Performs daily / monthly recurring invoice generation, automatic GST/IGST/CGST breakdown computation, and amount-to-words translation.",
      usecase: "Wholesale businesses generating hundreds of bills every week without manual Excel copy-paste mistakes.",
      verdict: "Much more mature than expected. Invoice logic is one of the deepest sections of the codebase.",
      ratingStars: 5,
      ratingHalf: false
    },
    {
      id: "ledger-outstanding",
      title: "Ledger & Outstanding Management",
      category: "fin",
      score: 5.0,
      description: "Tracks double ledger entries, running balances, outstanding calculations, credit/debit notes, and receipts.",
      usecase: "Collections and finance teams tracking live outstanding sums for dozens of retailers without manual reconciliation disputes.",
      verdict: "This moves the product beyond basic order management and straight into ERP territory.",
      ratingStars: 5,
      ratingHalf: false
    },
    {
      id: "complaints",
      title: "Issues & Complaint Management",
      category: "client",
      score: 5.0,
      description: "Allows clients to raise complaints, upload proof images for damaged/short-received items, and routes them through approval/rejection lifecycle.",
      usecase: "A restaurant client receives damaged cartons of milk, takes a picture, and uploads it. The backend tracks the audit log for approvals.",
      verdict: "Unexpectedly impressive. Most SMB systems completely ignore post-delivery dispute management.",
      ratingStars: 5,
      ratingHalf: false
    },
    {
      id: "credit-control",
      title: "Credit Note Automation",
      category: "fin",
      score: 5.0,
      description: "Approved complaints trigger automated credit notes that instantly post back and adjust client ledger balances.",
      usecase: "A short-received delivery dispute is resolved, and credit notation is posted automatically without manual debit entries.",
      verdict: "A genuinely business-critical feature that saves administrative credit adjustment delays.",
      ratingStars: 5,
      ratingHalf: false
    },
    {
      id: "tally",
      title: "Tally XML Integration",
      category: "fin",
      score: 4.5,
      description: "Generates and exports sales and receipt vouchers as Tally-compatible XML format.",
      usecase: "Your chartered accountant import/syncs the entire week's sales bills into Tally ERP or Tally Prime in 30 seconds.",
      verdict: "Very valuable for Indian businesses already using Tally. Eliminates double data entry completely.",
      ratingStars: 5,
      ratingHalf: true
    },
    {
      id: "reporting",
      title: "Reporting & Dashboard Layer",
      category: "client",
      score: 4.0,
      description: "Admin dashboards, client dashboards, outstanding summaries, and overall daily operations trend reports.",
      usecase: "Business founders review general sales volume and credit summaries daily instead of chasing staff for updates.",
      verdict: "Useful and practical, though reporting depth could grow further as of future sheets revisions.",
      ratingStars: 4,
      ratingHalf: false
    }
  ];

  // Timeline Simulator Data
  const dailyTimeline = [
    {
      time: "8:00 AM",
      title: "Operations Summary Check",
      task: "Operations manager boots up the SupplySarthi central portal.",
      benefit: "No more scrolling through hundreds of chaotic WhatsApp audio notes and messages first thing in the morning. Today's pending deliveries and master demand checklists are displayed cleanly."
    },
    {
      time: "9:00 AM",
      title: "Client-Wise Customized Orders",
      task: "A Pune-based restaurant client places a fresh order through the dashboard.",
      benefit: "The system automatically references that restaurant's agreed pricing matrix (e.g. Potato at ₹22 instead of the standard ₹24 base rate). Pricing lists match the contract perfectly without manual checking."
    },
    {
      time: "11:30 AM",
      title: "Fulfillment & Dispatch Workflow",
      task: "Warehouse package items are locked and marked as Dispatched.",
      benefit: "A progress update is automatically registered, and delivery teams can view the recipient's delivery spot addresses. Order tracking moves smoothly from prep to fulfillment."
    },
    {
      time: "2:00 PM",
      title: "Dispute / Damaged Goods Logged",
      task: "Client reports a damaged packaging box during unloading, log-raising the dispute.",
      benefit: "Instead of calling the owner or arguing, the delivery boy/client uploads an clear photographic proof to the platform. The issue transitions to an audit log queue."
    },
    {
      time: "4:00 PM",
      title: "Dispute Validation & Auto Credit",
      task: "Admin processes, reviews the uploaded proof, and clicks 'Approve Issue'.",
      benefit: "SupplySarthi auto-generates a credit notation, instantly deducts it from the running ledger balance of the restaurant, and updates outstanding accounts instantly."
    },
    {
      time: "6:00 PM",
      title: "CA Export for Tally Prime",
      task: "Accounts executive exports the day's total verified transactions.",
      benefit: "In 1 click, the system compiles a standardized Tally XML voucher. Financial statements are integrated without a single manual keyboard entry."
    }
  ];

  // Filters for Feature Deep Dive
  const filterCategories = [
    { key: 'all' as const, label: 'All Audited Features' },
    { key: 'ops' as const, label: 'Operations & Pricing' },
    { key: 'fin' as const, label: 'Finance & Invoicing' },
    { key: 'client' as const, label: 'Client Support Portal' }
  ];

  const filteredFeatures = selectedCategory === 'all' 
    ? detailedFeatures 
    : detailedFeatures.filter(f => f.category === selectedCategory);

  return (
    <main className="pt-24 pb-20 bg-slate-50 text-slate-900 font-sans">
      
      {/* 1. Header Meta Badge & Introduction */}
      <section id="review-header" className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-950/50 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* Analyst Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex flex-wrap items-center justify-center gap-2 mb-6 py-2 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-semibold tracking-wide"
            >
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{reviewMetadata.reviewer}</span>
            </motion.div>

            {/* Main Page Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              SupplySarthi — An Honest <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400">
                Review After Looking Under the Hood
              </span>
            </h1>

            {/* Subheading Verdict tagline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-350 max-w-3xl mb-8 leading-relaxed font-medium">
              "{reviewMetadata.verdict}"
            </p>

            {/* Quick Ratings Dashboard */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl bg-slate-900/60 p-4 sm:p-6 rounded-2xl border border-slate-800/80 mb-8 backdrop-blur-sm">
              <div className="text-center p-2 border-r border-slate-800/80 last:border-0">
                <span className="block text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Category</span>
                <span className="block text-sm font-bold text-slate-200">Supply Chain / Wholesale</span>
              </div>
              <div className="text-center p-2 border-r border-slate-800/80 last:border-0">
                <span className="block text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Tech Stack</span>
                <span className="block text-sm font-mono font-bold text-slate-200">Google Workspace</span>
              </div>
              <div className="text-center p-2 border-r border-slate-800/80 last:border-0">
                <span className="block text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Overall Rating</span>
                <span className="block text-lg font-black text-amber-400 flex items-center justify-center gap-1 font-mono">
                  8.7/10
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
                </span>
              </div>
              <div className="text-center p-2 last:border-0">
                <span className="block text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Audit Outcome</span>
                <span className="block text-xs font-bold text-emerald-400 flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Checked & Verified
                </span>
              </div>
            </div>

            {/* Dynamic Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
              <a 
                href="#pricing"
                className="inline-flex px-8 py-4 bg-indigo-650 hover:bg-indigo-700 text-white rounded-xl font-bold text-base transition-all shadow-lg shadow-indigo-500/20 items-center justify-center gap-2 group hover:-translate-y-0.5"
              >
                <span>View Subscription & Lifetime Pricing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20would%20like%20to%20book%20a%20live%20demo%20for%20the%20SupplySarthi%20system."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 bg-slate-900 border border-slate-850 text-slate-250 hover:bg-slate-850 hover:text-white rounded-xl font-bold text-base transition-all items-center justify-center gap-2"
              >
                <span>Book a Live Demo →</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Setup Context (The Operational Reality of Distributors) */}
      <section id="the-chaos-problems" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-rose-600 font-bold text-sm tracking-wide uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>The Setup — Why Does This Product Exist?</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Evaluating the Chaos of Indian SMB Distribution Operations
              </h2>
              
              <p className="text-slate-600 leading-relaxed text-base">
                Imagine you are running a B2B food, grocery, confectionery, or FMCG supply business in 
                <strong> Noida, Pune, Ahmedabad, or Bengaluru</strong>. 
                Your operations run round-the-clock, but you are drowning in daily administrative noise:
              </p>

              <div className="space-y-3.5">
                {[
                  { text: "Orders flooding in through scattered WhatsApp chats & phone calls", label: "Lost communication" },
                  { text: "Custom contract pricing scales (e.g. Rate differences for every custom client)", label: "Pricing errors" },
                  { text: "Delivery agents calling saying quantities/weights changed post-loading", label: "Fulfillment disputes" },
                  { text: "Clients complaints regarding broken, stale, or damaged supply cartons", label: "Post-delivery disputes" },
                  { text: "Accountants seeking invoice lists and outstanding debt tracking sheets", label: "Cash flow delays" },
                  { text: "Everything tracking on registers, standard Excel files, and verbal memory", label: "Information gap" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 bg-rose-50/50 p-3 rounded-xl border border-rose-100">
                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-rose-100 text-rose-600 text-xs font-bold shrink-0 mt-0.5">!</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-rose-700">{item.label}</p>
                      <p className="text-sm font-medium text-slate-700">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-slate-505 text-sm italic border-l-2 border-indigo-505 pl-4 mt-4 font-semibold text-indigo-900">
                "After reviewing the codebase, one thing became obvious: this product wasn't designed by someone sitting in a software company brainstorming features. It feels like it was built by someone who has actually seen distributor operations break in the real world."
              </p>
            </motion.div>

            {/* Solution Canvas preview Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-2xl relative border border-slate-850"
            >
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-emerald-505 text-slate-950 font-black text-xs px-4 py-1 rounded-full uppercase tracking-wider">
                Lightweight ERP Solution
              </div>

              <h3 className="text-xl font-extrabold mb-6 flex items-center gap-2">
                <Store className="w-5 h-5 text-indigo-400" />
                <span>The SupplySarthi Enterprise Integration Matrix</span>
              </h3>

              <p className="text-sm text-slate-350 leading-relaxed mb-6">
                Instead of forcing distributors into expensive subscription ERP setups, SupplySarthi centralizes eleven operational flows into a unified Workspace environment:
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  "Order Management",
                  "Client Profiles",
                  "Site Logistics",
                  "Custom Price Sheets",
                  "Auto GST Invoicing",
                  "Delivery Tracking",
                  "Double-Entry Ledgers",
                  "Credit & Debit Notes",
                  "Complaint Tracking",
                  "Outstanding Alerts",
                  "Tally Prime Sync"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-slate-850 p-2.5 rounded-lg border border-slate-800 text-sm hover:border-slate-700 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-450 shrink-0" />
                    <span className="font-semibold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-indigo-950/50 p-4 rounded-xl border border-indigo-900">
                <div className="flex gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                    <Info className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200 mb-1">A Deeper Ambition</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      "Managing custom multi-location client billing price grids is extremely hard. Most SMB software gives up, but SupplySarthi attempts and solves this complete operational loop."
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* 3. Feature-by-Feature Deep Dive */}
      <section id="feature-deep-dive" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              What's Inside — Feature by Feature Audit
            </h2>
            <p className="text-slate-600 font-medium">
              A granular evaluation of each system subsystem after looking under the hood. Filter by category to investigate specific modules.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {filterCategories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`py-2.5 px-5 rounded-xl font-bold text-sm transition-all duration-150 ${
                  selectedCategory === cat.key 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/10' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feat) => (
              <div 
                key={feat.id} 
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden relative"
              >
                <div className="p-6">
                  
                  {/* Category badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 py-1 px-2.5 rounded-full">
                      {feat.category === 'ops' ? 'Operations' : feat.category === 'fin' ? 'Finance & Invoicing' : 'Support Portal'}
                    </span>
                    <div className="flex items-center gap-1 bg-amber-500/10 text-amber-700 py-1 px-2 rounded-lg text-xs font-bold">
                      <span className="font-mono font-black">{feat.score.toFixed(1)}</span>
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 shrink-0" />
                    </div>
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                    {feat.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-sm text-slate-600 mb-4 h-15 line-clamp-3">
                    {feat.description}
                  </p>

                  <div className="border-t border-slate-100 pt-4 mt-2 space-y-3">
                    {/* Real-world Use Case */}
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide block">Real-world Use Case:</span>
                      <p className="text-xs text-slate-700 leading-relaxed font-semibold mt-1">
                        {feat.usecase}
                      </p>
                    </div>

                    {/* Analyst Verdict */}
                    <div>
                      <span className="text-[11px] font-bold text-indigo-505 uppercase tracking-wide block">Analyst Verdict:</span>
                      <p className="text-sm text-slate-800 leading-relaxed font-medium italic mt-1 text-slate-900 border-l-2 border-indigo-500 pl-2">
                        "{feat.verdict}"
                      </p>
                    </div>
                  </div>

                </div>

                {/* Score bar */}
                <div className="w-full bg-slate-100 h-1.5 flex mt-auto">
                  <div 
                    className={`h-full ${feat.score >= 4.8 ? 'bg-indigo-600' : 'bg-emerald-500'}`} 
                    style={{ width: `${(feat.score / 5) * 100}%` }}
                  ></div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Wow Moments vs Hmmm... (Analyst Insights) */}
      <section id="analyst-insights" className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-950/20 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">Critical Analysis</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2.5">
              The Critical Verdict: "Wow" vs. "Hmm..."
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              An unbiased analyst scorecard detailing where SupplySarthi absolute shines, and where architectural limitations are expected.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            
            {/* Wow Moments */}
            <motion.div 
              className="bg-slate-900/40 border border-emerald-500/20 p-8 rounded-3xl backdrop-blur-sm shadow-xl flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 font-bold text-xs py-1.5 px-3 rounded-full border border-emerald-500/20 mb-6">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>The "Wow" Moments — Where It Genuinely Shines</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-emerald-300 flex items-center gap-2">
                      <span className="font-mono text-emerald-400">01.</span>
                      Complaint Management Isn't Just Cosmetic
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mt-2 pl-6">
                      Most SMB software adds a simple "Raise Ticket" note and calls it a day. SupplySarthi genuinely integrates real-time issue status cycles, validation logs, image receipt proof uploads, and automated credit balance entries.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-emerald-300 flex items-center gap-2">
                      <span className="font-mono text-emerald-400">02.</span>
                      Double-Entry Ledger Logic runs deep
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mt-2 pl-6">
                      Many spreadsheet tools stop after typing out invoices. SupplySarthi continues into payments tracking, running outstanding audits, credit notes adjustment, and automatic ledger recalculations to minimize billing mistakes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-emerald-300 flex items-center gap-2">
                      <span className="font-mono text-emerald-400">03.</span>
                      Client-Specific Pricing is built properly
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mt-2 pl-6">
                      Custom rates is the single biggest operational headache in catering/distribution businesses. Creating a dedicated matching architecture specifically for this demonstrates direct operational empathy.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/10 text-xs text-emerald-400 mt-8">
                <strong>Analysis conclusion:</strong> High structural competence on transactional accounting. Replaces manual checks reliably.
              </div>
            </motion.div>

            {/* Hmm Moments */}
            <motion.div 
              className="bg-slate-900/40 border border-amber-500/20 p-8 rounded-3xl backdrop-blur-sm shadow-xl flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 font-bold text-xs py-1.5 px-3 rounded-full border border-amber-500/20 mb-6">
                  <ThumbsDown className="w-3.5 h-3.5" />
                  <span>The "Hmm..." Moments — Future Considerations</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-amber-300 flex items-center gap-2">
                      <span className="font-mono text-amber-400">01.</span>
                      Google Sheets limits
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mt-2 pl-6">
                      For small and medium distributors, Google Sheets works perfectly. However, enterprise operations processing thousands of items and lines daily will eventually face latency boundaries under sheets data sizes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-amber-300 flex items-center gap-2">
                      <span className="font-mono text-amber-400">02.</span>
                      Inventory Control is not the core focus
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mt-2 pl-6">
                      While there is strong order, billing, and accounting logs, the platform lacks complex warehouse control schemes (such as bin locations, multi-warehouse batch cycles, or strict barcode tracing).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-amber-300 flex items-center gap-2">
                      <span className="font-mono text-amber-400">03.</span>
                      Ecosystem integrations are still limited
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mt-2 pl-6">
                      Though it features robust Tally XML and internal WhatsApp receipt logs, it does not currently integrate default Razorpay buttons or official Indian E-way Bill APIs inside the Sheet backend directly out-of-the-box.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-500/5 p-4 rounded-xl border border-amber-500/10 text-xs text-amber-400 mt-8">
                <strong>Analyst advice:</strong> Ideal for growing SMB wholesalers. Large industrial depots requiring extreme automation should review.
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 5. Real-World Walkthrough (Timeline style!) */}
      <section id="real-world-lifecycle" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            
            {/* Left intro text info */}
            <div className="lg:col-span-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-650 bg-indigo-50 py-1 px-3 rounded-full">
                Interactive Walkthrough
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                A Day in the Life: The 15-Person Pune Wholesale Test
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To evaluate real-world friction, we simulated a <strong>Pune-based food supplier</strong> managing deliveries to 15 restaurant locations. 
                Click through the timeline checkpoints below to see how SupplySarthi resolves classic daily communication breakdown leaks.
              </p>

              {/* Timeline selector step list */}
              <div className="flex flex-col gap-2 relative border-l border-slate-200 ml-3">
                {dailyTimeline.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTimelineStep(idx)}
                    className={`flex items-center gap-3 py-2 pl-4 -ml-[1px] border-l-2 text-left transition-all duration-150 ${
                      activeTimelineStep === idx 
                        ? 'border-indigo-600 font-bold text-indigo-600' 
                        : 'border-transparent font-medium text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <span className="font-mono text-xs text-slate-400">{step.time}</span>
                    <span className="text-sm">{step.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right simulation rendering area */}
            <div className="lg:col-span-3">
              <div className="bg-slate-900 text-slate-100 rounded-[2rem] p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
                
                {/* Header display */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    <span className="font-bold text-sm text-slate-400">Operational Checkpoint:</span>
                    <span className="font-mono text-xs font-bold bg-slate-805 py-1 px-2 rounded bg-slate-800 text-indigo-300">
                      {dailyTimeline[activeTimelineStep].time}
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  </div>
                </div>

                {/* Simulated Task */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                      {dailyTimeline[activeTimelineStep].title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-2 italic leading-relaxed">
                      "{dailyTimeline[activeTimelineStep].task}"
                    </p>
                  </div>

                  {/* Impact Box */}
                  <div className="bg-slate-850 p-4 rounded-xl border border-slate-800 space-y-2 mt-4 bg-slate-800/40">
                    <div className="flex items-start gap-2.5">
                      <div className="h-5 w-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <div>
                        <span className="block text-xs uppercase font-bold tracking-wider text-emerald-400">Impact & Leak Resolution:</span>
                        <p className="text-sm text-slate-300 leading-relaxed mt-1 font-medium">
                          {dailyTimeline[activeTimelineStep].benefit}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-8 pt-4 border-t border-slate-800/80 text-xs text-slate-500">
                  <span>Pune Simulation Test Bed</span>
                  <div className="flex gap-2">
                    <button 
                      disabled={activeTimelineStep === 0}
                      onClick={() => setActiveTimelineStep(prev => Math.max(0, prev - 1))}
                      className="px-2.5 py-1 bg-slate-800 hover:bg-slate-705 rounded border border-slate-700 disabled:opacity-40 text-slate-300"
                    >
                      Prev
                    </button>
                    <button 
                      disabled={activeTimelineStep === dailyTimeline.length - 1}
                      onClick={() => setActiveTimelineStep(prev => Math.min(dailyTimeline.length - 1, prev + 1))}
                      className="px-2.5 py-1 bg-indigo-650 hover:bg-indigo-600 rounded disabled:opacity-40 text-white font-bold"
                    >
                      Next
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Who is it For (Buy vs Skip Checklists) */}
      <section id="audience-checklist" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Buy Column */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-750 px-4 py-1.5 rounded-full font-bold text-xs border border-emerald-100 mb-6">
                  <Check className="w-4 h-4 text-emerald-650 font-black" />
                  <span>Who Should BUY This?</span>
                </div>

                <ul className="space-y-4">
                  {[
                    "FMCG Distributors & Wholesalers managing recurring client bases",
                    "Catering Suppliers delivering daily groceries and goods under contract rates",
                    "Restaurant Supply and cafe wholesale providers seeking self-service lists",
                    "Wholesale Grocery Suppliers managing dynamic items and balances",
                    "Institutional Food Vendors supplying raw dairy, meat, or flours",
                    "B2B distribution companies seeking automated WhatsApp receipts & bills"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <div className="h-5 w-5 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 font-bold" />
                      </div>
                      <span className="text-sm text-slate-700 font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-6 mt-8">
                <p className="text-xs text-slate-500 italic font-medium">
                  "If you are replacing slow Excel and WhatsApp coordination headaches, you will see immediate ROI inside the first week."
                </p>
              </div>
            </div>

            {/* Skip Column */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between" id="who-should-skip">
              <div>
                <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-750 px-4 py-1.5 rounded-full font-bold text-xs border border-rose-100 mb-6">
                  <X className="w-4 h-4 text-rose-650 font-black" />
                  <span>Who Should SKIP This?</span>
                </div>

                <ul className="space-y-4">
                  {[
                    "Manufacturing Companies needing complete batch recipe/production routes mapping",
                    "Large depot operators requiring advanced Warehouse Management Systems (WMS)",
                    "Enterprise giants seeking fully-fledged SAP-level databases and integrations",
                    "Businesses seeking multi-warehouse shipping and complex offline barcodes scanning",
                    "Highly structured inventory lines requiring strict pharmaceutical lot traceability"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <div className="h-5 w-5 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3 font-bold" />
                      </div>
                      <span className="text-sm text-slate-650 font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-6 mt-8">
                <p className="text-xs text-slate-400 italic">
                  "Skip if you requires intense inventory bin tracing or multi-terminal production line controls."
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. ROI Comparison Logic */}
      <section id="roi-calculator" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-650 bg-indigo-50 py-1 px-3 rounded-full">
              Measurable Business Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Don't Compare It Against Software. Compare Against Chaos.
            </h2>
            <p className="text-slate-600 font-medium mt-2">
              The true measure of value is the reduction of dozens of tedious administrative errors. Look at the financial baseline difference of automated workflows.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* The Old manual ways cards (Left column) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-100">
                <h3 className="font-bold text-rose-800 text-base mb-2">What Does Chaos Cost Today?</h3>
                <p className="text-xs text-rose-900 leading-relaxed font-semibold">
                  Supplying orders to 20+ active retail branches manually means you're leaking money through invisible administrative holes: hourly staff costs, incorrect verbiage, forgetting agreed customer rate cards, in-person dispute disputes and running sheet corruptions.
                </p>
              </div>
              
              <div className="bg-indigo-600 text-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-white text-base mb-2">Net Estimated Savings Matrix:</h3>
                <p className="text-indigo-150 text-xs leading-relaxed font-medium">
                  Based on conservative business audits:
                </p>
                <div className="space-y-2 border-t border-indigo-500/30 pt-3 mt-3 text-xs font-bold leading-relaxed">
                  <div className="flex justify-between">
                    <span>Admin Hours Reclaimed:</span>
                    <span className="font-mono">₹5,700/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Invoice Errors Prevented:</span>
                    <span className="font-mono">₹1,500/mo</span>
                  </div>
                  <div className="flex justify-between text-indigo-200">
                    <span>Credit Limits Protected:</span>
                    <span className="font-mono">₹2,500/mo</span>
                  </div>
                  <div className="flex justify-between border-t border-indigo-500/50 pt-2 text-sm text-yellow-300">
                    <span>Total Financial Saving:</span>
                    <span className="font-mono text-base">₹9,700 / Month</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison table grid (Right column) */}
            <div className="lg:col-span-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex justify-between items-center">
                <span className="text-slate-100 font-bold text-sm">Distributor Financial Audit Breakdown</span>
                <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2.0 py-1.0 font-mono font-black rounded border border-indigo-500/30">
                  AUDITED SAVINGS
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-normal divide-y divide-slate-200">
                  <thead className="bg-slate-50 text-[11px] font-extrabold text-slate-500 uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Impact Area</th>
                      <th className="py-3 px-4">Manual Way (WhatsApp/Excel)</th>
                      <th className="py-3 px-4">SupplySarthi Direct Outcome</th>
                      <th className="py-3 px-4 text-right">Mthly Saving*</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-250 text-slate-700">
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900 text-xs uppercase tracking-wide">Order Entry</td>
                      <td className="py-3 px-4 text-xs text-slate-500">40+ laborious hours typing details from WhatsApp lists</td>
                      <td className="py-3 px-4 text-xs text-emerald-650 font-semibold">0 Hours. Customers enter items cleanly via their secure portals.</td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-emerald-600 text-xs">₹2,400</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900 text-xs uppercase tracking-wide">GST Billing</td>
                      <td className="py-3 px-4 text-xs text-slate-500">5+ manual Excel invoicing hours with slow calculation rules</td>
                      <td className="py-3 px-4 text-xs text-emerald-650 font-semibold">5 seconds. Fully automated GST calculations during ledger saves.</td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-emerald-600 text-xs">₹300</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900 text-xs uppercase tracking-wide">Reconciliation</td>
                      <td className="py-3 px-4 text-xs text-slate-500">10+ hours and multiple staff arguments over ledger totals</td>
                      <td className="py-3 px-4 text-xs text-emerald-650 font-semibold">Zero arguments. Verified ledger states are shared via live dashboard.</td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-emerald-600 text-xs">₹3,000</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900 text-xs uppercase tracking-wide">Pricing Quotes</td>
                      <td className="py-3 px-4 text-xs text-slate-500">Verbal rate mismatches, losing money on forgot client pricing lists</td>
                      <td className="py-3 px-4 text-xs text-emerald-650 font-semibold">100% correct pricing list locks dynamically. Zero pricing losses.</td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-emerald-600 text-xs">₹1,500</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900 text-xs uppercase tracking-wide">Credit Control</td>
                      <td className="py-3 px-4 text-xs text-slate-500">Blindly delivering packages to late accounts past credit caps</td>
                      <td className="py-3 px-4 text-xs text-emerald-650 font-semibold">Automatic alert screens block additional orders when limits breach.</td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-emerald-600 text-xs">₹2,500</td>
                    </tr>
                    <tr className="bg-slate-50 font-extrabold text-slate-900">
                      <td className="py-4 px-4 text-xs uppercase tracking-wider font-black">Total Value</td>
                      <td></td>
                      <td></td>
                      <td className="py-4 px-4 text-right font-mono text-emerald-600 text-sm">₹9,700 / mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-50 px-4 py-3 border-t border-slate-100 text-[10px] text-slate-400 font-semibold italic text-center">
                *Estimates calculated and audited based on a team of 3 processing 20 orders/day. Staff wages assumed at ₹15,000/mo. Owner time calculated at ₹300/hour.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. Subscription & Lifetime Pricing Cards */}
      <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-indigo-650 uppercase bg-indigo-50 py-1.5 px-3 rounded-full">
              Pricing Options
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 mb-4">
              Transparent Pricing — Simple & Honest
            </h2>
            <p className="text-slate-600 font-medium">
              Chota start karo subscription se, ya ek baar pay karke lifetime ownership lo — dono options available hain. Zero hidden fees.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch mb-16">
            
            {/* Starter Plan card */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-200 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-all">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Starter Group</span>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Starter</h3>
                <p className="text-xs text-slate-600 mb-6 font-semibold h-10">
                  Naya supplier jiske paas abhi thode clients hain aur growth shuru ho rahi hai
                </p>
                
                <div className="mb-6">
                  <p className="text-3xl font-extrabold text-slate-900">₹999<span className="text-sm font-semibold text-slate-500"> / month</span></p>
                  <p className="text-[10px] text-slate-400 font-bold mt-1">billed monthly</p>
                </div>

                <div className="inline-block bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-lg mb-6">
                  📊 5 Clients · 50 Orders/month
                </div>

                <ul className="space-y-2.5 text-xs text-slate-700 font-semibold mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Order Management System</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Client & Site Master (5 Clients)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> GST Invoice Auto-Generate</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Delivery Challan Generation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Account Ledger & Payments</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Client Self-Service Portal</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Admin Dashboard</li>
                  <li className="flex items-center gap-2 text-slate-400 line-through"><span className="w-4 h-4 shrink-0" /> Unlimited Clients & Multi-Site</li>
                  <li className="flex items-center gap-2 text-slate-400 line-through"><span className="w-4 h-4 shrink-0" /> Client-wise Custom Price List</li>
                  <li className="flex items-center gap-2 text-slate-400 line-through"><span className="w-4 h-4 shrink-0" /> Priority WhatsApp Support</li>
                </ul>
              </div>

              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I'm%20interested%20in%20the%20SupplySarthi%20Starter%20Plan%20(₹999/month)."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl text-sm transition-colors"
                id="cta-starter-plan"
              >
                Get Starter Plan →
              </a>
            </div>

            {/* Pro Plan Card */}
            <div className="bg-white rounded-[2rem] p-8 border-2 border-indigo-600 flex flex-col justify-between relative shadow-xl transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-full tracking-wider">
                ⭐ Most Popular
              </div>

              <div>
                <span className="text-[11px] font-bold text-indigo-605 uppercase tracking-widest block mb-1">Standard Option</span>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Pro</h3>
                <p className="text-xs text-slate-600 mb-6 font-semibold h-10">
                  Growing supplier jise unlimited freedom chahiye bina kisi restriction ke
                </p>
                
                <div className="mb-6">
                  <p className="text-3xl font-extrabold text-slate-900">₹1,499<span className="text-sm font-semibold text-slate-500"> / month</span></p>
                  <p className="text-[10px] text-slate-400 font-bold mt-1">billed monthly</p>
                </div>

                <div className="inline-block bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-lg mb-6">
                  ✨ Unlimited Clients · Unlimited Orders
                </div>

                <ul className="space-y-2.5 text-xs text-slate-700 font-semibold mb-8">
                  <li className="flex items-center gap-2 font-bold text-indigo-700"><CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" /> Everything in Starter</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-650 shrink-0" /> Unlimited Clients & Sites</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-650 shrink-0" /> Unlimited Orders per Month</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-650 shrink-0" /> Client-wise Custom Price List</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-650 shrink-0" /> Sales & Outstanding Reports</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-650 shrink-0" /> Credit & Debit Notes</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-650 shrink-0" /> Demand Summary Reports</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-650 shrink-0" /> Printable Ledger Statements</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-650 shrink-0" /> Priority WhatsApp Support</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-650 shrink-0" /> Future Feature Updates</li>
                </ul>
              </div>

              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I'm%20interested%20in%20the%20SupplySarthi%20Pro%20Plan%20(₹1,499/month)."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm transition-colors shadow-lg shadow-indigo-600/30"
                id="cta-pro-plan"
              >
                Get Pro Plan →
              </a>
            </div>

            {/* Pro Annual Card */}
            <div className="bg-slate-900 border border-slate-800 text-white rounded-[2rem] p-8 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-bl-xl rounded-tr-[2rem] tracking-wider">
                🔥 Best Value
              </div>

              <div>
                <span className="text-[11px] font-bold text-rose-400 uppercase tracking-widest block mb-1">Annual Deal</span>
                <h3 className="text-2xl font-black mb-2 text-white">Pro Annual</h3>
                <p className="text-xs text-slate-400 mb-6 font-semibold h-10">
                  Ek saal ek saath pay karo — 13 months ka fayda, sab kuch unlimited
                </p>
                
                <div className="mb-6">
                  <p className="text-xs text-rose-450 font-bold line-through mb-1">₹1,499 × 12 = ₹17,988/year</p>
                  <p className="text-3xl font-extrabold">₹10,999<span className="text-sm font-semibold text-slate-400"> / year</span></p>
                  <p className="text-[10px] text-slate-400 font-bold mt-1">one annual payment</p>
                </div>

                <div className="inline-block bg-rose-500/20 text-rose-300 text-xs font-bold px-3 py-1.5 rounded-lg mb-6 border border-rose-500/30">
                  🎉 Save ₹6,989 · 👑 13 months ka fayda
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300 font-semibold mb-8">
                  <li className="flex items-center gap-2 font-bold"><CheckCircle2 className="w-4 h-4 text-rose-450 shrink-0" /> Everything in Pro Plan</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-450 shrink-0" /> 13 Months for Price of 12</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-450 shrink-0" /> Unlimited Clients & Orders</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-450 shrink-0" /> Priority Setup Assistance</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-450 shrink-0" /> Dedicated WhatsApp Support</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-450 shrink-0" /> All Future Feature Updates</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-450 shrink-0" /> Lowest Effective Monthly Cost</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-450 shrink-0" /> ★ Lock in price for full year</li>
                </ul>
              </div>

              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I'm%20interested%20in%20the%20SupplySarthi%20Pro%20Annual%20Plan%20(₹10,999/year)."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3.5 px-4 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl text-sm transition-colors shadow-lg shadow-rose-500/20"
                id="cta-pro-annual-plan"
              >
                Get Pro Annual — Best Deal 🔥
              </a>
            </div>

          </div>

          {/* 9. Lifetime Ownership Panel */}
          <div className="bg-gradient-to-br from-indigo-950 to-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-indigo-500/30 text-left relative overflow-hidden text-white" id="lifetime-setup">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 relative z-10">
              
              {/* Left Column details */}
              <div className="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 py-1 px-3.5 bg-amber-500/20 text-amber-300 text-xs font-bold tracking-wider uppercase rounded-full border border-amber-500/30 mb-6">
                    🏆 Lifetime Ownership Option
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                    One-time setup cost. Ek baar pay karo, hamesha apna.
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
                    If you prefer complete code privacy & absolute data ownership without monthly recurring software subscriptions, acquire full lifetime setup keys.
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-slate-400 text-xs font-bold line-through mb-1">Market Setup Rate: ₹60,000+</p>
                  <div className="flex flex-wrap items-baseline gap-2.5">
                    <span className="text-4xl sm:text-5xl font-black text-white">₹19,999</span>
                    <span className="text-indigo-300 font-bold text-sm">One-Time Setup Fee</span>
                  </div>
                  <p className="text-emerald-450 text-xs font-bold mt-2">
                    ✓ No subscriptions ever · ✓ Works on any Google workspace account · ✓ Real source ownership
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://wa.me/918851666208?text=Hi%20Suraj,%20I'm%20interested%20in%20the%20SupplySarthi%20Lifetime%20Access%2520(₹19,999%20one-time%20setup)."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-8 py-4 bg-white text-slate-900 font-bold rounded-xl text-base transition-all shadow-xl hover:bg-slate-100 items-center justify-center gap-2 group shrink-0"
                    id="cta-lifetime-access"
                  >
                    <span>Get Lifetime Access — ₹19,999</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Column checks */}
              <div className="lg:w-1/2 space-y-4">
                
                {/* Check list */}
                <div className="bg-slate-950/60 p-6 rounded-2xl border border-indigo-500/20">
                  <h4 className="font-bold text-base text-white mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-450 shrink-0" />
                    <span>Included in Setup Fee (₹19,999)</span>
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-slate-300 font-semibold">
                    <div className="flex items-start gap-1.5"><span className="text-emerald-455">•</span> Complete SupplySarthi Core</div>
                    <div className="flex items-start gap-1.5"><span className="text-emerald-455">•</span> Client & Multi-Site Master</div>
                    <div className="flex items-start gap-1.5"><span className="text-emerald-455">•</span> Unlimited Client portals</div>
                    <div className="flex items-start gap-1.5"><span className="text-emerald-455">•</span> Full Setup & Script Deploy</div>
                    <div className="flex items-start gap-1.5"><span className="text-emerald-455">•</span> 3 Months dedicated support</div>
                    <div className="flex items-start gap-1.5"><span className="text-emerald-455">•</span> Demand Checklist Engine</div>
                    <div className="flex items-start gap-1.5"><span className="text-emerald-455">•</span> Custom Code handoffs</div>
                    <div className="flex items-start gap-1.5"><span className="text-emerald-455">•</span> Training & Staff onboarding</div>
                  </div>
                </div>

                {/* Additional services */}
                <div className="bg-slate-950/60 p-6 rounded-2xl border border-indigo-500/10">
                  <h4 className="font-bold text-base text-white mb-2.5 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>After 3 Months (On-Demand Custom)</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                    <strong className="text-amber-300 font-bold block text-sm mb-1.5">₹5,000 per requested customization block:</strong>
                    Only pay jab actual support requirements arise. Standard charges applied block-by-block for script repairs, sheet design modifications, or major custom features request.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 10. Buy Source Code & Blueprint (Razorpay Payment Widget) */}
      <section className="bg-white py-16 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          <div className="max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Buy Auditor Source Code & Blueprint Pack</h2>
            <p className="text-slate-600 font-semibold">
              Get immediate, direct lifetime access to raw compiled code scripts, Google Workspace blueprints, and audited configuration handbooks via secure transaction.
            </p>
          </div>

          <div className="max-w-lg mx-auto bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm" id="checkout-supplysarthi">
            {isPurchased ? (
              <div className="p-6 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-100 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-650 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-1">Access Unlocked!</h3>
                <p className="text-xs mb-4 font-semibold">Your purchased handbook and deploy codes are available inside the admin panels.</p>
              </div>
            ) : (
              <div className="p-2 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2 text-left">
                    <FileText className="w-5 h-5 text-indigo-650 shrink-0" />
                    <div>
                      <p className="font-bold text-sm text-slate-800">SupplySarthi Audit Bundle</p>
                      <p className="text-[10px] text-slate-400 font-bold">Lifetime developer code & setup guides</p>
                    </div>
                  </div>
                  <span className="font-mono font-extrabold text-base text-slate-900">₹1,499</span>
                </div>
                <RazorpayCheckout productId="supplysarthi" />
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 11. Final CTA Quote & Demo WhatsApp Trigger */}
      <section className="bg-slate-950 text-white py-16 relative overflow-hidden" id="book-demo">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Immediate Operations Return</span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Upgrade? Replace Manual Work with SupplySarthi
            </h2>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              "At whatever price this is offered, the comparison should not be against software. It should be against: Manual Excel work, WhatsApp order chaos, invoice preparation time, outstanding payment delays, accounting mistakes, and client disputes effort. Reclaim hours every week."
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I'm%2520interested%20in%20a%20SupplySarthi%20demo.%20Let's%20coordinate!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-emerald-500/25 items-center justify-center gap-2 group hover:-translate-y-0.5"
                id="cta-whatsapp-demo-button"
              >
                <span>Book a Live Demo →</span>
              </a>
              <a 
                href="#pricing"
                className="inline-flex px-8 py-4 bg-slate-900 border border-slate-800 text-slate-350 hover:bg-slate-800 rounded-xl font-bold text-lg transition-all items-center justify-center gap-2"
              >
                <span>View Price Models</span>
              </a>
            </div>

            <p className="text-xs text-slate-505 font-semibold text-slate-400 mt-2">
              Overall Analyst Audit rating: 8.7/10 - Highly Recommended for B2B distributors.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
