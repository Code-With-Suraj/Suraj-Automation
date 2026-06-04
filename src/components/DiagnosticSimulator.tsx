import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Wallet, 
  Utensils, 
  Truck, 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  Smartphone, 
  FileSpreadsheet, 
  AlertTriangle, 
  RefreshCw, 
  Clock, 
  ChevronRight, 
  TrendingUp, 
  Check,
  Zap,
  DollarSign
} from 'lucide-react';

const industries = [
  { id: 'retail', name: 'Retail Shop / Store', icon: <Building2 className="w-5 h-5" />, recommended: 'rationkart' },
  { id: 'finance', name: 'Finance & EMI Recovery', icon: <Wallet className="w-5 h-5" />, recommended: 'loansarthi' },
  { id: 'fmcg', name: 'Supply & Distribution', icon: <Truck className="w-5 h-5" />, recommended: 'supplysarthi' },
  { id: 'food', name: 'Restaurant / Bakery / Cafe', icon: <Utensils className="w-5 h-5" />, recommended: 'cakesarthi' },
  { id: 'services', name: 'HR / Service Agency', icon: <Briefcase className="w-5 h-5" />, recommended: 'karmsarthi' },
];

const painPoints = [
  { id: 'excel_chaos', label: 'Data is scattered in different WhatsApp chats & Excel sheets', icon: <FileSpreadsheet className="w-4 h-4 text-rose-500" /> },
  { id: 'manual_followups', label: 'Struggling to track outstanding payments & customer dues', icon: <AlertTriangle className="w-4 h-4 text-amber-500" /> },
  { id: 'report_delays', label: 'Taking hours manually compiling sales & daily reports', icon: <Clock className="w-4 h-4 text-indigo-500" /> },
  { id: 'entry_errors', label: 'Staff making mistakes in bills, pricing, or stock counts', icon: <Smartphone className="w-4 h-4 text-emerald-500" /> },
  { id: 'order_mess', label: 'Receiving manually written orders on WhatsApp is chaotic', icon: <RefreshCw className="w-4 h-4 text-sky-500" /> },
];

