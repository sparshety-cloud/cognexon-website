import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStackMarquee from './components/TechStackMarquee';
import Capabilities from './components/Capabilities';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const steps = document.querySelectorAll('.timeline-step');
    steps.forEach(step => {
      observer.observe(step);
    });

    return () => {
      steps.forEach(step => observer.unobserve(step));
    };
  }, []);

  return (
    <div className="bg-background-dark text-slate-100 selection:bg-primary selection:text-white neural-bg">
      <Navbar onGetStarted={() => setShowModal(true)} />
      <main className="page-fade-in">
        <Hero onGetStarted={() => setShowModal(true)} />
        <TechStackMarquee />
        <Capabilities />
        <Timeline />
        <Projects />
        <CTA onGetStarted={() => setShowModal(true)} />
      </main>
      <Footer />
      {showModal && (
        <QuoteModal 
          onClose={() => setShowModal(false)}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      )}
    </div>
  );
}

export default App;