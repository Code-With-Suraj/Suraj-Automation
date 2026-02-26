import { motion } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, Clock, AlertTriangle, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Starter Automation",
      subtitle: "For Small Businesses Starting Systemization",
      bestFor: "Retailers / small service businesses",
      color: "emerald",
      popular: false,
      features: [
        "Basic process automation",
        "Order or lead tracking sheet automation",
        "Email alerts setup",
        "Simple dashboard",
        "1 revision cycle"
      ],
      ideal: "Ideal if you want to start reducing manual work."
    },
    {
      name: "Growth System",
      subtitle: "For Businesses Ready to Scale",
      bestFor: "Traders / distributors / multi-staff business",
      color: "indigo",
      popular: true,
      features: [
        "Multi-process automation",
        "Inventory tracking system",
        "Payment due tracking",
        "Custom dashboard",
        "Role-based access",
        "2–3 revision cycles"
      ],
      ideal: "This plan gives you a properly structured system."
    },
    {
      name: "Advanced Custom Web App",
      subtitle: "Full Business System Automation",
      bestFor: "Scaling SMBs",
      color: "slate",
      popular: false,
      features: [
        "Complete custom web app",
        "End-to-end workflow automation",
        "MIS dashboard",
        "Multi-user system",
        "Advanced reporting",
        "Long-term scalability",
        "Dedicated support period"
      ],
      ideal: "This is a mini-ERP alternative — within the Google ecosystem."
    }
  ];

  const processSteps = [
    "Free discussion call",
    "Process analysis",
    "Scope finalization",
    "Development",
    "Testing",
    "Deployment",
    "Support"
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-950 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-indigo-500/20 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-bold tracking-wide mb-6 border border-indigo-500/20 backdrop-blur-sm">
              Transparent Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Custom Automation for <br className="hidden sm:block" /> Growing Businesses
            </h1>
            <p className="text-2xl text-indigo-400 font-medium">Clear Pricing. No Confusion.</p>
          </motion.div>
        </div>
      </section>

      {/* How Pricing Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How Pricing Works</h2>
          <p className="text-xl text-slate-600 mb-10">
            Every business is different. That's why pricing depends on:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-5 py-2.5 bg-white rounded-xl text-slate-700 font-semibold shadow-sm border border-slate-200 flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-500"/> Process complexity</span>
            <span className="px-5 py-2.5 bg-white rounded-xl text-slate-700 font-semibold shadow-sm border border-slate-200 flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-500"/> Automation level</span>
            <span className="px-5 py-2.5 bg-white rounded-xl text-slate-700 font-semibold shadow-sm border border-slate-200 flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-500"/> Dashboard requirement</span>
            <span className="px-5 py-2.5 bg-white rounded-xl text-slate-700 font-semibold shadow-sm border border-slate-200 flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-500"/> Integrations</span>
            <span className="px-5 py-2.5 bg-white rounded-xl text-slate-700 font-semibold shadow-sm border border-slate-200 flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-500"/> Custom web app features</span>
          </div>
          <div className="inline-block bg-indigo-100 text-indigo-800 px-6 py-3 rounded-full font-bold text-lg">
            But for clarity, 3 structured plans are given.
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 relative">
        <div className="absolute top-0 w-full h-1/2 bg-slate-50 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 md:p-10 border-2 ${plan.popular ? 'border-indigo-500 shadow-2xl shadow-indigo-200/50 scale-105 z-10' : 'border-slate-100 shadow-xl shadow-slate-200/50'} flex flex-col transition-transform hover:-translate-y-2`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-6 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase shadow-md">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8 border-b border-slate-100 pb-8">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-500 font-medium mb-6">{plan.subtitle}</p>
                  <div className={`bg-${plan.color}-50 p-4 rounded-xl border border-${plan.color}-100`}>
                    <span className={`text-xs font-bold text-${plan.color}-700 uppercase tracking-wider`}>Best For</span>
                    <p className={`text-sm font-semibold text-${plan.color}-900 mt-1`}>{plan.bestFor}</p>
                  </div>
                </div>

                <div className="flex-grow mb-8">
                  <p className="font-bold text-slate-900 mb-6 uppercase tracking-wide text-sm">What's Included</p>
                  <ul className="space-y-4">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 text-${plan.color}-500 flex-shrink-0 mt-0.5`} />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`mt-auto p-5 rounded-2xl bg-slate-50 border border-slate-100`}>
                  <p className="text-sm font-semibold text-slate-600 text-center italic">
                    "{plan.ideal}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Don't Pay For */}
      <section className="py-20 bg-red-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">What You Don’t Pay For</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
                <XCircle className="text-red-500 w-8 h-8" />
              </div>
              <span className="font-bold text-slate-800">Monthly heavy SaaS subscription</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
                <XCircle className="text-red-500 w-8 h-8" />
              </div>
              <span className="font-bold text-slate-800">Unnecessary features</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
                <XCircle className="text-red-500 w-8 h-8" />
              </div>
              <span className="font-bold text-slate-800">Complicated training</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
                <XCircle className="text-red-500 w-8 h-8" />
              </div>
              <span className="font-bold text-slate-800">Enterprise overhead</span>
            </div>
          </div>
        </div>
      </section>

      {/* Investment vs Return */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Investment vs Return</h2>
              
              <p className="text-2xl text-indigo-300 mb-10 text-center font-medium">If automation helps you:</p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-center gap-5 bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-emerald-400 w-6 h-6" />
                  </div>
                  <span className="font-semibold text-lg">Save 2 hours daily</span>
                </div>
                <div className="flex items-center gap-5 bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-emerald-400 w-6 h-6" />
                  </div>
                  <span className="font-semibold text-lg">Reduce 1 staff dependency</span>
                </div>
                <div className="flex items-center gap-5 bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="text-emerald-400 w-6 h-6" />
                  </div>
                  <span className="font-semibold text-lg">Don't miss 1 payment follow-up</span>
                </div>
                <div className="flex items-center gap-5 bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-emerald-400 w-6 h-6" />
                  </div>
                  <span className="font-semibold text-lg">Prevent 1 inventory loss</span>
                </div>
              </div>

              <div className="text-center border-t border-slate-700/50 pt-10">
                <p className="text-3xl font-bold text-emerald-400 mb-6">Then the system recovers its cost.</p>
                <div className="inline-block bg-slate-800 px-8 py-4 rounded-2xl border border-slate-700">
                  <p className="text-xl text-slate-300">
                    Automation is not an expense.<br/>
                    <span className="text-white font-bold mt-1 block">It's an investment in operational efficiency.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">Process</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-300 transition-colors">
                <span className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-black text-lg">
                  {idx + 1}
                </span>
                <span className="font-bold text-slate-700">{step}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-4">
              <span className="text-indigo-600">Clear.</span>
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              <span className="text-indigo-600">Transparent.</span>
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              <span className="text-indigo-600">Structured.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border border-slate-200 p-10 md:p-16 rounded-[2.5rem] shadow-2xl shadow-indigo-100/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
            
            <p className="text-xl text-slate-500 font-medium mb-2">If you are only looking at the price —</p>
            <p className="text-2xl font-bold text-slate-900 mb-10">Then maybe you are not ready yet.</p>
            
            <div className="w-16 h-1 bg-slate-200 mx-auto mb-10 rounded-full"></div>
            
            <p className="text-3xl md:text-4xl font-extrabold text-indigo-700 mb-10">If you want to build a system — Then let's talk.</p>
            
            <a 
              href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20build%20a%20system%20and%20discuss%20pricing." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xl transition-all shadow-xl shadow-indigo-200 items-center justify-center gap-3 mx-auto group hover:-translate-y-1"
            >
              Share your process
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-6 text-slate-600 font-semibold text-lg">I will give a clear roadmap + estimate.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
