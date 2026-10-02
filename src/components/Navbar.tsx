import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Code2, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Finance', href: '#financial-systems' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'dark:bg-[#030303]/80 bg-white/80 backdrop-blur-xl dark:border-white/10 border-black/10 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2 text-2xl font-extrabold tracking-tighter dark:text-white text-neutral-900"
        >
          <div className="w-8 h-8 rounded-lg dark:bg-white/10 bg-neutral-900 dark:border-white/20 border-black/10 flex items-center justify-center text-white dark:group-hover:bg-white dark:group-hover:text-black group-hover:bg-neutral-800 transition-all duration-300">
            <Code2 size={18} />
          </div>
          <span className="font-heading">
            Zzzroth<span className="text-neutral-500 dark:group-hover:text-white group-hover:text-black transition-colors">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-2 rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs uppercase tracking-widest font-mono transition-colors duration-200 ${
                  isActive
                    ? 'dark:text-white text-black font-bold'
                    : 'dark:text-neutral-400 text-neutral-600 dark:hover:text-white hover:text-black'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 dark:bg-white/10 bg-black/10 rounded-full dark:border-white/20 border-black/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full glass-card dark:text-white text-neutral-900 hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md"
            aria-label="Toggle Theme"
            title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          >
            {theme === 'dark' ? <Sun size={18} className="text-amber-300" /> : <Moon size={18} className="text-indigo-600" />}
          </button>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase dark:bg-white dark:text-black bg-neutral-900 text-white px-5 py-2.5 rounded-full font-semibold overflow-hidden hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger & Theme Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 glass-card rounded-lg dark:text-white text-neutral-900"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} className="text-amber-300" /> : <Moon size={18} className="text-indigo-600" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 dark:text-neutral-300 text-neutral-800 glass-card rounded-lg border dark:border-white/10 border-black/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden dark:bg-[#070707] bg-white border-b dark:border-white/10 border-black/10 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-heading dark:text-neutral-300 text-neutral-800 dark:hover:text-white hover:text-black flex items-center justify-between border-b dark:border-neutral-900 border-neutral-200 pb-3"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={16} className="text-neutral-500" />
                </a>
              ))}
              
              <button
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                className="mt-2 flex items-center justify-between glass-card p-3 rounded-xl dark:text-white text-neutral-900 text-sm font-mono uppercase"
              >
                <span>Switch Theme Mode</span>
                <span className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                  {theme === 'dark' ? '☀️ WHITE MODE' : '🌙 DARK MODE'}
                </span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center dark:bg-white dark:text-black bg-neutral-900 text-white font-semibold py-3 rounded-xl tracking-wider text-sm uppercase"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

