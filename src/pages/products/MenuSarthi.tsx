import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Utensils, AlertTriangle, CheckCircle2, Smartphone, ShoppingBag, 
  Edit3, LayoutDashboard, BarChart3, Settings, ArrowRight, MessageSquare, 
  Store, TrendingUp, ShieldCheck, Search, MessageCircle, DollarSign, 
  Calculator, HelpCircle, Send, Plus, Minus, Trash2, Users, Layers, Star, Play,
  Clock
} from 'lucide-react';
import { useUser } from '../../contexts/UserContext';
import { useSEO } from '../../hooks/useSEO';
import RazorpayCheckout from '../../components/RazorpayCheckout';

// --- Types & Constants ---
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Starters' | 'Main Course' | 'Breads' | 'Beverages';
  emoji: string;
  isVeg: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  { id: '1', name: 'Paneer Tikka', description: 'Marinated cottage cheese grilled to perfection', price: 189, category: 'Starters', emoji: '🍢', isVeg: true },
  { id: '2', name: 'Chicken Tikka', description: 'Succulent chicken with smoky tandoori spices', price: 249, category: 'Starters', emoji: '🍗', isVeg: false },
  { id: '3', name: 'Crispy Corn', description: 'Golden fried sweet corn kernels with spices', price: 149, category: 'Starters', emoji: '🌽', isVeg: true },
  { id: '4', name: 'Butter Paneer Masala', description: 'Rich tomato cashew gravy with soft paneer', price: 299, category: 'Main Course', emoji: '🍲', isVeg: true },
  { id: '5', name: 'Butter Tandoori Roti', description: 'Freshly baked wheat bread with butter', price: 30, category: 'Breads', emoji: '🫓', isVeg: true },
  { id: '6', name: 'Classic Cold Coffee', description: 'Thick blended creamy cold espresso brew', price: 119, category: 'Beverages', emoji: '🥤', isVeg: true },
];

