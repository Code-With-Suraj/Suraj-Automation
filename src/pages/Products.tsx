import { useState, MouseEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Package, Receipt, Wallet, Users, Cake, Dumbbell, Utensils, ArrowRight, Store, Calculator, PieChart, ChevronLeft, ChevronRight, Filter, ListChecks, Search, ChevronsLeft, ChevronsRight, Sparkles, LayoutGrid } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useUser } from '../contexts/UserContext';
import { PRODUCT_SOLUTIONS, calculateDiscount } from '../data/productSolutions';

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

const ImageCarousel = ({ images, className = '' }: { images: string[], className?: string }) => {
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
    <div className={`relative w-full rounded-2xl overflow-hidden group/carousel bg-slate-100 flex-shrink-0 ${className || 'h-48 sm:h-56 mb-6'}`}>
      <img 
        src={images[currentIndex]} 
        alt={`Product screenshot ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-500"
        referrerPolicy="no-referrer"
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
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
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

  const { customProducts } = useUser();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'popularity' | 'alphabetical'>('popularity');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

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
        `https://blogger.googleusercontent.com/img/a/AVvXsEh5zZHbpxiw_k6uVI42WF3xsmx5ufKvjLCZmmNF7Wx1w3JXIFvgHSu6IQuiigrjGxnmzU99q-ZLe143TGx1uqJwdDWgBGzvwXLdcatbImKrD8TRKda9y4PnW6m_88uEs9JmwklolKLHhMnD4dFrJ3fxBXKncoDZyu4YPXgZ5vGfLE2vSbNUXEH-iHeUVbw=s16000`,
        `https://blogger.googleusercontent.com/img/a/AVvXsEhRwZ7jr27Aex3DkMF2H3BqRhc2BniAv718FR-O7y1mWKbbzapoAqoduJwO8XXHt6SrsBzDMSDkiro4eeIszkMkAfvEOaPUaE-RTywgxYtQ2YBir6qwPcQXq83P9ediOyHf9SU1SBQgqWRDr5Matusd3oyXCyWBCiNjRI4DRxc_NlvPPnkgzmq0QNweP6M=s16000`,
        `https://blogger.googleusercontent.com/img/a/AVvXsEgTKZ12p4akvWrmyqk_VoUqoFnEeLqd6cT2S24OXfzFtuQA7TVlUM4Z6mxG7_ygK4HMAGAMwisyw_AE53vzOAesgi9jrPbcXkrxk6-VhNvtEbz9Fq9apnLCkhY3ikuJIXEbD5nsbygZj4cWjTejZ4brVn7qhqyJ77WWqBUO-TJss-SeXbV5nGEz-T4Z6eo=s16000`,
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
        `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80`,
      ]
    },
    {
      id: 'cogs-analytics-dashboard',
      name: 'COGS Analytics Dashboard',
      tagline: 'Automated COGS Reporting & AI Profit Dashboard',
      description: 'Stop guessing your profit margins. A highly powerful COGS reporting web application built on Google Workspace that automates multi-branch cost tracking with AI-driven insights.',
      icon: <PieChart className="w-8 h-8" />,
      color: 'amber',
      category: 'Accounting & Finance',
      popularity: 98,
      images: [
        `https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1543286386-7a39e859a41c?auto=format&fit=crop&w=800&q=80`,
      ]
    },
    {
      id: 'cfo-dashboard',
      name: 'CFO Dashboard for Indian SMBs',
      tagline: 'Your Entire Business Financial Health. One Dashboard.',
      description: 'The CFO Dashboard gives you a complete financial command center for your business to see your cash position instantly and forecast cash flow.',
      icon: <PieChart className="w-8 h-8" />,
      color: 'blue',
      category: 'Accounting & Finance',
      popularity: 97,
      images: [
        `https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=800&q=80`,
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
        `https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=800&q=80`,
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
        `https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80`,
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
        `https://images.unsplash.com/photo-1553413719-87587ef72441?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=800&q=80`,
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
        `https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=800&q=80`,
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
        `https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1534951009808-766178b47a4f?auto=format&fit=crop&w=800&q=80`,
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
        `https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1531535934027-667f6787eda5?auto=format&fit=crop&w=800&q=80`,
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
        `https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80`,
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
        `https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80`,
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
        `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80`,
      ]
    },
    {
      id: 'vendorsarthi',
      name: 'VendorSarthi',
      tagline: 'Smart Vendor Management System',
      description: 'A complete Vendor Management System built entirely on Google Sheets to end manual RFQs, WhatsApp quotes, and Excel comparisons.',
      icon: <ListChecks className="w-8 h-8" />,
      color: 'teal',
      category: 'Retail & Supply',
      popularity: 88,
      images: [
        `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80`,
      ]
    },
    {
      id: 'personalfinsarthi',
      name: 'PersonalFin Sarthi',
      tagline: 'India’s Smartest Personal Finance Tracker',
      description: 'Track expenses, savings, debt, investments & subscriptions from one beautiful dashboard. Your secure, offline-first personal CFO built on Google Apps Script and Google Sheets.',
      icon: <Wallet className="w-8 h-8" />,
      color: 'emerald',
      category: 'Accounting & Finance',
      popularity: 87,
      images: [
        'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 'hiresarthi',
      name: 'HireSarthi',
      tagline: 'Hire Faster. Onboard Smarter. Manage Employees in One Place.',
      description: 'HireSarthi helps growing businesses streamline recruitment, offer letter generation, employee onboarding, and workforce management from a single platform. Track candidates, automate hiring workflows, issue digital offer letters, and maintain a complete employee database.',
      icon: <Users className="w-8 h-8" />,
      color: 'indigo',
      featured: true,
      category: 'HR & Management',
      popularity: 110,
      images: [
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 'budgetsarthi',
      name: 'BudgetSarthi',
      tagline: 'Expense Control & Departmental Finance Governance',
      description: 'A finance governance system focused on budget discipline and spend visibility before overspending happens. Sitting one layer above accounting systems to stop manual budget chaos.',
      icon: <Calculator className="w-8 h-8" />,
      color: 'blue',
      category: 'Accounting & Finance',
      popularity: 94,
      images: [
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 'salarysarthi',
      name: 'SalarySarthi',
      tagline: 'HRMS + Payroll Management System',
      description: 'SalarySarthi isn\'t trying to be another bloated HRMS—it focuses on solving payroll and attendance pain for SMBs surprisingly well.',
      icon: <Users className="w-8 h-8" />,
      color: 'indigo',
      featured: true,
      category: 'HR & Management',
      popularity: 115,
      images: [
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 'bookingsarthi',
      name: 'BookingSarthi',
      tagline: 'Appointment Booking & Service Business Automation',
      description: 'A complete micro-SaaS platform built specifically for Indian service businesses, managing appointments, staff scheduling, CRM, and marketing.',
      icon: <ShoppingCart className="w-8 h-8" />,
      color: 'purple',
      featured: true,
      category: 'Operations & Booking',
      popularity: 120,
      images: [
        'https://images.unsplash.com/photo-1521590832167-7bfcbaa6362d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80'
      ]
    }
  ];

  // Merge static and dynamic products to prevent duplicates.
  // Custom products override static product fields where applicable.
  const productsMap = new Map<string, any>();

  // Add all static products first
  products.forEach(p => {
    const solData = PRODUCT_SOLUTIONS[p.id];
    productsMap.set(p.id, {
      ...p,
      price: solData?.price || '₹1,499',
      marketPrice: solData?.marketPrice || ''
    });
  });

  // Overwrite or append custom products
  customProducts.forEach(p => {
    const existing = productsMap.get(p.id);
    productsMap.set(p.id, {
      id: p.id,
      name: p.name,
      price: p.price || (existing ? existing.price : '₹1,499'),
      marketPrice: p.marketPrice || (existing ? existing.marketPrice : ''),
      tagline: p.tagline || (existing ? existing.tagline : 'Business Automation & Sheets Blueprint'),
      description: p.description || (existing ? existing.description : 'Google Workspace custom blueprint, automated sheets template and deployment handbook.'),
      icon: existing ? existing.icon : <Package className="w-8 h-8" />,
      color: p.color || (existing ? existing.color : 'indigo'),
      featured: existing ? existing.featured : false,
      category: p.category || (existing ? existing.category : 'Accounting & Finance'),
      popularity: existing ? existing.popularity : 30,
      images: p.images && p.images.length > 0 ? p.images : (existing ? existing.images : [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
      ]),
      isHidden: !!p.isHidden
    });
  });

  const mergedProducts = Array.from(productsMap.values()).filter(p => !p.isHidden);

  const categories = ['All', ...Array.from(new Set(mergedProducts.map(p => p.category)))];

  const filteredAndSortedProducts = mergedProducts
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .filter(p => {
      if (!searchTerm) return true;
      const term = searchTerm.toLowerCase();
      return (
        p.name.toLowerCase().includes(term) ||
        p.tagline.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
      );
    })
    .sort((a, b) => {
      if (sortBy === 'popularity') return b.popularity - a.popularity;
      return a.name.localeCompare(b.name);
    });

  // Reset currentPage to 1 when filters, sorting, or page size change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchTerm, sortBy, itemsPerPage]);

  const totalFilteredCount = filteredAndSortedProducts.length;
  const totalPages = Math.ceil(totalFilteredCount / itemsPerPage) || 1;

  // Safe bounds check
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <main className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Modern Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        <div className="bg-slate-950 rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold tracking-wide mb-6 border border-indigo-500/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Automate Your Business
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Smarter.</span> Not Harder.
            </h1>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Discover our collection of premium, ready-to-deploy web applications built to solve your operational chaos.
            </p>
          </div>
          
          <div className="relative z-10 w-full md:w-80 shrink-0">
             <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-2 rounded-2xl flex items-center shadow-xl focus-within:border-indigo-500/50 transition-colors">
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border-none text-white focus:ring-0 placeholder-slate-500 font-medium px-3 py-2 outline-none"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')} 
                  className="p-2 text-slate-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Clear search</span>
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Sidebar + Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 flex flex-col lg:flex-row gap-10">
        
        {/* Left Sidebar */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="sticky top-32 space-y-10">
             {/* Categories */}
             <div>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4" /> Categories
                </h3>
                <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-none">
                   {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => {
                        setActiveCategory(category);
                        setCurrentPage(1);
                      }}
                      className={`px-4 py-3 rounded-xl text-sm font-bold transition-all text-left whitespace-nowrap shrink-0 group flex items-center justify-between ${
                        activeCategory === category 
                          ? 'bg-slate-900 text-white shadow-md' 
                          : 'bg-white text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {category}
                      {activeCategory === category && <ChevronRight className="w-4 h-4 text-indigo-400" />}
                    </button>
                   ))}
                </div>
             </div>

             {/* Sort By */}
             <div className="hidden lg:block">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Filter className="w-4 h-4" /> Sort By
                </h3>
                <div className="bg-white rounded-xl p-1.5 border border-slate-200 shadow-sm flex flex-col gap-1">
                  <button
                    onClick={() => setSortBy('popularity')}
                    className={`px-4 py-2.5 rounded-lg text-sm font-bold text-left transition-colors ${sortBy === 'popularity' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    Popularity
                  </button>
                  <button
                    onClick={() => setSortBy('alphabetical')}
                    className={`px-4 py-2.5 rounded-lg text-sm font-bold text-left transition-colors ${sortBy === 'alphabetical' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    Alphabetical (A-Z)
                  </button>
                </div>
             </div>
          </div>
        </aside>

        {/* Right Product Grid */}
        <div className="flex-grow flex flex-col min-h-[50vh]">
          {/* Mobile Sort */}
          <div className="flex lg:hidden items-center justify-between mb-6 bg-white p-3 rounded-xl border border-slate-200">
            <span className="text-sm font-bold text-slate-500 ml-2">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'popularity' | 'alphabetical')}
              className="bg-slate-50 border-none text-slate-900 text-sm rounded-lg focus:ring-0 font-bold outline-none cursor-pointer py-2 px-3"
            >
              <option value="popularity">Popularity</option>
              <option value="alphabetical">Alphabetical (A-Z)</option>
            </select>
          </div>

          {currentProducts.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center p-12 bg-white rounded-[2rem] border border-slate-200 border-dashed">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-4 text-slate-400">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">No products found</h3>
              <p className="text-slate-500 font-medium max-w-md">Try adjusting your search terms or filters to find what you're looking for.</p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                className="mt-6 px-6 py-2.5 bg-indigo-50 text-indigo-600 font-bold rounded-xl hover:bg-indigo-100 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 auto-rows-max">
              <AnimatePresence mode="popLayout">
                {currentProducts.map((product) => {
                  const styles = colorStyles[product.color];
                  const isFeatured = product.featured;
                  
                  return isFeatured && activeCategory === 'All' ? (
                    <motion.div
                      layout
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="bg-slate-900 rounded-[2rem] p-6 lg:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-slate-800 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center group relative overflow-hidden md:col-span-2 text-white transition-all duration-500 hover:border-indigo-500/40 hover:shadow-[0_20px_60px_-10px_rgba(79,70,229,0.3)]"
                    >
                      {/* Background Glow */}
                      <div className={`absolute -bottom-40 -left-40 w-[40rem] h-[40rem] ${styles.buttonBg} rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />
                      
                      <div className="w-full lg:w-1/2 flex flex-col z-10">
                        <div className="flex gap-2 mb-6">
                          <span className="bg-indigo-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 tracking-wider">
                            <Sparkles className="w-3 h-3" />
                            FEATURED
                          </span>
                          <span className="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                            {product.category}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`rounded-2xl bg-slate-950 border border-slate-800 p-4 shrink-0 shadow-2xl text-white w-14 h-14 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                            {product.icon}
                          </div>
                          <div>
                            <h3 className="font-extrabold text-3xl md:text-4xl tracking-tight leading-none mb-1">{product.name}</h3>
                          </div>
                        </div>
                        
                        <p className={`text-xs md:text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4 leading-relaxed`}>{product.tagline}</p>
                        <p className="text-slate-400 mb-8 text-base md:text-lg leading-relaxed font-medium">
                          {product.description}
                        </p>
                        
                        <div className="flex items-center justify-between mt-auto gap-4 flex-wrap">
                           <div className="flex flex-col">
                             <span className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">One-time Price</span>
                             <div className="flex items-end gap-3">
                               <span className="text-3xl font-black text-white leading-none">{product.price || "₹1,499"}</span>
                               {product.marketPrice && (
                                 <div className="flex items-center gap-2 pb-0.5">
                                   <span className="text-sm text-slate-500 line-through font-bold">{product.marketPrice}</span>
                                 </div>
                               )}
                             </div>
                           </div>
                           
                           <Link
                            to={`/products/${product.id}`}
                            className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-slate-950 rounded-xl font-black transition-all shadow-xl hover:bg-indigo-50 group/btn"
                          >
                            Explore Product
                            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                      
                      <div className="w-full lg:w-1/2 z-10 relative">
                        <div className="rounded-2xl border border-slate-700/50 p-2 bg-slate-800/50 backdrop-blur-sm shadow-2xl relative group-hover:border-indigo-500/30 transition-colors duration-500">
                          <ImageCarousel images={product.images} className="h-64 sm:h-72 lg:h-[22rem]" />
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      layout
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-200/80 flex flex-col hover:shadow-xl hover:border-indigo-200/60 transition-all duration-300 group relative overflow-hidden h-full"
                    >
                      <div className="absolute top-4 left-4 z-10 flex gap-2">
                         {isFeatured && (
                           <span className="text-[10px] uppercase tracking-wider font-black px-2.5 py-1 rounded-lg bg-indigo-600 text-white shadow-sm">
                             Star
                           </span>
                         )}
                        <span className={`text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-lg ${styles.bg} ${styles.text} shadow-sm backdrop-blur-md`}>
                          {product.category}
                        </span>
                      </div>

                      <div className="w-full mb-6">
                        <ImageCarousel images={product.images} className="h-56 rounded-[1.25rem]" />
                      </div>
                      
                      <div className="flex flex-col flex-grow">
                        <div className="flex items-center gap-4 mb-3">
                          <div className={`rounded-xl ${styles.bg} flex items-center justify-center ${styles.text} shrink-0 w-12 h-12`}>
                            {product.icon}
                          </div>
                          <h3 className="font-extrabold text-slate-900 tracking-tight text-xl leading-tight">{product.name}</h3>
                        </div>
                        <p className={`text-[11px] font-black ${styles.text} mb-3 uppercase tracking-wider leading-relaxed line-clamp-2`}>{product.tagline}</p>
                        <p className="text-slate-600 mb-6 font-medium leading-relaxed flex-grow text-sm line-clamp-3">
                          {product.description}
                        </p>
                        
                        <div className="mt-auto border-t border-slate-100 pt-5 flex items-center justify-between">
                          <div className="flex flex-col">
                             <div className="flex items-center gap-2">
                               <span className="text-xl font-black text-slate-900 leading-none">{product.price || "₹1,499"}</span>
                             </div>
                             {product.marketPrice && (
                               <div className="flex items-center gap-1.5 mt-1">
                                 <span className="text-[11px] text-slate-400 line-through font-bold">{product.marketPrice}</span>
                                 <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                                   {calculateDiscount(product.price || "₹1,499", product.marketPrice)}% OFF
                                 </span>
                               </div>
                             )}
                          </div>
                          <Link
                            to={`/products/${product.id}`}
                            className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center transition-transform hover:scale-110 hover:bg-indigo-600 group/link"
                            aria-label={`View ${product.name}`}
                          >
                            <ArrowRight className="w-4 h-4 group-hover/link:-rotate-45 transition-transform duration-300" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-slate-200/80 shadow-sm px-6 py-4 rounded-2xl w-full">
              <div className="text-sm text-slate-500 font-bold order-2 sm:order-1">
                Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, totalFilteredCount)} of {totalFilteredCount}
              </div>

              <div className="flex items-center gap-1 order-1 sm:order-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-all mr-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <div className="flex items-center px-2">
                   <span className="text-sm font-black text-slate-900 bg-slate-100 min-w-[2rem] text-center py-1 rounded-md">{currentPage}</span>
                   <span className="text-sm font-bold text-slate-400 mx-2">/</span>
                   <span className="text-sm font-bold text-slate-500">{totalPages}</span>
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-all ml-1"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
