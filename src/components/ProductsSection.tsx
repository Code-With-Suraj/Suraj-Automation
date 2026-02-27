import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Package, Receipt, Wallet, Users, Cake, Dumbbell, Utensils, ArrowRight } from 'lucide-react';

const colorStyles: Record<string, { bg: string, text: string, hoverText: string }> = {
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', hoverText: 'hover:text-indigo-700' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', hoverText: 'hover:text-emerald-700' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', hoverText: 'hover:text-blue-700' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', hoverText: 'hover:text-amber-700' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', hoverText: 'hover:text-purple-700' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-600', hoverText: 'hover:text-rose-700' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', hoverText: 'hover:text-orange-700' },
  red: { bg: 'bg-red-50', text: 'text-red-600', hoverText: 'hover:text-red-700' },
};

export default function ProductsSection() {
  const products = [
    {
      id: 'rationkart',
      name: 'RationKart',
      tagline: 'Digital Ordering & Approval',
      description: 'Manage item requests, approvals, and stock in one place for grocery stores.',
      icon: <ShoppingCart className="w-6 h-6" />,
      color: 'indigo',
    },
    {
      id: 'stocksarthi',
      name: 'StockSarthi',
      tagline: 'Smart Stock Management',
      description: 'Take full control of your stock without Excel confusion. Built for growing businesses.',
      icon: <Package className="w-6 h-6" />,
      color: 'emerald',
    },
    {
      id: 'billsarthi',
      name: 'BillSarthi',
      tagline: 'Vendor Bill Management',
      description: 'A smart web-based billing system that helps store teams enter vendor bills correctly.',
      icon: <Receipt className="w-6 h-6" />,
      color: 'blue',
    },
    {
      id: 'claimo',
      name: 'Claimo',
      tagline: 'Expense & Reimbursement',
      description: 'Brings structure, transparency, and speed to your entire expense process.',
      icon: <Wallet className="w-6 h-6" />,
      color: 'amber',
    },
    {
      id: 'karmsarthi',
      name: 'KarmSarthi',
      tagline: 'HR Operations Automation',
      description: 'A focused HR automation system that handles your daily HR operations.',
      icon: <Users className="w-6 h-6" />,
      color: 'purple',
    },
    {
      id: 'cakesarthi',
      name: 'CakeSarthi',
      tagline: 'Online Ordering for Bakeries',
      description: 'Turn your local bakery into a smart online business with your own ordering website.',
      icon: <Cake className="w-6 h-6" />,
      color: 'rose',
    },
    {
      id: 'gymsarthi',
      name: 'GymSarthi',
      tagline: 'Gym Management System',
      description: 'A simple, powerful system specially built for Indian gym owners to manage members.',
      icon: <Dumbbell className="w-6 h-6" />,
      color: 'orange',
    },
    {
      id: 'menusarthi',
      name: 'MenuSarthi',
      tagline: 'Premium Digital Menu',
      description: 'Your own premium digital menu and direct ordering system without heavy commissions.',
      icon: <Utensils className="w-6 h-6" />,
      color: 'red',
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="products">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/50 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold tracking-wide mb-4">
              Our Products
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Ready-to-Deploy Business Systems
            </h2>
            <p className="text-lg text-slate-600">
              Powerful, customizable web applications designed specifically to solve the most common operational challenges faced by SMBs.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.slice(0, 2).map((product, idx) => {
            const styles = colorStyles[product.color];
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/40 border border-slate-100 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl ${styles.bg} flex items-center justify-center ${styles.text} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className={`text-xs font-bold ${styles.text} mb-3 uppercase tracking-wider`}>{product.tagline}</p>
                <p className="text-sm text-slate-600 mb-6 flex-grow">
                  {product.description}
                </p>
                <Link
                  to={`/products/${product.id}`}
                  className={`inline-flex items-center text-sm font-bold ${styles.text} ${styles.hoverText} transition-colors group/link mt-auto`}
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-slate-900/20 group"
          >
            Explore All Products
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
