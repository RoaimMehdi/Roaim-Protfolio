import React from 'react';
import { MapPin, Mail, Phone, ArrowUpRight, Download, Code2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import RevealSection from './RevealSection';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative pt-24 pb-10 sm:pt-32 sm:pb-16 md:pt-36 md:pb-24 border-b border-dark-border overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-[200px] sm:w-[500px] h-[200px] sm:h-[500px] bg-emerald-600/8 rounded-full blur-[100px] sm:blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-[180px] sm:w-[400px] h-[180px] sm:h-[400px] bg-teal-500/6 rounded-full blur-[80px] sm:blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 md:space-y-6 text-left order-2 lg:order-1 min-w-0">
            
            {/* Status Pill */}
            <RevealSection variant="fadeUp" delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-dark-surface border border-dark-border text-[10px] sm:text-xs font-mono text-slate-300 max-w-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse"></span>
                <span className="truncate">{personalInfo.status}</span>
              </div>
            </RevealSection>

            {/* Heading */}
            <RevealSection variant="fadeUp" delay={100}>
              <div className="min-w-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight break-words">
                  {personalInfo.name}
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-emerald-400 mt-2 font-mono">
                  {personalInfo.title}
                </p>
              </div>
            </RevealSection>

            {/* Summary */}
            <RevealSection variant="fadeUp" delay={200}>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                {personalInfo.summary}
              </p>
            </RevealSection>

            {/* Technologies */}
            <RevealSection variant="fadeUp" delay={300}>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                {["React.js", "JavaScript (ES6+)", "PHP / WordPress", "Tailwind CSS", "React Native", "Flutter", "Java", "Python"].map((tech, i) => (
                  <span key={i} className="px-2 sm:px-3 py-1 rounded-lg bg-dark-surface border border-dark-border text-slate-300 text-[10px] sm:text-xs font-mono transition-all duration-300 hover:border-emerald-500/50 hover:text-emerald-300 cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </RevealSection>

            {/* Action Buttons */}
            <RevealSection variant="fadeUp" delay={400}>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
                <a
                  href="#projects"
                  className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-md hover:shadow-lg hover:shadow-emerald-600/20"
                >
                  View Projects
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#autovexo"
                  className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-dark-surface border border-dark-border hover:border-emerald-500/50 text-slate-200 font-medium text-xs sm:text-sm transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="hidden sm:inline">Autovexo</span>
                  <span className="sm:hidden">Auto</span>
                  <span className="hidden sm:inline">Case Study</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-dark-surface border border-dark-border hover:bg-slate-800 text-slate-300 text-xs sm:text-sm font-medium transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  CV
                </button>
              </div>
            </RevealSection>

            {/* Contact Details */}
            <RevealSection variant="fadeUp" delay={500}>
              <div className="pt-4 flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 lg:gap-4 text-[10px] sm:text-xs font-mono text-slate-400 border-t border-dark-border">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 flex-shrink-0" /> {personalInfo.location}
                </span>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors min-w-0">
                  <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 flex-shrink-0" /> 
                  <span className="truncate max-w-[200px] sm:max-w-none">{personalInfo.email}</span>
                </a>
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                  <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 flex-shrink-0" /> {personalInfo.phone}
                </a>
              </div>
            </RevealSection>

          </div>

          {/* Right Column: Clean Portrait */}
          <RevealSection variant="fadeRight" delay={300} className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-xs lg:max-w-sm">
              <div className="glass-card p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-dark-border space-y-2 sm:space-y-3 animate-float">
                <div className="relative w-full aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden bg-dark-bg border border-dark-border">
                  <img 
                    src="/profile.jpg" 
                    alt="Roaim Mehdi"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="hidden w-full h-full bg-dark-surface flex-col items-center justify-center p-4 sm:p-6 text-center">
                    <img 
                      src="/logo.svg" 
                      alt="RM Logo" 
                      className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl mb-2 sm:mb-3 shadow-lg"
                    />
                    <h3 className="font-bold text-white text-xs sm:text-sm lg:text-base">Roaim Mehdi</h3>
                    <p className="text-[9px] sm:text-[10px] lg:text-xs text-slate-400 font-mono">Software Engineer</p>
                  </div>
                </div>

                <div className="flex items-center justify-between px-1 text-[9px] sm:text-[10px] lg:text-xs text-slate-400 font-mono">
                  <span>SSUET</span>
                  <span className="text-emerald-400">Karachi, PK</span>
                </div>
              </div>
            </div>
          </RevealSection>

        </div>
      </div>
    </section>
  );
}
