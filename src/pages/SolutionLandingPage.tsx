import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  AlertTriangle,
  ExternalLink,
  Phone
} from 'lucide-react';
import { SolutionPageData } from '../data/solutionPagesData';
import { PRODUCT_SOLUTIONS } from '../data/productSolutions';
import { useSEO } from '../hooks/useSEO';
import Breadcrumb from '../components/Breadcrumb';

interface SolutionLandingPageProps {
  pageData: SolutionPageData;
}

export default function SolutionLandingPage({ pageData }: SolutionLandingPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    ...(pageData.routePath.startsWith('/services/')
      ? [{ name: 'Services', path: '/services' }]
      : []),
    { name: pageData.shortLabel, path: pageData.routePath }
  ];

  useSEO(
    pageData.seoTitle,
    pageData.metaDescription,
    [pageData.primaryKeyword, ...pageData.secondaryKeywords].join(', '),
    undefined,
    undefined,
    {
      breadcrumbs,
      faqs: pageData.faqs,
      serviceInfo: {
        name: pageData.shortLabel,
        description: pageData.metaDescription,
        serviceType: pageData.serviceType,
        url: `https://surajdx.com${pageData.routePath}`
      }
    }
  );

  const whatsappUrl = `https://wa.me/919355337839?text=${encodeURIComponent(pageData.whatsappText)}`;

  const matchedProducts = pageData.relatedProductIds
    .map((id) => PRODUCT_SOLUTIONS[id])
    .filter(Boolean);

  return (
    <main className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative py-14 lg:py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 z-0" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb
            theme="dark"
            items={[
              ...(pageData.routePath.startsWith('/services/')
                ? [{ label: 'Services', to: '/services' }]
                : []),
              { label: pageData.shortLabel }
            ]}
          />

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{pageData.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {pageData.h1}
            </h1>

            <p className="text-lg sm:text-xl text-cyan-300 font-bold">
              {pageData.heroSubheadline}
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {pageData.heroSummary}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm sm:text-base flex items-center gap-2.5 shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Book Free Workflow Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+919355337839"
                className="px-6 py-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-200 font-bold text-sm sm:text-base inline-flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call +91-9355337839</span>
              </a>

              <Link
                to="/contact"
                className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm sm:text-base transition-all"
              >
                Request Custom Quote
              </Link>
            </div>

            <div className="pt-4 flex items-center gap-2 text-xs sm:text-sm text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{pageData.startingNote}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Challenges Solved */}
      <section className="py-16 lg:py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-xs font-black uppercase tracking-widest text-rose-600 dark:text-rose-400 mb-2">
              Operational Bottlenecks We Eliminate
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why Businesses Replace Manual Processes With {pageData.shortLabel}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pageData.painPoints.map((pain, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {pain.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pain.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What We Build (Core Solutions) */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
              Engineering Capabilities
            </h2>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What Suraj Automation Builds for Your Team
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pageData.solutions.map((sol, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-500/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50">
                    {sol.tag}
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
                  {sol.title}
                </h4>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {sol.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Practical Workflow Transformations */}
      <section className="py-16 lg:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-2">
              Real-World Workflows
            </h2>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Before vs. After Automation Architecture
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pageData.workflows.map((wf, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800 space-y-5"
              >
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                    {wf.industry}
                  </span>
                  <h4 className="text-xl font-bold text-white">{wf.title}</h4>
                </div>
                <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-900/50 text-xs sm:text-sm text-rose-200">
                  <strong className="text-rose-400 uppercase tracking-wider block mb-1">
                    Before Manual Fix
                  </strong>
                  {wf.before}
                </div>
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-900/50 text-xs sm:text-sm text-emerald-200">
                  <strong className="text-emerald-400 uppercase tracking-wider block mb-1">
                    After Automated System
                  </strong>
                  {wf.after}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Strip */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-800/60 border border-slate-700/70">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Technologies & APIs Used</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {pageData.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Optional Regional Coverage Block (Noida & Delhi NCR) */}
      {pageData.locationCoverage && (
        <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
                <MapPin className="w-4 h-4" />
                <span>Regional Service Coverage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
                {pageData.locationCoverage.headline}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                {pageData.locationCoverage.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageData.locationCoverage.areas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
                >
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">
                    {area.city}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {area.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Related Sarthi Software Systems & Internal Links */}
      {matchedProducts.length > 0 && (
        <section className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
                  Ready-to-Deploy Sarthi Software
                </h2>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Pre-Built Systems Related to {pageData.shortLabel}
                </h3>
              </div>
              <Link
                to="/products"
                className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
              >
                Explore All Sarthi Systems
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {matchedProducts.map((prod) => (
                <Link
                  key={prod.id}
                  to={`/products/${prod.id}`}
                  className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/60 transition-all flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1">
                      {prod.category}
                    </span>
                    <h4 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {prod.name}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
                      {prod.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-900 dark:text-white">{prod.price}</span>
                    <span className="text-indigo-600 dark:text-indigo-400 inline-flex items-center gap-1">
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Related Services Strip */}
            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                Related Automation & Software Services
              </p>
              <div className="flex flex-wrap gap-3">
                {pageData.relatedServicePaths.map((rel) => (
                  <Link
                    key={rel.path}
                    to={rel.path}
                    className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{rel.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. FAQ Section */}
      <section className="py-16 lg:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
              Common Questions About {pageData.shortLabel}
            </h2>
          </div>

          <div className="space-y-4">
            {pageData.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 shrink-0 text-indigo-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 shrink-0 text-slate-400" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-200/70 dark:border-slate-800 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Bottom Conversion CTA */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-950 to-slate-900 rounded-[2rem] p-8 sm:p-12 text-center text-white shadow-xl border border-slate-800">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">{pageData.ctaTitle}</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
            {pageData.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="tel:+919355337839"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Call +91-9355337839</span>
            </a>
            <Link
              to="/roi-tool"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2 transition-all"
            >
              <span>Estimate Your ROI</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
