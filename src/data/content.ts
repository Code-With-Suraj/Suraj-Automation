export interface LocalizedText {
  hinglish: string;
  en: string;
}

export type IndustryCategory =
  | 'All'
  | 'Recovery & Finance'
  | 'Supply & Distribution'
  | 'Retail & F&B'
  | 'Operations & Staff';

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  altName?: string;
  category: Exclude<IndustryCategory, 'All'>;
  forWho: LocalizedText;
  problemSolved: LocalizedText;
  oneLiner: LocalizedText;
  features: [LocalizedText, LocalizedText, LocalizedText];
  screenshotPlaceholder: string;
  demoLink: string;
  videoLink?: string;
  whatsappQuery: string;
  hasCustomDetailPage?: boolean;
}

export interface CustomProjectItem {
  id: string;
  title: string;
  category: string;
  problem: LocalizedText;
  whatWeBuilt: LocalizedText;
  result: string; // Marked with [REAL_RESULTS] where needed
  screenshotPlaceholder: string;
}

export interface PricingTier {
  id: string;
  name: LocalizedText;
  subtitle: LocalizedText;
  priceRange: string;
  timeline: string;
  highlighted?: boolean;
  included: LocalizedText[];
  excluded: LocalizedText[];
  ctaText: LocalizedText;
}

/**
 * SINGLE-FILE SITE CONFIGURATION & PLACEHOLDERS
 * Fill every [PLACEHOLDER] here without touching layout components.
 */
