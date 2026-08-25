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
    <section id="projects" className="py-20 relative bg-[#080c15] border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <RevealSection variant="fadeUp">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-dark-border">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                Engineering Works & Case Studies
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Featured <span className="text-emerald-400">Projects</span>
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Production web applications, mobile platforms, e-commerce systems, and brand identity assets.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1 bg-dark-surface p-1 rounded-lg border border-dark-border w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-emerald-600 text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, idx) => (
            <RevealSection key={project.id} variant="fadeUp" delay={idx * 100}>
              <div
                onClick={() => setSelectedProject(project)}
                className="glass-card rounded-xl overflow-hidden border border-dark-border flex flex-col group cursor-pointer hover:border-emerald-500/40 transition-all duration-300 h-full"
              >
                
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-dark-bg flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-dark-surface flex flex-col items-center justify-center p-4 text-center border border-dashed border-dark-border">
                      <ImagePlus className="w-6 h-6 text-emerald-400 mb-1" />
                      <span className="text-xs font-bold text-white">Autovexo Image Slot</span>
                      <span className="text-[10px] text-slate-400 mt-0.5">Upload screenshot to public/autovexo-preview.png</span>
                    </div>
                  )}

                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2 py-0.5 rounded bg-dark-bg/90 border border-dark-border text-emerald-300 text-[10px] font-mono">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-2 border-t border-dark-border">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-dark-surface border border-dark-border text-slate-300 font-mono">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="glass-panel w-full max-w-xl rounded-xl overflow-hidden border border-dark-border shadow-2xl relative max-h-[90vh] flex flex-col">
            
            <div className="p-4 border-b border-dark-border flex items-center justify-between bg-dark-surface">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase">{selectedProject.category}</span>
                <h3 className="text-base font-bold text-white">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded bg-dark-bg text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-4 text-xs">
              {selectedProject.image ? (
                <div className="w-full h-52 rounded-lg overflow-hidden bg-dark-bg border border-dark-border">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-full h-40 rounded-lg bg-dark-surface border border-dashed border-dark-border flex flex-col items-center justify-center text-center p-4">
                  <ImagePlus className="w-7 h-7 text-emerald-400 mb-1" />
                  <span className="font-bold text-white text-xs">Autovexo Image Slot</span>
                  <span className="text-slate-400 text-[10px] mt-0.5">Image slot ready for your app screenshots!</span>
                </div>
              )}

              <div>
                <h4 className="font-bold text-white mb-1">Project Details</h4>
                <p className="text-slate-300 leading-relaxed text-xs">{selectedProject.description}</p>
              </div>

              <div className="grid grid-cols-3 gap-2.5 p-3 rounded-lg bg-dark-surface border border-dark-border text-slate-300">
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block">Client</span>
                  <span className="font-bold text-white">{selectedProject.client || "Portfolio"}</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block">Year</span>
                  <span className="font-bold text-emerald-400">{selectedProject.year || "2025"}</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block">Role</span>
                  <span className="font-bold text-white">Developer</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">Tech Stack</h4>
                <div className="flex flex-wrap gap-1">
                  {selectedProject.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-dark-surface border border-dark-border text-emerald-300 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="p-3 border-t border-dark-border flex justify-end bg-dark-surface">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-1.5 rounded bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-all"
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
