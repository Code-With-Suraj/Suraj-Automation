import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, User, Linkedin, Twitter, Facebook, MapPin } from 'lucide-react';
import RecommendedProducts from './RecommendedProducts';
import NewsletterSignup from './NewsletterSignup';

export default function Footer() {
  const location = useLocation();
  const path = location.pathname;
  
  // Render recommended products above the footer on all specific product detail pages
  const isProductPage = path.startsWith('/products/') && path !== '/products/';
  const productId = isProductPage ? path.replace('/products/', '') : undefined;

  return (
    <>
      {isProductPage && <RecommendedProducts currentProductId={productId} />}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-6 lg:col-span-3">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-white font-bold shadow-[0_4px_12px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform border border-slate-700/50">
                SA
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">Suraj Automation</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Custom business systems and automation using Google Apps Script for SMBs.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <a href="https://www.linkedin.com/in/surajautomation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all border border-slate-700/50" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://share.google/8ZMNA3jACemzsznJ7" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#4285F4] hover:text-white transition-all border border-slate-700/50" aria-label="Google Business Profile">
                <MapPin className="w-4 h-4 text-slate-350 hover:text-white" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all border border-slate-700/50" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all border border-slate-700/50" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500"></span>Home</Link></li>
              <li><Link to="/products" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500"></span>Products</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500"></span>Services</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500"></span>About</Link></li>
              <li><Link to="/blog" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500"></span>Blog & Guides</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500"></span>Pricing & Plans</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/terms" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500"></span>Terms and Policy</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500"></span>Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="md:col-span-6 lg:col-span-2">
            <h4 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-indigo-400" />
                </div>
                <span className="font-medium text-slate-300">Suraj Singh</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-indigo-400" />
                </div>
                <a href="https://wa.me/918851666208" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors font-medium text-slate-300">+91-8851666208</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-indigo-400" />
                </div>
                <a href="mailto:suraj.gasdeveloper@gmail.com" className="hover:text-indigo-400 transition-colors font-medium text-slate-300">suraj.gasdeveloper@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 lg:col-span-3">
            <NewsletterSignup />
          </div>
        </div>

        {/* SEO Solutions & Inner Linking Directory */}
        <div className="pt-12 mt-12 border-t border-slate-800/80">
          <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm text-center md:text-left">
            Our Business Automation Solutions Hub (Sitemap)
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-xs">
            <div>
              <h5 className="text-slate-300 font-extrabold uppercase mb-4 tracking-wider">MIS Dashboards & Finance</h5>
              <ul className="space-y-2.5">
                <li><Link to="/products/cfo-dashboard" className="hover:text-indigo-400 transition-colors">CFO Dashboard for SMBs</Link></li>
                <li><Link to="/products/cogs-analytics-dashboard" className="hover:text-indigo-400 transition-colors">COGS Analytics Dashboard</Link></li>
                <li><Link to="/products/budgetsarthi" className="hover:text-indigo-400 transition-colors">BudgetSarthi Expense Control</Link></li>
                <li><Link to="/products/hisabsarthi" className="hover:text-indigo-400 transition-colors">HisabSarthi GST Ledger</Link></li>
                <li><Link to="/products/loansarthi" className="hover:text-indigo-400 transition-colors">LoanSarthi EMI Tracker</Link></li>
                <li><Link to="/products/personalfinsarthi" className="hover:text-indigo-400 transition-colors">PersonalFin Sarthi Tracker</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-slate-300 font-extrabold uppercase mb-4 tracking-wider">Custom Operations Automation</h5>
              <ul className="space-y-2.5">
                <li><Link to="/products/rationkart" className="hover:text-indigo-400 transition-colors">RationKart Ordering System</Link></li>
                <li><Link to="/products/stocksarthi" className="hover:text-indigo-400 transition-colors">StockSarthi Inventory</Link></li>
                <li><Link to="/products/vendorsarthi" className="hover:text-indigo-400 transition-colors">VendorSarthi Procurement</Link></li>
                <li><Link to="/products/supplysarthi" className="hover:text-indigo-400 transition-colors">SupplySarthi B2B Sales</Link></li>
                <li><Link to="/products/bookingsarthi" className="hover:text-indigo-400 transition-colors">BookingSarthi Scheduling</Link></li>
                <li><Link to="/roi-tool" className="hover:text-indigo-400 transition-colors">ROI Calculator & Audit Tool</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-slate-300 font-extrabold uppercase mb-4 tracking-wider">HR, Payroll & Office Systems</h5>
              <ul className="space-y-2.5">
                <li><Link to="/products/hiresarthi" className="hover:text-indigo-400 transition-colors">HireSarthi Recruitment</Link></li>
                <li><Link to="/products/salarysarthi" className="hover:text-indigo-400 transition-colors">SalarySarthi HRMS & Payroll</Link></li>
                <li><Link to="/products/karmsarthi" className="hover:text-indigo-400 transition-colors">KarmSarthi Leave Tracker</Link></li>
                <li><Link to="/products/claimo" className="hover:text-indigo-400 transition-colors">Claimo Smart Expense Approval</Link></li>
                <li><Link to="/portal" className="hover:text-indigo-400 transition-colors">Interactive Client Portal</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-slate-300 font-extrabold uppercase mb-4 tracking-wider">Service & Retail ERPs</h5>
              <ul className="space-y-2.5">
                <li><Link to="/products/cakesarthi" className="hover:text-indigo-400 transition-colors">CakeSarthi Bakery Web App</Link></li>
                <li><Link to="/products/menusarthi" className="hover:text-indigo-400 transition-colors">MenuSarthi QR Ordering</Link></li>
                <li><Link to="/products/gymsarthi" className="hover:text-indigo-400 transition-colors">GymSarthi Gym Management</Link></li>
                <li><Link to="/products/billsarthi" className="hover:text-indigo-400 transition-colors">BillSarthi Vendor Invoice Audit</Link></li>
                <li><Link to="/offers" className="hover:text-indigo-400 transition-colors">Special Solutions Offers Hub</Link></li>
                <li><Link to="/reviews" className="hover:text-indigo-400 transition-colors">Verified Customer Reviews</Link></li>
              </ul>
            </div>
          </div>

          {/* Keyword Rich SEO Explanation Panel */}
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 mb-6 text-xs leading-relaxed text-slate-500 hover:border-slate-850 hover:text-slate-400 transition-colors duration-300">
            <p>
              Suraj Automation is Noida&apos;s leading <strong className="text-slate-300">ai automation company</strong> and a premier <strong className="text-slate-300">automation company in noida</strong>, delivering professional <strong className="text-slate-300">custom automation</strong>, smart <strong className="text-slate-300">mis dashboards</strong>, and background <strong className="text-slate-300">apps script triggers</strong> integration. As one of the top-tier <strong className="text-slate-300">ai automation companies</strong>, we specialize in publishing highly ranked <strong className="text-slate-300">ai automation websites</strong> and deploying advanced, zero-upkeep <strong className="text-slate-300">ai automation softwares</strong>. We replace spreadsheets and scattered workflows with centralized tools and Google Workspace dashboards across Delhi NCR, Noida, and globally.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Suraj Automation. All rights reserved.</p>
          <p className="text-slate-500 flex items-center gap-2">Built for Indian SMBs <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span></p>
        </div>
      </div>
    </footer>
    </>
  );
}
