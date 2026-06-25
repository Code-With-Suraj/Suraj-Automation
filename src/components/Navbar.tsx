import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, Sparkles, ChevronDown, Tag, FileSpreadsheet, BarChart3, Workflow, MonitorSmartphone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';
import { useUser } from '../contexts/UserContext';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isAdmin } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileOffersOpen, setIsMobileOffersOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleDark } = useDarkMode();

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | number | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current as number);
    }
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 250);
  };

  // Clean up timers on unmount or route change
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current as number);
      }
    };
  }, [location]);

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Dynamic classes for transparent vs scrolled states
  // Home page has a dark hero, so text should be white when transparent
  const navBgClass = isScrolled 
    ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm border-b border-slate-200/50 dark:border-slate-800/50' 
    : 'bg-transparent';
    
  const textClass = (!isScrolled && isHome) 
    ? 'text-white/90 hover:text-white text-sm xl:text-base whitespace-nowrap' 
    : 'text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 text-sm xl:text-base whitespace-nowrap';
    
  const brandClass = (!isScrolled && isHome)
    ? 'text-white'
    : 'text-slate-900 dark:text-white';
    
  const activeClass = (!isScrolled && isHome)
    ? 'text-white font-semibold text-sm xl:text-base whitespace-nowrap'
    : 'text-indigo-600 dark:text-indigo-400 font-semibold text-sm xl:text-base whitespace-nowrap';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group mr-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-[0_4px_12px_rgba(79,70,229,0.3)] group-hover:scale-105 transition-transform">
              SA
            </div>
            <span className={`font-extrabold text-xl hidden sm:block tracking-tight transition-colors ${brandClass}`}>Suraj Automation</span>
          </Link>
          
          <div className="hidden lg:flex flex-1 justify-end items-center space-x-3 xl:space-x-6">
            <Link to="/" className={`font-medium transition-colors ${location.pathname === '/' ? activeClass : textClass}`}>Home</Link>
            <Link to="/products" className={`font-medium transition-colors ${location.pathname.startsWith('/products') ? activeClass : textClass}`}>Products</Link>
            
            {/* Services & Offers Dropdown */}
            <div 
              className="relative self-stretch flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`font-medium transition-colors ${location.pathname.startsWith('/services') || location.pathname.startsWith('/offers') ? activeClass : textClass} flex items-center gap-1 cursor-pointer h-full border-none bg-transparent`}
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                id="btn-navbar-services-dropdown"
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-250 ${isServicesDropdownOpen ? 'rotate-180 text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`} />
              </button>
              
              {isServicesDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-16 w-80 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-xl py-3 z-50 transform origin-top transition-all duration-200">
                  <div className="px-4 pb-2 border-b border-slate-100 dark:border-slate-800/80 mb-2 flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Special Offers & Plans</span>
                    <Link to="/offers" onClick={() => setIsServicesDropdownOpen(false)} className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline">View All</Link>
                  </div>
                  <div className="space-y-0.5">
                    <Link 
                      to="/offers/google-sheets-automation" 
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                      id="dropdown-link-sheets"
                    >
                      <div className="p-1.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg shrink-0">
                        <FileSpreadsheet className="w-4 h-4" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="text-xs font-bold text-slate-900 dark:text-white truncate">Google Sheets Automation</p>
                        <p className="text-[10px] text-slate-500 font-semibold truncate">Starting at ₹1,499</p>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/offers/custom-excel-dashboard-mis" 
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                      id="dropdown-link-excel"
                    >
                      <div className="p-1.5 bg-indigo-50 dark:bg-indigo-505/10 text-indigo-650 dark:text-indigo-405 rounded-lg shrink-0">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="text-xs font-bold text-slate-900 dark:text-white truncate">Custom Excel Dashboard</p>
                        <p className="text-[10px] text-slate-500 font-semibold truncate">Starting at ₹1,999</p>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/offers/google-apps-script-automation" 
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                      id="dropdown-link-appsscript"
                    >
                      <div className="p-1.5 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-450 rounded-lg shrink-0">
                        <Workflow className="w-4 h-4" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="text-xs font-bold text-slate-900 dark:text-white truncate">Google Apps Script</p>
                        <p className="text-[10px] text-slate-500 font-semibold truncate">Starting at ₹2,999</p>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/offers/custom-web-app" 
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                      id="dropdown-link-webapp"
                    >
                      <div className="p-1.5 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-450 rounded-lg shrink-0">
                        <MonitorSmartphone className="w-4 h-4" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="text-xs font-bold text-slate-900 dark:text-white truncate">Custom Web App & Website</p>
                        <p className="text-[10px] text-slate-500 font-semibold truncate">Starting at ₹3,999</p>
                      </div>
                    </Link>
                  </div>
                  <div className="border-t border-slate-100 dark:border-slate-800/80 mt-2 pt-2 px-4 flex justify-between items-center gap-2">
                    <Link 
                      to="/services" 
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="text-[10px] font-bold text-slate-650 dark:text-slate-350 hover:text-indigo-650 dark:hover:text-indigo-400"
                    >
                      Core Plans Page
                    </Link>
                    <Link 
                      to="/offers" 
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      All Dynamic Offers
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/roi-tool" className={`font-medium transition-colors ${location.pathname === '/roi-tool' ? activeClass : textClass} flex items-center gap-0.5 xl:gap-1`}>
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0 fill-amber-500/20" />
              ROI & AI Match
            </Link>
            <Link to="/about" className={`font-medium transition-colors ${location.pathname === '/about' ? activeClass : textClass}`}>About</Link>
            <Link to="/contact" className={`font-medium transition-colors ${location.pathname === '/contact' ? activeClass : textClass}`}>Contact</Link>
            <Link to="/reviews" className={`font-medium transition-colors ${location.pathname === '/reviews' ? activeClass : textClass}`}>Reviews</Link>
            <Link to="/blog" className={`font-medium transition-colors ${location.pathname.startsWith('/blog') ? activeClass : textClass}`}>Blog</Link>
            <Link to="/portal" className={`font-medium transition-colors ${location.pathname === '/portal' ? activeClass : textClass}`}>My Portal</Link>
            
            {isAdmin && (
              <Link to="/admin" className={`font-medium transition-colors ${location.pathname === '/admin' ? activeClass : textClass}`}>Admin Workspace</Link>
            )}
            
            <button 
              onClick={toggleDark}
              className={`p-2 rounded-full transition-colors shrink-0 ${
                !isScrolled && isHome 
                  ? 'bg-white/10 text-white hover:bg-white/20' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <a 
              href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20process%20audit." 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 xl:px-6 py-2 xl:py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all shadow-[0_4px_14px_rgba(79,70,229,0.3)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.4)] hover:-translate-y-0.5 whitespace-nowrap text-sm xl:text-base shrink-0"
            >
              Book Audit
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={toggleDark}
              className={`p-2 rounded-full transition-colors ${
                !isScrolled && isHome 
                  ? 'bg-white/10 text-white hover:bg-white/20' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={!isScrolled && isHome ? 'text-white p-2' : 'text-slate-600 dark:text-slate-300 p-2'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-4 shadow-xl absolute w-full">
          <Link to="/" className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === '/' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>Home</Link>
          <Link to="/products" className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname.startsWith('/products') ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>Products</Link>
          
          {/* Mobile Services & Offers Accordion */}
          <div className="space-y-1">
            <button 
              onClick={() => setIsMobileOffersOpen(!isMobileOffersOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 border-none bg-transparent cursor-pointer"
            >
              <span className={location.pathname.startsWith('/services') || location.pathname.startsWith('/offers') ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''}>
                Services & Offers
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileOffersOpen ? 'rotate-180 text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`} />
            </button>
            {isMobileOffersOpen && (
              <div className="pl-4 space-y-1 mt-1 bg-slate-50/50 dark:bg-slate-850/25 p-2 rounded-xl border border-slate-200/50 dark:border-slate-800">
                <Link to="/services" onClick={() => { setIsMobileMenuOpen(false); setIsMobileOffersOpen(false); }} className="block px-3 py-1.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-650">Core Plans Page</Link>
                <Link to="/offers" onClick={() => { setIsMobileMenuOpen(false); setIsMobileOffersOpen(false); }} className="block px-3 py-1.5 text-sm font-extrabold text-indigo-600 dark:text-indigo-400 hover:text-indigo-650">Special Deals Hub</Link>
                <div className="h-[1px] bg-slate-200/50 dark:bg-slate-800 my-1.5" />
                <Link to="/offers/google-sheets-automation" onClick={() => { setIsMobileMenuOpen(false); setIsMobileOffersOpen(false); }} className="block px-3 py-1.5 text-xs font-semibold text-slate-550 dark:text-slate-450 hover:text-indigo-650">Sheets Automation (₹1,499)</Link>
                <Link to="/offers/custom-excel-dashboard-mis" onClick={() => { setIsMobileMenuOpen(false); setIsMobileOffersOpen(false); }} className="block px-3 py-1.5 text-xs font-semibold text-slate-550 dark:text-slate-450 hover:text-indigo-650">Excel MIS Dashboard (₹1,999)</Link>
                <Link to="/offers/google-apps-script-automation" onClick={() => { setIsMobileMenuOpen(false); setIsMobileOffersOpen(false); }} className="block px-3 py-1.5 text-xs font-semibold text-slate-550 dark:text-slate-450 hover:text-indigo-650">Apps Script Workflow (₹2,999)</Link>
                <Link to="/offers/custom-web-app" onClick={() => { setIsMobileMenuOpen(false); setIsMobileOffersOpen(false); }} className="block px-3 py-1.5 text-xs font-semibold text-slate-550 dark:text-slate-450 hover:text-indigo-650">Web App & Site (₹3,999)</Link>
              </div>
            )}
          </div>

          <Link to="/roi-tool" className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === '/roi-tool' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'} flex items-center gap-1.5`}>
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0 fill-amber-500/10 animate-pulse animate-duration-1000" />
            ROI & AI Match
          </Link>
          <Link to="/about" className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === '/about' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>About</Link>
          <Link to="/contact" className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === '/contact' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>Contact</Link>
          <Link to="/reviews" className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === '/reviews' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>Reviews</Link>
          <Link to="/blog" className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname.startsWith('/blog') ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>Blog</Link>
          <Link to="/portal" className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === '/portal' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>My Portal</Link>
          {isAdmin && (
            <Link to="/admin" className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === '/admin' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>Admin Workspace</Link>
          )}
          <a 
            href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20process%20audit." 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium flex justify-center shadow-md transition-colors"
          >
            Book Audit
          </a>
        </div>
      )}
      
      {/* Dynamic Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 transition-all duration-75 shadow-[0_1px_8px_rgba(99,102,241,0.5)] pointer-events-none" 
        style={{ width: `${scrollProgress}%` }}
      />
    </nav>
  );
}
