import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Package, Receipt, Wallet, Users, Cake, Dumbbell, Utensils, ArrowRight, Store, Calculator, Database, Shield } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const colorStyles: Record<string, { bg: string, text: string, border: string }> = {
  indigo: { bg: 'bg-indigo-500/10 text-indigo-400', text: 'text-indigo-400', border: 'border-indigo-500/20' },
  teal: { bg: 'bg-teal-500/10 text-teal-400', text: 'text-teal-400', border: 'border-teal-500/20' },
  blue: { bg: 'bg-blue-500/10 text-blue-400', text: 'text-blue-400', border: 'border-blue-500/20' },
  emerald: { bg: 'bg-emerald-500/10 text-emerald-400', text: 'text-emerald-400', border: 'border-emerald-500/20' },
  purple: { bg: 'bg-purple-500/10 text-purple-400', text: 'text-purple-400', border: 'border-purple-500/20' },
};

export default function ProductsSection() {
  const { customProducts } = useUser();

  const products = [
    {
      id: 'loansarthi',
      name: 'LoanSarthi',
      tagline: 'Finance & Recovery Control System',
      description: 'Small finance businesses ke liye powerful, mobile-first loan management system to create loans, track EMI, and manage recovery quickly.',
      icon: <Wallet className="w-6 h-6" />,
      color: 'indigo',
      featured: true,
      spec: 'ENG_LEDGER_V4'
    },
    {
      id: 'supplysarthi',
      name: 'SupplySarthi',
      tagline: 'Complete Supply & Distribution Management System',
      description: 'Stop taking orders on WhatsApp. Manage your entire supply business in one Google Sheet-based system—from orders to GST invoices. Pay once, use for a lifetime.',
      icon: <Store className="w-6 h-6" />,
      color: 'teal',
      featured: true,
      spec: 'B2B_ROUTING_V3'
    },
    {
      id: 'hisabsarthi',
      name: 'HisabSarthi',
      tagline: 'Google Sheets-based GST Accounting Tool',
      description: 'Ditch Tally and complex ERPs. HisabSarthi is a simple, affordable GST invoicing and accounting system built for Indian small businesses. 100% data control in your Google Drive.',
      icon: <Calculator className="w-6 h-6" />,
      color: 'blue',
      spec: 'GST_CALC_V2'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden" id="products">
      {/* Background visual dots */}
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-black tracking-widest uppercase mb-4 border border-indigo-100 dark:border-indigo-500/20">
              <Database className="w-3.5 h-3.5" />
              SYSTEM PORTAL REGISTRY
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-none animate-fade-in">
              Deployable Sarthi Solutions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-body">
              Enterprise-grade Apps Script solutions engineered for direct integration. Lifetime code ownership with zero recurring operating licenses.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.filter(p => !customProducts.find((cp: any) => cp.id === p.id)?.isHidden).map((product, idx) => {
            const styles = colorStyles[product.color || 'indigo'];
            const isFeatured = product.featured;
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-10 border border-slate-200/60 dark:border-slate-800 flex flex-col hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group relative overflow-hidden ${isFeatured ? 'md:col-span-2 md:flex-row gap-6 md:gap-10 items-center overflow-visible' : ''}`}
              >
                {/* Monospace spec tag */}
                <div className="absolute top-4 right-6 font-mono text-[9px] text-slate-400 dark:text-slate-500 tracking-wider flex items-center gap-1">
                  <Shield className="w-3 h-3 text-emerald-500" />
                  {product.spec}
                </div>

                {isFeatured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-[9px] font-mono font-bold tracking-widest px-5 py-1.5 rounded-bl-[1.5rem] shadow-sm uppercase">
                    FEATURED SPEC
                  </div>
                )}
                
                <div className={`rounded-2xl border border-slate-100 dark:border-slate-800 ${styles.bg} flex items-center justify-center ${styles.text} mb-6 md:mb-0 group-hover:scale-105 transition-transform duration-300 shrink-0 ${isFeatured ? 'w-20 h-20 md:w-24 md:h-24' : 'w-16 h-16'}`}>
                  {product.icon}
                </div>
                
                <div className={`flex flex-col flex-grow ${isFeatured ? 'md:ml-2' : ''}`}>
                  <h3 className={`font-black text-slate-900 dark:text-white mb-2 tracking-tight ${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>{product.name}</h3>
                  <p className={`text-[10px] font-mono font-bold ${styles.text} mb-4 uppercase tracking-wider`}>{product.tagline}</p>
                  <p className={`text-slate-600 dark:text-slate-400 mb-8 font-body leading-relaxed flex-grow text-sm ${isFeatured ? 'md:text-base max-w-2xl' : ''}`}>
                    {product.description}
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    className="inline-flex items-center text-xs font-bold font-mono uppercase bg-slate-900 hover:bg-slate-850 dark:bg-slate-800 dark:hover:bg-slate-700 text-white px-5 py-3 rounded-xl transition-all group/link w-fit shadow-md border border-slate-800 dark:border-slate-700 hover:border-slate-700"
                  >
                    Load Instance Spec
                    <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-950 hover:bg-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-800 dark:border-slate-700 text-white rounded-xl font-bold text-sm uppercase font-mono tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
          >
            Explore Catalog Registry
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
