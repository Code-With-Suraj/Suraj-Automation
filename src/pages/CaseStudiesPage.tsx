import CaseStudies from '../components/CaseStudies';
import WhyChooseUs from '../components/WhyChooseUs';
import FinalCTA from '../components/FinalCTA';
import { useSEO } from '../hooks/useSEO';

export default function CaseStudiesPage() {
  useSEO(
    'Custom Software & ERP Case Studies | Suraj Automation',
    'See how Suraj Automation builds custom Google Sheets ERPs, catering COGS dashboards, and multi-site reconciliation web apps for Indian SMBs without lock-in.',
    'Custom ERP Solutions for Small Businesses, Google Sheets ERP Development, COGS Analytics Dashboard, CFO Dashboard Development, Suraj Automation Case Studies',
    undefined,
    undefined,
    {
      canonicalPath: '/case-studies',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Case Studies', path: '/case-studies' },
      ],
    }
  );

  return (
    <main className="pt-20">
      <div className="bg-[#0B1528] text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            Case Studies &amp; Custom Engineering
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Real operational problems solved without heavy ERPs.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Every custom project below follows our standard isolated-sheet architecture — built around how your floor team actually works.
          </p>
        </div>
      </div>
      <CaseStudies />
      <WhyChooseUs />
      <FinalCTA />
    </main>
  );
}
