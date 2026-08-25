import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Autovexo', href: '#autovexo' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-panel py-2 shadow-xl border-b border-dark-border' : 'bg-transparent py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group min-w-0 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-dark-border group-hover:border-emerald-500/50 transition-all shadow-md flex-shrink-0">
              <img 
                src="/logo.svg" 
                alt="RM Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 hidden sm:block">
              <span className="font-bold text-sm sm:text-base text-white tracking-tight block group-hover:text-emerald-400 transition-colors truncate max-w-[120px] md:max-w-none">
                {personalInfo.name}
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                Software Engineer
              </span>
            </div>
          </a>

          {/* Nav Links - hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-dark-surface/90 backdrop-blur-md px-2 xl:px-3 py-1.5 rounded-xl border border-dark-border flex-shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 xl:px-3.5 py-1.5 text-[11px] xl:text-xs font-medium rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 xl:px-3.5 py-2 text-[11px] xl:text-xs font-medium rounded-lg bg-dark-surface text-slate-200 border border-dark-border hover:border-emerald-500/50 hover:text-white transition-all whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              CV
            </button>
            
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-3 xl:px-4 py-2 text-[11px] xl:text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-all shadow-md whitespace-nowrap"
            >
              Get In Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-dark-surface text-emerald-400 border border-dark-border"
            >
              <FileText className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-dark-surface border border-dark-border text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="glass-panel border-b border-dark-border px-4 pt-3 pb-5 mt-2 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium rounded-lg text-slate-300 hover:bg-white/5 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-xs"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
