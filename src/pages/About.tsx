import { motion } from 'motion/react';
import { 
  Bot, 
  RefreshCw, 
  LineChart, 
  Boxes, 
  FileText, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Target
} from 'lucide-react';

export default function About() {
  const whatWeDo = [
    {
      icon: <Bot className="w-8 h-8 text-indigo-500" />,
      title: "AI-Enhanced Automation",
      desc: "Integrating Artificial Intelligence (like ChatGPT/Gemini APIs) into your daily workflow to automatically extract data from WhatsApp chats, categorize expenses, and generate smart daily summaries."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-indigo-500" />,
      title: "Operations & Workflows",
      desc: "Converting repetitive daily tasks into seamless, zero-touch automated loops."
    },
    {
      icon: <LineChart className="w-8 h-8 text-indigo-500" />,
      title: "Data Tracking & Dashboards",
      desc: "Real-time visibility on payments, inventory, clients, and staff performance."
    },
    {
      icon: <Boxes className="w-8 h-8 text-indigo-500" />,
      title: "Google Ecosystem Integration",
      desc: "Supercharging Google Sheets, Forms, and the tools your team already uses with advanced Apps Script."
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-500" />,
      title: "GST-Ready Business Logic",
      desc: "Custom invoicing, auto-switching taxes, and ledger reports built for Indian compliance."
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Understand",
      desc: "Deep dive into your business workflow, team dynamics, and pain points."
    },
    {
      num: "02",
      title: "Identify",
      desc: "Spot the inefficiencies and manual tasks where code or AI can save you time."
    },
    {
      num: "03",
      title: "Design",
      desc: "Plan a practical, simple system that fits your local staff's workflow."
    },
    {
      num: "04",
      title: "Build",
      desc: "Develop and automate processes with clean, maintainable code and smart AI integrations."
    },
    {
      num: "05",
      title: "Deliver",
      desc: "Launch with custom dashboards, training, and ongoing support."
    }
  ];

  return (
    <main className="pt-24 pb-0 bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* 1. Hero Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 dark:from-slate-900 via-white dark:via-slate-950 to-white dark:to-slate-950 -z-10 transition-colors"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-sm font-bold tracking-wide mb-8 border border-indigo-100 dark:border-indigo-500/20">
                About Suraj Automation
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1] transition-colors">
                Replacing Excel & WhatsApp Chaos with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">Smart, AI-Powered Business Systems.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto transition-colors">
                At Suraj Automation, we build custom web apps and intelligent automation systems tailored for ambitious Indian SMBs. We provide a premium, low-cost ERP alternative that leverages code and Artificial Intelligence to cut manual multi-tasking by 50%, so you can focus on growing your business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Our Mission */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl"
            >
              <img 
                src="https://sarthi-automations.vercel.app/static/suraj.png" 
                alt="Suraj Singh" 
                className="w-full h-full object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white text-2xl font-bold">Suraj Singh</h3>
                  <p className="text-indigo-300 font-medium">Founder, Suraj Automation</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4">Our Mission</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 italic transition-colors">
                "Excel se System tak."
              </h3>
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 transition-colors">
                <p>
                  Led by Suraj Singh, Suraj Automation was built to solve a specific problem: local businesses struggling with scattered data, operational bottlenecks, and manual human errors.
                </p>
                <p>
                  We believe that small business owners shouldn't have to act as data entry operators. Our mission is to transform your scattered WhatsApp messages and manual Excel sheets into centralized, automated, and AI-enhanced business engines.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. What We Do */}
      <section className="py-24 relative overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4">What We Do</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">
              Specialized Solutions, <br/> Not Just Beautiful Websites
            </h3>
            <p className="text-xl text-slate-600 dark:text-slate-300 transition-colors">
              Most businesses need more than just a digital brochure. We provide specialized business automation services that solve real-world problems using the Google Workspace ecosystem and modern AI tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDo.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group"
              >
                <div className="bg-indigo-50 dark:bg-indigo-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">{item.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Us / Our Philosophy */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">Our Philosophy</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
                The Low-Cost ERP Alternative
              </h3>
              <div className="h-1 w-20 bg-indigo-500 rounded-full mb-8"></div>
              <p className="text-xl text-slate-300 font-medium leading-relaxed mb-6">
                Enterprise ERPs are expensive and complex. Generic no-code tools are limited. We bridge the gap.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                We specialize in operational workflows, which means we say no to generic e-commerce templates. Instead, we say yes to AI-driven internal tools, automated daily reports, and data-driven dashboards. You get a cutting-edge solution that actually improves your bottom line, without confusing your staff.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Target className="w-6 h-6 text-emerald-400" />, title: "Focused on Operations", desc: "No generic templates. Built for your specific workflows." },
                { icon: <Cpu className="w-6 h-6 text-blue-400" />, title: "AI-Driven", desc: "Leveraging modern AI to eliminate manual data entry." },
                { icon: <TrendingUp className="w-6 h-6 text-rose-400" />, title: "High ROI", desc: "A fraction of the cost of enterprise ERPs with immediate impact." },
                { icon: <RefreshCw className="w-6 h-6 text-amber-400" />, title: "Staff Friendly", desc: "Simple interfaces that your team will actually want to use." }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (idx * 0.1) }}
                  className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80"
                >
                  <div className="bg-slate-900/50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Process */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4">Our Process</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">
              How We Build Your System
            </h3>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-[2.5rem] left-[60%] w-[80%] h-[2px] bg-slate-200 dark:bg-slate-700"></div>
                )}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 h-full relative z-10 shadow-sm transition-colors">
                  <div className="text-4xl font-black text-indigo-100 dark:text-indigo-900/50 mb-6 font-mono transition-colors">
                    {step.num}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">{step.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors text-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">
            You are a business owner. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Not a data entry operator.
            </span>
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-12">
            Let's automate the chaos and scale your operations smoothly.
          </p>

          <a 
            href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20would%20like%20to%20book%20my%20free%20process%20audit."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-5 rounded-2xl font-bold text-lg md:text-xl transition-all shadow-xl shadow-indigo-600/25 group hover:-translate-y-1"
          >
            Book Your Free Process Audit
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

    </main>
  );
}

