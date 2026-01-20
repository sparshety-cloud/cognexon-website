import React, { useEffect, useRef } from 'react';

const Timeline = () => {
  const timelineRef = useRef(null);

  const steps = [
    {
      number: '1',
      title: 'Discovery & Blueprinting',
      description: 'Deep-dive strategy sessions to map out technical requirements and product roadmap.',
      align: 'left'
    },
    {
      number: '2',
      title: 'UI/UX Prototyping',
      description: 'Designing intuitive, high-fidelity interfaces that ensure seamless user adoption.',
      align: 'right',
      status: 'In Progress'
    },
    {
      number: '3',
      title: 'Agile Development',
      description: 'Rapid, iterative coding cycles delivering production-ready features every sprint.',
      align: 'left'
    },
    {
      number: '4',
      title: 'AI Integration',
      description: 'Embedding intelligence into the core architecture for automated decision-making.',
      align: 'right'
    },
    {
      number: '5',
      title: 'Quality Assurance',
      description: 'Rigorous testing, security auditing, and performance optimization before launch.',
      align: 'left'
    },
    {
      number: '6',
      title: 'Launch & Growth',
      description: 'Seamless deployment scaling and post-launch support for sustained growth.',
      align: 'right'
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const stepElements = document.querySelectorAll('.timeline-step');
    stepElements.forEach(step => {
      observer.observe(step);
    });

    return () => {
      stepElements.forEach(step => observer.unobserve(step));
    };
  }, []);

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-20 bg-background-dark relative overflow-hidden" ref={timelineRef}>
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(6, 182, 212, .1) 25%, rgba(6, 182, 212, .1) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, .1) 75%, rgba(6, 182, 212, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, .1) 25%, rgba(6, 182, 212, .1) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, .1) 75%, rgba(6, 182, 212, .1) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px',
            animation: 'streamFlow 4s linear infinite'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20 lg:mb-24">
          <span className="text-cyan-neon font-black tracking-widest uppercase text-sm mb-4 neon-text-glow">
            Execution Framework
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-center text-white">Engineering Pipeline</h2>
        </div>
        
        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-cyan-neon/30 to-primary/20 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-neon/20 to-transparent animate-pulse"></div>
          </div>
          
          {/* Timeline Steps */}
          <div className="space-y-24 lg:space-y-32 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`timeline-step relative flex flex-col md:flex-row items-center gap-8 lg:gap-12 ${
                  step.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step Content */}
                <div className={`flex-1 w-full md:w-auto ${
                  step.align === 'left' 
                    ? 'md:text-right md:pr-12 lg:pr-16' 
                    : 'md:text-left md:pl-12 lg:pl-16'
                }`}>
                  <div className="space-y-4">
                    {step.status && (
                      <div className="inline-block px-3 py-1 rounded bg-cyan-900/40 text-cyan-300 text-[10px] font-bold uppercase tracking-widest border border-cyan-500/30">
                        {step.status}
                      </div>
                    )}
                    <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-base lg:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Step Number Circle */}
                <div className="relative z-20">
                  <div className="step-number size-16 lg:size-24 rounded-2xl z-20 bg-slate-900 border border-white/10 flex items-center justify-center text-2xl lg:text-4xl font-black text-white transition-all duration-500 relative">
                    {step.number}
                  </div>
                  
                  {/* Mobile connecting line */}
                  <div className="absolute top-1/2 md:hidden -left-8 w-8 h-0.5 bg-gradient-to-r from-transparent to-primary/30"></div>
                  <div className="absolute top-1/2 md:hidden -right-8 w-8 h-0.5 bg-gradient-to-l from-transparent to-primary/30"></div>
                </div>
                
                {/* Empty Space for Alignment */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;