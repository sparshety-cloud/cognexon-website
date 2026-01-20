import React from 'react';

const Projects = () => {
  const projects = [
    {
      category: 'Healthcare',
      categoryColor: 'primary',
      icon: 'local_hospital',
      title: 'Hospital Management System',
      description: 'A comprehensive hospital information system unifying EMR, billing, and staff scheduling. Streamlined operations for a 500-bed multi-specialty facility, reducing admin overhead by 30%.',
      stats: [
        { value: '500k+', label: 'Patient Records' },
        { value: '30%', label: 'Efficiency Boost' }
      ],
      tech: ['Django', 'Postgres', 'React'],
      image: '/hms.jpeg'
    },
    {
      category: 'Real Estate',
      categoryColor: 'cyan-neon',
      icon: 'smartphone',
      title: 'Real Estate Mobile App',
      description: 'A premium property hunting experience with AR visualization. Users can virtually tour homes, schedule visits in real-time, and connect with agents instantly via in-app messaging.',
      stats: [
        { value: '1M+', label: 'App Downloads' },
        { value: '4.8', label: 'App Store Rating' }
      ],
      tech: ['Flutter', 'Firebase', 'AR Kit'],
      image: '/rms.png',
      reverse: true
    },
    {
      category: 'Labour Market',
      categoryColor: 'purple-400',
      icon: 'engineering',
      title: 'Labour Employment App',
      description: 'Connecting blue-collar professionals with opportunities in real-time. Features geo-fenced job matching, automated payroll processing, and a rating system that ensures trust and reliability.',
      stats: [
        { value: '50K+', label: 'Jobs Filled' },
        { value: '12hr', label: 'Avg. Placement Time' }
      ],
      tech: ['Go', 'Kubernetes', 'Swift'],
      image: '/lms.png'
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-20 relative bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-cyan-neon font-black tracking-widest uppercase text-sm mb-4 neon-text-glow block">
              Our Work
            </span>
            <h2 className="text-5xl lg:text-7xl font-black mb-6 text-white">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-neon">Projects</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Delivering extensive, scalable solutions for industry leaders. Real-world applications of
              our sovereign engineering capabilities.
            </p>
          </div>
          <button className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white font-bold">
            View All Case Studies
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
          </button>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="group relative grid lg:grid-cols-2 gap-16 items-center">
              <div className={`${project.reverse ? 'lg:order-2' : ''}`}>
                <div className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all duration-700 shadow-2xl shadow-black/50 perspective-container">
                  <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    src={project.image}
                  />
                  <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/10 text-xs font-bold text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={`space-y-8 ${project.reverse ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4">
                  <span className={`size-14 rounded-2xl bg-${project.categoryColor}/20 border border-${project.categoryColor}/20 flex items-center justify-center text-${project.categoryColor} shadow-[0_0_15px_rgba(var(--color-${project.categoryColor}),0.2)]`}>
                    <span className="material-symbols-outlined text-3xl">{project.icon}</span>
                  </span>
                  <div>
                    <h4 className={`text-${project.categoryColor} font-bold tracking-widest uppercase text-xs mb-1`}>
                      {project.category}
                    </h4>
                    <span className="text-slate-500 text-xs">
                      {project.category === 'Healthcare' ? 'Web Platform' : 
                       project.category === 'Real Estate' ? 'Mobile Application' : 'Mobile Platform'}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                  {project.stats.map((stat, i) => (
                    <div key={i}>
                      <span className="block text-4xl font-black text-white mb-1">{stat.value}</span>
                      <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">{stat.label}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`text-white font-bold hover:text-${project.categoryColor} transition-all flex items-center gap-3 mt-4 group-hover:translate-x-2`}>
                  View Case Study
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
