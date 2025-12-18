import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Brain, Server, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import { PERSONAL_INFO } from '../data/constants';

const Hero: React.FC = () => {
  // 1. We start with the absolute path which is standard for static assets
  // 2. We add a timestamp query param (?v=...) to force the browser to ignore cache and check for the file again
  const [imgSrc, setImgSrc] = useState(`/images/profile.jpg?v=${Date.now()}`);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    // If the main jpg fails, try the png version just in case, otherwise show fallback
    if (imgSrc.includes('.jpg')) {
      setImgSrc(`/images/profile.png?v=${Date.now()}`);
    } else {
      setImageError(true);
    }
  };

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60"></div>
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/60 backdrop-blur-md border border-slate-200 rounded-full text-sm font-medium text-slate-600 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Hire
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-[1.2] md:leading-[1.1] tracking-tight">
            Crafting Intelligent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Digital Solutions
            </span>
          </h1>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-bold text-slate-700">Hi, I'm {PERSONAL_INFO.name}</h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed font-light">
              {PERSONAL_INFO.title}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              href="#projects"
              onClick={handleScrollToProjects}
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} />}
            >
              View Projects
            </Button>
            <Button
              href="/cv.pdf"
              variant="outline"
              size="lg"
              icon={<Download size={18} />}
              download
            >
              Download CV
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative block"
        >
          {/* Image Composition */}
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-full opacity-50 blur-3xl"></div>

            {/* Main Image Card */}
            <div className="absolute inset-4 bg-white backdrop-blur-md border border-slate-100 rounded-[2rem] shadow-2xl overflow-hidden z-10 flex items-center justify-center">
              {!imageError ? (
                <img
                  src={imgSrc}
                  alt={PERSONAL_INFO.name}
                  onError={handleImageError}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              ) : (
                /* Fallback Avatar - Professional Initials */
                <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center text-slate-300">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-5xl font-extrabold text-blue-600 shadow-inner">
                    AI
                  </div>
                  <p className="mt-6 text-sm font-medium text-slate-400">Abdirahim Ibrahim</p>
                </div>
              )}

              {/* Gradient Overlay for integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent mix-blend-overlay pointer-events-none"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-12 -right-6 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/50 border border-white/50 z-20"
            >
              <Brain className="text-indigo-600 w-8 h-8" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -left-10 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/50 border border-white/50 z-20"
            >
              <Server className="text-blue-600 w-8 h-8" />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-4 right-10 p-3 bg-slate-900 rounded-xl shadow-xl shadow-slate-900/20 border border-slate-700 z-20 flex items-center gap-2"
            >
              <Code2 className="text-blue-400 w-5 h-5" />
              <span className="text-xs font-bold text-white">Full Stack</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;