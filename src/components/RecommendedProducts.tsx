import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, Cpu, Database, LayoutDashboard, Code, 
  ShoppingCart, Landmark, FileSpreadsheet, Settings, Receipt, 
  Users, Cake, Dumbbell, ClipboardList, TrendingUp, KeyRound, 
  CalendarClock, Wallet, Briefcase, Zap
} from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCT_SOLUTIONS } from '../data/productSolutions';

interface RecommendedProductsProps {
  currentProductId?: string;
}

const getProductIcon = (id: string, category?: string) => {
  switch (id) {
    case 'cfo-dashboard': return <LayoutDashboard className="w-5 h-5" />;
    case 'cogs-analytics-dashboard': return <TrendingUp className="w-5 h-5" />;
    case 'budgetsarthi': return <Wallet className="w-5 h-5" />;
    case 'hisabsarthi': return <Receipt className="w-5 h-5" />;
    case 'loansarthi': return <Landmark className="w-5 h-5" />;
    case 'personalfinsarthi': return <FileSpreadsheet className="w-5 h-5" />;
    
    case 'rationkart': return <Database className="w-5 h-5" />;
    case 'stocksarthi': return <ClipboardList className="w-5 h-5" />;
    case 'vendorsarthi': return <Settings className="w-5 h-5" />;
    case 'supplysarthi': return <ShoppingCart className="w-5 h-5" />;
    
    case 'hiresarthi': return <Briefcase className="w-5 h-5" />;
    case 'salarysarthi': return <Cpu className="w-5 h-5" />;
    case 'karmsarthi': return <Users className="w-5 h-5" />;
    case 'claimo': return <KeyRound className="w-5 h-5" />;
    
    case 'cakesarthi': return <Cake className="w-5 h-5" />;
    case 'menusarthi': return <ClipboardList className="w-5 h-5" />;
    case 'gymsarthi': return <Dumbbell className="w-5 h-5" />;
    case 'bookingsarthi': return <CalendarClock className="w-5 h-5" />;
    
    default:
      if (category?.includes('Finance') || category?.includes('Accounting')) {
        return <Landmark className="w-5 h-5" />;
      }
      return <Zap className="w-5 h-5" />;
  }
};

export default function RecommendedProducts({ currentProductId }: RecommendedProductsProps) {
  // Find current product & category
  const currentProduct = currentProductId ? PRODUCT_SOLUTIONS[currentProductId] : undefined;
  const currentCategory = currentProduct?.category;

  // Filter out current product & hidden products
  const otherProducts = Object.values(PRODUCT_SOLUTIONS).filter(
    (p) => p.id !== currentProductId && !p.isHidden
  );

  // Separate by category
  const sameCategory = otherProducts.filter(
    (p) => currentCategory && p.category === currentCategory
  );
  const differentCategory = otherProducts.filter(
    (p) => !currentCategory || p.category !== currentCategory
  );

  // Build recommendation list (needs 2 products, then 1 custom card)
  const finalRecommendations = [];
  
  // 1. Fill with same category products
  finalRecommendations.push(...sameCategory.slice(0, 2));

  // 2. Pad with other products if we have fewer than 2 same category products
  if (finalRecommendations.length < 2) {
    const needed = 2 - finalRecommendations.length;
    finalRecommendations.push(...differentCategory.slice(0, needed));
  }

  // Convert to card models
  const recommendationCards = finalRecommendations.map((p) => ({
    id: p.id,
    name: p.name,
    tagline: p.tagline || 'Custom Workspace System',
    description: p.description || 'Centralized workflow management on Google Workspace.',
    path: `/products/${p.id}`,
    icon: getProductIcon(p.id, p.category),
    tag: p.category || 'Automation',
    isCustom: false
  }));

  // 3. Always add Custom Automation & Web App card as 3rd slot
  const customCard = {
    id: 'custom-automation',
    name: 'Custom Automation & Web App',
    tagline: 'Tailored specifically to your business operations',
    description: 'Need something highly specific? Let Suraj build a bespoke Google Apps Script web app, custom CRM, automated workflow, or third-party API integration tailored exactly to your SMB operations.',
    path: '/contact?subject=Custom Automation Request',
    icon: <Code className="w-5 h-5 text-teal-400" />,
    tag: 'Bespoke Development',
    isCustom: true
  };

  recommendationCards.push(customCard);

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-indigo-950/30 via-slate-900 to-slate-900 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-wide mb-4 border border-indigo-500/20">
              <Sparkles className="w-3.5 h-3.5" /> High-Performance Templates & custom software
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Recommended {currentCategory ? <span className="text-indigo-400">{currentCategory} </span> : ''}<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Automations & Solutions</span>
            </h2>
            <p className="text-slate-400 mt-2 max-w-xl text-sm md:text-base">
              Complement your workflows with these search-optimized, zero-upkeep AI automation and MIS tools built on the Google ecosystem.
            </p>
          </div>
          <Link 
            to="/products"
            className="inline-flex items-center gap-1 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors mt-4 md:mt-0 group"
          >
            Explore Complete Catalog 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {recommendationCards.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-slate-950/60 border p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 ${
                item.isCustom 
                  ? 'border-teal-500/30 hover:border-teal-500/60 bg-gradient-to-br from-slate-950/80 to-teal-950/10' 
                  : 'border-slate-800 hover:border-indigo-500/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${
                    item.isCustom
                      ? 'text-teal-450 bg-teal-950/50 border-teal-900/40'
                      : 'text-indigo-400 bg-indigo-950/50 border-indigo-900/30'
                  }`}>
                    {item.tag}
                  </span>
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                    item.isCustom ? 'bg-teal-500/10 text-teal-450' : 'bg-indigo-500/10 text-indigo-400'
                  }`}>
                    {item.icon}
                  </div>
                </div>
                <h3 className={`text-lg font-bold mb-1 transition-colors ${
                  item.isCustom ? 'text-teal-300 group-hover:text-teal-200' : 'text-white group-hover:text-indigo-300'
                }`}>
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400 font-semibold mb-3 tracking-wide">{item.tagline}</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-medium">
                  {item.description}
                </p>
              </div>
              
              <Link 
                to={item.path}
                className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-indigo-450 transition-colors mt-auto border-t border-slate-800/60 pt-4"
              >
                {item.isCustom ? 'Request Custom Project Development' : `Learn More About ${item.name}`}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
