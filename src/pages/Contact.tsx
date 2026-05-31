import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'missing_url'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("All fields are mandatory. Please fill them out.");
      return;
    }

    setStatus('loading');
    
    // Use explicit URL as fallback if environment variable is not injected during build
    const scriptUrl = "https://script.google.com/macros/s/AKfycbw1YRxx1Pxbwx0vXxklEAnqMdgIbeUyWw2mfDpXJUldXk5m76UjEQ6OYtvF6s17ZRVG/exec";

    if (!scriptUrl) {
      setStatus('missing_url');
      return;
    }

    try {
      const formBody = new FormData();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('message', formData.message);

      // We use no-cors because Google Web Apps typically redirect and browser blocks CORS by default
      await fetch(scriptUrl, {
        method: 'POST',
        body: formBody,
        mode: 'no-cors'
      });

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="pt-24 pb-20 dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      <section className="py-12 lg:py-20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 dark:from-slate-900 via-white dark:via-slate-950 to-white dark:to-slate-950 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-sm font-bold tracking-wide mb-6 border border-indigo-100 dark:border-indigo-500/20">
                Let's Talk
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">Automate?</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Send a message below, and let's turn your messy workflows into streamlined systems.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 space-y-8"
            >
              {contactDetails.map((detail, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 shadow-sm border border-indigo-100/50 dark:border-slate-700">
                    <detail.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {detail.title}
                    </h3>
                    {detail.link ? (
                      <a href={detail.link} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        {detail.content}
                      </a>
                    ) : (
                      <p className="text-slate-600 dark:text-slate-400">{detail.content}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="hidden lg:block mt-12 bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px]"></div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">
                  Business Hours
                </h4>
                <p className="text-slate-600 dark:text-slate-400 relative z-10">
                  Monday - Friday<br />
                  10:00 AM - 7:00 PM IST
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-8"
            >
              <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden">
                
                {status === 'missing_url' && (
                  <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-xl flex gap-3 text-amber-800 dark:text-amber-300">
                    <AlertCircle className="w-6 h-6 shrink-0" />
                    <p className="text-sm font-medium">
                      The Google Sheets Web App URL is not configured. Please verify the URL in the Contact.tsx file or environment variables.
                    </p>
                  </div>
                )}

                {status === 'success' && (
                  <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-xl flex gap-3 text-emerald-800 dark:text-emerald-400">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <p className="text-sm font-medium">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 rounded-xl flex gap-3 text-rose-800 dark:text-rose-400">
                    <AlertCircle className="w-6 h-6 shrink-0" />
                    <p className="text-sm font-medium">
                      Oops! Something went wrong. Please try emailing us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Name <span className="text-rose-500">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address <span className="text-rose-500">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-slate-700 dark:text-slate-300">Phone / WhatsApp <span className="text-rose-500">*</span></label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300">Message <span className="text-rose-500">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your automation needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full inline-flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-400 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-indigo-600/20"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

const contactDetails = [
  {
    icon: Phone,
    title: "Call or WhatsApp",
    content: "+91 88516 66208",
    link: "https://wa.me/918851666208"
  },
  {
    icon: Mail,
    title: "Email",
    content: "suraj.gasdeveloper@gmail.com",
    link: "mailto:suraj.gasdeveloper@gmail.com"
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Noida, India",
    link: null
  }
];
