import React from 'react';
import Section from './Section';
import { Terminal, Database, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/constants';

const About: React.FC = () => {
  return (
    <Section
      id="about"
      className="bg-white"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* Left Column: Text & Stats */}
        <div className="space-y-8">
          <div>
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">About Me</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              {PERSONAL_INFO.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="bg-slate-50 p-4 md:p-6 rounded-2xl text-center border border-slate-100">
              <h4 className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">{PERSONAL_INFO.stats.projects}</h4>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Projects</p>
            </div>
            <div className="bg-slate-50 p-4 md:p-6 rounded-2xl text-center border border-slate-100">
              <h4 className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">{PERSONAL_INFO.stats.experience}</h4>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Experience</p>
            </div>
            <div className="bg-slate-50 p-4 md:p-6 rounded-2xl text-center border border-slate-100">
              <h4 className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">{PERSONAL_INFO.stats.clients}</h4>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Clients</p>
            </div>
          </div>
        </div>

        {/* Right Column: Service Cards */}
        <div className="flex flex-col gap-5">
          {[
            {
              icon: Terminal,
              title: "Web Development",
              desc: "Building responsive, high-performance web applications using modern frameworks like React and Next.js.",
              color: "bg-blue-100 text-blue-600"
            },
            {
              icon: Database,
              title: "AI & Machine Learning",
              desc: "Designing intelligent AI solutions with Python, TensorFlow, and LLMs to solve complex problems and automate workflows.",
              color: "bg-purple-100 text-purple-600"
            },
            {
              icon: Shield,
              title: "IT Specialist",
              desc: "Ensuring secure, reliable infrastructure and streamlining operations through automation.",
              color: "bg-green-100 text-green-600"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex items-start p-4 md:p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 bg-white group"
            >
              <div className={`p-3.5 rounded-xl ${item.color} mr-5 group-hover:scale-110 transition-transform`}>
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </Section>
  );
};

export default About;