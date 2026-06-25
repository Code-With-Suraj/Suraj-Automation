import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { PRODUCT_SOLUTIONS } from '../data/productSolutions';

interface BreadcrumbProps {
  theme?: 'light' | 'dark';
}

export default function Breadcrumb({ theme = 'dark' }: BreadcrumbProps) {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Helper to format names nicely for human users and SEO
  const getPageName = (slug: string) => {
    if (PRODUCT_SOLUTIONS[slug]) {
      return PRODUCT_SOLUTIONS[slug].name;
    }
    // Fallback: capitalize first letter and replace hyphens with spaces
    return slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const isDark = theme === 'dark';

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`mb-6 sm:mb-8 flex flex-wrap items-center text-xs sm:text-sm font-semibold tracking-wide ${
        isDark ? 'text-slate-400' : 'text-slate-500'
      }`}
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2 flex-wrap">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className={`inline-flex items-center gap-1.5 transition-colors ${
              isDark ? 'hover:text-teal-400 text-slate-300' : 'hover:text-indigo-600 text-slate-700'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const label = getPageName(value);

          return (
            <li key={to} className="inline-flex items-center">
              <ChevronRight className={`w-3.5 h-3.5 mx-1 flex-shrink-0 ${isDark ? 'text-slate-600' : 'text-slate-300'}`} />
              {isLast ? (
                <span 
                  aria-current="page"
                  className={`font-bold tracking-tight truncate max-w-[200px] sm:max-w-xs ${
                    isDark ? 'text-teal-400' : 'text-indigo-600'
                  }`}
                >
                  {label}
                </span>
              ) : (
                <Link
                  to={to}
                  className={`transition-colors ${
                    isDark ? 'hover:text-teal-400 text-slate-300' : 'hover:text-indigo-600 text-slate-700'
                  }`}
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
