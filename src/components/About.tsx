import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Code, Cpu, Smartphone, Server, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    { name: 'Core Banking Systems', icon: Server, desc: 'Loan module engineering & typed API integration' },
    { name: 'ERP & Odoo Development', icon: Cpu, desc: 'Custom business logic, XML views & stock systems' },
    { name: 'Modern Web Architecture', icon: Globe, desc: 'React, TypeScript, GraphQL & RESTful APIs' },
    { name: 'Cross-Platform Mobile', icon: Smartphone, desc: 'Responsive React Native mobile solutions' },
  ];

  return (
    <section id="about" className="py-32 relative border-t dark:border-white/10 border-black/10 dark:bg-[#050505] bg-[#f8f9fc] transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="w-8 h-[1px] dark:bg-white/40 bg-black/40" />
          <span className="text-xs font-mono uppercase tracking-widest dark:text-neutral-400 text-neutral-600">01 / ABOUT ME</span>
        </motion.div>

        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Large Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <h2 className="text-5xl sm:text-7xl font-extrabold dark:text-white text-neutral-900 tracking-tighter leading-none uppercase">
              Code.<br />
              <span className="dark:text-neutral-500 text-neutral-400">Design.</span><br />
              Build.<br />
              <span className="dark:text-white text-neutral-900">Improve.</span>
            </h2>

            <div className="pt-8 flex items-center gap-4">
              <div className="p-4 glass-card rounded-2xl border dark:border-white/10 border-black/10 flex items-center justify-center">
                <Code size={32} className="dark:text-white text-neutral-900" />
              </div>
              <div>
                <p className="text-xs font-mono dark:text-neutral-400 text-neutral-600 uppercase tracking-wider">Engineering Focus</p>
                <p className="text-sm font-semibold dark:text-white text-neutral-900">Full Stack & System Reliability</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Detailed Bio & Core Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-heading dark:text-white text-neutral-900 leading-snug">
              Nok Sreyroth is a Software Engineering student with practical experience in Core Banking Systems and ERP development.
            </h3>

            <p className="dark:text-neutral-400 text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
              Specialized in building high-reliability digital applications. Experienced across full-stack engineering environments including{' '}
              <strong className="dark:text-white text-neutral-900 font-semibold">React, TypeScript, GraphQL, REST APIs, Python, Odoo, Laravel</strong>, and{' '}
              <strong className="dark:text-white text-neutral-900 font-semibold">React Native</strong>. Driven by clean code architecture, type safety, and seamless user experiences.
            </p>

            <div className="p-5 glass-panel rounded-2xl border dark:border-white/15 border-black/10 space-y-3">
              <p className="text-xs font-mono dark:text-neutral-400 text-neutral-600 uppercase tracking-widest">Financial Engineering Perspective</p>
              <p className="text-sm dark:text-neutral-200 text-neutral-800 leading-relaxed font-medium">
                "My experience spans customer-facing mobile applications and internal financial systems, giving me a deep understanding of both user experience and business workflows."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-xl">
                  <span className="text-[10px] font-mono dark:text-neutral-400 text-neutral-600 uppercase tracking-widest block">Customer Side</span>
                  <p className="text-xs font-bold dark:text-white text-neutral-900 mt-1">B2C Mobile Loan App</p>
                  <p className="text-[11px] dark:text-neutral-400 text-neutral-600 mt-0.5">Borrower self-service, repayments & alerts</p>
                </div>
                <div className="p-3 dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-xl">
                  <span className="text-[10px] font-mono dark:text-neutral-400 text-neutral-600 uppercase tracking-widest block">Institution Side</span>
                  <p className="text-xs font-bold dark:text-white text-neutral-900 mt-1">FI Mobile Loan System</p>
                  <p className="text-[11px] dark:text-neutral-400 text-neutral-600 mt-0.5">Credit officer operations, loans & daily reports</p>
                </div>
              </div>
            </div>

            {/* Grid of Core Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    className="p-5 glass-card rounded-2xl border dark:border-white/10 border-black/10 hover:border-black/20 dark:hover:border-white/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg dark:bg-white/10 bg-neutral-900 flex items-center justify-center text-white">
                        <IconComponent size={16} />
                      </div>
                      <h4 className="font-semibold dark:text-white text-neutral-900 text-sm">{item.name}</h4>
                    </div>
                    <p className="text-xs dark:text-neutral-400 text-neutral-600 font-normal leading-normal">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Key Principles Pills */}
            <div className="pt-4 border-t dark:border-white/10 border-black/10 flex flex-wrap items-center gap-3">
              {['Type-Safe Architecture', 'Responsive UI/UX', 'RESTful & GraphQL APIs', 'Custom ERP Business Logic'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 text-xs font-mono dark:text-neutral-300 text-neutral-700 dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 px-3.5 py-1.5 rounded-full">
                  <CheckCircle2 size={13} className="dark:text-white text-neutral-900" />
                  {item}
                </span>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
