import React from 'react';
import { motion } from 'framer-motion';

export const CreativeTransition: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#030303] overflow-hidden border-t border-white/10">
      
      {/* Background Animated Grid & Spotlight */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-48 bg-white/[0.02] blur-3xl pointer-events-none" />

      {/* Thin Expanding White Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mb-12 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
      />

      {/* Infinite Horizontal Marquee Text */}
      <div className="relative overflow-hidden py-4 border-y border-white/10 glass-panel">
        <div className="animate-marquee flex items-center whitespace-nowrap gap-12 font-heading font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase text-white/90">
          <span>LET'S BUILD SOMETHING GREAT</span>
          <span className="text-neutral-600">•</span>
          <span className="shimmer-text">FULL STACK EXCELLENCE</span>
          <span className="text-neutral-600">•</span>
          <span>NOK SREYROTH</span>
          <span className="text-neutral-600">•</span>
          <span>LET'S BUILD SOMETHING GREAT</span>
          <span className="text-neutral-600">•</span>
          <span className="shimmer-text">FULL STACK EXCELLENCE</span>
          <span className="text-neutral-600">•</span>
          <span>NOK SREYROTH</span>
          <span className="text-neutral-600">•</span>
        </div>
      </div>

      {/* Bottom Expanding Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mt-12"
      />

    </section>
  );
};
