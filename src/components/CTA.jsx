import React from 'react';

const CTA = ({ onGetStarted }) => {
  return (
    <section className="py-32 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto relative rounded-[3rem] overflow-hidden glass-panel border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-900/40 z-0"></div>
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        ></div>
        
        <div className="relative z-10 p-16 lg:p-24 text-center space-y-10">
          <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight">
            Engineer Your <br /> <span className="text-primary">AI Advantage</span>
          </h2>
          
          <p className="text-slate-300 text-xl max-w-3xl mx-auto font-light">
            Move beyond experimentation. Deploy production-grade intelligence that drives measurable ROI and
            operational autonomy.
          </p>
          
          <div className="pt-6">
            <button
              onClick={onGetStarted}
              className="bg-primary text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-blue-500 transition-all shadow-2xl hover:-translate-y-2 ring-4 ring-primary/20"
            >
              Initiate Strategy Session
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
            <div>
              <span className="block text-3xl font-bold text-white">450ms</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Latency Floor</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-white">12+</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Patented Layers</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-white">99.99%</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Reliability</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-white">24/7</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Kernel Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;