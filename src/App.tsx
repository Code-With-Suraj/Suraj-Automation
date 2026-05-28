/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Products from './pages/Products';
import Portal from './pages/Portal';
import RationKart from './pages/products/RationKart';
import StockSarthi from './pages/products/StockSarthi';
import BillSarthi from './pages/products/BillSarthi';
import Claimo from './pages/products/Claimo';
import KarmSarthi from './pages/products/KarmSarthi';
import CakeSarthi from './pages/products/CakeSarthi';
import GymSarthi from './pages/products/GymSarthi';
import MenuSarthi from './pages/products/MenuSarthi';
import SupplySarthi from './pages/products/SupplySarthi';
import HisabSarthi from './pages/products/HisabSarthi';
import CogsDashboard from './pages/products/CogsDashboard';
import LoanSarthi from './pages/products/LoanSarthi';
import VendorSarthi from './pages/products/VendorSarthi';
import DynamicProductPage from './pages/products/DynamicProductPage';
import AdminPortal from './pages/AdminPortal';
import RoiTool from './pages/RoiTool';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FloatingBuyWidget from './components/FloatingBuyWidget';
import ScrollToTop from './components/ScrollToTop';

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
              <Route path="/contact" element={<Contact />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/products" element={<Products />} />
              <Route path="/portal" element={<Portal />} />
              <Route path="/products/cogs-dashboard" element={<CogsDashboard />} />
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
              <Route path="/admin" element={<AdminPortal />} />
              <Route path="/roi-tool" element={<RoiTool />} />
              <Route path="/products/:productId" element={<DynamicProductPage />} />
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
