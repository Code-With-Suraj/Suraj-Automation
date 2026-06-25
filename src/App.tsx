/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Portal from './pages/Portal';
import AdminPortal from './pages/AdminPortal';
import RoiTool from './pages/RoiTool';
import Reviews from './pages/Reviews';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import OffersHub from './pages/OffersHub';
import OfferDetailPage from './pages/OfferDetailPage';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FloatingBuyWidget from './components/FloatingBuyWidget';
import ScrollToTop from './components/ScrollToTop';
import Breadcrumb from './components/Breadcrumb';

// Lazy loaded product pages
const RationKart = lazy(() => import('./pages/products/RationKart'));
const StockSarthi = lazy(() => import('./pages/products/StockSarthi'));
const BillSarthi = lazy(() => import('./pages/products/BillSarthi'));
const Claimo = lazy(() => import('./pages/products/Claimo'));
const KarmSarthi = lazy(() => import('./pages/products/KarmSarthi'));
const CakeSarthi = lazy(() => import('./pages/products/CakeSarthi'));
const GymSarthi = lazy(() => import('./pages/products/GymSarthi'));
const MenuSarthi = lazy(() => import('./pages/products/MenuSarthi'));
const SupplySarthi = lazy(() => import('./pages/products/SupplySarthi'));
const HisabSarthi = lazy(() => import('./pages/products/HisabSarthi'));
const CogsAnalyticsDashboard = lazy(() => import('./pages/products/CogsAnalyticsDashboard'));
const LoanSarthi = lazy(() => import('./pages/products/LoanSarthi'));
const VendorSarthi = lazy(() => import('./pages/products/VendorSarthi'));
const PersonalFinSarthi = lazy(() => import('./pages/products/PersonalFinSarthi'));
const HireSarthi = lazy(() => import('./pages/products/HireSarthi'));
const BudgetSarthi = lazy(() => import('./pages/products/BudgetSarthi'));
const CfoDashboard = lazy(() => import('./pages/products/CfoDashboard'));
const SalarySarthi = lazy(() => import('./pages/products/SalarySarthi'));
const BookingSarthi = lazy(() => import('./pages/products/BookingSarthi'));
const DynamicProductPage = lazy(() => import('./pages/products/DynamicProductPage'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-950 text-white py-12">
      <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-slate-400 font-semibold tracking-wider uppercase text-xs animate-pulse">Loading Sarthi System...</p>
    </div>
  );
}

function ProductsLayout() {
  const location = useLocation();
  const showBreadcrumb = location.pathname !== '/products' && location.pathname !== '/products/';

  return (
    <div className="relative">
      {showBreadcrumb && (
        <div className="absolute top-24 left-0 right-0 z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none pt-4">
          <div className="pointer-events-auto">
            <Breadcrumb theme="dark" />
          </div>
        </div>
      )}
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/offers" element={<OffersHub />} />
              <Route path="/offers/:slug" element={<OfferDetailPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/pricing" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/portal" element={<Portal />} />
              <Route path="/reviews" element={<Reviews />} />
              
              {/* Product specific pages wrapped in dynamic Breadcrumbs and Suspense layout */}
              <Route element={<ProductsLayout />}>
                <Route path="/products/cogs-analytics-dashboard" element={<CogsAnalyticsDashboard />} />
                <Route path="/products/cfo-dashboard" element={<CfoDashboard />} />
                <Route path="/products/rationkart" element={<RationKart />} />
                <Route path="/products/stocksarthi" element={<StockSarthi />} />
                <Route path="/products/billsarthi" element={<BillSarthi />} />
                <Route path="/products/claimo" element={<Claimo />} />
                <Route path="/products/karmsarthi" element={<KarmSarthi />} />
                <Route path="/products/cakesarthi" element={<CakeSarthi />} />
                <Route path="/products/gymsarthi" element={<GymSarthi />} />
                <Route path="/products/menusarthi" element={<MenuSarthi />} />
                <Route path="/products/supplysarthi" element={<SupplySarthi />} />
                <Route path="/products/hisabsarthi" element={<HisabSarthi />} />
                <Route path="/products/loansarthi" element={<LoanSarthi />} />
                <Route path="/products/vendorsarthi" element={<VendorSarthi />} />
                <Route path="/products/personalfinsarthi" element={<PersonalFinSarthi />} />
                <Route path="/products/hiresarthi" element={<HireSarthi />} />
                <Route path="/products/budgetsarthi" element={<BudgetSarthi />} />
                <Route path="/products/salarysarthi" element={<SalarySarthi />} />
                <Route path="/products/bookingsarthi" element={<BookingSarthi />} />
                <Route path="/products/:productId" element={<DynamicProductPage />} />
              </Route>

              <Route path="/admin" element={<AdminPortal />} />
              <Route path="/roi-tool" element={<RoiTool />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </div>
          <Footer />
          <FloatingWhatsApp />
          <FloatingBuyWidget />
        </div>
      </Router>
    </UserProvider>
  );
}
