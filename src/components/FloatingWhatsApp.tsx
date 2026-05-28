import { MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function FloatingWhatsApp() {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const isProductPage = pathParts[1] === 'products' && pathParts[2] && pathParts[2] !== '';

  return (
    <a
      href="https://wa.me/918851666208?text=Hi%20Suraj,%20I%20visited%20your%20website%20and%20want%2520to%2520know%2520more."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed ${isProductPage ? 'bottom-20 md:bottom-6' : 'bottom-6'} right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 flex items-center justify-center group`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
        Chat with me
      </span>
    </a>
  );
}
