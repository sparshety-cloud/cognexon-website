import React from 'react';

const TechStackMarquee = () => {
  const techItems = [
    { icon: 'cloud', name: 'AWS' },
    { icon: 'payments', name: 'Stripe' },
    { icon: 'terminal', name: 'Vercel' },
    { icon: 'database', name: 'MongoDB' },
    { icon: 'code_blocks', name: 'React' },
    { icon: 'deployed_code', name: 'Docker' },
    { icon: 'api', name: 'GraphQL' },
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-white/5 bg-slate-900/50 py-10 backdrop-blur-sm">
      <div className="flex w-max animate-marquee gap-16 items-center">
        {[...techItems, ...techItems].map((tech, index) => (
          <span 
            key={index}
            className="text-2xl font-bold text-slate-500/50 hover:text-white/80 transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined">{tech.icon}</span>
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStackMarquee;