import React, { useState } from 'react';
import Section from './Section';
import { MapPin, Mail as MailIcon, Phone } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/constants';
import Button from './Button';

const Contact: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      projectType: selectedType
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        (e.target as HTMLFormElement).reset();
        setSelectedType(null);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      className="bg-white pb-20"
    >
      <div className="max-w-6xl mx-auto bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]">

        {/* Left: Dark Info Side */}
        <div className="lg:w-[45%] p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden bg-[#0f172a]">
          {/* Grid Background overlay */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">future-proof.</span>
            </h3>
            <p className="text-slate-400 text-base leading-relaxed max-w-sm">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="space-y-8 relative z-10 mt-12">
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-500 transition-all">
                <MailIcon size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Me At</p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="font-bold text-white text-lg hover:text-primary-400 transition-colors break-all">{PERSONAL_INFO.email}</a>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-500 transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Call Me</p>
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`} className="font-bold text-white text-lg hover:text-primary-400 transition-colors">{PERSONAL_INFO.phone}</a>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-500 transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Based In</p>
                <p className="font-bold text-white text-lg">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>

          {/* Social Icons Bottom */}
          <div className="flex gap-4 mt-12 relative z-10">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target={link.platform === 'Email' ? undefined : '_blank'}
                rel={link.platform === 'Email' ? undefined : "noopener noreferrer"}
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 hover:border-white transition-all"
                aria-label={link.platform}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: White Form Side */}
        <div className="lg:w-[55%] bg-white p-10 lg:p-14 flex flex-col justify-center relative">

          {isSubmitted ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <div className="text-green-600 text-4xl">✓</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
              <p className="text-slate-600 max-w-xs">Thanks for reaching out. I'll get back to you as soon as possible.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-sm font-bold text-primary-600 hover:text-primary-700 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label htmlFor="name" className="text-xs font-bold text-slate-900 uppercase tracking-wide">Your Name</label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    className="w-full py-3 border-b border-slate-200 focus:border-slate-900 outline-none transition-all text-slate-700 placeholder-slate-400 bg-transparent text-lg"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2 group">
                  <label htmlFor="email" className="text-xs font-bold text-slate-900 uppercase tracking-wide">Email Address</label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    className="w-full py-3 border-b border-slate-200 focus:border-slate-900 outline-none transition-all text-slate-700 placeholder-slate-400 bg-transparent text-lg"
                    placeholder="Enter your gmail"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wide block">Project Type</label>
                <div className="flex flex-wrap gap-3">
                  {['Web Development', 'Machine Learning', 'IT Consultancy', 'Other'].map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 ${selectedType === type
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'border-slate-200 text-slate-600 hover:border-slate-400'
                        }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label htmlFor="message" className="text-xs font-bold text-slate-900 uppercase tracking-wide">Message</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-slate-300 outline-none transition-all resize-none text-slate-700 placeholder-slate-400 mt-2 text-base"
                  placeholder="Tell me about your project or your message..."
                ></textarea>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full md:w-auto"
                >
                  Send Message
                </Button>
              </div>
            </form>
          )}
        </div>

      </div>
    </Section>
  );
};

export default Contact;