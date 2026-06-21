import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Settings, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Calculator, 
  Check, 
  ChevronRight,
  Sparkles,
  ClipboardList,
  Clock,
  Briefcase
} from 'lucide-react';
import { useUser } from '../../contexts/UserContext';
import { useSEO } from '../../hooks/useSEO';
import RazorpayCheckout from '../../components/RazorpayCheckout';

export default function SalarySarthi() {
  const { hasPurchased } = useUser();
  const isPurchased = hasPurchased('salarysarthi');

  useSEO(
    'SalarySarthi | HRMS & Payroll Management System for SMBs',
    'SalarySarthi isn\'t trying to be another bloated HRMS—it focuses on solving payroll and attendance pain for SMBs surprisingly well.',
    'payroll management system, hr software smb, google sheets payroll, attendance management'
  );

  const features = [
    {
      title: "Employee Management",
      rating: "⭐⭐⭐⭐☆ (4.5/5)",
      icon: <Users className="w-6 h-6" />,
      items: [
        "Maintains employee master records with departments and designations",
        "Tracks bank details, PF, Aadhaar/PAN, and employment status",
        "Acts as the foundation for the entire platform workflow"
      ]
    },
    {
      title: "Role-Based Access Control",
      rating: "⭐⭐⭐⭐⭐ (5/5)",
      icon: <ShieldCheck className="w-6 h-6" />,
      items: [
        "Different experiences for: HR, Manager, Employee",
        "Navigation and permissions dynamically change based on role",
        "Employees see their own data, Managers see departments"
      ]
    },
    {
      title: "Attendance Management",
      rating: "⭐⭐⭐⭐⭐ (5/5)",
      icon: <ClipboardList className="w-6 h-6" />,
      items: [
        "Supports Bulk marking, Daily, OT, Present, Absent, Half Day",
        "Track Paid Leave, Unpaid Leave, Holiday, Weekly Off",
        "Monthly attendance visualization included"
      ]
    },
    {
      title: "Payroll Processing Engine",
      rating: "⭐⭐⭐⭐⭐ (5/5)",
      icon: <Calculator className="w-6 h-6" />,
      items: [
        "Gross & Net Salary, PF, ESI, and Advance recovery",
        "Dynamic calculation of working / LOP days",
        "Payroll status workflow: Draft → Review → Approved → Processed → Paid"
      ]
    },
    {
      title: "Salary Slip Generator",
      rating: "⭐⭐⭐⭐⭐ (5/5)",
      icon: <FileText className="w-6 h-6" />,
      items: [
        "Generates professional PDF salary slips using jsPDF",
        "Includes company details, pay period, and breakdowns",
        "PF/UAN references are automatically pulled in"
      ]
    },
    {
      title: "Shift Management & Notifications",
      rating: "⭐⭐⭐⭐☆ (4.5/5)",
      icon: <Clock className="w-6 h-6" />,
      items: [
        "Department-level shift configuration with employee-level overrides",
        "Built-in notification center with read/unread tracking",
        "Useful for factories and operations-heavy businesses"
      ]
    }
  ];

  return (
    <main className="pt-24 pb-20 bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-950/50 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-bold tracking-wide mb-6 border border-indigo-500/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Featured Product
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                An Honest HRMS & Payroll Engine.
              </h1>
              
              <p className="text-xl text-slate-350 mb-8 leading-relaxed">
                SalarySarthi isn't trying to be another bloated enterprise HR suite. It focuses strictly on solving payroll, leave workflows, and attendance pain for SMBs surprisingly well.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-slate-900 rounded-lg text-sm font-semibold text-slate-300 border border-slate-800">HRMS</span>
                <span className="px-4 py-2 bg-slate-900 rounded-lg text-sm font-semibold text-slate-300 border border-slate-800">Automated Payroll</span>
                <span className="px-4 py-2 bg-slate-900 rounded-lg text-sm font-semibold text-slate-300 border border-slate-800">Attendance Engine</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#checkout-salarysarthi" 
                  className="inline-flex px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1 items-center justify-center gap-2 group"
                >
                  {isPurchased ? "View Setup Guide" : "Instant Access for ₹15,000"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20am%20interested%20in%20SalarySarthi.%20Can%20I%20see%20a%20free%20demo?" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-xl font-bold text-lg transition-all items-center justify-center gap-2 hover:-translate-y-1"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  Book a Free Demo →
                </a>
              </div>
            </motion.div>

            {/* Tech Stack Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl blur-3xl opacity-10"></div>
              
              <div className="bg-slate-900 border border-slate-850 p-6 md:p-8 rounded-3xl relative shadow-2xl">
                <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 font-bold">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-extrabold text-sm block">Tech Stack Found</span>
                      <span className="text-[10px] text-slate-500 font-bold font-mono">ANALYST REPORT</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 font-mono text-xs font-bold text-slate-300">
                  <div className="flex bg-slate-950 p-3 rounded-xl border border-slate-850">
                    <span className="text-indigo-400 w-1/3">Backend</span>
                    <span className="w-2/3">Google Apps Script</span>
                  </div>
                  <div className="flex bg-slate-950 p-3 rounded-xl border border-slate-850">
                    <span className="text-indigo-400 w-1/3">Data Layer</span>
                    <span className="w-2/3">Google Sheets</span>
                  </div>
                  <div className="flex bg-slate-950 p-3 rounded-xl border border-slate-850">
                    <span className="text-indigo-400 w-1/3">Frontend Core</span>
                    <span className="w-2/3">HTML5 + CSS3, Vanilla JS</span>
                  </div>
                  <div className="flex bg-slate-950 p-3 rounded-xl border border-slate-850">
                    <span className="text-indigo-400 w-1/3">UI Framework</span>
                    <span className="w-2/3">Bootstrap 5 + Icons</span>
                  </div>
                  <div className="flex bg-slate-950 p-3 rounded-xl border border-slate-850">
                    <span className="text-indigo-400 w-1/3">Reporting/PDF</span>
                    <span className="w-2/3">Chart.js, jsPDF + AutoTable</span>
                  </div>
                  <div className="flex bg-slate-950 p-3 rounded-xl border border-slate-850">
                    <span className="text-indigo-400 w-1/3">Authentication</span>
                    <span className="w-2/3">Google Workspace Services</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 text-indigo-600 font-bold mb-4 bg-indigo-50 px-3 py-1 rounded-full text-xs border border-indigo-100">
                <FileText className="w-4 h-4" />
                The Setup — Why Does This Product Exist?
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-none">
                Imagine you're running a 120-employee warehouse...
              </h2>
              
              <div className="text-slate-600 text-lg mb-8 font-medium space-y-4">
                <p>Attendance comes from supervisors. Leave requests arrive on WhatsApp. Salary advances are tracked in Excel. Payroll is prepared in another Excel file.</p>
                <p>Then month-end arrives.</p>
                <p>Suddenly HR spends 2–3 days reconciling attendance, checking leaves, adjusting advances, calculating deductions, generating salary slips, and answering employee questions.</p>
                <div className="p-4 bg-slate-950 rounded-xl text-white mt-6">
                  <p className="font-bold text-sm tracking-wide">
                    "This is exactly the chaos SalarySarthi appears to target. It focuses on the workflows SMBs actually struggle with. That's a much smarter positioning strategy than trying to solve everything."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-slate-200/80 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2.5 h-full bg-indigo-600"></div>
              
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-emerald-500 w-6 h-6" /> Who Should Buy This?
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-black text-slate-950 uppercase tracking-widest mb-3">✅ BUY if you are:</h4>
                  <ul className="space-y-2 text-sm font-semibold text-slate-600">
                    <li className="flex gap-2"><span>✔</span> Manufacturing company with 20–500 employees</li>
                    <li className="flex gap-2"><span>✔</span> Catering company managing multiple sites</li>
                    <li className="flex gap-2"><span>✔</span> Warehouse or logistics operation</li>
                    <li className="flex gap-2"><span>✔</span> Security agency or Housekeeping service provider</li>
                    <li className="flex gap-2"><span>✔</span> Labour-intensive service business</li>
                    <li className="flex gap-2"><span>✔</span> Growing SMB currently using Excel payroll</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-black text-rose-600 uppercase tracking-widest mb-3">❌ SKIP if you are:</h4>
                  <ul className="space-y-2 text-sm font-semibold text-slate-600">
                    <li className="flex gap-2 text-slate-400"><span>✖</span> Enterprise with 5,000+ employees</li>
                    <li className="flex gap-2 text-slate-400"><span>✖</span> Company needing advanced recruitment ATS</li>
                    <li className="flex gap-2 text-slate-400"><span>✖</span> Organization requiring deep compliance automation</li>
                    <li className="flex gap-2 text-slate-400"><span>✖</span> Business expecting a complete ERP suite</li>
                  </ul>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Feature Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Feature-by-Feature Breakdown
            </h2>
            <p className="text-slate-600 font-semibold text-lg max-w-2xl mx-auto">
              Reviewed by a B2B Software Analyst who's evaluated 200+ SMB tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-7 border border-slate-200/70 shadow-sm hover:border-indigo-300 transition-all hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 border border-indigo-100">
                  {feature.icon}
                </div>
                <div className="flex justify-between items-start mb-3 border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-extrabold text-slate-900 leading-tight">
                    {feature.title}
                  </h3>
                  <span className="text-xs font-black bg-slate-50 text-slate-700 px-2 py-1 rounded whitespace-nowrap">
                    {feature.rating}
                  </span>
                </div>
                <ul className="space-y-2 text-sm font-medium text-slate-600">
                  {feature.items.map((it, itIdx) => (
                    <li key={itIdx} className="flex gap-2 items-start">
                      <span className="text-indigo-400 font-extrabold shrink-0">•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Verdict & Pricing */}
      <section id="checkout-salarysarthi" className="py-20 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-black uppercase tracking-wider mb-3">
              The Real Value Proposition
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">If SalarySarthi can save your HR team just 15-20 hours monthly, it pays for itself.</h2>
            <p className="text-slate-400 font-semibold text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              At whatever price this product is offered, the comparison shouldn't be against enterprise HR software. The real comparison is: Excel + WhatsApp + Manual Payroll + HR Time. The value is removing month-end chaos.
            </p>
            
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden max-w-2xl mx-auto">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Final Verdict Rating: 8.7/10</h3>
              <div className="text-5xl md:text-6xl font-black text-white mb-4">
                ₹15,000
              </div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-8">One-time payment. Lifetime usage.</p>
              
              <RazorpayCheckout productId="salarysarthi" />

              <a
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20demo%20for%20SalarySarthi."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex mt-4 py-4 bg-transparent border border-slate-700 text-slate-300 hover:bg-slate-800 rounded-xl font-bold transition-all items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                Book a Free Demo →
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
