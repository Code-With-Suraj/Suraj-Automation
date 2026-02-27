import { motion } from 'motion/react';
import { Users, AlertTriangle, CheckCircle2, ListChecks, Calendar, Bell, LayoutDashboard, FileText, ArrowRight, MessageSquare, Store, TrendingUp, ShieldCheck, Settings } from 'lucide-react';

export default function KarmSarthi() {
  const problems = [
    "Employees ask for leave on WhatsApp",
    "Managers forget approvals",
    "No proper leave balance visibility",
    "Attendance disputes happen monthly",
    "No structured holiday calendar",
    "No centralized document access"
  ];

  const features = [
    {
      title: "Smart Leave Management",
      icon: <ListChecks className="w-6 h-6" />,
      items: [
        "Apply leave (Full Day / Half Day) & Select type",
        "View leave balance & track request status",
        "Managers can approve/reject with comments",
        "Real-time leave calculation excluding Sundays & holidays"
      ]
    },
    {
      title: "Multi-Role Dashboard",
      icon: <LayoutDashboard className="w-6 h-6" />,
      items: [
        "Different views for Employee, Attendance, Manager, HR",
        "Each role sees only what they need",
        "No confusion. No unnecessary access."
      ]
    },
    {
      title: "Attendance & Presence Tracking",
      icon: <Calendar className="w-6 h-6" />,
      items: [
        "Present days & Absent days",
        "Monthly stats & Attendance summary",
        "Real-time updates",
        "Clear data for payroll support"
      ]
    },
    {
      title: "Notification System",
      icon: <Bell className="w-6 h-6" />,
      items: [
        "New leave request alerts",
        "Approval updates & Rejection notifications",
        "Status tracking & Unread count system",
        "Employees never need to ask for updates"
      ]
    },
    {
      title: "Holiday & Events Tracking",
      icon: <Calendar className="w-6 h-6" />,
      items: [
        "Upcoming holidays",
        "Birthday alerts",
        "Special events",
        "Calendar visibility to improve engagement"
      ]
    },
    {
      title: "Employee Profile & Documents",
      icon: <FileText className="w-6 h-6" />,
      items: [
        "View personal details",
        "Access salary information",
        "View documents",
        "Secure and structured interface"
      ]
    }
  ];

  const targetAudience = [
    "Companies with 10–200 employees",
    "Startups scaling operations",
    "Businesses without full HRMS",
    "Organizations using Excel for HR",
    "Teams needing structured leave approval"
  ];

  const benefits = [
    "Reduced HR manual work",
    "Clear leave visibility",
    "Faster approvals",
    "Real-time attendance tracking",
    "Better payroll support",
    "Employee transparency",
    "Structured HR operations"
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-purple-500/10 text-purple-300 text-sm font-bold tracking-wide mb-6 border border-purple-500/20 backdrop-blur-sm">
                <Users className="w-4 h-4" />
                KarmSarthi
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                HR Operations <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Automation Suite
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Har din. Har chhutti ka bharosa. Stop managing HR on Excel & WhatsApp. KarmSarthi is a focused HR automation system that handles your daily HR operations in one structured platform.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Leave Management</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">GPS Attendance</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Salary Overview</span>
              </div>
              <a 
                href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20a%20free%20demo%20of%20KarmSarthi." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-purple-500/25 items-center justify-center gap-2 group hover:-translate-y-1"
              >
                Book a Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg">KarmSarthi HR</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <div className="flex justify-between mb-2">
                      <p className="font-medium text-slate-200">Amit Kumar</p>
                      <span className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs font-bold rounded-md">Pending Approval</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-400 mb-4">
                      <p>Type: Sick Leave</p>
                      <p>Duration: 2 Days</p>
                    </div>
                    <div className="border-t border-slate-700/50 pt-3 flex justify-between items-center">
                      <p className="text-sm text-slate-400">Balance: 12 Casual, 4 Sick</p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-md">Approve</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-200">Today's Attendance</p>
                      <p className="text-sm text-slate-400">42 Present • 3 Absent • 1 Leave</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-purple-400">91%</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 text-red-600 font-bold mb-4">
                <AlertTriangle className="w-5 h-5" />
                The Real HR Problem in Growing Companies
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Leave requests on WhatsApp. Attendance on Excel. Salary details in separate sheets.
              </h2>
              
              <div className="space-y-4 mb-8">
                {problems.map((prob, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">×</span>
                    </div>
                    <span className="text-slate-700 font-medium">{prob}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Result?</h3>
              <ul className="space-y-3 font-medium text-slate-800 mb-8">
                <li className="flex items-center gap-2">❌ HR confusion</li>
                <li className="flex items-center gap-2">❌ Payroll mistakes</li>
                <li className="flex items-center gap-2">❌ Employee frustration</li>
                <li className="flex items-center gap-2">❌ No accountability</li>
              </ul>
              
              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                <h4 className="text-lg font-bold text-purple-900 mb-2">✅ What is KarmSarthi?</h4>
                <p className="text-purple-800 mb-4">
                  A HR Operations Automation Suite designed for Small & Mid-size businesses, Startups, and Growing companies.
                </p>
                <p className="font-bold text-purple-900">It streamlines Leave Management, GPS Attendance, Holiday Tracking, Salary Overview, Notifications & Alerts, and Employee Self-Service.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">🔥 Core Modules</h2>
            <p className="text-xl text-slate-600">Everything you need for structured HR operations.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-purple-300 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{idx + 1}️⃣ {feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-purple-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works & Who is it for */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Store className="w-8 h-8 text-purple-400" />
                👥 Who Should Use KarmSarthi?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {targetAudience.map((audience, idx) => (
                  <div key={idx} className="bg-slate-800 p-4 rounded-xl border border-slate-700 font-medium text-slate-300">
                    {audience}
                  </div>
                ))}
              </div>
              <p className="text-xl text-purple-300 font-medium italic">
                "If your HR process is manual — this system is for you."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Settings className="w-8 h-8 text-purple-400" />
                🎯 How It Works
              </h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    1
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Employee logs in & applies leave or marks attendance</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    2
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Manager gets notification</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    3
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Manager approves/rejects</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    4
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">HR dashboard updates automatically</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    5
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="font-bold text-slate-200">Data ready for payroll & reporting</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl font-bold text-purple-400">Simple. Transparent. Accountable.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits & Security */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                📊 Business Benefits
              </h2>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-purple-600 text-white p-6 rounded-2xl shadow-lg">
                <p className="text-xl font-bold">This is not just leave management.</p>
                <p className="text-2xl font-extrabold mt-1">This is HR discipline.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-purple-600" />
                🔐 Secure & Role-Based
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">User authentication</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Role-based UI</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Controlled visibility</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <p className="font-bold text-slate-800">Structured backend</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">💡 Why KarmSarthi is Different</h3>
                <p className="text-slate-600 mb-4">Most HR software is too expensive, too complex, or overloaded with unnecessary features. KarmSarthi is:</p>
                <ul className="space-y-3 font-medium text-slate-800">
                  <li className="flex items-center gap-2">✔ Focused</li>
                  <li className="flex items-center gap-2">✔ Practical</li>
                  <li className="flex items-center gap-2">✔ Affordable</li>
                  <li className="flex items-center gap-2">✔ Customizable</li>
                  <li className="flex items-center gap-2">✔ Easy to implement</li>
                </ul>
                <p className="mt-4 text-purple-600 font-bold">It solves real operational problems — not theoretical HR features.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing & Customization & CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-purple-100/80 via-white to-white -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">💰 Pricing</h3>
                <p className="text-slate-600 mb-6">Pricing depends on:</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Number of employees</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Required modules</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Custom features</li>
                  <li className="flex items-center gap-2 text-slate-800 font-medium"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Integration needs</li>
                </ul>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20know%20the%20pricing%20for%20KarmSarthi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-colors"
                >
                  Contact for Custom Pricing
                </a>
              </div>

              <div className="bg-purple-600 p-8 rounded-3xl shadow-xl text-left text-white">
                <h3 className="text-2xl font-bold mb-4 text-white">👨‍💻 About Suraj Automation</h3>
                <p className="text-purple-100 mb-6">We Build Practical Internal Business Systems:</p>
                <ul className="space-y-3 mb-8 text-purple-50">
                  <li className="flex items-center gap-2 font-medium">✨ Manual process → Structured automation</li>
                  <li className="flex items-center gap-2 font-medium">✨ Chaos → Control</li>
                  <li className="flex items-center gap-2 font-medium">✨ Confusion → Clarity</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">🚀 Ready to Automate Your HR Operations?</h2>
              <p className="text-xl text-slate-300 mb-8 relative z-10">
                If HR confusion is slowing your business… If leave approvals are messy… If attendance tracking is unreliable… <br className="hidden sm:block" />
                <span className="text-white font-bold">KarmSarthi gives you structure.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20want%20to%20book%20a%20free%20demo%20for%20KarmSarthi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  Book a Free Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/918851666208?text=Hi%20Suraj,%20Let's%20automate%20my%20HR%20system." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  <MessageSquare className="w-5 h-5" />
                  Let’s Automate Your HR System
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
