import React, { useState } from 'react';
import { X, ImagePlus } from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';
import RevealSection from './RevealSection';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web Apps', 'Mobile Apps', 'E-Commerce', 'Web Portals', 'Graphic Design'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative bg-[#080c15] border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <RevealSection variant="fadeUp">
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10 lg:mb-12 pb-4 sm:pb-5 lg:pb-6 border-b border-dark-border">
            <div className="min-w-0">
              <span className="text-[10px] sm:text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                Engineering Works & Case Studies
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
                Featured <span className="text-emerald-400">Projects</span>
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Production web applications, mobile platforms, e-commerce systems, and brand identity assets.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 bg-dark-surface p-1.5 sm:p-2 rounded-xl border border-dark-border w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-emerald-600 text-white font-semibold shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {filteredProjects.map((project, idx) => (
            <RevealSection key={project.id} variant="fadeUp" delay={idx * 100}>
              <div
                onClick={() => setSelectedProject(project)}
                className="glass-card rounded-xl overflow-hidden border border-dark-border flex flex-col group cursor-pointer hover:border-emerald-500/40 transition-all duration-300 h-full"
              >
                
                {/* Image */}
                <div className="relative h-44 sm:h-48 lg:h-52 w-full overflow-hidden bg-dark-bg flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.title)}&background=065f46&color=10b981&size=400&bold=true`;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-dark-surface flex flex-col items-center justify-center p-4 text-center border border-dashed border-dark-border">
                      <ImagePlus className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 mb-2" />
                      <span className="text-xs sm:text-sm font-bold text-white">Screenshot Coming Soon</span>
                      <span className="text-[10px] sm:text-xs text-slate-400 mt-1">Add image to public/ folder</span>
                    </div>
                  )}

                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2 py-1 rounded bg-dark-bg/90 border border-dark-border text-emerald-300 text-[9px] sm:text-[10px] font-mono">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-dark-border">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded bg-dark-surface border border-dark-border text-slate-300 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </RevealSection>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-panel w-full sm:max-w-xl rounded-t-2xl sm:rounded-2xl overflow-hidden border border-dark-border shadow-2xl relative max-h-[85vh] sm:max-h-[90vh] flex flex-col">
            
            <div className="p-4 border-b border-dark-border flex items-center justify-between bg-dark-surface">
              <div className="min-w-0 flex-1 mr-3">
                <span className="text-[10px] sm:text-xs font-mono text-emerald-400 uppercase">{selectedProject.category}</span>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white truncate">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-dark-bg text-slate-400 hover:text-white transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-xs sm:text-sm">
              {selectedProject.image ? (
                <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-dark-bg border border-dark-border">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedProject.title)}&background=065f46&color=10b981&size=800&bold=true`;
                    }}
                  />
                </div>
              ) : (
                <div className="w-full h-40 sm:h-48 rounded-xl bg-dark-surface border border-dashed border-dark-border flex flex-col items-center justify-center text-center p-4">
                  <ImagePlus className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400 mb-2" />
                  <span className="font-bold text-white text-xs sm:text-sm">Screenshot Coming Soon</span>
                  <span className="text-slate-400 text-[10px] sm:text-xs mt-1">Add image to public/ folder</span>
                </div>
              )}

              <div>
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base">Project Details</h4>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">{selectedProject.description}</p>
              </div>

              <div className="grid grid-cols-3 gap-3 p-3 sm:p-4 rounded-xl bg-dark-surface border border-dark-border text-slate-300">
                <div className="min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block">Client</span>
                  <span className="font-bold text-white text-xs sm:text-sm truncate block">{selectedProject.client || "Portfolio"}</span>
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block">Year</span>
                  <span className="font-bold text-emerald-400 text-xs sm:text-sm">{selectedProject.year || "2025"}</span>
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block">Role</span>
                  <span className="font-bold text-white text-xs sm:text-sm">Developer</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base">Tech Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-1 rounded bg-dark-surface border border-dark-border text-emerald-300 font-mono text-[10px] sm:text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="p-3 sm:p-4 border-t border-dark-border flex justify-end bg-dark-surface">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-500 transition-all"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
