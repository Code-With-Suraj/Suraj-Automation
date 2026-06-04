import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, ShieldCheck, Eye, Database, Lock, CreditCard, FileText, 
  Globe, Users, HardDrive, ShieldAlert, HelpCircle, Mail, Phone, MapPin, 
  Search, ExternalLink, Calendar, AlertTriangle, Key, Ban, Scale, 
  Layers, LockKeyhole, FileSpreadsheet, RefreshCw, CheckCircle2
} from 'lucide-react';

interface PrivacySection {
  id: string;
  num: number;
  title: string;
  icon: any;
  category: 'collection' | 'usage' | 'security' | 'rights' | 'general';
  content: React.ReactNode;
}

export default function PrivacyPolicy() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const privacySections: PrivacySection[] = [
    {
      id: 'who-we-are',
      num: 1,
      title: 'Who We Are',
      icon: Users,
      category: 'general',
      content: (
        <div className="space-y-3">
          <p>
            <strong>Suraj Automation</strong> is a modern tech consulting and business optimization provider specializing in:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mt-2 text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Website Design & Development</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Website Subscription Services</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Google Sheets Automation</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Microsoft Excel Dashboards</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>MIS Reporting Systems</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Google Apps Script Development</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Business Process Automation & CRM</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Lightweight Web Applications</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'information-collected',
      num: 2,
      title: 'Information We Collect',
      icon: Eye,
      category: 'collection',
      content: (
        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            We collect only the minimum required statistics and documentation explicitly shared by you to provide professional configurations:
          </p>
          <div className="space-y-3">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
              <strong className="text-slate-900 dark:text-slate-100 block mb-1">💼 Personal Information</strong>
              <p className="text-xs text-slate-500 leading-relaxed">
                Voluntarily provided by you: full name, company email addresses, direct telephone contact, WhatsApp handles, registered business name, and GST invoices parameters where essential.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
              <strong className="text-slate-900 dark:text-slate-100 block mb-1">📊 Business Operational Information</strong>
              <p className="text-xs text-slate-500 leading-relaxed">
                Workflow documents, spreadsheet structure diagrams, logic parameters, client system definitions, and specific process guidelines Shared by you for project scope design.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
              <strong className="text-slate-900 dark:text-slate-100 block mb-1">⚙️ Technical Credentials Access</strong>
              <p className="text-xs text-slate-500 leading-relaxed">
                When deploying automation products, we may require controlled developer level access to your Google Workspace spreadsheets, Forms triggers, specific Google Drive directories, domain holding parameters, or cloud server environments.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
              <strong className="text-slate-900 dark:text-slate-100 block mb-1">🌐 Website Usage Metrics</strong>
              <p className="text-xs text-slate-500 leading-relaxed">
                We safely track general non-identifiable technical properties including IP parameters, browser orientations, device characteristics, visiting patterns, page focus durations, and digital sources.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'how-use-info',
      num: 3,
      title: 'How We Use Your Information',
      icon: Database,
      category: 'usage',
      content: (
        <div className="space-y-3">
          <p>
            Information collected under this framework is harnessed solely to process projects and enforce professional standards, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>Tailoring and preparing custom spreadsheets, automated trigger flows, and API scripts.</li>
            <li>Providing operational maintenance and bug patches for delivered solutions.</li>
            <li>Sending milestone update notifications or responding to customer help queries.</li>
            <li>Invoicing, payment authentication management, and processing active web subscriptions.</li>
            <li>Safeguarding our users and resolving system support issues globally.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'google-workspace',
      num: 4,
      title: 'Google Workspace & Automation Systems',
      icon: FileSpreadsheet,
      category: 'usage',
      content: (
        <div className="space-y-3">
          <p>
            Because we build expert automation scripts within the <strong>Google Ecosystem (Sheets, Docs, Forms, Drive, Gmail, Apps Script)</strong>, we enforce a strict standard of digital integrity:
          </p>
          <div className="border border-emerald-100 dark:border-emerald-900/30 bg-emerald-50/20 dark:bg-emerald-950/20 rounded-xl p-4 space-y-2.5">
            <h5 className="font-bold text-emerald-900 dark:text-emerald-400 text-sm flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Executive Architecture Policy
            </h5>
            <p className="text-sm">
              Unless explicitly commissioned otherwise, all Google Apps Script automation systems we deploy run entirely on <strong>your own Google account storage space</strong>. There are no independent servers extracting or archiving your rows.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium pt-1">
              <span>✔ No outside data harvesting queries</span>
              <span>✔ No scanning private email rows</span>
              <span>✔ No marketing utilization patterns</span>
              <span>✔ Developer access revoked on SOW completion</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'payment-processing',
      num: 5,
      title: 'Payment Processing',
      icon: CreditCard,
      category: 'security',
      content: (
        <div className="space-y-3 text-sm">
          <p>
            Payment transactions for our software services, custom templates, or active web subscription plans are securely processed through industry-leading payment gateway operators (such as <strong>Razorpay, Authorized UPI, or verified Banking interfaces</strong>).
          </p>
          <p className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800 text-xs text-slate-500 italic">
            <strong>Security Affirmation:</strong> Suraj Automation holds, processes, or captures zero credit/debit card numbers, private expiration dates, CVVs, or full transaction passcode credentials on our local servers. Payment processing is governed by external gateway providers' secure setups.
          </p>
        </div>
      )
    },
    {
      id: 'data-security',
      num: 6,
      title: 'Data Security',
      icon: Lock,
      category: 'security',
      content: (
        <div className="space-y-3">
          <p>
            We take your security seriously and utilize a series of technical controls to safeguard your data elements:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mt-2">
            <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
              <strong className="text-slate-900 dark:text-white font-bold block mb-1">🔒 Enforces SSL Security</strong>
              <p className="text-slate-500">Every transmission flowing to our server endpoints is encrypted via premium SSL configuration layers.</p>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-805">
              <strong className="text-slate-900 dark:text-white font-bold block mb-1">🔑 Access Level Limits</strong>
              <p className="text-slate-500">Only authorized developers working on your specific script can see your configuration parameters.</p>
            </div>
          </div>
          <p className="text-xs text-slate-450 italic mt-2">
            While we apply strict code controls, no web system offers 100% security. We cannot guarantee total protection against malicious third-party hack attempts, security exploits, or API failures.
          </p>
        </div>
      )
    },
    {
      id: 'confidentiality',
      num: 7,
      title: 'Confidentiality',
      icon: ShieldAlert,
      category: 'security',
      content: (
        <p className="text-sm">
          All materials, database structures, business calculations, workflow secrets, or contacts shared with us during our technical collaboration are treated as strictly <strong>Confidential</strong>. We will never sell, lease, rent, trade, or distribute your private business profiles to advertising third-parties without your direct written request.
        </p>
      )
    },
    {
      id: 'third-party-services',
      num: 8,
      title: 'Third-Party Services',
      icon: Globe,
      category: 'security',
      content: (
        <div className="space-y-3 text-sm">
          <p>
            Our software products integrate with external digital structures (such as Google APIs, Twilio triggers, Meta/WhatsApp networks, host systems, and analytics models).
          </p>
          <p className="bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 text-slate-700 dark:text-amber-400 p-3.5 rounded-xl text-xs">
            <strong>DISCLAIMER:</strong> We contain no governing authority or liability over the privacy practices, interface codes, data policies, or cookies utilized by third-party providers. We encourage users to verify those setups independently.
          </p>
        </div>
      )
    },
    {
      id: 'cookies-analytics',
      num: 9,
      title: 'Cookies & Analytics',
      icon: Key,
      category: 'collection',
      content: (
        <p className="text-sm">
          Our website utilizes technical cookies and telemetry elements to monitor standard visitor numbers, track user experience performance, and log visual conversions. Cookies save generic reference settings rather than harvesting custom user passwords. You can toggle off browser cookie accepts, though some user panels may lose active functionalities.
        </p>
      )
    },
    {
      id: 'data-retention',
      num: 10,
      title: 'Data Retention',
      icon: Calendar,
      category: 'usage',
      content: (
        <p className="text-sm">
          We preserve collected target business directories or metadata only as long as necessary to fulfill active contract milestones, comply with legislative auditing mandates, resolve software bugs, and verify positive user states. Stale or inactive client code files are eventually deleted or sanitized securely.
        </p>
      )
    },
    {
      id: 'your-rights',
      num: 11,
      title: 'Your Rights',
      icon: Scale,
      category: 'rights',
      content: (
        <div className="space-y-3 text-sm">
          <p>
            You possess full legal rights over your personal and contact details, and you can contact our office at any time to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Access stored personal details</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Modify or correct false information</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Completely delete contact information</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Restrict or pause file processing</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'client-data-ownership',
      num: 12,
      title: 'Client Data Ownership',
      icon: HardDrive,
      category: 'rights',
      content: (
        <p className="text-sm border-l-4 border-emerald-500 pl-3 italic text-slate-600 dark:text-slate-400">
          We maintain a strict stance on data boundaries: <strong>All custom rows, customer contact databases, transaction books, inventory numbers, HR logs, and spreadsheets remain 100% owned by the client.</strong> Suraj Automation holds zero claims or property rights over your dataset contents.
        </p>
      )
    },
    {
      id: 'childrens-privacy',
      num: 13,
      title: "Children's Privacy",
      icon: HelpCircle,
      category: 'rights',
      content: (
        <p className="text-sm text-slate-600 dark:text-slate-450">
          Our specialized automation scripts, website programs, and software consulting services are developed for business operators, adults and corporations. We do not knowingly compile or track info from minors under the age of 18. If discovered, such records will be permanently purged.
        </p>
      )
    },
    {
      id: 'international-access',
      num: 14,
      title: 'International Access',
      icon: Globe,
      category: 'general',
      content: (
        <p className="text-sm leading-relaxed">
          While we cater primarily to businesses operating in the Republic of India, any global users engaging our services acknowledge that their operational metadata or details will be processed, transferred, and stored inside India according to domestic legislative guidelines and secure service policies.
        </p>
      )
    },
    {
      id: 'changes-to-policy',
      num: 15,
      title: 'Changes to This Privacy Policy',
      icon: RefreshCw,
      category: 'general',
      content: (
        <p className="text-sm">
          We may update the clauses of this Privacy Policy at any time to reflect software enhancements, API requirement updates, or regulatory variations. New terms will gain immediate legal standing upon being updated and posted live on the Suraj Automation privacy stream. Continued partnerships confirm active acceptance of updated rules.
        </p>
      )
    },
    {
      id: 'contact-us-details',
      num: 16,
      title: 'Contact Us',
      icon: Mail,
      category: 'general',
      content: (
        <div className="space-y-4">
          <p className="text-sm">
            For doubts regarding your data access, domain security locks, script credential removals, or privacy questions, contact our support team:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 mt-2">
            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-810">
              <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-450 block font-medium">Email Support</span>
                <a href="mailto:suraj.gasdeveloper@gmail.com" className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 transition-colors">
                  suraj.gasdeveloper@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-805">
              <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Phone className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="text-xs text-slate-450 block font-medium">WhatsApp Office</span>
                <a href="https://wa.me/918851666208" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors flex items-center gap-1">
                  +91 88516 66208 <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-450 block font-medium">Website Address</span>
                <a href="https://www.surajautomation.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 transition-colors flex items-center gap-1">
                  surajautomation.com <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-815">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-650 dark:text-slate-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-450 block font-medium">Headquarters</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  Gurugram, Haryana, India
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-xs text-slate-400 text-center pt-2 font-mono">
            Business Hours: Monday – Saturday, 10:00 AM – 7:00 PM IST
          </div>
        </div>
      )
    },
    {
      id: 'consent-rule',
      num: 17,
      title: 'Consent',
      icon: Ban,
      category: 'general',
      content: (
        <p className="text-sm text-slate-600 dark:text-slate-400">
          By continuing to navigate this website, utilizing our customer checkout widgets, contracting custom Apps Script systems, or commissioning lightweight web templates, you declare that you have read, understood, and consented fully to all collection guidelines and data processes listed inside this Privacy Policy.
        </p>
      )
    }
  ];

  const filteredSections = privacySections.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', title: 'All Policies' },
    { id: 'collection', title: 'Data Collection' },
    { id: 'usage', title: 'Use & Workspace' },
    { id: 'security', title: 'Security & Access' },
    { id: 'rights', title: 'Ownership & Rights' },
    { id: 'general', title: 'General & Contact' }
  ];

  const handleScroll = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
      <Link to="/" className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-850 mb-8 transition-colors bg-emerald-50 dark:bg-emerald-950/20 px-4 py-2 rounded-xl">
        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
      </Link>
      
      {/* Decorative Gradient Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 rounded-3xl p-8 md:p-12 text-white shadow-2xl mb-12 border border-slate-805">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-505/5 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 uppercase tracking-wider mb-6 font-mono">
            <LockKeyhole className="w-3.5 h-3.5" /> Data Security Protocol
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
            We hold personal information, business data, and software scripts to high security frameworks. Read about how we gather, utilize, protect, and respect your operational parameters.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-450 border-t border-slate-850 pt-4 font-mono">
            <div>
              <span className="font-semibold text-slate-350">Last Updated:</span> June 4, 2026
            </div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <div>
              <span className="font-semibold text-slate-350">Authority:</span> Suraj Automation Team
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-150 dark:border-slate-850 p-6 shadow-sm mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Quick Search */}
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-450 w-5 h-5 pointer-events-none" />
            <input 
              type="text" 
              placeholder="Search policies (e.g. Google Workspace, payment)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-550 transition-all font-medium text-slate-800 dark:text-slate-200"
            />
          </div>

          {/* Categories Selector */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-start lg:justify-end overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id 
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10' 
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-450 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-4 gap-8">
        
        {/* Table of Contents Side bar */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-24 max-h-[calc(100vh-140px)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-800">
            <h4 className="text-xs font-black uppercase text-slate-400 dark:text-slate-500 tracking-widest mb-4">
              Table of Contents
            </h4>
            <ul className="space-y-1">
              {filteredSections.map((item) => {
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScroll(item.id)}
                      className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-450 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-emerald-650 dark:hover:text-emerald-400 transition-all flex items-center gap-2.5 group"
                    >
                      <span className="w-5 h-5 flex-shrink-0 rounded-md bg-slate-100 dark:bg-slate-850 text-slate-800 dark:text-slate-350 text-[10px] font-black flex items-center justify-center group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/45 group-hover:text-emerald-600 transition-colors">
                        {item.num}
                      </span>
                      <span className="truncate">{item.title}</span>
                    </button>
                  </li>
                );
              })}
              {filteredSections.length === 0 && (
                <li className="text-xs italic text-slate-450">No matching sections</li>
              )}
            </ul>
          </div>
        </div>

        {/* Main Content cards */}
        <div className="col-span-4 lg:col-span-3 space-y-8">
          
          {filteredSections.map((item) => {
            const IconComp = item.icon;
            return (
              <motion.section 
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-150 dark:border-slate-850 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-emerald-500/20 dark:hover:border-emerald-500/30 transition-all duration-300 relative group"
              >
                {/* Top border accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-emerald-500 transition-colors duration-300 rounded-t-2xl"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 flex-shrink-0 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center font-bold">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-black tracking-widest text-emerald-500/90 dark:text-emerald-450 bg-emerald-50/70 dark:bg-emerald-950/20 px-2 py-0.5 rounded-md border border-emerald-150/50 dark:border-emerald-950/30">
                          Section {item.num}
                        </span>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-slate-450">
                          • {item.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-450 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base space-y-4">
                  {item.content}
                </div>
              </motion.section>
            );
          })}

          {filteredSections.length === 0 && (
            <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-150 dark:border-slate-800">
              <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                No matching policies found
              </h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto px-4 animate-pulse">
                We couldn't find any policy lines matching "{searchQuery}". Try modifying your filters or searching clear terms.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-6 px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl cursor-pointer"
              >
                Clear Search & Filters
              </button>
            </div>
          )}

          {/* Quick Disclaimer Footer */}
          <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-150 dark:border-slate-800 rounded-3xl p-6 text-xs text-slate-500 space-y-2">
            <p className="font-semibold text-slate-700 dark:text-slate-350 flex items-center gap-1.5 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Active Consent Protocol Acknowledgement
            </p>
            <p>
              By utilizing our website, custom dashboard apps, sheet scripts, or checkout widgets, you acknowledge and accept our information principles and privacy structures. For custom workflows built with separate master contract agreements, those primary contracts retain executive precedence.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
