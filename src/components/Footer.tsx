import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, User, Linkedin, MapPin } from 'lucide-react';
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
              Business automation, Google Apps Script web apps, MIS reporting, and custom software solutions for Indian SMBs.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <a href="https://www.linkedin.com/in/surajautomation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all border border-slate-700/50" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://share.google/8ZMNA3jACemzsznJ7" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#4285F4] hover:text-white transition-all border border-slate-700/50" aria-label="Google Business Profile">
                <MapPin className="w-4 h-4 text-slate-300 hover:text-white" />
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
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <a href="tel:+919355337839" className="hover:text-indigo-400 transition-colors font-semibold text-slate-200">+91-9355337839</a>
                    <span className="text-slate-600">·</span>
                    <a href="https://wa.me/919355337839?text=Hi%20Suraj,%20I%20want%20to%20discuss%20business%20automation." target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">WhatsApp</a>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <a href="tel:+918851666208" className="hover:text-indigo-400 transition-colors">+91-8851666208</a>
                    <span>·</span>
                    <a href="https://wa.me/918851666208" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">WhatsApp</a>
                  </div>
                </div>
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
            Business Automation Services &amp; Software Directory
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10 text-xs">
            <div>
              <h5 className="text-indigo-400 font-extrabold uppercase mb-4 tracking-wider">Core Services</h5>
              <ul className="space-y-2.5">
                <li><Link to="/services/google-apps-script-development" className="hover:text-indigo-400 transition-colors">Google Apps Script Services</Link></li>
                <li><Link to="/services/custom-software-development" className="hover:text-indigo-400 transition-colors">Custom Software India</Link></li>
                <li><Link to="/services/web-application-development" className="hover:text-indigo-400 transition-colors">Custom Web App Development</Link></li>
                <li><Link to="/services/whatsapp-automation" className="hover:text-indigo-400 transition-colors">WhatsApp Automation</Link></li>
                <li><Link to="/services/mis-dashboard-development" className="hover:text-indigo-400 transition-colors">MIS Dashboard Services</Link></li>
                <li><Link to="/services/ai-automation-services" className="hover:text-indigo-400 transition-colors">AI Automation for SMBs</Link></li>
                <li><Link to="/services/inventory-management-software" className="hover:text-indigo-400 transition-colors">Custom Inventory Software</Link></li>
                <li><Link to="/custom-software-noida" className="hover:text-indigo-400 transition-colors font-semibold text-slate-300">Software Company in Noida</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-slate-300 font-extrabold uppercase mb-4 tracking-wider">MIS &amp; Finance</h5>
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
              <h5 className="text-slate-300 font-extrabold uppercase mb-4 tracking-wider">Operations &amp; Supply</h5>
              <ul className="space-y-2.5">
                <li><Link to="/products/rationkart" className="hover:text-indigo-400 transition-colors">RationKart Ordering System</Link></li>
                <li><Link to="/products/stocksarthi" className="hover:text-indigo-400 transition-colors">StockSarthi Inventory</Link></li>
                <li><Link to="/products/vendorsarthi" className="hover:text-indigo-400 transition-colors">VendorSarthi Procurement</Link></li>
                <li><Link to="/products/supplysarthi" className="hover:text-indigo-400 transition-colors">SupplySarthi B2B Sales</Link></li>
                <li><Link to="/products/bookingsarthi" className="hover:text-indigo-400 transition-colors">BookingSarthi Scheduling</Link></li>
                <li><Link to="/roi-tool" className="hover:text-indigo-400 transition-colors">ROI &amp; Process Audit Tool</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-slate-300 font-extrabold uppercase mb-4 tracking-wider">HR &amp; Office</h5>
              <ul className="space-y-2.5">
                <li><Link to="/products/hiresarthi" className="hover:text-indigo-400 transition-colors">HireSarthi Recruitment</Link></li>
                <li><Link to="/products/salarysarthi" className="hover:text-indigo-400 transition-colors">SalarySarthi HRMS &amp; Payroll</Link></li>
                <li><Link to="/products/karmsarthi" className="hover:text-indigo-400 transition-colors">KarmSarthi Leave Tracker</Link></li>
                <li><Link to="/products/claimo" className="hover:text-indigo-400 transition-colors">Claimo Expense Approval</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Book Free Audit</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-teal-400 font-extrabold uppercase mb-4 tracking-wider flex items-center gap-1.5">
                <span>WebSarthi Websites</span>
                <span className="bg-teal-500/20 text-teal-300 text-[10px] px-1.5 py-0.5 rounded font-bold">₹1,999/mo</span>
              </h5>
              <ul className="space-y-2.5">
                <li><a href="https://websarthi.surajdx.com/" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-teal-200 font-bold transition-colors">WebSarthi Platform ↗</a></li>
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Services &amp; Pricing</Link></li>
                <li><Link to="/offers/custom-web-app" className="hover:text-indigo-400 transition-colors">Custom Web App Package</Link></li>
                <li><Link to="/offers/google-sheets-automation" className="hover:text-indigo-400 transition-colors">Sheets Automation Deal</Link></li>
                <li><Link to="/offers/custom-excel-dashboard-mis" className="hover:text-indigo-400 transition-colors">Excel MIS Report Deal</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-slate-300 font-extrabold uppercase mb-4 tracking-wider">Retail &amp; Billing</h5>
              <ul className="space-y-2.5">
                <li><Link to="/products/cakesarthi" className="hover:text-indigo-400 transition-colors">CakeSarthi Bakery App</Link></li>
                <li><Link to="/products/menusarthi" className="hover:text-indigo-400 transition-colors">MenuSarthi QR Ordering</Link></li>
                <li><Link to="/products/gymsarthi" className="hover:text-indigo-400 transition-colors">GymSarthi Gym Software</Link></li>
                <li><Link to="/products/billsarthi" className="hover:text-indigo-400 transition-colors">BillSarthi Invoice Audit</Link></li>
                <li><Link to="/offers" className="hover:text-indigo-400 transition-colors">Special Offers Hub</Link></li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 mb-6 text-xs leading-relaxed text-slate-400">
            <p>
              Suraj Automation is an Indian business automation and custom software development company based in Noida, Uttar Pradesh, serving SMBs across Noida, Greater Noida, Ghaziabad, Delhi NCR, and pan-India. Founded by Suraj Singh, we engineer practical Google Apps Script workflows, custom web applications, WhatsApp business automation, Gemini AI integrations, and real-time MIS dashboards alongside our parented website subscription platform,{' '}
              <a href="https://websarthi.surajdx.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 font-semibold hover:underline">
                WebSarthi
              </a>.
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
