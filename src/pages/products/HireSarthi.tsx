import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  AlertTriangle, 
  CheckCircle2, 
  ListChecks, 
  Calendar, 
  Bell, 
  LayoutDashboard, 
  FileText, 
  ArrowRight, 
  MessageSquare, 
  Store, 
  TrendingUp, 
  ShieldCheck, 
  Settings, 
  Clock, 
  UserPlus, 
  Check, 
  ChevronRight,
  ShieldAlert,
  Sparkles,
  ClipboardList
} from 'lucide-react';
import { useUser } from '../../contexts/UserContext';
import { useSEO } from '../../hooks/useSEO';
import RazorpayCheckout from '../../components/RazorpayCheckout';

export default function HireSarthi() {
  const { hasPurchased } = useUser();
  const isPurchased = hasPurchased('hiresarthi');

  useSEO(
    'HireSarthi | Premium Recruitment & Onboarding Automation',
    'Streamline your recruitment pipeline, issue digital offer letters and onboard employees smoothly with our Google Workspace based system.',
    'recruitment software, onboarding system, applicant tracking system, google sheets hr database'
  );

  // States for Interactive Demos
  const [pipelineCandidate, setPipelineCandidate] = useState({
    name: 'Anjali Sharma',
    stage: 'Applied',
    history: ['Applied to Node Frontend Developer position - 10:30 AM today']
  });

  const pipelineStages = ['Applied', 'Shortlisted', 'Interviewing', 'Offered', 'Onboarded'];

  const problems = [
    "Scattered CVs in Gmail, WhatsApp, and download folders",
    "Writing and signing same-looking offer letters manually every week",
    "No structured pipeline - managers asking 'where is that CV'?",
    "Manual back-and-forth email templates for scheduling interviews",
    "Messy physical documents collection during onboarding",
    "Zero analytics on your human resources or recruitment metrics"
  ];

  const features = [
    {
      title: "Recruitment ATS Pipeline",
      icon: <Users className="w-6 h-6" />,
      items: [
        "Track candidates fluidly across all hiring stages",
        "Maintain candidate pipeline with real-time status updates",
        "Record comments, interviewer notes, and candidate ranks"
      ]
    },
    {
      title: "Digital Offer Letter Generation",
      icon: <FileText className="w-6 h-6" />,
      items: [
        "Generate stunning professional offer letters automatically",
        "Digital accept link sent instantly to candidates via auto-emails",
        "Track letter status (Sent, Opened, Accepted) in real-time"
      ]
    },
    {
      title: "Employee Onboarding Portal",
      icon: <UserPlus className="w-6 h-6" />,
      items: [
        "Enable candidates to enter banking records, PAN, and contacts",
        "Upload files and document scans with automatic folder placement",
        "Trigger custom checklists for hardware allotments"
      ]
    },
    {
      title: "Google Sheets HR Database",
      icon: <LayoutDashboard className="w-6 h-6" />,
      items: [
        "A central repository of your team data with 100% ownership",
        "Secure role-based dashboard for recruiters, managers, and HR",
        "Audit logs on edit permissions to prevent data theft"
      ]
    },
    {
      title: "Interview Scheduling & Tracking",
      icon: <Calendar className="w-6 h-6" />,
      items: [
        "Direct link integration to schedule Google Meet slots",
        "Automated calendar updates sent to panel members",
        "Automated reminder alerts to candidates"
      ]
    },
    {
      title: "Custom Workflows & Alerts",
      icon: <Bell className="w-6 h-6" />,
      items: [
        "WhatsApp / Email alerts to recruitment teams for updates",
        "Pre-integrated feedback forms for interviewers",
        "Consolidated HR recruitment analytics"
      ]
    }
  ];

  const handleAdvanceStage = () => {
    const currentIndex = pipelineStages.indexOf(pipelineCandidate.stage);
    if (currentIndex < pipelineStages.length - 1) {
      const nextStage = pipelineStages[currentIndex + 1];
      let eventMessage = '';
      if (nextStage === 'Shortlisted') eventMessage = 'Shortlisted by HR - Applied custom tags.';
      if (nextStage === 'Interviewing') eventMessage = 'Google Meet scheduled for Technical Assessment.';
      if (nextStage === 'Offered') eventMessage = 'Offer Letter (PDF link included) sent to recipient.';
      if (nextStage === 'Onboarded') eventMessage = 'Candidate accepted the offer! Completed digital onboarding details.';

      setPipelineCandidate({
        ...pipelineCandidate,
        stage: nextStage,
        history: [...pipelineCandidate.history, eventMessage]
      });
    } else {
      // Revert to start
      setPipelineCandidate({
        name: 'Anjali Sharma',
        stage: 'Applied',
        history: ['Applied to Node Frontend Developer position - 10:30 AM today']
      });
    }
  };

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
                Hire Faster.<br />Onboard Smarter.
              </h1>
              
              <p className="text-xl text-slate-350 mb-8 leading-relaxed">
                HireSarthi helps growing businesses streamline recruitment, digital offer letter generation, employee onboarding, and workforce management from a single platform. Stop manual email templates, paperwork, and scattered resumes.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-slate-900 rounded-lg text-sm font-semibold text-slate-300 border border-slate-800">Recruitment ATS</span>
                <span className="px-4 py-2 bg-slate-900 rounded-lg text-sm font-semibold text-slate-300 border border-slate-800">Digital Offer Letters</span>
                <span className="px-4 py-2 bg-slate-900 rounded-lg text-sm font-semibold text-slate-300 border border-slate-800">Employee database</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#checkout-hiresarthi" 
                  className="inline-flex px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1 items-center justify-center gap-2 group"
                >
                  {isPurchased ? "View Setup Guide & Code" : "Instant Access from ₹9,999"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20am%20interested%20in%20HireSarthi.%20Can%20I%20see%2520a%20free%20demo?" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-xl font-bold text-lg transition-all items-center justify-center gap-2 hover:-translate-y-1"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  Free Demo on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Visual Header Mock: Dynamic Candidate Pipeline Tool */}
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
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-extrabold text-sm block">HireSarthi ATS Dashboard</span>
                      <span className="text-[10px] text-slate-500 font-bold font-mono">LIVE PREVIEW ENGINE</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-800/40 px-3 py-1.5 rounded-lg border border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[11px] font-bold text-slate-400 font-mono">SYSTEM READY</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Pipeline Stage Indicators */}
                  <div className="flex justify-between items-center bg-slate-950 p-3.5 rounded-xl border border-slate-850/70 overflow-x-auto gap-2">
                    {pipelineStages.map((stg) => {
                      const isActive = pipelineCandidate.stage === stg;
                      return (
                        <div 
                          key={stg} 
                          className={`px-2.5 py-1 rounded-md text-[10px] font-black transition-all ${
                            isActive 
                              ? 'bg-indigo-600 text-white scale-105 border border-indigo-400/20' 
                              : 'bg-slate-900 text-slate-500 border border-transparent'
                          }`}
                        >
                          {stg}
                        </div>
                      );
                    })}
                  </div>

                  {/* Representative Card */}
                  <div className="bg-slate-850/80 rounded-2xl p-5 border border-slate-800 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-black text-slate-200 text-base">{pipelineCandidate.name}</h4>
                        <p className="text-xs font-semibold text-slate-500">Applied Role: Frontend Tech Engineer</p>
                      </div>
                      <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-black rounded-lg border border-indigo-500/20">
                        {pipelineCandidate.stage}
                      </span>
                    </div>

                    <div className="space-y-2 border-t border-slate-800 pt-3.5">
                      <p className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">Hiring Logs & History</p>
                      <div className="space-y-1 max-h-36 overflow-y-auto font-mono text-[11px] pr-1">
                        {pipelineCandidate.history.map((log, lIdx) => (
                          <div key={lIdx} className="text-slate-400 flex items-start gap-1.5 py-0.5">
                            <span className="text-indigo-400 select-none">❯</span>
                            <span>{log}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Button trigger */}
                    <button 
                      onClick={handleAdvanceStage}
                      className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02]"
                    >
                      <span>Advance Candidate Stage ➔</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 text-rose-600 font-bold mb-4 bg-rose-50 px-3 py-1 rounded-full text-xs border border-rose-100">
                <AlertTriangle className="w-4 h-4" />
                The HR Overhead Dilemma
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-none">
                Stop switching between spreadsheets, paperwork, and PDF signers.
              </h2>
              
              <p className="text-slate-600 text-lg mb-8 font-medium">
                Without a unified hiring database, candidates get lost in transit, interview loops are delayed, and you waste valuable operational hours reproducing standard forms.
              </p>

              <div className="space-y-3.5">
                {problems.map((prob, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-5.5 h-5.5 rounded-full bg-rose-50 text-rose-500 font-black flex items-center justify-center mt-0.5 shrink-0 text-xs">
                      ×
                    </div>
                    <span className="text-slate-700 font-semibold text-sm">{prob}</span>
                  </div>
                ))}
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
              
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Why HireSarthi?</h3>
              <p className="text-slate-600 mb-6 font-medium leading-relaxed">
                HireSarthi is structured purely on Google Workspace. You pay once, gain 100% data access forever, and operate directly with custom web integrations and auto-triggered updates.
              </p>

              <div className="space-y-4 font-bold text-slate-800">
                <div className="flex items-start gap-3.5">
                  <Check className="w-5.5 h-5.5 bg-indigo-50 text-indigo-600 p-1 rounded-full shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm">Centralized Recruitment Board</h4>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">Filter, search and tag candidates by role or stage easily.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3.5">
                  <Check className="w-5.5 h-5.5 bg-indigo-50 text-indigo-600 p-1 rounded-full shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm">No Recurring Subscriptions</h4>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">Ditch the $49/month SaaS templates. Settle your investment once and own your system.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3.5">
                  <Check className="w-5.5 h-5.5 bg-indigo-50 text-indigo-600 p-1 rounded-full shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm">Integrated Digital Acceptances</h4>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">Generate formal offer letters in Gmail and accept them gracefully inside Google Docs.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Features Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
              A Complete HR Workflow Workspace
            </h2>
            <p className="text-slate-600 font-semibold text-lg max-w-2xl mx-auto">
              Everything your growing company needs to transition from chaotic spreadsheets to audited digital structures.
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
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 border border-indigo-100">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-3">
                  {idx + 1}️⃣ {feature.title}
                </h3>
                <ul className="space-y-2 text-sm font-semibold text-slate-500">
                  {feature.items.map((it, itIdx) => (
                    <li key={itIdx} className="flex gap-2 items-start">
                      <span className="text-indigo-400 font-extrabold">•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Pricing & Implementation Section */}
      <section id="pricing" className="py-20 bg-slate-100/50 border-t border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 rounded-full text-xs font-black uppercase tracking-wider mb-3">
              One-Time Implementation Suite
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">One-Time Setup Investment</h2>
            <p className="text-slate-600 font-semibold text-lg max-w-xl mx-auto">Pay Once. Own the System. No Monthly Subscriptions or Hidden Fees.</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-xl max-w-4xl mx-auto overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl"></div>
            
            <div className="grid md:grid-cols-12 gap-8 items-center">
              
              {/* Features Packed In ₹9,999 */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <h3 className="text-xl font-black text-slate-950 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                    Complete HireSarthi Suite
                  </h3>
                  <p className="text-slate-500 font-semibold text-xs mt-1">Get everything needed to manage your employee lifecycle from candidate to joiner.</p>
                </div>

                <div className="space-y-3.5 border-t border-slate-100 pt-5">
                  <p className="text-xs font-black uppercase text-slate-400 tracking-wider">Included in setup:</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Complete HireSarthi Setup",
                      "ATS Pipeline Configuration",
                      "Offer Letter Module",
                      "Employee Database Module",
                      "HR Dashboard",
                      "Onboarding Portal",
                      "Initial Deployment Support",
                      "Basic Training"
                    ].map((feature, fIdx) => (
                      <div key={fIdx} className="flex gap-2.5 items-center text-sm font-bold text-slate-700">
                        <Check className="w-4.5 h-4.5 text-emerald-500 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-indigo-50/50 rounded-xl p-4 border border-indigo-100/50 grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[11px] font-black text-indigo-900 uppercase">NO LICENSES</span>
                    <span className="block text-xs font-semibold text-slate-500 mt-0.5">Use with unlimited members.</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-black text-indigo-900 uppercase">LIFETIME ACCESS</span>
                    <span className="block text-xs font-semibold text-slate-500 mt-0.5">No recurring monthly fees.</span>
                  </div>
                </div>
              </div>

              {/* Price Tag Box & CTA */}
              <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between items-center text-center">
                <div className="w-full">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-1">One-Time Fee</span>
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="text-5xl font-black text-slate-950 leading-none">₹9,999</span>
                  </div>
                  <span className="text-xs font-black text-indigo-600 mt-2 block bg-indigo-50 py-1 px-3 rounded-full inline-block">Use Indefinitely</span>
                </div>

                <div className="w-full mt-8 space-y-3">
                  <p className="text-xs font-black text-slate-500">Ready to Modernize Your HR Operations?</p>
                  
                  <a
                    href="#checkout-hiresarthi"
                    className="w-full inline-flex py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm tracking-wide transition-all items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/10 cursor-pointer"
                  >
                    <span>Get Started for ₹9,999</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20demo%20for%20HireSarthi."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex py-3 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl font-bold text-xs transition-all items-center justify-center gap-1 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-500" />
                    Book a Free Demo
                  </a>

                  <a
                    href="https://wa.me/918851666208?text=Hi%20Suraj,%20I'd%20love%20to%20talk%20to%20an%20HR%20Automation%20Expert%20about%20HireSarthi."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[11px] font-extrabold text-slate-500 hover:text-indigo-600 hover:underline"
                  >
                    Talk to an HR Automation Expert
                  </a>
                </div>
              </div>

            </div>

            {/* Pricing Disclaimer */}
            <div className="mt-8 border-t border-slate-150 pt-5 text-left slot-disclaimer">
              <div className="flex gap-2.5 items-start bg-slate-50 p-4 rounded-xl border border-slate-200">
                <ShieldAlert className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider mb-0.5">Pricing Disclaimer:</h4>
                  <p className="text-[11px] font-medium leading-relaxed text-slate-500">
                    ₹9,999 is a one-time implementation and deployment fee. Additional customization, integrations, hosting, third-party services, or future feature development may be quoted separately based on requirements.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Razorpay Integration Component */}
      <section className="bg-slate-50 dark:bg-slate-900/10 py-12 border-t border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Acquire standard source keys</h2>
            <p className="text-slate-600 font-semibold text-sm">Download lifetime license keys to begin installing directly onto your workspace.</p>
          </div>
          <RazorpayCheckout productId="hiresarthi" />
        </div>
      </section>

      {/* Business Benefits & Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3 tracking-tight">
                <TrendingUp className="w-8 h-8 text-indigo-600" />
                🚀 Operational Business Benefits
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-5.5 h-5.5 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 font-bold">Reduce hiring loop time by up to 45%</span>
                </div>
                
                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-5.5 h-5.5 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 font-bold">Standardize and automate candidate record entries</span>
                </div>
                
                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-5.5 h-5.5 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 font-bold">Zero risk of manual offer parameters mismatch</span>
                </div>

                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-5.5 h-5.5 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 font-bold">Collect verified onboarding documents directly inside Drive</span>
                </div>
              </div>

              <div className="bg-indigo-600 text-white p-6 rounded-2xl shadow-lg mt-8 space-y-1">
                <p className="text-lg font-bold">Built directly in Google Cloud.</p>
                <p className="text-2xl font-black">Fast. Secure. 100% Owned by You.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3 tracking-tight">
                <ShieldCheck className="w-8 h-8 text-indigo-600" />
                🔐 Authorized Security Framework
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center font-extrabold text-slate-800 text-xs">
                  Unified Google Credentials
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center font-extrabold text-slate-800 text-xs">
                  Role-Based Workspace
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center font-extrabold text-slate-800 text-xs">
                  No External server storage
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center font-extrabold text-slate-800 text-xs">
                  Audited Google API code
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800">
                <h3 className="text-lg font-extrabold mb-3">🛠️ Ready-made Customized Modules</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  Need custom sheets or integrated calendars? The platform supports expansion to multi-branch rosters instantly with direct support from local technical coordinator Suraj.
                </p>
                <a
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20custom%20modules%2520in%20HireSarthi."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-xs font-bold text-white transition-colors border border-indigo-500/20"
                >
                  Request Custom Expansion
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA section  */}
      <section className="py-20 relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950 -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="bg-slate-900 border border-slate-850 rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl"></div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Build a robust recruitment engine today</h2>
            
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ditch the manual resume tracking and slow interview loops. Settle your one-time investment and gain a powerful, automated recruiter desk instantly.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%28m%20joining%20HireSarthi%20now!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Let’s Automate Your Recruitment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20a%20free%20demo%20of%20HireSarthi." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 hover:bg-slate-50 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                <MessageSquare className="w-5 h-5 text-emerald-500" />
                Book Free Demo
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