export const SITE_CONFIG = {
  brandName: 'Suraj Automation',
  domain: 'surajdx.com',
  tagline: 'Excel se System tak',
  founder: {
    name: 'Suraj Singh',
    role: 'MIS Executive & Data Analyst · Founder, Suraj Automation',
    city: 'Noida, Uttar Pradesh, India',
    linkedin: 'https://www.linkedin.com/in/surajautomation',
    phoneDisplay: '+91-8851666208',
    phoneTel: '+918851666208',
    whatsappNumber: '918851666208',
    email: 'suraj.gasdeveloper@gmail.com',
    photoUrl: '/images/suraj-singh.jpg',
  },
  legal: {
    legalName: 'Suraj Automation',
    gstin: 'Available on Invoice',
    address: 'Noida, Uttar Pradesh, India (Serving Delhi NCR & Pan-India)',
    gbpLink: 'https://share.google/8ZMNA3jACemzsznJ7',
    clarityId: '[CLARITY_ID]', // Microsoft Clarity Project ID
    ga4Id: 'G-J88DYBLTG8',
  },
  integrations: {
    // Set VITE_GOOGLE_SHEET_WEBAPP_URL in environment variables for production
    leadFormWebappUrl:
      (import.meta as any).env?.VITE_GOOGLE_SHEET_WEBAPP_URL || '[WEBAPP_URL]',
  },
  permissions: {
    // Set to true ONLY after confirming written permission from NCR website clients
    confirmNcrClientPermissions: false,
    ncrClients: [
      { name: 'Amdi Enterprises', url: '[CLIENT_URL_OR_SCREENSHOT]', type: 'B2B Business Website' },
      { name: 'NCR Packaging', url: '[CLIENT_URL_OR_SCREENSHOT]', type: 'Industrial Packaging Website' },
      { name: 'Hardeep Enterprises', url: '[CLIENT_URL_OR_SCREENSHOT]', type: 'Enterprise Website' },
      { name: 'D Salon', url: '[CLIENT_URL_OR_SCREENSHOT]', type: 'Salon & Booking Presence' },
    ],
  },
  // Set real testimonials when verified with client permission; empty array triggers honest Pilot Offer block
  realTestimonials: [] as Array<{
    name: string;
    business: string;
    city: string;
    quote: string;
    proofPlaceholder: string;
  }>,
  pilotOffer: {
    badge: 'Pilot Batch · Pehle 5 Clients',
    heading: {
      hinglish: 'Pehle 5 clients ke liye special pilot offer',
      en: 'Special pilot offer for the first 5 clients',
    },
    description: {
      hinglish:
        'Hum fake 5-star reviews ya nakli client logos nahi lagate. Abhi naye pilot batch ke pehle 5 SMB owners ko system setup par priority direct support aur reduced pilot pricing mil rahi hai — badle me sirf kaam pasand aane par honest feedback.',
      en: 'We never display fabricated reviews or fake client logos. For our current pilot batch, the first 5 SMB owners receive priority direct setup support and pilot pricing — in exchange for honest feedback once the system is live.',
    },
    cta: {
      hinglish: 'Pilot slot ke liye WhatsApp karein',
      en: 'Ask about a pilot slot on WhatsApp',
    },
  },
};

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${SITE_CONFIG.founder.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const HERO_CONTENT = {
  eyebrow: {
    hinglish: 'Excel se System tak · Noida, India',
    en: 'From Excel to System · Noida, India',
  },
  headline: {
    hinglish: 'Excel aur WhatsApp ke chaos se, apne business ka apna system tak.',
    en: 'From Excel and WhatsApp chaos to a system built for your business.',
  },
  subheadline: {
    hinglish:
      'Custom automation on Google Sheets, bina ERP ke kharche ke. Aapka data aapke hi Google account me rehta hai — zero monthly lock-in.',
    en: 'Custom business web apps and automation built on Google Sheets — without expensive ERP licenses. Your data stays inside your own Google Drive.',
  },
  primaryCta: {
    hinglish: 'Free 20-min consultation (WhatsApp)',
    en: 'Free 20-min consultation (WhatsApp)',
  },
  secondaryCta: {
    hinglish: 'Live demo dekho',
    en: 'See live systems',
  },
  trustStrip: {
    hinglish: [
      'Data aapke Google account me',
      'Koi lock-in nahi',
      'Noida-based · All India service',
    ],
    en: [
      'Data stays in your Google account',
      'No vendor lock-in',
      'Noida-based · Serving all India',
    ],
  },
};

export const PROBLEM_ITEMS = [
  {
    num: '01',
    title: {
      hinglish: 'Payment vasuli time par nahi hoti',
      en: 'Payment recovery keeps getting delayed',
    },
    desc: {
      hinglish:
        'Kis party ka kitna baki hai, kab due tha, aur kisne kya promise kiya — sab alag sheets ya diary me bikhra rehta hai. Reminder bhejna bhool jaate hain.',
      en: 'Pending party balances, due dates, and follow-up promises stay scattered across registers and files, so reminders go out late.',
    },
  },
  {
    num: '02',
    title: {
      hinglish: 'WhatsApp par aaye orders miss ya galat hote hain',
      en: 'Orders on WhatsApp get missed or mistyped',
    },
    desc: {
      hinglish:
        'Customer photo, voice note ya random message bhejta hai. Staff copy-paste karte waqt rate, quantity ya party location galat daal deta hai.',
      en: 'Customers send messy text or lists on WhatsApp. Manual copy-pasting into billing files leads to wrong rates, quantities, or missed dispatches.',
    },
  },
  {
    num: '03',
    title: {
      hinglish: 'Excel files crash aur formula errors',
      en: 'Broken Excel formulas and version confusion',
    },
    desc: {
      hinglish:
        'Ek hi file ke 5 versions ghoomte hain ("Final_v3_NEW.xlsx"). Kisi ne galti se formula delete kiya to poori month-end report galat ho jaati hai.',
      en: 'Multiple copies of the same spreadsheet circulate on WhatsApp. One accidental delete breaks formulas and throws off month-end totals.',
    },
  },
  {
    num: '04',
    title: {
      hinglish: 'Har report ke liye staff par dependency',
      en: 'Dependence on staff for basic daily numbers',
    },
    desc: {
      hinglish:
        'Aaj kitna maal gaya, kitna cash aaya, aur kitna stock kam hai — yeh dekhne ke liye bhi shaam ko staff ke phone ka intezaar karna padta hai.',
      en: 'Even to check today’s sales, cash collection, or low-stock items, you have to wait for staff to compile and send a file.',
    },
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: {
      hinglish: '20-Min Baat-Cheet',
      en: '20-Min Discovery Call',
    },
    desc: {
      hinglish:
        'WhatsApp call ya screen-share par aapka current Excel/register process samajhte hain — bina kisi sales pressure ke.',
      en: 'We review your current Excel sheets, WhatsApp workflow, and pain points on a quick call with zero sales pressure.',
    },
  },
  {
    step: '02',
    title: {
      hinglish: 'Demo + Fixed Quote',
      en: 'Working Demo + Fixed Quote',
    },
    desc: {
      hinglish:
        'Milta-julta ready system dikhate hain aur clear scope + fixed price + timeline dete hain. Koi hidden charge nahi.',
      en: 'You see a working system demo and receive a written scope, fixed price, and timeline upfront.',
    },
  },
  {
    step: '03',
    title: {
      hinglish: 'Build in 7–10 Days',
      en: 'Build in 7–10 Days',
    },
    desc: {
      hinglish:
        'Aapke hi Google Workspace / Drive me isolated Google Sheet aur Apps Script web app set up hota hai.',
      en: 'We configure your isolated Google Sheet and Apps Script web portal directly inside your Google account.',
    },
  },
  {
    step: '04',
    title: {
      hinglish: 'Staff Training + Support',
      en: 'Team Training + Handover Support',
    },
    desc: {
      hinglish:
        'Aapke staff ko Hindi/Hinglish me simple training dete hain aur go-live ke baad 30 days bug support milta hai.',
      en: 'We train your staff in simple Hindi/English and provide post-launch bug support for 30 days.',
    },
  },
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  {
    id: 'vasulisarthi',
    slug: 'vasulisarthi',
    name: 'VasuliSarthi',
    altName: 'CollectionSarthi',
    category: 'Recovery & Finance',
    forWho: {
      hinglish: 'Distributors, wholesalers aur Excel-based traders',
      en: 'Distributors, wholesalers, and Excel-based traders',
    },
    problemSolved: {
      hinglish: 'Udhaar aur overdue payments time par yaad nahi rehte, follow-up miss hota hai.',
      en: 'Overdue credit balances slip through the cracks without structured follow-up.',
    },
    oneLiner: {
      hinglish: 'Payment recovery automation: outstanding tracking, reminders, aur follow-up log.',
      en: 'Payment recovery automation with party-wise outstanding tracking and scheduled reminders.',
    },
    features: [
      { hinglish: 'Party-wise aging & due-date tracking sheet', en: 'Party-wise aging & due-date tracking' },
      { hinglish: 'WhatsApp Business API reminders (Gupshup)', en: 'WhatsApp payment reminders via Gupshup' },
      { hinglish: 'Staff follow-up remarks aur promise-to-pay log', en: 'Follow-up notes & promise-to-pay history' },
    ],
    screenshotPlaceholder: '[SCREENSHOT: VasuliSarthi Outstanding & Reminder Dashboard]',
    demoLink: '[DEMO_LINK_VASULISARTHI]',
    whatsappQuery: 'Hi Suraj, mujhe VasuliSarthi (payment recovery system) ke baare me baat karni hai.',
  },
  {
    id: 'supplysarthi',
    slug: 'supplysarthi',
    name: 'SupplySarthi',
    category: 'Supply & Distribution',
    forWho: {
      hinglish: 'B2B suppliers, wholesalers aur multi-location distributors',
      en: 'B2B suppliers and their multi-location customers',
    },
    problemSolved: {
      hinglish: 'Alag-alag delivery sites par alag rates, challan, aur complaint credit notes sambhalna mushkil hota hai.',
      en: 'Managing per-location pricing, challans, billing cycles, and complaints across sites on WhatsApp.',
    },
    oneLiner: {
      hinglish: 'Supplier onboarding, multi-location pricing, billing cycles, customer portal aur complaint-to-credit-note flow.',
      en: 'End-to-end B2B ordering, per-location pricing, billing cycles, customer portal, and credit/debit notes.',
    },
    features: [
      { hinglish: 'Per-customer, per-location custom rate list', en: 'Per-customer, per-location custom pricing' },
      { hinglish: 'Daily / Weekly / 15-day / Monthly billing cycles', en: 'Flexible daily/weekly/15-day/monthly billing' },
      { hinglish: 'Customer portal: orders, challans, invoices, ledger & credit notes', en: 'Customer portal for orders, challans, ledger & credit notes' },
    ],
    screenshotPlaceholder: '[SCREENSHOT: SupplySarthi Customer Portal & Challan Flow]',
    demoLink: '/products/supplysarthi',
    whatsappQuery: 'Hi Suraj, mujhe SupplySarthi B2B ordering & billing system ke baare me baat karni hai.',
    hasCustomDetailPage: true,
  },
  {
    id: 'ordersarthi',
    slug: 'ordersarthi',
    name: 'OrderSarthi',
    category: 'Supply & Distribution',
    forWho: {
      hinglish: 'FMCG distributors aur wholesale order desks',
      en: 'FMCG distributors and wholesale desks',
    },
    problemSolved: {
      hinglish: 'Retailers ke messy WhatsApp text orders ko bill me badalne me ghanton lagte hain.',
      en: 'Hours wasted reading unformatted WhatsApp order messages and looking up party rates.',
    },
    oneLiner: {
      hinglish: 'WhatsApp order parsing with AI aur customer-specific price lists.',
      en: 'AI-assisted WhatsApp order parsing mapped to customer-specific price lists.',
    },
    features: [
      { hinglish: 'Messy WhatsApp text se structured item table banana', en: 'Parse unformatted WhatsApp messages into line items' },
      { hinglish: 'Party-wise fixed rate list auto-apply', en: 'Auto-apply customer-specific price lists' },
      { hinglish: 'Order confirmation & dispatch summary Sheet me save', en: 'Clean order log ready for billing & dispatch' },
    ],
    screenshotPlaceholder: '[SCREENSHOT: OrderSarthi WhatsApp Parser & Rate List]',
    demoLink: '[DEMO_LINK_ORDERSARTHI]',
    whatsappQuery: 'Hi Suraj, mujhe OrderSarthi (WhatsApp order parsing) ke baare me baat karni hai.',
  },
  {
    id: 'salonsarthi',
    slug: 'salonsarthi',
    name: 'SalonSarthi',
    category: 'Retail & F&B',
    forWho: {
      hinglish: 'Unisex salons, studios aur beauty parlours',
      en: 'Salons and beauty studios',
    },
    problemSolved: {
      hinglish: 'Prepaid wallet balance hisab, missed appointments aur repeat visit tracking.',
      en: 'Manual prepaid package tracking, appointment no-shows, and lack of owner visibility.',
    },
    oneLiner: {
      hinglish: 'Prepaid wallet (Razorpay), WhatsApp reminders, self-booking aur owner analytics.',
      en: 'Salon self-booking, Razorpay prepaid wallet, WhatsApp reminders, and owner analytics.',
    },
    features: [
      { hinglish: 'Razorpay verified prepaid wallet & package balance', en: 'Prepaid wallet with server-verified Razorpay payments' },
      { hinglish: 'Client self-booking link & automated WhatsApp reminders', en: 'Self-booking portal + WhatsApp appointment reminders' },
      { hinglish: 'Daily service, staff & revenue analytics sheet', en: 'Owner analytics for revenue, staff & repeat visits' },
    ],
    screenshotPlaceholder: '[SCREENSHOT: SalonSarthi Booking & Wallet Portal]',
    demoLink: '[DEMO_LINK_SALONSARTHI]',
    whatsappQuery: 'Hi Suraj, mujhe SalonSarthi ke baare me baat karni hai.',
  },
  {
    id: 'feesarthi',
    slug: 'feesarthi',
    name: 'FeeSarthi',
    category: 'Operations & Staff',
    forWho: {
      hinglish: 'Gyms, dance classes, coaching & tuition centres',
      en: 'Gyms, dance studios, and tuition classes',
    },
    problemSolved: {
      hinglish: 'Monthly fee due dates yaad rakhna aur awkward payment reminders bhejna.',
      en: 'Tracking recurring member renewals and following up on pending monthly fees.',
    },
    oneLiner: {
      hinglish: 'Simple fee collection tracker aur automated WhatsApp renewal reminders.',
      en: 'Automated fee collection ledger and WhatsApp renewal reminders.',
    },
    features: [
      { hinglish: 'Active, expiring-soon aur overdue members ek screen par', en: 'Live active, expiring, and overdue member list' },
      { hinglish: 'WhatsApp par auto renewal reminder + receipt', en: 'Automated WhatsApp renewal alerts & PDF receipts' },
      { hinglish: 'Monthly collection summary owner ke phone par', en: 'Mobile-friendly monthly collection summary' },
    ],
    screenshotPlaceholder: '[SCREENSHOT: FeeSarthi Renewal & Receipt Tracker]',
    demoLink: '/products/gymsarthi',
    whatsappQuery: 'Hi Suraj, mujhe FeeSarthi / Gym fee system ke baare me baat karni hai.',
  },
  {
    id: 'menusarthi',
    slug: 'menusarthi',
    name: 'MenuSarthi',
    category: 'Retail & F&B',
    forWho: {
      hinglish: 'Restaurants, cafes, cloud kitchens aur bakeries',
      en: 'Restaurants, cafes, and bakeries',
    },
    problemSolved: {
      hinglish: 'Aggregators par heavy commission aur paper menu baar-baar print karne ka kharcha.',
      en: 'High aggregator commissions and static PDF menus that cannot take table/direct orders.',
    },
    oneLiner: {
      hinglish: 'QR-based digital menu aur direct ordering — bina heavy commission ke.',
      en: 'QR-based restaurant digital menu and direct ordering backed by Google Sheets.',
    },
    features: [
      { hinglish: 'Table QR scan karke seedha mobile par menu & order', en: 'Table QR scan for instant mobile menu & ordering' },
      { hinglish: 'Google Sheet se 10 second me price/item update', en: 'Update prices and item availability directly from Sheets' },
      { hinglish: 'Direct kitchen/counter order entry bina commission', en: 'Zero per-order marketplace commissions' },
    ],
    screenshotPlaceholder: '[SCREENSHOT: MenuSarthi QR Menu Interface]',
    demoLink: '/products/menusarthi',
    whatsappQuery: 'Hi Suraj, mujhe MenuSarthi QR ordering ke baare me baat karni hai.',
    hasCustomDetailPage: true,
  },
  {
    id: 'hisabsarthi',
    slug: 'hisabsarthi',
    name: 'HisabSarthi',
    category: 'Recovery & Finance',
    forWho: {
      hinglish: 'Small businesses aur traders jinhe simple GST accounting chahiye',
      en: 'Small businesses needing simple GST invoicing & accounting',
    },
    problemSolved: {
      hinglish: 'Heavy accounting software samajh nahi aata aur CA ko month-end data dene me der hoti hai.',
      en: 'Complex accounting suites overwhelm staff and delay monthly GST data sharing with CAs.',
    },
    oneLiner: {
      hinglish: 'Google Sheets-based GST accounting web app — data aapke Drive me.',
      en: 'Google Sheets-based GST invoicing, party ledger, and accounting web app.',
    },
    features: [
      { hinglish: 'GST invoice generation + PDF WhatsApp dispatch', en: 'GST invoice generation with PDF export' },
      { hinglish: 'Party-wise credit/debit ledger & expense book', en: 'Party-wise ledger and daily expense tracking' },
      { hinglish: 'CA-ready GSTR summary export ek click me', en: 'One-click GSTR-ready summary export for your CA' },
    ],
    screenshotPlaceholder: '[SCREENSHOT: HisabSarthi GST Ledger Web App]',
    demoLink: '/products/hisabsarthi',
    whatsappQuery: 'Hi Suraj, mujhe HisabSarthi GST accounting app ke baare me baat karni hai.',
    hasCustomDetailPage: true,
  },
  {
    id: 'loansarthi',
    slug: 'loansarthi',
    name: 'LoanSarthi',
    category: 'Recovery & Finance',
    forWho: {
      hinglish: 'NBFCs, micro-finance aur local licensed lenders',
      en: 'NBFCs and local lending businesses',
    },
    problemSolved: {
      hinglish: 'Daily/weekly/monthly EMI collection register me manage karne par hisab gadbad hota hai.',
      en: 'Managing borrower schedules, interest, and daily field collections in paper registers.',
    },
    oneLiner: {
      hinglish: 'Mobile-first loan, EMI schedule aur collection recovery management.',
      en: 'Loan disbursement, EMI schedules, and collection recovery tracking.',
    },
    features: [
      { hinglish: 'Borrower KYC, loan schedule & auto EMI calculation', en: 'Borrower profiles & automatic EMI schedule calculation' },
      { hinglish: 'Field collection entry mobile se seedha sheet me', en: 'Mobile-friendly field collection entry' },
      { hinglish: 'Overdue alerts aur clear principal/interest split', en: 'Overdue tracker with principal/interest breakdown' },
    ],
    screenshotPlaceholder: '[SCREENSHOT: LoanSarthi EMI & Collection Dashboard]',
    demoLink: '/products/loansarthi',
    whatsappQuery: 'Hi Suraj, mujhe LoanSarthi loan management ke baare me baat karni hai.',
    hasCustomDetailPage: true,
  },
  {
    id: 'bussarthi',
    slug: 'bussarthi',
    name: 'BusSarthi',
    category: 'Operations & Staff',
    forWho: {
      hinglish: 'Private bus operators aur travel fleet owners',
      en: 'Bus operators and route fleet owners',
    },
    problemSolved: {
      hinglish: 'Double seat booking, agent confusion aur route-wise passenger list banana.',
      en: 'Double seat bookings across booking counters and messy paper passenger charts.',
    },
    oneLiner: {
      hinglish: 'Seat booking, route chart aur concurrent-safe booking lock.',
      en: 'Visual bus seat booking with LockService protection against double booking.',
    },
    features: [
      { hinglish: 'Live visual seat layout (lower/upper, booked/available)', en: 'Visual seat layout with live availability' },
      { hinglish: 'LockService se simultaneous double-booking prevention', en: 'Concurrent write locking to prevent double bookings' },
      { hinglish: 'Route-wise passenger manifest & conductor print view', en: 'Instant passenger chart for conductors & agents' },
    ],
    screenshotPlaceholder: '[SCREENSHOT: BusSarthi Seat Layout & Booking View]',
    demoLink: '[DEMO_LINK_BUSSARTHI]',
    whatsappQuery: 'Hi Suraj, mujhe BusSarthi seat booking system ke baare me baat karni hai.',
  },
  {
    id: 'rationkart',
    slug: 'rationkart',
    name: 'RationKart',
    category: 'Supply & Distribution',
    forWho: {
      hinglish: 'Multi-site companies, hostels, kitchens aur retail stores',
      en: 'Companies with multiple sites, kitchens, or branch stores',
    },
    problemSolved: {
      hinglish: 'Sites se phone/WhatsApp par saman mangwana, approval tracking aur godown stock mismatch.',
      en: 'Uncontrolled site material requests over calls with zero approval trail or reorder alerts.',
    },
    oneLiner: {
      hinglish: 'Stock requisition, single-level approval, stock in/out aur reorder indicators.',
      en: 'Multi-site stock requisition, single-level approval, stock in/out, and reorder alerts.',
    },
    features: [
      { hinglish: 'Site manager mobile se item requisition bhejta hai', en: 'Site-level material requisition form' },
      { hinglish: 'Single-level manager approval workflow', en: 'Single-level approval before warehouse dispatch' },
      { hinglish: 'Live Stock In/Out ledger + low-stock reorder indicator', en: 'Stock In/Out movement & automatic reorder indicators' },
    ],
    screenshotPlaceholder: '[SCREENSHOT: RationKart Requisition & Stock Ledger]',
    demoLink: '/products/rationkart',
    whatsappQuery: 'Hi Suraj, mujhe RationKart multi-site stock system ke baare me baat karni hai.',
    hasCustomDetailPage: true,
  },
  {
    id: 'leftoversarthi',
    slug: 'leftoversarthi',
    name: 'LeftoverSarthi',
    category: 'Retail & F&B',
    forWho: {
      hinglish: 'Caterers, central kitchens aur event food contractors',
      en: 'Caterers and event kitchens',
    },
    problemSolved: {
      hinglish: 'Event ke baad kitna khana bacha aur kahan wastage hui iska koi record nahi hota.',
      en: 'No structured record of post-event leftover quantities and wastage costs.',
    },
    oneLiner: {
      hinglish: 'Event leftover entry aur automatic PDF summary reports.',
      en: 'Post-event leftover tracking and automated PDF kitchen reports.',
    },
    features: [
      { hinglish: 'Mobile se event-wise leftover quantity entry', en: 'Quick mobile entry per event and dish' },
      { hinglish: 'Auto-generated PDF report owner & kitchen head ke liye', en: 'One-click PDF report for management review' },
      { hinglish: 'Repeat wastage patterns dekhne ke liye historical log', en: 'Historical log to spot over-production patterns' },
    ],
    screenshotPlaceholder: '[SCREENSHOT: LeftoverSarthi Entry & PDF Report]',
    demoLink: '[DEMO_LINK_LEFTOVERSARTHI]',
    whatsappQuery: 'Hi Suraj, mujhe LeftoverSarthi catering tool ke baare me baat karni hai.',
  },
  {
    id: 'pharmasarthi',
    slug: 'pharmasarthi',
    name: 'PharmaSarthi',
    category: 'Retail & F&B',
    forWho: {
      hinglish: 'Medical stores aur local pharmacy distributors',
      en: 'Pharmacies and medical distributors',
    },
    problemSolved: {
      hinglish: 'Batch expiry miss hona aur regular patients ke refill reminders bhoolna.',
      en: 'Expiring medicine stock going unnoticed and missed chronic patient refill reminders.',
    },
    oneLiner: {
      hinglish: 'Batch expiry alerts aur regular medicine refill tracking.',
      en: 'Batch expiry tracking and patient refill reminder system on Google Sheets.',
    },
    features: [
      { hinglish: 'Near-expiry batch warning dashboard', en: 'Near-expiry stock alerts before loss' },
      { hinglish: 'Monthly refill customer reminder log', en: 'Regular patient refill reminder tracking' },
      { hinglish: 'Supplier purchase bill & stock reconciliation', en: 'Supplier invoice and batch stock tracking' },
    ],
    screenshotPlaceholder: '[SCREENSHOT: PharmaSarthi Batch & Expiry Tracker]',
    demoLink: '[DEMO_LINK_PHARMASARTHI]',
    whatsappQuery: 'Hi Suraj, mujhe PharmaSarthi ke baare me baat karni hai.',
  },
  {
    id: 'coachpro',
    slug: 'coachpro',
    name: 'CoachPro',
    category: 'Operations & Staff',
    forWho: {
      hinglish: 'Coaching institutes, trainers aur skill academies',
      en: 'Coaching institutes and batch trainers',
    },
    problemSolved: {
      hinglish: 'Batch attendance, test scores aur parent fee updates alag-alag files me rehna.',
      en: 'Batch attendance, student test marks, and fee status scattered across registers.',
    },
    oneLiner: {
      hinglish: 'Student batches, attendance, fee status aur parent updates ek jagah.',
      en: 'Student batch management, attendance, performance logs, and fee tracking.',
    },
    features: [
      { hinglish: 'Batch-wise daily attendance mobile se mark karein', en: 'Batch-wise mobile attendance logging' },
      { hinglish: 'Fee installment status & reminder list', en: 'Installment fee tracking & pending list' },
      { hinglish: 'Student progress & test score sheet', en: 'Clean student test score & progress summary' },
    ],
    screenshotPlaceholder: '[SCREENSHOT: CoachPro Batch & Fee Dashboard]',
    demoLink: '[DEMO_LINK_COACHPRO]',
    whatsappQuery: 'Hi Suraj, mujhe CoachPro institute system ke baare me baat karni hai.',
  },
  {
    id: 'bookingsarthi',
    slug: 'bookingsarthi',
    name: 'BookingSarthi',
    category: 'Operations & Staff',
    forWho: {
      hinglish: 'Clinics, consultants, service centers aur studios',
      en: 'Clinics, service centers, and appointment businesses',
    },
    problemSolved: {
      hinglish: 'Phone par slot book karne me time waste aur double-booking errors.',
      en: 'Back-and-forth phone calls for slots and overlapping appointments.',
    },
    oneLiner: {
      hinglish: 'Online slot booking, staff calendar aur WhatsApp appointment alerts.',
      en: 'Online appointment booking, staff assignment, and WhatsApp confirmations.',
    },
    features: [
      { hinglish: 'Available time slots ke saath clean booking link', en: 'Self-service slot booking link for clients' },
      { hinglish: 'Staff-wise schedule aur WhatsApp confirmation', en: 'Staff slot assignment + WhatsApp confirmation' },
      { hinglish: 'Client history & repeat visit tracking', en: 'Built-in client visit log in Google Sheets' },
    ],
    screenshotPlaceholder: '[SCREENSHOT: BookingSarthi Calendar & Slot Picker]',
    demoLink: '/products/bookingsarthi',
    whatsappQuery: 'Hi Suraj, mujhe BookingSarthi appointment system ke baare me baat karni hai.',
    hasCustomDetailPage: true,
  },
  {
    id: 'staffsarthi',
    slug: 'staffsarthi',
    name: 'StaffSarthi',
    altName: 'KarmSarthi',
    category: 'Operations & Staff',
    forWho: {
      hinglish: '10–100 employee wale SMBs, factories aur offices',
      en: 'SMBs with 10–100 staff members',
    },
    problemSolved: {
      hinglish: 'Attendance register, advance/loan cuts aur month-end salary calculation me galti.',
      en: 'Manual attendance registers, staff advance deductions, and slow month-end payroll.',
    },
    oneLiner: {
      hinglish: 'Daily attendance, leave, staff advance aur monthly salary sheet automation.',
      en: 'Staff attendance, leave requests, salary advances, and payroll sheet.',
    },
    features: [
      { hinglish: 'Daily attendance + late/half-day tracking', en: 'Daily attendance, half-day & overtime log' },
      { hinglish: 'Staff advance aur expense claim adjustment', en: 'Advance & reimbursement deduction tracking' },
      { hinglish: 'One-click monthly salary slip generation', en: 'Automated monthly salary slip PDFs' },
    ],
    screenshotPlaceholder: '[SCREENSHOT: StaffSarthi Attendance & Salary Sheet]',
    demoLink: '/products/karmsarthi',
    whatsappQuery: 'Hi Suraj, mujhe StaffSarthi HR & salary system ke baare me baat karni hai.',
    hasCustomDetailPage: true,
  },
];

export const CUSTOM_CASE_STUDIES: CustomProjectItem[] = [
  {
    id: 'catering-cogs',
    title: 'COGS Dashboard for a Catering Company',
    category: 'Custom MIS & Food Costing',
    problem: {
      hinglish:
        'Multi-event catering operations me har function ka raw material purchase, recipe consumption aur actual profit margin month-end tak pata hi nahi chalta tha.',
      en: 'Across multiple catering events, raw material purchases, recipe costing, and true event margins were impossible to see until weeks later.',
    },
    whatWeBuilt: {
      hinglish:
        'Google Sheets + Apps Script par Event-wise COGS & Recipe Costing Dashboard banaya — vendor bills, ingredient rates aur portion BOM ek jagah auto-calculate hote hain.',
      en: 'Built an event-wise COGS & Recipe BOM dashboard on Google Sheets + Apps Script that links vendor purchases directly to dish margins.',
    },
    result: '[REAL_RESULTS: Add verified % margin clarity or hours saved once approved by client]',
    screenshotPlaceholder: '[SCREENSHOT: Catering COGS Analytics Dashboard]',
  },
  {
    id: 'multi-site-mrp',
    title: 'Multi-Site MRP Reconciliation Web App',
    category: 'Custom Operations App',
    problem: {
      hinglish:
        'Alag-alag sites par receive hue stock aur vendor bills ke MRP/rate difference ko manually milane me kaafi errors aur leakage ho rahi thi.',
      en: 'Reconciling vendor invoice rates and MRP differences across multiple delivery sites manually led to frequent mismatches.',
    },
    whatWeBuilt: {
      hinglish:
        'Isolated Google Sheet backend ke upar Apps Script Web App banaya jisme site-wise entry, master MRP check aur mismatch flag automatically highlight hota hai.',
      en: 'Built a Google Apps Script web app with LockService concurrency that validates site-level entries against master MRP and flags discrepancies.',
    },
    result: '[REAL_RESULTS: Add verified reconciliation time saved / error drop]',
    screenshotPlaceholder: '[SCREENSHOT: Multi-Site MRP Reconciliation Tool]',
  },
  {
    id: 'websarthi-division',
    title: 'WebSarthi — Subscription Web Development',
    category: 'SMB Websites & Portals',
    problem: {
      hinglish:
        'Small businesses ko website banwane ke liye ₹40,000–₹60,000 ek saath dene padte hain, aur baad me chhote update ke liye bhi developer nahi milta.',
      en: 'SMBs hesitate to pay heavy upfront agency fees for websites that become outdated within months due to zero maintenance.',
    },
    whatWeBuilt: {
      hinglish:
        'Suraj Automation ki dedicated WebSarthi division (websarthi.surajdx.com) — affordable monthly subscription model jisme design, hosting, SSL aur updates shamil hain.',
      en: 'Created WebSarthi (websarthi.surajdx.com), a managed subscription web development service including design, hosting, SSL, and ongoing updates.',
    },
    result: '[REAL_RESULTS: Active NCR business sites deployed — details published only with client permission]',
    screenshotPlaceholder: '[SCREENSHOT: WebSarthi SMB Portal Preview]',
  },
];

export const COMPARISON_ROWS = [
  {
    aspect: { hinglish: 'Cost (Kharcha)', en: 'Cost' },
    erp: { hinglish: '₹50,000 – ₹3,00,000+ setup + per-user monthly fee', en: '₹50,000 – ₹3,00,000+ setup + per-user recurring fees' },
    excel: { hinglish: 'Free dikhta hai, par errors & time waste mehnga padta hai', en: 'Looks free, but billing errors and lost hours cost daily' },
    suraj: { hinglish: 'Fixed affordable project fee, zero per-user SaaS tax', en: 'Transparent fixed project fee, zero per-user software tax' },
  },
  {
    aspect: { hinglish: 'Setup Time', en: 'Setup Time' },
    erp: { hinglish: '2–6 mahine implementation aur training', en: '2–6 months of complex rollout' },
    excel: { hinglish: 'Turant, par bina structure ke fail hota hai', en: 'Immediate, but breaks as team grows' },
    suraj: { hinglish: '3–14 days me live aur running', en: 'Live and working in 3–14 days' },
  },
  {
    aspect: { hinglish: 'Flexibility (Badlav)', en: 'Flexibility' },
    erp: { hinglish: 'Rigid modules — chhota change bhi mehnga padta hai', en: 'Rigid workflows; custom changes cost extra' },
    excel: { hinglish: 'Flexible, par koi bhi formula tod sakta hai', en: 'Flexible, but anyone can accidentally break formulas' },
    suraj: { hinglish: '100% aapke business ke hisab se custom + locked logic', en: 'Tailored to your exact workflow with protected code' },
  },
  {
    aspect: { hinglish: 'Data Ownership', en: 'Data Ownership' },
    erp: { hinglish: 'Vendor ke server par locked — band kiya to data gaya', en: 'Locked on vendor cloud — hard to exit cleanly' },
    excel: { hinglish: 'Laptop/pen drive me — crash hone ka darr', en: 'Trapped on local PCs — risk of file loss' },
    suraj: { hinglish: 'Aapke apne Google Account / Drive me 100% safe & exportable', en: '100% in your own Google Drive with instant Excel/CSV export' },
  },
];

export const SECURITY_POINTS = [
  {
    title: { hinglish: 'Har client ke liye alag Google Sheet', en: 'Per-client isolated Google Sheet' },
    desc: {
      hinglish: 'Aapka business data kisi shared database me mix nahi hota. Har system aapke apne Google Drive ke isolated Sheet par chalta hai.',
      en: 'Your records are never mixed in a multi-tenant database. Every deployment runs on its own isolated Google Sheet inside your Drive.',
    },
  },
  {
    title: { hinglish: 'Secrets sirf Script Properties me', en: 'API keys stored only in Script Properties' },
    desc: {
      hinglish: 'WhatsApp API (Gupshup) ya payment keys kabhi frontend code me nahi rakhe jaate — sab server-side Apps Script PropertiesService me rehte hain.',
      en: 'API keys and webhook tokens are never hardcoded in frontend scripts. They stay server-side inside Google Apps Script PropertiesService.',
    },
  },
  {
    title: { hinglish: 'LockService se concurrent write safety', en: 'LockService for safe concurrent writes' },
    desc: {
      hinglish: 'Agar 5 staff ek saath bill ya booking submit karein, to Google Apps Script ka LockService entries ko overwrite hone se bachata hai.',
      en: 'When multiple staff submit entries at the same moment, Apps Script LockService queues writes cleanly so rows never overwrite each other.',
    },
  },
  {
    title: { hinglish: 'Server-side payment verification & quota checks', en: 'Server-side payment verification & quota monitoring' },
    desc: {
      hinglish: 'Jahan Razorpay ya WhatsApp API use hota hai, payment signature server par verify hota hai aur daily Apps Script quota monitor kiya jata hai.',
      en: 'Payment signatures are verified server-side before unlocking access or updating wallets, paired with Apps Script quota monitoring.',
    },
  },
  {
    title: { hinglish: 'Full Data Ownership & Easy Exit', en: 'Full data ownership & zero-friction exit' },
    desc: {
      hinglish: 'Kal ko aap aage na badhna chahein, to poora Sheet + Excel/CSV export aapke hi Google account me rehta hai — zero lock-in.',
      en: 'If you ever decide to stop working with us, your spreadsheet, history, and full CSV/XLSX exports stay right inside your Google account.',
    },
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter-template',
    name: {
      hinglish: 'Tier 1: Ready Sarthi System',
      en: 'Tier 1: Ready Sarthi System',
    },
    subtitle: {
      hinglish: 'Chhote shops, gyms, tuition ya single-workflow automation ke liye',
      en: 'For solo owners, shops, gyms, or single-workflow automation',
    },
    priceRange: '₹1,499 – ₹4,999',
    timeline: '1 – 3 Days',
    included: [
      { hinglish: 'Ready Google Sheet + Apps Script setup aapke Drive me', en: 'Ready Google Sheet + Apps Script deployment in your Drive' },
      { hinglish: 'Company name, logo aur basic fields setup', en: 'Basic branding and field configuration' },
      { hinglish: 'Step-by-step Hindi/English setup video + guide', en: 'Step-by-step setup guide and walkthrough' },
    ],
    excluded: [
      { hinglish: 'WhatsApp Business API (Gupshup) wallet & Meta charges', en: 'Third-party WhatsApp API (Gupshup) messaging charges' },
      { hinglish: 'Custom new modules ya major workflow changes', en: 'Major custom workflow rebuilds' },
    ],
    ctaText: {
      hinglish: 'Ready System Book Karein',
      en: 'Book Ready System',
    },
  },
  {
    id: 'custom-business-system',
    name: {
      hinglish: 'Tier 2: Custom Business System',
      en: 'Tier 2: Custom Business System',
    },
    subtitle: {
      hinglish: 'Traders, distributors aur service SMBs ke liye complete custom workflow',
      en: 'End-to-end tailored web portal + Google Sheet system for growing SMBs',
    },
    priceRange: '₹9,999 – ₹29,999',
    timeline: '7 – 14 Days',
    highlighted: true,
    included: [
      { hinglish: 'Custom web app UI (mobile-first) + isolated Google Sheet DB', en: 'Mobile-first custom web app + isolated Google Sheet DB' },
      { hinglish: 'Multi-user roles, LockService safety aur PDF/Invoice auto-gen', en: 'Role access, LockService concurrency & auto PDF invoices' },
      { hinglish: 'WhatsApp API (Gupshup) / Gmail notification integration', en: 'WhatsApp Business API (Gupshup) & Gmail automation' },
      { hinglish: 'Purane Excel data ka migration + staff training + 30 days support', en: 'Legacy Excel import + staff training + 30 days support' },
    ],
    excluded: [
      { hinglish: 'Gupshup/Meta WhatsApp message credits (actuals par)', en: 'WhatsApp conversation charges (paid directly at actuals)' },
      { hinglish: 'Custom domain (.com/.in) renewal agar alag se chahiye', en: 'Custom domain registration/renewal fees if required' },
    ],
    ctaText: {
      hinglish: 'Free Consultation & Quote Lein',
      en: 'Get Fixed Quote on WhatsApp',
    },
  },
  {
    id: 'websarthi-retainer',
    name: {
      hinglish: 'Tier 3: WebSarthi / Multi-Site Automation',
      en: 'Tier 3: WebSarthi / Multi-Site System',
    },
    subtitle: {
      hinglish: 'Managed business website subscription ya multi-location ERP systems',
      en: 'Managed subscription website (WebSarthi) or multi-site operations portal',
    },
    priceRange: 'WebSarthi from ₹1,999/mo · Multi-Site Custom Quote',
    timeline: '5 – 14 Days',
    included: [
      { hinglish: 'Business website design, SSL, hosting & monthly content updates (WebSarthi)', en: 'Website design, SSL, hosting & monthly updates (WebSarthi)' },
      { hinglish: 'Multi-site portals (jaise SupplySarthi / RationKart) + owner analytics', en: 'Multi-site ordering/reconciliation portals + owner MIS' },
      { hinglish: 'Priority WhatsApp & screen-share support', en: 'Priority WhatsApp and call support' },
    ],
    excluded: [
      { hinglish: 'Google Workspace paid seats (agar aap free Gmail se upgrade karein)', en: 'Paid Google Workspace user seats if upgraded' },
      { hinglish: 'Paid ad spend ya third-party SMS/WhatsApp API balance', en: 'Ad budgets or third-party API messaging balance' },
    ],
    ctaText: {
      hinglish: 'Multi-Site / WebSarthi Discuss Karein',
      en: 'Discuss WebSarthi / Multi-Site',
    },
  },
];

export const PRICING_TERMS = {
  paymentTerms: '50% advance on scope freeze, 50% on final demo & handover',
  supportPeriod: '30 days post-delivery bug-fix support included',
};

export const FAQ_ITEMS = [
  {
    q: {
      hinglish: '1. Kya Google Sheets business data ke liye safe hai?',
      en: '1. Is Google Sheets safe for my business data?',
    },
    a: {
      hinglish:
        'Haan, kyunki aapka data Google Workspace ke standard security infrastructure par rehta hai — aapke apne Google Drive ke andar. Hum 2-Factor Authentication on rakhne, restricted sheet permissions dene aur API keys ko sirf server-side Script Properties me rakhne ki practice follow karte hain. Koi bhi system 100% hack-proof nahi hota, isliye hum regular Drive backup lena bhi sikhate hain.',
      en: 'Yes — your spreadsheet runs inside your own Google Drive protected by Google account security and 2FA. We restrict sheet editing permissions, use Apps Script PropertiesService for API keys, and guide you on maintaining regular backups.',
    },
  },
  {
    q: {
      hinglish: '2. Mera data kiske paas rahega?',
      en: '2. Who keeps ownership and control of my data?',
    },
    a: {
      hinglish:
        '100% aapke paas. Har client ke liye alag Google Sheet aur alag Apps Script deployment banta hai jo aapke hi Google account me rehta hai. Hum aapka customer ya hisab data apne paas store nahi karte.',
      en: 'You do. Every client gets an isolated Google Sheet and Apps Script deployment inside their own Google account. We do not keep copies of your customer or ledger data on third-party servers.',
    },
  },
  {
    q: {
      hinglish: '3. System banne me kitna time lagta hai?',
      en: '3. How long does it take to build and go live?',
    },
    a: {
      hinglish:
        'Ready Sarthi systems 1 se 3 din me set up ho jaate hain. Custom business web app aur WhatsApp automation me scope ke hisab se usually 7–14 din (lagbhag 1–2 hafte) lagte hain.',
      en: 'Pre-built Sarthi templates go live in 1–3 days. Custom business workflows and WhatsApp integrations typically take 7–14 days depending on complexity.',
    },
  },
  {
    q: {
      hinglish: '4. Delivery ke baad support milega?',
      en: '4. Will I get support after delivery?',
    },
    a: {
      hinglish:
        'Bilkul. Delivery ke waqt staff training included hoti hai aur 30 din tak bug-fix support free rehta hai. Uske baad chhote updates ya naye features ke liye affordable support plan ya per-task quote le sakte hain.',
      en: 'Yes. Staff onboarding is included, followed by 30 days of bug-fix support. Ongoing enhancements can be requested on an as-needed basis or retainer.',
    },
  },
  {
    q: {
      hinglish: '5. Agar future me aap available na rahe to mera system chalega?',
      en: '5. What happens to my system if you are unavailable in the future?',
    },
    a: {
      hinglish:
        'Haan, bilkul chalega. Kyunki system standard Google Sheets + clean Google Apps Script par bana hota hai jo aapke account me hai — koi proprietary software nahi hai. Koi bhi Google Apps Script developer ise easily samajh aur maintain kar sakta hai, aur aap kabhi bhi poora data Excel/CSV me export kar sakte hain.',
      en: 'Yes. Because everything runs on standard Google Sheets and clean Apps Script inside your Google account, there is zero vendor lock-in. Any Apps Script developer can maintain it, and you can export all data to Excel/CSV anytime.',
    },
  },
  {
    q: {
      hinglish: '6. Purane Excel ya register se data migrate kaise hoga?',
      en: '6. How do we migrate data from our old Excel files or registers?',
    },
    a: {
      hinglish:
        'Custom builds me hum aapki purani Excel files (party list, item rate list, opening balance) clean karke naye system me import karne me poori madad karte hain, taaki team Day 1 se kaam shuru kar sake.',
      en: 'For custom deployments, we help clean and import your existing Excel master lists (customers, SKUs, opening balances) so your team starts smoothly on Day 1.',
    },
  },
  {
    q: {
      hinglish: '7. Kya WhatsApp automation legal aur safe hai?',
      en: '7. Is WhatsApp automation legal and safe for my number?',
    },
    a: {
      hinglish:
        'Hum unofficial bulk-spam tools use nahi karte jisse number ban ho. Hum official WhatsApp Business API (jaise Gupshup) use karte hain jahan approved templates ke zariye bills, reminders aur order updates jaate hain.',
      en: 'We avoid risky unofficial scraper/spam tools. We integrate official WhatsApp Business API providers like Gupshup with Meta-approved templates for invoices, reminders, and order alerts.',
    },
  },
  {
    q: {
      hinglish: '8. Kya mujhe business invoice milega?',
      en: '8. Will I receive a proper business invoice?',
    },
    a: {
      hinglish:
        'Haan, har project milestone aur template order par proper business invoice issue kiya jaata hai, jisme clear scope, pricing, aur payment summary hoti hai.',
      en: 'Yes, an official business invoice detailing scope, milestone breakdown, and payment summary is issued for every project and template order.',
    },
  },
  {
    q: {
      hinglish: '9. Refund aur cancellation policy kya hai?',
      en: '9. What is your refund and cancellation policy?',
    },
    a: {
      hinglish:
        'Demo aur fixed scope approve hone ke baad kaam shuru hota hai. Agar development shuru hone se pehle cancel karein to review ke baad refund possible hai; ek baar custom coding ya digital template delivery hone ke baad completed milestone non-refundable hota hai. Poori details Refund Policy page par hain.',
      en: 'Work starts only after demo and scope sign-off. Cancellations prior to work kickoff are eligible for review; once custom work or template access is delivered, completed milestones are non-refundable. Full details are on our Refund Policy page.',
    },
  },
  {
    q: {
      hinglish: '10. Kya Google Sheets se custom business software aur ERP ban sakta hai?',
      en: '10. Can Google Sheets and Apps Script be used to build custom business management software and ERP?',
    },
    a: {
      hinglish:
        'Bilkul. Google Sheets database aur Google Apps Script web app ke combination se aap billing, stock requisition, payment recovery, attendance aur MIS dashboards ke liye ek custom ERP chala sakte hain — bina ₹50,000–₹3,00,000 ke heavy ERP license ke. Tally statutory filing ke saath yeh daily operations ko seamlessly automate karta hai.',
      en: 'Yes. Combining Google Sheets as an isolated cloud database with a Google Apps Script web interface allows Indian SMBs to run custom billing, inventory, payment recovery, and MIS dashboards—providing a practical alternative to expensive enterprise ERPs while working cleanly alongside Tally for accounting.',
    },
  },
  {
    q: {
      hinglish: '11. India me custom business software development ki cost kitni hoti hai?',
      en: '11. How much does custom business software development cost in India?',
    },
    a: {
      hinglish:
        'Ready Sarthi templates ₹1,499 se ₹4,999 tak start hote hain, jabki tailored Google Sheets + Apps Script web apps aur WhatsApp automation usually ₹9,999 se ₹29,999 ke fixed scope me build ho jaate hain—zero per-user monthly license fee ke saath.',
      en: 'Pre-built Sarthi workflows start between ₹1,499 and ₹4,999, while custom business web applications with Google Sheets, Apps Script, and WhatsApp API integrations typically range from ₹9,999 to ₹29,999 as a fixed project fee with zero per-user SaaS tax.',
    },
  },
  {
    q: {
      hinglish: '12. Chhote businesses daily operations aur manual Excel reporting kaise automate karein?',
      en: '12. How can small businesses automate daily operations and reduce manual Excel reporting?',
    },
    a: {
      hinglish:
        'Start karne ke liye sabse repetitive kaam chunein — jaise WhatsApp order entry, payment due reminders, ya daily sales MIS compilation. Google Forms, Sheets, Apps Script triggers aur Power BI/MIS dashboards connect karke manual copy-paste 80–90% tak kam ho sakta hai.',
      en: 'Start by automating your highest-friction daily workflow—such as WhatsApp order capture, payment reminders, or daily sales MIS compilation. Connecting structured input forms, Google Apps Script triggers, and automated MIS dashboards eliminates manual copy-pasting and gives owners real-time visibility.',
    },
  },
];
