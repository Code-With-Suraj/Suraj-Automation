import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Copy, Check, Share2, Send, Sparkles, MessageSquare, Info
} from 'lucide-react';
import { calculateDiscount } from '../data/productSolutions';

interface ShareProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    tagline?: string;
    description?: string;
    price: string;
    marketPrice?: string;
    images?: string[];
  };
}

export default function ShareProductModal({ isOpen, onClose, product }: ShareProductModalProps) {
  const [copied, setCopied] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const shareUrl = `${window.location.origin}/products/${product.id}`;
  
  const discount = calculateDiscount(product.price, product.marketPrice);
  
  // Format structured sharing message
  const discountBadge = discount > 0 ? `🔥 [${discount}% OFF SPECIAL PRICE]` : '';
  const formattedShareMessage = `🚀 *Automate Your Business with ${product.name}!*
🎯 _${product.tagline || 'Automated Sheets & Workflow Blueprint'}_

${product.description ? `*About:* "${product.description}"` : ''}

*⚡ Key Highlights:*
✅ Original copy-paste script automation
✅ Done-for-you Google Sheet template
✅ One-time payment (No server/hosting fee!)

💰 *Exclusive Discount Price:*
💵 *Selling Price:* ${product.price}
🏷️ *Market Price:* ${product.marketPrice || '₹4,999'} ${discountBadge}

🔗 *Get Instant Access & Video Demo here:*
👉 ${shareUrl}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(formattedShareMessage);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${product.name} | Suraj Automation`,
          text: `${product.tagline || ''} - Get it at a special discount.`,
          url: shareUrl
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      handleCopyLink();
    }
  };

  const sendToWhatsApp = () => {
    const waUrl = `https://wa.me/?text=${encodeURIComponent(formattedShareMessage)}`;
    window.open(waUrl, '_blank');
  };

  // Prevent background scroll on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 p-6">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Share Product Blueprint
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Optimized link renders and formatted copy codes
                  </p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-755 transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-6 flex-grow">
              
              {/* WhatsApp Live Simulator preview */}
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400 flex items-center gap-1.5 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> WhatsApp & Social Link Preview Simulator
                </span>
                
                <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl p-4 border border-slate-100 dark:border-slate-850/60 font-sans">
                  {/* Mock message bubble */}
                  <div className="max-w-[420px] bg-[#d9fdd3] dark:bg-[#113f26] text-slate-800 dark:text-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm border border-[#c1f5b0]/45 dark:border-[#154b2d] relative">
                    {/* Tiny tip */}
                    <svg className="absolute top-0 -left-2.5 text-[#d9fdd3] dark:text-[#113f26] w-3 h-3.5" viewBox="0 0 8 13" fill="none"><path d="M0.5 0.5C5.8 4 7 10 7 13V0.5H0.5Z" fill="currentColor"/></svg>
                    
                    {/* Share URL text item */}
                    <p className="text-[#027eb5] dark:text-[#a0d7f5] hover:underline break-all mb-2 select-all leading-relaxed font-semibold">
                      {shareUrl}
                    </p>

                    {/* Meta rendering wrapper */}
                    <div className="bg-[#bfeeb8]/60 dark:bg-[#0e331f]/90 border-l-[3.5px] border-[#34b7f1] rounded-lg overflow-hidden flex flex-col sm:flex-row-reverse shadow-inner">
                      {/* Image placeholder */}
                      <div className="w-full sm:w-28 h-24 sm:h-auto bg-indigo-50 dark:bg-slate-800/80 flex items-center justify-center shrink-0 border-b sm:border-b-0 sm:border-l border-slate-200/20">
                        {product.images && product.images.length > 0 ? (
                          <img 
                            src={product.images[0]} 
                            alt={product.name} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center text-[10px] font-black tracking-tight text-indigo-500 uppercase p-1">
                            <Sparkles className="w-5 h-5 mb-1 text-indigo-500 animate-pulse" />
                            <span>Sarthi Code</span>
                          </div>
                        )}
                      </div>

                      {/* Snippet summary */}
                      <div className="p-3 flex-grow text-left">
                        <h4 className="font-extrabold text-[13.5px] text-slate-900 dark:text-white truncate leading-tight mb-1">
                          {product.name} | Automation Solution
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed line-clamp-2 mb-1.5 font-medium">
                          {discount > 0 ? `${product.price} (${discount}% OFF)` : product.price} — {product.description || 'Pre-configured Apps Script workflows.'}
                        </p>
                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 block mt-auto">
                          SURAJAUTOMATION.IN
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formatted Text copier */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-indigo-500" /> WhatsApp Formatted Marketing Copy
                  </span>
                  <button 
                    onClick={handleCopyMessage}
                    className="p-1 px-3 text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-extrabold rounded-lg hover:bg-indigo-100 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    {copiedMessage ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Copied Text
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy Message
                      </>
                    )}
                  </button>
                </div>

                <div className="relative group">
                  <textarea
                    readOnly
                    value={formattedShareMessage}
                    rows={8}
                    className="w-full bg-slate-50 dark:bg-slate-950 p-4 border border-slate-100 dark:border-slate-800 rounded-2xl text-xs font-mono text-slate-600 dark:text-slate-350 focus:outline-none resize-none select-all focus:ring-1 focus:ring-indigo-100 focus:border-indigo-300"
                  />
                  <div className="absolute top-2.5 right-2 px-15 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[9px] font-bold text-slate-500 pointer-events-none opacity-50">
                    Auto Formatted
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-blue-50/50 dark:bg-slate-850 p-3.5 rounded-2xl border border-blue-100/10 dark:border-slate-800">
                <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                  When you share this link on messaging apps like WhatsApp, Telegram, or Discord, the platform indexer will automatically fetch and display matching headers, showcasing current price, discount percentage badge, and image preview!
                </p>
              </div>

            </div>

            {/* Actions Footer */}
            <div className="border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6 flex flex-wrap gap-3 justify-end">
              <button
                onClick={handleCopyLink}
                className="px-5 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-teal-600" /> Link Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> Copy Direct Link
                  </>
                )}
              </button>

              <button
                onClick={sendToWhatsApp}
                className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-sm cursor-pointer hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" /> Share to WhatsApp
              </button>

              {navigator.share && (
                <button
                  onClick={shareNative}
                  className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-sm cursor-pointer hover:-translate-y-0.5"
                >
                  <Share2 className="w-4 h-4" /> System Share
                </button>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
