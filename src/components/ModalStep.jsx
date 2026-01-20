import React from 'react';

const ModalStep = ({ step, activeStep, title, subtitle, children }) => {
  if (step !== activeStep) return null;

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <span className="text-primary font-mono text-xs uppercase tracking-widest">
          Step {step.toString().padStart(2, '0')} / 03
        </span>
        <h2 className="text-3xl font-black text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default ModalStep;