import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { MessageSquare, Quote } from 'lucide-react';
import { db } from '../lib/firebase';
import { ServiceReview } from '../types';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';

export default function TestimonialCarousel() {
  const { lang } = useLanguage();
  const [reviews, setReviews] = useState<ServiceReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const reviewsRef = collection(db, 'reviews');
    const q = query(
      reviewsRef,
      where('isApproved', '==', true),
      orderBy('createdAt', 'desc'),
      limit(6)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetched: ServiceReview[] = [];
        snapshot.forEach((docSnap) => {
          fetched.push({ id: docSnap.id, ...docSnap.data() } as ServiceReview);
        });
        setReviews(fetched.filter((r) => r.rating >= 4));
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const hasStaticRealTestimonials = SITE_CONFIG.realTestimonials.length > 0;
  const hasFirestoreReviews = reviews.length > 0;

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!loading && (hasStaticRealTestimonials || hasFirestoreReviews) ? (
          <div>
            <div className="max-w-2xl mb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
                {lang === 'hinglish' ? 'Client Feedback' : 'Verified Client Feedback'}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {lang === 'hinglish'
                  ? 'Clients ka real feedback.'
                  : 'Real feedback from working businesses.'}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hasStaticRealTestimonials
                ? SITE_CONFIG.realTestimonials.map((t, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                    >
                      <div>
                        <Quote className="w-5 h-5 text-emerald-700 mb-3" />
                        <p className="text-sm text-slate-700 leading-relaxed mb-4">
                          "{t.quote}"
                        </p>
                      </div>
                      <div className="pt-4 border-t border-slate-200 text-xs">
                        <p className="font-bold text-slate-900">{t.name}</p>
                        <p className="text-slate-600">
                          {t.business} · {t.city}
                        </p>
                      </div>
                    </div>
                  ))
                : reviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                    >
                      <div>
                        <Quote className="w-5 h-5 text-emerald-700 mb-3" />
                        <p className="text-sm text-slate-700 leading-relaxed mb-4">
                          "{rev.comment}"
                        </p>
                      </div>
                      <div className="pt-4 border-t border-slate-200 text-xs">
                        <p className="font-bold text-slate-900">{rev.authorName}</p>
                        <p className="text-slate-600">
                          {rev.authorTitle || 'Verified Client'}
                          {rev.serviceUsed ? ` · ${rev.serviceUsed}` : ''}
                        </p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        ) : (
          /* Honest Pilot Offer Block — No fake testimonials or fake urgency timers */
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-8 sm:p-10 lg:p-12 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
                {SITE_CONFIG.pilotOffer.badge}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                {SITE_CONFIG.pilotOffer.heading[lang]}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                {SITE_CONFIG.pilotOffer.description[lang]}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={getWhatsAppUrl('Hi Suraj, mujhe "Pehle 5 clients pilot offer" ke baare me janna hai.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-lg transition-colors min-h-[48px] text-center"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>{SITE_CONFIG.pilotOffer.cta[lang]}</span>
              </a>
              <p className="text-xs text-slate-500 text-center lg:text-left font-mono">
                [REAL_TESTIMONIALS: Add verified client quotes with permission]
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
