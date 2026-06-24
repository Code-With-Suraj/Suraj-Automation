import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Star, 
  CheckCircle2, 
  ThumbsUp, 
  ThumbsDown, 
  Info, 
  Award, 
  Check, 
  X, 
  Building,
  ShieldCheck,
  Zap,
  Mail,
  Smartphone
} from 'lucide-react';
import { useUser } from '../../contexts/UserContext';
import { useSEO } from '../../hooks/useSEO';
import RazorpayCheckout from '../../components/RazorpayCheckout';

export default function BookingSarthi() {
  const { hasPurchased } = useUser();
  const isPurchased = hasPurchased('bookingsarthi');

  useSEO(
    'BookingSarthi Review: Appointment & Service Automation | Suraj Automation',
    'Evaluate BookingSarthi, a surprisingly complete micro-SaaS platform built specifically for Indian service businesses managing appointments, CRM, and marketing.',
    'appointment booking software, salon software, clinic scheduling, google sheets crm, service business automation, whatsapp booking'
  );

  const metadata = {
    reviewer: "A B2B SaaS Analyst Who Has Evaluated 200+ SMB Software Products",
    category: "Appointment Booking & Service Business Automation",
    builtFor: "Salons, Beauty Parlours, Clinics, Spas, Consultants, Trainers, Wellness Centers, and Service-Based SMBs",
    techStack: "Google Apps Script, Google Sheets Database, HTML/CSS/JavaScript, Gmail Integration, License Management System, Multi-Tenant SaaS Architecture, UPI Billing",
    verdict: "This is not just a booking page—it is a surprisingly complete micro-SaaS platform built specifically for Indian service businesses."
  };

  const featuresBreakdown = [
    {
      title: "Online Appointment Booking Engine",
      rating: "5/5",
      stars: 5,
      desc: "Customers can browse services, select staff, choose slots, and receive confirmations via a structured multi-step experience.",
      verdict: "One of the strongest parts of the product."
    },
    {
      title: "Staff-Based Availability Management",
      rating: "5/5",
      stars: 5,
      desc: "Tracks individual staff members, service specializations, staff schedules, availability overrides, and leave management.",
      verdict: "Far more sophisticated than most SMB booking tools."
    },
    {
      title: "Conflict Detection & Prevention",
      rating: "5/5",
      stars: 5,
      desc: "Real backend validation logic checks slots, staff availability, and prevents past bookings or double bookings.",
      verdict: "This is where the product feels serious."
    },
    {
      title: "Customer Account System",
      rating: "4/5",
      stars: 4,
      desc: "Customers can register, login, maintain account access, view booking history, and manage appointments with dedicated auth workflows.",
      verdict: "Good implementation for an SMB-focused solution."
    },
    {
      title: "Customer CRM",
      rating: "4/5",
      stars: 4,
      desc: "Admin Dashboard includes CRM functionality to track the customer database, booking history, and identify repeat visitors.",
      verdict: "Useful and practical."
    },
    {
      title: "Reviews & Reputation Management",
      rating: "4/5",
      stars: 4,
      desc: "Customers can submit reviews after a service, and businesses can display public reviews directly inside the booking portal.",
      verdict: "A nice trust-building feature often ignored in SMB software."
    },
    {
      title: "Marketing Automation",
      rating: "5/5",
      stars: 5,
      desc: "Includes marketing settings, email campaigns, bulk marketing emails, daily marketing triggers, and WhatsApp link generation.",
      verdict: "Hidden gem of the platform. Goes far beyond just booking."
    },
    {
      title: "Admin Dashboard",
      rating: "5/5",
      stars: 5,
      desc: "Business owners get views for upcoming/past appointments, service & staff management, CRM, reviews, marketing, and settings.",
      verdict: "Feels like a real SaaS product, not a side project."
    },
    {
      title: "SaaS License Management",
      rating: "5/5",
      stars: 5,
      desc: "Includes a separate Master Hub, license server, client provisioning, trial management, suspension engine, and billing logs.",
      verdict: "Extremely impressive for a Google Apps Script product."
    },
    {
      title: "Automated Billing Engine",
      rating: "5/5",
      stars: 5,
      desc: "Supports subscription billing, pay-per-booking, UPI payment links, and automated invoice emails.",
      verdict: "Rarely seen in SMB SaaS products at this stage."
    }
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Header Section */}
      <section className="relative py-20 lg:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-purple-500/10 text-purple-300 text-sm font-bold tracking-wide mb-6 border border-purple-500/20 backdrop-blur-sm">
              <Award className="w-4 h-4 text-amber-400 animate-pulse" />
              Under The Hood Review
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              BookingSarthi — An Honest Review <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">
                After Looking Under the Hood
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Is this just another calendar widget, or a true operating system for your service business? We evaluated the architecture, CRM capabilities, and the automated billing engine.
            </p>
          </div>

          {/* Under the Hood Specs Sheet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 backdrop-blur-md shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
            <h2 className="text-xl font-bold uppercase tracking-widest text-purple-400 mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-purple-400" />
              Review Technical Specifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="border-r border-slate-800 pr-4 last:border-0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Reviewer</span>
                <p className="text-sm font-medium text-slate-200">{metadata.reviewer}</p>
              </div>
              <div className="border-r border-slate-800 pr-4 last:border-0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Category</span>
                <p className="text-sm font-medium text-slate-200">{metadata.category}</p>
              </div>
              <div className="border-r border-slate-800 pr-4 last:border-0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Ideal For</span>
                <p className="text-sm font-medium text-slate-200">{metadata.builtFor}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Tech Stack</span>
                <p className="text-sm font-medium text-slate-200">{metadata.techStack}</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 bg-transparent">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider shrink-0">Review Verdict:</span>
                <blockquote className="text-emerald-400 font-extrabold italic text-sm md:text-base">
                  "{metadata.verdict}"
                </blockquote>
              </div>
              <div className="flex gap-4 shrink-0">
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I'm%20interested%20in%20a%20free%20demo%20for%20BookingSarthi!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-bold transition-colors border border-purple-700 block shadow-lg shadow-purple-500/25"
                >
                  📅 Book a Free Demo →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Setup Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-purple-50 text-purple-700 text-xs font-black tracking-widest rounded-full uppercase border border-purple-100 mb-3">
              The Genesis Problem
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Why Does This Product Exist?
            </h2>
          </div>

          <div className="prose prose-purple max-w-none text-slate-700 text-lg leading-relaxed space-y-6">
            <p>
              Imagine you're running a salon in Noida. Appointments come through WhatsApp. Some customers call. Some DM on Instagram. Some walk in. Your staff writes bookings in a notebook.
            </p>
            <p>
              One customer forgets their appointment. Another gets double-booked. A third calls asking: <em>"Madam mera appointment kab hai?"</em> Meanwhile, you're busy managing staff schedules, customer complaints, and daily operations.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-12 not-prose">
              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 text-center shadow-sm">
                <span className="text-3xl font-black text-purple-500 block mb-2">📱</span>
                <h4 className="font-extrabold text-slate-900 text-sm mb-1">Bookings via</h4>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">WhatsApp/Calls</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 text-center shadow-sm">
                <span className="text-3xl font-black text-purple-500 block mb-2">📓</span>
                <h4 className="font-extrabold text-slate-900 text-sm mb-1">Schedules written in</h4>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Paper Notebooks</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 text-center shadow-sm">
                <span className="text-3xl font-black text-purple-500 block mb-2">⚠️</span>
                <h4 className="font-extrabold text-slate-900 text-sm mb-1">Constant Risk of</h4>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Double Bookings</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 text-center shadow-sm">
                <span className="text-3xl font-black text-purple-500 block mb-2">🤷</span>
                <h4 className="font-extrabold text-slate-900 text-sm mb-1">Customer History is</h4>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Non-existent</p>
              </div>
            </div>

            <p className="font-semibold text-slate-900">
              This is exactly where BookingSarthi enters. Instead of forcing SMBs into a bloated ERP, the product focuses on making appointment-based businesses organized.
            </p>
            <p>
              After reviewing the codebase, it becomes clear that the founder wasn't building a generic appointment calendar. They were building a lightweight SaaS ecosystem that includes:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 text-slate-700 font-medium my-6">
              <li className="flex items-center gap-2"><Check className="w-5 h-5 text-purple-500" /> Customer Portal</li>
              <li className="flex items-center gap-2"><Check className="w-5 h-5 text-purple-500" /> Business Admin Portal</li>
              <li className="flex items-center gap-2"><Check className="w-5 h-5 text-purple-500" /> Customer CRM</li>
              <li className="flex items-center gap-2"><Check className="w-5 h-5 text-purple-500" /> Reviews & Marketing</li>
              <li className="flex items-center gap-2"><Check className="w-5 h-5 text-purple-500" /> Staff Scheduling</li>
              <li className="flex items-center gap-2"><Check className="w-5 h-5 text-purple-500" /> License & Billing System</li>
            </ul>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-2xl mt-8">
              <p className="text-purple-900 font-bold text-lg m-0">In short: This isn't a booking widget. It's a complete booking business operating system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Breakdown Bento Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-black tracking-widest rounded-full uppercase border border-blue-100 mb-3">
              Deep-Dive Analysis
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              What's Inside — Feature-by-Feature Breakdown
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresBreakdown.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm flex flex-col justify-between hover:border-purple-400 hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4 bg-transparent">
                    <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">Feature {idx + 1}</span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: item.stars }).map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs font-bold text-slate-500 ml-1">({item.rating})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 mt-auto">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">ANALYST VERDICT:</span>
                  <p className="text-slate-800 text-sm font-semibold">{item.verdict}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Scenario Test */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-black tracking-widest rounded-full uppercase border border-emerald-100 mb-3">
              Scenario Simulation
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Real-World Scenario Test
            </h2>
            <p className="text-slate-600 text-lg mt-2">Business Type: 15-Employee Premium Salon in Gurgaon</p>
          </div>

          <div className="relative border-l-2 border-purple-200 ml-4 md:ml-0 md:max-w-3xl mx-auto space-y-12">
            <div className="relative pl-8 md:pl-10">
              <div className="absolute -left-3 md:-left-3.5 top-0 w-6 md:w-7 h-6 md:h-7 bg-purple-500 rounded-full border-4 border-white shadow-sm flex items-center justify-center"></div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">9:00 AM</h4>
              <p className="text-slate-600">Owner opens BookingSarthi Admin Dashboard. Immediately sees upcoming appointments, staff schedules, and the daily workload.</p>
            </div>
            
            <div className="relative pl-8 md:pl-10">
              <div className="absolute -left-3 md:-left-3.5 top-0 w-6 md:w-7 h-6 md:h-7 bg-blue-500 rounded-full border-4 border-white shadow-sm flex items-center justify-center"></div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">10:15 AM</h4>
              <p className="text-slate-600">A customer books a Hair Spa online. They select the service, select their preferred stylist, pick a slot, and confirm the booking. <strong>No phone call needed.</strong></p>
            </div>

            <div className="relative pl-8 md:pl-10">
              <div className="absolute -left-3 md:-left-3.5 top-0 w-6 md:w-7 h-6 md:h-7 bg-amber-500 rounded-full border-4 border-white shadow-sm flex items-center justify-center"></div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">11:00 AM</h4>
              <p className="text-slate-600">One stylist calls in sick. Owner marks an availability override in the system. Affected slots automatically become unavailable for new bookings.</p>
            </div>

            <div className="relative pl-8 md:pl-10">
              <div className="absolute -left-3 md:-left-3.5 top-0 w-6 md:w-7 h-6 md:h-7 bg-indigo-500 rounded-full border-4 border-white shadow-sm flex items-center justify-center"></div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">2:00 PM</h4>
              <p className="text-slate-600">Receptionist checks the customer CRM to identify repeat visitors and review past appointment history for personalization.</p>
            </div>

            <div className="relative pl-8 md:pl-10">
              <div className="absolute -left-3 md:-left-3.5 top-0 w-6 md:w-7 h-6 md:h-7 bg-emerald-500 rounded-full border-4 border-white shadow-sm flex items-center justify-center"></div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">5:00 PM & 7:00 PM</h4>
              <p className="text-slate-600">Customer leaves a 5-star review after the service, which appears on the booking portal. Later, the owner launches an automated promotional campaign targeting inactive customers via email.</p>
            </div>
            
            <div className="relative pl-8 md:pl-10">
              <div className="absolute -left-3 md:-left-3.5 top-0 w-6 md:w-7 h-6 md:h-7 bg-slate-800 rounded-full border-4 border-white shadow-sm flex items-center justify-center"></div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">End of Month</h4>
              <p className="text-slate-600">Owner checks bookings. The Developer Hub automatically tracks usage, and subscription billing is generated. That entire flow exists inside the current architecture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Critique: Wow vs Hmm Moments */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Wow */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <ThumbsUp className="w-8 h-8 text-purple-600" />
                The "Wow" Moments
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-base mb-2">1. It Is Actually Multi-Tenant SaaS</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Most Google Apps Script products are single-business solutions. This isn't. The architecture includes Master Hub, License Keys, Client Templates, Subscription Controls, and Usage Tracking.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-base mb-2">2. Staff Scheduling Is Deeper Than Expected</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Most appointment systems stop at 'Select Staff'. BookingSarthi includes staff specialization, leave overrides, schedule management, and conflict checking.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-base mb-2">3. Marketing + CRM Integration</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The combination of CRM, Email campaigns, customer data, and review management creates genuine retention capability. Many systems acquire customers; few help bring them back.
                  </p>
                </div>
              </div>
            </div>

            {/* Hmm */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <ThumbsDown className="w-8 h-8 text-rose-500" />
                The "Hmm..." Moments
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-base mb-2">1. No Online Payment Collection During Booking</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    This is the biggest missing piece. Customers can book, businesses can bill, but there is no integrated booking-time advance payment collection (No Razorpay/Stripe during the booking flow).
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-base mb-2">2. WhatsApp Automation Is Partial</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The code generates WhatsApp links, but lacks direct WhatsApp Business API integration for automated reminders or automated confirmations via WhatsApp directly.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
                  <h4 className="font-extrabold text-slate-900 text-base mb-2">3. Analytics & Sheets Scalability</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Business intelligence analytics are basic (missing repeat customer %, staff utilization). Also, businesses handling thousands of bookings monthly across large multi-location teams may eventually hit Google Sheets limitations.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Demographic Choice Group */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Who Should Buy This?</h2>
            <p className="text-slate-600 text-lg">A simple buying diagnostic checklist for service businesses.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* BUY */}
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-bold text-5xl font-sans text-emerald-100/70">BUY</div>
              <h3 className="text-2xl font-black text-emerald-950 mb-6 flex items-center gap-2 bg-transparent">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 font-semibold" />
                ✅ BUY If You Are:
              </h3>
              <ul className="space-y-4">
                {[
                  "Salon Owners",
                  "Beauty Parlours",
                  "Spas & Wellness Centers",
                  "Coaching Institutes With Scheduled Sessions",
                  "Consultants Taking Appointments",
                  "Dental Clinics & Nutritionists",
                  "Freelance Professionals With Appointment-Based Work"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-transparent">
                    <Check className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                    <span className="text-emerald-950 text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SKIP */}
            <div className="bg-rose-50/50 border border-rose-100 rounded-3xl p-8 lg:p-12 relative overflow-hidden bg-transparent">
              <div className="absolute top-0 right-0 p-4 font-bold text-5xl font-sans text-rose-100/70">SKIP</div>
              <h3 className="text-2xl font-black text-rose-950 mb-6 flex items-center gap-2 bg-transparent">
                <X className="w-7 h-7 text-rose-600 font-semibold" />
                ❌ SKIP If You Are:
              </h3>
              <ul className="space-y-4">
                {[
                  "Large Enterprise Chains",
                  "Businesses Needing Complex POS Integration",
                  "Multi-location Franchises With Advanced Analytics",
                  "Organizations Requiring ERP-Level Financial Controls"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-transparent">
                    <X className="w-5 h-5 text-rose-500 mt-1 shrink-0" />
                    <span className="text-rose-950 text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Reality Check */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-slate-800 text-slate-300 text-xs font-black tracking-widest rounded-full uppercase border border-slate-700 mb-6">
            Pricing Reality Check
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-8">₹499/month Platform Fee + ₹20 per Confirmed Booking</h2>
          <div className="prose prose-invert max-w-none text-slate-300 text-lg leading-relaxed text-left space-y-6">
            <p>
              At first glance, some business owners may focus on the software cost. But the better comparison is not against software—it's against the <strong>hidden cost of manual operations</strong>.
            </p>
            <p>
              Consider a typical salon: missed calls during busy hours, appointment bookings scattered across WhatsApp chats, double bookings, and no centralized customer database. Just one missed appointment or scheduling mistake can easily cost more than an entire month's subscription fee.
            </p>
            <p>
              The ₹20 per booking component creates an aligned pricing model. Businesses pay more only when they generate more bookings and revenue through the platform. For small service businesses, this avoids large upfront software investments while granting access to CRM and Marketing tools.
            </p>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 mt-8 text-center">
              <p className="font-bold text-xl text-white m-0">
                Bottom Line: If BookingSarthi helps prevent even a handful of missed appointments each month, the platform can effectively pay for itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Verdict & CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 text-purple-600 rounded-full mb-6">
            <span className="text-2xl font-black">8.7</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Overall Rating: 8.7 / 10</h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            BookingSarthi feels like a founder-built product created after observing real businesses struggle with operational chaos. The strongest part is not the booking page, but the ecosystem around it: <strong>CRM, Staff Management, Marketing, Reviews, and Licensing.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918851666208?text=Hi%20Suraj,%20I'm%20interested%20in%20a%20free%20demo%20for%20BookingSarthi!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-lg font-bold tracking-wide transition-all shadow-xl shadow-purple-500/25"
            >
              📅 Book a Free Demo →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
