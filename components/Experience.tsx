import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../data/constants';

const Experience: React.FC = () => {
  return (
    <Section 
      id="experience" 
      className="bg-slate-50 relative overflow-hidden"
    >
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Experience</h2>
        <p className="text-lg text-slate-600">My professional journey.</p>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Central Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2"></div>

        <div className="space-y-12">
          {EXPERIENCE.map((job, idx) => (
            <div key={job.id} className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
              
              {/* Dot on Line */}
              <div className="absolute left-4 md:left-1/2 top-0 md:top-6 w-4 h-4 rounded-full border-4 border-white bg-primary-600 shadow-md z-20 md:-translate-x-1/2"></div>
              
              {/* Empty side for desktop */}
              <div className="hidden md:block w-1/2"></div>

              {/* Content Side */}
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                
                {/* Date Tag */}
                <div className={`mb-3 flex ${idx % 2 !== 0 && 'md:justify-end'}`}>
                   <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider border border-primary-100">
                    {job.period}
                   </span>
                </div>

                <div className={`bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group text-left ${idx % 2 !== 0 && 'md:text-right'}`}>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="text-slate-500 font-medium mb-4">
                    {job.company}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>
                  
                  <div className={`flex flex-wrap gap-2 ${idx % 2 !== 0 && 'md:justify-end'}`}>
                    {job.skills.map(skill => (
                      <span key={skill} className="text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;