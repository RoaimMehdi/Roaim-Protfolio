import React from 'react';
import { MapPin, Mail, Phone, ArrowUpRight, Download, Code2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import RevealSection from './RevealSection';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-36 md:pb-24 border-b border-dark-border overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-600/8 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-teal-500/6 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <RevealSection variant="fadeUp" delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-surface border border-dark-border text-xs font-mono text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>{personalInfo.status}</span>
              </div>
            </RevealSection>

            {/* Heading */}
            <RevealSection variant="fadeUp" delay={100}>
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-xl sm:text-2xl font-medium text-emerald-400 mt-1 font-mono">
                  {personalInfo.title}
                </p>
              </div>
            </RevealSection>

            {/* Summary */}
            <RevealSection variant="fadeUp" delay={200}>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                {personalInfo.summary}
              </p>
            </RevealSection>

            {/* Technologies */}
            <RevealSection variant="fadeUp" delay={300}>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["React.js", "JavaScript (ES6+)", "PHP / WordPress", "Tailwind CSS", "React Native", "Flutter", "Java", "Python"].map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-dark-surface border border-dark-border text-slate-300 text-xs font-mono transition-all duration-300 hover:border-emerald-500/50 hover:text-emerald-300 cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </RevealSection>

            {/* Action Buttons */}
            <RevealSection variant="fadeUp" delay={400}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all flex items-center gap-1.5 shadow-md hover:shadow-lg hover:shadow-emerald-600/20"
                >
                  View Projects
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#autovexo"
                  className="px-5 py-2.5 rounded-lg bg-dark-surface border border-dark-border hover:border-emerald-500/50 text-slate-200 font-medium text-xs transition-all flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Autovexo Case Study
                </a>

                <button
                  onClick={onOpenResume}
                  className="px-4 py-2.5 rounded-lg bg-dark-surface border border-dark-border hover:bg-slate-800 text-slate-300 text-xs font-medium transition-all flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  Curriculum Vitae
                </button>
              </div>
            </RevealSection>

            {/* Contact Details */}
            <RevealSection variant="fadeUp" delay={500}>
              <div className="pt-4 flex flex-wrap gap-5 text-xs font-mono text-slate-400 border-t border-dark-border">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {personalInfo.location}
                </span>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" /> <span className="truncate max-w-[150px] sm:max-w-none">{personalInfo.email}</span>
                </a>
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" /> {personalInfo.phone}
                </a>
              </div>
            </RevealSection>

          </div>

          {/* Right Column: Clean Portrait */}
          <RevealSection variant="fadeRight" delay={300} className="lg:col-span-5 flex justify-center order-first lg:order-last">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className="glass-card p-3 rounded-2xl border border-dark-border space-y-3 animate-float">
                <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden bg-dark-bg border border-dark-border">
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
                  <div className="hidden w-full h-full bg-dark-surface flex-col items-center justify-center p-6 text-center">
                    <img 
                      src="/logo.svg" 
                      alt="RM Logo" 
                      className="w-20 h-20 rounded-2xl mb-3 shadow-lg"
                    />
                    <h3 className="font-bold text-white text-base">Roaim Mehdi</h3>
                    <p className="text-xs text-slate-400 font-mono">Software Engineer</p>
                  </div>
                </div>

                <div className="flex items-center justify-between px-1 text-xs text-slate-400 font-mono">
                  <span>SSUET Undergraduate</span>
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
