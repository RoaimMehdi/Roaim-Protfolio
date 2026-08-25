import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import RevealSection from './RevealSection';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-bg/80">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <RevealSection variant="fadeUp">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              Let's Build Together
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Get In <span className="text-gradient-emerald">Touch</span>
            </h2>
            
            <p className="text-slate-300 text-base">
              Have a project idea, software house opportunity, or collaboration in mind? Reach out directly!
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <RevealSection variant="fadeLeft" delay={100}>
              <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
                <h3 className="text-xl font-bold text-white">Direct Communication</h3>
                
                <div className="space-y-4">
                  
                  {/* Email Box */}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-4 rounded-2xl bg-dark-surface border border-white/5 hover:border-emerald-400/50 transition-all flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 font-mono block">Direct Email</span>
                      <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {personalInfo.email}
                      </span>
                    </div>
                  </a>

                  {/* Phone Box */}
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="p-4 rounded-2xl bg-dark-surface border border-white/5 hover:border-emerald-400/50 transition-all flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 font-mono block">Call / WhatsApp</span>
                      <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {personalInfo.phone}
                      </span>
                    </div>
                  </a>

                  {/* Location Box */}
                  <div className="p-4 rounded-2xl bg-dark-surface border border-white/5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 font-mono block">Base Location</span>
                      <span className="text-sm font-bold text-white">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Response Time Badge */}
                <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Clock className="w-4 h-4 text-emerald-400" /> Typically responds within 2 hours
                </div>
              </div>
            </RevealSection>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <RevealSection variant="fadeRight" delay={200}>
              <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
                <h3 className="text-xl font-bold text-white">Send Me A Message</h3>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3 animate-in zoom-in-95">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                    <p className="text-xs text-slate-300">
                      Thank you for reaching out, Roaim Mehdi will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Subject</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Project Inquiry / Software House Role"
                        className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Message</label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your project requirements or proposal..."
                        className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/20 transition-all resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-extrabold text-sm shadow-glow-emerald hover:shadow-emerald-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 fill-black" />
                      Submit Message
                    </button>
                  </form>
                )}

              </div>
            </RevealSection>
          </div>

        </div>

      </div>
    </section>
  );
}
