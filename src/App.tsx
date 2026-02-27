/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Products from './pages/Products';
import RationKart from './pages/products/RationKart';
import StockSarthi from './pages/products/StockSarthi';
import BillSarthi from './pages/products/BillSarthi';
import Claimo from './pages/products/Claimo';
import KarmSarthi from './pages/products/KarmSarthi';
import CakeSarthi from './pages/products/CakeSarthi';
import GymSarthi from './pages/products/GymSarthi';
import MenuSarthi from './pages/products/MenuSarthi';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/rationkart" element={<RationKart />} />
            <Route path="/products/stocksarthi" element={<StockSarthi />} />
            <Route path="/products/billsarthi" element={<BillSarthi />} />
            <Route path="/products/claimo" element={<Claimo />} />
            <Route path="/products/karmsarthi" element={<KarmSarthi />} />
            <Route path="/products/cakesarthi" element={<CakeSarthi />} />
            <Route path="/products/gymsarthi" element={<GymSarthi />} />
            <Route path="/products/menusarthi" element={<MenuSarthi />} />
          </Routes>
        </div>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
