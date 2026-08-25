import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AutovexoShowcase from './components/AutovexoShowcase';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080c15] text-slate-100 font-sans selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <AutovexoShowcase />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
