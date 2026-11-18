import { MessageSquare, Phone } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/content';

export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 px-3 py-2 shadow-[0_-4px_16px_rgba(15,23,42,0.08)]">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={getWhatsAppUrl('Hi Suraj, mujhe apne business automation ke baare me baat karni hai.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-lg min-h-[44px] transition-colors"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </a>
        <a
          href={`tel:${SITE_CONFIG.founder.phoneTel}`}
          className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-lg min-h-[44px] transition-colors"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span>Call Suraj</span>
        </a>
      </div>
    </div>
  );
}
