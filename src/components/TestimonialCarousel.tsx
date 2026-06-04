import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { collection, query, where, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { ServiceReview } from '../types';

export default function TestimonialCarousel() {
  const [reviews, setReviews] = useState<ServiceReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const reviewsRef = collection(db, 'reviews');
    // Only get approved and 5 star or 4 star reviews to show on home page
    const q = query(
      reviewsRef,
      where('isApproved', '==', true),
      orderBy('createdAt', 'desc'),
      limit(10)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedReviews: ServiceReview[] = [];
        snapshot.forEach((doc) => {
          fetchedReviews.push({ id: doc.id, ...doc.data() } as ServiceReview);
        });
        
        // Filter high rating ones just in case
        const topReviews = fetchedReviews.filter(r => r.rating >= 4);
        setReviews(topReviews);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const nextReview = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prevReview = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  // Autoplay functionality
  useEffect(() => {
    if (reviews.length <= 1) return;
    
    const interval = setInterval(nextReview, 6000);
    return () => clearInterval(interval);
  }, [nextReview, reviews.length]);

  if (loading || reviews.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">Client Success Stories</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Loved by Ambitious SMBs
          </h3>
          <div className="h-1 w-20 bg-indigo-500 rounded-full mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons for large screens */}
            <button 
              onClick={prevReview}
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 bg-slate-800 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg transition-colors z-20 hidden md:block border border-slate-700 hover:border-indigo-500"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
              onClick={nextReview}
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 bg-slate-800 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg transition-colors z-20 hidden md:block border border-slate-700 hover:border-indigo-500"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden relative px-4 pb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-slate-800/80 p-8 md:p-12 rounded-3xl border border-slate-700/80 backdrop-blur-sm shadow-2xl relative"
                >
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-indigo-500/20" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-6 h-6 ${i < reviews[currentIndex].rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-8 italic">
                    "{reviews[currentIndex].comment}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    {reviews[currentIndex].authorPhotoURL ? (
                      <img 
                        src={reviews[currentIndex].authorPhotoURL} 
                        alt={reviews[currentIndex].authorName}
                        className="w-14 h-14 rounded-full border-2 border-indigo-500 object-cover"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                        {reviews[currentIndex].authorName.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <h4 className="text-white font-bold text-lg">{reviews[currentIndex].authorName}</h4>
                      <p className="text-indigo-400 text-sm font-medium">{reviews[currentIndex].authorTitle || 'Verified Client'}</p>
                      {reviews[currentIndex].serviceUsed && (
                        <p className="text-slate-500 text-xs mt-1">Used: {reviews[currentIndex].serviceUsed}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-300 rounded-full ${i === currentIndex ? 'w-8 h-2.5 bg-indigo-500' : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
