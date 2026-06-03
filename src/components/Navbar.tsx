import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';
import { useUser } from '../contexts/UserContext';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isAdmin } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleDark } = useDarkMode();

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
            <Link to="/services" className={`font-medium transition-colors ${location.pathname === '/services' ? activeClass : textClass}`}>Services</Link>
            <Link to="/roi-tool" className={`font-medium transition-colors ${location.pathname === '/roi-tool' ? activeClass : textClass} flex items-center gap-0.5 xl:gap-1`}>
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0 fill-amber-500/20" />
              ROI & AI Match
            </Link>
            <Link to="/about" className={`font-medium transition-colors ${location.pathname === '/about' ? activeClass : textClass}`}>About</Link>
            <Link to="/contact" className={`font-medium transition-colors ${location.pathname === '/contact' ? activeClass : textClass}`}>Contact</Link>
            <Link to="/reviews" className={`font-medium transition-colors ${location.pathname === '/reviews' ? activeClass : textClass}`}>Reviews</Link>
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
          <Link to="/services" className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === '/services' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>Services</Link>
          <Link to="/roi-tool" className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === '/roi-tool' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'} flex items-center gap-1.5`}>
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0 fill-amber-500/10 animate-pulse animate-duration-1000" />
            ROI & AI Match
          </Link>
          <Link to="/about" className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === '/about' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>About</Link>
          <Link to="/contact" className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === '/contact' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>Contact</Link>
          <Link to="/reviews" className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === '/reviews' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>Reviews</Link>
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
