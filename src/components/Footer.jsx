import React from 'react';

const Footer = () => {
  const links = {
    Technology: [
      'Neural Architecture',
      'Vector Databases',
      'Edge Computing',
      'Ethical AI Sandbox'
    ],
    Ecosystem: [
      'About Cognexon',
      'Research Lab',
      'Documentation',
      'Legal / Privacy'
    ]
  };

  const socialLinks = ['Twitter / X', 'LinkedIn', 'GitHub'];

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-24 px-6 lg:px-20 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="size-12 text-primary transition-transform duration-500 group-hover:rotate-180">
            <img src='/logo2.png' alt='logo'/>
          </div>
            <h2 className="text-xl font-bold text-white uppercase tracking-tighter">Cognexon</h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Architecting high-fidelity artificial intelligence for the world's most demanding enterprises. ISO
            27001 &amp; SOC2 Type II Certified.
          </p>
        </div>
        
        {Object.entries(links).map(([category, items]) => (
          <div key={category}>
            <h4 className="font-bold text-white mb-8 uppercase text-[10px] tracking-[0.4em]">{category}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {items.map((item, index) => (
                <li key={index}>
                  <a className="hover:text-primary transition-colors" href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        <div>
          <h4 className="font-bold text-white mb-8 uppercase text-[10px] tracking-[0.4em]">Pulse Newsletter</h4>
          <div className="space-y-4">
            <p className="text-slate-500 text-xs">Stay updated on the latest in neural engineering.</p>
            <div className="flex gap-2">
              <input
                className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm w-full focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Enter work email"
                type="email"
              />
              <button className="bg-primary px-4 rounded-xl text-white hover:bg-blue-500 transition-colors shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-600 text-xs tracking-widest">© 2025 COGNEXON SOLUTIONS INC. RE-IMAGINING THE FUTURE.</p>
        <div className="flex gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              className="text-slate-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors"
              href="#"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;