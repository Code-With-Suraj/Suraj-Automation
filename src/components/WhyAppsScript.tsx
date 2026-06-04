import { motion } from 'motion/react';
import { ShieldCheck, Info, CheckCircle2, AlertTriangle, Cpu, CircleDollarSign, Terminal } from 'lucide-react';

const specs = [
  {
    parameter: "Database & Storage Fee",
    gasSolution: "₹0 / mo (Uses Google Drive & Spreadsheet limits with 15GB/5TB storage)",
    enterpriseErp: "₹4,500+ / mo per user (Rigid licensing & database scaling fees)",
    customVps: "₹2,500+ / mo (Requires PostgreSQL/MySQL instance + backup retention)"
  },
  {
    parameter: "Code Ownership",
    gasSolution: "100% Client-Owned (Directly in your Google Account script console)",
    enterpriseErp: "0% Owned (Proprietary cloud locked in vendor ecosystem)",
    customVps: "Self-Managed (Requires continuous code repository hosting & SSH keys)"
  },
  {
    parameter: "Host Ingress & Ingress Rates",
    gasSolution: "Free serverless auto-scaling (Native Google Cloud ingress protection)",
    enterpriseErp: "Bandwidth caps & rate limits on custom API endpoints",
    customVps: "Vulnerable to DDoS without specialized cloud flare / load balancers"
  },
  {
    parameter: "Frontend customizability",
    gasSolution: "HTML5 / Tailwind CSS / React compiled inside secure Google HTML Sandbox",
    enterpriseErp: "Standard templated SaaS layouts (No direct layout customization)",
    customVps: "Complete freedom (But requires full-stack deployment pipelines)"
  },
  {
    parameter: "Maintenance & Security",
    gasSolution: "Zero monthly DevOps overhead. Secured via Google JWT credentials.",
    enterpriseErp: "Requires specialized software staff to handle complex integrations.",
    customVps: "Active pipeline monitoring needed. SSL renewals and OS security patches."
  }
];

export default function WhyAppsScript() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300" id="architecture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-xs font-mono font-bold tracking-widest uppercase border border-indigo-100 dark:border-indigo-500/20">
            <Cpu className="w-3.5 h-3.5" />
            Engine Specifications Comparison
          </span>
          <h2 className="text-4.5xl md:text-5xl font-black text-slate-900 dark:text-white mt-6 mb-6 tracking-tight leading-none">
            Why Google Apps Script <span className="bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 bg-clip-text text-transparent">Apps Sandbox</span>?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto font-body">
            Forget complex VM container licensing and rigid ERP systems. Choose serverless Google integrations hosted directly in your Drive.
          </p>
        </div>

        {/* System Spec Matrix table */}
        <div className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-850 rounded-[1.75rem] shadow-2xl overflow-hidden">
          
          <div className="p-6 md:p-8 bg-slate-100/60 dark:bg-slate-900/50 border-b border-slate-200/50 dark:border-slate-850 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-indigo-500" />
                Architecture Parameters Ledger
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Comparing technical implementation stats of custom GAS Webapps against SaaS suites.</p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 dark:bg-emerald-900/10 px-3 py-1.5 rounded-lg border border-emerald-200/55 dark:border-emerald-900/20">
              <CheckCircle2 className="w-3.5 h-3.5 inline text-emerald-500" />
              100% Lifetime Cost Reduction
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-100/30 dark:bg-slate-950/80 border-b border-slate-200/40 dark:border-slate-850 text-xs text-slate-400 tracking-wider uppercase font-mono">
                  <th className="px-6 py-4 font-black border-r border-slate-200/30 dark:border-slate-850">Evaluation Metric</th>
                  <th className="px-6 py-4 font-black text-indigo-600 dark:text-indigo-400 border-r border-slate-200/30 dark:border-slate-850">Suraj Automation (GAS Tools)</th>
                  <th className="px-6 py-4 border-r border-slate-200/30 dark:border-slate-850">Standard SaaS / Enterprise ERP</th>
                  <th className="px-6 py-4">Custom Full-Stack Code (Node/Python)</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((item, idx) => (
                  <tr key={idx} className="border-b border-slate-200/30 dark:border-slate-850 last:border-b-0 hover:bg-slate-100/10 dark:hover:bg-slate-950/20 text-sm transition-colors">
                    
                    {/* Metric parameter */}
                    <td className="px-6 py-5 font-bold text-slate-900 dark:text-white border-r border-slate-200/30 dark:border-slate-850 font-sans">
                      {item.parameter}
                    </td>

                    {/* Suraj Custom GAS Solution highlight */}
                    <td className="px-6 py-5 border-r border-slate-200/30 dark:border-slate-850 text-slate-800 dark:text-slate-200 bg-indigo-50 hover:bg-indigo-100/30 dark:bg-indigo-950/10 dark:hover:bg-indigo-950/20 transition-colors font-medium">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{item.gasSolution}</span>
                      </div>
                    </td>

                    {/* Standard ERP */}
                    <td className="px-6 py-5 text-slate-500 dark:text-slate-400 border-r border-slate-200/30 dark:border-slate-850">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-rose-500/80 mt-0.5 shrink-0" />
                        <span>{item.enterpriseErp}</span>
                      </div>
                    </td>

                    {/* Custom build */}
                    <td className="px-6 py-5 text-slate-500 dark:text-slate-400">
                      <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-amber-500/80 mt-0.5 shrink-0" />
                        <span>{item.customVps}</span>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick specs footnote */}
          <div className="p-6 bg-slate-100/40 dark:bg-slate-950 border-t border-slate-200/40 dark:border-slate-850 flex flex-col md:flex-row items-center justify-between text-xs text-slate-450 gap-4">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500 inline" /> Native Google Data Privacy standards are honored completely. No third-party data collection.</span>
            <span className="font-mono text-slate-500 uppercase">Architecture status: SECURED</span>
          </div>

        </div>

      </div>
    </section>
  );
}
