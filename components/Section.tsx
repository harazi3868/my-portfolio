import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = "", title, subtitle }) => {
  return (
    <section id={id} className={`py-20 md:py-24 ${className}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="w-24 h-1 bg-primary-600 mx-auto mt-6 rounded-full opacity-80"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;