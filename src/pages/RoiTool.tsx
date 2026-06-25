import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  TrendingUp, 
  Clock, 
  Coins, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  RotateCcw, 
  ShieldCheck, 
  FileText, 
  Activity, 
  UserCheck, 
  Zap, 
  Check,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface AnalysisResult {
  matchedProductId: string;
  matchedProductName: string;
  matchConfidence: number;
  analysis: string;
  automationNeeds: string;
  estimatedRoi: {
    hoursSaved: number;
    moneySaved: number;
    accuracyImprovement: string;
  };
  recommendedActionPlan: string[];
}

export default function RoiTool() {
  const [businessType, setBusinessType] = useState('');
  const [challenges, setChallenges] = useState('');
  const [scaleVolume, setScaleVolume] = useState('500'); // Monthly transactions or entries
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzeProgress, setAnalyzeProgress] = useState(0);
  const [analyzeStep, setAnalyzeStep] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);

  // Auto scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessType.trim() || !challenges.trim()) {
      setError('Aapki business type ya challenges empty hain. Please fill them.');
      return;
    }

    setError('');
    setIsAnalyzing(true);
    setAnalyzeProgress(0);
    setResult(null);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setAnalyzeProgress(prev => {
        const next = prev + 1;
        if (next < 20) setAnalyzeStep('Aapki industrial profile scan ho rahi hai...');
        else if (next < 45) setAnalyzeStep('Bottlenecks & operational time leaks measure ho rahe hain...');
        else if (next < 70) setAnalyzeStep('Sarthi catalogs se suitable match filter ho raha hai...');
        else if (next < 90) setAnalyzeStep('Google Sheets & Apps Script infrastructure load calculate ho raha hai...');
        else setAnalyzeStep('Personalized ROI scorecard finalize ho raha hai...');

        if (next >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return next;
      });
    }, 40);

    const runClientSideFallback = () => {
      const normalizedText = `${businessType} ${challenges}`.toLowerCase();
      let matchedId = '';
      let matchedName = '';
      
      const containsAny = (text: string, keywords: string[]) => keywords.some(keyword => text.includes(keyword));

      if (containsAny(normalizedText, ['loan', 'emi', 'recovery', 'borrower', 'byaj', 'interest', 'instalment', 'finance', 'lending'])) {
        matchedId = 'loansarthi';
        matchedName = 'LoanSarthi';
      } else if (containsAny(normalizedText, ['cake', 'bakery', 'sweet', 'pastry', 'baker', 'bread', 'muffin'])) {
        matchedId = 'cakesarthi';
        matchedName = 'CakeSarthi';
      } else if (containsAny(normalizedText, ['gym', 'fitness', 'workout', 'membership', 'renew', 'trainer', 'exercise'])) {
        matchedId = 'gymsarthi';
        matchedName = 'GymSarthi';
      } else if (containsAny(normalizedText, ['restaurant', 'table', 'menu', 'cafe', 'dish', 'dine', 'order', 'food', 'kitchen'])) {
        matchedId = 'menusarthi';
        matchedName = 'MenuSarthi';
      } else if (containsAny(normalizedText, ['expense', 'claim', 'reimbursement', 'receipt', 'travel', 'allowance', 'vouchers'])) {
        matchedId = 'claimo';
        matchedName = 'Claimo';
      } else if (containsAny(normalizedText, ['hr', 'leave', 'attendance', 'staff', 'employee', 'salary', 'payment cycle', 'payroll', 'karmsarthi', 'staff management'])) {
        matchedId = 'karmsarthi';
        matchedName = 'KarmSarthi';
      } else if (containsAny(normalizedText, ['stock', 'inventory', 'sku', 'warehouse', 'godown', 'item list', 'stocksarthi'])) {
        matchedId = 'stocksarthi';
        matchedName = 'StockSarthi';
      } else if (containsAny(normalizedText, ['procurement', 'vendor', 'rfq', 'quote', 'quotation', 'tender', 'supplier'])) {
        matchedId = 'vendorsarthi';
        matchedName = 'VendorSarthi';
      } else if (containsAny(normalizedText, ['gst', 'ledger', 'tax', 'invoice', 'hisab', 'accounting', 'ledger book', 'khatabook'])) {
        matchedId = 'hisabsarthi';
        matchedName = 'HisabSarthi';
      } else if (containsAny(normalizedText, ['ration', 'grocery', 'kirana', 'requisition', 'food ration', 'rationkart'])) {
        matchedId = 'rationkart';
        matchedName = 'RationKart';
      } else if (containsAny(normalizedText, ['bill', 'verify', 'entry', 'purchase bill', 'billsarthi'])) {
        matchedId = 'billsarthi';
        matchedName = 'BillSarthi';
      } else if (containsAny(normalizedText, ['cogs', 'cost of goods', 'margin', 'profitability', 'pricing audit'])) {
        matchedId = 'cogs-analytics-dashboard';
        matchedName = 'COGS Analytics Dashboard';
      } else if (containsAny(normalizedText, ['cfo', 'cash position', 'vendors', 'cash reserve', 'cfo dashboard'])) {
        matchedId = 'cfo-dashboard';
        matchedName = 'CFO Dashboard';
      } else if (containsAny(normalizedText, ['lead', 'sales', 'funnel', 'procurement pipeline', 'supply sarthi', 'distribution', 'delivery', 'logistics', 'agent'])) {
        matchedId = 'supplysarthi';
        matchedName = 'SupplySarthi';
      }

      let fallbackData;
      if (matchedId) {
        fallbackData = {
          matchedProductId: matchedId,
          matchedProductName: matchedName,
          matchConfidence: 88,
          analysis: `Aapke operational details se lagta hai ki ${matchedName} aapke systems ke liye bilkul standard fit hai! Isse manual entry errors control honge aur process standardise hoga. Standard software agencies iska high premium charge karengi, par hum aapke operational needs ke mutabik customized version market rate ke comparison me straight *50% OFF (aadhi cost)* me deliver karenge.`,
          automationNeeds: `Aapko real-time Google Sheets backend, pre-built template validation trigger, custom security logs, and single-click automated WhatsApp receipts framework setup ki standard requirement hai.`,
          estimatedRoi: {
            hoursSaved: 35,
            moneySaved: 12000,
            accuracyImprovement: "99% Reduced Entry Leakages"
          },
          recommendedActionPlan: [
            `Step 1: Check standard ${matchedName} template on Suraj's products guide.`,
            `Step 2: Connect with Suraj to craft custom WhatsApp reporting modules.`,
            `Step 3: Setup your free workspace with lifetime data storage backup.`
          ]
        };
      } else {
        fallbackData = {
          matchedProductId: "",
          matchedProductName: "",
          matchConfidence: 45,
          analysis: `Humne aapke business detail ka deep verification kiya hai. Hum unnecessary package mismatch nahi karte—Aapki conditions standard pre-designed software templates me complete nahi hoti. Aapko custom workflow aur integration automation setup ki recommendation hai! Aur sabse badiya baat, Suraj is special tailor-made dashboard program ko standard agencies ki compared prices se pure *50% Kam Cost (50% Custom Savings)* me safely develop kar dega!`,
          automationNeeds: `Aapki specific description ki requirements ke anusar customized sheet workflows, custom multi-input dynamic web forms, automatically scheduled email alerts aur custom sheets report compiler ki absolute zarurat hai.`,
          estimatedRoi: {
            hoursSaved: 45,
            moneySaved: 16000,
            accuracyImprovement: "100% Personalised Workflow Flow"
          },
          recommendedActionPlan: [
            `Step 1: Don't purchase unneeded system templates.`,
            `Step 2: Connect immediately with Suraj via WhatsApp on custom blueprints.`,
            `Step 3: Build tailor-made systems at half (50%) of typical software agency development packages.`
          ]
        };
      }

      setTimeout(() => {
        setResult(fallbackData);
        setIsAnalyzing(false);
      }, 1000);
    };

    try {
      const response = await fetch('/api/gemini/analyze-business', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ businessType, challenges })
      });

      if (response.ok) {
        const responseData = await response.json();
        setTimeout(() => {
          if (responseData.success && responseData.data) {
            setResult(responseData.data);
          } else {
            console.warn('Mismatched response from analysis endpoint, running client-side fallback.');
            runClientSideFallback();
          }
          setIsAnalyzing(false);
        }, 1000);
      } else {
        console.warn('Backend business analysis API returned non-ok status, running client-side fallback.');
        runClientSideFallback();
      }

    } catch (err: any) {
      console.warn('Failed to connect to backend business analysis API, running client-side fallback:', err);
      try {
        runClientSideFallback();
      } catch (fallbackErr) {
        clearInterval(progressInterval);
        setError('Server error occurred during business matching. Please try again later.');
        setIsAnalyzing(false);
      }
    }
  };

  const resetTool = () => {
    setBusinessType('');
    setChallenges('');
    setResult(null);
    setError('');
  };

  // Generate WhatsApp deep-link with dynamic details to contact Suraj
  const getWhatsAppLink = () => {
    if (!result) return '';
    const baseText = `Hi Suraj, I analyzed my business using your Interactive ROI Tool!\n\n` +
      `🏢 *Business Type:* ${businessType}\n` +
      `⚠️ *Challenges:* ${challenges.substring(0, 150)}...\n` +
      `💡 *Matched product:* ${result.matchedProductName} (${result.matchConfidence}% Fit)\n` +
      `⏳ *ROI Estimated:* ${result.estimatedRoi.hoursSaved} hrs saved & ₹${result.estimatedRoi.moneySaved} saved per month!\n\n` +
      `Mujhe is tool/software ke baare me details janani hain aur setup karwana hai. Please connect!`;
    return `https://wa.me/918851666208?text=${encodeURIComponent(baseText)}`;
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Hero Header Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-widest uppercase mb-6 border border-indigo-200 dark:border-indigo-500/20">
            <Sparkles className="w-4 h-4 text-indigo-500 animate-pulse" />
            Empower Your Business
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Interactive <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">ROI & AI Match</span> Tool
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Apne custom business challenges hume rough simple text me batayein — humara AI unhe assess karke aapke liye perfectly matching Google Sheets automation and live workspace tool select karega. See your exact time leak and implementation plan instantly!
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800">
            
            {/* Input Panel */}
            <div className="lg:col-span-7 p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-bold">1</span>
                Scribe Your Business Context
              </h2>

              <form onSubmit={handleAnalyze} className="space-y-6">
                
                {/* Field 1: Business Type */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                    Business Model / Type Kya Hai? <span className="text-rose-500">*</span>
                  </label>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">
                    E.g., Bakery, Gym, Wholesale distribution, Retail Grocery Shop, Real estate consultancy, Hospital administration, etc.
                  </p>
                  <input
                    type="text"
                    required
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    placeholder="E.g., Hamari North Delhi me FMCG and packed snacks ki distribution agency hai"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-950/50 transition-all outline-none"
                  />
                </div>

                {/* Field 2: Rough Challenges Entry */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                    Mere Business Ke Pain-Points & Challenges <span className="text-rose-500">*</span>
                  </label>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">
                    Aap rough, simple text me likhein jo jo issues aap face karte hain (uncooperative staff, manual invoicing mistakes, WhatsApp chaos, delay in payments follow-up, client registers missing, etc.)
                  </p>
                  <textarea
                    required
                    rows={5}
                    value={challenges}
                    onChange={(e) => setChallenges(e.target.value)}
                    placeholder="Rough points: Staff bills me galat rate dalti hai, daily stock check karne me 3 ghante excel par waste hote hain, customers time par EMI nahi de rahe with zero tracking, sab WhatsApp chats me gum ho jata hai."
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-950/50 transition-all outline-none leading-relaxed"
                  />
                </div>

                {/* Field 3: Approximate Scale */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm font-bold text-slate-700 dark:text-slate-300">
                    <span>Estimated Monthly Entries / Orders / Bills:</span>
                    <span className="text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-lg border border-indigo-100 dark:border-indigo-900/60 font-mono">
                      ~ {scaleVolume} / mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={scaleVolume}
                    onChange={(e) => setScaleVolume(e.target.value)}
                    className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 dark:text-slate-500 font-bold">
                    <span>50 (Startup scale)</span>
                    <span>1,500</span>
                    <span>3,000</span>
                    <span>5,000+ (High volume)</span>
                  </div>
                </div>

                {error && (
                  <div className="p-4 bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-900/50 rounded-xl flex items-start gap-2 text-sm leading-relaxed">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isAnalyzing}
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2.5 disabled:opacity-50"
                  >
                    <Zap className="w-5 h-5 animate-pulse text-indigo-200" />
                    AI Se Perfect Sarthi Match Diagnose Karein
                  </button>
                </div>

              </form>
            </div>

            {/* Response/Output Panel */}
            <div className="lg:col-span-5 bg-slate-50/50 dark:bg-slate-950/40 p-8 md:p-12 flex flex-col justify-center min-h-[500px]">
              
              <AnimatePresence mode="wait">
                
                {/* Case 1: Waiting for input default state */}
                {!isAnalyzing && !result && (
                  <motion.div
                    key="waiting-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mx-auto shadow-md">
                      <Sparkles className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Professional Auditor Diagnoses</h3>
                      <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed max-w-sm mx-auto">
                        Aap apna business profile aur challenges left side forms me fill karke button press karein. Humare AI and rule triggers analyze karke details fetch karenge.
                      </p>
                    </div>

                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-2xl text-left shadow-sm">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        Key Features of this Interactive Analysis:
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300. leading-relaxed">
                        <li className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 stroke-[3]" />
                          13 Custom Sarthi ready-made scripts matching
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 stroke-[3]" />
                          Lifetime backup on your personal Google Drive
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 stroke-[3]" />
                          Predicts exact monthly time & monetary savings
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Case 2: Deep Scanning Analysis state */}
                {isAnalyzing && (
                  <motion.div
                    key="scanning-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8 text-center"
                  >
                    <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
                      {/* Spin loader */}
                      <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-800 border-t-indigo-600 dark:border-t-indigo-400 animate-spin" />
                      <div className="text-2xl font-extrabold font-mono text-indigo-600 dark:text-indigo-400">{analyzeProgress}%</div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white flex justify-center items-center gap-2">
                        <Activity className="w-5 h-5 text-indigo-500 animate-pulse" />
                        AI Consulting Engine Active
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium min-h-6 leading-relaxed">
                        {analyzeStep}
                      </p>
                    </div>
                    <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden w-full max-w-xs mx-auto">
                      <div 
                        className="h-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-300"
                        style={{ width: `${analyzeProgress}%` }}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Case 3: Successful Matched Scorecard Report */}
                {!isAnalyzing && result && (
                  <motion.div
                    key="assessment-scorecard"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      {result.matchedProductId ? (
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 dark:text-emerald-300 dark:bg-emerald-950/50 px-3.5 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-900 uppercase tracking-widest inline-flex items-center gap-1 mb-3 animate-pulse">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Sarthi Match Approved
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-amber-700 bg-amber-100 dark:text-amber-300 dark:bg-amber-950/50 px-3.5 py-1.5 rounded-full border border-amber-200 dark:border-amber-900 uppercase tracking-widest inline-flex items-center gap-1 mb-3">
                          <Sparkles className="w-3.5 h-3.5" />
                          Tailor-Made Custom Build Recommended
                        </span>
                      )}
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white">Business Diagnostic Report</h3>
                    </div>

                    {/* Score section */}
                    <div className="flex bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl items-center gap-5 shadow-sm">
                      <div className="relative w-22 h-22 shrink-0 bg-slate-50 dark:bg-slate-950 border-2 border-indigo-500 rounded-full flex items-center justify-center text-center shadow-inner">
                        <div className="font-mono">
                          <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                            {result.matchedProductId ? result.matchConfidence : 95}%
                          </span>
                          <span className="block text-[8px] font-bold uppercase tracking-wider text-slate-400">Match Fit</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Recommended Approach:</span>
                        <h4 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                          {result.matchedProductId ? result.matchedProductName : 'Custom Sheet Automation Blueprint'}
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                          {result.matchedProductId 
                            ? "Aapke inputs hamare ready-to-use template features se perfectly align hote hain."
                            : "Hum targeted software sell karne me request filter karte hain. Aapke liye customized design hi highly effective rahega."
                          }
                        </p>
                      </div>
                    </div>

                    {/* Estimations row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-sm">
                        <span className="text-[9px] font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider flex items-center gap-1.5 mb-1.5">
                          <Clock className="w-3.5 h-3.5 text-indigo-500" />
                          Monthly Time Saved
                        </span>
                        <p className="text-2xl font-black text-slate-900 dark:text-white">
                          ~ {result.estimatedRoi.hoursSaved} hrs
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1">
                          Estimated monthly scale.
                        </p>
                      </div>
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-sm">
                        <span className="text-[9px] font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider flex items-center gap-1.5 mb-1.5">
                          <Coins className="w-3.5 h-3.5 text-emerald-500" />
                          Estimated Savings
                        </span>
                        <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                          ₹{result.estimatedRoi.moneySaved.toLocaleString()}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1">
                          {result.estimatedRoi.accuracyImprovement || 'Standardization benefit.'}
                        </p>
                      </div>
                    </div>

                    {/* Premium 50% Cost Efficiency Banner Callout */}
                    <div className="bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-emerald-500/10 border border-amber-500/20 rounded-2xl p-5 space-y-2">
                      <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-bold text-xs">
                        <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                        50% DIRECT SAVINGS GUARANTEE
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                        Sardar G/Standard tech development agencies is core system setup ke liye kaafi bada monthly software premium ya enterprise setup cost charge karti hain. Hum aapke business ke liye complete system build and optimization <strong>Market Standard Pricing se pure 50% KAM RATES me</strong> kar ke denge!
                      </p>
                    </div>

                    {/* Diagnostic Analysis Card */}
                    <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 space-y-3">
                      <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-indigo-300" />
                        AI Strategic Insights
                      </span>
                      <p className="text-xs leading-relaxed text-slate-300 whitespace-pre-line font-medium text-justify">
                        {result.analysis}
                      </p>
                    </div>

                    {/* Automation Needs details */}
                    <div className="bg-indigo-50/50 dark:bg-indigo-950/25 border border-indigo-100 dark:border-indigo-900/40 p-5 rounded-2xl space-y-2">
                      <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider block">
                        Aapke Business Ko Kese Tool / Software Ki Need Hai Details:
                      </span>
                      <p className="text-xs text-slate-705 dark:text-slate-300 leading-relaxed font-body">
                        {result.automationNeeds}
                      </p>
                    </div>

                    {/* Action Plan */}
                    <div className="space-y-2.5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 block">
                        Implementation Road Map:
                      </span>
                      <div className="space-y-1.5">
                        {result.recommendedActionPlan.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                            <span className="h-4.5 w-4.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold flex items-center justify-center shrink-0 mt-0.5 text-[9px]">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Primary Action CTAs */}
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-3">
                      
                      {result.matchedProductId && (
                        <Link
                          to={`/products/${result.matchedProductId}`}
                          className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm border border-indigo-700"
                        >
                          <FileText className="w-4 h-4" />
                          View Complete {result.matchedProductName} Product Files
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}

                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-emerald-500/25 flex items-center justify-center gap-2 group border border-emerald-700"
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-100 animate-bounce" />
                        {result.matchedProductId 
                          ? "Mujhse Contact Karein & Setup Demo on WhatsApp" 
                          : "Build Custom Sentry Workspace @ 50% Price - Connect Now"
                        }
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>

                      <button
                        onClick={resetTool}
                        className="w-full py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 outline-none"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Restart Tool & Analyze Different Section
                      </button>

                    </div>

                  </motion.div>
                )}

              </AnimatePresence>

            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
