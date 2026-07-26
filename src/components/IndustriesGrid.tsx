import { useState } from 'react';
import { motion } from 'motion/react';
import { Factory, Store, Utensils, ShoppingBag, Stethoscope, GraduationCap, Truck, Landmark, Building2, Layers, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IndustriesGrid() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  const targetIndustries = [
    {
      id: 'manufacturing',
      name: 'Manufacturing & Production',
      icon: Factory,
      description: 'Raw material procurement, production tracking, BOM calculation, COGS analytics, and inventory leakage prevention.',
      solutions: ['BillSarthi', 'COGS Analytics', 'VendorSarthi'],
      impact: '100% Raw Material Leak Audit'
    },
    {
      id: 'fmcg',
      name: 'FMCG & Wholesale Distributors',
      icon: Store,
      description: 'Order booking by field agents, dispatch tracking, batch stock alerts, and automated WhatsApp invoices.',
      solutions: ['SupplySarthi', 'StockSarthi', 'HisabSarthi'],
      impact: '3x Faster Dispatch Cycles'
    },
    {
      id: 'restaurants',
      name: 'Restaurants & QSR Outlets',
      icon: Utensils,
      description: 'Digital QR menus, Kitchen Order Tickets (KOT), recipe cost tracking, and automated daily sales WhatsApp reports.',
      solutions: ['MenuSarthi', 'CakeSarthi', 'BillSarthi'],
      impact: 'Zero Order Misses'
    },
    {
      id: 'retail',
      name: 'Retail & Multi-Store Chains',
      icon: ShoppingBag,
      description: 'Centralized stock management, reorder alerts, customer loyalty logs, and GST billing automation.',
      solutions: ['RationKart', 'StockSarthi', 'BillSarthi'],
      impact: 'Real-Time Inventory Sync'
    },
    {
      id: 'finance',
      name: 'Finance & Micro-Lending',
      icon: Landmark,
      description: 'Borrower loan books, interest calculation, EMI collection schedules, and automated WhatsApp payment reminders.',
      solutions: ['LoanSarthi', 'PersonalFinSarthi', 'HisabSarthi'],
      impact: '95% On-Time EMI Recovery'
    },
    {
      id: 'services',
      name: 'Service Agencies & Contractors',
      icon: Building2,
      description: 'Client project tracking, quotation generation, staff timesheets, staff payroll, and expense claim verification.',
      solutions: ['KarmSarthi', 'Claimo', 'HireSarthi'],
      impact: '50% Admin Time Saved'
    },
    {
      id: 'healthcare',
      name: 'Healthcare, Clinics & Labs',
      icon: Stethoscope,
      description: 'Patient appointment booking, lab report WhatsApp dispatch, medicine stock tracking, and claim records.',
      solutions: ['BookingSarthi', 'Claimo', 'StockSarthi'],
      impact: 'Instant WhatsApp Reports'
    },
    {
      id: 'education',
      name: 'Schools & Educational Institutes',
      icon: GraduationCap,
      description: 'Student fee receipt generation, staff attendance, admission inquiry funnels, and parent WhatsApp notices.',
      solutions: ['KarmSarthi', 'BookingSarthi', 'SalarySarthi'],
      impact: '100% Fee Record Accuracy'
    },
    {
      id: 'logistics',
      name: 'Logistics & Supply Chain',
      icon: Truck,
      description: 'Driver assignment logs, trip cost recording, consignment status WhatsApp triggers, and vendor PO matching.',
      solutions: ['SupplySarthi', 'VendorSarthi', 'BudgetSarthi'],
      impact: 'Real-time Consignment Logs'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold text-xs uppercase tracking-wider mb-4 border border-cyan-500/20">
            Tailored Industry Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Software Built For Your Specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Industry Workflows</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-body">
            We understand the unique operational pain points of every sector. Explore how our custom software & Sarthi tools automate daily business workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetIndustries.map((industry, idx) => {
            const Icon = industry.icon;
            const isSelected = activeIdx === idx;
            return (
              <div
                key={industry.id}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`group cursor-pointer bg-slate-50 dark:bg-slate-950 rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                  isSelected 
                    ? 'border-blue-500 shadow-xl dark:shadow-blue-900/20 ring-2 ring-blue-500/20 scale-[1.02]' 
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                      {industry.impact}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {industry.name}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-body">
                    {industry.description}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Pre-Engineered Solutions:</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {industry.solutions.map((sol, sIdx) => (
                      <span key={sIdx} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200">
                        {sol}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                  >
                    <span>View Industry Software Suite</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
