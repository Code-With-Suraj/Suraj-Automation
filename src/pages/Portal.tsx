import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LogIn, 
  LogOut, 
  User as UserIcon, 
  Key, 
  BookOpen, 
  FileCode, 
  ExternalLink, 
  Copy, 
  Check, 
  Download, 
  Mail, 
  MessageSquare, 
  Sparkles, 
  Lock, 
  Unlock, 
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  Settings,
  Search,
  X,
  Youtube,
  Maximize2,
  Minimize2
} from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useUser } from '../contexts/UserContext';
import { PRODUCT_SOLUTIONS, calculateDiscount } from '../data/productSolutions';
import { useSEO } from '../hooks/useSEO';
import { Link, useLocation } from 'react-router-dom';

export default function Portal() {
  useSEO(
    'My Portal | Suraj Automation',
    'Access your purchased Google Workspace automation blueprints, Apps Script codes, and template installation handbooks securely.',
    'apps script dashboard, purchase registry, google workspace blueprint portal'
  );

  const { user, userProfile, purchases, customProducts, loading, login, logout, hasPurchased, isAdmin, getProductSolution } = useUser();
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'guide' | 'code'>('guide');
  const [activeClientFileIndex, setActiveClientFileIndex] = useState<number>(0);
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFullScreenGuide, setIsFullScreenGuide] = useState(false);
  const location = useLocation();
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveClientFileIndex(0);
  }, [selectedProductId]);

  // Scroll to active product section dynamically when product is selected (requirement 3)
  useEffect(() => {
    if (selectedProductId) {
      const timer = setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [selectedProductId]);

  // Filter solutions into purchased vs explore list without duplicates.
  // Custom products with the same id will override the static PRODUCT_SOLUTIONS.
  const solutionsMap = new Map<string, any>();
  Object.values(PRODUCT_SOLUTIONS).forEach(sol => {
    solutionsMap.set(sol.id, sol);
  });
  customProducts.forEach(sol => {
    solutionsMap.set(sol.id, sol);
  });
  const allSolutions = Array.from(solutionsMap.values());
  const filteredSolutions = allSolutions.filter(sol => {
    const q = searchQuery.toLowerCase();
    return (
      (sol.name || '').toLowerCase().includes(q) ||
      (sol.id || '').toLowerCase().includes(q) ||
      (sol.category || '').toLowerCase().includes(q) ||
      (sol.tagline || '').toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pid = params.get('product');
    
    if (pid && hasPurchased(pid)) {
      setSelectedProductId(pid);
    }
  }, [location.search, hasPurchased]);

  const activeSolution = selectedProductId ? getProductSolution(selectedProductId) : null;

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCode = (code: string, id: string) => {
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${id}-apps-script.js`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleGoogleLogin = async () => {
    try {
      await login();
    } catch (e) {
      console.error("Login failed:", e);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-slate-550 dark:bg-slate-950">
        <div className="text-center space-y-4">
          <div className="inline-flex h-12 w-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
          <p className="font-bold text-slate-500 dark:text-slate-400">Loading your secure workspace...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-20 min-h-screen bg-slate-50 dark:bg-slate-950/20 text-slate-950 dark:text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {!user ? (
            /* Sign-In Frame Segment */
            <motion.div
              key="signin"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-2xl mx-auto my-12 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
              
              <div className="p-8 md:p-12 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-3xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-100 dark:border-indigo-500/20">
                  <Key className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                    Access Your Purchased Blueprints
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mx-auto font-medium">
                    Welcome! Log in using Google to browse and download your certified Google Sheets templates, audited Apps Script files, and deployment handbooks.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800 inline-flex items-center gap-3 text-xs font-bold text-slate-600 dark:text-slate-400">
                  <ShieldAlert className="w-4 h-4 text-emerald-500 shrink-0" />
                  All login & transactions are stored and audited safely on Firebase databases.
                </div>

                <div>
                  <button
                    onClick={handleGoogleLogin}
                    className="mx-auto w-full max-w-md py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer hover:-translate-y-0.5"
                  >
                    <LogIn className="w-5 h-5" />
                    Secure Sign In with Google
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Dashboard Segment */
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              {/* Header profile panel */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-md">
                <div className="flex flex-col md:flex-row items-center gap-4.5 text-center md:text-left">
                  {user.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt={user.displayName || 'Profile'} 
                      className="w-18 h-18 rounded-full border-2 border-indigo-500 shadow-md referrerPolicy='no-referrer'"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-18 h-18 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black text-2xl shadow-xl">
                      {(user.displayName || 'U')[0]}
                    </div>
                  )}
                  <div>
                    <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                      Welcome, {user.displayName || 'Developer'}
                    </h2>
                    <p className="text-slate-550 dark:text-slate-400 font-bold mb-1">{user.email}</p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/10">
                      <Sparkles className="w-3.5 h-3.5" />
                      Audited Google Script License Active
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-4">
                  <div className="text-center hidden sm:block">
                    <span className="text-xs uppercase font-extrabold text-slate-400 block mb-0.5">Purchased Solutions</span>
                    <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{purchases.length}</span>
                  </div>
                  {isAdmin && (
                    <Link
                      to="/admin"
                      className="px-5 py-3 border border-indigo-200 text-indigo-750 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-55/10 dark:text-indigo-400 dark:border-indigo-500/20 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <Settings className="w-4 h-4 text-indigo-500" />
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={logout}
                    className="px-5 py-3 border border-slate-200 dark:border-slate-800 hover:bg-slate-55 dark:hover:bg-slate-800 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <LogOut className="w-4 h-4 text-red-500" />
                    Sign Out
                  </button>
                </div>
              </div>

              {/* Main divided view */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Left hand list of products */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex justify-between items-center px-2">
                    <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">My Registry & Blueprint Lists</h3>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">Total: {allSolutions.length}</span>
                  </div>

                  {/* left-pane Search Input bar */}
                  <div className="relative px-1">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                      <Search className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      placeholder="Search blueprints or categories..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-9 py-2.5 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                        title="Clear search"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <div className="space-y-3.5">
                    {filteredSolutions.length === 0 ? (
                      <div className="p-8 text-center bg-white dark:bg-slate-900/20 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold">No templates match your search.</p>
                        <button 
                          onClick={() => setSearchQuery('')}
                          className="mt-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                        >
                          Clear search filter
                        </button>
                      </div>
                    ) : (
                      filteredSolutions.map((sol) => {
                        const unlocked = hasPurchased(sol.id);
                        const isSelected = selectedProductId === sol.id;

                        return (
                          <div
                            key={sol.id}
                            onClick={() => {
                              if (unlocked) {
                                setSelectedProductId(sol.id);
                                setActiveTab('guide');
                              }
                            }}
                            className={`p-4 md:p-5 rounded-2xl border-2 transition-all flex justify-between items-center gap-4 ${
                              unlocked 
                                ? 'cursor-pointer hover:scale-[1.01]' 
                                : ''
                            } ${
                              isSelected 
                                ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg scale-[1.01]' 
                                : unlocked 
                                  ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-600/50 dark:hover:border-indigo-500/50 shadow-sm'
                                  : 'bg-slate-100/40 dark:bg-slate-900/40 border-slate-200/50 dark:border-slate-800/50 opacity-75 hover:opacity-100 hover:border-slate-300 dark:hover:border-slate-700'
                            }`}
                          >
                            <div className="space-y-1.5 min-w-0">
                              <span className={`text-[10px] uppercase font-black tracking-wider ${isSelected ? 'text-indigo-200' : unlocked ? 'text-emerald-500 dark:text-emerald-400' : 'text-slate-400'}`}>
                                {sol.id}
                              </span>
                              <h4 className="font-bold text-[15px] truncate max-w-[200px] leading-snug">
                                {sol.name}
                              </h4>
                              <p className={`text-xs font-semibold ${isSelected ? 'text-indigo-200' : 'text-slate-500 dark:text-slate-400'} flex items-center flex-wrap gap-1`}>
                                <span>Blueprint Price:</span> 
                                <span className={`font-black ${isSelected ? 'text-white' : 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-1.5 py-0.5 rounded-md'}`}>{sol.price || "₹1,499"}</span>
                                {sol.marketPrice && (
                                  <>
                                    <span className="text-[10px] line-through opacity-70">{sol.marketPrice}</span>
                                    <span className={`text-[9px] font-black px-1 rounded ${isSelected ? 'bg-indigo-500 text-white' : 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'}`}>
                                      {calculateDiscount(sol.price || "₹1,499", sol.marketPrice)}% OFF
                                    </span>
                                  </>
                                )}
                              </p>
                            </div>

                            <div className="shrink-0" onClick={(e) => { if (unlocked) { e.stopPropagation(); } }}>
                              {unlocked ? (
                                <button
                                  onClick={() => {
                                    setSelectedProductId(sol.id);
                                    setActiveTab('guide');
                                  }}
                                  className={`px-4 py-2 rounded-lg font-bold text-xs shadow-sm transition-all text-center shrink-0 flex items-center gap-1.5 cursor-pointer ${
                                    isSelected 
                                      ? 'bg-white text-indigo-600 hover:bg-slate-100' 
                                      : 'bg-indigo-50 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100'
                                  }`}
                                >
                                  <Unlock className="w-3.5 h-3.5" />
                                  {isSelected ? 'Viewing' : 'Open'}
                                </button>
                              ) : (
                                <a
                                  href={`/products/${sol.id}`}
                                  className="px-3.5 py-2.5 border-2 border-indigo-600 dark:border-indigo-400/30 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-white rounded-xl font-black text-xs text-indigo-600 dark:text-indigo-400 flex items-center gap-1 cursor-pointer transition-all shadow-md shadow-indigo-600/5 hover:-translate-y-0.5 shrink-0"
                                >
                                  <Lock className="w-3 h-3" />
                                  Get @ {sol.price || "₹1,499"}
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </a>
                              )}
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                {/* Right hand expanded view of the active purchase */}
                <div ref={detailsRef} className="lg:col-span-7 scroll-mt-28" id="portal-details-panel">
                  <AnimatePresence mode="wait">
                    {activeSolution ? (
                      <motion.div
                        key={activeSolution.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl"
                      >
                        {/* Selector Tab */}
                        <div className="flex border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-2.5">
                          <button
                            onClick={() => setActiveTab('guide')}
                            className={`flex-1 px-4 py-3 rounded-lg font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeTab === 'guide'
                                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow'
                                : 'text-slate-500 hover:text-indigo-500'
                            }`}
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            Open Product Setup Document
                          </button>
                          <button
                            onClick={() => setActiveTab('code')}
                            className={`flex-1 px-4 py-3 rounded-lg font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeTab === 'code'
                                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow'
                                : 'text-slate-500 hover:text-indigo-500'
                            }`}
                          >
                            <FileCode className="w-3.5 h-3.5" />
                            Source Code
                          </button>
                        </div>

                        {/* Contents */}
                        <div className="p-6 md:p-8 space-y-6">
                          
                          {activeTab === 'guide' && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="space-y-4"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 dark:bg-slate-950/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80">
                                <div>
                                  <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                                    <span>Product Setup Document & Guide</span>
                                    {activeSolution.setupMarkdown && (
                                      <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400 px-2 py-0.5 rounded-full font-mono">MD Docs</span>
                                    )}
                                  </h3>
                                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">Click the button to enter full focus reader view</p>
                                </div>
                                
                                <button
                                  onClick={() => setIsFullScreenGuide(true)}
                                  className="self-start sm:self-auto px-4 py-2 border border-indigo-205 hover:border-indigo-300 dark:border-indigo-505/20 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-500/10 dark:hover:bg-indigo-500/15 rounded-xl text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm shadow-indigo-600/5 hover:-translate-y-0.5"
                                >
                                  <Maximize2 className="w-3.5 h-3.5" />
                                  <span>View Full Screen</span>
                                </button>
                              </div>

                              <div className="overflow-y-auto max-h-[350px] pr-1.5 space-y-3">
                                {activeSolution.setupMarkdown ? (
                                  <div className="p-5 bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-205 dark:border-slate-800/80 shadow-sm leading-relaxed text-sm">
                                    <div className="markdown-body text-slate-800 dark:text-slate-200 space-y-4">
                                      <Markdown
                                        remarkPlugins={[remarkGfm]}
                                        components={{
                                          h1: ({ children }) => <h1 className="text-xl font-black text-indigo-600 dark:text-indigo-400 border-b border-indigo-100 dark:border-indigo-500/20 pb-1.5 mt-5 mb-3">{children}</h1>,
                                          h2: ({ children }) => <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-4 mb-2">{children}</h2>,
                                          h3: ({ children }) => <h3 className="text-base font-bold text-slate-900 dark:text-white mt-3.5 mb-2">{children}</h3>,
                                          p: ({ children }) => <p className="mb-3 text-slate-600 dark:text-slate-350 leading-relaxed font-semibold text-xs md:text-sm">{children}</p>,
                                          ul: ({ children }) => <ul className="list-disc pl-5 mb-3 space-y-1">{children}</ul>,
                                          ol: ({ children }) => <ol className="list-decimal pl-5 mb-3 space-y-1">{children}</ol>,
                                          li: ({ children }) => <li className="text-slate-600 dark:text-slate-300 font-semibold text-xs md:text-sm">{children}</li>,
                                          code: ({ children }) => <code className="px-1.5 py-0.5 bg-slate-105 dark:bg-slate-950/80 border border-slate-250 dark:border-slate-800 rounded text-xs font-mono text-pink-600 dark:text-pink-400 break-all">{children}</code>,
                                          blockquote: ({ children }) => <blockquote className="border-l-4 border-indigo-500 pl-3 py-1 my-3 bg-indigo-55/50 dark:bg-indigo-950/10 italic text-slate-600 dark:text-slate-400 rounded-r-lg text-xs font-medium">{children}</blockquote>,
                                          table: ({ children }) => (
                                            <div className="overflow-x-auto my-3 rounded-xl border border-slate-205 dark:border-slate-800/80 shadow-sm">
                                              <table className="w-full text-left border-collapse text-xs min-w-[500px]">{children}</table>
                                            </div>
                                          ),
                                          thead: ({ children }) => <thead className="bg-slate-50 dark:bg-slate-950/60 text-slate-800 dark:text-slate-200 font-extrabold border-b border-slate-200 dark:border-slate-800 uppercase tracking-wider text-[10px]">{children}</thead>,
                                          tbody: ({ children }) => <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900/20">{children}</tbody>,
                                          tr: ({ children }) => <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-850/20 transition-colors">{children}</tr>,
                                          th: ({ children }) => <th className="p-3 font-bold border-b border-slate-200 dark:border-slate-850">{children}</th>,
                                          td: ({ children }) => <td className="p-3 text-slate-600 dark:text-slate-300 font-medium leading-relaxed border-b border-slate-100 dark:border-slate-850/40">{children}</td>,
                                        }}
                                      >
                                        {activeSolution.setupMarkdown}
                                      </Markdown>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="space-y-3.5">
                                    {activeSolution.setupSteps && activeSolution.setupSteps.length > 0 ? (
                                      activeSolution.setupSteps.map((step, sIdx) => (
                                        <div key={sIdx} className="flex gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-205 dark:border-slate-800/85">
                                          <span className="w-6 h-6 bg-indigo-50 dark:bg-indigo-505/10 text-indigo-650 dark:text-indigo-400 text-xs font-black rounded-full flex items-center justify-center shrink-0 font-mono">
                                            {sIdx + 1}
                                          </span>
                                          <span className="text-[13px] font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                                            {step}
                                          </span>
                                        </div>
                                      ))
                                    ) : (
                                      <div className="p-8 text-center bg-white dark:bg-slate-900/10 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
                                        <p className="text-slate-400 text-xs font-semibold">No setup guide has been written for this product yet.</p>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}

                          {activeTab === 'code' && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="space-y-5"
                            >
                              <div>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                                  Deployable Apps Script Source Code
                                </h3>
                                <p className="text-xs font-semibold text-slate-550 dark:text-slate-400 mt-1">
                                  Copy and paste these script files into your Apps Script editor (found under Extensions &gt; Apps Script in your copied Google Sheet) to activate automation:
                                </p>
                              </div>

                              {(() => {
                                const files = activeSolution.codeFiles && activeSolution.codeFiles.length > 0 
                                  ? activeSolution.codeFiles 
                                  : [{ filename: 'Code.gs', code: activeSolution.appsScriptCode || '' }];
                                const currentFile = files[activeClientFileIndex] || files[0] || { filename: 'Code.gs', code: '' };

                                return (
                                  <div className="space-y-4">
                                    {/* Small file list tags */}
                                    <div className="flex flex-wrap gap-2 p-1.5 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/50 dark:border-slate-850">
                                      {files.map((file, fIdx) => (
                                        <button
                                          key={fIdx}
                                          onClick={() => setActiveClientFileIndex(fIdx)}
                                          className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                                            activeClientFileIndex === fIdx
                                              ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow border border-slate-200/60 dark:border-indigo-500/20'
                                              : 'text-slate-550 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-900 border border-transparent dark:text-slate-400'
                                          }`}
                                        >
                                          <FileCode className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                                          {file.filename}
                                        </button>
                                      ))}
                                    </div>

                                    {/* Beautiful layout-aware Code snippet container */}
                                    <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-850 shadow-xl">
                                      <div className="flex items-center justify-between px-5 py-3 bg-slate-900 border-b border-slate-850">
                                        <div className="flex items-center gap-2">
                                          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                          <span className="font-mono text-xs text-slate-350 ml-4 font-black">{currentFile.filename}</span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                          <button
                                            type="button"
                                            onClick={() => handleDownloadCode(currentFile.code, `${activeSolution.id}-${currentFile.filename.replace(/\.[^/.]+$/, '')}`)}
                                            className="p-1.5 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                                            title="Download File"
                                          >
                                            <Download className="w-3.5 h-3.5" />
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => copyCode(currentFile.code)}
                                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors font-bold font-mono text-[10px] rounded-lg uppercase tracking-wider cursor-pointer"
                                          >
                                            {copied ? (
                                              <>
                                                <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                                              </>
                                            ) : (
                                              <>
                                                <Copy className="w-3.5 h-3.5" /> Copy Code
                                              </>
                                            )}
                                          </button>
                                        </div>
                                      </div>

                                      <div className="p-5 font-mono text-xs leading-relaxed text-slate-200 overflow-x-auto max-h-[350px] bg-slate-950">
                                        <pre className="whitespace-pre-wrap word-break-all select-all">{currentFile.code || "/* No content found for this file */"}</pre>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })()}
                            </motion.div>
                          )}

                          {/* Contact and Audit support helper box */}
                          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div className="flex gap-2.5 items-center">
                              <HelpCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Need help with installation?</span>
                            </div>
                            <div className="flex gap-3">
                              <a
                                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20need%20help%20with%20Code%20Setup"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow shadow-emerald-600/10"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                                WhatsApp Chat
                              </a>
                              <a
                                href="mailto:suraj.gasdeveloper@gmail.com?subject=Code%20Installation%25Support"
                                className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-850 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
                              >
                                <Mail className="w-3.5 h-3.5" />
                                Email Help
                              </a>
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    ) : (
                      /* Fallback view when no template is selected yet */
                      <div className="bg-slate-50 dark:bg-slate-900/40 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800/60 text-slate-450 dark:text-slate-500 flex items-center justify-center mx-auto">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-slate-850 dark:text-white">No solution is currently open for viewing</h4>
                          <p className="text-xs font-semibold text-slate-550 dark:text-slate-400 max-w-sm mx-auto mt-1 leading-normal">
                            Click on the <span className="text-indigo-600 dark:text-indigo-400 font-bold">"Open"</span> button of any purchased solutions on the left to inspect its template url and configuration guide instantly here!
                          </p>
                        </div>
                        
                        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center max-w-sm mx-auto">
                           <a 
                             href="https://www.youtube.com/@suraj.gasdeveloper" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="group flex flex-col items-center justify-center gap-3 p-4 bg-red-50 dark:bg-red-500/10 hover:bg-red-100 dark:hover:bg-red-500/20 text-red-600 dark:text-red-400 font-bold text-sm rounded-2xl transition-all border border-red-100 dark:border-red-500/20 shadow-sm cursor-pointer w-full"
                           >
                             <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                               <Youtube className="w-5 h-5" />
                             </div>
                             Watch Portal Walkthrough on YouTube
                           </a>
                        </div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Full Screen Immersive Markdown Reader Modal */}
      <AnimatePresence>
        {isFullScreenGuide && activeSolution && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white dark:bg-slate-905 w-full max-w-5xl h-[85vh] md:h-[90vh] rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/20">
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-indigo-50 dark:bg-indigo-505/10 text-indigo-650 dark:text-indigo-400 rounded-xl">
                    <BookOpen className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-extrabold text-base md:text-lg text-slate-900 dark:text-white leading-tight">
                      {activeSolution.name} — Full Setup Guide
                    </h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Focus Reader Mode</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsFullScreenGuide(false)}
                  className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-750 dark:hover:text-slate-200 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold border border-transparent hover:border-slate-200 dark:hover:border-slate-700 shadow-sm"
                  title="Close Reader"
                >
                  <Minimize2 className="w-4 h-4 text-slate-500" />
                  <span>Back to Dashboard</span>
                </button>
              </div>

              {/* Content Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-white dark:bg-slate-900">
                <div className="max-w-3xl mx-auto">
                  {activeSolution.setupMarkdown ? (
                    <div className="markdown-body text-slate-800 dark:text-slate-200 leading-relaxed text-sm space-y-5 pb-12">
                      <Markdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h1: ({ children }) => <h1 className="text-3xl font-black text-indigo-650 dark:text-indigo-400 border-b border-indigo-100 dark:border-indigo-505/20 pb-3 mt-8 mb-5 leading-tight">{children}</h1>,
                          h2: ({ children }) => <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-6 mb-4 leading-tight">{children}</h2>,
                          h3: ({ children }) => <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-5 mb-3 leading-tight">{children}</h3>,
                          p: ({ children }) => <p className="mb-5 text-slate-605 dark:text-slate-350 leading-relaxed font-semibold text-sm md:text-base">{children}</p>,
                          ul: ({ children }) => <ul className="list-disc pl-6 mb-5 space-y-2">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal pl-6 mb-5 space-y-2">{children}</ol>,
                          li: ({ children }) => <li className="text-slate-605 dark:text-slate-300 font-semibold text-sm md:text-base leading-relaxed">{children}</li>,
                          code: ({ children }) => <code className="px-2 py-0.5 bg-slate-105 dark:bg-slate-950/80 border border-slate-250 dark:border-slate-800 rounded text-xs font-mono text-pink-600 dark:text-pink-450 break-all">{children}</code>,
                          blockquote: ({ children }) => <blockquote className="border-l-4 border-indigo-550 pl-4 py-2 my-5 bg-indigo-55/50 dark:bg-indigo-950/10 italic text-slate-605 dark:text-slate-400 rounded-r-lg">{children}</blockquote>,
                          table: ({ children }) => (
                            <div className="overflow-x-auto my-5 rounded-2xl border border-slate-205 dark:border-slate-800/80 shadow-md">
                              <table className="w-full text-left border-collapse text-xs md:text-sm min-w-[600px]">{children}</table>
                            </div>
                          ),
                          thead: ({ children }) => <thead className="bg-slate-50 dark:bg-slate-950/60 text-slate-800 dark:text-slate-200 font-extrabold border-b border-slate-202 dark:border-slate-800 uppercase tracking-wider text-xs">{children}</thead>,
                          tbody: ({ children }) => <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900/10">{children}</tbody>,
                          tr: ({ children }) => <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-850/20 transition-colors">{children}</tr>,
                          th: ({ children }) => <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-850">{children}</th>,
                          td: ({ children }) => <td className="p-4 text-slate-600 dark:text-slate-300 font-medium leading-relaxed border-b border-slate-100 dark:border-slate-850/40">{children}</td>,
                        }}
                      >
                        {activeSolution.setupMarkdown}
                      </Markdown>
                    </div>
                  ) : (
                    <div className="space-y-4 pb-12">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Installation Handbook Steps</h4>
                      <div className="space-y-3.5">
                        {activeSolution.setupSteps && activeSolution.setupSteps.length > 0 ? (
                          activeSolution.setupSteps.map((step, sIdx) => (
                            <div key={sIdx} className="flex gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-205 dark:border-slate-800/85">
                              <span className="w-8 h-8 bg-indigo-50 dark:bg-indigo-505/10 text-indigo-650 dark:text-indigo-400 text-sm font-black rounded-full flex items-center justify-center shrink-0 font-mono">
                                {sIdx + 1}
                              </span>
                              <span className="text-sm font-semibold text-slate-705 dark:text-slate-300 leading-relaxed font-sans">
                                {step}
                              </span>
                            </div>
                          ))
                        ) : (
                          <div className="p-12 text-center bg-slate-50 dark:bg-slate-950/20 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl text-slate-400">
                            No precise steps have been entered for this automation template yet.
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
