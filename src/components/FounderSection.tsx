import { useState } from 'react';
import { Linkedin, Phone, MapPin, User } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';

export default function FounderSection() {
  const { lang } = useLanguage();
  const [imgError, setImgError] = useState(false);
  const hasRealPhoto =
    !imgError &&
    Boolean(SITE_CONFIG.founder.photoUrl) &&
    !SITE_CONFIG.founder.photoUrl.startsWith('[');

  const skills = [
    'MIS Reporting',
    'Excel Automation',
    'Power BI',
    'SQL',
    'Python',
    'Google Apps Script',
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200" id="founder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Founder Photo / Monogram Fallback */}
          <div className="lg:col-span-5">
            <div className="aspect-[4/4] max-w-md mx-auto rounded-xl border border-slate-200 bg-white overflow-hidden flex flex-col items-center justify-center p-6 text-center">
              {hasRealPhoto ? (
                <img
                  src={SITE_CONFIG.founder.photoUrl}
                  alt="Suraj Singh — Founder & Automation Architect, Suraj Automation Noida"
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full rounded-lg bg-gradient-to-br from-[#0B1528] to-slate-900 border border-slate-800 flex flex-col items-center justify-center p-6 text-white">
                  <div className="w-20 h-20 rounded-full bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4">
                    <User className="w-9 h-9" />
                  </div>
                  <p className="text-lg font-extrabold tracking-tight text-white mb-1">
                    {SITE_CONFIG.founder.name}
                  </p>
                  <p className="text-xs font-semibold text-emerald-400 mb-3">
                    {SITE_CONFIG.founder.role}
                  </p>
                  <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                    {lang === 'hinglish'
                      ? 'Noida se poore India ke SMBs ke liye Google Sheets, Apps Script aur AI business automation systems.'
                      : 'Building practical Google Sheets, Apps Script, and AI automation systems for Indian SMBs.'}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* First-Person Founder Story */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
              {lang === 'hinglish' ? 'Founder Se Miliye' : 'Meet The Founder'}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              {SITE_CONFIG.founder.name}
            </h2>
            <p className="text-sm font-semibold text-slate-600 mb-6">
              {SITE_CONFIG.founder.role}
            </p>

            <div className="space-y-4 text-base text-slate-700 leading-relaxed mb-6">
              {lang === 'hinglish' ? (
                <>
                  <p>
                    Main Suraj Singh hoon — ek MIS Executive aur Data Analyst, Noida se. Rozana kaam ke dauran maine dekha ki chhote aur medium business owners ke paas data to hota hai, par woh WhatsApp chats, alag-alag Excel files aur paper registers me bikhra rehta hai.
                  </p>
                  <p>
                    Jab woh kisi software agency ke paas jaate hain to ya to ₹1–2 lakh ka ERP chipka diya jaata hai, ya freelancer advance lekar kaam adhoora chhod deta hai. Isliye maine <strong>Suraj Automation</strong> shuru kiya — taaki aapke apne Google Sheets aur Google Drive par aisa simple, reliable system bane jo aapka staff easily chala sake aur data hamesha aapke paas rahe.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    I am Suraj Singh, an MIS Executive and Data Analyst based in Noida. Working closely with operations teams, I saw how small and mid-sized business owners constantly lose money and hours because orders, payments, and stock live across scattered Excel files and WhatsApp threads.
                  </p>
                  <p>
                    Traditional ERPs cost too much and confuse staff, while random freelancers leave projects half-done. I started <strong>Suraj Automation</strong> to build fast, practical web apps and automations directly on your own Google account — simple enough for your floor team, transparent in pricing, and with zero lock-in.
                  </p>
                </>
              )}
            </div>

            {/* Clean Unboxed Core Skills */}
            <div className="pb-6 mb-6 border-b border-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Core Technical Stack
              </p>
              <p className="text-sm font-medium text-slate-800">
                {skills.join(' · ')}
              </p>
            </div>

            {/* Direct Verifiable Identity Links */}
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
              <a
                href={SITE_CONFIG.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 rounded-lg transition-colors min-h-[44px]"
              >
                <Linkedin className="w-4 h-4 text-blue-700" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.founder.phoneTel}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 rounded-lg transition-colors min-h-[44px] font-mono tabular-nums"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>{SITE_CONFIG.founder.phoneDisplay}</span>
              </a>
              <span className="inline-flex items-center gap-1.5 text-slate-600 text-xs sm:text-sm">
                <MapPin className="w-4 h-4 text-slate-500" />
                {SITE_CONFIG.founder.city}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
