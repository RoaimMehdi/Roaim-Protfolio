import React from 'react';
import { Code2, Award, Terminal, Wrench, CheckCircle } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import RevealSection from './RevealSection';

export default function Skills() {
  return (
    <section id="skills" className="py-10 sm:py-14 lg:py-20 relative bg-[#080c15] border-b border-dark-border overflow-hidden">
      
      {/* Ambient Background */}
      <div className="absolute bottom-0 right-1/4 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-teal-500/5 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <RevealSection variant="fadeUp">
          <div className="border-b border-dark-border pb-4 sm:pb-5 lg:pb-6 mb-8 sm:mb-10 lg:mb-12">
            <span className="text-[10px] sm:text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
              Technical Proficiency
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Skills & <span className="text-emerald-400">Tools</span>
            </h2>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Categorized Technical Skills */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {skillsData.categories.map((cat, idx) => (
                <RevealSection key={idx} variant="fadeUp" delay={idx * 100}>
                  <div className="glass-card p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-dark-border space-y-3 h-full">
                    <h3 className="font-bold text-xs sm:text-sm text-emerald-400 border-b border-dark-border pb-2">
                      {cat.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((s, i) => (
                        <span key={i} className="px-2 sm:px-2.5 py-1 rounded bg-dark-surface border border-dark-border text-slate-200 text-[10px] sm:text-xs font-mono hover:border-emerald-500/40 hover:text-emerald-300 transition-all cursor-default">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>

            {/* Soft Skills */}
            <RevealSection variant="fadeUp" delay={400}>
              <div className="glass-card p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-dark-border space-y-3">
                <h3 className="font-bold text-xs sm:text-sm text-white">Soft Skills & Methodologies</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skillsData.softSkills.map((s, i) => (
                    <span key={i} className="px-2 sm:px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[10px] sm:text-xs font-medium hover:bg-emerald-950/60 transition-all cursor-default">
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Right Column: Certifications & Dev Tools */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            
            {/* Certifications */}
            <RevealSection variant="fadeRight" delay={200}>
              <div className="glass-card p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-dark-border space-y-3 sm:space-y-4">
                <h3 className="font-bold text-sm sm:text-base lg:text-lg text-white flex items-center justify-between">
                  <span>Certifications</span>
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                </h3>

                <div className="space-y-2.5 sm:space-y-3">
                  {skillsData.certifications.map((c, i) => (
                    <div key={i} className="p-3 sm:p-3.5 rounded-xl bg-dark-surface border border-dark-border space-y-1 hover:border-emerald-500/30 transition-all">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-xs sm:text-sm text-white min-w-0">{c.title}</h4>
                        <span className="text-[10px] sm:text-xs font-mono text-amber-400 flex-shrink-0">{c.year}</span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-slate-300">{c.desc}</p>
                      <span className="text-[9px] sm:text-[10px] text-slate-500 font-mono block">{c.issuer}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            {/* Tools */}
            <RevealSection variant="fadeRight" delay={350}>
              <div className="glass-card p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-dark-border space-y-3">
                <h3 className="font-bold text-xs sm:text-sm text-white">Development Tools & Environment</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skillsData.tools.map((tool, idx) => (
                    <span key={idx} className="px-2 sm:px-2.5 py-1 rounded bg-dark-surface border border-dark-border text-slate-300 text-[10px] sm:text-xs font-mono hover:border-emerald-500/40 transition-all cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </RevealSection>

          </div>

        </div>

      </div>
    </section>
  );
}
