import React from 'react';
import { motion } from 'framer-motion';

export const CreativeTransition: React.FC = () => {
  return (
    <section className="relative py-24 dark:bg-[#030303] bg-[#f8f9fc] overflow-hidden border-t dark:border-white/10 border-black/10 transition-colors duration-400">
      
      {/* Background Animated Grid & Spotlight */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-48 dark:bg-white/[0.02] bg-black/[0.02] blur-3xl pointer-events-none" />

      {/* Thin Expanding White Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-[1px] bg-gradient-to-r from-transparent dark:via-white via-black to-transparent mb-12 shadow-md"
      />

      {/* Infinite Horizontal Marquee Text */}
      <div className="relative overflow-hidden py-4 border-y dark:border-white/10 border-black/10 glass-panel">
        <div className="animate-marquee flex items-center whitespace-nowrap gap-12 font-heading font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase dark:text-white/90 text-neutral-900">
          <span>LET'S BUILD SOMETHING GREAT</span>
          <span className="dark:text-neutral-600 text-neutral-400">•</span>
          <span className="shimmer-text">FULL STACK EXCELLENCE</span>
          <span className="dark:text-neutral-600 text-neutral-400">•</span>
          <span>NOK SREYROTH</span>
          <span className="dark:text-neutral-600 text-neutral-400">•</span>
          <span>LET'S BUILD SOMETHING GREAT</span>
          <span className="dark:text-neutral-600 text-neutral-400">•</span>
          <span className="shimmer-text">FULL STACK EXCELLENCE</span>
          <span className="dark:text-neutral-600 text-neutral-400">•</span>
          <span>NOK SREYROTH</span>
          <span className="dark:text-neutral-600 text-neutral-400">•</span>
        </div>
      </div>

      {/* Bottom Expanding Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="h-[1px] bg-gradient-to-r from-transparent dark:via-white/50 via-black/50 to-transparent mt-12"
      />

    </section>
  );
};
