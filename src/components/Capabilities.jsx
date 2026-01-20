import React from 'react';

const Capabilities = () => {
  const capabilities = [
    {
      icon: 'rocket_launch',
      title: 'SaaS Product Development',
      description: 'End-to-end product engineering from concept to scalable enterprise solutions.',
      items: ['Rapid MVP Delivery', 'Scalable Microservices']
    },
    {
      icon: 'smart_toy',
      title: 'AI-Powered Solutions',
      description: 'Integrating intelligent agents and predictive models into your existing ecosystem.',
      items: ['LLM Integration', 'Intelligent Automation']
    },
    {
      icon: 'domain',
      title: 'Custom Enterprise Software',
      description: 'Tailored digital platforms designed to optimize your specific business workflows.',
      items: ['Workflow Optimization', 'Legacy Modernization']
    },
    {
      icon: 'globe',
      title: 'Web Architecture',
      description: 'Scalable, high-performance web applications built for millions of concurrent users.',
      items: ['SaaS Platforms', 'Cloud Portals']
    },
    {
      icon: 'smartphone',
      title: 'Mobile Engineering',
      description: 'Native and cross-platform mobile experiences that feel fluid and natural.',
      items: ['iOS & Android', 'Flutter / React Native']
    },
    {
      icon: 'brush',
      title: 'UI/UX Design',
      description: 'Award-winning interfaces with glassmorphic aesthetics that users love to touch.',
      items: ['Design Systems', 'Interactive Prototypes']
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-20 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Core Capabilities</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {capabilities.map((cap, index) => (
            <div key={index} className="magnetic-card group p-10 rounded-2xl glass-panel relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-9xl">{cap.icon}</span>
              </div>
              <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-4xl">{cap.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{cap.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8">{cap.description}</p>
              <ul className="space-y-4 text-sm text-slate-300">
                {cap.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-primary"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;