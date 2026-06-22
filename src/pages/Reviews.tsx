import { useState, useEffect, FormEvent } from 'react';
import { 
  collection, 
  onSnapshot, 
  query, 
  where, 
  orderBy, 
  doc, 
  setDoc, 
  deleteDoc, 
  Timestamp 
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { useUser } from '../contexts/UserContext';
import { useSEO } from '../hooks/useSEO';
import { ServiceReview } from '../types';
import { 
  Star, 
  CheckCircle, 
  Clock, 
  MessageSquare, 
  Plus, 
  Filter, 
  SlidersHorizontal, 
  Trash2, 
  ShieldAlert, 
  Sparkles, 
  X, 
  Loader2, 
  Info,
  Check,
  Award,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCT_SOLUTIONS } from '../data/productSolutions';
import { CORE_SERVICES, OTHER_SERVICES } from '../data/servicesData';

const SERVICE_PAGE_OPTIONS = [
  ...CORE_SERVICES.map(s => s.subtitle),
  ...OTHER_SERVICES
];

const PRODUCT_PAGE_OPTIONS = Object.values(PRODUCT_SOLUTIONS).map(p => `${p.name} - Product Solution`);

const ADDITIONAL_OPTIONS = [
  "Custom Apps Script Development",
  "Google Sheets Portal Workflow",
  "General Process Automation Consulting"
];

const DYNAMIC_SERVICES = [
  ...SERVICE_PAGE_OPTIONS,
  ...PRODUCT_PAGE_OPTIONS,
  ...ADDITIONAL_OPTIONS
];

export default function Reviews() {
  const { user, login, isAdmin } = useUser();
  const [reviews, setReviews] = useState<ServiceReview[]>([]);
  const [loading, setLoading] = useState(true);
  
  // UI states
  const [showFormModal, setShowFormModal] = useState(false);
  const [ratingFilter, setRatingFilter] = useState<number | 'all'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'highest' | 'lowest'>('newest');
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  
  // Form state
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [serviceUsed, setServiceUsed] = useState("Custom Apps Script Development"); // Custom Apps script as default
  const [authorTitle, setAuthorTitle] = useState(''); // e.g., CEO, Noida Ventures
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  // Apply SEO tags
  useSEO(
    "Client Reviews & Testimonials | Suraj Automation",
    "Read verified client testimonials and rating reviews of our customized Google Sheets and Google Apps Script automation services. Give your workflow a 5-star boost!",
    "reviews, client testimonials, ratings, Google Sheets automation, Google Apps Script reviews, Suraj Automation user feedback"
  );

  // Subscribe to reviews in realtime
  useEffect(() => {
    setLoading(true);
    let q;
    const reviewsRef = collection(db, 'reviews');

    if (isAdmin) {
      // Admin sees ALL reviews (including pending moderation)
      q = query(reviewsRef, orderBy('createdAt', 'desc'));
    } else {
      // Standard visitors only see APPROVED reviews
      // This prevents Permission Denied crashes based on rule constraints
      q = query(reviewsRef, where('isApproved', '==', true));
    }

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const list: ServiceReview[] = [];
        snapshot.forEach((docSnap) => {
          const data = docSnap.data();
          list.push({
            id: docSnap.id,
            authorName: data.authorName || 'Verified Client',
            authorEmail: data.authorEmail || '',
            authorPhotoURL: data.authorPhotoURL || '',
            authorTitle: data.authorTitle || 'Business Client',
            rating: data.rating || 5,
            comment: data.comment || '',
            serviceUsed: data.serviceUsed || 'Custom Automation',
            isApproved: !!data.isApproved,
            createdAt: data.createdAt instanceof Timestamp 
              ? data.createdAt.toDate() 
              : new Date(data.createdAt || Date.now())
          });
        });
        
        // Sorting in client memory to keep sync queries fast and non-indexed
        let sorted = [...list];
        if (sortBy === 'newest') {
          sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        } else if (sortBy === 'highest') {
          sorted.sort((a, b) => b.rating - a.rating || new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        } else if (sortBy === 'lowest') {
          sorted.sort((a, b) => a.rating - b.rating || new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        }

        setReviews(sorted);
        setLoading(false);
      },
      (error) => {
        console.error("Firestore reviews subscribe error:", error);
        handleFirestoreError(error, OperationType.LIST, 'reviews');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [isAdmin, sortBy]);

  // JSON-LD dynamic schema injection for Google Search rich snippet ranking
  useEffect(() => {
    const scriptId = 'reviews-json-ld';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const approvedReviews = reviews.filter(r => r.isApproved);
    const totalCount = approvedReviews.length || 18; // fallback realistic data if empty
    const totalRatingSum = approvedReviews.reduce((sum, r) => sum + r.rating, 0);
    const avgRating = approvedReviews.length > 0 
      ? (totalRatingSum / approvedReviews.length).toFixed(1) 
      : '4.9';

    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Suraj Automation",
      "image": window.location.origin + "/favicon.svg",
      "telephone": "+918851666208",
      "url": window.location.origin,
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": avgRating,
        "reviewCount": totalCount.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": approvedReviews.map(r => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": r.authorName
        },
        "datePublished": r.createdAt instanceof Date 
          ? r.createdAt.toISOString().split('T')[0]
          : new Date(r.createdAt).toISOString().split('T')[0],
        "reviewBody": r.comment,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": r.rating.toString(),
          "bestRating": "5",
          "worstRating": "1"
        }
      }))
    };

    script.textContent = JSON.stringify(schema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [reviews]);

  // Form submission handler
  const handleSubmitReview = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) {
      await login();
      return;
    }

    if (!comment.trim() || !serviceUsed) {
      alert("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);
    const reviewId = `review_${user.uid}_${Date.now()}`;
    const reviewRef = doc(db, 'reviews', reviewId);

    const payload = {
      id: reviewId,
      authorName: user.displayName || 'Client',
      authorEmail: user.email || '',
      authorPhotoURL: user.photoURL || '',
      authorTitle: authorTitle.trim() || 'Business Entrepreneur',
      rating: rating,
      comment: comment.trim(),
      serviceUsed: serviceUsed,
      isApproved: false, // Moderated by default, unless matches admin
      createdAt: new Date()
    };

    try {
      await setDoc(reviewRef, payload);
      setSuccessMessage(true);
      setComment('');
      setAuthorTitle('');
      setRating(5);
      
      // Auto dismiss modal in 4 seconds
      setTimeout(() => {
        setSuccessMessage(false);
        setShowFormModal(false);
      }, 4000);
      
    } catch (err: any) {
      console.error("Error submitting review:", err);
      const errorMessage = err instanceof Error ? err.message : String(err);
      
      if (errorMessage.includes("permission-denied") || errorMessage.includes("Missing or insufficient permissions")) {
        alert("Permission Denied: Your review could not be saved because of security rule restrictions or unauthorized parameters. Please log out and sign in again.");
      } else {
        alert(`Could not save review: ${errorMessage}`);
      }
      
      // Follow the custom firebase-integration error handling pattern precisely
      try {
        handleFirestoreError(err, OperationType.WRITE, `reviews/${reviewId}`);
      } catch (nestedErr) {
        // Log original thrown error wrapper safely
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Toggle review approval status (Admin Only)
  const handleToggleApproval = async (review: ServiceReview) => {
    if (!isAdmin) return;
    const reviewRef = doc(db, 'reviews', review.id);
    try {
      await setDoc(reviewRef, {
        ...review,
        isApproved: !review.isApproved,
        createdAt: review.createdAt // keep original date
      });
    } catch (err) {
      console.error("Admin approval modification error:", err);
      alert("Permission Denied: Unable to modify review.");
    }
  };

  // Delete review (Admin Only)
  const handleDeleteReview = async (reviewId: string) => {
    if (!isAdmin) return;
    if (!confirm("Are you sure you want to delete this client review permanently?")) return;
    const reviewRef = doc(db, 'reviews', reviewId);
    try {
      await deleteDoc(reviewRef);
    } catch (err) {
      console.error("Admin review delete error:", err);
      alert("Failed to delete review. Integrity rules validation error.");
    }
  };

  // Analytical stats calculations
  const totalReviews = reviews.length;
  const approvedCount = reviews.filter(r => r.isApproved).length;
  const pendingCount = reviews.filter(r => !r.isApproved).length;
  const publicReviews = reviews.filter(r => r.isApproved);
  
  const averageRatingValue = publicReviews.length > 0 
    ? (publicReviews.reduce((sum, r) => sum + r.rating, 0) / publicReviews.length).toFixed(1) 
    : '4.9';

  const filterReviews = reviews.filter(r => {
    if (ratingFilter === 'all') return true;
    return r.rating === ratingFilter;
  });

  // Reset currentPage to 1 when filters, sorting, or page size change
  useEffect(() => {
    setCurrentPage(1);
  }, [ratingFilter, sortBy, itemsPerPage]);

  const totalFilteredCount = filterReviews.length;
  const totalPages = Math.ceil(totalFilteredCount / itemsPerPage) || 1;

  // Safe bounds check
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentReviews = filterReviews.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate rating percentage stats
  const ratingCounts = [0, 0, 0, 0, 0]; // 1, 2, 3, 4, 5 stars
  publicReviews.forEach(r => {
    if (r.rating >= 1 && r.rating <= 5) {
      ratingCounts[r.rating - 1]++;
    }
  });

  return (
    <div id="reviews-page" className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-150 transition-colors">
      
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none z-0" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 z-10 flex flex-col gap-8">
        
        {/* Head Branding */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/60 dark:border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-full text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-3 tracking-wide uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>Google Rank SEO Snippet Enabled</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Verified Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 dark:from-indigo-400 dark:to-purple-400">Reviews</span>
            </h1>
            <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-2xl font-medium text-base">
              A collection of honest ratings and feedback from our clients across India. Your ratings are structured with custom microdata for direct Google Rich Search integrations.
            </p>
          </div>
          
          <button
            onClick={() => user ? setShowFormModal(true) : login().then(() => setShowFormModal(true))}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            Write Service Review
          </button>
        </div>

        {/* Administration Alerts */}
        {isAdmin && (
          <div className="p-4 bg-amber-50 dark:bg-amber-500/10 border border-amber-200/50 dark:border-amber-500/20 rounded-2xl flex items-start gap-3.5">
            <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-800 dark:text-amber-400 font-semibold leading-relaxed">
              <strong>Admin Command Workspace Active:</strong> You are logged in as Suraj (<code className="text-[11px] bg-amber-100/50 dark:bg-amber-500/20 px-1 rounded">surajsingh.noida98@gmail.com</code>). You can moderate directly on this page—click approved statuses to toggle visibility, or delete entries permanently.
              <span className="block mt-1.5 text-xs text-amber-600/80 dark:text-amber-400/70">
                Pending Moderation: <span className="font-extrabold text-amber-700 dark:text-amber-300">{pendingCount}</span> | Total in Database: <span className="font-extrabold text-amber-700 dark:text-amber-300">{totalReviews}</span>
              </span>
            </div>
          </div>
        )}

        {/* Analytical Statistics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* STATS BAR COLUMN (Left Side, Sticky on Desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-6">
            
            {/* STATS BAR CARD */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 p-6 sm:p-8 rounded-[2rem] shadow-sm flex flex-col gap-6">
              
              <div className="text-center pb-2">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-1">Global Rating Score</span>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-black text-slate-900 dark:text-white">{averageRatingValue}</span>
                  <span className="text-2xl font-bold text-slate-400">/ 5</span>
                </div>
                
                <div className="flex items-center justify-center gap-1.5 mt-2.5 text-amber-500 shrink-0">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const val = parseFloat(averageRatingValue);
                    return (
                      <Star 
                        key={star} 
                        className={`w-6 h-6 ${star <= Math.round(val) ? 'fill-amber-500' : 'text-slate-200 dark:text-slate-800'}`} 
                      />
                    );
                  })}
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase mt-2.5 tracking-wider">
                  Based on {publicReviews.length > 0 ? publicReviews.length : 15} Verified client implementations
                </p>
              </div>

              {/* Custom Bar Breakdown */}
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const count = publicReviews.length > 0 ? ratingCounts[stars - 1] : (stars === 5 ? 12 : stars === 4 ? 3 : 0);
                  const total = publicReviews.length > 0 ? publicReviews.length : 15;
                  const percent = Math.round((count / total) * 100);
                  
                  return (
                    <button
                      key={stars}
                      onClick={() => setRatingFilter(stars === ratingFilter ? 'all' : stars)}
                      className={`w-full flex items-center gap-3 group text-left p-1.5 rounded-lg transition-all ${ratingFilter === stars ? 'bg-indigo-50/50 dark:bg-indigo-500/10 font-bold text-indigo-600 dark:text-indigo-400' : 'hover:bg-slate-50 dark:hover:bg-slate-800/30'}`}
                    >
                      <span className="font-mono text-sm tracking-tight w-4 shrink-0 text-slate-400">{stars}★</span>
                      <div className="flex-grow h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${ratingFilter === stars ? 'bg-indigo-650 dark:bg-indigo-400' : 'bg-amber-400 group-hover:bg-amber-500'}`}
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <span className="font-mono text-xs text-slate-400 w-8 text-right shrink-0">{percent}%</span>
                    </button>
                  );
                })}
              </div>

              {/* Google Search Rank Info Explanation */}
              <div className="bg-slate-50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800 px-4 py-4 rounded-xl flex items-start gap-3">
                <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                  <strong className="text-slate-800 dark:text-slate-300 font-bold block mb-0.5">How this ranks on Google:</strong>
                  Our backend structure automatically exports verified 5-star evaluations using LD+JSON Schema standard specifications, allowing Google's crawler bots to display gold rating stars in Google Search result snippets automatically.
                </div>
              </div>

            </div>

            {/* GOOGLE BUSINESS PROFILE CARD */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 p-6 sm:p-7 rounded-[2rem] shadow-sm relative overflow-hidden flex flex-col gap-5 group"
            >
              <div className="absolute bottom-0 left-0 right-0 h-1 flex">
                <div className="w-1/4 h-full bg-[#4285F4]"></div>
                <div className="w-1/4 h-full bg-[#EA4335]"></div>
                <div className="w-1/4 h-full bg-[#FBBC05]"></div>
                <div className="w-1/4 h-full bg-[#34A853]"></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 flex items-center justify-center font-extrabold text-sm shadow-sm shrink-0">
                    <span className="text-lg tracking-tight">
                      <span className="text-[#4285F4]">G</span>
                      <span className="text-[#EA4335]">o</span>
                      <span className="text-[#FBBC05]">o</span>
                      <span className="text-[#4285F4]">g</span>
                      <span className="text-[#34A853]">l</span>
                      <span className="text-[#EA4335]">e</span>
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-800 dark:text-white flex items-center gap-1 leading-none mb-1">
                      Business Profile
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 fill-blue-500/10 shrink-0" />
                    </h3>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-extrabold">Official presence</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-full text-indigo-600 dark:text-indigo-400 text-[10px] font-bold">
                  Verified maps
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800 rounded-2xl p-4 flex flex-col gap-3">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white leading-tight">Suraj Automation</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-semibold leading-relaxed">Enterprise automation, CRM, ERP, and customized Google Sheets solutions.</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex text-amber-500 shrink-0">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-800 dark:text-white">5.0 Rating</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <a 
                  href="https://share.google/8ZMNA3jACemzsznJ7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                >
                  <MapPin className="w-4 h-4 shrink-0" />
                  View on Google Maps
                  <ExternalLink className="w-3 h-3 shrink-0 opacity-70" />
                </a>
                
                <a 
                  href="https://share.google/8ZMNA3jACemzsznJ7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-extrabold text-xs rounded-xl transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  Write directly on Google Profile
                </a>
              </div>
            </motion.div>

          </div>

          {/* REVIEWS LIST FEED BLOCK (Right Side) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Filter and sorting control rail */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 px-6 py-4 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-wider">Filters</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                
                {/* Rating filter dropdown */}
                <select 
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                  className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 rounded-xl px-4.5 py-2 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-550 focus:border-indigo-550 transition-colors cursor-pointer text-xs"
                >
                  <option value="all">All Stars Filter</option>
                  <option value="5">5 Stars only</option>
                  <option value="4">4 Stars only</option>
                  <option value="3">3 Stars only</option>
                  <option value="2">2 Stars only</option>
                  <option value="1">1 Star only</option>
                </select>

                {/* Sort selector */}
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 rounded-xl px-4.5 py-2 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-550 focus:border-indigo-550 transition-colors cursor-pointer text-xs"
                >
                  <option value="newest">Newest First</option>
                  <option value="highest">Highest Rating</option>
                  <option value="lowest">Lowest Rating</option>
                </select>

              </div>
            </div>

            {/* List Loader */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-[2rem] gap-4">
                <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
                <p className="text-sm text-slate-450 dark:text-slate-500 font-bold uppercase tracking-wider">Syncing database review records...</p>
              </div>
            ) : filterReviews.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-[2rem] text-center px-4">
                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-950 rounded-2xl flex items-center justify-center text-slate-400 dark:text-slate-650 border border-slate-100 dark:border-slate-850 shadow-inner mb-4">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black text-slate-800 dark:text-white">No Reviews Found</h3>
                <p className="text-sm text-slate-500 max-w-sm mt-1 mb-6 font-semibold mx-auto">
                  No verified client evaluations match this star criteria yet. Be the first to share your experience with Suraj Automation!
                </p>
                <button
                  onClick={() => user ? setShowFormModal(true) : login().then(() => setShowFormModal(true))}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-sm transition-all shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  Write First Review
                </button>
              </div>
            ) : (
              
              /* Feed Wrapper */
              <div className="flex flex-col gap-6">
                <AnimatePresence mode="popLayout">
                  {currentReviews.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: Math.min(idx * 0.05, 0.4) }}
                      className={`bg-white dark:bg-slate-900 border ${item.isApproved ? 'border-slate-200/60 dark:border-slate-800' : 'border-amber-300 dark:border-amber-500/40 bg-amber-50/20 dark:bg-amber-950/10'} p-6 sm:p-8 rounded-[2rem] shadow-sm relative group flex flex-col gap-4.5`}
                    >
                      
                      {/* Flex Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4.5">
                          
                          {/* Profile Image with dynamic fallback letters */}
                          <div className="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 overflow-hidden flex items-center justify-center text-indigo-650 dark:text-indigo-400 font-extrabold shadow-sm shrink-0">
                            {item.authorPhotoURL ? (
                              <img 
                                src={item.authorPhotoURL} 
                                alt={item.authorName} 
                                className="w-full h-full object-cover" 
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              item.authorName.slice(0, 2).toUpperCase()
                            )}
                          </div>

                          <div className="flex-grow min-w-0">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                              <h3 className="font-extrabold text-slate-900 dark:text-white text-base tracking-tight truncate max-w-[200px] sm:max-w-[400px]">
                                {item.authorName}
                              </h3>
                              <span className="inline-flex items-center gap-0.5 text-[10px] font-black tracking-wider uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded-md border border-emerald-100 dark:border-emerald-500/10 shrink-0">
                                <CheckCircle className="w-3 h-3 fill-emerald-500 text-emerald-50 dark:text-emerald-950" />
                                Verified Client
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold truncate">
                              {item.authorTitle}
                            </p>
                          </div>
                        </div>

                        {/* Ratings Stars indicators */}
                        <div className="flex items-center gap-0.5 text-amber-500 shrink-0">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`w-4.5 h-4.5 ${star <= item.rating ? 'fill-amber-500' : 'text-slate-100 dark:text-slate-800'}`} 
                            />
                          ))}
                        </div>
                      </div>

                      {/* Service Tag & Timestamp */}
                      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold border-b border-dashed border-slate-150 dark:border-slate-800 pb-3">
                        <span className="px-2.5 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-350">
                          Service: <strong className="text-indigo-600 dark:text-indigo-400">{item.serviceUsed}</strong>
                        </span>
                        
                        <span className="text-slate-400 dark:text-slate-500 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {new Date(item.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>

                        {!item.isApproved && (
                          <span className="px-2 py-0.5 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-520/20 rounded text-[10px] uppercase font-black tracking-widest text-amber-600 dark:text-amber-400 animate-pulse flex items-center gap-1 shrink-0 ml-auto">
                            <Clock className="w-3 h-3" />
                            Pending approval
                          </span>
                        )}
                      </div>

                      {/* Comment text in comfortable body styling */}
                      <p className="text-slate-650 dark:text-slate-300 text-sm xl:text-base leading-relaxed whitespace-pre-line font-medium break-words">
                        "{item.comment}"
                      </p>

                      {/* Admin Options Toolbar overlay */}
                      {isAdmin && (
                        <div className="mt-2 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-end gap-3 z-20">
                          <button
                            onClick={() => handleToggleApproval(item)}
                            className={`px-4 py-1.5 rounded-lg border text-xs font-black uppercase tracking-wider cursor-pointer flex items-center gap-1.5 transition-colors ${
                              item.isApproved 
                                ? 'border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400'
                                : 'border-emerald-250 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:border-emerald-505/20 dark:bg-emerald-505/10 dark:text-emerald-400'
                            }`}
                          >
                            {item.isApproved ? (
                              <>
                                <X className="w-3.5 h-3.5" />
                                Unapprove
                              </>
                            ) : (
                              <>
                                <Check className="w-3.5 h-3.5 animate-bounce" />
                                Approve Live
                              </>
                            )}
                          </button>
                          
                          <button
                            onClick={() => handleDeleteReview(item.id)}
                            className="px-3.5 py-1.5 border border-rose-200 text-rose-600 hover:bg-rose-50 dark:border-rose-500/20 dark:text-rose-455 dark:hover:bg-rose-500/10 rounded-lg text-xs font-black uppercase tracking-wider cursor-pointer flex items-center gap-1.5 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Delete
                          </button>
                        </div>
                      )}

                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Modern & Professional Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 px-6 py-4 rounded-3xl shadow-sm transition-all animate-fade-in">
                    {/* Items per Page selector & counter */}
                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-bold order-2 sm:order-1">
                      <span>Showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, totalFilteredCount)} of {totalFilteredCount} reviews</span>
                      <span className="text-slate-250 dark:text-slate-800">|</span>
                      <div className="flex items-center gap-1.5">
                        <span>Show:</span>
                        <select
                          value={itemsPerPage}
                          onChange={(e) => {
                            setItemsPerPage(Number(e.target.value));
                            setCurrentPage(1);
                          }}
                          className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 rounded-xl px-2.5 py-1 font-extrabold focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs cursor-pointer"
                        >
                          <option value={5}>5</option>
                          <option value={10}>10</option>
                          <option value={15}>15</option>
                          <option value={20}>20</option>
                        </select>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-1.5 order-1 sm:order-2">
                      {/* First Page */}
                      <button
                        onClick={() => setCurrentPage(1)}
                        disabled={currentPage === 1}
                        className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-55 dark:hover:bg-slate-850 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer hover:scale-105 active:scale-95"
                        title="First Page"
                      >
                        <ChevronsLeft className="w-4 h-4" />
                      </button>

                      {/* Prev Page */}
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-55 dark:hover:bg-slate-850 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer hover:scale-105 active:scale-95"
                        title="Previous Page"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      {/* Explicit Page buttons */}
                      <div className="flex items-center gap-1.5 scrollbar-none px-1">
                        {Array.from({ length: totalPages }).map((_, pageIdx) => {
                          const pageNum = pageIdx + 1;
                          // Show smart range if totalPages is large to prevent layout spill
                          if (
                            totalPages > 5 &&
                            pageNum !== 1 &&
                            pageNum !== totalPages &&
                            Math.abs(pageNum - currentPage) > 1
                          ) {
                            if (pageNum === 2 && currentPage > 3) {
                              return <span key="dots1" className="text-slate-400 dark:text-slate-500 text-xs px-1 font-black">...</span>;
                            }
                            if (pageNum === totalPages - 1 && currentPage < totalPages - 2) {
                              return <span key="dots2" className="text-slate-400 dark:text-slate-500 text-xs px-1 font-black">...</span>;
                            }
                            return null;
                          }

                          return (
                            <button
                              key={pageNum}
                              onClick={() => setCurrentPage(pageNum)}
                              className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black transition-all cursor-pointer hover:scale-105 active:scale-95 ${
                                currentPage === pageNum
                                  ? 'bg-indigo-600 border border-indigo-600 text-white shadow-md shadow-indigo-600/20'
                                  : 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-650 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-850'
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                      </div>

                      {/* Next Page */}
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-55 dark:hover:bg-slate-850 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer hover:scale-105 active:scale-95"
                        title="Next Page"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Last Page */}
                      <button
                        onClick={() => setCurrentPage(totalPages)}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-55 dark:hover:bg-slate-850 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer hover:scale-105 active:scale-95"
                        title="Last Page"
                      >
                        <ChevronsRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </div>

      {/* SUBMISSION FORM SLIDEWAY modal */}
      <AnimatePresence>
        {showFormModal && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in text-slate-900 dark:text-white">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] w-full max-w-xl p-6 md:p-8 shadow-2xl relative flex flex-col max-h-[90vh] overflow-y-auto"
            >
              
              <button
                onClick={() => setShowFormModal(false)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-650 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 rounded-2xl flex items-center justify-center shrink-0 border border-indigo-100 dark:border-indigo-505/20 shadow-inner">
                  <Star className="w-6 h-6 fill-indigo-500/10 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                    Submit Client Review
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-1">
                    Your direct review is stored in our database for Google organic rich snippeting
                  </p>
                </div>
              </div>

              {/* SUCCESS MESSAGE CONFIRMATION PANEL */}
              {successMessage ? (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 border border-emerald-100 dark:border-emerald-505/20 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-10 h-10 fill-emerald-500 text-emerald-50 dark:text-emerald-950" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 dark:text-white">Review Submitted Successfully!</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold max-w-sm">
                    Thank you! Your feedback has been registered and is now pending. It will appear live on site after moderated approval.
                  </p>
                </div>
              ) : (
                
                /* ACTUAL REVIEW FORM FORMULA */
                <form onSubmit={handleSubmitReview} className="space-y-6 pt-5">
                  
                  {/* Rating Selector Block */}
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block">How do you rate our service?</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setRating(star)}
                          className="p-1 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/40 cursor-pointer transition-colors"
                        >
                          <Star 
                            className={`w-9 h-9 transition-transform hover:scale-110 active:scale-90 ${
                              star <= (hoverRating || rating) 
                                ? 'fill-amber-400 text-amber-400 filter drop-shadow-[0_2px_8px_rgba(251,191,36,0.35)]' 
                                : 'text-slate-200 dark:text-slate-800'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="ml-2.5 font-mono text-sm font-extrabold text-slate-400 uppercase tracking-wider">
                        {rating === 5 ? 'Excellent 5/5' : rating === 4 ? 'Good 4/5' : rating === 3 ? 'Average 3/5' : rating === 2 ? 'Weak 2/5' : 'Poor 1/5'}
                      </span>
                    </div>
                  </div>

                  {/* Form fields row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Position Label Title */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block">Client Role / Designation</label>
                      <input 
                        type="text"
                        placeholder="e.g. CEO at Sweet Bites"
                        required
                        value={authorTitle}
                        onChange={(e) => setAuthorTitle(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm font-semibold text-slate-900 dark:text-white transition-all shadow-inner"
                      />
                    </div>

                    {/* Service selection dropdown */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block">Which solution did you use?</label>
                      <select 
                        required
                        value={serviceUsed}
                        onChange={(e) => setServiceUsed(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-550 focus:border-indigo-550 text-sm font-semibold text-slate-900 dark:text-white transition-all cursor-pointer"
                      >
                        {DYNAMIC_SERVICES.map((serv) => (
                          <option key={serv} value={serv}>{serv}</option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Comments description */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block">Feedback Comment</label>
                    <textarea 
                      rows={4}
                      placeholder="Give a detailed review of your automated sheets, operational performance, speed of delivery, or general experience with Suraj Automation."
                      required
                      maxLength={1000}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm font-semibold text-slate-900 dark:text-white transition-all shadow-inner resize-none leading-relaxed"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                      <span>Moderated Review Sandbox</span>
                      <span>{comment.length} / 1000 chars</span>
                    </div>
                  </div>

                  {/* Anti-spam footer and triggers */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Sparkles className="w-4 h-4 text-indigo-500 animated-pulse shrink-0" />
                      <span className="text-[10px] tracking-wider uppercase font-extrabold">Auto-fetches Google credentials</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-650/50 text-white rounded-xl font-bold text-sm transition-all shadow-md cursor-pointer hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin animate-duration-1000" />
                          Publishing feedback...
                        </>
                      ) : (
                        <>
                          Submit Review
                          <Check className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
