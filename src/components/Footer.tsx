import React from 'react';
import { ArrowUp, Mail, Phone, Code2 } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

const footerNav = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020202] border-t border-white/10 py-16 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-start">

          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <a href="#hero" className="flex items-center gap-2 text-2xl font-extrabold tracking-tighter text-white">
              <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center">
                <Code2 size={18} />
              </div>
              <span className="font-heading">Zzzroth<span className="text-neutral-500 group-hover:text-white transition-colors">.</span></span>
            </a>
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              Full Stack Developer & Software Engineering Student
            </p>
            <p className="text-xs text-neutral-500 max-w-sm">
              Building high-availability web applications, core banking software, and custom ERP solutions with modern type-safe standards.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4">
            <p className="text-xs font-mono text-white uppercase tracking-widest mb-4">Navigation</p>
            <ul className="grid grid-cols-2 gap-2 text-xs font-mono">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Back to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Sreyroth-Nok"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card border border-white/15 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="mailto:noksreyroth@gmail.com"
                className="w-10 h-10 rounded-full glass-card border border-white/15 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:0965946057"
                className="w-10 h-10 rounded-full glass-card border border-white/15 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <div className="p-2 rounded-full glass-panel border border-white/10 group-hover:border-white/40 transition-colors">
                <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <p>© 2026 Nok Sreyroth. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Designed for Modern Web</span>
            <span>•</span>
            <span className="text-white">Dark Aesthetic</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
