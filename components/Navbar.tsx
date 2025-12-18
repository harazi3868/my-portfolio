import React, { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';
import { NAV_LINKS } from '../data/constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy Logic
      const sections = NAV_LINKS.map(link => link.href.substring(1)); // ['hero', 'about', ...]

      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 120px offset to detect section slightly before it hits top or while inside
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {

      // Manually update active state for instant feedback
      setActiveSection(targetId);
      // Scroll into view (native behavior respects scroll-padding-top in CSS)
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
        ? 'bg-white/80 backdrop-blur-xl border-slate-200/60 py-4 shadow-sm'
        : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative z-50">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-xl shadow-slate-900/20 group-hover:scale-105 transition-transform duration-300">
            <Code2 size={22} className="text-blue-400" />
          </div>
          <span className="font-bold text-lg md:text-xl text-slate-900 tracking-tight">
            Apdirahin<span className="text-blue-600">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="flex items-center bg-white/50 backdrop-blur-md rounded-full px-2 py-1.5 border border-slate-200/60 mr-4 shadow-sm">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="px-6 py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transform hover:-translate-y-0.5"
          >
            Let's Talk
          </a>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;