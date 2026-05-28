import { useState } from 'react';
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
  Settings
} from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { PRODUCT_SOLUTIONS } from '../data/productSolutions';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';

export default function Portal() {
  useSEO(
    'My Portal | Suraj Automation',
    'Access your purchased Google Workspace automation blueprints, Apps Script codes, and template installation handbooks securely.',
    'apps script dashboard, purchase registry, google workspace blueprint portal'
  );

  const { user, userProfile, purchases, customProducts, loading, login, logout, hasPurchased, isAdmin, getProductSolution } = useUser();
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'blueprint' | 'code' | 'guide'>('blueprint');
  const [copied, setCopied] = useState(false);

  // Filter solutions into purchased vs explore list
  const allSolutions = [
    ...Object.values(PRODUCT_SOLUTIONS),
    ...customProducts
  ];
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
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-indigo-505 via-purple-550 to-pink-500"></div>
              
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
                      className="px-5 py-3 border border-indigo-200 text-indigo-750 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-55/10 dark:text-indigo-400 dark:border-indigo-505/20 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer"
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

                  <div className="space-y-3.5">
                    {allSolutions.map((sol) => {
                      const unlocked = hasPurchased(sol.id);
                      const isSelected = selectedProductId === sol.id;

                      return (
                        <div
                          key={sol.id}
                          className={`p-4 md:p-5 rounded-2xl border-2 transition-all flex justify-between items-center gap-4 ${
                            isSelected 
                              ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg' 
                              : unlocked 
                                ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                                : 'bg-slate-105/40 dark:bg-slate-900/40 border-slate-200/50 dark:border-slate-800/50 opacity-75 hover:opacity-100 hover:border-slate-300 dark:hover:border-slate-700'
                          }`}
                        >
                          <div className="space-y-1 min-w-0">
                            <span className={`text-[10px] uppercase font-black tracking-wider ${isSelected ? 'text-indigo-150' : unlocked ? 'text-emerald-500 dark:text-emerald-400' : 'text-slate-400'}`}>
                              {sol.id}
                            </span>
                            <h4 className="font-bold text-[15px] truncate max-w-[200px] leading-snug">
                              {sol.name}
                            </h4>
                            <p className={`text-xs truncate ${isSelected ? 'text-indigo-100' : 'text-slate-400'}`}>
                              Blueprint price: {sol.price}
                            </p>
                          </div>

                          <div className="shrink-0">
                            {unlocked ? (
                              <button
                                onClick={() => {
                                  setSelectedProductId(sol.id);
                                  setActiveTab('blueprint');
                                }}
                                className={`px-4 py-2 rounded-lg font-bold text-xs shadow-sm transition-all text-center shrink-0 flex items-center gap-1.5 cursor-pointer ${
                                  isSelected 
                                    ? 'bg-white text-indigo-600 hover:bg-slate-100' 
                                    : 'bg-indigo-50 dark:bg-indigo-505/15 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100'
                                }`}
                              >
                                <Unlock className="w-3.5 h-3.5" />
                                {isSelected ? 'Viewing' : 'Open'}
                              </button>
                            ) : (
                              <a
                                href={`/products/${sol.id}`}
                                className="px-4 py-2 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 rounded-lg font-bold text-xs text-slate-550 dark:text-slate-400 hover:text-indigo-650 flex items-center gap-1 cursor-pointer transition-colors"
                              >
                                <Lock className="w-3.5 h-3.5" />
                                Buy
                                <ArrowRight className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right hand expanded view of the active purchase */}
                <div className="lg:col-span-7">
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
                            onClick={() => setActiveTab('blueprint')}
                            className={`flex-1 px-4 py-3 rounded-lg font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeTab === 'blueprint'
                                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow'
                                : 'text-slate-500 hover:text-indigo-500'
                            }`}
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            Blueprint URL
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
                            Script Code (.gs)
                          </button>
                          <button
                            onClick={() => setActiveTab('guide')}
                            className={`flex-1 px-4 py-3 rounded-lg font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeTab === 'guide'
                                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow'
                                : 'text-slate-500 hover:text-indigo-500'
                            }`}
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            Handbook Guide
                          </button>
                        </div>

                        {/* Contents */}
                        <div className="p-6 md:p-8 space-y-6">
                          
                          {activeTab === 'blueprint' && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="space-y-5"
                            >
                              <div>
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-black uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 mb-2">
                                  Verified Purchase
                                </span>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                                  {activeSolution.name} Master Blueprint Link
                                </h3>
                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                  Open and copy the preconfigured master spreadsheet containing all the structured tables, validations, dashboards, and triggers definitions:
                                </p>
                              </div>

                              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-dashed border-slate-350 dark:border-slate-800 flex flex-col items-center justify-center text-center space-y-4">
                                <div className="p-4 bg-indigo-50 dark:bg-indigo-500/10 rounded-full text-indigo-600 dark:text-indigo-400">
                                  <ExternalLink className="w-8 h-8" />
                                </div>
                                <div>
                                  <h4 className="font-bold text-slate-800 dark:text-white mb-1">Make 1-Click Copy into Drive</h4>
                                  <p className="text-xs text-slate-550 dark:text-slate-400 max-w-sm">This master template contains structural formulas. Hit "File" &gt; "Make a copy" to initialize on your own workspace.</p>
                                </div>
                                <a
                                  href={activeSolution.sheetTemplateUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm tracking-wide flex items-center gap-2 shadow shadow-indigo-650/15"
                                >
                                  Open Google Sheets Template
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </div>
                            </motion.div>
                          )}

                          {activeTab === 'code' && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="space-y-4"
                            >
                              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                                <div>
                                  <h3 className="text-xl font-black text-slate-900 dark:text-white">
                                    Google Apps Script Code
                                  </h3>
                                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Audited Core Engine File</p>
                                </div>

                                <div className="flex gap-2.5">
                                  <button
                                    onClick={() => copyCode(activeSolution.appsScriptCode)}
                                    className="px-3.5 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer"
                                  >
                                    {copied ? (
                                      <>
                                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                                        Copied!
                                      </>
                                    ) : (
                                      <>
                                        <Copy className="w-3.5 h-3.5" />
                                        Copy Code
                                      </>
                                    )}
                                  </button>
                                  <button
                                    onClick={() => handleDownloadCode(activeSolution.appsScriptCode, activeSolution.id)}
                                    className="px-3.5 py-2 bg-slate-900 border border-slate-800 text-white hover:bg-slate-800 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer"
                                  >
                                    <Download className="w-3.5 h-3.5" />
                                    Download .js
                                  </button>
                                </div>
                              </div>

                              <div className="relative rounded-2xl bg-slate-950 p-5 overflow-x-auto border border-slate-800 shadow-inner max-h-[380px] overflow-y-auto font-mono scrollbar-thin">
                                <pre className="text-xs font-semibold text-indigo-300 leading-relaxed whitespace-pre font-mono">
                                  <code>{activeSolution.appsScriptCode}</code>
                                </pre>
                              </div>
                            </motion.div>
                          )}

                          {activeTab === 'guide' && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="space-y-4"
                            >
                              <div>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                                  Detailed Installation Handbook
                                </h3>
                                <p className="text-xs font-semibold text-slate-550 dark:text-slate-400">Follow these instructions to link spreadsheet backend automation triggers:</p>
                              </div>

                              <div className="space-y-3.5 overflow-y-auto max-h-[340px] pr-1">
                                {activeSolution.setupSteps.map((step, sIdx) => (
                                  <div key={sIdx} className="flex gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/85">
                                    <span className="w-6 h-6 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 text-xs font-black rounded-full flex items-center justify-center shrink-0">
                                      {sIdx + 1}
                                    </span>
                                    <span className="text-[13px] font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                                      {step}
                                    </span>
                                  </div>
                                ))}
                              </div>
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
                            Click on the <span className="text-indigo-600 dark:text-indigo-400 font-bold">"Open"</span> button of any purchased solutions on the left to inspect its script file, template url, and configuration guide instantly here!
                          </p>
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
    </main>
  );
}