export default function DiagnosticSimulator() {
  const [selectedIndustry, setSelectedIndustry] = useState('fmcg');
  const [selectedPains, setSelectedPains] = useState<string[]>(['excel_chaos', 'manual_followups']);
  const [volume, setVolume] = useState(500); // monthly transactions/orders
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStep, setScanStep] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Stats calculation based on inputs
  const hoursSaved = Math.round((selectedPains.length * 12) + (volume * 0.08));
  const estimatedSavings = hoursSaved * 350; // average hourly business rate in INR equivalent
  const automationScore = Math.max(15, 100 - (selectedPains.length * 15) - (volume > 2000 ? 20 : volume > 1000 ? 10 : 5));

  const togglePain = (id: string) => {
    setSelectedPains(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const getRecommendedProduct = () => {
    const ind = industries.find(i => i.id === selectedIndustry);
    if (selectedPains.includes('manual_followups') && selectedIndustry === 'finance') {
      return { name: 'LoanSarthi', id: 'loansarthi', desc: 'Custom loan ledger & EMI collection tracker.' };
    }
    if (selectedPains.includes('order_mess') || selectedIndustry === 'fmcg') {
      return { name: 'SupplySarthi', id: 'supplysarthi', desc: 'All-in-one order, distribution & billing web app.' };
    }
    if (selectedPains.includes('entry_errors') && selectedPains.includes('report_delays')) {
      return { name: 'HisabSarthi', id: 'hisabsarthi', desc: 'Ditch papers. Simple Google Sheets GST billing tool.' };
    }
    const recId = ind?.recommended || 'supplysarthi';
    const names: Record<string, string> = {
      rationkart: 'RationKart',
      loansarthi: 'LoanSarthi',
      supplysarthi: 'SupplySarthi',
      cakesarthi: 'CakeSarthi',
      karmsarthi: 'KarmSarthi',
    };
    return { 
      name: names[recId] || 'SupplySarthi', 
      id: recId,
      desc: 'SMEs ke manual processes ko streamline karne ke liye customized toolkit.' 
    };
  };

  const recommendedPrd = getRecommendedProduct();

  // Run the animated scanner
  const handleStartAnalysis = () => {
    setIsScanning(true);
    setScanProgress(0);
    setShowResults(false);
  };

  useEffect(() => {
    if (!isScanning) return;

    const interval = setInterval(() => {
      setScanProgress(prev => {
        const next = prev + 2;
        
        // Dynamic scan text steps
        if (next < 25) setScanStep('Mapping manual operational flow...');
        else if (next < 50) setScanStep('Measuring time leak in WhatsApp & Excel exchanges...');
        else if (next < 75) setScanStep('Analyzing compliance requirements & GST calculation rules...');
        else if (next < 95) setScanStep('Designing Google Workspace App integration schema...');
        else setScanStep('Finalizing ROI scorecard...');

        if (next >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setShowResults(true);
          return 100;
        }
        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [isScanning]);

  // Craft personalized WhatsApp deep-link
  const whatsappText = encodeURIComponent(
    `Hi Suraj, I tried your Interactive Business Automation Scorecard.\n\n` +
    `🏢 Industry: ${industries.find(i => i.id === selectedIndustry)?.name || 'Business'}\n` +
    `⚡ Scale: ~${volume} bills/orders per month\n` +
    `⚙️ My Automation Score: ${automationScore}%\n` +
    `⏳ Predicted Time Leak: ${hoursSaved} hours/month\n` +
    `💡 Recommended System: ${recommendedPrd.name}\n\n` +
    `I want to book my Free Process Audit to replace WhatsApp/Excel chaos.`
  );

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden" id="diagnose">
      {/* Absolute background decoration */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Core grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-mono font-bold tracking-widest uppercase mb-6 border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            ROI & PIPELINE TELEMETRY SIMULATOR
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight text-white">
            Simulate Your <span className="bg-gradient-to-r from-indigo-400 via-blue-300 to-emerald-400 bg-clip-text text-transparent">Automation Score</span> Live
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Measure operational bottlenecks, time leaks, and estimated employee time recovery rates with our live Google Workspace scripting simulator.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-slate-900/40 border border-slate-850 backdrop-blur-md rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            
            {/* Input Side */}
            <div className="lg:col-span-7 p-8 md:p-12 space-y-8">
              
              {/* Step 1 */}
              <div>
                <label className="text-sm font-bold text-slate-400 tracking-wider uppercase block mb-4 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-xs">1</span>
                  Select Your Business Industry
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {industries.map(ind => (
                    <button
                      key={ind.id}
                      onClick={() => setSelectedIndustry(ind.id)}
                      className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all ${
                        selectedIndustry === ind.id 
                          ? 'bg-indigo-600/25 border-indigo-500 text-indigo-200 shadow-[0_4px_20px_rgba(79,70,229,0.15)] font-bold' 
                          : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white'
                      }`}
                    >
                      <div className={`p-2 rounded-xl transition-colors ${
                        selectedIndustry === ind.id ? 'bg-indigo-600 text-white' : 'bg-slate-850 text-slate-400'
                      }`}>
                        {ind.icon}
                      </div>
                      <span className="text-sm leading-tight">{ind.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <label className="text-sm font-bold text-slate-400 tracking-wider uppercase block mb-4 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-xs">2</span>
                  Select Your Pain Points (Choose Multiple)
                </label>
                <div className="space-y-3">
                  {painPoints.map(pain => {
                    const isSelected = selectedPains.includes(pain.id);
                    return (
                      <button
                        key={pain.id}
                        onClick={() => togglePain(pain.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left transition-all ${
                          isSelected 
                            ? 'bg-slate-800/60 border-indigo-500/80 text-white' 
                            : 'bg-slate-950/30 border-slate-850 hover:border-slate-800 text-slate-400 hover:text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3 mr-3">
                          {pain.icon}
                          <span className="text-sm md:text-base leading-relaxed">{pain.label}</span>
                        </div>
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-all ${
                          isSelected ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-slate-700 bg-slate-900'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-bold text-slate-400 tracking-wider uppercase flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-xs">3</span>
                    Estimated Monthly Transactions / Bills
                  </label>
                  <span className="text-lg font-black text-indigo-400 bg-indigo-950/50 px-3 py-1 rounded-lg border border-indigo-900/60">
                    ~{volume.toLocaleString()} / mo
                  </span>
                </div>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-full h-2 bg-slate-850 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                  <div className="flex justify-between text-xs text-slate-500 font-bold px-1">
                    <span>50 (Startup scale)</span>
                    <span>1,500</span>
                    <span>3,000</span>
                    <span>5,000+ (High volume)</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4">
                <button
                  onClick={handleStartAnalysis}
                  disabled={isScanning}
                  className="w-full py-5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white rounded-2xl font-black text-lg transition-all shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.02] flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  <Zap className="w-5 h-5 animate-bounce" />
                  Analyze My Business Workflow Now
                </button>
              </div>

            </div>

            {/* Results Output Side */}
            <div className="lg:col-span-5 bg-slate-950/60 p-8 md:p-12 flex flex-col justify-center relative min-h-[450px]">
              
              <AnimatePresence mode="wait">
                
                {/* 1. Default Callout State */}
                {!isScanning && !showResults && (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <Sparkles className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">Unlock Diagnostic Analysis</h3>
                      <p className="text-slate-400 mt-2 text-sm leading-relaxed max-w-sm mx-auto">
                        Fill in your business details on the left and click "Analyze" to see your predicted local labor savings and custom software match.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-left">
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Why take this audit?</p>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          Zero commitment required
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          Uses real active SMB benchmarks
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          Tuned for Indian local staff workflows
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* 2. Loading Scan State */}
                {isScanning && (
                  <motion.div
                    key="scanning"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8 text-center"
                  >
                    <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                      {/* Spin loader */}
                      <div className="absolute inset-0 rounded-full border-4 border-slate-800 border-t-indigo-500 animate-spin"></div>
                      <div className="text-xl font-bold font-mono text-indigo-300">{scanProgress}%</div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-white">Simulating Custom Automations</h3>
                      <span className="text-indigo-400 text-sm font-mono block h-6 animate-pulse">
                        {scanStep}
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden w-full max-w-xs mx-auto">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-300"
                        style={{ width: `${scanProgress}%` }}
                      ></div>
                    </div>
                  </motion.div>
                )}

                {/* 3. Success Audit Scorecard Response */}
                {showResults && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-900 uppercase tracking-widest inline-block mb-3">
                        Analysis Complete
                      </span>
                      <h3 className="text-2xl font-extrabold text-white">Your Automation Score</h3>
                    </div>

                    {/* Gauge Circle */}
                    <div className="flex justify-center items-center gap-6 py-2">
                      <div className="relative w-24 h-24 flex items-center justify-center bg-slate-900 rounded-full border-2 border-slate-800 shadow-inner">
                        <div className="text-3xl font-black text-rose-400">{automationScore}%</div>
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Status:</p>
                        <p className="text-lg font-black text-rose-400">Highly Manual Chaos</p>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">High error risk & manual overhead leaks hours daily.</p>
                      </div>
                    </div>

                    {/* Core KPI metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                          <Clock className="w-3.5 h-3.5 text-indigo-400" />
                          Time Lost
                        </div>
                        <p className="text-2xl font-black text-white">{hoursSaved} h<span className="text-xs font-bold text-slate-400">/mo</span></p>
                        <p className="text-[10px] text-slate-500 mt-1">Manual data entry & followups</p>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                          <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                          Revenue Leak
                        </div>
                        <p className="text-2xl font-black text-white">₹{estimatedSavings.toLocaleString()}<span className="text-xs font-bold text-slate-400">/mo</span></p>
                        <p className="text-[10px] text-slate-500 mt-1">Equivalent employee labor time</p>
                      </div>
                    </div>

                    {/* Recommendation Card */}
                    <div className="bg-indigo-950/30 border border-indigo-900/60 p-5 rounded-2xl relative">
                      <div className="absolute top-3 right-4 flex items-center gap-1.5 text-[10px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-950/80 px-2 py-0.5 rounded-full border border-indigo-900">
                        <Sparkles className="w-3 h-3 text-indigo-400" />
                        Best Solution Match
                      </div>
                      <p className="text-xs text-indigo-300 font-bold uppercase tracking-widest">Recommended Sarthi:</p>
                      <h4 className="text-xl font-extrabold text-white mt-1 mb-1.5">{recommendedPrd.name}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-body">{recommendedPrd.desc}</p>
                    </div>

                    {/* Booking CTAs */}
                    <div className="space-y-2.5">
                      <a
                        href={`https://wa.me/918851666208?text=${whatsappText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-emerald-500/20 flex items-center justify-center gap-2 group"
                      >
                        Book Free Audit with Score Card
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                      <p className="text-[10px] text-center text-slate-500 font-medium">
                        Clicking above opens WhatsApp with your diagnostic score pre-loaded.
                      </p>
                    </div>

                  </motion.div>
                )}
                
              </AnimatePresence>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
