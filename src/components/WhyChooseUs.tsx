import { motion } from 'motion/react';
import { DollarSign, ShieldCheck, MessageSquare, Cpu, Lock, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: DollarSign,
      title: "50% Lower Cost Than Agencies",
      badge: "Cost Savings",
      description: "Traditional software agencies charge ₹1.5L–₹5L+ for custom ERPs. We deliver production-grade custom software at straight 50% market savings.",
      highlight: "Save ₹50,000–₹2,000,000 per project"
    },
    {
      icon: Cpu,
      title: "Zero Monthly Subscription Fees",
      badge: "Lifetime Free Cloud",
      description: "Stop paying $50–$500/month SaaS lock-in subscriptions. We build on Google Workspace & Cloud Apps Script with lifetime zero server maintenance fees.",
      highlight: "100% Free Cloud Infrastructure"
    },
    {
      icon: MessageSquare,
      title: "Native WhatsApp Automation",
      badge: "Instant Alerts",
      description: "Automatically dispatch real-time WhatsApp order confirmations, GST bills, payment reminders, and status updates directly to clients & staff.",
      highlight: "Over 98% Open Rate Engagement"
    },
    {
      icon: Lock,
      title: "100% Data Ownership & Security",
      badge: "Enterprise Security",
      description: "Your data stays entirely inside your own Google Cloud Drive & company server. No external third-party access or data mining risks.",
      highlight: "Your Cloud, Your Complete Control"
    },
    {
      icon: Zap,
      title: "Tailor-Made To Your Workflows",
      badge: "Zero Compromise",
      description: "Don't force your operations into rigid template software. We build the exact custom forms, logic triggers, and dashboards your team needs.",
      highlight: "100% Custom Engineered Code"
    },
    {
      icon: ShieldCheck,
      title: "Rapid 5–7 Day Deployment",
      badge: "Fast Delivery",
      description: "From initial process audit to live employee training, your operational software goes live in days instead of months.",
      highlight: "Immediate ROI & Efficiency"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors">
      {/* Background Subtle Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-500/5 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold text-xs uppercase tracking-wider mb-4 border border-blue-500/20">
            Why Ambitious Businesses Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            The Difference Between A Web Agency & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Software Engineering</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-body">
            Most agencies sell static templates that look nice but do nothing for your bottom line. We engineer internal software platforms that run core business operations with extreme efficiency.
          </p>
        </div>

        {/* Grid of Why Choose Us Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-body">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Comparison Box */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-850 to-blue-950 rounded-3xl p-8 md:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800 mb-4 inline-block">
                The Positioning Promise
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                "We don't just build websites. We build software that runs businesses."
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-body">
                Whether you need a custom web application, automated WhatsApp CRM, Google Apps Script ERP, or a dynamic MIS dashboard — get enterprise software capability at half the cost.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20discuss%20building%20custom%20software%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 font-bold text-center text-white shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group transition-all"
              >
                <span>Schedule Free Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
