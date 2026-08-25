import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, MapPin, Lock, Fingerprint, 
  CheckCircle2, RefreshCw, AlertTriangle,
  ChevronLeft, ChevronRight, Play
} from 'lucide-react';
import { autovexoData } from '../data/portfolioData';
import RevealSection from './RevealSection';

const appScreenshots = [
  {
    id: 'welcome',
    label: 'Welcome Screen',
    type: 'dark',
    image: '/autovexo-welcome.jpeg',
    alt: 'Autovexo Welcome Screen'
  },
  {
    id: 'login',
    label: 'Login Screen',
    type: 'light',
    image: '/autovexo-login.jpeg',
    alt: 'Autovexo Login Screen'
  }
];

export default function AutovexoShowcase() {
  const [activeTab, setActiveTab] = useState('demo');
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay || activeTab !== 'demo') return;
    const timer = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % appScreenshots.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlay, activeTab]);

  const nextScreen = () => {
    setIsAutoPlay(false);
    setCurrentScreen((prev) => (prev + 1) % appScreenshots.length);
  };

  const prevScreen = () => {
    setIsAutoPlay(false);
    setCurrentScreen((prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length);
  };

  return (
    <section id="autovexo" className="py-10 sm:py-14 lg:py-20 relative bg-[#080c15] border-b border-dark-border overflow-hidden">
      
      {/* Ambient Background */}
      <div className="absolute top-0 left-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-orange-500/5 rounded-full blur-[80px] sm:blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/3 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-emerald-600/5 rounded-full blur-[60px] sm:blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <RevealSection variant="fadeUp">
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10 lg:mb-12 pb-4 sm:pb-5 lg:pb-6 border-b border-dark-border">
            <div className="min-w-0">
              <span className="text-[10px] sm:text-xs font-mono text-orange-400 uppercase tracking-wider block mb-1">
                Case Study & System Architecture
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
                Autovexo <span className="text-orange-400">Roadside Assistance</span>
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
                An on-demand mobile application connecting drivers with verified nearby mechanics in real-time.
              </p>
            </div>

            {/* Tab Navigation - horizontal scroll on mobile */}
            <div className="flex overflow-x-auto gap-1 bg-dark-surface p-1 rounded-lg border border-dark-border scrollbar-hide -mx-1 px-1">
              {[
                { key: 'demo', label: 'App Screens' },
                { key: 'roles', label: 'Roles' },
                { key: 'roadmap', label: 'Roadmap' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab.key ? 'bg-orange-500 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* Tab 1: App Screenshots */}
        {activeTab === 'demo' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            
            {/* Left Phone Frame with Carousel */}
            <RevealSection variant="fadeLeft" delay={200} className="lg:col-span-5 flex flex-col items-center order-2 lg:order-1">
              
              {/* Phone Frame */}
              <div className="relative w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px]">
                <div className="bg-dark-surface rounded-[32px] sm:rounded-[36px] p-2.5 sm:p-3 border border-dark-border shadow-2xl shadow-black/30 animate-phone-glow">
                  
                  {/* Phone Notch */}
                  <div className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-dark-surface rounded-b-2xl z-20 flex items-center justify-center">
                    <div className="w-8 sm:w-10 h-1.5 sm:h-2 rounded-full bg-dark-border"></div>
                  </div>
                  
                  {/* Screen Content */}
                  <div className="w-full h-[340px] sm:h-[380px] lg:h-[440px] rounded-[24px] sm:rounded-[28px] overflow-hidden relative border border-dark-border bg-black">
                    <img 
                      src={appScreenshots[currentScreen].image}
                      alt={appScreenshots[currentScreen].alt}
                      className="w-full h-full object-cover object-top transition-opacity duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full flex-col items-center justify-center p-6 text-center hidden" style={{display: 'none'}}>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center mb-3">
                        <span className="text-xl">📱</span>
                      </div>
                      <p className="text-xs text-slate-400">{appScreenshots[currentScreen].label}</p>
                    </div>
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevScreen}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all z-10"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={nextScreen}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all z-10"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="w-20 sm:w-24 h-1 rounded-full bg-dark-border mx-auto mt-3"></div>
                </div>
                
                {/* Screen Indicators */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4">
                  {appScreenshots.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={() => { setCurrentScreen(i); setIsAutoPlay(false); }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-medium transition-all ${
                        i === currentScreen 
                          ? 'bg-orange-500/20 border border-orange-500/40 text-orange-300' 
                          : 'bg-dark-surface border border-dark-border text-slate-400 hover:text-white'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${i === currentScreen ? 'bg-orange-400' : 'bg-slate-600'}`}></span>
                      <span className="hidden sm:inline">{s.label}</span>
                      <span className="sm:hidden">{i === 0 ? '1' : '2'}</span>
                    </button>
                  ))}
                </div>
                
                {/* Auto-play Toggle */}
                <div className="flex justify-center mt-3">
                  <button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-medium transition-all border ${
                      isAutoPlay 
                        ? 'bg-orange-500/10 border-orange-500/30 text-orange-300' 
                        : 'bg-dark-surface border-dark-border text-slate-400 hover:text-white'
                    }`}
                  >
                    <Play className={`w-3 h-3 ${isAutoPlay ? 'fill-orange-400' : ''}`} />
                    {isAutoPlay ? 'Playing' : 'Paused'}
                  </button>
                </div>
              </div>
            </RevealSection>

            {/* Right: Details */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6 order-1 lg:order-2 min-w-0">
              
              <RevealSection variant="fadeRight" delay={100}>
                <div className="glass-card p-4 sm:p-5 rounded-xl border border-dark-border space-y-3">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 flex-shrink-0" />
                    Core Problem Solved
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {autovexoData.problemSolved}
                  </p>
                </div>
              </RevealSection>

              <RevealSection variant="fadeRight" delay={200}>
                <div className="space-y-3">
                  <h4 className="text-xs sm:text-sm font-mono text-orange-400 uppercase tracking-wider">
                    Key Implemented Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {autovexoData.keyFeatures.map((f, index) => (
                      <div key={index} className="glass-card p-3 sm:p-4 rounded-lg space-y-1 border border-dark-border hover:border-orange-500/30 transition-all">
                        <h5 className="font-bold text-xs sm:text-sm text-white flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                          {f.title}
                        </h5>
                        <p className="text-[10px] sm:text-xs text-slate-400 pl-5 leading-relaxed">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealSection>

              <RevealSection variant="fadeRight" delay={300}>
                <div className="glass-card p-3 sm:p-4 rounded-lg border border-dark-border space-y-3">
                  <h4 className="text-xs sm:text-sm font-mono text-slate-400 uppercase">Architecture Highlights</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {autovexoData.techHighlights.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 rounded bg-dark-surface border border-dark-border text-orange-300 text-[10px] sm:text-xs font-mono hover:border-orange-500/40 transition-all cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealSection>

              {/* Screen Overview */}
              <RevealSection variant="fadeRight" delay={400}>
                <div className="glass-card p-3 sm:p-4 rounded-lg border border-dark-border space-y-3">
                  <h4 className="text-xs sm:text-sm font-mono text-slate-400 uppercase">Screen Overview</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div 
                      className={`p-3 rounded-lg border transition-all cursor-pointer ${
                        currentScreen === 0 
                          ? 'bg-orange-500/10 border-orange-500/30' 
                          : 'bg-dark-surface border-dark-border hover:border-orange-500/20'
                      }`} 
                      onClick={() => { setCurrentScreen(0); setIsAutoPlay(false); }}
                    >
                      <span className="text-[10px] font-mono text-orange-400 font-bold block">01</span>
                      <span className="text-xs sm:text-sm font-bold text-white block">Welcome Screen</span>
                      <span className="text-[9px] sm:text-[10px] text-slate-400">Role selection</span>
                    </div>
                    <div 
                      className={`p-3 rounded-lg border transition-all cursor-pointer ${
                        currentScreen === 1 
                          ? 'bg-orange-500/10 border-orange-500/30' 
                          : 'bg-dark-surface border-dark-border hover:border-orange-500/20'
                      }`} 
                      onClick={() => { setCurrentScreen(1); setIsAutoPlay(false); }}
                    >
                      <span className="text-[10px] font-mono text-orange-400 font-bold block">02</span>
                      <span className="text-xs sm:text-sm font-bold text-white block">Login Screen</span>
                      <span className="text-[9px] sm:text-[10px] text-slate-400">Firebase Auth</span>
                    </div>
                  </div>
                </div>
              </RevealSection>

            </div>

          </div>
        )}

        {/* Tab 2: Roles */}
        {activeTab === 'roles' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {autovexoData.roles.map((r, idx) => (
              <RevealSection key={idx} variant="fadeUp" delay={idx * 150}>
                <div className="glass-card p-4 sm:p-5 rounded-xl border border-dark-border space-y-2 h-full hover:border-orange-500/30 transition-all">
                  <span className="text-[10px] sm:text-xs font-mono text-orange-400 font-bold">Role 0{idx + 1}</span>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white">{r.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{r.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        )}

        {/* Tab 3: Roadmap */}
        {activeTab === 'roadmap' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {autovexoData.futureRoadmap.map((item, idx) => (
              <RevealSection key={idx} variant="fadeUp" delay={idx * 80}>
                <div className="glass-card p-3 sm:p-4 rounded-lg border border-dark-border space-y-2 h-full hover:border-orange-500/20 transition-all">
                  <span className="text-[9px] sm:text-[10px] font-mono text-orange-400 uppercase">Phase {idx + 1}</span>
                  <h4 className="font-bold text-xs sm:text-sm text-white">{item.title}</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
