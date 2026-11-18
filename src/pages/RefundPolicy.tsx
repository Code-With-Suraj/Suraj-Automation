import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { useSEO } from '../hooks/useSEO';

export default function RefundPolicy() {
  useSEO(
    'Refund & Data Ownership Policy | Suraj Automation',
    'Clear refund rules, cancellation terms, and 100% Google Drive client data ownership and zero lock-in exit policy for Suraj Automation projects in India.',
    'refund policy, cancellation policy, data ownership, suraj automation',
    undefined,
    undefined,
    { canonicalPath: '/refund-policy' }
  );

  return (
    <main className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 flex items-start gap-3 mb-8 text-xs sm:text-sm text-amber-900">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong>Draft Notice:</strong> These policy pages are structured drafts aligned with Indian IT Rules and basic Digital Personal Data Protection (DPDP) Act principles. Please have them reviewed by a qualified legal professional before commercial scale-up.
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
          Refund, Cancellation &amp; Data Ownership Policy
        </h1>
        <p className="text-sm text-slate-500 font-mono mb-10">
          Entity: {SITE_CONFIG.legal.legalName} · Domain: {SITE_CONFIG.domain}
        </p>

        <div className="space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          <section className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Pre-Start Consultation &amp; Scope Sign-Off</h2>
            <p>
              Before collecting any project advance, we walk through a live demo and share a written scope of work covering features, timeline, and third-party exclusions. This ensures both sides agree on deliverables before work starts.
            </p>
          </section>

          <section className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Cancellation &amp; Refund Rules</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Before work begins:</strong> If you cancel a custom project in writing via email ({SITE_CONFIG.founder.email}) before development kickoff or template access is granted, the advance is eligible for a full refund minus any verified payment gateway charges.
              </li>
              <li>
                <strong>After custom development begins:</strong> Refunds are pro-rated only for unstarted milestones. Work already completed and demonstrated on your staging Sheet is non-refundable.
              </li>
              <li>
                <strong>Ready-to-copy templates / digital products:</strong> Because Google Sheet copies and Apps Script code cannot be "returned" once accessed, template purchases are non-refundable after template access is unlocked, except where a core documented feature fails and cannot be fixed within 7 working days.
              </li>
              <li>
                <strong>Third-party fees:</strong> Domain registrations, hosting renewals, and WhatsApp Business API (Gupshup/Meta) wallet top-ups are paid to third parties and are strictly non-refundable.
              </li>
            </ul>
          </section>

          <section id="data-ownership" className="p-6 rounded-xl bg-emerald-50 border border-emerald-200">
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Data Ownership &amp; Exit Policy</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-800">
              <li>
                <strong>100% Client Ownership:</strong> All business records — customer lists, orders, invoices, ledgers, inventory logs, and employee data — stay inside your own Google Drive / Google Workspace account.
              </li>
              <li>
                <strong>Zero Lock-In:</strong> If you stop using our support or custom services, we do not lock or delete your spreadsheet data. You can export everything in standard `.xlsx` or `.csv` format at any time.
              </li>
              <li>
                <strong>Access Revocation:</strong> Upon project completion and final payment, any temporary developer access granted to Suraj Singh is revoked at your request, leaving full administrative control with you.
              </li>
            </ul>
          </section>

          <section className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. How to Request Cancellation or Data Deletion</h2>
            <p>
              Send an email from your registered address to{' '}
              <a href={`mailto:${SITE_CONFIG.founder.email}`} className="font-semibold text-emerald-700 underline">
                {SITE_CONFIG.founder.email}
              </a>{' '}
              or message on WhatsApp ({SITE_CONFIG.founder.phoneDisplay}). Approved refunds are processed back to the original payment method within 7–10 business days.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
