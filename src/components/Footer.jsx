import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import RevealSection from './RevealSection';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-dark-bg py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <RevealSection variant="fadeUp">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Logo & Branding */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden border border-dark-border shadow-md">
                <img 
                  src="/logo.svg" 
                  alt="RM Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-bold text-base text-white block">{personalInfo.name}</span>
                <span className="text-xs text-slate-400 font-mono">Software Engineer & Full Stack Dev</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-mono">
              <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
              <a href="#autovexo" className="hover:text-emerald-400 transition-colors text-emerald-300 font-bold">Autovexo</a>
              <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-dark-surface border border-white/10 text-slate-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all shadow-md group"
              title="Back to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>

          </div>
        </RevealSection>

        {/* Sub Footer */}
        <RevealSection variant="fadeUp" delay={200}>
          <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>© 2025 Roaim Mehdi. All rights reserved.</span>
            <span className="flex items-center gap-1">
              Built for High Impact <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Karachi, Pakistan
            </span>
          </div>
        </RevealSection>

      </div>
    </footer>
  );
}
