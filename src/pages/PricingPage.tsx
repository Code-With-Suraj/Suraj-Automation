import PricingSection from '../components/PricingSection';
import SecurityOwnership from '../components/SecurityOwnership';
import FaqSection from '../components/FaqSection';
import FinalCTA from '../components/FinalCTA';
import { useSEO } from '../hooks/useSEO';

export default function PricingPage() {
  useSEO(
    'Affordable Custom Software Pricing | Suraj Automation',
    'View transparent pricing tiers for ready Sarthi tools, custom Google Apps Script software development, WhatsApp automation, and managed websites in India.',
    'Affordable Custom Software Development, Affordable Business Software Development, Google Apps Script Development Services pricing, Custom Software India cost',
    undefined,
    undefined,
    {
      canonicalPath: '/pricing',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Pricing', path: '/pricing' },
      ],
    }
  );

  return (
    <main className="pt-20">
      <div className="bg-[#0B1528] text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            Pricing &amp; Engagement Terms
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Fixed-quote transparency. Zero per-user software tax.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Know exactly what is included, what third-party costs are separate, and how payment milestones work before you commit a single rupee.
          </p>
        </div>
      </div>
      <PricingSection />
      <SecurityOwnership />
      <FaqSection />
      <FinalCTA />
    </main>
  );
}
