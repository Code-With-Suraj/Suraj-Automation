import { 
  FileSpreadsheet, 
  BarChart3, 
  Workflow, 
  MonitorSmartphone, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Zap, 
  Users, 
  TrendingUp, 
  Sparkles,
  PhoneCall
} from 'lucide-react';

export interface OfferData {
  id: string;
  slug: string;
  title: string;
  keywords: string;
  metaDescription: string;
  overview: string;
  startingPrice: string;
  monthlyMaintenance?: string;
  icon: any; // Lucide icon
  colorTheme: {
    primary: string; // Tailwind class
    secondary: string;
    gradient: string;
    glow: string;
    border: string;
    accentText: string;
  };
  features: {
    title: string;
    description: string;
  }[];
  whatsIncluded: string[];
  clientSuccess: {
    clientType: string;
    text: string;
  };
  riskReducers: {
    title: string;
    description: string;
  }[];
  ctaText: string;
  ctaSubtext: string;
  whatsappMsg: string;
  thumbnailUrl: string; // Fallback or illustration
}

export const SPECIAL_OFFERS: OfferData[] = [
  {
    id: "sheets-automation",
    slug: "google-sheets-automation",
    title: "Google Sheets Automation for Small Businesses",
    keywords: "Google Sheets automation India, automate business processes, small business data management, Google Workspace automation",
    metaDescription: "Stop manual data entry. We build custom Google Sheets automations for small businesses starting at ₹1499. Save hours every week and eliminate errors. Get a free consultation today.",
    overview: "Are you drowning in manual data entry, repetitive tasks, and messy spreadsheets? Our Google Sheets Automation services transform chaotic workflows into streamlined, automated processes. We help small businesses save valuable hours, reduce human error, and gain instant visibility into their operations, allowing you to focus on growth instead of administration.",
    startingPrice: "₹1,499",
    icon: FileSpreadsheet,
    colorTheme: {
      primary: "emerald",
      secondary: "teal",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      glow: "rgba(16,185,129,0.35)",
      border: "border-emerald-500/20 dark:border-emerald-500/30",
      accentText: "text-emerald-600 dark:text-emerald-400"
    },
    features: [
      {
        title: "Automated Data Entry",
        description: "Seamlessly pull data from forms, emails, or other software directly into your sheets."
      },
      {
        title: "Custom Notifications & Alerts",
        description: "Get instant email or Slack alerts triggered by specific sheet conditions (e.g., low inventory, new leads)."
      },
      {
        title: "Automated Invoice/PDF Generation",
        description: "Automatically create and email customized documents based on row data."
      },
      {
        title: "Cross-Sheet Synchronization",
        description: "Keep data consistent across multiple sheets and departments without manual copying and pasting."
      },
      {
        title: "User-Friendly Interfaces",
        description: "Custom menus and buttons built directly into your sheets for easy operation."
      }
    ],
    whatsIncluded: [
      "Discovery & Process Mapping Consultation",
      "Automation of 1-2 core workflows inside a single workbook",
      "Custom trigger macros & background script optimization",
      "Basic handoff documentation & video walkthrough instructions",
      "7 Days of comprehensive post-launch support and bug-fixes"
    ],
    clientSuccess: {
      clientType: "A local retail store client",
      text: "eliminated 10 hours of manual sales logging per week by automating data transfer from their POS system directly into their daily Google Sheets tracker."
    },
    riskReducers: [
      {
        title: "Quick Turnaround",
        description: "Most basic automations custom-developed and delivered within 3-5 business days."
      },
      {
        title: "Post-Launch Support",
        description: "7 days of free bug-fixing and minor system adjustments absolutely included."
      },
      {
        title: "No Ongoing Fees",
        description: "You own the code of your workspace completely; no monthly subscription required for the script."
      }
    ],
    ctaText: "Book a Free Consultation",
    ctaSubtext: "Stop wasting time on manual tasks. Let's discuss your workflow today.",
    whatsappMsg: "Hi Suraj, I want to book a free consultation for Google Sheets Automation for my business.",
    thumbnailUrl: "/images/offers/sheets_automation_thumb.jpg"
  },
  {
    id: "excel-dashboard",
    slug: "custom-excel-dashboard-mis",
    title: "Custom Excel Dashboard & MIS Report",
    keywords: "Custom Excel dashboard, MIS reporting services, business intelligence India, Excel data visualization",
    metaDescription: "Turn complex data into clear insights. We build custom Excel dashboards and MIS reports starting at ₹1999. Make faster, data-driven decisions. Request a quote now.",
    overview: "Struggling to make sense of scattered data or relying on outdated reports? We design interactive, customized Excel dashboards and Management Information System (MIS) reports that turn complex numbers into clear, actionable insights. Get a real-time, birds-eye view of your business performance, empowering you to make faster, data-driven decisions with confidence.",
    startingPrice: "₹1,999",
    icon: BarChart3,
    colorTheme: {
      primary: "indigo",
      secondary: "blue",
      gradient: "from-indigo-500 via-blue-500 to-sky-500",
      glow: "rgba(79,70,229,0.35)",
      border: "border-indigo-500/20 dark:border-indigo-500/30",
      accentText: "text-indigo-600 dark:text-indigo-400"
    },
    features: [
      {
        title: "Interactive Visualizations",
        description: "Dynamic charts, graphs, and slicers that make data easy to understand at a glance."
      },
      {
        title: "Automated Data Consolidation",
        description: "Automatically combine data from multiple sources (CSV, SQL, other workbooks) into a single master report."
      },
      {
        title: "KPI Tracking",
        description: "Custom metrics tailored specifically to your business goals and industry standards."
      },
      {
        title: "Clean, Professional Design",
        description: "Dashboards designed for clarity, usability, and executive-level presentations."
      },
      {
        title: "User Training",
        description: "Basic instructions on how to update data sources and maintain the dashboard."
      }
    ],
    whatsIncluded: [
      "Granular requirements gathering & data structure review",
      "Consolidation & transformation of up to 3 individual data sources",
      "Design of 1 interactive master dashboard layout",
      "Addition of up to 5 key visual metrics & charts with slicers",
      "Compact user reference guide on how to update data rows"
    ],
    clientSuccess: {
      clientType: "A regional product distributor",
      text: "We built a monthly sales MIS dashboard, reducing reporting time from 3 days to 2 hours and revealing a previously unnoticed 15% drop in a key product line."
    },
    riskReducers: [
      {
        title: "100% Satisfaction",
        description: "We iterate on the design and layouts until it matches your approved specifications."
      },
      {
        title: "Secure Handling",
        description: "We operate under strict confidentiality metrics to ensure your business data remains 100% private."
      },
      {
        title: "Future-Proof Design",
        description: "Built using scalable modeling guidelines, making future database updates incredibly simple."
      }
    ],
    ctaText: "Get a Custom Quote",
    ctaSubtext: "Transform your data into decisions. Tell us about your reporting needs.",
    whatsappMsg: "Hi Suraj, I am looking for a custom Excel Dashboard & MIS Report for my business. I'd like a custom quote.",
    thumbnailUrl: "/images/offers/excel_dashboard_thumb.jpg"
  },
  {
    id: "apps-script",
    slug: "google-apps-script-automation",
    title: "Google Apps Script Workflow Automation",
    keywords: "Google Apps Script developer, custom Google Workspace automation, business workflow automation, G Suite integration",
    metaDescription: "Connect your apps and automate complex workflows with custom Google Apps Script solutions starting at ₹2999. Boost productivity across your entire Google Workspace.",
    overview: "Are your Google Workspace apps disconnected, forcing your team into inefficient workarounds? Our advanced Google Apps Script solutions bridge the gap between Docs, Sheets, Gmail, Forms, and Drive. We build robust, custom workflows that automate complex, multi-step processes, dramatically increasing team productivity and ensuring standardization across your organization.",
    startingPrice: "₹2,999",
    icon: Workflow,
    colorTheme: {
      primary: "blue",
      secondary: "indigo",
      gradient: "from-blue-500 via-indigo-550 to-violet-500",
      glow: "rgba(59,130,246,0.35)",
      border: "border-blue-500/20 dark:border-blue-500/30",
      accentText: "text-blue-600 dark:text-blue-450"
    },
    features: [
      {
        title: "Cross-App Integration",
        description: "Seamlessly connect Gmail, Drive, Docs, Sheets, Calendar, and Forms into unified workflows."
      },
      {
        title: "Third-Party API Connections",
        description: "Integrate your Google Workspace with external tools like CRM systems, payment gateways, or Slack."
      },
      {
        title: "Custom Add-ons & Menus",
        description: "Build proprietary tools directly into your Google Workspace environment for team-wide use."
      },
      {
        title: "Scheduled Triggers",
        description: "Set complex processes to run automatically on specific schedules (hourly, daily, monthly)."
      },
      {
        title: "Advanced Error Handling",
        description: "Robust scripts built with logging and error notifications to ensure reliable performance."
      }
    ],
    whatsIncluded: [
      "Detailed scoping session & customized flowchart blueprinting",
      "Development of a multi-app workflow script (e.g., Form -> Sheet -> Doc -> Email)",
      "Dedicated testing sandbox environment setup",
      "Clean source code annotation for transparency",
      "14 Days of priority operational support and adjustment loops"
    ],
    clientSuccess: {
      clientType: "An HR consulting group",
      text: "automated their entire candidate onboarding workflow—triggering custom welcome emails, creating Drive folders, and compiling contracts in Docs—saving 3 hours per new hire."
    },
    riskReducers: [
      {
        title: "Detailed Scoping Blueprints",
        description: "All projects begin with an agreed-upon scope parameters and detailed workflow diagram."
      },
      {
        title: "Isolated Sandbox",
        description: "Scripts are thoroughly tested in an identical duplicate sandbox before live deployment."
      },
      {
        title: "Full Code Ownership",
        description: "100% intellectual rights and direct access to finalized script codes transferred to you."
      }
    ],
    ctaText: "Discuss Your Workflow",
    ctaSubtext: "Ready to connect your apps? Schedule a free discovery call.",
    whatsappMsg: "Hi Suraj, I want to discuss Google Apps Script Workflow Automation to connect my apps.",
    thumbnailUrl: "/images/offers/apps_script_automation_thumb.jpg"
  },
  {
    id: "web-app-sheets",
    slug: "custom-web-app",
    title: "Custom Web App & Service Website Development",
    keywords: "custom web app development, Google Sheets database app, low cost web application, service website design India",
    metaDescription: "Launch your custom web app or service website quickly and affordably. We build scalable solutions using Google Apps Script and Sheets as a database, starting at ₹3999.",
    overview: "Need a dedicated web application or a professional service website, but deterred by high development costs? We offer an innovative, cost-effective solution: custom web apps built using HTML/CSS/JS interfaces powered by Google Apps Script, with Google Sheets acting as your easily manageable database. Get a scalable, functional web presence deployed quickly and affordably.",
    startingPrice: "₹3,999",
    monthlyMaintenance: "₹799/month",
    icon: MonitorSmartphone,
    colorTheme: {
      primary: "purple",
      secondary: "pink",
      gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
      glow: "rgba(168,85,247,0.35)",
      border: "border-purple-500/20 dark:border-purple-500/30",
      accentText: "text-purple-600 dark:text-purple-400"
    },
    features: [
      {
        title: "Cost-Effective Architecture",
        description: "Utilizing Google Sheets as a backend database significantly reduces hosting and development costs."
      },
      {
        title: "Easy Data Management",
        description: "Update your website content or manage user data simply by editing a familiar Google Sheet."
      },
      {
        title: "Custom Frontend Design",
        description: "Responsive, modern user interfaces tailored to your brand and optimized for all devices."
      },
      {
        title: "User Authentication & Portals",
        description: "Secure login areas for clients or staff to access personalized data or submit information."
      },
      {
        title: "Rapid Deployment",
        description: "Faster development cycles compared to traditional full-stack web applications."
      }
    ],
    whatsIncluded: [
      "Custom UI/UX layout matching your corporate color themes",
      "Frontend development (up to 3 core operational pages/views)",
      "Google Apps Script backend dynamic API compiler integration",
      "Secure lightweight database schema set up inside Google Sheets",
      "Comprehensive setup of Google Cloud hosting / script endpoints",
      "Includes hosting management, minor text updates, and support (with subscription)"
    ],
    clientSuccess: {
      clientType: "A local cleaning team",
      text: "launched a custom customer booking portal where clients schedule visits online, instantly updating a dispatcher master Sheet for their team."
    },
    riskReducers: [
      {
        title: "Transparent Budgets",
        description: "Clear upfront design costs and a predictable monthly structure; with zero hidden cloud fees."
      },
      {
        title: "Easy Micro-Scalability",
        description: "If your operations outgrow sheets, the frontend can be upgraded to an SQL database later."
      },
      {
        title: "Ongoing System Cover",
        description: "The optional monthly fee keeps your system online, responsive, and completely secure."
      }
    ],
    ctaText: "Start Your Project",
    ctaSubtext: "Bring your web app idea to life affordably. Request a consultation today.",
    whatsappMsg: "Hi Suraj, I want to start a project with Custom Web App & Service Website starting at ₹3999.",
    thumbnailUrl: "/images/offers/web_app_sheets_thumb.jpg"
  }
];
