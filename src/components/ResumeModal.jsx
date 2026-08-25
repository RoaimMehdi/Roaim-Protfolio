import React from 'react';
import { X, Download, Printer, Copy, Check, FileText, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import { personalInfo, educationData, experienceData, autovexoData, skillsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    const text = `
ROAIM MEHDI - SOFTWARE ENGINEER & FULL STACK DEVELOPER
Karachi, Pakistan | ${personalInfo.phone} | ${personalInfo.email}

OBJECTIVE:
${personalInfo.summary}

EDUCATION:
${educationData.map(e => `- ${e.degree} | ${e.institution} (${e.period})`).join('\n')}

EXPERIENCE:
${experienceData.map(e => `- ${e.role} at ${e.company} (${e.period})\n  ${e.highlights.join('\n  ')}`).join('\n')}

FEATURED RECENT SYSTEM:
- Autovexo Roadside Assistance Mobile App (Roles: Product Owner, PM, QA)

CERTIFICATIONS:
${skillsData.certifications.map(c => `- ${c.title}: ${c.desc}`).join('\n')}
    `;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="glass-panel w-full max-w-4xl rounded-3xl overflow-hidden border border-white/15 shadow-2xl relative max-h-[92vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-dark-surface/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-dark-border flex-shrink-0">
              <img src="/logo.svg" alt="RM Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-sm sm:text-lg font-bold text-white">Roaim Mehdi - Curriculum Vitae</h3>
              <span className="text-[10px] sm:text-xs text-emerald-400 font-mono">Software Engineering Candidate</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handleCopy}
              className="hidden sm:flex px-3 py-1.5 rounded-lg bg-dark-surface border border-white/10 text-xs text-slate-300 hover:text-white items-center gap-1.5"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-emerald-400" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
            <button
              onClick={handleCopy}
              className="sm:hidden p-2 rounded-lg bg-dark-surface border border-white/10 text-slate-300 hover:text-white"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-emerald-400" />}
            </button>
            <button
              onClick={handlePrint}
              className="hidden sm:flex px-3 py-1.5 rounded-lg bg-emerald-500 text-black font-bold text-xs hover:bg-emerald-400 items-center gap-1.5 shadow-glow-emerald"
            >
              <Printer className="w-4 h-4" />
              Print / PDF
            </button>
            <button
              onClick={handlePrint}
              className="sm:hidden p-2 rounded-lg bg-emerald-500 text-black font-bold hover:bg-emerald-400 shadow-glow-emerald"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-dark-surface text-slate-400 hover:text-white ml-1 sm:ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable / Scrollable Document Body */}
        <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-6 sm:space-y-8 text-left text-slate-200 font-sans print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-4 sm:pb-6 print:border-black">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white print:text-black">{personalInfo.name}</h1>
            <p className="text-emerald-400 font-mono text-xs sm:text-sm font-semibold mt-1 print:text-blue-700">{personalInfo.title}</p>
            
            <div className="flex flex-wrap gap-2 sm:gap-4 text-[10px] sm:text-xs font-mono text-slate-400 mt-2 sm:mt-3 print:text-gray-700">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> {personalInfo.location}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-emerald-400" /> {personalInfo.phone}</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-emerald-400" /> {personalInfo.email}</span>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider font-bold mb-2 print:text-blue-700">Career Objective</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic print:text-gray-900">
              "{personalInfo.summary}"
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider font-bold mb-3 print:text-blue-700">Education</h4>
            <div className="space-y-3">
              {educationData.map((e, i) => (
                <div key={i} className="text-xs space-y-0.5 border-l-2 border-emerald-500/40 pl-3">
                  <div className="flex justify-between font-bold text-white print:text-black">
                    <span>{e.degree}</span>
                    <span className="text-emerald-400 font-mono print:text-blue-600">{e.period}</span>
                  </div>
                  <div className="text-slate-300 print:text-gray-800">{e.institution} ({e.status})</div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider font-bold mb-3 print:text-blue-700">Work Experience</h4>
            <div className="space-y-4">
              {experienceData.map((exp, i) => (
                <div key={i} className="text-xs space-y-1.5 border-l-2 border-emerald-500/40 pl-3">
                  <div className="flex justify-between font-bold text-white print:text-black">
                    <span>{exp.role} — {exp.company}</span>
                    <span className="text-emerald-400 font-mono print:text-purple-700">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 print:text-gray-800 pl-1">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Autovexo Project */}
          <div>
            <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider font-bold mb-2 print:text-blue-700">Featured System: Autovexo Roadside Assistance</h4>
            <p className="text-xs text-slate-300 leading-relaxed print:text-gray-900">
              Performed end-to-end roles as <strong>Product Owner</strong>, <strong>Project Manager</strong>, and <strong>Quality Assurance Lead</strong> on Autovexo—a GPS-based roadside assistance platform with biometric authentication lock and nearby mechanic discovery.
            </p>
          </div>

          {/* Certifications & Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider font-bold mb-2 print:text-blue-700">Certifications</h4>
              <ul className="text-xs space-y-1 text-slate-300 print:text-gray-800">
                {skillsData.certifications.map((c, i) => (
                  <li key={i}>• <strong>{c.title}</strong> ({c.issuer})</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider font-bold mb-2 print:text-blue-700">Technical Skills</h4>
              <p className="text-xs text-slate-300 leading-relaxed print:text-gray-800">
                HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, PHP, Bootstrap, Tailwind CSS, WordPress, Java, Python, OOP, React Native, Flutter, Git, Postman, Android Studio.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
