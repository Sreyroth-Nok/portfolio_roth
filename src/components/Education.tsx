import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-[1px] bg-white/40" />
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">05 / ACADEMIC BACKGROUND</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase mb-12"
        >
          Education<span className="text-neutral-500">.</span>
        </motion.h2>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-300 max-w-4xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0">
                <GraduationCap size={28} />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Higher Education</span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  Beltei International University
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full border border-white/10 text-xs font-mono text-neutral-300 self-start sm:self-center">
              <Calendar size={14} className="text-white" />
              <span>Year 4 Student</span>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Degree Program</p>
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Award size={18} className="text-white" />
                Bachelor of Information Technology & Science
              </h4>
              <p className="text-sm text-neutral-400 font-normal leading-relaxed">
                Specializing in Software Engineering principles, database management systems, object-oriented programming, and system design.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Key Academic Focus</p>
              <ul className="space-y-2 text-xs font-mono text-neutral-300">
                <li className="flex items-center gap-2">
                  <BookOpen size={14} className="text-white" /> Software Architecture & Data Structures
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen size={14} className="text-white" /> Relational Database Systems (SQL)
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen size={14} className="text-white" /> Full Stack Web Development
                </li>
              </ul>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
