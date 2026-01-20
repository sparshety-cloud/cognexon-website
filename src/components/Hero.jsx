import React from 'react';

const Hero = ({ onGetStarted }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-20 pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full animate-pulse"></div>
        <div 
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="100" id="grid" patternUnits="userSpaceOnUse" width="100">
              <circle cx="2" cy="2" fill="#3c83f6" r="1"></circle>
              <line opacity="0.3" stroke="#3c83f6" strokeWidth="0.5" x1="2" x2="100" y1="2" y2="100"></line>
            </pattern>
          </defs>
          <rect fill="url(#grid)" height="100%" width="100%"></rect>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          
          <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight text-white">
            Cognexon <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-emerald-400">
              Solutions
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-400 max-w-xl font-light leading-relaxed">
            Cognexon transforms complex challenges into elegant SaaS solutions with deep space technology.
            Launch your product into a new dimension.
          </p>
          
          <div className="flex flex-wrap gap-6 pt-4">
            <button
              onClick={onGetStarted}
              className="group bg-primary text-white px-8 py-5 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(60,131,246,0.5)] transition-all flex items-center gap-3"
            >
              Get Started
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">bolt</span>
            </button>
            <button className="px-8 py-5 rounded-xl font-bold text-lg border border-white/10 hover:bg-white/5 transition-all backdrop-blur-sm">
              Tech Stack
            </button>
          </div>
        </div>
        
        <div className="hidden lg:flex justify-center items-center relative h-[500px]">
          <div className="relative w-80 h-80 flex items-center justify-center">
            <div 
              className="absolute size-32 bg-primary/20 rounded-3xl border-2 border-primary/50 flex items-center justify-center backdrop-blur-md animate-bounce"
              style={{ animationDuration: '4s' }}
            >
              <span className="material-symbols-outlined text-5xl text-primary">psychology</span>
            </div>
            
            <div className="absolute inset-0 border border-primary/20 rounded-full ai-orbit">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 size-12 glass-panel rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">data_object</span>
              </div>
            </div>
            
            <div 
              className="absolute inset-0 border border-primary/10 rounded-full ai-orbit"
              style={{ animationDuration: '15s', animationDirection: 'reverse' }}
            >
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 size-12 glass-panel rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">network_check</span>
              </div>
            </div>
            
            <div 
              className="absolute inset-0 border border-white/5 rounded-full scale-125 ai-orbit"
              style={{ animationDuration: '25s' }}
            >
              <div className="absolute top-1/4 right-0 size-12 glass-panel rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">cloud_done</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;