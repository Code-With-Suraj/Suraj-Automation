import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              SA
            </div>
            <span className="font-bold text-xl text-slate-900 hidden sm:block tracking-tight">Suraj Automation</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-colors ${location.pathname === '/' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}>Home</Link>
            <Link to="/about" className={`font-medium transition-colors ${location.pathname === '/about' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}>About</Link>
            <Link to="/pricing" className={`font-medium transition-colors ${location.pathname === '/pricing' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}>Pricing</Link>
            <a 
              href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20process%20audit." 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl font-medium transition-all shadow-md hover:shadow-indigo-200 hover:-translate-y-0.5"
            >
              Book Audit
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-xl absolute w-full">
          <Link to="/" className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === '/' ? 'text-indigo-600 bg-indigo-50' : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'}`}>Home</Link>
          <Link to="/about" className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === '/about' ? 'text-indigo-600 bg-indigo-50' : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'}`}>About</Link>
          <Link to="/pricing" className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === '/pricing' ? 'text-indigo-600 bg-indigo-50' : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'}`}>Pricing</Link>
          <a 
            href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20process%20audit." 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full mt-4 px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium flex justify-center shadow-md"
          >
            Book Audit
          </a>
        </div>
      )}
    </nav>
  );
}
