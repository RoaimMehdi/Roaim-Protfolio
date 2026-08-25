import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';
import RevealSection from './RevealSection';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-dark-bg/60">
      
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <RevealSection variant="fadeUp">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              Career & Qualifications
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Experience & <span className="text-gradient-emerald">Education</span>
            </h2>
            
            <p className="text-slate-300 text-base">
              My professional journey across software houses, online education, and academic accomplishments.
            </p>
          </div>
        </RevealSection>

        {/* Tab Toggle */}
        <RevealSection variant="fadeUp" delay={150}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-2xl bg-dark-surface border border-white/10">
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 sm:gap-2 ${
                  activeTab === 'experience'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-black shadow-glow-emerald font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span className="hidden sm:inline">Work Experience</span>
                <span className="sm:hidden">Work</span>
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 sm:gap-2 ${
                  activeTab === 'education'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-black shadow-glow-emerald font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span className="hidden sm:inline">Academic History</span>
                <span className="sm:hidden">Education</span>
              </button>
            </div>
          </div>
        </RevealSection>

        {/* Tab Content: Work Experience Timeline */}
        {activeTab === 'experience' && (
          <div className="max-w-4xl mx-auto space-y-8">
            {experienceData.map((exp, idx) => (
              <RevealSection key={idx} variant="fadeUp" delay={idx * 150}>
                <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 hover:border-emerald-400/40 relative group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <div>
                      <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase block">{exp.type}</span>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-slate-300 mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1 bg-dark-surface px-3 py-1 rounded-lg border border-white/10">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1 bg-dark-surface px-3 py-1 rounded-lg border border-white/10">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Deliverables Bullet List */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Contributions & Deliverables:</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
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
          <div className="max-w-4xl mx-auto space-y-6">
            {educationData.map((edu, idx) => (
              <RevealSection key={idx} variant="fadeUp" delay={idx * 150}>
                <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-3 hover:border-emerald-400/40 relative">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-mono text-emerald-300 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 inline-block mb-1">
                        {edu.status}
                      </span>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-sm text-emerald-300 font-semibold">{edu.institution}</p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <span className="bg-dark-surface px-3 py-1 rounded-lg border border-white/10 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" /> {edu.period}
                      </span>
                      <span className="bg-emerald-500/10 text-emerald-300 px-2.5 py-1 rounded-lg font-bold border border-emerald-500/30">
                        {edu.status}
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
