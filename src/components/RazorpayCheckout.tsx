import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Lock, 
  Unlock, 
  Copy, 
  Check, 
  FileCode, 
  Download, 
  Info, 
  Zap, 
  Sparkles, 
  ExternalLink, 
  CreditCard,
  AlertCircle
} from 'lucide-react';
import { PRODUCT_SOLUTIONS } from '../data/productSolutions';
import { useUser } from '../contexts/UserContext';

interface RazorpayCheckoutProps {
  productId: string;
}

// Extend Window interface for Razorpay
declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function RazorpayCheckout({ productId }: RazorpayCheckoutProps) {
  const { user, login, hasPurchased, addPurchaseRecord, getProductSolution } = useUser();
  const solution = getProductSolution(productId);
  const [isPurchased, setIsPurchased] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'guide' | 'code'>('guide');
  const [razorpayError, setRazorpayError] = useState<string | null>(null);

  useEffect(() => {
    if (hasPurchased(productId)) {
      setIsPurchased(true);
    } else {
      setIsPurchased(false);
    }
  }, [productId, user, hasPurchased]);

  // Load Razorpay Checkout Script Dynamically
  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setRazorpayError(null);
    let currentUser = user;
    if (!currentUser) {
      setLoading(true);
      try {
        currentUser = await login();
      } catch (authError) {
        console.error("Auth cancel/failed:", authError);
        setRazorpayError("Sign-in with Google is required to secure your lifetime license and access guides!");
        setLoading(false);
        return;
      }
    }

    setLoading(true);
    const isScriptLoaded = await loadRazorpayScript();

    if (!isScriptLoaded) {
      setRazorpayError("Could not load checkout SDK. Please check your internet connection.");
      setLoading(false);
      return;
    }

    let orderId: string | undefined = undefined;
    let keyId = "rzp_live_Sugpl07IegaqDU"; // Default live Razorpay Key ID
    let amountInPaisa = 149900; // Default standard fallback (₹1499 in paisa)

    // Parse solution price in INR to paisa (value multiplied by 100)
    if (solution && solution.price) {
      const cleanDigits = String(solution.price).replace(/[^\d]/g, '');
      if (cleanDigits) {
        const parsedNode = parseInt(cleanDigits, 10);
        if (!isNaN(parsedNode)) {
          amountInPaisa = parsedNode * 100;
        }
      }
    }

    try {
      // 1. Try to create secure transaction Order ID on the full-stack backend
      const response = await fetch('/api/create-razorpay-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          productId,
          priceString: solution.price,
          productName: solution.name
        })
      });

      if (response.ok) {
        const orderResult = await response.json();
        if (orderResult && orderResult.orderId) {
          orderId = orderResult.orderId;
          keyId = orderResult.keyId || keyId;
          amountInPaisa = orderResult.amount || amountInPaisa;
        }
      } else {
        console.warn("Backend checkout API failed or returned non-ok status, proceeding with client-side direct checkout integration.");
      }
    } catch (backendErr: any) {
      console.warn("Could not reach backend checkout API, proceeding with client-side direct checkout integration:", backendErr);
    }

    try {
      // 2. Initialize Razorpay Options using retrieved Order ID if available, or direct payment fallback
      const options: any = {
        key: keyId,
        amount: amountInPaisa,
        currency: 'INR',
        name: 'Suraj Automation',
        description: `Complete Apps Script & Sheet Code for ${solution?.name || productId}`,
        image: 'https://cdn-icons-png.flaticon.com/512/3062/3062634.png',
        handler: function (responseRes: any) {
          console.log("Payment successful verified ID:", responseRes.razorpay_payment_id);
          completePurchase(responseRes.razorpay_payment_id, responseRes.razorpay_order_id || `order_direct_${Date.now()}`);
        },
        prefill: {
          name: currentUser.displayName || 'Suraj Singh',
          email: currentUser.email || 'suraj.gasdeveloper@gmail.com',
          contact: ''
        },
        notes: {
          product_id: productId,
          product_name: solution?.name || productId
        },
        theme: {
          color: '#4f46e5'
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
          }
        }
      };

      if (orderId) {
        options.order_id = orderId;
      }

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (failRes: any) {
        setRazorpayError(failRes.error.description || "Transaction declined.");
        setLoading(false);
      });
      rzp.open();
    } catch (err: any) {
      console.error(err);
      setRazorpayError(err.message || "Checkout initialization failed.");
      setLoading(false);
    }
  };

  const handleSimulatePayment = async () => {
    setRazorpayError(null);
    let currentUser = user;
    if (!currentUser) {
      setLoading(true);
      try {
        currentUser = await login();
      } catch (authError) {
        console.error("Auth cancel/failed:", authError);
        setRazorpayError("Sign-in with Google is required to simulate and test dashboard operations!");
        setLoading(false);
        return;
      }
    }
    setLoading(true);
    setTimeout(() => {
      completePurchase(`sim_${Date.now()}`, `sim_order_${Date.now()}`);
    }, 1200);
  };

  const completePurchase = async (paymentId = 'simulate_payment', orderId = 'simulate_order') => {
    try {
      await addPurchaseRecord(productId, paymentId, orderId, solution?.price || '₹1,499');
    } catch (e) {
      console.error("Failed to commit purchase to Firestore database:", e);
    }
    setIsPurchased(true);
    setLoading(false);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(solution.appsScriptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Helper to generate text file URL for code download
  const handleDownloadCode = () => {
    const blob = new Blob([solution.appsScriptCode], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${solution.id}-google-apps-script.js`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!solution) {
    return (
      <div className="p-6 bg-red-500/10 text-red-500 rounded-2xl flex items-center gap-3 border border-red-500/20 max-w-xl mx-auto my-12">
        <AlertCircle className="shrink-0 w-6 h-6" />
        <p className="font-semibold text-sm">Product details configurations mismatch (id: "{productId}"). Please contact workspace administrator.</p>
      </div>
    );
  }

  return (
    <div id={`checkout-${solution.id}`} className="max-w-4xl mx-auto px-4 my-16">
      <AnimatePresence mode="wait">
        {!isPurchased ? (
          <motion.div
            key="lock-card"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-500/20 rounded-[2.5rem] shadow-2xl relative overflow-hidden transition-all duration-300"
          >
            {/* Top gradient badge */}
            <div className="absolute top-0 left-0 w-full h-2.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-12 gap-10 items-center">
                
                {/* Product highlight */}
                <div className="md:col-span-7">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-4 border border-indigo-100 dark:border-indigo-500/10">
                    <Sparkles className="w-3.5 h-3.5" />
                    Instant Lifetime Access
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                    Get the Complete Code & Google sheet Template for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">{solution.name}</span>
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                    Skip custom development fees. Purchase the clean, audited Google Workspace blueprint, script dashboard code, and ready-to-use spreadsheet instantly.
                  </p>

                  <ul className="space-y-3.5 mb-2">
                    <li className="flex gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      100% Fully Audited Google Apps Script File
                    </li>
                    <li className="flex gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      Master Google Sheets Template Link (1-Click Copy)
                    </li>
                    <li className="flex gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      Step-by-Step Installation Handbook
                    </li>
                    <li className="flex gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      One-time payment, no monthly SaaS subscriptions
                    </li>
                  </ul>
                </div>

                {/* Checkout pricing box */}
                <div className="md:col-span-5 bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 border border-indigo-100 dark:border-indigo-500/15">
                    <Lock className="w-5 h-5" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-slate-400 line-through">₹4,999</span>
                    <span className="text-xs font-black bg-emerald-500 text-white px-2 py-0.5 rounded-full">70% OFF</span>
                  </div>
                  
                  <span className="text-4xl font-black text-slate-900 dark:text-white leading-none tracking-tight mb-2">
                    {solution.price}
                  </span>
                  <span className="text-xs font-bold text-slate-550 dark:text-slate-400 mb-6">Lifetime Updates & Support</span>

                  {razorpayError && (
                    <div className="mb-4 text-xs font-bold text-red-500 bg-red-100/60 dark:bg-red-500/10 p-2.5 rounded-lg border border-red-500/20 max-w-full">
                      {razorpayError}
                    </div>
                  )}

                  {!user ? (
                    <button
                      onClick={login}
                      disabled={loading}
                      className="w-full py-4 bg-slate-950 dark:bg-slate-900 border border-slate-800 hover:bg-slate-900 hover:border-indigo-500/30 text-white rounded-xl font-bold flex items-center justify-center gap-2.5 shadow-lg shadow-slate-950/20 transition-all cursor-pointer hover:-translate-y-0.5"
                    >
                      {loading ? (
                        <span className="inline-flex h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                      ) : (
                        <>
                          <svg className="w-4.5 h-4.5 mr-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                          </svg>
                          Google Login to Purchase
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      onClick={handlePayment}
                      disabled={loading}
                      className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white rounded-xl font-bold flex items-center justify-center gap-2.5 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer hover:-translate-y-0.5"
                    >
                      {loading ? (
                        <span className="inline-flex h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5" />
                          Pay with Razorpay
                        </>
                      )}
                    </button>
                  )}

                  <p className="mt-4 text-[11px] font-bold text-slate-400 dark:text-slate-500 leading-normal">
                    Secure checkout verified by Razorpay. UPI, cards, and netbanking accepted.
                  </p>



                </div>

              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="unlock-success-section"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Banner of absolute win */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-8 md:p-10 rounded-3xl shadow-xl border border-emerald-400/20 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-black uppercase tracking-wider">
                  <Unlock className="w-3.5 h-3.5" />
                  Product Successfully Unlocked
                </div>
                <h3 className="text-3xl font-black tracking-tight">{solution.name} Complete Source Code</h3>
                <p className="text-emerald-100 font-medium max-w-xl">
                  Thank you for your purchase! You can copy the code directly, make a copy of the pre-configured spreadsheet, and follow step-by-step deploy configurations.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <a
                  href={solution.sheetTemplateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-white text-emerald-700 hover:bg-emerald-50 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-md transition-all uppercase tracking-wider"
                >
                  Make Copy of Sheets Template
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={handleDownloadCode}
                  className="px-6 py-3.5 bg-slate-900 border border-slate-800 text-white hover:bg-slate-800 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-md transition-all uppercase tracking-wider cursor-pointer"
                >
                  Download .js Code
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Layout divided into tabs */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden shadow-xl">
              
              {/* Tab Header Selector */}
              <div className="flex border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-2.5">
                <button
                  onClick={() => setActiveTab('guide')}
                  className={`flex-1 sm:flex-initial px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    activeTab === 'guide'
                      ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow'
                      : 'text-slate-500 hover:text-indigo-500'
                  }`}
                >
                  <Info className="w-4 h-4" />
                  Setup Guide Handbook
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`flex-1 sm:flex-initial px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    activeTab === 'code'
                      ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow'
                      : 'text-slate-500 hover:text-indigo-500'
                  }`}
                >
                  <FileCode className="w-4 h-4" />
                  Google Apps Script File Code
                </button>
              </div>

              {/* Tab content content */}
              <div className="p-6 md:p-10">
                <AnimatePresence mode="wait">
                  {activeTab === 'guide' ? (
                    <motion.div
                      key="guide"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Step-by-Step setup configurations</h4>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                        Follow these exact steps carefully to connect the automated Google script backend:
                      </p>
                      
                      <div className="space-y-4">
                        {solution.setupSteps.map((step, sIdx) => (
                          <div key={sIdx} className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                            <span className="w-7 h-7 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 text-xs font-black rounded-full flex items-center justify-center shrink-0">
                              {sIdx + 1}
                            </span>
                            <span className="text-[14px] font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-start gap-3 bg-indigo-500/10 rounded-2xl p-4 md:p-6 border border-indigo-400/20 max-w-2xl text-slate-600 dark:text-slate-400 mt-6">
                        <Zap className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Need customization support?</h5>
                          <p className="text-xs leading-relaxed">
                            Need custom features or integration with external systems? Get one-on-one customization matching your custom requirements from Suraj. Write on WhatsApp or consult for free.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="code"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900 px-5 py-4 border-b border-slate-200 dark:border-slate-800 rounded-2xl rounded-b-none">
                        <div className="flex items-center gap-2">
                          <span className="flex-shrink-0 w-3 h-3 rounded-full bg-red-400"></span>
                          <span className="flex-shrink-0 w-3 h-3 rounded-full bg-yellow-400"></span>
                          <span className="flex-shrink-0 w-3 h-3 rounded-full bg-green-400"></span>
                          <span className="text-xs font-bold text-slate-400 ml-2 font-mono">Code.gs (Apps Script Engine)</span>
                        </div>

                        <button
                          onClick={copyCode}
                          className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow transition-colors cursor-pointer"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              Copy Code
                            </>
                          )}
                        </button>
                      </div>

                      {/* Clean display block of code */}
                      <div className="relative rounded-2xl rounded-t-none bg-slate-950 p-6 overflow-x-auto border border-slate-800 shadow-inner max-h-[500px] overflow-y-auto font-mono scrollbar-thin">
                        <pre className="text-xs font-semibold text-indigo-200 leading-relaxed whitespace-pre font-mono">
                          <code>{solution.appsScriptCode}</code>
                        </pre>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
