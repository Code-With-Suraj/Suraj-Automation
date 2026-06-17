import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { PRODUCT_SOLUTIONS, calculateDiscount } from '../data/productSolutions';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Lock, 
  Unlock, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Code, 
  ShieldCheck,
  CreditCard,
  Share2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import ShareProductModal from './ShareProductModal';

export default function FloatingBuyWidget() {
  const location = useLocation();
  const { hasPurchased, user, getProductSolution } = useUser();
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(() => {
    try {
      return localStorage.getItem('sarthi_buy_widget_collapsed') === 'true';
    } catch {
      return false;
    }
  });


  // Parse path to find if we are on a product solution page
  const pathParts = location.pathname.split('/');
  const isProductPage = pathParts[1] === 'products' && pathParts[2] && pathParts[2] !== '';
  const productId = isProductPage ? pathParts[2] : null;

  // Retrieve matching configuration
  const solution = productId ? getProductSolution(productId) : null;
  const isPurchased = solution ? hasPurchased(solution.id) : false;

  useEffect(() => {
    if (solution) {
      document.body.classList.add('mobile-buy-bar-active');
      return () => {
        document.body.classList.remove('mobile-buy-bar-active');
      };
    }
  }, [solution]);

  if (!solution) return null;

  const handleScrollToCheckout = () => {
    const element = document.getElementById(`checkout-${solution.id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <AnimatePresence>
      {/* Container wrapper */}
      <div className="font-sans">
        
        {/* DESKTOP FLOATING CARD - HANGING RIGHT SIDE */}
        {isCollapsed ? (
          <motion.button
            key={`desktop-collapsed-${solution.id}`}
            onClick={() => {
              setIsCollapsed(false);
              localStorage.setItem('sarthi_buy_widget_collapsed', 'false');
            }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            whileHover={{ x: -2 }}
            className="hidden lg:flex fixed right-0 top-[35%] z-50 flex items-center gap-2.5 bg-slate-950/95 border-l border-y border-slate-800 backdrop-blur-md text-white rounded-l-2xl py-3.5 px-4 shadow-[0_15px_30px_rgba(0,0,0,0.3)] cursor-pointer group transition-all duration-200 border-r-0"
          >
            <ChevronLeft className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
            <div className="flex items-center gap-1.5 text-xs font-bold whitespace-nowrap tracking-wide leading-none select-none">
              <span className="text-slate-300">View Blueprint</span>
              <span className="text-slate-500">•</span>
              <span className="text-indigo-400 font-extrabold">{solution.price || '₹1,499'}</span>
            </div>
          </motion.button>
        ) : (
          <motion.div
            key={`desktop-${solution.id}`}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="hidden lg:flex fixed right-6 top-[25%] z-45 w-[300px] flex-col bg-slate-900/95 border border-slate-800 backdrop-blur-md rounded-2xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_20px_rgba(79,70,229,0.15)] hover:border-indigo-500/40 hover:shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(79,70,229,0.25)] transition-all duration-300 relative"
          >
            {/* Collapse toggle handle */}
            <button
              onClick={() => {
                setIsCollapsed(true);
                localStorage.setItem('sarthi_buy_widget_collapsed', 'true');
              }}
              className="absolute -left-3.5 top-1/2 -translate-y-1/2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 p-1.5 rounded-full cursor-pointer shadow-md transition-all z-50 flex items-center justify-center hover:scale-110 hover:border-slate-600"
              title="Minimize panel (improve readability)"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Subtle accent glow top border */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

            {/* Tag & Status Indicator */}
            <div className="flex justify-between items-center mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                {isPurchased ? 'Unlocked' : solution.marketPrice ? `${calculateDiscount(solution.price || '₹1,499', solution.marketPrice)}% Promo Off` : '70% Limited Off'}
              </span>
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isPurchased ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400 animate-pulse'}`}></span>
                <span className="text-[10px] font-bold text-slate-400 select-none">
                  {isPurchased ? 'Audited handbook active' : 'Audited Code'}
                </span>
              </div>
            </div>

            {/* Heading */}
            <h4 className="text-sm font-bold text-slate-400 mb-1 leading-none uppercase tracking-wider">
              {solution.name} Blueprint
            </h4>
            <h3 className="text-lg font-black text-white leading-tight mb-3">
              {isPurchased ? 'Source Code Unlocked' : 'Get Complete Source Code'}
            </h3>

            {/* Short description */}
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              {isPurchased 
                ? 'Make a copy of your verified Google Spreadsheet template and import Apps Script backend code instantly.' 
                : 'Direct Google Spreadsheet template link key-ready with 100% clean Google Apps Script backend.'}
            </p>

            {/* Specs bullet highlights */}
            <div className="space-y-2 mb-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Full Apps Script Module</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>1-Click Template Setup</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Step-by-Step Guide Book</span>
              </div>
            </div>

            {/* Price Tag & Action */}
            <div className="w-full bg-slate-950/60 rounded-xl p-3 border border-slate-800 mb-4 flex flex-col items-center">
              {isPurchased ? (
                <div className="text-center py-1">
                  <span className="text-xs font-bold text-slate-400 block mb-0.5">Purchased License</span>
                  <span className="text-sm font-black text-emerald-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
                    <Unlock className="w-4 h-4 text-emerald-400" /> Ready to Run
                  </span>
                </div>
              ) : (
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    {solution.marketPrice ? (
                      <span className="text-[10px] font-bold text-slate-500 line-through">{solution.marketPrice}</span>
                    ) : (
                      <span className="text-[10px] font-bold text-slate-500 line-through">₹4,999</span>
                    )}
                    <span className="text-xl font-black text-white leading-none">{solution.price || '₹1,499'}</span>
                  </div>
                  {solution.marketPrice ? (
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-black">
                      {calculateDiscount(solution.price || '₹1,499', solution.marketPrice)}% OFF
                    </span>
                  ) : (
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-1 rounded-md font-bold">
                      One-time buy
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* CTA Primary Action */}
            <div className="flex gap-2">
              {isPurchased ? (
                <button
                  onClick={handleScrollToCheckout}
                  className="flex-grow py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  View Manual
                </button>
              ) : (
                <button
                  onClick={handleScrollToCheckout}
                  className="flex-grow py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-605/35 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <CreditCard className="w-4 h-4" />
                  Buy Code & Blueprint
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsShareOpen(true)}
                className="p-3 bg-slate-800 hover:bg-slate-705 border border-slate-700 text-slate-300 hover:text-white rounded-xl transition-all cursor-pointer flex items-center justify-center hover:-translate-y-0.5 shrink-0"
                title="Share solution promotion card"
              >
                <Share2 className="w-4 h-4 text-indigo-400" />
              </button>
            </div>

            {/* Secure details */}
            <div className="flex items-center justify-center gap-1 mt-3.5 text-[9px] font-bold text-slate-500">
              <Lock className="w-3 h-3 shrink-0" />
              <span>Secure 1-Click Checkout by Razorpay</span>
            </div>
          </motion.div>
        )}

        {/* MOBILE STICKY BOTTOM BAR */}
        <motion.div
          key={`mobile-${solution.id}`}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          className="lg:hidden fixed bottom-0 left-0 right-0 z-45 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 py-3.5 px-5 flex items-center justify-between shadow-[0_-15px_30px_rgba(0,0,0,0.5)] safe-bottom"
        >
          {/* Left information snippet */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-black text-slate-400 truncate max-w-[120px]">
                {solution.name} Source
              </span>
              {isPurchased ? null : (
                <span className="text-[9px] bg-emerald-500 text-white font-black px-1.5 py-0.2 rounded">
                  {solution.marketPrice ? `${calculateDiscount(solution.price || '₹1,499', solution.marketPrice)}% OFF` : '70% OFF'}
                </span>
              )}
            </div>
            {isPurchased ? (
              <span className="text-xs font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                <Unlock className="w-3 h-3" /> Unlocked
              </span>
            ) : (
              <div className="flex items-baseline gap-1">
                <span className="text-base font-black text-white">{solution.price || '₹1,499'}</span>
                {solution.marketPrice ? (
                  <span className="text-[9px] font-bold text-slate-500 line-through">{solution.marketPrice}</span>
                ) : (
                  <span className="text-[9px] font-bold text-slate-500 line-through">₹4,999</span>
                )}
              </div>
            )}
          </div>

          {/* Right Action Trigger */}
          <div className="flex gap-2 shrink-0">
            {isPurchased ? (
              <button
                onClick={handleScrollToCheckout}
                className="py-2.5 px-4 bg-emerald-600 text-white rounded-lg font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Handbook
              </button>
            ) : (
              <button
                onClick={handleScrollToCheckout}
                className="py-2.5 px-3.5 bg-indigo-650 text-white rounded-lg font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <CreditCard className="w-3.5 h-3.5" />
                Buy Code
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsShareOpen(true)}
              className="p-2.5 bg-slate-800 border border-slate-750 text-slate-350 rounded-lg flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
              aria-label="Share"
            >
              <Share2 className="w-4 h-4 text-indigo-400" />
            </button>
          </div>
        </motion.div>

        <ShareProductModal 
          isOpen={isShareOpen}
          onClose={() => setIsShareOpen(false)}
          product={{
            id: solution.id,
            name: solution.name,
            tagline: solution.tagline,
            description: solution.description,
            price: solution.price,
            marketPrice: solution.marketPrice || undefined,
            images: solution.images
          }}
        />

      </div>
    </AnimatePresence>
  );
}
