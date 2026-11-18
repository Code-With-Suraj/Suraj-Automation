import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MessageSquare,
  Phone,
  ShieldCheck,
  AlertTriangle,
  Layers,
} from 'lucide-react';
import { getServicePageBySlug, SERVICE_PAGES } from '../data/servicePagesData';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/content';
import { useSEO } from '../hooks/useSEO';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';

export default function ServiceLandingPage() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = getServicePageBySlug(serviceSlug);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  useSEO(
    service ? service.seoTitle : 'Services | Suraj Automation',
    service
      ? service.metaDescription
      : 'Business automation and custom software development services for Indian SMBs.',
    service ? service.keywords : '',
    undefined,
    undefined,
    service
      ? {
          canonicalPath: `/services/${service.slug}`,
          breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.navTitle, path: `/services/${service.slug}` },
          ],
          service: {
            name: service.primaryKeyword,
            serviceType: service.serviceType,
            description: service.metaDescription,
            url: `https://surajdx.com/services/${service.slug}`,
          },
          faqs: service.faqs,
        }
      : undefined
  );

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = SERVICE_PAGES.filter((s) => s.slug !== service.slug);

  return (
    <main className="pt-20 bg-white text-slate-900">
      {/* 1. Hero Section */}
      <section className="bg-[#0B1528] text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb theme="dark" />

          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">
              {service.eyebrow}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] mb-6">
              {service.h1}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-8">
              {service.heroSummary}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <a
                href={getWhatsAppUrl(service.whatsappPrefill)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base rounded-lg transition-colors min-h-[48px] whitespace-nowrap"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>{service.primaryCtaLabel}</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 font-semibold text-sm sm:text-base rounded-lg transition-colors min-h-[48px] whitespace-nowrap"
              >
                <span>Request a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-5 border-t border-slate-800/90 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-300 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                100% Data Ownership in Your Account
              </span>
              <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Fixed-Quote Pricing · No Per-User Tax
              </span>
              <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                Noida-Based · Serving Pan-India
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Authoritative Explanation & Problem vs Solution */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Operational Overview
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {service.introHeading}
              </h2>
              {service.introParagraphs.map((para, idx) => (
                <p key={idx} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {para}
                </p>
              ))}

              <div className="pt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Ideal For
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {service.idealFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-4">
                Bottlenecks We Eliminate
              </h2>
              {service.problemSolutions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 p-6 space-y-3"
                >
                  <div className="flex items-start gap-2.5 text-sm font-semibold text-amber-900 bg-amber-50 border border-amber-200/80 rounded-lg p-3">
                    <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>{item.problem}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
                    <span>{item.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities & Technical Architecture */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
              Engineering Scope
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {service.capabilitiesHeading}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {service.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {cap.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Strip */}
          <div className="p-6 rounded-xl bg-[#0B1528] text-white border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Technologies & Standards Used</span>
              </h3>
              <p className="text-sm text-slate-300">
                {service.techStack.join(' · ')}
              </p>
            </div>
            <a
              href={getWhatsAppUrl(service.whatsappPrefill)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Your Architecture</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Contextual Internal Links (Related Solutions & Guides) */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
              Related Solutions &amp; Resources
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Explore Pre-Built Systems, Pricing &amp; Technical Guides
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {service.relatedLinks.map((linkItem) => (
              <Link
                key={linkItem.to}
                to={linkItem.to}
                className="group bg-white p-5 rounded-xl border border-slate-200 hover:border-emerald-600 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 mb-2">
                    {linkItem.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {linkItem.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          {/* Explore Other Specialized Services */}
          <div className="pt-8 border-t border-slate-200">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
              Other Automation &amp; Software Services
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  to={`/services/${other.slug}`}
                  className="px-4 py-2 rounded-lg bg-white border border-slate-200 hover:border-emerald-600 text-xs sm:text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
                >
                  {other.navTitle}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Service-Specific FAQs (Synced with FAQPage JSON-LD) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200" id="service-faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
              Frequently Asked Questions
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Common Questions About {service.navTitle}
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full px-5 py-4 text-left font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-100/70 transition-colors cursor-pointer min-h-[52px]"
                  >
                    <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-700' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 border-t border-slate-200 bg-white text-sm sm:text-base text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2">
            <span>Direct WhatsApp &amp; Phone: {SITE_CONFIG.founder.phoneDisplay}</span>
            <span>Email: {SITE_CONFIG.founder.email}</span>
          </div>
        </div>
      </section>

      {/* 6. Consultation Form & Final Conversion */}
      <FinalCTA />
    </main>
  );
}
