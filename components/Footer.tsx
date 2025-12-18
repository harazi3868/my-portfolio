import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
            <a href="#hero" className="inline-block mb-6 group">
              <span className="text-3xl font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                Apdirahin<span className="text-blue-600">.</span>
              </span>
            </a>
            <p className="text-slate-500 leading-relaxed mb-8 max-w-md text-sm">
              Building the future with code and data. Specialized in intelligent web applications, predictive machine learning models, and robust IT infrastructure.
            </p>
            <div className="flex gap-4">
               {SOCIAL_LINKS.map((link) => (
                  <a 
                    key={link.platform}
                    href={link.url}
                    target={link.platform === 'Email' ? undefined : '_blank'}
                    rel={link.platform === 'Email' ? undefined : "noopener noreferrer"}
                    className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 border border-slate-800 transition-all duration-300 hover:bg-white hover:text-slate-950 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:-translate-y-1"
                    aria-label={link.platform}
                  >
                    <link.icon size={18} />
                  </a>
               ))}
            </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600 text-center md:text-left">
            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
             <p className="text-xs text-slate-600 hidden md:block">
               Designed & Built with <span className="text-red-500 animate-pulse">❤️</span>
             </p>
             
             <button 
               onClick={scrollToTop} 
               className="group flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-wider px-4 py-2 rounded-full border border-slate-800 hover:border-slate-600 hover:bg-slate-900"
             >
               Back to Top
               <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;