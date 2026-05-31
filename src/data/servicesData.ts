export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "mis-reporting",
    title: "MIS & Reporting",
    subtitle: "MIS Reports & Business Intelligence",
    description: "Scattered data ko ek jagah laao. Daily, weekly, monthly reports jo automatically ban jayein — bina copy-paste ke.",
    points: [
      "Custom MIS report design & automation",
      "Multi-branch & department-wise reporting",
      "KPI tracking & business health summaries",
      "Excel + Google Sheets based delivery"
    ]
  },
  {
    id: "process-automation",
    title: "Process Automation",
    subtitle: "Google Apps Script Automation",
    description: "Gmail, Sheets, Forms, Drive — sab ek system mein connect karo. Manual kaam ko automate karo bina ek rupee extra kharche ke.",
    points: [
      "Auto email alerts & WhatsApp triggers",
      "Form-to-sheet data pipelines",
      "Scheduled report delivery",
      "Custom workflow automation for your business"
    ]
  },
  {
    id: "sql-data",
    title: "Data & SQL",
    subtitle: "SQL & Data Analytics",
    description: "Raw data se real insights nikalo. Sales trends, inventory gaps, customer patterns — sab kuch numbers mein clearly dikhao.",
    points: [
      "SQL query writing & database management",
      "Data cleaning & transformation",
      "Sales, inventory & ops analytics",
      "Power BI dashboard development"
    ]
  },
  {
    id: "web-apps",
    title: "Web Apps",
    subtitle: "Lightweight Web Apps (Google Ecosystem)",
    description: "Chote business ke liye full-featured apps — UdharSarthi, StockSarthi, BillSarthi jaise systems jo Google Sheets pe chalte hain.",
    points: [
      "Custom apps for your exact workflow",
      "Mobile-friendly & multi-user access",
      "No server cost — runs on Google Drive",
      "Training & onboarding included"
    ]
  }
];

export const OTHER_SERVICES = [
  "Excel Basic Dashboard Setup",
  "Excel Advanced Dashboard Setup",
  "Google Sheets Basic Dashboard Setup",
  "Google Sheets + Apps Script Advanced Suite"
];
