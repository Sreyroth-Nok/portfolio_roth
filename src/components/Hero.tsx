import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowDownRight, ShieldCheck, Sparkles } from 'lucide-react';
import me from '../assets/me.png';
import cartoonSilver from '../assets/cartoon_silver.png';

export const Hero: React.FC = () => {
  const [showRealPhoto, setShowRealPhoto] = useState(true); // Default to showing real photo bright and clear

  // Automatic autonomous morph loop (toggles every 9 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setShowRealPhoto((prev) => !prev);
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  // Mouse position for 3D tilt & parallax spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse move
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [6, -6]), { damping: 25, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-6, 6]), { damping: 25, stiffness: 200 });
  const imageX = useSpring(useTransform(mouseX, [-300, 300], [-6, 6]), { damping: 30, stiffness: 150 });
  const imageY = useSpring(useTransform(mouseY, [-300, 300], [-6, 6]), { damping: 30, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">

        {/* LEFT COLUMN: Headline & Intro */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-white/15 text-xs font-mono tracking-widest text-neutral-300 uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 absolute" />
            <span className="ml-2 font-medium text-white">FULL STACK DEVELOPER</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
              Building Digital <br />
              <span className="shimmer-text">Experiences</span> <br />
              That Actually Work.
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg text-neutral-400 max-w-xl font-normal leading-relaxed"
          >
            Software Engineer building modern web and mobile applications for financial, enterprise, and digital experiences. Experienced in{' '}
            <span className="text-white font-medium">React</span>,{' '}
            <span className="text-white font-medium">TypeScript</span>,{' '}
            <span className="text-white font-medium">mobile applications</span>,{' '}
            <span className="text-white font-medium">loan management systems</span>,{' '}
            <span className="text-white font-medium">GraphQL</span>,{' '}
            <span className="text-white font-medium">Laravel</span>,{' '}
            <span className="text-white font-medium">Python</span>, and{' '}
            <span className="text-white font-medium">Odoo</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-semibold text-sm tracking-wide overflow-hidden hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)]"
            >
              <span>View My Work</span>
              <ArrowDownRight size={18} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 glass-card text-white border border-white/15 px-8 py-4 rounded-xl font-medium text-sm tracking-wide hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              <span>Let's Connect</span>
            </a>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-6 border-t border-white/10 w-full grid grid-cols-3 gap-4 text-left"
          >
            <div>
              <p className="text-2xl font-bold font-heading text-white">2+</p>
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-heading text-white">Core Banking</p>
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">System Developer</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-heading text-white">ERP & Odoo</p>
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Custom Solutions</p>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: Full Bright Crisp Portrait inside Drawn 6-Point Glass Shield Frame */}
        <div className="lg:col-span-5 flex justify-center items-center relative perspective-1000 py-6">

          {/* Outer Orbital Glowing Swirl Ring Line */}
          <div className="absolute top-[24%] left-[-14%] w-[128%] h-[50%] border border-white/30 rounded-[100%] rotate-[-22deg] pointer-events-none shadow-[0_0_50px_rgba(255,255,255,0.12)] z-10" />

          {/* Master Glass Card Container */}
          <motion.div
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full max-w-[490px] aspect-[500/620] select-none"
          >
            {/* SVG Background Layer for Glow, Refraction, 6-Point Outline & Specular Gleam Dots */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-20"
              viewBox="0 0 500 620"
              fill="none"
            >
              <defs>
                <linearGradient id="frameEdgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="25%" stopColor="#ffffff" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="75%" stopColor="#ffffff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                </linearGradient>

                <filter id="glowGleam" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Glass fill base for front portrait card */}
              <path
                d="M 90,110 L 375,12 L 378,145 L 345,275 L 275,595 L 60,480 Z"
                fill="rgba(15, 15, 22, 0.3)"
              />

              {/* Glass fill base for 3D right extension panel */}
              <path
                d="M 378,145 L 460,185 L 460,500 L 275,595 L 345,275 Z"
                fill="rgba(255, 255, 255, 0.04)"
              />

              {/* Front Glass Frame Stroke */}
              <path
                d="M 90,110 L 375,12 L 378,145 L 345,275 L 275,595 L 60,480 Z"
                stroke="url(#frameEdgeGradient)"
                strokeWidth="3"
                filter="url(#glowGleam)"
                className="filter drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]"
              />

              {/* 3D Glass Side Extension Frame Stroke (EXACT MATCH TO USER'S WHITE DRAWING) */}
              <path
                d="M 378,145 L 460,185 L 460,500 L 275,595"
                stroke="url(#frameEdgeGradient)"
                strokeWidth="3"
                filter="url(#glowGleam)"
                className="filter drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]"
              />

              {/* Specular Gleam Glow Dots matching user's drawing vertices */}
              <circle cx="375" cy="12" r="4" fill="#ffffff" className="animate-pulse filter drop-shadow-[0_0_12px_#ffffff]" />
              <circle cx="378" cy="145" r="3" fill="#ffffff" className="filter drop-shadow-[0_0_8px_#ffffff]" />
              <circle cx="345" cy="275" r="3" fill="#ffffff" className="animate-pulse filter drop-shadow-[0_0_8px_#ffffff]" />
              <circle cx="460" cy="185" r="4" fill="#ffffff" className="animate-pulse filter drop-shadow-[0_0_12px_#ffffff]" />
              <circle cx="460" cy="500" r="3.5" fill="#ffffff" className="animate-pulse filter drop-shadow-[0_0_10px_#ffffff]" />
              <circle cx="275" cy="595" r="4.5" fill="#ffffff" className="animate-pulse filter drop-shadow-[0_0_15px_#ffffff]" />
            </svg>

            {/* Clipped Full Portrait Container (Fills the Full 3D Glass Box Prism Shape) */}
            <div
              style={{
                clipPath: 'polygon(18% 17.7%, 75% 1.9%, 92% 29.8%, 92% 80.6%, 55% 96%, 12% 77.4%)',
              }}
              className="absolute inset-0 w-full h-full bg-neutral-950 overflow-hidden cursor-pointer z-10"
              onClick={() => setShowRealPhoto(!showRealPhoto)}
            >
              {/* Base Layer: Real Photo (me.png) - Bright, Vibrant, Sharp */}
              <motion.img
                style={{
                  x: imageX,
                  y: imageY,
                  filter: 'brightness(118%) contrast(108%) saturate(106%)',
                }}
                src={me}
                alt="Nok Sreyroth Real Portrait"
                className="absolute inset-0 w-full h-full object-cover object-top scale-100 transition-all duration-300"
              />

              {/* Top Layer: Cartoon Silver Avatar (cartoonSilver.png) */}
              <motion.img
                style={{
                  x: imageX,
                  y: imageY,
                  filter: 'brightness(115%) contrast(108%)',
                }}
                src={cartoonSilver}
                alt="Nok Sreyroth Silver Avatar"
                animate={{
                  opacity: showRealPhoto ? 0 : 1,
                }}
                transition={{ duration: 2.5, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-cover object-top scale-100 pointer-events-none"
              />

              {/* Minimal Bottom Gradient Shadow only at the text feet area */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Bottom Overlay Text Label */}
              <div className="absolute bottom-6 left-12 right-12 z-20 text-center sm:text-left">
                <p className="text-[10px] font-mono text-neutral-300 uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1.5 mb-0.5">
                  <Sparkles size={11} className="text-white" />
                  {/* {showRealPhoto ? 'Real Photo Revealed' : 'Silver Stylized Avatar'} */}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white drop-shadow-md">Nok Sreyroth</h3>
                <p className="text-xs text-neutral-200 mt-0.5 flex items-center justify-center sm:justify-start gap-1.5 font-medium">
                  <ShieldCheck size={13} className="text-white" /> Core Banking & ERP Engineer
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};


