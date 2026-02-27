import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Package, Receipt, Wallet, Users, Cake, Dumbbell, Utensils, ArrowRight } from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: 'rationkart',
      name: 'RationKart',
      tagline: 'Store Se Site Tak – Complete Digital Ordering & Approval System',
      description: 'A simple and powerful web app that helps grocery stores, kirana shops, and small retail businesses manage item requests, approvals, and stock in one place.',
      icon: <ShoppingCart className="w-8 h-8" />,
      color: 'indigo',
    },
    {
      id: 'stocksarthi',
      name: 'StockSarthi',
      tagline: 'Smart Stock Entry & Closing Stock Management System',
      description: 'Take full control of your stock without Excel confusion. A simple and powerful web-based stock entry and reporting system built for growing businesses.',
      icon: <Package className="w-8 h-8" />,
      color: 'emerald',
    },
    {
      id: 'billsarthi',
      name: 'BillSarthi',
      tagline: 'Smart Vendor Bill Management System for Growing Businesses',
      description: 'Bills with errors? Accounts team rejecting entries? Not anymore. BillSarthi is a smart web-based billing system that helps store teams enter vendor bills correctly — the first time.',
      icon: <Receipt className="w-8 h-8" />,
      color: 'blue',
    },
    {
      id: 'claimo',
      name: 'Claimo',
      tagline: 'Smart Expense & Reimbursement Management System',
      description: 'Tired of Excel expense sheets and approval delays? Claimo brings structure, transparency, and speed to your entire expense process.',
      icon: <Wallet className="w-8 h-8" />,
      color: 'amber',
    },
    {
      id: 'karmsarthi',
      name: 'KarmSarthi',
      tagline: 'HR Operations Automation Suite',
      description: 'Stop managing HR on Excel & WhatsApp. KarmSarthi is a focused HR automation system that handles your daily HR operations in one structured platform.',
      icon: <Users className="w-8 h-8" />,
      color: 'purple',
    },
    {
      id: 'cakesarthi',
      name: 'CakeSarthi',
      tagline: 'Complete Online Ordering & Growth System for Bakeries',
      description: 'Turn your local bakery into a smart online business. CakeSarthi gives you your own online cake ordering website, smart checkout, UPI payments, and an owner dashboard.',
      icon: <Cake className="w-8 h-8" />,
      color: 'rose',
    },
    {
      id: 'gymsarthi',
      name: 'GymSarthi',
      tagline: 'Complete Gym Management System for Desi Gym Owners',
      description: 'Stop running your gym on register & memory. GymSarthi is a simple, powerful system specially built for Indian gym owners to manage members, fees, and renewals.',
      icon: <Dumbbell className="w-8 h-8" />,
      color: 'orange',
    },
    {
      id: 'menusarthi',
      name: 'MenuSarthi',
      tagline: 'Premium Digital Menu & Online Ordering System for Restaurants',
      description: 'Turn your restaurant into a smart digital ordering system. MenuSarthi gives you your own premium digital menu and direct ordering system without heavy commissions.',
      icon: <Utensils className="w-8 h-8" />,
      color: 'red',
    }
  ];

  return (
    <main className="pt-24 pb-20">
      <section className="relative py-20 lg:py-32 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/80 via-white to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold tracking-wide mb-6 border border-indigo-100 shadow-sm">
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Ready-to-Deploy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                Business Systems
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Powerful, customizable web applications designed specifically to solve the most common operational challenges faced by SMBs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-${product.color}-50 flex items-center justify-center text-${product.color}-600 mb-6`}>
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h3>
                <p className={`text-sm font-semibold text-${product.color}-600 mb-4`}>{product.tagline}</p>
                <p className="text-slate-600 mb-8 flex-grow">
                  {product.description}
                </p>
                <Link
                  to={`/products/${product.id}`}
                  className={`inline-flex items-center justify-center w-full px-6 py-3 bg-${product.color}-600 hover:bg-${product.color}-700 text-white rounded-xl font-medium transition-colors group`}
                >
                  View Details
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
