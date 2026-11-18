import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, MessageSquare, Image as ImageIcon, Check } from 'lucide-react';
import {
  PRODUCTS_CATALOG,
  IndustryCategory,
  getWhatsAppUrl,
} from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';

const CATEGORIES: IndustryCategory[] = [
  'All',
  'Recovery & Finance',
  'Supply & Distribution',
  'Retail & F&B',
  'Operations & Staff',
];

export default function ProductsSection() {
  const { lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<IndustryCategory>('All');
  const [showAll, setShowAll] = useState(false);

  const filtered =
    selectedCategory === 'All'
      ? PRODUCTS_CATALOG
      : PRODUCTS_CATALOG.filter((p) => p.category === selectedCategory);

  const visibleProducts = showAll || selectedCategory !== 'All' ? filtered : filtered.slice(0, 6);

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
            {lang === 'hinglish' ? 'Portfolio · Google Sheets + Apps Script Systems' : 'Product Portfolio · Google Sheets + Apps Script'}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === 'hinglish'
              ? 'Alag-alag business ke liye ready & customizable Sarthi systems.'
              : 'Purpose-built Sarthi systems tailored to Indian SMB workflows.'}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {lang === 'hinglish'
              ? 'Har system ek hi clean architecture par chalta hai: client ka apna isolated Google Sheet, Apps Script deployment, Script Properties me API keys, LockService safety, aur Gupshup WhatsApp API support.'
              : 'Every product runs on one proven architecture: per-client isolated Google Sheet, Apps Script deployment, secrets only in Script Properties, LockService concurrency safety, and WhatsApp Business API via Gupshup.'}
          </p>
        </div>

        {/* Industry Filter Bar (Interactive Buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-10" role="tablist" aria-label="Filter products by industry">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[40px] ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProducts.map((product) => {
            const isInternalDemo = product.demoLink.startsWith('/');
            const isPlaceholderDemo = product.demoLink.startsWith('[');

            return (
              <article
                key={product.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  {/* Explicit [SCREENSHOT] Placeholder Frame */}
                  <div className="aspect-[16/9] bg-slate-100 border-b border-slate-200 flex flex-col items-center justify-center p-4 text-center">
                    <ImageIcon className="w-6 h-6 text-slate-400 mb-2" />
                    <span className="font-mono text-[11px] text-slate-600 font-medium leading-snug">
                      {product.screenshotPlaceholder}
                    </span>
                  </div>

                  <div className="p-6">
                    {/* Clean Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-2">
                      <span className="text-emerald-700 font-semibold">{product.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{product.forWho[lang]}</span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                      {product.name}{' '}
                      {product.altName && (
                        <span className="text-sm font-medium text-slate-500">
                          ({product.altName})
                        </span>
                      )}
                    </h3>

                    <p className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200/70 rounded-md px-3 py-2 mb-3">
                      {lang === 'hinglish' ? 'Problem: ' : 'Solves: '}
                      {product.problemSolved[lang]}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {product.oneLiner[lang]}
                    </p>

                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {product.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{feat[lang]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center gap-2.5">
                  {isInternalDemo ? (
                    <Link
                      to={product.demoLink}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 text-xs font-bold rounded-lg transition-colors whitespace-nowrap min-h-[40px]"
                    >
                      <span>{lang === 'hinglish' ? 'Demo dekho' : 'View demo'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <Link
                      to={`/products/${product.slug}`}
                      title={isPlaceholderDemo ? product.demoLink : 'View system details'}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 text-xs font-bold rounded-lg transition-colors whitespace-nowrap min-h-[40px]"
                    >
                      <span>{lang === 'hinglish' ? 'Demo dekho' : 'View demo'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  )}

                  <a
                    href={getWhatsAppUrl(product.whatsappQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap min-h-[40px]"
                  >
                    <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                    <span>{lang === 'hinglish' ? 'WhatsApp baat karo' : 'WhatsApp'}</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Show All / Explore Full Catalog */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {selectedCategory === 'All' && filtered.length > 6 && (
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-semibold text-sm rounded-lg transition-colors cursor-pointer min-h-[44px]"
            >
              {showAll
                ? lang === 'hinglish'
                  ? 'Kam systems dikhayein'
                  : 'Show fewer systems'
                : lang === 'hinglish'
                  ? `Sabhi ${PRODUCTS_CATALOG.length} systems dekhein`
                  : `Show all ${PRODUCTS_CATALOG.length} systems`}
            </button>
          )}
          <Link
            to="/products"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-lg transition-colors min-h-[44px] inline-flex items-center"
          >
            {lang === 'hinglish' ? 'Full Catalog Page Kholo' : 'Open Full Catalog'}
          </Link>
        </div>
      </div>
    </section>
  );
}
