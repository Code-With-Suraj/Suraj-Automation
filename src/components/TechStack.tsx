import { Code2, Cpu, Database, Cloud, Sparkles, MessageSquare, CreditCard, MapPin, Globe, Server } from 'lucide-react';

export default function TechStack() {
  const technologies = [
    { name: "Google Apps Script", category: "Core Automation", icon: Code2, desc: "Serverless backend logic executing directly inside Google Workspace." },
    { name: "React & Next.js", category: "Frontend Web Apps", icon: Globe, desc: "Ultra-fast, responsive web portals and SaaS interfaces." },
    { name: "Google Workspace & Sheets", category: "Cloud Database", icon: Database, desc: "Free, real-time cloud data storage with zero recurring bills." },
    { name: "Node.js & Express", category: "API Backend", icon: Server, desc: "Scalable backend API integrations and background job workers." },
    { name: "Gemini & OpenAI API", category: "AI Intelligence", icon: Sparkles, desc: "Smart OCR invoice extraction, AI auto-categorization & summaries." },
    { name: "WhatsApp Business API", category: "Messaging Trigger", icon: MessageSquare, desc: "Instant automated invoice dispatches, alerts & customer bots." },
    { name: "Firebase & Supabase", category: "Realtime Cloud", icon: Cloud, desc: "Authentication, live databases and secure document storage." },
    { name: "Razorpay Gateway", category: "Payments", icon: CreditCard, desc: "Instant UPI, Credit Card, and net banking payment links." },
    { name: "Vercel & Cloudflare", category: "Global Deployment", icon: Cpu, desc: "Sub-second global CDN hosting with 99.99% uptime SLA." },
    { name: "Google Maps Platform", category: "Location Intelligence", icon: MapPin, desc: "Distance matrix calculation, address validation & dispatch routes." },
  ];

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 font-semibold text-xs uppercase tracking-wider mb-4 border border-blue-500/20">
            Engineered On Modern Tech Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Built With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">Enterprise Technology</span>
          </h2>
          <p className="text-slate-400 text-base font-body">
            We leverage cutting-edge Web, AI, and Cloud frameworks to deliver ultra-fast, zero-maintenance software architectures.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div 
                key={idx}
                className="group p-5 bg-slate-800/60 rounded-2xl border border-slate-700/60 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </h3>
                  <span className="text-[10px] text-cyan-400 font-semibold block mt-0.5">
                    {tech.category}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-3 line-clamp-2 font-body">
                  {tech.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
