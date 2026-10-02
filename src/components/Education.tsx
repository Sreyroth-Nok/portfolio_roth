import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative border-t dark:border-white/10 border-black/10 dark:bg-[#050505] bg-white transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-[1px] dark:bg-white/40 bg-black/40" />
          <span className="text-xs font-mono uppercase tracking-widest dark:text-neutral-400 text-neutral-600">05 / ACADEMIC BACKGROUND</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold dark:text-white text-neutral-900 tracking-tight uppercase mb-12"
        >
          Education<span className="dark:text-neutral-500 text-neutral-400">.</span>
        </motion.h2>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 sm:p-10 rounded-3xl border dark:border-white/10 border-black/10 dark:hover:border-white/30 hover:border-black/20 transition-all duration-300 max-w-4xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b dark:border-white/10 border-black/10">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl dark:bg-white/10 bg-neutral-900 border dark:border-white/15 border-black/10 flex items-center justify-center text-white shrink-0">
                <GraduationCap size={28} />
              </div>
              <div>
                <span className="text-xs font-mono dark:text-neutral-400 text-neutral-600 uppercase tracking-widest">Higher Education</span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading dark:text-white text-neutral-900">
                  Beltei International University
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full border dark:border-white/10 border-black/10 text-xs font-mono dark:text-neutral-300 text-neutral-700 self-start sm:self-center">
              <Calendar size={14} className="dark:text-white text-neutral-900" />
              <span>Year 4 Student</span>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-xs font-mono dark:text-neutral-400 text-neutral-600 uppercase tracking-wider">Degree Program</p>
              <h4 className="text-lg font-semibold dark:text-white text-neutral-900 flex items-center gap-2">
                <Award size={18} className="dark:text-white text-neutral-900" />
                Bachelor of Information Technology & Science
              </h4>
              <p className="text-sm dark:text-neutral-400 text-neutral-600 font-normal leading-relaxed">
                Specializing in Software Engineering principles, database management systems, object-oriented programming, and system design.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-mono dark:text-neutral-400 text-neutral-600 uppercase tracking-wider">Key Academic Focus</p>
              <ul className="space-y-2 text-xs font-mono dark:text-neutral-300 text-neutral-700">
                <li className="flex items-center gap-2">
                  <BookOpen size={14} className="dark:text-white text-neutral-900" /> Software Architecture & Data Structures
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen size={14} className="dark:text-white text-neutral-900" /> Relational Database Systems (SQL)
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen size={14} className="dark:text-white text-neutral-900" /> Full Stack Web Development
                </li>
              </ul>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
