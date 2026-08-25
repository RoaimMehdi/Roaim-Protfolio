import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';
import RevealSection from './RevealSection';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-10 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden bg-dark-bg/60">
      
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/4 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-emerald-600/10 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <RevealSection variant="fadeUp">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-10 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] sm:text-xs font-mono uppercase tracking-wider">
              <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
              Career & Qualifications
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight">
              Experience & <span className="text-gradient-emerald">Education</span>
            </h2>
            
            <p className="text-slate-300 text-xs sm:text-sm lg:text-base">
              My professional journey across software houses, online education, and academic accomplishments.
            </p>
          </div>
        </RevealSection>

        {/* Tab Toggle */}
        <RevealSection variant="fadeUp" delay={150}>
          <div className="flex justify-center mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-flex p-1.5 sm:p-2 rounded-xl sm:rounded-2xl bg-dark-surface border border-white/10">
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-3 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 sm:gap-2 ${
                  activeTab === 'experience'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-black shadow-glow-emerald font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Work Experience</span>
                <span className="sm:hidden">Work</span>
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-3 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 sm:gap-2 ${
                  activeTab === 'education'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-black shadow-glow-emerald font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Academic History</span>
                <span className="sm:hidden">Education</span>
              </button>
            </div>
          </div>
        </RevealSection>

        {/* Tab Content: Work Experience Timeline */}
        {activeTab === 'experience' && (
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
            {experienceData.map((exp, idx) => (
              <RevealSection key={idx} variant="fadeUp" delay={idx * 150}>
                <div className="glass-card p-4 sm:p-5 lg:p-6 xl:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-white/10 space-y-3 sm:space-y-4 hover:border-emerald-400/40 relative group">
                  <div className="flex flex-col gap-3 border-b border-white/10 pb-3 sm:pb-4">
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-xs font-mono text-emerald-400 tracking-wider uppercase block">{exp.type}</span>
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5 bg-dark-surface px-2 sm:px-3 py-1 rounded-lg border border-white/10">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 flex-shrink-0" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 bg-dark-surface px-2 sm:px-3 py-1 rounded-lg border border-white/10">
                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 flex-shrink-0" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Deliverables Bullet List */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">Key Contributions:</h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </RevealSection>
            ))}
          </div>
        )}

        {/* Tab Content: Education Timeline */}
        {activeTab === 'education' && (
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 lg:space-y-6">
            {educationData.map((edu, idx) => (
              <RevealSection key={idx} variant="fadeUp" delay={idx * 150}>
                <div className="glass-card p-4 sm:p-5 lg:p-6 xl:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-white/10 space-y-2.5 sm:space-y-3 hover:border-emerald-400/40 relative">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3">
                    <div className="space-y-1 min-w-0 flex-1">
                      <span className="text-[9px] sm:text-[10px] font-mono text-emerald-300 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 inline-block">
                        {edu.status}
                      </span>
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-xs sm:text-sm text-emerald-300 font-semibold">{edu.institution}</p>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-slate-400 flex-shrink-0">
                      <span className="bg-dark-surface px-2 sm:px-3 py-1 rounded-lg border border-white/10 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 flex-shrink-0" /> {edu.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 pt-2 border-t border-white/5">
                    {edu.description}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
