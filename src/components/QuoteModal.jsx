import React, { useState } from 'react';
import ModalStep from './ModalStep';

const QuoteModal = ({ onClose, activeStep, setActiveStep }) => {
  const [projectType, setProjectType] = useState('AI Solutions');
  const [budget, setBudget] = useState('$50k-100k');
  const [formData, setFormData] = useState({
    brief: '',
    name: '',
    email: '',
    company: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { projectType, budget, ...formData });
  };

  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const projectTypes = [
    { icon: 'web', title: 'Web Application', desc: 'SaaS platforms, Dashboards, Portals' },
    { icon: 'smartphone', title: 'Mobile App', desc: 'iOS & Android, Native, Hybrid' },
    { icon: 'psychology', title: 'AI & Data', desc: 'LLM Integration, Analytics, ML' },
    { icon: 'auto_awesome', title: 'Other Venture', desc: 'Custom engineering, Cloud infra' }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#020617]/90 backdrop-blur-xl">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[150px] animate-pulse"></div>
        <div 
          className="absolute w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(60, 131, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        ></div>
      </div>

      <div className="relative w-full max-w-2xl glass-panel rounded-[2.5rem] p-8 md:p-12 overflow-hidden quote-modal-glow border-primary/40">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {activeStep === 4 ? (
          <div className="flex-col items-center text-center py-12">
            <div className="relative mb-8">
              <div className="absolute inset-0 scale-150 bg-cyan-neon/20 blur-3xl rounded-full animate-pulse"></div>
              <div className="relative size-24 mx-auto rounded-full border-4 border-cyan-neon flex items-center justify-center bg-slate-900 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                <span className="material-symbols-outlined text-6xl text-cyan-neon animate-bounce">check</span>
              </div>
            </div>
            <h2 className="text-3xl font-black text-white mb-4">Transmission Received</h2>
            <p className="text-slate-400 max-w-sm mx-auto mb-8">
              Your mission parameters have been logged. Our flight controllers will contact you shortly to begin the countdown.
            </p>
            <button
              onClick={onClose}
              className="h-12 px-8 rounded-full bg-primary text-white font-bold flex items-center justify-center mx-auto hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(60,131,246,0.4)] shimmer-btn"
            >
              Return to Command
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <ModalStep
              step={1}
              activeStep={activeStep}
              title="Select Your Mission"
              subtitle="Project Type"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectTypes.map((type, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setProjectType(type.title)}
                    className={`p-6 rounded-2xl bg-white/5 border transition-all group text-left ${
                      projectType === type.title
                        ? 'border-primary/50 bg-white/10'
                        : 'border-white/10 hover:border-primary/50 hover:bg-white/10'
                    }`}
                  >
                    <span className={`material-symbols-outlined mb-4 group-hover:scale-110 transition-transform ${
                      index === 0 ? 'text-primary' :
                      index === 1 ? 'text-cyan-neon' :
                      index === 2 ? 'text-pink-500' : 'text-purple-500'
                    }`}>
                      {type.icon}
                    </span>
                    <h3 className="text-white font-bold text-lg">{type.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{type.desc}</p>
                  </button>
                ))}
              </div>
            </ModalStep>

            <ModalStep
              step={2}
              activeStep={activeStep}
              title="Project Specs"
              subtitle="Scope & Details"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Estimated Budget Range
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {['$10k-25k', '$25k-50k', '$50k-100k', '$100k+'].map((range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => setBudget(range)}
                        className={`px-3 py-2 rounded-lg border text-xs transition-colors ${
                          budget === range
                            ? 'border-primary bg-primary/10 text-white'
                            : 'border-white/10 bg-white/5 hover:border-primary text-white'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Project Brief
                  </label>
                  <textarea
                    value={formData.brief}
                    onChange={(e) => setFormData({...formData, brief: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Tell us about the mission objectives..."
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </ModalStep>

            <ModalStep
              step={3}
              activeStep={activeStep}
              title="Point of Contact"
              subtitle="Your Information"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-400">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Major Tom"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-400">Work Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="tom@groundcontrol.com"
                    required
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="block text-sm font-medium text-slate-400">Company Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Galactic Explorations Inc."
                    required
                  />
                </div>
              </div>
            </ModalStep>

            {activeStep < 4 && (
              <div className="flex justify-between items-center pt-4 mt-8 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                  disabled={activeStep === 1}
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  Back
                </button>
                
                {activeStep === 3 ? (
                  <button
                    type="submit"
                    onClick={() => setActiveStep(4)}
                    className="h-12 px-10 rounded-full bg-primary text-white font-black hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(60,131,246,0.5)] shimmer-btn flex items-center gap-2"
                  >
                    Submit Mission Profile
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="h-12 px-8 rounded-full bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all shimmer-btn flex items-center gap-2"
                  >
                    Next Phase
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                )}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default QuoteModal;