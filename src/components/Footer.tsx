import { Link } from 'react-router-dom';
import { Mail, Phone, User } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-105 transition-transform">
                SA
              </div>
              <span className="font-bold text-xl text-white tracking-tight">Suraj Automation</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Custom business systems and automation using Google Apps Script for SMBs.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500"></span>Home</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500"></span>About</Link></li>
              <li><Link to="/pricing" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500"></span>Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-indigo-400" />
                </div>
                <span className="font-medium text-slate-300">Suraj Singh</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-indigo-400" />
                </div>
                <a href="https://wa.me/918851666208" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors font-medium text-slate-300">+91-8851666208</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-indigo-400" />
                </div>
                <a href="mailto:suraj.gasdeveloper@gmail.com" className="hover:text-indigo-400 transition-colors font-medium text-slate-300">suraj.gasdeveloper@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Suraj Automation. All rights reserved.</p>
          <p className="text-slate-500 flex items-center gap-2">Built for Indian SMBs <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span></p>
        </div>
      </div>
    </footer>
  );
}
