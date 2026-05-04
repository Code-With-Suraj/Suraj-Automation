import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Package, Receipt, Wallet, Users, Cake, Dumbbell, Utensils, ArrowRight, Store, Calculator, PieChart, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const colorStyles: Record<string, { bg: string, text: string, hoverText: string, buttonBg: string, buttonHoverBg: string }> = {
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', hoverText: 'hover:text-indigo-700', buttonBg: 'bg-indigo-600', buttonHoverBg: 'hover:bg-indigo-700' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', hoverText: 'hover:text-emerald-700', buttonBg: 'bg-emerald-600', buttonHoverBg: 'hover:bg-emerald-700' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', hoverText: 'hover:text-blue-700', buttonBg: 'bg-blue-600', buttonHoverBg: 'hover:bg-blue-700' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', hoverText: 'hover:text-amber-700', buttonBg: 'bg-amber-600', buttonHoverBg: 'hover:bg-amber-700' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', hoverText: 'hover:text-purple-700', buttonBg: 'bg-purple-600', buttonHoverBg: 'hover:bg-purple-700' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-600', hoverText: 'hover:text-rose-700', buttonBg: 'bg-rose-600', buttonHoverBg: 'hover:bg-rose-700' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', hoverText: 'hover:text-orange-700', buttonBg: 'bg-orange-600', buttonHoverBg: 'hover:bg-orange-700' },
  red: { bg: 'bg-red-50', text: 'text-red-600', hoverText: 'hover:text-red-700', buttonBg: 'bg-red-600', buttonHoverBg: 'hover:bg-red-700' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-600', hoverText: 'hover:text-teal-700', buttonBg: 'bg-teal-600', buttonHoverBg: 'hover:bg-teal-700' },
};

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e: MouseEvent) => {
    e.preventDefault();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (e: MouseEvent) => {
    e.preventDefault();
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-48 sm:h-56 mb-6 rounded-2xl overflow-hidden group/carousel bg-slate-100 flex-shrink-0">
      <img 
        src={images[currentIndex]} 
        alt={`Product screenshot ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-500"
        onError={(e) => {
          e.currentTarget.onerror = null;
          // When image is broken (e.g. 0 byte file or missing), hide it so the background shows instead of broken icon
          e.currentTarget.style.display = 'none';
        }}
        onLoad={(e) => {
          e.currentTarget.style.display = 'block';
        }}
      />
      {images.length > 1 && (
        <>
          <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
            <button
              onClick={prevSlide}
              className="p-1 rounded-full bg-white/80 text-slate-800 hover:bg-white transition-colors shadow"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-1 rounded-full bg-white/80 text-slate-800 hover:bg-white transition-colors shadow"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
            {images.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-3 opacity-100 shadow-sm' : 'bg-white/60 opacity-80'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function Products() {
  useSEO('Products | Suraj Automation', 'Explore all our custom web apps for business automation including GST tools, HR systems, Expense trackers, and more.');

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'popularity' | 'alphabetical'>('popularity');

  const products = [
    {
      id: 'loansarthi',
      name: 'LoanSarthi',
      tagline: 'Smart Finance & Recovery Control System',
      description: 'Small finance businesses ke liye powerful, mobile-first loan management system. Loan create, EMI track, recovery manage, and reports all in one dashboard.',
      icon: <Wallet className="w-8 h-8" />,
      color: 'indigo',
      featured: true,
      category: 'Accounting & Finance',
      popularity: 105,
      images: [
        `/images/products/loansarthi1.jpg`,
        `/images/products/loansarthi2.jpg`,
        `/images/products/loansarthi3.jpg`,
      ]
    },
    {
      id: 'supplysarthi',
      name: 'SupplySarthi',
      tagline: 'Complete Supply & Distribution Management System',
      description: 'Stop taking orders on WhatsApp. Manage your entire supply business in one Google Sheet-based system—from orders to GST invoices. Pay once, use for a lifetime.',
      icon: <Store className="w-8 h-8" />,
      color: 'teal',
      featured: true,
      category: 'Retail & Supply',
      popularity: 100,
      images: [
        `/images/products/supplysarthi1.jpg`,
        `/images/products/supplysarthi2.jpg`,
        `/images/products/supplysarthi3.jpg`,
      ]
    },
    {
      id: 'cogs-dashboard',
      name: 'Custom COGS Dashboard',
      tagline: 'Automated COGS Reporting & AI Profit Dashboard',
      description: 'Stop guessing your profit margins. A highly powerful COGS reporting web application built on Google Workspace that automates multi-branch cost tracking with AI-driven insights.',
      icon: <PieChart className="w-8 h-8" />,
      color: 'amber',
      category: 'Accounting & Finance',
      popularity: 98,
      images: [
        `/images/products/cogs-dashboard1.jpg`,
        `/images/products/cogs-dashboard2.jpg`,
        `/images/products/cogs-dashboard3.jpg`,
      ]
    },
    {
      id: 'hisabsarthi',
      name: 'HisabSarthi',
      tagline: 'Google Sheets-based GST Accounting Tool',
      description: 'Ditch Tally and complex ERPs. HisabSarthi is a simple, affordable GST invoicing and accounting system built for Indian small businesses. 100% data control in your Google Drive.',
      icon: <Calculator className="w-8 h-8" />,
      color: 'blue',
      category: 'Accounting & Finance',
      popularity: 95,
      images: [
        `/images/products/hisabsarthi1.jpg`,
        `/images/products/hisabsarthi2.jpg`,
        `/images/products/hisabsarthi3.jpg`,
      ]
    },
    {
      id: 'rationkart',
      name: 'RationKart',
      tagline: 'Store Se Site Tak – Complete Digital Ordering & Approval System',
      description: 'A simple and powerful web app that helps grocery stores, kirana shops, and small retail businesses manage item requests, approvals, and stock in one place.',
      icon: <ShoppingCart className="w-8 h-8" />,
      color: 'indigo',
      category: 'Retail & Supply',
      popularity: 90,
      images: [
        `/images/products/rationkart1.jpg`,
        `/images/products/rationkart2.jpg`,
        `/images/products/rationkart3.jpg`,
      ]
    },
    {
      id: 'stocksarthi',
      name: 'StockSarthi',
      tagline: 'Stock Management System for Small Business',
      description: 'Take full control of your stock without Excel confusion. A simple inventory management software and stock tracking system using Google Sheets built for growing businesses.',
      icon: <Package className="w-8 h-8" />,
      color: 'emerald',
      category: 'Inventory',
      popularity: 85,
      images: [
        `/images/products/stocksarthi1.jpg`,
        `/images/products/stocksarthi2.jpg`,
        `/images/products/stocksarthi3.jpg`,
      ]
    },
    {
      id: 'billsarthi',
      name: 'BillSarthi',
      tagline: 'Smart Vendor Bill Management System for Growing Businesses',
      description: 'Bills with errors? Accounts team rejecting entries? Not anymore. BillSarthi is a smart web-based billing system that helps store teams enter vendor bills correctly — the first time.',
      icon: <Receipt className="w-8 h-8" />,
      color: 'blue',
      category: 'Accounting & Finance',
      popularity: 80,
      images: [
        `/images/products/billsarthi1.jpg`,
        `/images/products/billsarthi2.jpg`,
        `/images/products/billsarthi3.jpg`,
      ]
    },
    {
      id: 'claimo',
      name: 'Claimo',
      tagline: 'Smart Expense & Reimbursement Management System',
      description: 'Tired of Excel expense sheets and approval delays? Claimo brings structure, transparency, and speed to your entire expense process.',
      icon: <Wallet className="w-8 h-8" />,
      color: 'amber',
      category: 'HR & Management',
      popularity: 75,
      images: [
        `/images/products/claimo1.jpg`,
        `/images/products/claimo2.jpg`,
        `/images/products/claimo3.jpg`,
      ]
    },
    {
      id: 'karmsarthi',
      name: 'KarmSarthi',
      tagline: 'HR Management System for Small Business',
      description: 'Stop managing HR on Excel & WhatsApp. KarmSarthi is an employee management system for SMBs that handles your daily HR operations in one structured platform.',
      icon: <Users className="w-8 h-8" />,
      color: 'purple',
      category: 'HR & Management',
      popularity: 70,
      images: [
        `/images/products/karmsarthi1.jpg`,
        `/images/products/karmsarthi2.jpg`,
        `/images/products/karmsarthi3.jpg`,
      ]
    },
    {
      id: 'cakesarthi',
      name: 'CakeSarthi',
      tagline: 'Complete Online Ordering & Growth System for Bakeries',
      description: 'Turn your local bakery into a smart online business. CakeSarthi gives you your own online cake ordering website, smart checkout, UPI payments, and an owner dashboard.',
      icon: <Cake className="w-8 h-8" />,
      color: 'rose',
      category: 'Food & Beverage',
      popularity: 60,
      images: [
        `/images/products/cakesarthi1.jpg`,
        `/images/products/cakesarthi2.jpg`,
        `/images/products/cakesarthi3.jpg`,
      ]
    },
    {
      id: 'gymsarthi',
      name: 'GymSarthi',
      tagline: 'Gym Management System for Small Gym',
      description: 'Stop running your gym on register & memory. GymSarthi is a simple gym member tracking system and fee management system specially built for Indian gym owners.',
      icon: <Dumbbell className="w-8 h-8" />,
      color: 'orange',
      category: 'Health & Fitness',
      popularity: 50,
      images: [
        `/images/products/gymsarthi1.jpg`,
        `/images/products/gymsarthi2.jpg`,
        `/images/products/gymsarthi3.jpg`,
      ]
    },
    {
      id: 'menusarthi',
      name: 'MenuSarthi',
      tagline: 'Digital Menu for Restaurant & QR Ordering System',
      description: 'Turn your restaurant into a smart digital ordering system. MenuSarthi gives you your own premium digital menu and restaurant online ordering system without heavy commissions.',
      icon: <Utensils className="w-8 h-8" />,
      color: 'red',
      category: 'Food & Beverage',
      popularity: 40,
      images: [
        `/images/products/menusarthi1.jpg`,
        `/images/products/menusarthi2.jpg`,
        `/images/products/menusarthi3.jpg`,
      ]
    }
  ];

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredAndSortedProducts = products
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'popularity') return b.popularity - a.popularity;
      return a.name.localeCompare(b.name);
    });

  return (
    <main className="pt-24 pb-20">
      <section className="relative py-20 lg:py-32 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/80 via-white to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold tracking-wide mb-6 border border-indigo-100 shadow-sm">
              Custom Web Apps for Business
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Ready-to-Deploy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                Automation Systems for SMBs
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
              Powerful, customizable web applications and small business automation tools designed specifically to solve the most common operational challenges.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter and Sort UI */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <div className="hidden sm:flex items-center gap-2 text-slate-500 mr-2">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-wider">Filter:</span>
              </div>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === category ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600'}`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 hidden sm:inline-block">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'popularity' | 'alphabetical')}
                className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 outline-none font-bold shadow-sm cursor-pointer"
              >
                <option value="popularity">Popularity</option>
                <option value="alphabetical">Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredAndSortedProducts.map((product, idx) => {
                const styles = colorStyles[product.color];
                const isFeatured = product.featured;
                
                return (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className={`bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border flex flex-col hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] hover:border-indigo-200 transition-all duration-300 group relative overflow-hidden ${isFeatured && activeCategory === 'All' ? 'border-indigo-100 md:col-span-2 lg:col-span-3 lg:flex-row gap-8 lg:gap-10 items-center overflow-visible' : 'border-slate-100'}`}
                  >
                    {isFeatured && activeCategory === 'All' && (
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-xs font-bold px-5 py-1.5 rounded-bl-[1.5rem] rounded-tr-[2rem] shadow-sm z-10 hidden md:block">
                        FEATURED
                      </div>
                    )}
                    
                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-md ${styles.bg} ${styles.text} shadow-sm backdrop-blur-md bg-white/70`}>
                        {product.category}
                      </span>
                    </div>

                    <div className={`w-full ${isFeatured && activeCategory === 'All' ? 'lg:w-[45%] shrink-0' : ''} pt-4`}>
                      <ImageCarousel images={product.images} />
                    </div>
                    
                    <div className={`flex flex-col flex-grow ${isFeatured && activeCategory === 'All' ? 'lg:w-[55%]' : ''}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`rounded-xl border border-slate-100 shadow-sm ${styles.bg} flex items-center justify-center ${styles.text} shrink-0 w-12 h-12 ${isFeatured && activeCategory === 'All' ? 'lg:w-16 lg:h-16' : ''}`}>
                          {product.icon}
                        </div>
                        <h3 className={`font-extrabold text-slate-900 tracking-tight text-xl ${isFeatured && activeCategory === 'All' ? 'lg:text-4xl' : 'md:text-2xl'}`}>{product.name}</h3>
                      </div>
                      <p className={`text-xs font-bold ${styles.text} mb-4 uppercase tracking-wider`}>{product.tagline}</p>
                      <p className={`text-slate-600 mb-8 font-body leading-relaxed flex-grow text-sm md:text-base ${isFeatured && activeCategory === 'All' ? 'lg:text-lg max-w-3xl' : ''}`}>
                        {product.description}
                      </p>
                      <div className={`${isFeatured && activeCategory === 'All' ? 'mt-auto' : ''}`}>
                        <Link
                          to={`/products/${product.id}`}
                          className={`inline-flex items-center justify-center px-6 py-3 bg-slate-950 text-white rounded-xl font-bold transition-all shadow-md shadow-slate-900/10 hover:bg-slate-800 hover:-translate-y-0.5 group w-full ${isFeatured && activeCategory === 'All' ? 'lg:w-auto px-8 py-4' : ''}`}
                        >
                          View Details
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}
