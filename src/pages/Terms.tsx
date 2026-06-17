import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, FileText, Briefcase, Calendar, Database, Wrench, 
  CreditCard, Globe, Users, HardDrive, ShieldCheck, Key, 
  HelpCircle, AlertTriangle, ShieldAlert, Scale, RefreshCw, 
  XCircle, Ban, Hourglass, MapPin, Mail, Phone, Search, ExternalLink
} from 'lucide-react';

interface TermSection {
  id: string;
  num: number;
  title: string;
  icon: any;
  category: 'services' | 'financial' | 'ownership' | 'liability' | 'general';
  content: React.ReactNode;
}

export default function Terms() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const terms: TermSection[] = [
    {
      id: 'services-covered',
      num: 1,
      title: 'Services Covered',
      icon: Briefcase,
      category: 'services',
      content: (
        <div className="space-y-3">
          <p>
            These Terms and Conditions apply to all digital services and customized software provided by <strong>Suraj Automation</strong>, including but not limited to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mt-2 text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span>Website Design & Development</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span>Website Subscription Plans</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span>Domain Registration & Hosting</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span>Google Sheets Automation</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span>Microsoft Excel Dashboards</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span>MIS Reporting Systems</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span>Google Apps Script Development</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span>Business Process Automation</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span>PDF & Email Automation Systems</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span>Inventory Management Systems</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span>Billing & Quotation Systems</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span>Attendance & HR Systems</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-805">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span>Lightweight Web Applications</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span>Custom Business Software Solutions</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 col-span-1 md:col-span-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span>Data Analytics & Business Intelligence Services</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'subscription-plans',
      num: 2,
      title: 'Subscription Plans & Lock-In Period',
      icon: Calendar,
      category: 'financial',
      content: (
        <div className="space-y-4">
          <p>
            Our website subscription plans package together domain registration, web hosting, technical configurations, SSL security setup, and ongoing codebase maintenance into simple, affordable service plans.
          </p>
          <div className="border border-indigo-100 dark:border-indigo-900/40 bg-indigo-50/20 dark:bg-indigo-950/20 rounded-xl p-4 space-y-3">
            <h5 className="font-bold text-indigo-950 dark:text-indigo-400 text-sm tracking-wide uppercase">Monthly Plan Terms</h5>
            <p className="text-sm">
              Because Suraj Automation invests substantial upfront resources to secure custom domain names, configure web hosting services, build, configure templates, and provide technical setups, a <strong>minimum 6-month lock-in period</strong> is enforced on the Monthly Plan.
            </p>
            <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-indigo-50/50 dark:border-slate-800 text-xs text-rose-600 dark:text-rose-450 space-y-1.5 font-medium">
              <p className="flex items-start gap-1.5">
                <span className="text-rose-500 mt-0.5">•</span>
                <span>The website may be immediately suspended or put offline upon early plan cancellation.</span>
              </p>
              <p className="flex items-start gap-1.5">
                <span className="text-rose-500 mt-0.5">•</span>
                <span>The domain name registration keys will remain managed by us until all unpaid dues from the commit lock-in period are fully cleared.</span>
              </p>
              <p className="flex items-start gap-1.5">
                <span className="text-rose-500 mt-0.5">•</span>
                <span>Strictly no partial refunds shall be processed or provided for unused fragments of active subscription months.</span>
              </p>
            </div>
          </div>
          <div className="border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/35 rounded-xl p-4">
            <h5 className="font-bold text-slate-800 dark:text-slate-300 text-sm mb-2">Yearly Plan Terms</h5>
            <p className="text-sm">
              Annual subscription plans are billed as an upfront one-time payment. Yearly pricing covers full domain holding rights, high-performance hosting overheads, routine safety audits, periodic layout edits, and basic tech-support for the entire 12-month period.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'spreadsheet-automation',
      num: 3,
      title: 'Spreadsheet Automation & Dashboard Services',
      icon: Database,
      category: 'services',
      content: (
        <div className="space-y-3">
          <p>
            Custom automation systems are crafted utilizing professional applications and ecosystems including Google Sheets, Microsoft Excel, Google Forms, Google Drive, Gmail, Google Apps Script, Power BI, and other approved databases. Let it be explicitly noted that:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-650 dark:text-slate-300">
            <li>All technical structures, logical systems, and functional features are structured based on the explicit business requirements documentation shared by the client and frozen at approval.</li>
            <li>Any extra requests, adjustments, or modification streams introduced after the project design approval or post-delivery milestone will be treated strictly as change orders or separate project phases, incurring additional development fees.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'scope-maintenance',
      num: 4,
      title: 'Scope of Maintenance & Support',
      icon: Wrench,
      category: 'services',
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-slate-100 dark:border-slate-800 p-4 rounded-xl">
              <h5 className="font-bold text-slate-900 dark:text-white text-sm mb-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> What is Included
              </h5>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-450 font-medium">
                <p>✔ Active SSL security certificate tracking</p>
                <p>✔ Server and platform availability monitoring</p>
                <p>✔ Tiny content updates, image/text swaps</p>
                <p>✔ Minor business address or contact detail modifications</p>
                <p>✔ Standard Google Apps Script runtime bug patches</p>
                <p>✔ Routine automated-trigger error checking</p>
              </div>
            </div>
            <div className="border border-rose-100 dark:border-rose-950/30 p-4 bg-rose-50/10 dark:bg-rose-950/5 rounded-xl">
              <h5 className="font-bold text-rose-900 dark:text-rose-400 text-sm mb-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span> What is Excluded
              </h5>
              <div className="space-y-2 text-xs text-rose-600/90 dark:text-rose-450/95 font-medium">
                <p>✖ Total layout shifts, design makeovers, re-themings</p>
                <p>✖ Building entirely new software modules or views</p>
                <p>✖ Injecting unagreed API channels or extra connectors</p>
                <p>✖ Massive database refactoring</p>
                <p>✖ Integration of advanced ecommerce operations</p>
                <p>✖ Developing raw spreadsheet models from scratch later</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-500 italic">
            Out-of-scope adjustments and post-deploy additions require individual evaluations and our standard technical hourly pricing rates will apply.
          </p>
        </div>
      )
    },
    {
      id: 'billing-payments',
      num: 5,
      title: 'Billing & Payments',
      icon: CreditCard,
      category: 'financial',
      content: (
        <div className="space-y-3">
          <p>
            Accurate billing maintains trust. All services, custom contracts, and invoices must follow strict timelines:
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg">
              <span className="font-bold text-indigo-600 dark:text-indigo-400 pt-0.5">5.1</span>
              <div>
                <span className="font-semibold block text-slate-900 dark:text-slate-100">Invoice Timelines</span>
                <span className="text-xs text-slate-500">Every statement or invoice issued by us must be paid on or before the designated invoice deadline page.</span>
              </div>
            </div>
            <div className="flex gap-3 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg">
              <span className="font-bold text-indigo-600 dark:text-indigo-400 pt-0.5">5.2</span>
              <div>
                <span className="font-semibold block text-slate-900 dark:text-slate-100">Failed Transactions & Grace Period</span>
                <span className="text-xs text-slate-500">In cases where recurring payments fail, we grant a protective 7-day grace period to rectify the matter. Access or support remains active during this short window.</span>
              </div>
            </div>
            <div className="flex gap-3 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg">
              <span className="font-bold text-indigo-600 dark:text-indigo-400 pt-0.5">5.3</span>
              <div>
                <span className="font-semibold block text-slate-900 dark:text-slate-105">Extended Non-Payment Suspension</span>
                <span className="text-xs text-slate-500">If outstanding payments cross 30 days past due, we reserve the absolute right to pull websites instantly offline, disconnect operational databases, block API automation scripts, and permanently purge host-associated directories.</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'google-workspace',
      num: 6,
      title: 'Google Workspace & Third-Party Services',
      icon: Globe,
      category: 'services',
      content: (
        <div className="space-y-3 text-sm">
          <p>
            Many of our custom solutions integrate heavily with external services (such as <strong>Google Workspace Suite, WhatsApp/Meta APIs, SMS Providers, Twilio, and payment gateways</strong>).
          </p>
          <p className="bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 text-slate-700 dark:text-amber-400 p-4 rounded-xl text-xs leading-relaxed">
            <strong>DISCLAIMER:</strong> Suraj Automation holds absolutely zero liability for any external operational outages, API deprecation mandates, Google policy revisions, processing quota limitations, account locks, or financial billing structural changes executed by third-party systems. Clients are individually responsible for paying third-party licensing fees.
          </p>
        </div>
      )
    },
    {
      id: 'client-responsibilities',
      num: 7,
      title: 'Client Responsibilities',
      icon: Users,
      category: 'ownership',
      content: (
        <div className="space-y-3">
          <p>
            To achieve efficient and successful setups, the Client actively agrees to the following covenants:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-650 dark:text-slate-350">
            <li>Provide clean, robust and comprehensive functional requirements at inception.</li>
            <li>Promptly supply legal-right visual logos, text copy, documentation, or design files inside reasonable project timelines.</li>
            <li>Maintain control, renewal payments, and ownership over private company API handles or Workspace licenses.</li>
            <li>Provide timely test approvals so that live operational dates can be executed.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'data-ownership',
      num: 8,
      title: 'Data Ownership',
      icon: HardDrive,
      category: 'ownership',
      content: (
        <div className="space-y-2 text-sm">
          <p>
            You possess full proprietary rights over your data. All records, databases, spreadsheet inputs, client contacts, customer registries, private inventories, financial files, customized logos, design marks and brand assets remain completely yours.
          </p>
          <p className="font-semibold text-slate-900 dark:text-white">
            Suraj Automation asserts zero claims of ownership over client database tables, records or private information streams.
          </p>
        </div>
      )
    },
    {
      id: 'intellectual-property',
      num: 9,
      title: 'Intellectual Property',
      icon: ShieldCheck,
      category: 'ownership',
      content: (
        <div className="space-y-3">
          <p>
            For the mutual safety of custom codes, our legal boundaries protect prior framework development blocks:
          </p>
          <p className="text-sm">
            Unless explicitly agreed otherwise in writing, <strong>Suraj Automation</strong> retains exclusive global patent and intellectual property rights over any core underlying reusable architectures, pre-written Google Apps Script code library frameworks, optimization macros, design systems, internal development workflows, and custom spreadsheet template algorithms.
          </p>
          <p className="text-sm border-l-4 border-indigo-500 pl-3 italic text-slate-500">
            The client is officially granted a perpetual, non-exclusive, non-transferable internal business usage license to leverage the compiled operational product solutions developed. Reselling or distributing our code is forbidden.
          </p>
        </div>
      )
    },
    {
      id: 'source-code',
      num: 10,
      title: 'Source Code & System Transfer',
      icon: Key,
      category: 'ownership',
      content: (
        <div className="space-y-3 text-sm">
          <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white mb-1">For Subscription Websites:</h5>
            <p className="text-xs">
              Raw underlying backend source code, advanced template architecture formats, and master technical servers are proprietary property and are not transferred. System access and styling files exist strictly under active subscription terms.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white mb-1">For Custom Independent Contracts:</h5>
            <p className="text-xs">
              Handover limits and functional script modifications adhere entirely to the specific project contract, quotations, or custom client statements of work. In the absence of an explicit transfers agreement clause, master code and compilation blocks remain the property of Suraj Automation.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'domain-registration',
      num: 11,
      title: 'Domain Registration & Transfer',
      icon: Globe,
      category: 'ownership',
      content: (
        <div className="space-y-2 text-sm">
          <p>
            We register custom internet URLs and domain addresses directly on behalf of target clients for use as hosting endpoints.
          </p>
          <p>
            So long as the client account balance maintains a positive active standing and respects all terms, the client retains complete utilization and naming rights over their designated domain.
          </p>
          <p className="bg-rose-50 text-rose-950 dark:bg-rose-950/20 dark:text-rose-400 p-3 rounded-lg text-xs font-medium border border-rose-100 dark:border-rose-950/40">
            <strong>Domain Transfer Notice:</strong> Domain transfer keys can be formally requested for migration. Transfers require full settlement of any pending service dues alongside a standard one-time admin process transfer payment fee.
          </p>
        </div>
      )
    },
    {
      id: 'data-accuracy',
      num: 12,
      title: 'Data Accuracy Disclaimer',
      icon: HelpCircle,
      category: 'liability',
      content: (
        <div className="space-y-3">
          <p>
            All developed spreadsheet templates, calculation loops, PDF reports, inventory sheets, and visual dashboards function purely around the datasets entered by the client.
          </p>
          <div className="flex gap-3 bg-red-500/5 border border-red-500/10 p-3 rounded-lg text-xs leading-relaxed">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Suraj Automation</strong> absolutely disclaims guarantees or operational compliance warranties regarding final ledger records, local tax filings, exact cargo values, or business analytics balances if the primary entry system contains broken rows, false values, or duplicate records. Double-checking accounting sheets before strategic decisions remains a user obligation.
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'data-backup',
      num: 13,
      title: 'Data Backup & Security',
      icon: ShieldAlert,
      category: 'liability',
      content: (
        <div className="space-y-3 text-sm">
          <p>
            We implement industry-standard database sanitization models, stable API parameters, security keys, and safe server architectures. However, we cannot guarantee total immunity from:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs italic text-slate-500 font-medium">
            <p>• External platform hack events</p>
            <p>• Unforeseen network compromises</p>
            <p>• Google Sheets security credential loss</p>
            <p>• Unauthorized user data deletion</p>
          </div>
          <p className="text-xs bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
            Clients hold final operational obligation to periodically run secondary hard drive sheet backups or download database states across critical records to avoid localized software failures.
          </p>
        </div>
      )
    },
    {
      id: 'limitation-liability',
      num: 14,
      title: 'Limitation of Liability',
      icon: Scale,
      category: 'liability',
      content: (
        <div className="space-y-3 text-sm leading-relaxed">
          <p>
            To the maximum limit authorized under Indian business laws, <strong>Suraj Automation</strong> and its developer assets shall hold no operational liability for any lost revenues, profit shortfalls, missing spreadsheet files, operational interruptions, meta messaging fees, or system outages resulting from temporary software downtimes, script API disruptions, or maintenance delays.
          </p>
          <p className="bg-indigo-50/50 dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900 p-3.5 rounded-lg font-bold text-slate-900 dark:text-slate-100 text-xs">
            Our maximum accumulated liability for any claim in contract, tort, or legal negligence shall never exceed the total payments cleared by you during the preceding three (3) calendar months of project engagement.
          </p>
        </div>
      )
    },
    {
      id: 'project-delivery',
      num: 15,
      title: 'Project Delivery & Revisions',
      icon: RefreshCw,
      category: 'services',
      content: (
        <div className="space-y-2 text-sm">
          <p>
            We structure our delivery dates around milestones to maintain efficient turnarounds:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400">
            <li>Review cycles and corrections are bounded by the exact scope values structured inside the active proposal pricing agreement.</li>
            <li>Extra custom iterations, custom redesigns, or layout edits outside the frozen proposal specifications will be billed separately.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'cancellation-policy',
      num: 16,
      title: 'Cancellation Policy',
      icon: XCircle,
      category: 'financial',
      content: (
        <div className="space-y-3">
          <p>
            We provide direct, simple policies for ending services. Written email communication is required:
          </p>
          <div className="space-y-2 text-xs text-slate-600 dark:text-slate-350">
            <p>
              1. Written client cancellation notifications must be shared via official email channels. Simple verbal notes will not be tracked.
            </p>
            <p>
              2. Cancellations do not dismiss pending invoice obligations, active lock-in structures, or previously approved development block payments.
            </p>
            <p>
              3. Strictly no refund structures can be provided for completed project scopes, locked platform fees, or active domain purchases.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'refund-policy',
      num: 17,
      title: 'Refund Policy',
      icon: RefreshCw,
      category: 'financial',
      content: (
        <div className="space-y-3">
          <p>
            Refund parameters are governed by the digitised and custom delivery structure of our deliverables:
          </p>
          <p className="text-sm border-l-4 border-indigo-500 pl-3 italic text-slate-500">
            "Due to the digital nature of the product and implementation effort involved, payments are generally non-refundable once project setup and deployment have started. Any refund requests before project initiation will be reviewed on a case-by-case basis."
          </p>
        </div>
      )
    },
    {
      id: 'refusal-service',
      num: 18,
      title: 'Refusal or Termination of Service',
      icon: Ban,
      category: 'general',
      content: (
        <div className="space-y-2 text-sm text-slate-650 dark:text-slate-350">
          <p>
            We stand for lawful and moral business systems. We reserve the absolute legal authority to immediately suspend or permanently close active services, databases, or systems if they are discovered to be hosting, managing, or participating in:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-rose-600 dark:text-rose-450 mt-2">
            <p>• Unlawful or illegal tasks</p>
            <p>• Spamming and cyber phishing schemes</p>
            <p>• Hate discourse and harassment</p>
            <p>• Unlicensed trademark distributions</p>
            <p>• Defrauding customers or fake portals</p>
            <p>• Violations of the Information Technology Act of India</p>
          </div>
        </div>
      )
    },
    {
      id: 'changes-to-terms',
      num: 19,
      title: 'Changes to Terms',
      icon: Hourglass,
      category: 'general',
      content: (
        <p className="text-sm">
          We reserve the right to review, update, or edit these Terms and Conditions document components as our service features expand. New details and terms will gain immediate legal standing upon being updated and posted live on the Suraj Automation terms channel. Your continued partnership confirms active model acceptance of updated clauses.
        </p>
      )
    },
    {
      id: 'governing-law',
      num: 20,
      title: 'Governing Law',
      icon: Scale,
      category: 'general',
      content: (
        <div className="space-y-2 text-sm">
          <p>
            These Terms of Service and partner policies are entirely evaluated and governed under the active statutory laws of the <strong>Republic of India</strong>.
          </p>
          <p>
            Any disputes or contractual resolutions shall remain subject to the absolute territorial jurisdiction of the local courts located in <strong>Gurugram, Haryana, India</strong>.
          </p>
        </div>
      )
    },
    {
      id: 'contact-info',
      num: 21,
      title: 'Contact Information',
      icon: Mail,
      category: 'general',
      content: (
        <div className="space-y-4">
          <p className="text-sm">
            For queries about our plans, pending billing cycles, custom source code rules, or automation projects, contact the office of <strong>Suraj Automation</strong>:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 mt-2">
            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-450 block font-medium">Email Address</span>
                <a href="mailto:suraj.gasdeveloper@gmail.com" className="text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  suraj.gasdeveloper@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-805">
              <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Phone className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="text-xs text-slate-450 block font-medium">WhatsApp / Call</span>
                <a href="https://wa.me/918851666208" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors flex items-center gap-1">
                  +91 88516 66208 <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-450 block font-medium">Website Address</span>
                <a href="https://www.surajautomation.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1">
                  surajautomation.com <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-650 dark:text-slate-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-450 block font-medium">Office Jurisdiction</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  Gurugram, HR, India
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-xs text-slate-400 text-center pt-2 font-mono">
            Business Hours: Mon – Sat, 10:00 AM – 7:00 PM IST
          </div>
        </div>
      )
    }
  ];

  const filteredTerms = terms.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', title: 'All Terms' },
    { id: 'services', title: 'Services & Support' },
    { id: 'financial', title: 'Billing & Plans' },
    { id: 'ownership', title: 'Data & IP' },
    { id: 'liability', title: 'Disclaimers' },
    { id: 'general', title: 'General & Jurisdiction' }
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
      <Link to="/" className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 mb-8 transition-colors bg-indigo-50 dark:bg-indigo-950/20 px-4 py-2 rounded-xl">
        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
      </Link>
      
      {/* Visual Title Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 rounded-3xl p-8 md:p-12 text-white shadow-2xl mb-12 border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 uppercase tracking-wider mb-6">
            <FileText className="w-3.5 h-3.5" /> Legal Framework
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Terms and Conditions
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
            Welcome to Suraj Automation. By purchasing, subscribing to, or using our website templates, spreadsheet automation tools, dashboards, Google Apps Script, or consultation systems, you agree to these clear and professional service rules.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-450 border-t border-slate-850 pt-4">
            <div>
              <span className="font-semibold text-slate-350">Last Updated:</span> June 4, 2026
            </div>
            <span className="hidden sm:inline text-slate-705">•</span>
            <div>
              <span className="font-semibold text-slate-350">Company:</span> Suraj Automation (Gurugram, India)
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
              placeholder="Search sections (e.g. Refund, Lock-in, IP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-550 transition-all font-medium text-slate-800 dark:text-slate-200"
            />
          </div>

          {/* Categories Horizontal Selector */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-start lg:justify-end overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/10' 
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
              {filteredTerms.map((item) => {
                const IconComp = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScroll(item.id)}
                      className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-450 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-indigo-650 dark:hover:text-indigo-400 transition-all flex items-center gap-2.5 group"
                    >
                      <span className="w-5 h-5 flex-shrink-0 rounded-md bg-slate-100 dark:bg-slate-850 text-slate-800 dark:text-slate-350 text-[10px] font-black flex items-center justify-center group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/40 group-hover:text-indigo-600 transition-colors">
                        {item.num}
                      </span>
                      <span className="truncate">{item.title}</span>
                    </button>
                  </li>
                );
              })}
              {filteredTerms.length === 0 && (
                <li className="text-xs italic text-slate-400">No matching sections found</li>
              )}
            </ul>
          </div>
        </div>

        {/* Main Content cards column */}
        <div className="col-span-4 lg:col-span-3 space-y-8">
          
          {filteredTerms.map((item) => {
            const IconComp = item.icon;
            return (
              <motion.section 
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-150 dark:border-slate-850 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-slate-205 dark:hover:border-slate-805 transition-all duration-300 relative group"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-indigo-600 transition-colors duration-300 rounded-t-2xl"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 flex-shrink-0 bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center font-bold">
                      <IconComp className="w-5 h-5 animate-pulse-slow" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-black tracking-widest text-indigo-500/90 dark:text-indigo-400/80 bg-indigo-50/70 dark:bg-indigo-955/20 px-2 py-0.5 rounded-md border border-indigo-100/50 dark:border-indigo-950/30">
                          Section {item.num}
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-450">
                          • {item.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-450 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="text-slate-700 dark:text-slate-300 leading-relaxed font-normal text-sm md:text-base space-y-4">
                  {item.content}
                </div>
              </motion.section>
            );
          })}

          {filteredTerms.length === 0 && (
            <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-150 dark:border-slate-800">
              <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                No matching terms found
              </h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto px-4">
                We couldn't find any terms matching "{searchQuery}" under the selected category. Try searching with other parameters or switching categories.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-6 px-4 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Quick Disclaimer Footer */}
          <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-150 dark:border-slate-800 rounded-3xl p-6 text-xs text-slate-500 space-y-2">
            <p className="font-semibold text-slate-700 dark:text-slate-350 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Terms Affirmation Acknowledgement
            </p>
            <p>
              By accessing any scripts, customized dashboards, spreadsheet automations, APIs, or subscribing to our monthly web hosting updates, you affirm that you have read, understood, and consented to comply fully with these provisions. For custom projects with separate master services agreements, those secondary contracts retain executive precedence.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
