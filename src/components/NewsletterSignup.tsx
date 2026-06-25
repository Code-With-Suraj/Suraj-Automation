import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { Mail, Loader2, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setStatus('loading');
    
    // Web App URL from Contact.tsx infrastructure
    const scriptUrl = "https://script.google.com/macros/s/AKfycbw1YRxx1Pxbwx0vXxklEAnqMdgIbeUyWw2mfDpXJUldXk5m76UjEQ6OYtvF6s17ZRVG/exec";

    try {
      const formBody = new FormData();
      formBody.append('name', 'Newsletter Subscriber');
      formBody.append('email', email.trim());
      formBody.append('phone', 'Mailing List');
      formBody.append('message', 'Subscribed to mailing list from Newsletter signup component.');

      // Google Web Apps redirect so we use no-cors to bypass CORS errors
      await fetch(scriptUrl, {
        method: 'POST',
        body: formBody,
        mode: 'no-cors'
      });

      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div id="newsletter-signup-container" className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[40px] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 bg-indigo-500/10 rounded-lg text-indigo-400">
            <Sparkles className="w-4 h-4 fill-indigo-400/20" />
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-indigo-400">Join the Circle</span>
        </div>

        <h3 className="text-lg font-extrabold text-white mb-2 tracking-tight">
          Subscribe to Sarthi Automations
        </h3>
        
        <p className="text-xs text-slate-400 leading-relaxed mb-6">
          Get elite Google Sheets recipes, Apps Script snippets, and automated workflow triggers directly in your inbox. No spam, ever.
        </p>

        {status === 'success' ? (
          <div className="p-4 bg-emerald-950/20 border border-emerald-900 rounded-xl flex gap-3 text-emerald-400 animate-fade-in text-xs font-medium">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <div>
              <p className="font-bold text-white mb-0.5">Success! You&apos;re subscribed.</p>
              <p className="text-slate-400">We&apos;ve stored your email safely on our automation sheet.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                id="newsletter-email-input"
              />
              <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || !email}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:text-slate-400 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-indigo-600/10 flex items-center justify-center gap-2 cursor-pointer"
              id="newsletter-submit-btn"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Securing Spot...
                </>
              ) : (
                'Get Free Automations'
              )}
            </button>

            {status === 'error' && (
              <div className="p-2.5 bg-red-950/20 border border-red-900 rounded-lg flex gap-2 text-red-400 text-[11px] font-medium">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Could not subscribe. Please try again.</span>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
