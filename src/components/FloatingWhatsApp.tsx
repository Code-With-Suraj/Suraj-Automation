import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/content';

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl('Hi Suraj, maine surajdx.com dekha aur mujhe automation ke baare me baat karni hai.')}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:flex fixed bottom-6 right-6 z-40 bg-[#15803D] hover:bg-[#166534] text-white px-4 py-3 rounded-full shadow-lg transition-colors items-center gap-2 text-sm font-semibold"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span>WhatsApp Suraj</span>
    </a>
  );
}
