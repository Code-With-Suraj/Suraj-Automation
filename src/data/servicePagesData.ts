export interface ServicePageFAQ {
  question: string;
  answer: string;
}

export interface ServiceWorkflowStep {
  title: string;
  detail: string;
}

export interface ServiceProblemPair {
  problem: string;
  solution: string;
}

export interface ServiceRelatedLink {
  label: string;
  to: string;
  description: string;
}

export interface ServicePageConfig {
  slug: string;
  navTitle: string;
  primaryKeyword: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string;
  serviceType: string;
  eyebrow: string;
  h1: string;
  heroSummary: string;
  primaryCtaLabel: string;
  whatsappPrefill: string;
  introHeading: string;
  introParagraphs: string[];
  problemSolutions: ServiceProblemPair[];
  capabilitiesHeading: string;
  capabilities: ServiceWorkflowStep[];
  techStack: string[];
  idealFor: string[];
  relatedLinks: ServiceRelatedLink[];
  faqs: ServicePageFAQ[];
}

export const SERVICE_PAGES: ServicePageConfig[] = [
  {
    slug: 'google-apps-script',
    navTitle: 'Google Apps Script Services',
    primaryKeyword: 'Google Apps Script Development Services',
    seoTitle: 'Google Apps Script Development Services | Suraj Automation',
    metaDescription:
      'Custom Google Apps Script development services for Indian SMBs. Automate Google Sheets, Gmail, Forms & Drive workflows with zero server cost. Book a free call.',
    keywords:
      'Google Apps Script Development Services, Google Apps Script Automation Services, Google Sheets Automation Company, Google Apps Script Web App Development, Google Sheets ERP Development, Custom Google Sheets Web Application, Google Workspace Automation Services, Google Apps Script Developer India, Google Sheets Business Automation, Google Sheets API Integration Services, Google Apps Script Custom Software, Google Apps Script Business Solutions',
    serviceType: 'Google Apps Script Development & Google Workspace Automation',
    eyebrow: 'Google Apps Script Development Services · India',
    h1: 'Google Apps Script Development Services & Google Sheets Business Automation',
    heroSummary:
      'Turn Google Sheets, Gmail, Drive, and Forms into a structured, multi-user operational system without paying recurring server or per-user SaaS fees.',
    primaryCtaLabel: 'Automate Your Business Today',
    whatsappPrefill:
      'Hi Suraj, I want to discuss Google Apps Script development services for my business workflow.',
    introHeading: 'Why Indian Businesses Choose Google Apps Script Custom Software',
    introParagraphs: [
      'Most growing Indian businesses already track leads, dispatches, party balances, and stock inside spreadsheets—but manual copy-pasting across files leads to broken formulas, missed follow-ups, and version confusion.',
      'As a specialized Google Sheets automation company in India, Suraj Automation engineers production-grade Google Apps Script business solutions directly inside your own Google Workspace or Gmail account. Using LockService for concurrent write safety and PropertiesService for API key isolation, your team gets web-app speed while retaining 100% ownership of your data.'
    ],
    problemSolutions: [
      {
        problem: 'Staff accidentally overwriting formulas or editing master rate sheets.',
        solution:
          'We build a custom Google Sheets web application (HTML/JS frontend on Apps Script) so staff only interact with clean forms while the master Sheet stays protected.'
      },
      {
        problem: 'Hours spent manually creating PDF invoices, challans, and dispatch emails.',
        solution:
          'Automated onFormSubmit and time-driven triggers populate Docs/Sheets templates, generate PDFs in Drive, and email or WhatsApp clients instantly.'
      },
      {
        problem: 'Disconnected Google Workspace apps and external accounting or CRM tools.',
        solution:
          'Google Sheets API integration services connect your spreadsheets with Gupshup WhatsApp API, Razorpay webhooks, and external REST APIs seamlessly.'
      }
    ],
    capabilitiesHeading: 'What We Build with Google Workspace Automation Services',
    capabilities: [
      {
        title: '01. Google Sheets ERP Development',
        detail:
          'Order management, multi-site stock requisitions, party ledgers, and approval workflows backed by an isolated Google Sheet per client.'
      },
      {
        title: '02. Google Apps Script Web App Development',
        detail:
          'Mobile-friendly internal portals with role-based login, search filters, and LockService concurrency protection so simultaneous staff entries never clash.'
      },
      {
        title: '03. Automated Triggers, PDFs & Email Pipelines',
        detail:
          'Scheduled daily summary emails, low-stock alerts, automated quotation PDFs, and Google Drive folder organization triggered automatically.'
      },
      {
        title: '04. Google Sheets API Integration Services',
        detail:
          'Two-way webhook integrations with Razorpay payment verification, WhatsApp Business API (Gupshup), Gemini AI parsing, and legacy CSV/Excel imports.'
      }
    ],
    techStack: [
      'Google Apps Script (V8 Runtime)',
      'Google Sheets & Drive API',
      'HTML5 / Tailwind Web App UI',
      'LockService & PropertiesService',
      'Gmail & Calendar Automation',
      'REST Webhooks & JSON APIs'
    ],
    idealFor: [
      'Distributors & wholesalers managing multi-party orders and challans',
      'CA firms, agencies, and HR teams automating document generation',
      'SMBs seeking an affordable custom ERP alternative inside Google Drive'
    ],
    relatedLinks: [
      {
        label: 'Starter Apps Script Offer (From ₹2,999)',
        to: '/offers/google-apps-script-automation',
        description: 'Fixed-price starter automation package for connecting 1–2 Workspace workflows.'
      },
      {
        label: 'Google Sheets Automation Package (From ₹1,499)',
        to: '/offers/google-sheets-automation',
        description: 'Entry package for cleaning and automating repetitive spreadsheet tasks.'
      },
      {
        label: 'Read: Why Apps Script + Sheets Works as an SMB ERP',
        to: '/blog/why-apps-script-erp',
        description: 'Technical breakdown of cost savings, security, and scaling limits.'
      },
      {
        label: 'Explore Sarthi Pre-Built Systems',
        to: '/products',
        description: 'Browse HisabSarthi, RationKart, SupplySarthi, and StockSarthi.'
      }
    ],
    faqs: [
      {
        question: 'Can Google Sheets be used to build business management software?',
        answer:
          'Yes. When paired with Google Apps Script, Google Sheets functions as a structured cloud database behind a custom web interface, supporting role-based inputs, automated PDFs, and real-time reporting for small and mid-sized teams with zero monthly server cost.'
      },
      {
        question: 'What are the benefits of Google Apps Script for business automation?',
        answer:
          'Google Apps Script runs natively on Google cloud servers inside your own Google account, eliminating third-party hosting fees and vendor lock-in. It connects Sheets, Gmail, Docs, Drive, and external APIs like WhatsApp Business and Razorpay cleanly.'
      },
      {
        question: 'Can I build a custom ERP using Google Sheets and Apps Script?',
        answer:
          'Yes. Indian SMBs routinely use Google Sheets + Apps Script to run custom ERP modules including order intake, billing cycles, inventory requisitions, payment recovery, and attendance tracking—avoiding ₹50,000 to ₹3,00,000+ traditional ERP rollout fees.'
      }
    ]
  },
  {
    slug: 'custom-software-development',
    navTitle: 'Custom Software Development',
    primaryKeyword: 'Custom Software Development India',
    seoTitle: 'Custom Software Development India | Suraj Automation',
    metaDescription:
      'Affordable custom software development in India for small businesses. Build tailored CRM, HRMS, purchase & ERP workflows without heavy per-user fees. Talk today.',
    keywords:
      'Custom Software Development India, Custom Software Development Company India, Custom Software Development for Small Business, Affordable Business Software Development, Custom Business Management Software, Internal Business Software Development, Custom CRM Software Development, Purchase Management Software Development, Custom HRMS Software Development, Custom ERP Solutions for Small Businesses, Business Software Development Company',
    serviceType: 'Custom Business Software & Internal Systems Development',
    eyebrow: 'Custom Software Development Company India',
    h1: 'Custom Software Development for Small Businesses in India',
    heroSummary:
      'Replace rigid, expensive enterprise tools and scattered spreadsheets with affordable business software built around how your floor team actually operates.',
    primaryCtaLabel: 'Get a Custom Software Solution',
    whatsappPrefill:
      'Hi Suraj, I am looking for custom software development for my business in India.',
    introHeading: 'Practical Internal Business Software Development — Zero Per-User Tax',
    introParagraphs: [
      'Growing SMBs often get stuck between two extremes: paying lakhs for oversized ERPs that staff refuse to adopt, or relying on fragile manual Excel files and WhatsApp chats.',
      'As an affordable custom software development company in India, Suraj Automation designs custom business management software mapped step-by-step to your approval rules, rate lists, purchase cycles, and team roles. Whether built on React + Node.js or lightweight Google Workspace infrastructure, you get transparent fixed-quote pricing and full ownership.'
    ],
    problemSolutions: [
      {
        problem: 'Off-the-shelf SaaS tools charge per user every month and force rigid workflows.',
        solution:
          'We build internal business software tailored to your exact registers and approval flows with fixed project pricing and zero per-seat SaaS tax.'
      },
      {
        problem: 'Purchase orders, vendor quotations, and site approvals happening informally on phone calls.',
        solution:
          'Purchase management software development with RFQ comparisons, single-level or multi-level manager sign-off, and audit trails.'
      },
      {
        problem: 'Staff attendance, advance deductions, and payroll taking days at month-end.',
        solution:
          'Custom HRMS software development covering daily attendance, leave balances, advance tracking, and one-click salary slip generation.'
      }
    ],
    capabilitiesHeading: 'Custom Business Management Software Modules We Engineer',
    capabilities: [
      {
        title: '01. Custom CRM Software Development',
        detail:
          'Lead capture from forms and WhatsApp, sales stage tracking, follow-up reminders, and quotation status built for B2B sales desks.'
      },
      {
        title: '02. Purchase Management Software Development',
        detail:
          'Vendor onboarding, rate comparison sheets, purchase requisitions, GRN verification, and vendor bill reconciliation.'
      },
      {
        title: '03. Custom HRMS Software Development',
        detail:
          'Shift and daily attendance tracking, leave approvals, expense claims, staff loans/advances, and automated payroll sheets.'
      },
      {
        title: '04. Custom ERP Solutions for Small Businesses',
        detail:
          'Connected operations software uniting orders, inventory, dispatch challans, credit notes, and owner MIS dashboards—working cleanly alongside Tally.'
      }
    ],
    techStack: [
      'React & TypeScript Frontends',
      'Node.js & Express APIs',
      'Google Apps Script & Sheets DB',
      'Firebase / PostgreSQL Options',
      'Razorpay Payment Integration',
      'Gupshup WhatsApp Business API'
    ],
    idealFor: [
      'Traders, B2B suppliers, and manufacturers outgrowing manual Excel files',
      'Service agencies, clinics, and multi-branch teams needing custom CRM/HRMS',
      'Business owners who want fixed quotes and Hindi/English team onboarding'
    ],
    relatedLinks: [
      {
        label: 'Transparent Fixed-Quote Pricing',
        to: '/pricing',
        description: 'Review Tier 1, Tier 2, and custom multi-site development ranges.'
      },
      {
        label: 'Custom Software Cost Guide (2026)',
        to: '/blog/custom-business-software-development-cost-india',
        description: 'Understand what drives software cost in India and how to avoid ERP bloat.'
      },
      {
        label: 'VendorSarthi & SalarySarthi Systems',
        to: '/products',
        description: 'Explore ready modules for procurement, HR, payroll, and billing.'
      },
      {
        label: 'Calculate Automation ROI',
        to: '/roi-tool',
        description: 'Estimate monthly hours and admin overhead saved before building.'
      }
    ],
    faqs: [
      {
        question: 'Which company provides affordable custom business software in India?',
        answer:
          'Suraj Automation builds affordable custom business software for Indian SMBs using modular Google Workspace, Apps Script, and modern web stacks. Pre-built Sarthi modules start at ₹1,499–₹4,999, while custom operational systems range from ₹9,999 to ₹29,999 without per-user fees.'
      },
      {
        question: 'What is the best alternative to expensive ERP software for small businesses?',
        answer:
          'A custom Google Sheets + Apps Script web application or lightweight modular web portal is often the best ERP alternative for Indian SMBs. It mirrors your existing registers, trains staff in days, keeps Tally intact for statutory accounting, and avoids multi-lakh licensing fees.'
      },
      {
        question: 'How much does custom business software development cost in India?',
        answer:
          'Costs depend on workflow complexity: single-module automations start around ₹1,499–₹4,999, full custom multi-user web portals with WhatsApp integration typically cost ₹9,999–₹29,999, and multi-site enterprise setups are quoted upfront after a 20-minute scope call.'
      },
      {
        question: 'Which company develops custom automation software for Indian SMBs?',
        answer:
          'Suraj Automation specializes exclusively in custom automation software for Indian SMBs—serving distributors, manufacturers, clinics, salons, and service firms across Noida, Delhi NCR, and pan-India with direct Hinglish/English support.'
      }
    ]
  },
  {
    slug: 'web-application-development',
    navTitle: 'Web Application Development',
    primaryKeyword: 'Custom Web Application Development',
    seoTitle: 'Custom Web Application Development | Suraj Automation',
    metaDescription:
      'Build fast, mobile-ready custom web applications in India. From Google Apps Script web apps to React & Node.js SaaS portals tailored to your exact workflow.',
    keywords:
      'Custom Web Application Development, Custom Web App Development India, Google Apps Script Web App Development, Custom Google Sheets Web Application, SaaS Application Development Company India, Business Workflow Management Software, Workflow Automation Solutions',
    serviceType: 'Custom Web Application & SaaS Portal Development',
    eyebrow: 'Custom Web App Development India',
    h1: 'Custom Web Application Development & Workflow Portals',
    heroSummary:
      'Launch mobile-friendly client portals, booking apps, and internal SaaS platforms engineered with clean React interfaces or zero-server Google Sheets backends.',
    primaryCtaLabel: 'Build Your Custom Business Application',
    whatsappPrefill:
      'Hi Suraj, I want to build a custom web application for my business.',
    introHeading: 'From Internal Workflow Portals to Full-Stack Web Apps',
    introParagraphs: [
      'Spreadsheets work well as databases, but giving 20 field executives or customers direct spreadsheet access leads to accidental edits and security risks.',
      'Our custom web application development service wraps your business rules in an intuitive, mobile-responsive browser portal. Depending on your scale, we build either a fast custom Google Sheets web application via Apps Script (zero hosting cost) or a full-stack React + Node.js SaaS platform with server-verified Razorpay payments and cloud databases.'
    ],
    problemSolutions: [
      {
        problem: 'Field staff and customers struggle to fill messy spreadsheets on mobile phones.',
        solution:
          'Clean mobile-first web forms, searchable dashboards, and role-specific portals that work smoothly on any Android, iOS, or desktop browser.'
      },
      {
        problem: 'Double bookings or overwritten records when multiple operators submit at once.',
        solution:
          'Server-side LockService queuing and atomic database transactions guarantee concurrent submissions never collide.'
      },
      {
        problem: 'Need to launch a service business website or SaaS MVP without ₹1L+ upfront risk.',
        solution:
          'Flexible architecture choices—from ₹3,999 Google Sheets web app starters to WebSarthi managed monthly plans (websarthi.surajdx.com) and custom React apps.'
      }
    ],
    capabilitiesHeading: 'Web Application & Workflow Architectures We Deliver',
    capabilities: [
      {
        title: '01. Customer & B2B Ordering Portals',
        detail:
          'Self-service portals like SupplySarthi where B2B buyers view custom location pricing, place orders, and download invoices and ledgers.'
      },
      {
        title: '02. Appointment, Seat & Wallet Web Apps',
        detail:
          'Slot booking and prepaid wallet web apps with server-verified Razorpay checkout and automated WhatsApp confirmations.'
      },
      {
        title: '03. React + Node.js SaaS Application Development',
        detail:
          'Production TypeScript web applications with authentication, PDF exports, admin consoles, and third-party API integrations.'
      },
      {
        title: '04. Custom Google Sheets Web Applications',
        detail:
          'Lightweight web portals hosted directly on your Google Drive ecosystem so your non-technical team can inspect or export master tables anytime.'
      }
    ],
    techStack: [
      'React 19 & TypeScript',
      'Tailwind CSS Responsive UI',
      'Node.js & Express Backend',
      'Google Apps Script Web Apps',
      'Firebase Auth & Firestore',
      'Razorpay Server-Verified Checkout'
    ],
    idealFor: [
      'B2B suppliers launching customer ordering and ledger portals',
      'Salons, clinics, and travel operators needing conflict-free booking apps',
      'Founders launching SaaS MVPs or managed websites via WebSarthi'
    ],
    relatedLinks: [
      {
        label: 'Starter Custom Web App Offer (From ₹3,999)',
        to: '/offers/custom-web-app',
        description: 'Fast-launch web app powered by a Google Sheets backend.'
      },
      {
        label: 'SupplySarthi B2B Customer Portal',
        to: '/products/supplysarthi',
        description: 'See a live multi-location ordering, challan, and credit note web app.'
      },
      {
        label: 'BookingSarthi Appointment System',
        to: '/products/bookingsarthi',
        description: 'Online slot scheduling and client management portal.'
      },
      {
        label: 'Case Studies & Custom Builds',
        to: '/case-studies',
        description: 'Explore multi-site reconciliation and catering web portals.'
      }
    ],
    faqs: [
      {
        question: 'Can Google Sheets be used to build a custom web application?',
        answer:
          'Yes. Using Google Apps Script HTMLService or a React frontend connected via API, Google Sheets can power internal portals, booking tools, and B2B order desks cleanly for small and mid-sized teams.'
      },
      {
        question: 'How long does custom web application development take?',
        answer:
          'Lightweight Google Apps Script web apps typically go live in 5–10 days, while custom full-stack React/Node.js portals with payment and WhatsApp integrations take 2–3 weeks after scope sign-off.'
      },
      {
        question: 'Can a Google Sheets web app migrate to SQL later if traffic grows?',
        answer:
          'Yes. Because we separate frontend UI logic from the data layer, your application can upgrade from Google Sheets to PostgreSQL or Firestore later without rebuilding your entire user workflow.'
      }
    ]
  },
  {
    slug: 'whatsapp-automation',
    navTitle: 'WhatsApp Automation Services',
    primaryKeyword: 'WhatsApp Business Automation Services',
    seoTitle: 'WhatsApp Business Automation Services | Suraj Automation',
    metaDescription:
      'Automate WhatsApp invoices, order capture & payment reminders for Indian SMBs. Official Gupshup & WhatsApp Business API integration with Google Sheets CRM.',
    keywords:
      'WhatsApp Business Automation Services, WhatsApp API Integration Services India, WhatsApp Invoice Automation, WhatsApp Order Management Automation, Automated Payment Reminder Software, WhatsApp CRM Automation',
    serviceType: 'WhatsApp Business API Automation & Payment Reminders',
    eyebrow: 'WhatsApp API Integration Services India',
    h1: 'WhatsApp Business Automation Services for Invoices, Orders & Recovery',
    heroSummary:
      'Stop chasing overdue payments manually or misreading messy WhatsApp order messages. Automate official WhatsApp notifications, PDF billing, and CRM logging.',
    primaryCtaLabel: 'Discuss Your Automation Requirements',
    whatsappPrefill:
      'Hi Suraj, I want to automate WhatsApp invoices, order alerts, or payment reminders for my business.',
    introHeading: 'Official WhatsApp CRM Automation Built for Indian Business Reality',
    introParagraphs: [
      'In India, business happens on WhatsApp—retailers send orders as text lists, customers ask for pending ledger statements, and owners wait all evening for payment follow-up updates.',
      'Suraj Automation implements compliant WhatsApp Business automation services using official Meta-approved providers like Gupshup (never risky unofficial bulk-spam scrapers that risk number bans). Every API key is stored securely inside server-side Script Properties, connecting your Google Sheets or web portal directly to customer WhatsApp alerts.'
    ],
    problemSolutions: [
      {
        problem: 'Overdue payments slip through the cracks because staff forget follow-up calls.',
        solution:
          'Automated payment reminder software checks party aging daily and dispatches polite, scheduled WhatsApp reminders with exact due amounts and UPI details.'
      },
      {
        problem: 'Orders arrive on WhatsApp as unstructured text and staff waste hours typing bills.',
        solution:
          'WhatsApp order management automation parses incoming item lists, applies party-specific rates, and logs structured orders directly into your dispatch Sheet.'
      },
      {
        problem: 'Customers keep calling to ask for invoice PDFs and dispatch confirmation.',
        solution:
          'WhatsApp invoice automation generates PDF bills in Drive and sends them to the customer automatically the moment an order is billed.'
      }
    ],
    capabilitiesHeading: 'Key WhatsApp Automation Workflows We Deploy',
    capabilities: [
      {
        title: '01. Automated Payment Reminder Software',
        detail:
          'Party-wise due date tracking (like VasuliSarthi) with scheduled 3-day, due-day, and overdue WhatsApp nudges plus staff promise-to-pay logs.'
      },
      {
        title: '02. WhatsApp Invoice & Receipt Automation',
        detail:
          'One-click or trigger-based PDF GST invoice, challan, and salary/fee receipt delivery via official WhatsApp templates.'
      },
      {
        title: '03. WhatsApp Order Management Automation',
        detail:
          'Convert unformatted distributor/retailer WhatsApp messages into clean line items mapped to party rate cards.'
      },
      {
        title: '04. WhatsApp CRM Automation & Owner Alerts',
        detail:
          'Instant booking confirmations, low-stock alerts to purchase managers, and daily collection summaries straight to the owner’s WhatsApp.'
      }
    ],
    techStack: [
      'Gupshup WhatsApp Business API',
      'Meta-Approved Utility Templates',
      'Google Apps Script Triggers',
      'PDF Auto-Generation (Docs/Sheets)',
      'PropertiesService Secret Vault',
      'Gemini AI Order Parsing (Optional)'
    ],
    idealFor: [
      'FMCG distributors, wholesalers, and B2B traders recovering credit payments',
      'Gyms, coaching centers, and clinics automating fee & appointment alerts',
      'Billing desks dispatching daily GST invoices and dispatch challans'
    ],
    relatedLinks: [
      {
        label: 'Read: Automate WhatsApp Invoices & Reminders',
        to: '/blog/automate-whatsapp-invoices-payment-reminders-inventory',
        description: 'Step-by-step guide to safe, compliant WhatsApp API workflows.'
      },
      {
        label: 'BillSarthi Invoice System',
        to: '/products/billsarthi',
        description: 'Automated invoice verification and billing workflow.'
      },
      {
        label: 'LoanSarthi EMI Recovery Portal',
        to: '/products/loansarthi',
        description: 'Automated EMI schedules and payment recovery tracking.'
      },
      {
        label: 'AI Automation for Order Parsing',
        to: '/services/ai-automation',
        description: 'Combine Gemini AI with WhatsApp to parse unstructured messages.'
      }
    ],
    faqs: [
      {
        question: 'How can businesses automate WhatsApp invoices and payment reminders?',
        answer:
          'By connecting your billing or ledger Google Sheet to an official WhatsApp Business API provider like Gupshup through Google Apps Script. When an invoice is created or a due date arrives, an approved template message with the due amount or PDF link goes out automatically.'
      },
      {
        question: 'Is WhatsApp automation safe from number bans?',
        answer:
          'Yes, when implemented properly. We never use unauthorized browser extensions or unofficial bulk-spam tools; we integrate official WhatsApp Business API accounts using Meta-approved utility templates.'
      },
      {
        question: 'Who pays for WhatsApp API message credits?',
        answer:
          'Meta/Gupshup conversation charges are paid directly at actuals to your API provider wallet, while you pay Suraj Automation only a transparent one-time setup fee for building the automation.'
      }
    ]
  },
  {
    slug: 'mis-dashboard',
    navTitle: 'MIS Dashboard Services',
    primaryKeyword: 'MIS Dashboard Development Services',
    seoTitle: 'MIS Dashboard Development Services | Suraj Automation',
    metaDescription:
      'Automated MIS reporting solutions, Power BI & CFO dashboards for Indian businesses. Eliminate manual Excel reporting with real-time sales & inventory insights.',
    keywords:
      'MIS Dashboard Development Services, Automated MIS Reporting Solutions, Custom Business Intelligence Dashboard, Excel Reporting Automation Services, Power BI Dashboard Development Services, Real Time Business Reporting Dashboard, CFO Dashboard Development, Sales Dashboard Automation, Inventory Reporting Automation, Financial Reporting Automation',
    serviceType: 'MIS Reporting Automation & Business Intelligence Dashboards',
    eyebrow: 'MIS Dashboard Development Services · India',
    h1: 'MIS Dashboard Development Services & Automated Business Reporting',
    heroSummary:
      'Stop waiting until the 10th of next month to know your margins. Consolidate sales, COGS, cash flow, and multi-branch inventory into real-time executive dashboards.',
    primaryCtaLabel: 'Automate Your Business Today',
    whatsappPrefill:
      'Hi Suraj, I need an automated MIS dashboard / Power BI / CFO dashboard for my business.',
    introHeading: 'Built by an Experienced MIS Executive — Designed for Fast Owner Decisions',
    introParagraphs: [
      'Most business owners wait on manual Excel compilation every evening or month-end—wasting skilled staff hours on VLOOKUP copy-pasting while still missing margin leaks.',
      'Led by Suraj Singh (MIS Executive & Data Analyst), our MIS dashboard development services turn fragmented Excel sheets, Google Forms, SQL tables, and billing exports into clean, automated business intelligence dashboards. Whether you prefer Google Sheets, advanced Excel, Power BI, or a custom web CFO dashboard, numbers update automatically without manual rework.'
    ],
    problemSolutions: [
      {
        problem: 'Managers spend 2–3 hours daily merging branch Excel sheets into summary reports.',
        solution:
          'Automated MIS reporting solutions ingest branch data automatically via Apps Script, Power Query, or SQL pipelines with zero manual formatting.'
      },
      {
        problem: 'Owners see total revenue but miss hidden COGS creep, dead stock, or margin drops.',
        solution:
          'CFO dashboard development and recipe/SKU COGS analytics highlight profitability per item, event, or location in real time.'
      },
      {
        problem: 'Static monthly PDFs cannot be filtered by salesperson, date range, or warehouse.',
        solution:
          'Interactive slicers and live web dashboards let leadership drill down by branch, SKU, rep, and time window in seconds.'
      }
    ],
    capabilitiesHeading: 'Reporting & Business Intelligence Solutions We Build',
    capabilities: [
      {
        title: '01. CFO Dashboard Development & Cash Visibility',
        detail:
          'Track receivables, payables, vendor aging, cash burn, and monthly P&L summaries in one executive decision view.'
      },
      {
        title: '02. Sales Dashboard Automation',
        detail:
          'Live rep-wise conversion rates, target vs actual achievement, regional sales splits, and pending order pipelines.'
      },
      {
        title: '03. Power BI & Excel Reporting Automation Services',
        detail:
          'Clean data models using Power Query, DAX, SQL, and dynamic Excel templates that refresh with one click.'
      },
      {
        title: '04. Inventory & COGS Reporting Automation',
        detail:
          'Track raw material consumption, wastage variance, batch expiry, and multi-site closing stock valuations automatically.'
      }
    ],
    techStack: [
      'Google Sheets & Apps Script Pipelines',
      'Microsoft Power BI & DAX',
      'Advanced Excel & Power Query',
      'SQL Data Modeling',
      'Python Data Cleaning',
      'Custom React Executive Dashboards'
    ],
    idealFor: [
      'Founders and CFOs needing daily cash, margin, and sales visibility',
      'Multi-branch retailers, caterers, and manufacturers tracking COGS',
      'Finance and ops teams drowning in repetitive weekly Excel MIS work'
    ],
    relatedLinks: [
      {
        label: 'COGS Analytics Dashboard',
        to: '/products/cogs-analytics-dashboard',
        description: 'Live cost-of-goods, recipe BOM, and margin leakage analytics.'
      },
      {
        label: 'CFO Executive Dashboard',
        to: '/products/cfo-dashboard',
        description: 'Cash position, vendor obligations, and financial health tracker.'
      },
      {
        label: 'Starter Excel & MIS Offer (From ₹1,999)',
        to: '/offers/custom-excel-dashboard-mis',
        description: 'Quick-turnaround Excel MIS dashboard with up to 5 visual KPIs.'
      },
      {
        label: 'Read: How to Automate MIS Reporting',
        to: '/blog/automate-mis-reporting-reduce-manual-excel-work',
        description: 'Practical guide to replacing manual Excel copy-pasting.'
      }
    ],
    faqs: [
      {
        question: 'How can companies automate MIS reporting?',
        answer:
          'Companies automate MIS reporting by standardizing data capture (via web forms, POS exports, or Google Sheets), writing scheduled Apps Script or Power Query transformation pipelines, and feeding a live dashboard that refreshes automatically without manual copy-pasting.'
      },
      {
        question: 'How can small businesses reduce manual Excel reporting?',
        answer:
          'Replace emailed Excel attachments with a centralized Google Sheet or lightweight web form feeding an automated MIS dashboard. Using ARRAYFORMULA, QUERY, Power Query, or Apps Script triggers cuts repetitive report preparation by hours every week.'
      },
      {
        question: 'Do you build dashboards in Power BI, Excel, and Google Sheets?',
        answer:
          'Yes. We recommend the right tool for your team: offline Excel/Power Query for desktop finance teams, Google Sheets + Apps Script for multi-location mobile collaboration, and Power BI or custom web dashboards for multi-source SQL analytics.'
      }
    ]
  },
  {
    slug: 'ai-automation',
    navTitle: 'AI Automation Services',
    primaryKeyword: 'AI Automation Services for Small Business',
    seoTitle: 'AI Automation Services for Small Business | Suraj Automation',
    metaDescription:
      'Practical AI business process automation and Gemini API integration for Indian SMBs. Parse messy WhatsApp orders, scan invoices & automate daily summaries.',
    keywords:
      'AI Automation Services for Small Business, AI Business Process Automation, Gemini API Integration Services, AI Powered Business Automation, Digital Transformation Solutions for SMBs, Small Business Automation Solutions',
    serviceType: 'AI Business Process Automation & Gemini API Integration',
    eyebrow: 'AI Business Process Automation · India',
    h1: 'AI Automation Services for Small Businesses (Practical, ROI-Focused)',
    heroSummary:
      'Skip AI hype. Use Gemini API integration services to extract unstructured WhatsApp orders, read vendor bill PDFs, categorize expenses, and summarize daily operations.',
    primaryCtaLabel: 'Request a Free Consultation',
    whatsappPrefill:
      'Hi Suraj, I want to explore practical AI automation and Gemini API integration for my business.',
    introHeading: 'Real AI-Powered Business Automation Inside Your Existing Workflows',
    introParagraphs: [
      'Indian SMBs do not need flashy AI chatbots that nobody uses—they need AI that removes tedious reading and typing work.',
      'Our AI automation services for small businesses integrate Google Gemini APIs securely into your existing Google Sheets, email, and web app workflows. From converting messy Hindi/Hinglish/English WhatsApp order messages into structured SKU rows to extracting GST numbers and totals from supplier invoices, we deploy AI where it saves measurable hours every day.'
    ],
    problemSolutions: [
      {
        problem: 'Customers send free-text WhatsApp messages like "10 peti tel aur 5 katta atta bhej do".',
        solution:
          'Gemini API order parsing extracts item names, quantities, and units automatically, matches your rate card, and prepares the dispatch row for quick staff approval.'
      },
      {
        problem: 'Accounts staff manually type line items from dozens of supplier bill photos and PDFs.',
        solution:
          'AI document extraction reads vendor bills, extracts invoice number, date, GSTIN, and amounts, and logs them directly into your verification sheet.'
      },
      {
        problem: 'Owners do not have time to read 200 chat messages or massive expense logs.',
        solution:
          'Automated daily AI operations summaries categorize expenses and send a crisp morning briefing via email or WhatsApp.'
      }
    ],
    capabilitiesHeading: 'Practical Gemini API & AI Workflows We Implement',
    capabilities: [
      {
        title: '01. Unstructured Order & Lead Parsing',
        detail:
          'Turn free-form WhatsApp messages, emails, and voice-transcribed notes into structured rows in Google Sheets with SKU matching.'
      },
      {
        title: '02. Invoice & Receipt OCR Extraction',
        detail:
          'Extract vendor details, taxable values, GST splits, and line items from bill PDFs/images into BillSarthi or accounting sheets.'
      },
      {
        title: '03. Smart Expense & Ticket Categorization',
        detail:
          'Automatically tag incoming expenses, customer complaints, or support queries by department, urgency, and cost center.'
      },
      {
        title: '04. Server-Side Secure API Architecture',
        detail:
          'All Gemini API keys are kept strictly server-side (Node.js backend or Apps Script PropertiesService) with structured JSON output validation.'
      }
    ],
    techStack: [
      'Google Gemini API (@google/genai)',
      'Structured JSON Schema Outputs',
      'Google Apps Script & Sheets',
      'Node.js & Express API Routes',
      'Gupshup WhatsApp API',
      'Human-in-the-Loop Verification UI'
    ],
    idealFor: [
      'Wholesale distributors receiving daily messy text orders on WhatsApp',
      'Operations & finance teams processing high volumes of vendor bills',
      'SMBs seeking digital transformation solutions without hiring an AI team'
    ],
    relatedLinks: [
      {
        label: 'Try Our AI Business Diagnostic & ROI Tool',
        to: '/roi-tool',
        description: 'Describe your bottlenecks and see an AI-assisted automation blueprint.'
      },
      {
        label: 'WhatsApp Business Automation',
        to: '/services/whatsapp-automation',
        description: 'Pair AI message parsing with automated WhatsApp confirmations.'
      },
      {
        label: 'BillSarthi Purchase Bill Verification',
        to: '/products/billsarthi',
        description: 'Streamline vendor invoice verification and audit trails.'
      },
      {
        label: 'Explore OrderSarthi Concept',
        to: '/products',
        description: 'See how WhatsApp order parsing maps to customer price lists.'
      }
    ],
    faqs: [
      {
        question: 'How can small businesses automate daily operations using AI?',
        answer:
          'Start with repetitive unstructured data tasks: parsing WhatsApp order text into billing sheets, extracting totals from supplier PDF bills, auto-categorizing expenses, and generating daily owner summaries—all reviewed cleanly in Google Sheets.'
      },
      {
        question: 'Is my business data safe when using Gemini API integrations?',
        answer:
          'Yes. We call Gemini APIs from secure server-side endpoints or your private Apps Script PropertiesService, never exposing API keys in the browser, and store your resulting operational records strictly inside your own Google account.'
      },
      {
        question: 'Do AI automations require expensive monthly server subscriptions?',
        answer:
          'No. Lightweight Gemini API integrations embedded into Google Apps Script use pay-as-you-go API tokens that typically cost pennies per hundred documents, with zero dedicated server hosting fees.'
      }
    ]
  },
  {
    slug: 'inventory-management-software',
    navTitle: 'Inventory Management Software',
    primaryKeyword: 'Custom Inventory Management Software',
    seoTitle: 'Custom Inventory Management Software | Suraj Automation',
    metaDescription:
      'Custom inventory management software and stock reporting automation for Indian traders, warehouses & multi-site teams. Track stock in/out & reorder levels.',
    keywords:
      'Custom Inventory Management Software, Inventory Reporting Automation, Purchase Management Software Development, Custom ERP Solutions for Small Businesses, StockSarthi, RationKart',
    serviceType: 'Custom Inventory & Multi-Site Stock Management Software',
    eyebrow: 'Custom Inventory Management Software · India',
    h1: 'Custom Inventory Management Software & Stock Reporting Automation',
    heroSummary:
      'Eliminate godown stock mismatches, unauthorized site indents, and dead-stock losses with multi-site inventory systems built for Indian warehouses, kitchens, and traders.',
    primaryCtaLabel: 'Get a Custom Software Solution',
    whatsappPrefill:
      'Hi Suraj, I need custom inventory management software for my warehouse / multi-site operations.',
    introHeading: 'Real-Time Stock Visibility Across Godowns, Branches & Project Sites',
    introParagraphs: [
      'When site supervisors request materials over phone calls and warehouse staff update disconnected Excel files days later, businesses lose track of closing stock, face sudden stock-outs, and suffer pilferage.',
      'Suraj Automation develops custom inventory management software—including our proven StockSarthi and RationKart architectures—tailored to your exact SKU units, site approval hierarchies, bulk CSV uploads, and reorder alerts. Every stock movement is logged with timestamp and user identity inside your own cloud database.'
    ],
    problemSolutions: [
      {
        problem: 'Multiple branches or project sites, but no centralized closing stock visibility.',
        solution:
          'Date-wise and site-wise closing stock dashboards calculate live opening, in, out, and valuation automatically.'
      },
      {
        problem: 'Unapproved material requests sent informally on WhatsApp.',
        solution:
          'Structured requisition forms route requests through single-level or manager approval before warehouse dispatch.'
      },
      {
        problem: 'Emergency raw material stock-outs halting production or kitchen prep.',
        solution:
          'Automated reorder level indicators and low-stock WhatsApp/email alerts notify your purchase team early.'
      }
    ],
    capabilitiesHeading: 'Inventory & Purchase Management Modules We Build',
    capabilities: [
      {
        title: '01. Multi-Site Stock In / Out & Closing Valuation',
        detail:
          'Track inward GRNs, inter-site transfers, consumption, and date-wise closing stock across all branches and warehouses.'
      },
      {
        title: '02. Site Requisition & Manager Approval Flow',
        detail:
          'Mobile requisition forms (RationKart workflow) with mandatory approval sign-off before stock leaves the central store.'
      },
      {
        title: '03. CSV Bulk Upload & Barcode / SKU Master',
        detail:
          'Import hundreds of items or daily transactions via drag-and-drop CSV upload with automatic validation and error highlighting.'
      },
      {
        title: '04. Purchase & Reorder Alerts Automation',
        detail:
          'Automatic low-stock threshold alerts linked directly to VendorSarthi RFQ procurement and supplier rate histories.'
      }
    ],
    techStack: [
      'StockSarthi & RationKart Architecture',
      'Google Sheets + Apps Script Web UI',
      'CSV Bulk Import & Audit Logs',
      'LockService Concurrent Stock Safety',
      'Automated Low-Stock WhatsApp Alerts',
      'COGS & Recipe BOM Integration'
    ],
    idealFor: [
      'Construction firms, central kitchens, and multi-site retail chains',
      'Wholesale traders, godown operators, and spare-parts distributors',
      'Manufacturing units linking raw material consumption to COGS'
    ],
    relatedLinks: [
      {
        label: 'Explore StockSarthi System',
        to: '/products/stocksarthi',
        description: 'Ready multi-site stock entry, CSV upload, and closing stock app.'
      },
      {
        label: 'Explore RationKart Requisition App',
        to: '/products/rationkart',
        description: 'Site requisition, manager approval, and reorder level automation.'
      },
      {
        label: 'Explore VendorSarthi Procurement',
        to: '/products/vendorsarthi',
        description: 'Automate supplier RFQs and quotation comparison.'
      },
      {
        label: 'MIS & COGS Dashboards',
        to: '/services/mis-dashboard',
        description: 'Connect stock movements to real-time margin & wastage reports.'
      }
    ],
    faqs: [
      {
        question: 'Which software can automate inventory and stock management?',
        answer:
          'Custom systems like StockSarthi and RationKart from Suraj Automation automate inventory and stock management on Google Sheets + Apps Script—giving Indian SMBs site-wise Stock In/Out ledgers, approval workflows, CSV bulk imports, and automated reorder alerts without expensive ERP licenses.'
      },
      {
        question: 'Can multiple warehouse managers update stock simultaneously without data loss?',
        answer:
          'Yes. Our web app layer uses Google Apps Script LockService so concurrent stock entries from different sites queue safely and never overwrite one another.'
      },
      {
        question: 'Can this integrate with recipe costing or purchase orders?',
        answer:
          'Yes. Inventory logs can connect directly to our COGS Analytics Dashboard for recipe BOM costing and VendorSarthi for automated purchase requisitions.'
      }
    ]
  },
  {
    slug: 'noida',
    navTitle: 'Noida & Delhi NCR Services',
    primaryKeyword: 'Custom Software Development Company in Noida',
    seoTitle: 'Custom Software Development in Noida | Suraj Automation',
    metaDescription:
      'Trusted custom software & business automation company in Noida. Serving Greater Noida, Delhi NCR & Ghaziabad SMBs with Apps Script, ERPs & MIS dashboards.',
    keywords:
      'Custom Software Development Company in Noida, Automation Company in Noida, Software Development Company in Noida, Business Automation Services in Noida, Custom Web App Development in Noida, Google Apps Script Developer in Noida, Custom ERP Software Development in Delhi NCR, Business Process Automation Company in Delhi NCR, Software Development Company in Greater Noida, Automation Services in Ghaziabad',
    serviceType: 'Local Custom Software & Business Automation in Noida & Delhi NCR',
    eyebrow: 'Noida · Greater Noida · Ghaziabad · Delhi NCR',
    h1: 'Custom Software Development & Business Automation Company in Noida & Delhi NCR',
    heroSummary:
      'Work directly with a Noida-based automation architect serving manufacturers, distributors, CA firms, clinics, and service SMBs across Greater Noida, Ghaziabad, and Delhi NCR.',
    primaryCtaLabel: 'Request a Free Consultation',
    whatsappPrefill:
      'Hi Suraj, I am based in Noida / Delhi NCR and want to discuss custom software or automation for my business.',
    introHeading: 'Local Accountability Across Noida, Greater Noida, Ghaziabad & Delhi NCR',
    introParagraphs: [
      'Hiring distant agencies often breaks down over time zones, language gaps with floor staff, and slow support when your billing or dispatch desk needs a quick tweak. Being a Noida-based business process automation company in Delhi NCR means you work directly with the developer building your system.',
      'From industrial units in Noida and Greater Noida to wholesale traders in Ghaziabad and B2B offices across Delhi and Gurgaon, we understand NCR operational workflows—from 15-day distributor billing cycles and multi-site material challans to Hindi/Hinglish team training so your existing staff adopt the software smoothly from Day 1.'
    ],
    problemSolutions: [
      {
        problem: 'NCR distributors and factories juggling multi-site challans, rate lists, and credit recovery.',
        solution:
          'Custom ERP software development in Delhi NCR tailored to per-location pricing, WhatsApp order capture, and automated payment reminders.'
      },
      {
        problem: 'Agencies disappear after handover, leaving local staff unable to use complex software.',
        solution:
          'Hands-on Hindi/English team walkthroughs, clear documentation, 30-day post-launch bug support, and direct WhatsApp access to Suraj Singh.'
      },
      {
        problem: 'High agency quotes (₹1L+) for simple internal web portals and MIS dashboards.',
        solution:
          'Practical Google Apps Script, React, and WebSarthi solutions built at transparent SMB budgets with zero vendor lock-in.'
      }
    ],
    capabilitiesHeading: 'NCR Industries & Local Automation Services We Deliver',
    capabilities: [
      {
        title: '01. Manufacturing & Industrial Automation (Noida & Greater Noida)',
        detail:
          'Raw material inward/outward tracking, vendor RFQ comparison, MRP reconciliation, and COGS wastage dashboards.'
      },
      {
        title: '02. Wholesale & Distribution ERPs (Ghaziabad & Delhi NCR)',
        detail:
          'WhatsApp order parsing, party-wise custom billing cycles, credit note workflows, and automated Vasuli payment reminders.'
      },
      {
        title: '03. Local Clinics, Salons, Gyms & Coaching Institutes',
        detail:
          'Online slot booking, prepaid member wallets, fee renewal reminders, and QR digital menus built for NCR service businesses.'
      },
      {
        title: '04. Managed Business Websites via WebSarthi',
        detail:
          'Custom websites with domain, NVMe hosting, SSL, and monthly updates starting at ₹1,999/month through our WebSarthi division.'
      }
    ],
    techStack: [
      'Google Apps Script & Sheets ERP',
      'React, TypeScript & Node.js',
      'Gupshup WhatsApp Business API',
      'Power BI & Excel MIS Automation',
      'Gemini AI Workflow Integration',
      'Razorpay Payment Gateway'
    ],
    idealFor: [
      'Noida & Greater Noida factories, warehouses, and B2B offices',
      'Ghaziabad & East Delhi traders, distributors, and logistics teams',
      'Delhi NCR clinics, salons, coaching centers, and CA/consulting firms'
    ],
    relatedLinks: [
      {
        label: 'Google Apps Script Development Services',
        to: '/services/google-apps-script',
        description: 'Zero-server Google Workspace systems built in Noida.'
      },
      {
        label: 'Custom Software Development India',
        to: '/services/custom-software-development',
        description: 'Explore our full CRM, HRMS, and custom ERP engineering scope.'
      },
      {
        label: 'About Suraj Singh (Noida)',
        to: '/about',
        description: 'Learn about the founder’s MIS & automation engineering background.'
      },
      {
        label: 'Contact & Book Free 20-Min Call',
        to: '/contact',
        description: 'Schedule a screen-share or consultation call today.'
      }
    ],
    faqs: [
      {
        question: 'Which company develops custom automation software for Indian SMBs in Noida & Delhi NCR?',
        answer:
          'Suraj Automation is a Noida-based software development and business automation consultancy serving SMBs across Noida, Greater Noida, Ghaziabad, Delhi NCR, and pan-India with custom Google Sheets systems, web apps, WhatsApp automation, and MIS dashboards.'
      },
      {
        question: 'Do you provide staff training in Hindi and English for Delhi NCR teams?',
        answer:
          'Yes. Every custom project includes practical walkthrough training in simple Hindi/Hinglish and English so floor staff, dispatchers, and accountants can run the system confidently.'
      },
      {
        question: 'How do we start a project if we are in Noida, Greater Noida, or Ghaziabad?',
        answer:
          'Book a free 20-minute consultation via WhatsApp (+91-8851666208) or our contact form. We review your current Excel sheets or registers, show a relevant live demo, and provide a fixed written quote before any work begins.'
      }
    ]
  }
];

export function getServicePageBySlug(slug?: string): ServicePageConfig | undefined {
  if (!slug) return undefined;
  return SERVICE_PAGES.find((s) => s.slug === slug);
}
