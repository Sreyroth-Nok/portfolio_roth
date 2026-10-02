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
    <footer className="dark:bg-[#020202] bg-[#f1f5f9] border-t dark:border-white/10 border-black/10 py-16 dark:text-neutral-400 text-neutral-600 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b dark:border-white/10 border-black/10 items-start">

          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <a href="#hero" className="flex items-center gap-2 text-2xl font-extrabold tracking-tighter dark:text-white text-neutral-900">
              <div className="w-8 h-8 rounded-lg dark:bg-white dark:text-black bg-neutral-900 text-white flex items-center justify-center">
                <Code2 size={18} />
              </div>
              <span className="font-heading">Zzzroth<span className="text-neutral-500 dark:group-hover:text-white group-hover:text-black transition-colors">.</span></span>
            </a>
            <p className="text-xs font-mono dark:text-neutral-400 text-neutral-600 uppercase tracking-widest">
              Full Stack Developer & Software Engineering Student
            </p>
            <p className="text-xs dark:text-neutral-500 text-neutral-600 max-w-sm">
              Building high-availability web applications, core banking software, and custom ERP solutions with modern type-safe standards.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4">
            <p className="text-xs font-mono dark:text-white text-neutral-900 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="grid grid-cols-2 gap-2 text-xs font-mono">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="dark:hover:text-white hover:text-black transition-colors">
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
                className="w-10 h-10 rounded-full glass-card border dark:border-white/15 border-black/10 flex items-center justify-center dark:text-white text-neutral-900 dark:hover:bg-white dark:hover:text-black hover:bg-neutral-900 hover:text-white transition-all cursor-pointer shadow-sm"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="mailto:noksreyroth@gmail.com"
                className="w-10 h-10 rounded-full glass-card border dark:border-white/15 border-black/10 flex items-center justify-center dark:text-white text-neutral-900 dark:hover:bg-white dark:hover:text-black hover:bg-neutral-900 hover:text-white transition-all cursor-pointer shadow-sm"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:0965946057"
                className="w-10 h-10 rounded-full glass-card border dark:border-white/15 border-black/10 flex items-center justify-center dark:text-white text-neutral-900 dark:hover:bg-white dark:hover:text-black hover:bg-neutral-900 hover:text-white transition-all cursor-pointer shadow-sm"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs font-mono dark:text-neutral-400 text-neutral-600 dark:hover:text-white hover:text-black transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <div className="p-2 rounded-full glass-panel border dark:border-white/10 border-black/10 dark:group-hover:border-white/40 group-hover:border-black/40 transition-colors">
                <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono dark:text-neutral-500 text-neutral-600 gap-4">
          <p>© 2026 Nok Sreyroth. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Designed for Modern Web</span>
            <span>•</span>
            <span className="dark:text-white text-neutral-900 font-semibold">Multiple Theme Modes</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
