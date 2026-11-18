export interface SolutionPageData {
  slug: string;
  routePath: string;
  shortLabel: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  badge: string;
  h1: string;
  heroSubheadline: string;
  heroSummary: string;
  serviceType: string;
  startingNote: string;
  painPoints: {
    title: string;
    detail: string;
  }[];
  solutions: {
    title: string;
    detail: string;
    tag: string;
  }[];
  workflows: {
    title: string;
    industry: string;
    before: string;
    after: string;
  }[];
  techStack: string[];
  relatedProductIds: string[];
  relatedServicePaths: {
    label: string;
    path: string;
  }[];
  locationCoverage?: {
    headline: string;
    description: string;
    areas: { city: string; focus: string }[];
  };
  faqs: {
    q: string;
    a: string;
  }[];
  ctaTitle: string;
  ctaSubtitle: string;
  whatsappText: string;
}

export const SOLUTION_PAGES: Record<string, SolutionPageData> = {
  'google-apps-script-development': {
    slug: 'google-apps-script-development',
    routePath: '/services/google-apps-script-development',
    shortLabel: 'Google Apps Script Development',
    seoTitle: 'Google Apps Script Development Services | Suraj Automation',
    metaDescription:
      'Custom Google Apps Script development services for Indian SMBs. Build Google Sheets ERPs, automated PDF invoices & Workspace workflows with zero hosting fees.',
    primaryKeyword: 'Google Apps Script Development Services',
    secondaryKeywords: [
      'Google Apps Script Automation Services',
      'Google Sheets Automation Company',
      'Google Apps Script Web App Development',
      'Google Sheets ERP Development',
      'Custom Google Sheets Web Application',
      'Google Workspace Automation Services',
      'Google Apps Script Developer India',
      'Google Sheets Business Automation',
      'Google Apps Script Custom Software',
      'Google Sheets API Integration Services',
      'Google Apps Script Business Solutions'
    ],
    badge: 'Google Workspace Engineering',
    h1: 'Google Apps Script Development Services for Indian Businesses',
    heroSubheadline: 'Turn Google Sheets into a Custom ERP Without Recurring Server Costs',
    heroSummary:
      'Suraj Automation delivers specialized Google Apps Script development services and Google Workspace automation services for growing businesses across India. We transform slow, manual spreadsheets into custom Google Sheets web applications, automated approval portals, and API-connected operational systems that run inside your own Google Drive.',
    serviceType: 'Google Apps Script Development & Google Sheets Business Automation',
    startingNote: 'Projects starting at ₹1,499 — 100% source ownership in your Google account',
    painPoints: [
      {
        title: 'Broken Formulas & Accidental Edits',
        detail:
          'When 10 team members edit the same spreadsheet manually, formulas get overwritten and historical sales or stock records are lost.'
      },
      {
        title: 'Hours Spent Copy-Pasting Between Apps',
        detail:
          'Staff waste 2–3 hours daily moving data between Gmail, Google Forms, PDF invoices, Excel sheets, and WhatsApp chats.'
      },
      {
        title: 'Expensive SaaS Per-User Pricing',
        detail:
          'Traditional ERP and workflow subscriptions charge recurring monthly fees per employee even when your processes are straightforward.'
      }
    ],
    solutions: [
      {
        title: 'Google Sheets ERP Development',
        detail:
          'Build structured multi-tab systems for order management, GST billing, purchase approvals, and stock control with role-based permissions and audit logs.',
        tag: 'Core ERP'
      },
      {
        title: 'Google Apps Script Web App Development',
        detail:
          'Launch mobile-friendly custom HTML/JS web interfaces backed by Google Sheets so field sales teams and store staff submit clean data without touching raw cells.',
        tag: 'Web Apps'
      },
      {
        title: 'Automated PDF, Gmail & Drive Pipelines',
        detail:
          'Auto-generate GST invoices, salary slips, quotations, and purchase orders in Google Docs, export to Drive PDFs, and dispatch via email or WhatsApp triggers.',
        tag: 'Doc Automation'
      },
      {
        title: 'Google Sheets API Integration Services',
        detail:
          'Connect spreadsheets bi-directionally with Razorpay webhooks, WhatsApp Business APIs, CRM tools, Shopify/WooCommerce, and external REST endpoints.',
        tag: 'API Sync'
      }
    ],
    workflows: [
      {
        title: 'One-Click GST Tax Invoice & Ledger Engine',
        industry: 'Wholesale & Trading SMBs',
        before: 'Accountants manually copied order rows into Word templates and calculated CGST/SGST by hand.',
        after: 'Apps Script validates rates, generates branded PDF invoices, archives files in Drive folders, and logs receivables automatically.'
      },
      {
        title: 'Automated Multi-Branch Daily Summary Trigger',
        industry: 'Retail & Multi-Store Teams',
        before: 'Store managers sent end-of-day totals in scattered WhatsApp messages that owners reconciled late at night.',
        after: 'Time-driven Apps Script triggers consolidate branch sheets at 9 PM daily and send a clean executive summary email.'
      }
    ],
    techStack: [
      'Google Apps Script (V8 Runtime)',
      'SpreadsheetApp & DriveApp',
      'HTMLService Custom Web Apps',
      'Time-Driven & onEdit Triggers',
      'UrlFetchApp REST APIs',
      'GmailApp & DocumentApp',
      'Google Workspace Security Controls'
    ],
    relatedProductIds: ['hisabsarthi', 'billsarthi', 'stocksarthi', 'vendorsarthi'],
    relatedServicePaths: [
      { label: 'Custom Software Development India', path: '/services/custom-software-development' },
      { label: 'WhatsApp Business Automation', path: '/services/whatsapp-automation' },
      { label: 'MIS Dashboard Development', path: '/services/mis-dashboard-development' },
      { label: 'Google Sheets Offer Packages', path: '/offers/google-apps-script-automation' }
    ],
    faqs: [
      {
        q: 'Can Google Sheets be used as an ERP for small businesses?',
        a: 'Yes. For small and medium businesses managing up to tens of thousands of monthly rows across sales, inventory, procurement, and payroll, Google Sheets paired with Google Apps Script and a custom web frontend functions reliably as a lightweight ERP—with zero monthly server costs and minimal staff training.'
      },
      {
        q: 'How does Google Apps Script automate business workflows?',
        a: 'Google Apps Script executes JavaScript code directly on Google Cloud servers. Using form-submit triggers, edit events, or daily time schedules, it automatically validates entries, updates stock ledgers, creates PDF documents in Google Docs, sends emails via Gmail, and calls external APIs like WhatsApp gateways.'
      },
      {
        q: 'Is Google Apps Script secure for business data?',
        a: 'Yes. All spreadsheets and Apps Script code stay inside your own Google Workspace or Google Drive account. No third-party external database stores your financial records or client lists, and access permissions are controlled through Google authentication and role-based web views.'
      },
      {
        q: 'When should a business upgrade from Google Sheets ERP to a full-stack database?',
        a: 'When transaction volume grows beyond roughly 100,000+ active rows or requires heavy concurrent relational queries, we seamlessly migrate the backend to PostgreSQL or Firestore while keeping your web interface familiar.'
      }
    ],
    ctaTitle: 'Need a Google Apps Script Developer in India?',
    ctaSubtitle:
      'Share your existing Excel sheet or manual register with us. We will map out an automated Google Workspace solution tailored to your team.',
    whatsappText:
      'Hi Suraj, I want to discuss Google Apps Script development services for automating my business workflows.'
  },

  'custom-software-development': {
    slug: 'custom-software-development',
    routePath: '/services/custom-software-development',
    shortLabel: 'Custom Software Development',
    seoTitle: 'Custom Software Development Company India | Suraj Automation',
    metaDescription:
      'Affordable custom software development for Indian small businesses. Build tailored internal ERPs, CRMs, HRMS & workflow tools with zero recurring SaaS fees.',
    primaryKeyword: 'Custom Software Development Company India',
    secondaryKeywords: [
      'Custom Software Development for Small Business',
      'Affordable Business Software Development',
      'Custom Business Management Software',
      'Business Software Development Company',
      'Internal Business Software Development',
      'Custom CRM Software Development',
      'Purchase Management Software Development',
      'Custom HRMS Software Development',
      'Business Workflow Management Software',
      'Custom ERP Solutions for Small Businesses',
      'Digital Transformation Solutions for SMBs'
    ],
    badge: 'Bespoke Business Software',
    h1: 'Custom Software Development Company in India Built for Growing SMBs',
    heroSubheadline: 'Practical, Affordable Business Management Software Shaped Around Your Exact Workflow',
    heroSummary:
      'Off-the-shelf software forces your staff to change how they operate—and bills you every month per seat. As a focused custom software development company in India, Suraj Automation engineers internal CRM, ERP, purchase management, and HRMS tools built specifically around how Indian businesses actually work.',
    serviceType: 'Custom Software Development & Business Workflow Engineering',
    startingNote: 'Tailored internal tools and Sarthi systems — transparent one-time pricing options',
    painPoints: [
      {
        title: 'Bloated Enterprise ERPs Staff Refuse to Use',
        detail:
          'Expensive ERP suites pack hundreds of confusing menus your team ignores, driving employees right back to WhatsApp and notebooks.'
      },
      {
        title: 'Rigid Templates That Miss Indian Compliance & Logic',
        detail:
          'Generic tools struggle with custom commission rules, partial challan deliveries, multi-tier distributor rates, or GST split billing.'
      },
      {
        title: 'Disconnected Tools Across Departments',
        detail:
          'Sales uses one app, accounts uses Tally/Excel, and warehouse managers track stock manually—leaving owners without one source of truth.'
      }
    ],
    solutions: [
      {
        title: 'Internal Business Software Development',
        detail:
          'Centralize daily operations—lead tracking, order approvals, production logs, and vendor bills—into one unified portal accessible on phone and desktop.',
        tag: 'Internal Ops'
      },
      {
        title: 'Custom CRM & Sales Pipeline Software',
        detail:
          'Capture enquiries from web forms and WhatsApp, assign follow-ups to sales reps, generate instant quotations, and monitor conversion stages.',
        tag: 'Custom CRM'
      },
      {
        title: 'Purchase & Vendor Management Software',
        detail:
          'Automate RFQ comparisons, purchase order approvals, GRN verification, and vendor bill audits to prevent overbilling and duplicate entries.',
        tag: 'Procurement'
      },
      {
        title: 'Custom HRMS & Payroll Software Development',
        detail:
          'Manage employee onboarding, shift attendance, leave approvals, expense reimbursements, and one-click monthly salary slip generation.',
        tag: 'HRMS & Payroll'
      }
    ],
    workflows: [
      {
        title: 'Vendor Quotation & Bill Verification Loop',
        industry: 'Manufacturing & Multi-Unit Teams',
        before: 'Purchase orders lived in emails while store teams manually entered paper vendor bills with frequent rate mismatches.',
        after: 'Integrated VendorSarthi + BillSarthi logic compares PO vs invoice rates automatically before accounts releases payment.'
      },
      {
        title: 'Micro-Lending & EMI Recovery Control',
        industry: 'Local Finance & NBFC Agents',
        before: 'Interest schedules and overdue follow-ups were tracked in physical ledgers with missed collections.',
        after: 'Custom borrower portal calculates reducing/flat EMIs, tracks daily collections, and queues WhatsApp reminders.'
      }
    ],
    techStack: [
      'React & TypeScript Frontends',
      'Node.js & Express APIs',
      'Google Apps Script & Workspace DB',
      'Firebase Firestore & Auth',
      'PostgreSQL / SQL Databases',
      'Razorpay & Payment Webhooks',
      'WhatsApp & Gemini AI APIs'
    ],
    relatedProductIds: ['supplysarthi', 'vendorsarthi', 'karmsarthi', 'loansarthi'],
    relatedServicePaths: [
      { label: 'Custom Web Application Development', path: '/services/web-application-development' },
      { label: 'Google Apps Script Development', path: '/services/google-apps-script-development' },
      { label: 'Custom Inventory Software', path: '/services/inventory-management-software' },
      { label: 'Custom Software in Noida & NCR', path: '/custom-software-noida' }
    ],
    faqs: [
      {
        q: 'How much does custom business software cost in India?',
        a: 'Costs depend on scope and backend complexity. Pre-configured Sarthi business systems start at ₹1,499, targeted Google Workspace automations and custom sheets portals range from ₹2,999 to ₹15,000+, and full-stack custom web applications or multi-role ERPs are quoted transparently based on modules—typically 40–50% lower than large traditional agencies.'
      },
      {
        q: 'What is the difference between off-the-shelf software and custom software?',
        a: 'Off-the-shelf software gives you fixed features shared with every company and charges recurring per-user fees. Custom software is engineered specifically for your pricing rules, approval hierarchy, and Indian GST/operational workflows—giving you complete ownership without paying for unused modules.'
      },
      {
        q: 'What industries benefit most from business process automation?',
        a: 'Manufacturing units, FMCG distributors, wholesale traders, multi-outlet restaurants and bakeries, clinics, coaching institutes, logistics teams, and finance agencies see the fastest return because they handle high volumes of repetitive invoicing, stock, and follow-up tasks.'
      }
    ],
    ctaTitle: 'Plan Your Custom Business Software Without Agency Overheads',
    ctaSubtitle:
      'Use our ROI & System Matcher or message Suraj directly to scope an internal ERP, CRM, or HRMS built for your team.',
    whatsappText:
      'Hi Suraj, I want to discuss custom business software development for my company.'
  },

  'web-application-development': {
    slug: 'web-application-development',
    routePath: '/services/web-application-development',
    shortLabel: 'Custom Web App Development',
    seoTitle: 'Custom Web Application Development | Suraj Automation',
    metaDescription:
      'Custom web application development in India for growing SMBs. Launch responsive React, Node.js, and Google Workspace web apps, client portals, and SaaS tools.',
    primaryKeyword: 'Custom Web Application Development',
    secondaryKeywords: [
      'Custom Web App Development India',
      'SaaS Application Development Company India',
      'Affordable Custom Software Development',
      'Custom Google Sheets Web Application',
      'Digital Transformation Solutions for SMBs'
    ],
    badge: 'Full-Stack Web Engineering',
    h1: 'Custom Web Application Development for Modern Indian Enterprises',
    heroSubheadline: 'Fast, Mobile-First Portals, SaaS Products & Internal Web Apps Built to Scale',
    heroSummary:
      'Whether you need a customer-facing booking portal, a multi-role B2B dealer ordering app, or a full-stack SaaS MVP, our custom web application development practice combines React, TypeScript, Node.js, Firebase, and Google Workspace backends to ship reliable software fast.',
    serviceType: 'Custom Web Application & SaaS Development',
    startingNote: 'Full-stack React/Node web apps or Google Sheets-backed portals from ₹3,999',
    painPoints: [
      {
        title: 'Slow Agency Timelines & Over-Engineered Quotes',
        detail:
          'Traditional agencies quote 4–6 months and lakhs of rupees just to launch a practical booking or B2B order portal.'
      },
      {
        title: 'Non-Responsive Interfaces for Field & Mobile Staff',
        detail:
          'Desktop-only portals fail when field agents, warehouse staff, and business owners operate primarily from Android smartphones.'
      },
      {
        title: 'High Cloud Maintenance Burden',
        detail:
          'Complex microservice architectures require dedicated DevOps teams that small businesses should not have to maintain.'
      }
    ],
    solutions: [
      {
        title: 'Full-Stack React & Node.js Web Apps',
        detail:
          'Clean TypeScript interfaces with Express APIs, Razorpay checkout integration, role-based authentication, and scalable cloud databases.',
        tag: 'React + Node'
      },
      {
        title: 'B2B Dealer, Client & Booking Portals',
        detail:
          'Give customers, vendors, or franchise branches secure logins to place orders, track service status, and download GST invoices 24/7.',
        tag: 'Portals'
      },
      {
        title: 'SaaS Application Development for Founders',
        detail:
          'Go from product idea to launch-ready micro-SaaS with subscription billing, tenant isolation, analytics dashboards, and SEO architecture.',
        tag: 'SaaS MVP'
      },
      {
        title: 'Managed Business Websites (WebSarthi)',
        detail:
          'For SMBs needing a fast corporate web presence without heavy upfront fees, WebSarthi delivers custom design, hosting, SSL, and updates on a simple subscription.',
        tag: 'Web Presence'
      }
    ],
    workflows: [
      {
        title: 'Online Ordering & Branch Dispatch Portal',
        industry: 'Bakeries, QSRs & Distributors',
        before: 'Orders arrived over voice notes and WhatsApp photos, causing wrong quantities and missed delivery slots.',
        after: 'Custom mobile ordering web app captures SKU quantities, calculates totals, triggers kitchen/godown sheets, and sends confirmation PDFs.'
      },
      {
        title: 'Self-Service Customer Appointment & Staff Scheduler',
        industry: 'Clinics, Salons & Service Centers',
        before: 'Receptionists juggled phone calls and paper diaries, leading to double bookings and forgotten follow-ups.',
        after: 'BookingSarthi web application handles slot availability, assigns technicians, and fires WhatsApp reminders automatically.'
      }
    ],
    techStack: [
      'React 19 & TypeScript',
      'Tailwind CSS Responsive UI',
      'Node.js & Express Backend',
      'Firebase Auth & Firestore',
      'PostgreSQL / Google Sheets DB',
      'Razorpay & UPI Gateways',
      'REST & Webhook Architecture'
    ],
    relatedProductIds: ['bookingsarthi', 'supplysarthi', 'cakesarthi', 'menusarthi'],
    relatedServicePaths: [
      { label: 'Custom Software Development India', path: '/services/custom-software-development' },
      { label: 'Google Apps Script Development', path: '/services/google-apps-script-development' },
      { label: 'Custom Web App Packages', path: '/offers/custom-web-app' },
      { label: 'Subscription Web Plans', path: '/services' }
    ],
    faqs: [
      {
        q: 'How long does it take to build a custom web application?',
        a: 'Pre-engineered Sarthi web apps and Google Workspace-backed portals go live in 3 to 7 working days. Custom full-stack React and Node.js web applications with payment gateways, authentication, and multi-role dashboards typically take 2 to 4 weeks depending on workflow complexity.'
      },
      {
        q: 'What is the difference between off-the-shelf software and custom software?',
        a: 'Off-the-shelf SaaS restricts you to standard fields and ongoing monthly licenses. Custom web application development adapts every form, calculation, and permission rule to your business logic—helping your team adopt the system quickly.'
      },
      {
        q: 'Can you integrate Razorpay, WhatsApp, and existing spreadsheets into a web app?',
        a: 'Yes. We routinely connect React and Node.js web applications with Razorpay order verification, WhatsApp notifications, Gemini AI workflows, and real-time Google Sheets sync so your accounts team keeps familiar reports.'
      }
    ],
    ctaTitle: 'Ready to Launch Your Custom Web Application?',
    ctaSubtitle:
      'Discuss your portal requirements with Suraj Singh and get a clear module breakdown, timeline, and fixed estimate.',
    whatsappText:
      'Hi Suraj, I need custom web application development for my business.'
  },

  'whatsapp-automation': {
    slug: 'whatsapp-automation',
    routePath: '/services/whatsapp-automation',
    shortLabel: 'WhatsApp Business Automation',
    seoTitle: 'WhatsApp Business Automation Services | Suraj Automation',
    metaDescription:
      'WhatsApp Business automation services and API integration in India. Automate GST invoice dispatches, order confirmations, payment reminders, and CRM updates.',
    primaryKeyword: 'WhatsApp Business Automation Services',
    secondaryKeywords: [
      'WhatsApp API Integration Services India',
      'WhatsApp Invoice Automation',
      'WhatsApp Order Management Automation',
      'Automated Payment Reminder Software',
      'WhatsApp CRM Automation'
    ],
    badge: 'Messaging & Workflow Triggers',
    h1: 'WhatsApp Business Automation Services & API Integration in India',
    heroSubheadline: 'Turn Daily Customer Updates, Invoices & Payment Follow-Ups Into Zero-Touch Workflows',
    heroSummary:
      'Your customers and field teams already live on WhatsApp—but manually typing order confirmations, sharing invoice PDFs, and chasing pending payments wastes hours every day. Our WhatsApp Business automation services connect your Google Sheets, CRM, or web app directly to WhatsApp workflows.',
    serviceType: 'WhatsApp Business API Integration & Messaging Automation',
    startingNote: 'Automated invoice dispatch, payment reminders, and CRM sync pipelines',
    painPoints: [
      {
        title: 'Delayed Invoicing & Manual Follow-Up Fatigue',
        detail:
          'Staff hesitate or forget to follow up on due invoices, slowing down cash flow and increasing receivable days.'
      },
      {
        title: 'Lost Leads & Unlogged Customer Chats',
        detail:
          'Enquiries and orders buried inside personal WhatsApp threads never reach your central ERP or accounts register reliably.'
      },
      {
        title: 'High Cost of Manual Support Updates',
        detail:
          'Customers repeatedly call asking for order dispatch status, payment receipts, or appointment confirmations.'
      }
    ],
    solutions: [
      {
        title: 'WhatsApp Invoice Automation',
        detail:
          'When a sale or service bill is finalized in Sheets or your web portal, automatically generate a clean PDF and dispatch it to the customer’s WhatsApp.',
        tag: 'Auto Invoicing'
      },
      {
        title: 'Automated Payment Reminder Software',
        detail:
          'Schedule polite, personalized payment due and EMI reminders with amount, invoice number, and UPI payment links triggered straight from your ledger.',
        tag: 'Collections'
      },
      {
        title: 'WhatsApp Order Management Automation',
        detail:
          'Notify buyers on order confirmation, packing, dispatch tracking, and delivery completion while logging every status change automatically.',
        tag: 'Order Alerts'
      },
      {
        title: 'WhatsApp CRM Automation & Lead Capture',
        detail:
          'Route incoming website or WhatsApp enquiries into a structured Google Sheet or custom CRM with instant welcome replies and sales owner assignment.',
        tag: 'CRM Sync'
      }
    ],
    workflows: [
      {
        title: 'Automated EMI & Credit Due Recovery Queue',
        industry: 'Lending, Agencies & Wholesale Credit',
        before: 'Accounts clerks dialed 40+ customers weekly to remind them of due balances.',
        after: 'Scheduled Apps Script trigger identifies upcoming or overdue dues each morning and dispatches structured WhatsApp reminders.'
      },
      {
        title: 'Instant Dispatch Alert & PDF Receipt for Distributors',
        industry: 'FMCG & Supply Chain Teams',
        before: 'Salespeople took photos of paper bills and sent blurry images manually.',
        after: 'SupplySarthi/BillSarthi converts the order into a crisp PDF tax invoice and sends it automatically upon dispatch mark.'
      }
    ],
    techStack: [
      'Official WhatsApp Cloud API & Approved Gateways',
      'Google Apps Script Webhook Triggers',
      'Node.js Event Dispatchers',
      'Automated Google Docs -> PDF Generation',
      'Razorpay / UPI Payment Link Triggers',
      'Google Sheets CRM Sync'
    ],
    relatedProductIds: ['loansarthi', 'supplysarthi', 'billsarthi', 'bookingsarthi'],
    relatedServicePaths: [
      { label: 'Google Apps Script Development', path: '/services/google-apps-script-development' },
      { label: 'AI Automation Services', path: '/services/ai-automation-services' },
      { label: 'Custom Software Development', path: '/services/custom-software-development' },
      { label: 'Calculate Automation ROI', path: '/roi-tool' }
    ],
    faqs: [
      {
        q: 'Can WhatsApp be integrated with Google Sheets and CRM systems?',
        a: 'Yes. Using WhatsApp Business Cloud APIs or approved webhook providers alongside Google Apps Script or Node.js, any update in Google Sheets or your CRM—such as a new invoice, overdue payment date, or changed order status—can trigger an automated WhatsApp message or PDF attachment within seconds.'
      },
      {
        q: 'Can we send GST invoice PDFs and payment reminders automatically on WhatsApp?',
        a: 'Yes. We configure a clean document merge workflow that compiles your invoice into a PDF stored in Google Drive and dispatches the message along with invoice details or UPI payment links directly to your client.'
      },
      {
        q: 'Do you support both automated API triggers and one-click click-to-chat workflows?',
        a: 'Yes. Depending on your monthly message volume and Meta WhatsApp Business verification status, we can set up full zero-touch API triggers or zero-cost pre-filled WhatsApp action buttons inside your sheets.'
      }
    ],
    ctaTitle: 'Automate Your Invoices, Orders & Reminders on WhatsApp',
    ctaSubtitle:
      'Connect your existing Google Sheets, billing software, or booking portal with reliable WhatsApp automation.',
    whatsappText:
      'Hi Suraj, I want to set up WhatsApp Business automation with my Google Sheets / CRM system.'
  },

  'mis-dashboard-development': {
    slug: 'mis-dashboard-development',
    routePath: '/services/mis-dashboard-development',
    shortLabel: 'MIS Dashboard Development',
    seoTitle: 'MIS Dashboard Development Services | Suraj Automation',
    metaDescription:
      'MIS dashboard development services for Indian SMBs. Automate Excel, Google Sheets & Power BI reporting for real-time sales, inventory, COGS & CFO visibility.',
    primaryKeyword: 'MIS Dashboard Development Services',
    secondaryKeywords: [
      'Automated MIS Reporting Solutions',
      'Custom Business Intelligence Dashboard',
      'Excel Reporting Automation Services',
      'Power BI Dashboard Development Services',
      'Real Time Business Reporting Dashboard',
      'CFO Dashboard Development',
      'Sales Dashboard Automation',
      'Inventory Reporting Automation',
      'Financial Reporting Automation'
    ],
    badge: 'MIS & Business Intelligence',
    h1: 'MIS Dashboard Development Services & Automated Reporting Solutions',
    heroSubheadline: 'Stop Waiting Until Month-End to Know Your True Cash Flow, Margins & Stock Position',
    heroSummary:
      'When your sales, purchase, and expense numbers sit across disconnected Excel files, management decisions rely on guesswork. Suraj Automation provides MIS dashboard development services in Excel, Google Sheets, Power BI, and custom web dashboards so owners get clear daily financial and operational visibility.',
    serviceType: 'MIS Reporting, Excel Automation & Business Intelligence Dashboards',
    startingNote: 'Offline Excel MIS from ₹2,000 | Live Cloud Sheets & CFO Dashboards from ₹3,000',
    painPoints: [
      {
        title: '3 Days Lost Every Month Building Manual Reports',
        detail:
          'Finance and operations staff spend days copying VLOOKUPs and cleaning CSV exports from Tally, POS, or branches.'
      },
      {
        title: 'Hidden Margin & COGS Leakage',
        detail:
          'Without recipe-level COGS or branch expense comparisons, raw material price hikes quietly eat away profits before owners notice.'
      },
      {
        title: 'No Real-Time Visibility on Receivables & Payables',
        detail:
          'Decision-makers struggle to answer simple daily questions: total cash in hand, overdue customer bills, and slow-moving stock.'
      }
    ],
    solutions: [
      {
        title: 'CFO & Financial Reporting Automation',
        detail:
          'Track cash flow, bank/cash runway, aging receivables, vendor payables, P&L snapshots, and budget vs actual variance in one executive view.',
        tag: 'CFO View'
      },
      {
        title: 'Excel Reporting Automation & Power BI',
        detail:
          'Transform raw CSV, SQL, and Tally exports using Power Query, Pivot modeling, dynamic slicers, and Power BI visuals with one-click refresh.',
        tag: 'Excel & BI'
      },
      {
        title: 'Sales Dashboard Automation',
        detail:
          'Compare branch-wise revenue, salesperson targets, product category margins, and repeat customer trends using interactive date filters.',
        tag: 'Sales MIS'
      },
      {
        title: 'Inventory & COGS Analytics Dashboards',
        detail:
          'Monitor SKU turnover, dead stock value, food/manufacturing recipe cost (BOM), and wastage percentages across outlets.',
        tag: 'COGS & Stock'
      }
    ],
    workflows: [
      {
        title: 'Multi-Outlet Food & Manufacturing COGS Control',
        industry: 'Bakeries, QSRs & Light Manufacturing',
        before: 'Managers checked ingredient bills at month-end without knowing which SKU was losing margin.',
        after: 'COGS Analytics Dashboard maps purchase price changes against recipes weekly and highlights margin drops immediately.'
      },
      {
        title: 'Executive Weekly Cash & Receivables MIS Digest',
        industry: 'Distributors & Service Companies',
        before: 'Accounts exported 6 separate Excel sheets every Monday morning for leadership review.',
        after: 'Automated Google Sheets + Apps Script pipeline consolidates data automatically and emails a clean PDF MIS summary.'
      }
    ],
    techStack: [
      'Microsoft Excel & Power Query',
      'Microsoft Power BI (DAX & Modeling)',
      'Google Sheets QUERY & Pivot Engine',
      'SQL Data Consolidation',
      'Apps Script Scheduled PDF Digests',
      'Custom React Interactive Charts'
    ],
    relatedProductIds: ['cfo-dashboard', 'cogs-analytics-dashboard', 'budgetsarthi', 'hisabsarthi'],
    relatedServicePaths: [
      { label: 'Excel & MIS Offer Package', path: '/offers/custom-excel-dashboard-mis' },
      { label: 'Google Apps Script Development', path: '/services/google-apps-script-development' },
      { label: 'Inventory Management Software', path: '/services/inventory-management-software' },
      { label: 'All Automation Services', path: '/services' }
    ],
    faqs: [
      {
        q: 'Can Excel reporting be automated without expensive tools?',
        a: 'Yes. Using Excel Power Query, structured tables, Pivot data models, or migrating repetitive workflows into Google Sheets with Apps Script, we automate data cleaning, consolidation across multiple files, and chart refreshes—often with zero new software licenses required.'
      },
      {
        q: 'What KPIs can you include in a custom CFO or MIS dashboard?',
        a: 'Common KPIs include daily/monthly revenue trends, gross and net margins, COGS breakdown, cash runway, receivables aging (0–30–60–90+ days), vendor payables, SKU stock valuation, and department budget vs actuals.'
      },
      {
        q: 'Can you connect Google Forms, Tally exports, or SQL databases into one dashboard?',
        a: 'Yes. We design clean ingestion pipelines that merge CSV/Excel exports, Google Forms, cloud Sheets, and SQL tables into one unified real-time reporting dashboard.'
      }
    ],
    ctaTitle: 'Turn Raw Spreadsheets Into Decision-Ready MIS Dashboards',
    ctaSubtitle:
      'Explore our CFO Dashboard and COGS Analytics systems, or book a call to automate your monthly Excel MIS reporting.',
    whatsappText:
      'Hi Suraj, I need MIS dashboard and Excel/Sheets reporting automation for my business.'
  },

  'ai-automation-services': {
    slug: 'ai-automation-services',
    routePath: '/services/ai-automation-services',
    shortLabel: 'AI Automation Services',
    seoTitle: 'AI Automation Services for Small Business | Suraj Automation',
    metaDescription:
      'AI automation services for Indian small businesses using Gemini API integration. Automate document OCR, expense sorting, lead capture & daily summaries.',
    primaryKeyword: 'AI Automation Services for Small Business',
    secondaryKeywords: [
      'AI Business Process Automation',
      'Gemini API Integration Services',
      'AI Powered Business Automation',
      'Digital Transformation Solutions for SMBs',
      'Business Process Automation Services'
    ],
    badge: 'Practical AI Engineering',
    h1: 'AI Automation Services for Small Businesses in India',
    heroSubheadline: 'Practical AI Integrations That Eliminate Manual Data Entry, Sorting & Summarization',
    heroSummary:
      'Small businesses do not need AI hype—they need practical time-savers. Our AI automation services for small businesses integrate Gemini API and structured prompt pipelines into your existing Google Sheets, email inbox, and web apps to extract invoice fields, classify expenses, qualify leads, and draft executive summaries automatically.',
    serviceType: 'AI Business Process Automation & Gemini API Integration',
    startingNote: 'Focused AI workflow integrations tailored for Indian SMB operations',
    painPoints: [
      {
        title: 'Manual Typing From Vendor Bills, Receipts & PDFs',
        detail:
          'Staff spend hours reading scanned vendor invoices or WhatsApp images and re-typing line items, dates, and GST numbers into spreadsheets.'
      },
      {
        title: 'Unstructured Customer Enquiries & Support Messages',
        detail:
          'Incoming emails and chat messages arrive in mixed English and Hinglish formats without category tags or urgency priority.'
      },
      {
        title: 'Information Overload for Founders',
        detail:
          'Owners lack quick daily digests summarizing hundreds of rows of sales logs, staff updates, and pending exceptions.'
      }
    ],
    solutions: [
      {
        title: 'Gemini API Integration Services',
        detail:
          'Embed reliable Gemini structured JSON extraction inside Node.js backends or Google Apps Script to turn messy text and documents into clean database rows.',
        tag: 'Gemini API'
      },
      {
        title: 'Automated Document & Bill OCR Extraction',
        detail:
          'Parse purchase invoices, travel receipts, and bank statement lines directly into verified accounting or expense claim sheets for human review.',
        tag: 'Smart OCR'
      },
      {
        title: 'AI Expense & Transaction Categorization',
        detail:
          'Automatically tag unstructured payment descriptions into clear accounting heads (Travel, Raw Material, Utilities, Marketing) with audit rules.',
        tag: 'Auto Tagging'
      },
      {
        title: 'Intelligent Lead Qualification & Daily Digests',
        detail:
          'Analyze inbound inquiry context, suggest matching products or packages, and deliver concise morning management briefings.',
        tag: 'Smart Insights'
      }
    ],
    workflows: [
      {
        title: 'Automated Purchase Bill & Receipt Structuring',
        industry: 'Retailers, Agencies & Field Teams',
        before: 'Employees clicked photos of fuel and supplier bills; accounts typed every receipt manually at month-end.',
        after: 'AI extracts vendor name, date, tax, and total into Claimo / BillSarthi sheets with human one-click approval.'
      },
      {
        title: 'Smart Diagnostic & Enquiry Triage',
        industry: 'B2B Service & Software Teams',
        before: 'Sales reps read long unstructured client messages to decide which product or service fit best.',
        after: 'Gemini-powered matcher analyzes requirements and outputs structured scope recommendations and next steps.'
      }
    ],
    techStack: [
      'Google Gemini API (@google/genai)',
      'Structured JSON Schema Outputs',
      'Google Apps Script AI Connectors',
      'Node.js Secure Server-Side Proxies',
      'Google Sheets & Drive Pipelines',
      'WhatsApp & Email Trigger Hooks'
    ],
    relatedProductIds: ['claimo', 'billsarthi', 'supplysarthi', 'hiresarthi'],
    relatedServicePaths: [
      { label: 'Try Live AI Business Matcher', path: '/roi-tool' },
      { label: 'WhatsApp Business Automation', path: '/services/whatsapp-automation' },
      { label: 'Google Apps Script Development', path: '/services/google-apps-script-development' },
      { label: 'Custom Software Development', path: '/services/custom-software-development' }
    ],
    faqs: [
      {
        q: 'How can AI automation help small businesses save time?',
        a: 'Practical AI removes repetitive reading and typing work: extracting vendor details from scanned bills, categorizing messy bank or expense entries, drafting polite follow-up messages, and summarizing long daily operational logs into 5-line morning briefings—saving teams several hours every week.'
      },
      {
        q: 'Do we keep control and human review over AI-extracted financial data?',
        a: 'Yes. We design AI automation with strict structured outputs and human-in-the-loop verification columns inside your Google Sheet or web portal so your accounts team approves entries before final posting.'
      },
      {
        q: 'Is my API key or business data exposed on the browser?',
        a: 'No. All Gemini API integrations run server-side through protected backend endpoints or inside your private Google Workspace script environment.'
      }
    ],
    ctaTitle: 'Bring Practical AI Into Your Daily Business Workflows',
    ctaSubtitle:
      'Test our interactive AI Business Diagnostic tool or talk with Suraj about automating document parsing and smart triggers.',
    whatsappText:
      'Hi Suraj, I want to explore practical AI automation services (Gemini API / OCR / smart triggers) for my business.'
  },

  'inventory-management-software': {
    slug: 'inventory-management-software',
    routePath: '/services/inventory-management-software',
    shortLabel: 'Inventory Management Software',
    seoTitle: 'Custom Inventory Management Software | Suraj Automation',
    metaDescription:
      'Custom inventory management software for Indian wholesalers, manufacturers & retailers. Track multi-godown stock, batch alerts, and reorders without ERP bloat.',
    primaryKeyword: 'Custom Inventory Management Software',
    secondaryKeywords: [
      'Inventory Reporting Automation',
      'Purchase Management Software Development',
      'Custom ERP Solutions for Small Businesses',
      'Google Sheets Business Automation',
      'Small Business Automation Solutions'
    ],
    badge: 'Stock & Warehouse Control',
    h1: 'Custom Inventory Management Software Built for Indian Traders & Manufacturers',
    heroSubheadline: 'Real-Time Godown Stock, Reorder Alerts & Purchase Control Without Expensive Per-User Licenses',
    heroSummary:
      'Stockouts halt sales while overstocking locks up working capital. Suraj Automation builds custom inventory management software—available both as our ready-to-deploy StockSarthi & RationKart systems and as bespoke multi-godown ERPs—giving wholesalers, retailers, and manufacturers live SKU visibility.',
    serviceType: 'Custom Inventory & Purchase Management Software Development',
    startingNote: 'Ready-to-use StockSarthi / RationKart from ₹1,499 or tailored multi-godown builds',
    painPoints: [
      {
        title: 'Blind Spots Across Multiple Godowns or Branches',
        detail:
          'Sales teams promise stock that is already finished—or reorder items sitting unused in a second warehouse.'
      },
      {
        title: 'Raw Material Pilferage & Untracked Wastage',
        detail:
          'Without daily stock-in/stock-out accountability and BOM consumption logs, shrinkage silently erodes margins.'
      },
      {
        title: 'Manual Reorder Guesswork',
        detail:
          'Purchasing happens only after critical SKUs hit zero instead of automated minimum threshold triggers.'
      }
    ],
    solutions: [
      {
        title: 'Live Stock-In / Stock-Out Ledger',
        detail:
          'Log purchases, sales dispatches, internal transfers, and returns from mobile or desktop with automatic running balances per SKU.',
        tag: 'Real-Time Stock'
      },
      {
        title: 'Automated Low-Stock & Reorder Alerts',
        detail:
          'Set minimum stock levels for every item; receive instant email or WhatsApp notifications the moment inventory needs replenishment.',
        tag: 'Auto Alerts'
      },
      {
        title: 'Multi-Branch Indent & Requisition Approvals',
        detail:
          'Store or kitchen teams submit item requests online while central management approves dispatches and tracks fulfillment (RationKart workflow).',
        tag: 'Indent Flow'
      },
      {
        title: 'Purchase Order to Vendor Bill Reconciliation',
        detail:
          'Link purchase orders, goods received notes (GRN), and supplier bills to catch quantity shortages or rate discrepancies automatically.',
        tag: 'Procurement'
      }
    ],
    workflows: [
      {
        title: 'Multi-Branch Grocery & Kitchen Indent Control',
        industry: 'Retail Chains, Hostels & Central Kitchens',
        before: 'Outlet staff ordered groceries on phone calls, creating duplicate purchases and missing delivery checks.',
        after: 'RationKart digital ordering captures store requests, routes approvals, updates central godown stock, and cuts wastage.'
      },
      {
        title: 'SKU Threshold Monitoring for Distributors',
        industry: 'Wholesale & Spare Parts Dealers',
        before: 'Warehouse counts were updated in offline Excel files once a week.',
        after: 'StockSarthi records every inward/outward movement immediately and alerts purchase managers on low-stock SKUs daily.'
      }
    ],
    techStack: [
      'StockSarthi & RationKart Architecture',
      'Google Sheets & Apps Script Inventory Engine',
      'Custom React Barcode / Mobile Entry UI',
      'WhatsApp & Email Low-Stock Triggers',
      'Purchase & COGS Dashboard Integration',
      'Role-Based Warehouse Permissions'
    ],
    relatedProductIds: ['stocksarthi', 'rationkart', 'vendorsarthi', 'supplysarthi'],
    relatedServicePaths: [
      { label: 'Explore StockSarthi Product', path: '/products/stocksarthi' },
      { label: 'Explore RationKart Product', path: '/products/rationkart' },
      { label: 'MIS Dashboard Development', path: '/services/mis-dashboard-development' },
      { label: 'Custom Software Development', path: '/services/custom-software-development' }
    ],
    faqs: [
      {
        q: 'Do small businesses need custom inventory management software?',
        a: 'If manual Excel sheets cause frequent stock mismatches, dead stock buildup, missed reorders, or unverified warehouse transfers across branches, custom inventory management software quickly pays for itself by preventing lost sales and shrinkage—especially when built affordably without heavy monthly SaaS licenses.'
      },
      {
        q: 'Can I start with a ready-made system like StockSarthi and customize it later?',
        a: 'Yes. Many businesses deploy StockSarthi or RationKart in a few days at ₹1,499 and later add custom modules such as barcode scanning, batch/expiry tracking, supplier bill matching, or WhatsApp dispatch alerts.'
      },
      {
        q: 'Does your inventory system connect with GST billing and COGS analytics?',
        a: 'Yes. Stock movements can connect cleanly with BillSarthi/HisabSarthi invoicing and our COGS Analytics Dashboard so purchases, consumption, and profit margins stay synchronized.'
      }
    ],
    ctaTitle: 'Take Total Control of Your Stock & Warehouses',
    ctaSubtitle:
      'Start with StockSarthi or commission a custom multi-godown inventory workflow built around your exact SKUs.',
    whatsappText:
      'Hi Suraj, I want to discuss custom inventory management software (or StockSarthi) for my business.'
  },

  'custom-software-noida': {
    slug: 'custom-software-noida',
    routePath: '/custom-software-noida',
    shortLabel: 'Noida & Delhi NCR Services',
    seoTitle: 'Custom Software & Automation in Noida | Suraj Automation',
    metaDescription:
      'Looking for a custom software development company in Noida? Suraj Automation serves Noida, Greater Noida, Ghaziabad & Delhi NCR with ERPs, web apps & Apps Script.',
    primaryKeyword: 'Custom Software Development Company in Noida',
    secondaryKeywords: [
      'Automation Company in Noida',
      'Software Development Company in Noida',
      'Business Automation Services in Noida',
      'Custom Web App Development in Noida',
      'Google Apps Script Developer in Noida',
      'Custom ERP Software Development in Delhi NCR',
      'Business Process Automation Company in Delhi NCR',
      'Software Development Company in Greater Noida',
      'Automation Services in Ghaziabad'
    ],
    badge: 'Noida & Delhi NCR Hub',
    h1: 'Custom Software Development Company in Noida & Delhi NCR',
    heroSubheadline: 'Helping Noida, Greater Noida, Ghaziabad & Delhi NCR Businesses Automate Operations Smartly',
    heroSummary:
      'Based in Noida, Uttar Pradesh, Suraj Automation partners closely with manufacturers, wholesalers, distributors, clinics, agencies, and service businesses across Noida, Greater Noida, Ghaziabad, Gurgaon, and Delhi NCR. Whether you need a local Google Apps Script developer in Noida or full custom ERP software development in Delhi NCR, we deliver practical systems that your staff can actually run.',
    serviceType: 'Local Custom Software & Business Process Automation in Noida & Delhi NCR',
    startingNote: 'Based in Noida, UP — Remote & on-site consultation support across Delhi NCR',
    painPoints: [
      {
        title: 'NCR Agencies Overcharging for Simple Internal Tools',
        detail:
          'Large IT agencies in Noida and Gurgaon quote enterprise retainers for straightforward order, HR, or inventory portals.'
      },
      {
        title: 'Factory, Godown & Office Teams Disconnected Across NCR',
        detail:
          'Many NCR businesses operate a factory in Greater Noida or Ghaziabad, a warehouse in Delhi, and an office in Noida with data scattered across files.'
      },
      {
        title: 'Hard-to-Train Operational Software',
        detail:
          'Field and plant staff struggle with heavy foreign SaaS interfaces, causing low adoption after months of setup.'
      }
    ],
    solutions: [
      {
        title: 'Business Automation Services in Noida & NCR',
        detail:
          'Replace paper registers and scattered WhatsApp groups with structured Google Workspace workflows, automated PDF challans, and approval loops.',
        tag: 'Noida Automation'
      },
      {
        title: 'Custom ERP Software Development in Delhi NCR',
        detail:
          'Connect factory production, godown stock, distributor orders, vendor billing, and HR payroll inside one unified custom ERP without seat-based SaaS fees.',
        tag: 'Delhi NCR ERP'
      },
      {
        title: 'Custom Web App Development in Noida',
        detail:
          'Build fast React, Node.js, and Google Sheets web portals for clinics, coaching centers, real estate teams, and B2B suppliers across NCR.',
        tag: 'Web Apps'
      },
      {
        title: 'Automated MIS & WhatsApp Workflows',
        detail:
          'Deliver real-time branch P&L dashboards, payment reminders, and GST billing automation tailored for local Indian business practices.',
        tag: 'MIS + WhatsApp'
      }
    ],
    workflows: [
      {
        title: 'Multi-Location Factory to Office Inventory Sync',
        industry: 'Greater Noida & Ghaziabad Manufacturing Units',
        before: 'Production floor managers sent daily raw material usage on WhatsApp photos to the Noida head office.',
        after: 'Custom mobile web form logs consumption directly into Google Sheets ERP, updating stock and alerting procurement automatically.'
      },
      {
        title: 'NCR Distributor Order & GST Invoice Automation',
        industry: 'Delhi & Noida Wholesale Suppliers',
        before: 'Field sales reps spent evenings compiling handwritten dealer orders into Excel.',
        after: 'SupplySarthi web portal enables instant mobile order booking and one-click PDF GST billing with WhatsApp delivery updates.'
      }
    ],
    techStack: [
      'Google Apps Script & Workspace',
      'React, TypeScript & Node.js',
      'WhatsApp Business Automation',
      'Excel, SQL & Power BI MIS',
      'Gemini AI Document Workflows',
      'Razorpay & UPI Integrations'
    ],
    relatedProductIds: ['supplysarthi', 'stocksarthi', 'vendorsarthi', 'karmsarthi'],
    relatedServicePaths: [
      { label: 'Google Apps Script Development', path: '/services/google-apps-script-development' },
      { label: 'Custom Software Development India', path: '/services/custom-software-development' },
      { label: 'MIS Dashboard Development', path: '/services/mis-dashboard-development' },
      { label: 'Contact Noida Team', path: '/contact' }
    ],
    locationCoverage: {
      headline: 'Serving Noida, Greater Noida, Ghaziabad & Full Delhi NCR',
      description:
        'Suraj Automation works directly with SMB founders and operations heads across industrial sectors, commercial hubs, and growing retail corridors in the National Capital Region—alongside remote delivery across India.',
      areas: [
        {
          city: 'Noida',
          focus: 'IT agencies, service firms, clinics, corporate offices & D2C brands needing web apps, CRM & MIS dashboards.'
        },
        {
          city: 'Greater Noida',
          focus: 'Manufacturing plants, warehousing, educational institutes & factories automating production, BOM & stock.'
        },
        {
          city: 'Ghaziabad',
          focus: 'Industrial suppliers, traders, hardware distributors & wholesalers streamlining GST billing and procurement.'
        },
        {
          city: 'Delhi & Gurugram',
          focus: 'Multi-branch distributors, finance agencies & startups automating approvals, payroll & WhatsApp reminders.'
        }
      ]
    },
    faqs: [
      {
        q: 'Does Suraj Automation provide custom software services in Noida and Delhi NCR?',
        a: 'Yes. Suraj Automation is based in Noida, Uttar Pradesh, and serves businesses across Noida, Greater Noida, Ghaziabad, Gurugram, Faridabad, and Delhi—as well as SMBs across India via remote discovery, deployment, and onboarding.'
      },
      {
        q: 'Can you help connect our factory or warehouse in Greater Noida/Ghaziabad with our office in Noida?',
        a: 'Yes. Using cloud-hosted web apps and Google Workspace automation, multiple branches or plant floors update central inventory, indents, and dispatch logs in real time without expensive VPNs or local server hardware.'
      },
      {
        q: 'What industries benefit most from business process automation in Delhi NCR?',
        a: 'Manufacturing units, FMCG and wholesale distributors, B2B suppliers, coaching institutes, clinics, logistics operators, and service agencies benefit immediately because automation cuts daily manual reconciliation and speeds up invoicing and collections.'
      }
    ],
    ctaTitle: 'Partner With a Local Automation & Software Specialist in Noida',
    ctaSubtitle:
      'Schedule a free 15-minute workflow consultation with Suraj Singh to audit your manual processes and map your custom solution.',
    whatsappText:
      'Hi Suraj, I am looking for custom software / business automation services in Noida / Delhi NCR.'
  }
};

export const SOLUTION_PAGES_LIST: SolutionPageData[] = Object.values(SOLUTION_PAGES);
