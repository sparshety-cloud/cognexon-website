import React, { useState, useEffect } from 'react';

const Navbar = ({ onGetStarted }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Solutions', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Process', href: '#' },
    { label: 'Pricing', href: '#' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div 
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled 
          ? 'glass-panel border-white/10' 
          : 'bg-transparent border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="size-12 text-primary transition-transform duration-500 group-hover:rotate-180">
            <img src='/logo2.png' alt='logo'/>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Cognexon <span className="text-primary">Solutions</span></h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              className="text-sm font-medium text-white/90 hover:text-primary transition-colors relative group"
              href={item.href}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button
            onClick={onGetStarted}
            className="bg-primary hover:bg-primary/90 text-white px-5 lg:px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5"
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="menu-button md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <span className="material-symbols-outlined text-2xl animate-spin-once">close</span>
          ) : (
            <span className="material-symbols-outlined text-2xl">menu</span>
          )}
        </button>
      </div>

      {/* Mobile Menu - Slide Down Animation */}
      <div 
        className={`mobile-menu md:hidden absolute top-20 left-0 right-0 glass-panel border-t border-white/5 backdrop-blur-xl transition-all duration-300 transform ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              className="block text-lg font-medium text-white hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-6 border-t border-white/10">
            <button
              onClick={() => {
                onGetStarted();
                setIsMenuOpen(false);
              }}
              className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3.5 rounded-lg text-base font-bold transition-all shadow-lg hover:shadow-primary/40 active:scale-95"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;