export default function MenuSarthi() {
  const { hasPurchased } = useUser();
  const isPurchased = hasPurchased('menusarthi');

  useSEO(
    'MenuSarthi | Smart Digital QR Dining Solution',
    'A professional contactless QR code ordering system for restaurants, cafes, and local dhabas with zero aggregator commission.',
    'digital qr menu, contactless dining, restaurant ordering script, upi menu sarthi'
  );

  // --- Sound Effects Synthesizer ---
  const playSound = (type: 'bell' | 'chime' | 'click') => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const now = ctx.currentTime;
      
      if (type === 'bell') {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gainNode = ctx.createGain();
        osc1.frequency.setValueAtTime(880, now);
        osc1.frequency.exponentialRampToValueAtTime(1200, now + 0.15);
        osc2.frequency.setValueAtTime(1046.5, now);
        gainNode.gain.setValueAtTime(0.2, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(ctx.destination);
        osc1.start(now); osc2.start(now);
        osc1.stop(now + 0.5); osc2.stop(now + 0.5);
      } else if (type === 'chime') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        osc.frequency.setValueAtTime(783.99, now + 0.2);
        osc.frequency.setValueAtTime(1046.5, now + 0.3);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.5);
      } else {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(600, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.1);
      }
    } catch (_) {}
  };

  // --- Sub-navigation Tabs scrolling ---
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // --- ROI Calculator State ---
  const [printingCost, setPrintingCost] = useState(2000);
  const [tablesCount, setTablesCount] = useState(15);
  const [staffCount, setStaffCount] = useState(4);

  const annualPrintingSavings = printingCost * 12;
  const staffEfficiencySavings = staffCount * 12 * 9000 * 0.35;
  const tableTurnoverRevenueBoost = tablesCount * 1.5 * 30 * 12 * 25; // Estimate ₹25 ticket/upsell boost per table per day
  const totalAnnualBenefit = Math.round(annualPrintingSavings + staffEfficiencySavings + tableTurnoverRevenueBoost);

  // --- Live Simulator States ---
  const [simStep, setSimStep] = useState<'qr' | 'menu' | 'tracking'>('qr');
  const [simCart, setSimCart] = useState<{ item: MenuItem; qty: number }[]>([]);
  const [simSpecialNote, setSimSpecialNote] = useState('');
  const [simActiveTab, setSimActiveTab] = useState<'Starters' | 'Main Course' | 'Breads' | 'Beverages'>('Starters');
  
  // Kitchen (Admin view)
  const [kitchenOrders, setKitchenOrders] = useState<any[]>([
    { id: '#MS-2034', table: '2', status: 'completed', items: 'Cheese Lava Burger x1', notes: 'Serve hot', total: 188, payMethod: 'Direct UPI ✅' },
    { id: '#MS-2035', table: '8', status: 'preparing', items: 'Classic Cold Coffee x2, Crispy French Fries x1', notes: 'No ice cream scoop', total: 317, payMethod: 'Direct UPI ✅' },
  ]);
  const [simDailySales, setSimDailySales] = useState(505);
  const [simDailyGst, setSimDailyGst] = useState(24);

  const handleSimAddToCart = (item: MenuItem) => {
    playSound('click');
    setSimCart(prev => {
      const existing = prev.find(i => i.item.id === item.id);
      if (existing) {
        return prev.map(i => i.item.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { item, qty: 1 }];
    });
  };

  const handleSimUpdateQty = (itemId: string, delta: number) => {
    playSound('click');
    setSimCart(prev => prev.map(i => {
      if (i.item.id === itemId) {
        const newQty = i.qty + delta;
        return newQty > 0 ? { ...i, qty: newQty } : null;
      }
      return i;
    }).filter(Boolean) as any);
  };

  const simCartTotal = simCart.reduce((sum, item) => sum + item.item.price * item.qty, 0);
  const simCartGst = Math.round(simCartTotal * 0.05);
  const simGrandTotal = simCartTotal + simCartGst;

  const handleSimPlaceOrder = () => {
    if (simCart.length === 0) return;
    playSound('bell');
    const newOrderId = `#MS-${Math.floor(1000 + Math.random() * 9000)}`;
    const orderString = simCart.map(c => `${c.item.name} x${c.qty}`).join(', ');
    
    // Add to kitchen dashboard
    setKitchenOrders(prev => [
      {
        id: newOrderId,
        table: '4',
        status: 'preparing',
        items: orderString,
        notes: simSpecialNote || 'None',
        total: simGrandTotal,
        payMethod: 'Direct UPI ✅'
      },
      ...prev
    ]);

    setSimStep('tracking');
  };

  const handleKitchenComplete = (orderId: string, orderTotal: number) => {
    playSound('chime');
    setKitchenOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: 'completed' } : o));
    setSimDailySales(prev => prev + orderTotal);
    setSimDailyGst(prev => prev + Math.round(orderTotal * 0.05));
    
    // If completed order belongs to current Table 4 simulation
    const targetOrder = kitchenOrders.find(o => o.id === orderId);
    if (targetOrder && targetOrder.table === '4') {
      // Trigger update back in Customer's mobile simulator view
      setTimeout(() => {
        alert('Table 4: Chef has served your hot meals! Bon Appetit! 🍽️🎉');
        setSimStep('qr');
        setSimCart([]);
        setSimSpecialNote('');
      }, 300);
    }
  };

  // --- Pricing Setup Choice ---
  const [includeSetupService, setIncludeSetupService] = useState(false);

  // --- FAQs accordion state ---
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  // --- Chatbot widget state ---
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<any[]>([
    { sender: 'bot', text: 'Namaste! 🙏 Welcome to MenuSarthi. I can help you modernize your restaurant operations, increase average orders by 18%, and eliminate paper printing costs entirely.' },
    { sender: 'bot', text: 'How can I help you today? Feel free to select an option below:' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isChatOpen]);

  const handleChatOption = (option: string) => {
    setChatMessages(prev => [...prev, { sender: 'user', text: option }]);
    setTimeout(() => {
      if (option.includes('ROI')) {
        setChatMessages(prev => [...prev, {
          sender: 'bot',
          text: `Based on restaurant metrics, a typical diner checks out 22 mins faster, printing drops to absolute ₹0, and average bill tickets go up 18% with smart automated cross-selling!`
        }, {
          sender: 'bot',
          text: `Try moving the sliders in our **Savings Simulator** below to see your customized annual savings.`
        }]);
      } else if (option.includes('Demo')) {
        setChatMessages(prev => [...prev, {
          sender: 'bot',
          text: `I would love to set up a live zoom demo or answer your questions on WhatsApp! Please WhatsApp us at +91 8851666208.`
        }, {
          sender: 'bot',
          text: `Click below to text us directly on WhatsApp:\n\n[📱 Chat on WhatsApp](https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20a%20free%20live%20demo%20of%20MenuSarthi%20for%20my%20restaurant.)`
        }]);
      } else if (option.includes('Question') || option.includes('FAQ')) {
        setChatMessages(prev => [...prev, {
          sender: 'bot',
          text: `Common questions from restaurant owners:\n\n1. **App installation?** None needed! Works on Chrome/Safari.\n2. **Payment gateway?** Settles directly into your existing UPI GPay/Paytm account with 0% commissions.\n3. **Easy edits?** Yes, toggle menu stock instantly from your admin tab.`
        }]);
      } else {
        setChatMessages(prev => [...prev, {
          sender: 'bot',
          text: `Simply scan the QR table standee inside the **Live Product Simulator** right on this page! Add some Paneer Tikka, tap pay, and watch it pop up on the Kitchen Admin monitor screen instantly with active sounds!`
        }]);
      }
    }, 600);
  };

  const handleSendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatInput('');
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);

    setTimeout(() => {
      const q = userMsg.toLowerCase();
      let reply = "MenuSarthi turns any paper menu into a smart digital checkout. It saves ₹24k in printing and cuts table bottlenecks. Would you like to book a free zoom walkthrough or order yearly code setup?";
      
      if (q.includes('price') || q.includes('cost') || q.includes('pricing') || q.includes('monthly') || q.includes('plan')) {
        reply = "Our Starter plan is just ₹999/month. Our Best Value Yearly Premium is ₹9,999/year (saves 2 months FREE + premiumacrylic standees delivered). We also offer on-demand hands-free menu setup for ₹2,999.";
      } else if (q.includes('upi') || q.includes('pay') || q.includes('commission') || q.includes('settle')) {
        reply = "UPI payments settle instantly & directly into your own restaurant Google Pay/PhonePe/Paytm business account. We charge 0% commission fees—funds go direct from guest bank to yours!";
      } else if (q.includes('dhaba') || q.includes('local') || q.includes('small') || q.includes('roadside')) {
        reply = "Haan, bilkul! MenuSarthi local dhabas, family restaurants aur street food joints ke liye ekdum perfect aur super easy hai. Customer table par baithe hi QR code scan karke order kar lete hain, jisse waiter bulane aur shor machane ki zarurat nahi padti!";
      } else if (q.includes('demo') || q.includes('whatsapp') || q.includes('phone') || q.includes('call')) {
        reply = "Sure! You can talk directly to Suraj Singh on WhatsApp at +91 8851666208 or send email to surajautomation.surajdx@gmail.com for bulk prints & custom integrations.";
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 700);
  };

  return (
    <main className="pt-20 pb-20 bg-slate-950 text-white selection:bg-red-500 selection:text-white">
      {/* Launch Offer Alert Bar */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 py-2.5 px-4 text-center text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center justify-center gap-2 animate-pulse">
        <span className="bg-black/25 px-2 py-0.5 rounded text-[10px] uppercase font-black">Limited Time</span>
        <span>🚀 LAUNCH OFFER: Save up to 2 Months FREE with our Yearly Plan & get Hands-Free Menu Setup!</span>
      </div>

      {/* Sub-Navigation */}
      <nav className="sticky top-16 z-45 bg-slate-900/95 backdrop-blur border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm shadow-md">M</div>
            <span className="font-extrabold tracking-tight text-white">MenuSarthi</span>
            <span className="hidden sm:inline px-2 py-0.5 bg-red-500/10 text-red-400 text-[10px] font-bold rounded-full border border-red-500/20">Smart QR Dining</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-4 text-xs sm:text-sm font-semibold text-slate-300">
            <button onClick={() => scrollTo('features')} className="px-2.5 py-1.5 hover:text-white transition-colors cursor-pointer">Features</button>
            <button onClick={() => scrollTo('simulator')} className="px-2.5 py-1.5 hover:text-white transition-colors cursor-pointer">Live Sandbox</button>
            <button onClick={() => scrollTo('roi')} className="px-2.5 py-1.5 hover:text-white transition-colors cursor-pointer">ROI Calculator</button>
            <button onClick={() => scrollTo('pricing')} className="px-2.5 py-1.5 hover:text-white transition-colors cursor-pointer">Pricing</button>
            <button onClick={() => scrollTo('pricing')} className="hidden md:inline-flex px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-xs transition-all shadow shadow-red-500/25">
              Start Today for ₹999
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-950/40 via-slate-950 to-slate-950 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero text */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-xs font-bold tracking-wide border border-red-500/20">
                <Utensils className="w-3.5 h-3.5" />
                🚀 The Future of Dining
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Stop Printing Menus <br />
                Every Month. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-500">
                  Let Customers Scan, Order & Pay.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                A modern contactless QR system for Cafes, Restaurants, Local Dhabas, and Food Trucks. Let customers browse gorgeous photo-menus, customize dishes, and pay directly from their table browser.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 text-sm font-bold text-slate-300">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Digital Menu & UPI Pay</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Live Kitchen Status</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> QR Table Ordering</span>
              </div>

              {/* Steps graphic */}
              <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-around gap-4 max-w-lg">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-6 h-6 bg-red-600/20 text-red-400 font-bold rounded-full flex items-center justify-center">1</span>
                  <span>Scan QR Table Code</span>
                </div>
                <span className="text-slate-600">➔</span>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-6 h-6 bg-red-600/20 text-red-400 font-bold rounded-full flex items-center justify-center">2</span>
                  <span>Order Digital Menu</span>
                </div>
                <span className="text-slate-600">➔</span>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-6 h-6 bg-red-600/20 text-red-400 font-bold rounded-full flex items-center justify-center">3</span>
                  <span>Enjoy & UPI Pay</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button onClick={() => scrollTo('pricing')} className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black text-lg rounded-xl shadow-lg shadow-red-500/20 flex items-center gap-2 transition-transform hover:-translate-y-0.5 cursor-pointer">
                  Start Today for ₹999
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20live%20demo%20of%20MenuSarthi%20for%20my%20restaurant."
                  target="_blank" rel="noreferrer"
                  className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-lg rounded-xl border border-slate-800 text-center transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-500" />
                  Book Free Demo
                </a>
              </div>
            </div>

            {/* Visual Table Standee QR Mockup */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute inset-0 bg-red-500/10 rounded-full blur-3xl -z-10"></div>
              
              {/* Standee Container */}
              <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 border-4 border-slate-700 p-6 rounded-[2rem] w-72 sm:w-80 shadow-2xl overflow-hidden text-center flex flex-col items-center">
                <span className="absolute top-2 left-1/2 -translate-x-1/2 bg-red-600 text-[10px] text-white px-3 py-1 rounded-full font-black tracking-widest uppercase">TABLE STAND QR</span>
                
                <div className="mt-8 mb-4">
                  <span className="text-slate-400 font-bold tracking-widest uppercase text-xs">YOUR RESTAURANT</span>
                  <h3 className="text-2xl font-black text-red-500">TABLE 12</h3>
                </div>

                {/* QR Code Graphics */}
                <div className="bg-white p-4 rounded-2xl w-44 h-44 shadow-inner flex flex-col items-center justify-center relative group">
                  {/* Custom SVG QR simulation */}
                  <svg className="w-full h-full text-black" viewBox="0 0 100 100" fill="currentColor">
                    <rect x="0" y="0" width="25" height="25" />
                    <rect x="5" y="5" width="15" height="15" fill="white" />
                    <rect x="9" y="9" width="7" height="7" />
                    
                    <rect x="75" y="0" width="25" height="25" />
                    <rect x="80" y="5" width="15" height="15" fill="white" />
                    <rect x="84" y="9" width="7" height="7" />

                    <rect x="0" y="75" width="25" height="25" />
                    <rect x="5" y="80" width="15" height="15" fill="white" />
                    <rect x="9" y="84" width="7" height="7" />

                    <rect x="35" y="10" width="12" height="12" />
                    <rect x="55" y="15" width="8" height="8" />
                    <rect x="40" y="40" width="20" height="20" />
                    <rect x="15" y="45" width="10" height="10" />
                    <rect x="70" y="50" width="15" height="15" />
                    <rect x="45" y="75" width="12" height="15" />
                    <rect x="75" y="75" width="20" height="20" />
                    
                    <rect x="35" y="35" width="4" height="4" fill="red" />
                  </svg>
                  <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                    <span className="bg-red-600 text-white text-[10px] px-2 py-1 rounded font-bold">Scan with Mobile</span>
                  </div>
                </div>

                <p className="font-bold text-sm mt-3 text-white">Scan to Order & Pay</p>
                <p className="text-[10px] text-slate-400 mt-1">Direct Bank settlement • No app required</p>

                {/* Accepted UPI Icons */}
                <div className="flex items-center justify-center gap-2.5 mt-4 text-[10px] text-slate-300 font-bold bg-slate-950/80 px-4 py-1.5 rounded-full border border-slate-800">
                  <span>UPI Accepted:</span>
                  <span className="text-blue-400">GPay</span>
                  <span className="text-purple-400">PhonePe</span>
                  <span className="text-sky-400">Paytm</span>
                </div>

                {/* Floating elements inside stand */}
                <div className="absolute top-28 -left-12 bg-slate-900 border border-slate-700/65 rounded-xl p-2 px-3 text-left shadow-lg rotate-[-6deg] text-[10px]">
                  <p className="text-slate-400 uppercase font-black tracking-widest text-[8px]">Live Status</p>
                  <p className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    Preparing Food...
                  </p>
                </div>

                <div className="absolute bottom-20 -right-12 bg-slate-900 border border-slate-700/65 rounded-xl p-2 px-3 text-left shadow-lg rotate-[6deg] text-[10px]">
                  <p className="text-slate-400 uppercase font-black tracking-widest text-[8px]">UPI Settlement</p>
                  <p className="text-red-400 font-black">₹1,240 Paid Directly</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats / Bento Grid Value Proposition */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black">Everything Your Restaurant Needs In One Smart System</h2>
            <p className="text-lg text-slate-400">Designed for modern cafes & dining hubs that want faster service, happier customers, and higher profits.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 hover:border-red-500/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-500">Service Speed</span>
                <h3 className="text-3xl font-black mt-2">22% Faster</h3>
                <p className="text-sm text-slate-400 mt-2">Table Turnovers</p>
              </div>
              <p className="text-xs text-slate-400 mt-4 border-t border-slate-800/80 pt-3">No waiting for busy waiters to bring menus, write orders or split billing tickets.</p>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 hover:border-red-500/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500">Average Bill</span>
                <h3 className="text-3xl font-black mt-2">18% Higher</h3>
                <p className="text-sm text-slate-400 mt-2">Order Ticket Size</p>
              </div>
              <p className="text-xs text-slate-400 mt-4 border-t border-slate-800/80 pt-3">Automatic cross-sell recommend chips (Drinks, Papad, Extra cheese toppings) at checkouts.</p>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 hover:border-red-500/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-500">Printing Expenses</span>
                <h3 className="text-3xl font-black mt-2">₹0 / Zero</h3>
                <p className="text-sm text-slate-400 mt-2">Paper Menu Costs</p>
              </div>
              <p className="text-xs text-slate-400 mt-4 border-t border-slate-800/80 pt-3">Instantly update item prices, add seasonal dishes, or toggle stock items directly from administrative panel.</p>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 hover:border-red-500/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-500">Transaction Fees</span>
                <h3 className="text-3xl font-black mt-2">0% Commission</h3>
                <p className="text-sm text-slate-400 mt-2">Direct UPI Settlement</p>
              </div>
              <p className="text-xs text-slate-400 mt-4 border-t border-slate-800/80 pt-3">No middleman fees! UPI cash settlements transfer instantly straight from customer bank account to your personal UPI ID.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Dining Loophole */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-xs font-bold tracking-wide border border-red-500/20">
                <AlertTriangle className="w-3.5 h-3.5" />
                Still Taking Orders Manually?
              </span>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight">The Traditional Dining Loophole</h2>
              <p className="text-slate-400">
                Every day, restaurants lose high-value customers and bleed profit because paper-based workflows are manual, bottlenecked, and slow.
              </p>
              <div className="p-5 bg-red-500/10 rounded-2xl border border-red-500/20">
                <p className="font-bold text-red-400">🚨 Did you know?</p>
                <p className="text-sm text-slate-300 mt-1">Waiting 10 mins to get the menu card, 15 mins to catch a waiter, and 10 mins to settle the bill destroys modern customer satisfaction scores.</p>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-900 space-y-2">
                <h4 className="font-bold text-slate-200">1. Customers Wait Too Long</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Guests expect instant action. Lagging menu cards and waiter availability during peak weekend hours cause client frustration.</p>
              </div>
              <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-900 space-y-2">
                <h4 className="font-bold text-slate-200">2. Staff Writes Wrong Orders</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Manual pen-paper transcription leads to kitchen waste, billing disputes, and awkward restaurant apologies.</p>
              </div>
              <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-900 space-y-2">
                <h4 className="font-bold text-slate-200">3. Outdated Printed Menus</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Price shifts, out-of-stock items, or seasonal changes mean reprinting laminated cards at high ongoing monthly costs.</p>
              </div>
              <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-900 space-y-2">
                <h4 className="font-bold text-slate-200">4. Bills Settle Too Slowly</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Searching for change, card swiping, or calculating split-bills leads to table logjams while new tables are waiting.</p>
              </div>
              <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-900 space-y-2 col-span-2 sm:col-span-1">
                <h4 className="font-bold text-slate-200">5. Can't Track Order Prep</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Anxious guests constantly yell or prompt waiters "Where is my dish?", raising workplace noise and chaos.</p>
              </div>
              <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-900 space-y-2 col-span-2 sm:col-span-1">
                <h4 className="font-bold text-slate-200">6. No Central GST Audit Logs</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Struggling with manual spreadsheets and register listings when compiling GST taxation reports for CA filing audits.</p>
              </div>
            </div>

          </div>

          <div className="mt-16 p-8 bg-slate-900/80 rounded-3xl border border-slate-800 text-center max-w-4xl mx-auto space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">There is a better way. MenuSarthi solves all of this.</h3>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Scan Table 4 - A Complete Digital Ordering Experience. Guests scan the tabletop standee QR and browse, customize, order and pay directly inside their mobile web browser. No apps, no logins, no lag.
            </p>
            <div className="flex justify-center gap-4 text-xs font-bold">
              <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded border border-red-500/20">No App Install</span>
              <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded border border-red-500/20">Works on Standard Mobile Browser</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Simulator (Experience MenuSarthi Live) */}
      <section id="simulator" className="py-20 bg-slate-900/20 border-b border-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black">Experience MenuSarthi Live</h2>
            <p className="text-lg text-slate-400">Add food items on the customer mobile screen. Watch them reflect instantly on the central kitchen dashboard with real sound alerts!</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Customer mobile view */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-xs text-center mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">1. Customer Screen (Table 4)</span>
              </div>
              
              {/* Phone Frame */}
              <div className="relative bg-slate-950 border-[6px] border-slate-800 rounded-[2.5rem] w-full max-w-sm h-[520px] shadow-2xl overflow-hidden flex flex-col justify-between text-slate-200">
                
                {/* Speaker pill */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-800 rounded-full z-20 flex items-center justify-center text-[8px] font-black tracking-widest text-slate-500">TABLE 4</div>

                {simStep === 'qr' && (
                  <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-6 pt-10">
                    <div className="w-16 h-16 rounded-full bg-red-600/20 flex items-center justify-center text-red-500">
                      <Smartphone className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-lg text-white">MenuSarthi Cafe</h4>
                      <p className="text-xs text-slate-400 mt-1">Coffee, Kitchen & Snacks</p>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                      Scan your tabletop QR code standee to browse, place orders and track food preparation status instantly!
                    </p>
                    <button 
                      onClick={() => { playSound('click'); setSimStep('menu'); }}
                      className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow shadow-red-500/25 flex items-center gap-2 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5" /> Scan Table 4 QR Code
                    </button>
                  </div>
                )}

                {simStep === 'menu' && (
                  <div className="flex-1 flex flex-col justify-between overflow-hidden pt-8">
                    {/* Customer Screen Header */}
                    <div className="bg-slate-900 p-3 border-b border-slate-800 flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-[10px] text-slate-400 font-bold leading-none">Dine In: Table 4</p>
                        <h5 className="font-extrabold text-sm text-white mt-0.5">Hi, Suraj Singh!</h5>
                      </div>
                      <span className="text-[10px] bg-red-600/25 text-red-400 px-2 py-0.5 rounded font-black">MenuSarthi Cafe</span>
                    </div>

                    {/* Food Items list scroll */}
                    <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5 text-left">
                      <div className="flex gap-2 pb-2 overflow-x-auto scrollbar-none border-b border-slate-900 text-[10px] font-black">
                        {['Starters', 'Main Course', 'Breads', 'Beverages'].map((cat: any) => (
                          <button 
                            key={cat} 
                            onClick={() => { playSound('click'); setSimActiveTab(cat); }}
                            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors border cursor-pointer ${simActiveTab === cat ? 'bg-red-600 border-red-600 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'}`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      <div className="space-y-2.5">
                        {MENU_ITEMS.filter(item => item.category === simActiveTab).map(item => (
                          <div key={item.id} className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-800 flex items-center justify-between gap-3">
                            <div className="flex-1 text-xs">
                              <p className="font-bold flex items-center gap-1 text-white">
                                <span>{item.emoji}</span>
                                <span>{item.name}</span>
                                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.isVeg ? 'bg-emerald-500' : 'bg-red-500'}`} title={item.isVeg ? 'Veg' : 'Non-Veg'}></span>
                              </p>
                              <p className="text-[10px] text-slate-400 leading-snug mt-0.5 line-clamp-1">{item.description}</p>
                              <p className="text-xs text-red-400 font-extrabold mt-1">₹{item.price}</p>
                            </div>

                            {/* Add / Qty controls */}
                            {simCart.find(c => c.item.id === item.id) ? (
                              <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-lg p-1">
                                <button onClick={() => handleSimUpdateQty(item.id, -1)} className="p-1 hover:text-red-500"><Minus className="w-3 h-3" /></button>
                                <span className="text-xs font-black min-w-[12px] text-center">{simCart.find(c => c.item.id === item.id)?.qty}</span>
                                <button onClick={() => handleSimUpdateQty(item.id, 1)} className="p-1 hover:text-red-500"><Plus className="w-3 h-3" /></button>
                              </div>
                            ) : (
                              <button 
                                onClick={() => handleSimAddToCart(item)}
                                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-[10px] font-black rounded-lg uppercase cursor-pointer"
                              >
                                Add
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer Cart summary and Place Order */}
                    <div className="bg-slate-900 p-3.5 border-t border-slate-800 space-y-2">
                      <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 px-2.5 rounded-lg border border-slate-800">
                        <Edit3 className="w-3 h-3 text-slate-400 shrink-0" />
                        <input 
                          type="text" 
                          placeholder="Less spicy, no ice, etc..." 
                          value={simSpecialNote} 
                          onChange={(e) => setSimSpecialNote(e.target.value)} 
                          className="bg-transparent border-none outline-none text-[10px] text-slate-200 placeholder-slate-550 w-full"
                        />
                      </div>

                      {simCart.length > 0 ? (
                        <div className="flex items-center justify-between gap-4 pt-1">
                          <div className="text-left text-[10px]">
                            <p className="text-slate-400 font-bold">Total: ₹{simCartTotal} + ₹{simCartGst} GST</p>
                            <p className="text-xs font-extrabold text-white">Grand Total: ₹{simGrandTotal}</p>
                          </div>
                          <button 
                            onClick={handleSimPlaceOrder}
                            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold rounded-lg uppercase flex items-center gap-1.5 cursor-pointer shadow-lg shadow-emerald-500/10"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" /> Order & UPI Pay
                          </button>
                        </div>
                      ) : (
                        <p className="text-center text-[10px] text-slate-500 py-2.5 font-bold">Your cart is empty. Add dishes above.</p>
                      )}
                    </div>
                  </div>
                )}

                {simStep === 'tracking' && (
                  <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-6 pt-10">
                    <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 animate-pulse">
                      <Clock className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 bg-orange-500/10 text-orange-400 text-[10px] font-black rounded-full border border-orange-500/20 uppercase tracking-wider">Order Received</span>
                      <h4 className="font-extrabold text-lg text-white mt-3">Preparing Your Order</h4>
                      <p className="text-xs text-slate-400 mt-1">Order #MS-2036 • Table 4</p>
                    </div>
                    <div className="w-full bg-slate-900 border border-slate-800 p-4 rounded-2xl text-left space-y-2">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Selected Dishes</p>
                      <div className="text-xs font-semibold text-slate-200 max-h-20 overflow-y-auto space-y-1">
                        {simCart.map(c => (
                          <p key={c.item.id} className="flex justify-between"><span>{c.item.name} x{c.qty}</span> <span>₹{c.item.price * c.qty}</span></p>
                        ))}
                      </div>
                      {simSpecialNote && <p className="text-[10px] text-orange-400 italic mt-2">"💬 {simSpecialNote}"</p>}
                    </div>
                    <div className="text-xs text-slate-400">
                      <p>Your receipt is saved. Settle balance on table.</p>
                      <p className="mt-2 text-emerald-400 font-bold">Direct UPI settlement completed! ✅</p>
                    </div>
                  </div>
                )}

                {/* Bottom navigation simulation */}
                <div className="bg-slate-950 border-t border-slate-900 py-2 flex justify-around text-[9px] text-slate-400 font-bold font-mono">
                  <span className={`cursor-pointer ${simStep === 'menu' ? 'text-red-500' : ''}`} onClick={() => setSimStep('menu')}>Menu</span>
                  <span className={`cursor-pointer ${simStep === 'tracking' ? 'text-red-500' : ''}`} onClick={() => { if (simCart.length > 0) setSimStep('tracking'); }}>Track Order</span>
                </div>
              </div>
            </div>

            {/* Right: Restaurant Kitchen View */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="text-center sm:text-left mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">2. Restaurant Kitchen & Analytics Dashboard (Admin View)</span>
              </div>

              {/* Kitchen frame */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex-1 flex flex-col justify-between text-left space-y-6 shadow-2xl">
                
                {/* Kitchen header status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <h4 className="font-extrabold text-white text-lg">Cafe Sarthi Central Admin</h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      ONLINE & SYNCED • Table 4 Connected
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-slate-950 p-2.5 px-4 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block leading-none">Daily Sales</span>
                      <span className="text-emerald-400 font-black text-lg mt-1 block">₹{simDailySales}</span>
                    </div>
                    <div className="bg-slate-950 p-2.5 px-4 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block leading-none">GST Reports</span>
                      <span className="text-red-400 font-black text-lg mt-1 block">₹{simDailyGst}</span>
                    </div>
                  </div>
                </div>

                {/* Queue Title */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="font-extrabold text-sm text-slate-200 uppercase tracking-wider">Real-Time Incoming Orders Queue</h5>
                    <span className="bg-red-500/10 text-red-400 px-2 py-0.5 rounded text-[10px] font-bold border border-red-500/20">Google Apps Script Powered</span>
                  </div>

                  <div className="bg-slate-950 p-2 rounded-xl border border-slate-850 flex items-center gap-2">
                    <Search className="w-4 h-4 text-slate-500 shrink-0" />
                    <input type="text" placeholder="Search table, order id..." className="bg-transparent border-none outline-none text-xs text-slate-300 w-full" disabled />
                  </div>
                </div>

                {/* Live order list queue cards */}
                <div className="flex-1 overflow-y-auto max-h-64 space-y-3 pr-1">
                  {kitchenOrders.map((order) => (
                    <div key={order.id} className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${order.status === 'completed' ? 'bg-slate-950/40 border-slate-900 opacity-60' : 'bg-slate-950 border-orange-500/20'}`}>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-black text-white text-sm">Table {order.table}</span>
                          <span className="text-slate-500 font-mono">Order ID: {order.id}</span>
                          <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${order.status === 'completed' ? 'bg-slate-800 text-slate-400' : 'bg-orange-500/10 text-orange-400'}`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="font-bold text-slate-200">{order.items}</p>
                        {order.notes !== 'None' && <p className="text-[10px] text-orange-400 italic">"💬 {order.notes}"</p>}
                        <div className="text-[10px] text-slate-400 flex items-center gap-3">
                          <span>Payment: <strong className="text-emerald-400">{order.payMethod}</strong></span>
                          <span>Total: <strong className="text-slate-200">₹{order.total}</strong></span>
                        </div>
                      </div>

                      <div className="shrink-0 text-right">
                        {order.status === 'preparing' ? (
                          <button 
                            onClick={() => handleKitchenComplete(order.id, order.total)}
                            className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-black rounded-lg uppercase flex items-center gap-1 cursor-pointer"
                          >
                            🔔 Mark as Ready to Serve
                          </button>
                        ) : (
                          <span className="text-[10px] text-slate-500 font-bold italic flex items-center gap-1 justify-end">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Served & Closed
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-850 text-xs text-slate-400 leading-normal flex items-start gap-2.5">
                  <Settings className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <p>
                    <strong>Interactive Simulation Tips:</strong> Complete a direct checkout on the mobile screen to send Table 4 orders right here. Click the <strong>Mark as Ready</strong> action button on the kitchen dashboard to serve it back to Table 4 and watch the client status update with real-time feedback.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Solution Features List */}
      <section id="features" className="py-20 bg-slate-950 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black">Built for High Scale Performance</h2>
            <p className="text-lg text-slate-400">Powerful, fully optimized features packed in one solution for busy Indian food spaces.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-500">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-slate-100">QR Table Ordering</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Customers scan table QR standees and order instantly. Each QR maps uniquely to specific tables so orders hit the kitchen queue with table codes.</p>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600/10 border border-orange-600/20 flex items-center justify-center text-orange-500">
                <Utensils className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-slate-100">Beautiful Digital Menu</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Upload dish photos, group items into category tabs, search by keywords, add Veg/Non-Veg color tags, and set pricing details.</p>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-500">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-slate-100">Smart Cart Engine</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Allows guests to modify quantities, include special preparation notes ('make it less spicy'), configure variants, and calculate GST costs.</p>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600/10 border border-orange-600/20 flex items-center justify-center text-orange-500">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-slate-100">Live Order Tracking</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Customers know when food is Received, Preparing, Ready, or Served. Minimizes guest anxiety and reduces shouting for waiters.</p>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center text-emerald-500">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-slate-100">Order Revision Safety</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Did guests click the wrong dish? Allow them to cancel or edit items before the kitchen dashboard starts cooking, reducing waste.</p>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-500">
                <DollarSign className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-slate-100">Instant UPI Payments</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Direct payments via major handles (GPay, Paytm, PhonePe, BHIM) settle instantly inside your bank account with 0% commissions.</p>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600/10 border border-orange-600/20 flex items-center justify-center text-orange-500">
                <LayoutDashboard className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-slate-100">Restaurant Admin Dashboard</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Manage live kitchen status, approve orders, edit item availability, modify menu prices, and review daily sales from one portal.</p>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-500">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-slate-100">Auditor-Friendly Reports</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Export daily sales lists and detailed CGST/SGST tax logs. Generate one-click spreadsheets for tax bookkeeping with CA audits.</p>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center text-emerald-500">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-slate-100">Google Apps Script Powered</h4>
              <p className="text-xs text-slate-400 leading-relaxed">No expensive hosting bills or server management. Runs completely inside Google Cloud script infrastructure—fast, secure, & maintenance-free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Savings / ROI Simulator */}
      <section id="roi" className="py-20 bg-slate-900/20 border-b border-slate-900 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black">Calculate Your Custom MenuSarthi ROI</h2>
            <p className="text-lg text-slate-400">Adjust the sliders based on your restaurant details to estimate how much cash and time MenuSarthi saves you annually.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 sm:p-10 rounded-3xl grid md:grid-cols-12 gap-8 items-center text-left">
            <div className="md:col-span-7 space-y-6">
              
              {/* Slider 1 */}
              <div className="space-y-2">
                <div className="flex justify-between font-bold text-sm">
                  <span className="text-slate-300">Monthly Menu Printing Expense</span>
                  <span className="text-red-400">₹{printingCost.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="0" max="10000" step="500" value={printingCost} 
                  onChange={(e) => setPrintingCost(parseInt(e.target.value))}
                  className="w-full accent-red-500 bg-slate-950 h-2 rounded-lg appearance-none"
                />
                <p className="text-[10px] text-slate-500">Includes seasonal menu cards, plastic laminations, and design updates.</p>
              </div>

              {/* Slider 2 */}
              <div className="space-y-2">
                <div className="flex justify-between font-bold text-sm">
                  <span className="text-slate-300">Number of Seating Tables</span>
                  <span className="text-red-400">{tablesCount} Tables</span>
                </div>
                <input 
                  type="range" min="1" max="100" step="1" value={tablesCount} 
                  onChange={(e) => setTablesCount(parseInt(e.target.value))}
                  className="w-full accent-red-500 bg-slate-950 h-2 rounded-lg appearance-none"
                />
                <p className="text-[10px] text-slate-500">Drives calculation for faster table turnover speed & average up-sells.</p>
              </div>

              {/* Slider 3 */}
              <div className="space-y-2">
                <div className="flex justify-between font-bold text-sm">
                  <span className="text-slate-300">Number of Floor Waiters / Staff</span>
                  <span className="text-red-400">{staffCount} Staff Members</span>
                </div>
                <input 
                  type="range" min="1" max="25" step="1" value={staffCount} 
                  onChange={(e) => setStaffCount(parseInt(e.target.value))}
                  className="w-full accent-red-500 bg-slate-950 h-2 rounded-lg appearance-none"
                />
                <p className="text-[10px] text-slate-500">Measures waiter labor optimization and time coordination savings.</p>
              </div>

            </div>

            <div className="md:col-span-5 bg-slate-950 border border-slate-800 p-6 rounded-2xl text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Estimated Annual Benefit</span>
              <div className="text-4xl font-black text-red-500 leading-none">₹{totalAnnualBenefit.toLocaleString()}</div>
              <p className="text-xs text-slate-400 font-medium leading-relaxed">
                Based on paper printing savings, labor efficiency boost, and smart up-sells.
              </p>
              <div className="border-t border-slate-850 pt-3 text-xs text-slate-400 space-y-2 text-left font-mono">
                <p className="flex justify-between"><span>• Pure Printing Saved:</span> <strong className="text-emerald-400">₹{(printingCost * 12).toLocaleString()}</strong></p>
                <p className="flex justify-between"><span>• Staff Efficiency:</span> <strong className="text-emerald-400">35% Boost</strong></p>
                <p className="flex justify-between"><span>• Table Turn Speed:</span> <strong className="text-emerald-400">22 mins faster</strong></p>
              </div>
              <button onClick={() => scrollTo('pricing')} className="w-full py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider rounded-xl cursor-pointer">
                Claim My Free Setup & Demo Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Restaurant Owners Love Us & Onboarding Guarantee */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl font-black">Why Restaurant Owners Love MenuSarthi</h2>
              <p className="text-slate-400">Engineered to bring absolute peace of mind to busy operators. No complex software configurations or high budgets needed.</p>
              
              <div className="grid sm:grid-cols-2 gap-4 text-sm font-semibold">
                <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span>Faster Table Turnover</span></div>
                <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span>Higher Average Order Size</span></div>
                <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span>Less Staff Dependency</span></div>
                <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span>Zero Menu Printing Costs</span></div>
                <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span>Clear Transparency</span></div>
                <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span>Modern Contactless Image</span></div>
                <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span>Live Sales Status logs</span></div>
                <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span>Easy 'Out-of-Stock' Toggles</span></div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl text-left space-y-6">
              <h4 className="text-lg font-black text-white flex items-center gap-2">
                <Star className="w-5 h-5 text-red-500 fill-red-500" /> Onboarding Guarantee SLA
              </h4>
              <div className="space-y-4 text-xs text-slate-300">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                  <p className="font-bold text-white">⚡ Setup inside 24 Hours</p>
                  <p className="text-slate-400 mt-1">Submit your printed paper card or photos. We crop, polish, and upload the entire initial digital catalog menu for you.</p>
                </div>
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                  <p className="font-bold text-white">🔒 Zero Downtime System</p>
                  <p className="text-slate-400 mt-1">MenuSarthi runs on secure Google Cloud servers, guaranteeing 99.9% up-time during peak weekend hours.</p>
                </div>
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                  <p className="font-bold text-white">💬 On-Demand Support</p>
                  <p className="text-slate-400 mt-1">Receive direct WhatsApp support line access for prompt menu item revisions or table additions.</p>
                </div>
              </div>
              <p className="text-center font-bold text-slate-400 text-xs">
                ⭐ Trusted by 140+ Indian Restaurants across Mumbai, Bangalore, Pune, Delhi NCR, and Jaipur.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Perfect For / Built For category list */}
      <section className="py-16 bg-slate-900/20 border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h3 className="text-2xl font-extrabold text-white">MenuSarthi is Tailored for Your Dining Space</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-xs font-bold text-slate-300">
            {['Cafes', 'Pizza Shops', 'QSR Restaurants', 'Food Trucks', 'Cloud Kitchens', 'Family Restaurants', 'Street Food Chains', 'Multi Outlet Restaurants'].map((type) => (
              <div key={type} className="bg-slate-900 p-4 rounded-xl border border-slate-800/80 hover:border-red-500/30 transition-all">
                <p className="text-slate-200">{type}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Optimized setup Ready</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-20 bg-slate-950 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black">Plans That Grow With Your Restaurant</h2>
            <p className="text-lg text-slate-400">No hidden transaction fees, no locking contracts. Upgrade or switch plans at any time.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto text-left">
            
            {/* Plan 1 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-black text-white">Monthly Starter</h4>
                  <p className="text-xs text-slate-400 mt-1">Perfect for trying digital workflows with low setup investment.</p>
                </div>
                <div className="text-3xl font-black text-red-500">₹999 <span className="text-xs text-slate-400 font-bold">/ Month</span></div>
                <ul className="space-y-2 text-xs font-medium text-slate-300 border-t border-slate-800 pt-4">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Unlimited QR Ordering</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Beautiful Digital Menu</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Live Tracking Statuses</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Central Admin Dashboard</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Email & Whatsapp Support</li>
                </ul>
              </div>
              <button onClick={() => scrollTo('checkout-menusarthi')} className="w-full py-3 bg-slate-950 hover:bg-slate-850 text-slate-200 border border-slate-800 hover:border-slate-700 text-xs font-black uppercase tracking-wider rounded-xl mt-8 cursor-pointer">
                Choose Monthly Starter
              </button>
            </div>

            {/* Plan 2 */}
            <div className="bg-slate-900 border-2 border-red-500/80 p-6 rounded-3xl flex flex-col justify-between relative shadow-xl shadow-red-500/5">
              <span className="absolute -top-3.5 right-6 bg-gradient-to-r from-red-600 to-orange-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest shadow-md">Yearly Best Value ⭐</span>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-black text-white">Yearly Premium</h4>
                  <p className="text-xs text-slate-400 mt-1">Save thousands with complete prioritized support & tabletop prints.</p>
                </div>
                <div className="text-3xl font-black text-red-500">
                  ₹9,999 <span className="text-xs text-slate-400 font-bold">/ Year</span>
                </div>
                <span className="text-[10px] font-black text-emerald-400 block bg-emerald-500/10 p-1.5 rounded border border-emerald-500/20 text-center uppercase tracking-wider">🎉 Get 2 Months FREE (Save ₹1,989!)</span>
                
                <ul className="space-y-2 text-xs font-medium text-slate-300 border-t border-slate-800 pt-4">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Everything inside Monthly</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Priority WhatsApp Call SLA</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Custom Domain Integration</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Unlimited Multi-Waiter Logins</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Weekly Email Sales Audits</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free QR Standee Stickers pack</li>
                </ul>
              </div>
              <button onClick={() => scrollTo('checkout-menusarthi')} className="w-full py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider rounded-xl mt-8 cursor-pointer shadow shadow-red-500/25">
                Choose Yearly Premium
              </button>
            </div>

            {/* Plan 3 */}
            <div className="bg-slate-900 border border-slate-850 p-6 rounded-3xl flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] bg-red-500/10 text-red-400 font-black px-2 py-0.5 rounded border border-red-500/20 uppercase tracking-widest">Optional Service</span>
                  <h4 className="text-lg font-black text-white mt-2">One-Time Setup</h4>
                  <p className="text-xs text-slate-400 mt-1">We'll do everything for you. Send us your card and we launch Day 1.</p>
                </div>
                <div className="text-3xl font-black text-red-500">₹2,999 <span className="text-xs text-slate-400 font-bold">/ Setup</span></div>
                <ul className="space-y-2 text-xs font-medium text-slate-300 border-t border-slate-800 pt-4">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Complete digital menu setup</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Professional cropping & upload</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Custom QR Standee design files</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Premium Acrylic Table Stands (Shipped)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zoom Staff Training session</li>
                </ul>
              </div>

              {/* Toggle configuration inclusion */}
              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                <span className="text-xs text-slate-300 font-bold">Add to my purchase:</span>
                <button 
                  onClick={() => { playSound('click'); setIncludeSetupService(!includeSetupService); }}
                  className={`px-3 py-1.5 text-[10px] font-black uppercase rounded-lg border transition-all cursor-pointer ${includeSetupService ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                >
                  {includeSetupService ? '✓ Added' : '+ Add Service'}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Secure Razorpay Payment Checkout Component integration */}
      <section className="bg-slate-900/20 border-t border-b border-slate-900 py-12 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-black">Buy Source Code & Blueprint</h3>
            <p className="text-slate-400 text-sm mt-1">Get instant lifetime access to audited code & pre-configured master sheets to launch your direct-order system.</p>
          </div>
          <RazorpayCheckout productId="menusarthi" />
        </div>
      </section>

      {/* Traditional vs MenuSarthi Comparison Matrix */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black">How Does MenuSarthi Compare?</h2>
            <p className="text-sm text-slate-400 mt-1">The difference between traditional dining delays and zero-friction QR checkouts.</p>
          </div>

          <div className="overflow-x-auto border border-slate-850 rounded-2xl">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-slate-300 font-bold border-b border-slate-850">
                  <th className="p-4">Feature Profile</th>
                  <th className="p-4">Traditional Restaurant</th>
                  <th className="p-4 text-red-400 bg-red-500/5">MenuSarthi Digital</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900 text-slate-300">
                <tr>
                  <td className="p-4 font-bold">Menu Medium</td>
                  <td className="p-4 text-slate-500">Printed paper (Tears, dirty, outdated)</td>
                  <td className="p-4 text-emerald-400 font-bold bg-red-500/5 flex items-center gap-1.5">Sleek Digital Web App (Instant updates) <CheckCircle2 className="w-3.5 h-3.5" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Ordering Loop</td>
                  <td className="p-4 text-slate-500">Waiter takes order manually (Slow, errors)</td>
                  <td className="p-4 text-emerald-400 font-bold bg-red-500/5">Customer orders directly from phone ✅</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Billing Speed</td>
                  <td className="p-4 text-slate-500">Manual register prints, split issues</td>
                  <td className="p-4 text-emerald-400 font-bold bg-red-500/5">Automatic checkout calculations ✅</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Customer Tracking</td>
                  <td className="p-4 text-slate-500">None (Waiters repeatedly asked 'kahan hai?')</td>
                  <td className="p-4 text-emerald-400 font-bold bg-red-500/5">Live progress tracker screen ✅</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Analytics & Tax Audit</td>
                  <td className="p-4 text-slate-500">Manual logs (Reconciliation headache)</td>
                  <td className="p-4 text-emerald-400 font-bold bg-red-500/5">Automated CGST/SGST analytics ✅</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Printing Costs</td>
                  <td className="p-4 text-slate-500">₹1,500+ / month in print & lamination</td>
                  <td className="p-4 text-emerald-400 font-bold bg-red-500/5">Zero printing costs entirely ✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-650/10 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black">Ready To Modernize Your Restaurant?</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Join restaurants that are serving customers faster with MenuSarthi. Start today with just ₹999/month, or save more with our yearly plan and get 2 months FREE.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20live%20demo%20of%20MenuSarthi%20for%20my%20restaurant."
              target="_blank" rel="noreferrer"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black text-lg rounded-xl shadow-lg shadow-red-500/25 flex items-center justify-center gap-2 group hover:-translate-y-0.5 transition-transform"
            >
              Book Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20have%20questions%20about%20MenuSarthi%20pricing%20and%20UPI%20settlement."
              target="_blank" rel="noreferrer"
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-lg rounded-xl border border-slate-800 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5 text-emerald-500" /> Talk to Our Team
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-900/10 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black">FAQ / Need Clarifications?</h2>
            <p className="text-sm text-slate-400 mt-1">Quick answers to common questions about direct QR dining operations.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Does it require guests to install any smartphone app?",
                a: "Absolutely not! Guests simply scan the table QR code using their default phone camera or Google Lens. Your digital menu opens instantly inside their default browser (Safari, Chrome, etc.). They can order and pay directly without downloads."
              },
              {
                q: "How do UPI payments settle into my restaurant account?",
                a: "We link the system directly with your existing restaurant UPI VPA handle (e.g., merchant@ybl or owner@paytm). Payments from Google Pay, PhonePe, Paytm, or BHIM bypass third-party wallets entirely and transfer cash straight into your bank instantly. No 2% merchant commission fees!"
              },
              {
                q: "Is there any expensive hosting fees or server maintenance?",
                a: "Zero. MenuSarthi operates using Google Cloud Apps Script engines. This means you do not pay for any monthly database hosting, VM servers, or system architects. It is fast, stable, and highly transparent."
              },
              {
                q: "What support do we get for setting up our restaurant menu?",
                a: "With our One-Time Setup service (₹2,999), our success specialists handle everything. Send us your printed menu card (or PDF/photos), and we will configure your categories, items, and toppings. We generate high-res QR codes and ship durable acrylic stands to your address."
              },
              {
                q: "Can we edit prices or toggle stock ourselves?",
                a: "Yes! Your central Admin panel lets you change prices, add dishes, and toggle 'Out of stock' instantly. If an ingredient runs out, toggle it off to prevent wrong table orders."
              },
              {
                q: "Kya yeh local dhabas aur small roadside eateries ke liye bhi perfect hai?",
                a: "Haan, bilkul! MenuSarthi local dhabas, roadside family restaurants, aur street-food corners ke liye ekdum perfect aur super easy hai. Table par QR codes lagane se clients khud mobile se seedhe order karte hain, jisse baar-baar chilane aur waiter dhoodhne ka tension khatam ho jaata hai. Aur customer se payment bhi seedhe aapke account me UPI se instant credit ho jaati hai!"
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all text-left">
                <button 
                  onClick={() => { playSound('click'); setFaqOpen(faqOpen === idx ? null : idx); }}
                  className="w-full p-5 font-bold text-sm sm:text-base text-slate-100 hover:text-white flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-slate-500 text-lg">{faqOpen === idx ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {faqOpen === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="p-5 pt-0 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-900 bg-slate-950/20">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Chatbot Widget Launcher */}
      <button 
        onClick={() => { playSound('click'); setIsChatOpen(!isChatOpen); }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-tr from-red-600 to-orange-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform cursor-pointer"
        title="Talk to MenuSarthi Bot"
      >
        <MessageSquare className="w-6 h-6 animate-pulse" />
      </button>

      {/* Floating Chat Panel Drawer */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 bg-slate-900 border border-slate-800 w-[320px] sm:w-[380px] h-[480px] rounded-[1.8rem] shadow-2xl overflow-hidden flex flex-col justify-between"
          >
            {/* Bot Header */}
            <div className="bg-gradient-to-r from-red-600 to-orange-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-left">
                <div className="w-9 h-9 rounded-full bg-black/20 flex items-center justify-center text-white font-extrabold text-xs">M</div>
                <div>
                  <h5 className="font-extrabold text-sm text-white">MenuSarthi Bot</h5>
                  <p className="text-[10px] text-red-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                    Your Restaurant Modernizer
                  </p>
                </div>
              </div>
              <button 
                onClick={() => { playSound('click'); setIsChatOpen(false); }}
                className="text-white hover:text-slate-200 text-lg font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Chat Body messages list */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs bg-slate-950/40 text-left">
              {chatMessages.map((msg, mIdx) => (
                <div key={mIdx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 max-w-[85%] rounded-2xl leading-normal ${msg.sender === 'user' ? 'bg-red-600 text-white rounded-tr-none' : 'bg-slate-900 border border-slate-800 text-slate-300 rounded-tl-none'}`}>
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              
              {/* Preset buttons */}
              {chatMessages.length === 2 && (
                <div className="space-y-1.5 pt-2">
                  {[
                    "📊 Calculate My ROI & Savings",
                    "📅 Book a Free Live Demo",
                    "❓ Ask a Question / FAQ",
                    "📱 How does it work?"
                  ].map((opt) => (
                    <button 
                      key={opt} 
                      onClick={() => handleChatOption(opt)}
                      className="block w-full text-left p-2 bg-slate-900 hover:bg-slate-850 border border-slate-800/80 rounded-xl text-slate-300 font-semibold cursor-pointer"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
              
              <div ref={chatBottomRef}></div>
            </div>

            {/* Input field Form */}
            <form onSubmit={handleSendChatMessage} className="bg-slate-900 p-3 border-t border-slate-800 flex items-center gap-2">
              <input 
                type="text" 
                placeholder="Ask about pricing, UPI setup..." 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 outline-none focus:border-red-500/50"
              />
              <button 
                type="submit" 
                className="p-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Footer Section */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-left">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">M</div>
              <span className="font-extrabold tracking-tight text-white text-base">MenuSarthi</span>
            </div>
            <p className="leading-relaxed">
              Your Customers Already Use QR Codes Every Day. Now let them order food the same way. MenuSarthi makes your restaurant, cafe, or local dhaba smarter, faster, and more profitable.
            </p>
            <p className="text-[10px] text-slate-550">Built with secure Google Cloud Apps Script protocols.</p>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">Product Features</h5>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo('features')} className="hover:text-white">QR Table Ordering</button></li>
              <li><button onClick={() => scrollTo('features')} className="hover:text-white">Digital Interactive Menu</button></li>
              <li><button onClick={() => scrollTo('features')} className="hover:text-white">Direct UPI Cashouts</button></li>
              <li><button onClick={() => scrollTo('features')} className="hover:text-white">Live Kitchen Monitor</button></li>
              <li><button onClick={() => scrollTo('features')} className="hover:text-white">CA Export Accounting</button></li>
              <li><button onClick={() => scrollTo('features')} className="hover:text-white">Onboarding Support</button></li>
            </ul>
          </div>

          <div className="space-y-3 col-span-2 sm:col-span-1">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">Contact & Assistance</h5>
            <p className="leading-relaxed">Questions? Connect with our central sales desk for onboarding, bulk QR standee prints, or white-label solutions.</p>
            <div className="space-y-1.5 font-semibold text-slate-300">
              <p>✉ surajautomation.surajdx@gmail.com</p>
              <p>📱 Contact / WhatsApp: +91 8851666208</p>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">Legal Links</h5>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="/refunds" className="hover:text-white">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px]">
          <p>© 2026 MenuSarthi Systems Private Limited. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-slate-300">Terms of Service</a>
            <span>•</span>
            <a href="/refunds" className="hover:text-slate-300">Refunds</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
