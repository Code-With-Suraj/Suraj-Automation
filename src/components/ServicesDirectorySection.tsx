import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import { SERVICE_PAGES } from '../data/servicePagesData';

interface ServicesDirectorySectionProps {
  compact?: boolean;
}

export default function ServicesDirectorySection({ compact = false }: ServicesDirectorySectionProps) {
  return (
    <section
      id="automation-services"
      className={`${compact ? 'py-12' : 'py-16 lg:py-24'} bg-white border-b border-slate-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
            <Layers className="w-3.5 h-3.5" />
            Core Automation &amp; Software Services
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Dedicated Solutions Built Around How Your Business Operates
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Suraj Automation helps Indian businesses eliminate manual work through affordable custom software, business automation, Google Apps Script web applications, AI integrations, and intelligent reporting solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICE_PAGES.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group p-6 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-emerald-600 transition-all flex flex-col justify-between shadow-2xs hover:shadow-md"
            >
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-2">
                  {service.eyebrow}
                </p>
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2 leading-snug">
                  {service.primaryKeyword}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {service.heroSummary}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-emerald-700 pt-3 border-t border-slate-200/70">
                <span>Explore service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
