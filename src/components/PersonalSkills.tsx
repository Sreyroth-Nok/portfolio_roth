import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Clock, Users, Crown, MessageSquareCode, Brain } from 'lucide-react';

const personalSkills = [
  { name: 'Open Mind', icon: Compass, desc: 'Adaptive learning mindset & eager to adopt emerging technologies.' },
  { name: 'Time Management', icon: Clock, desc: 'Efficient sprint planning, deadline compliance & prioritization.' },
  { name: 'Teamwork', icon: Users, desc: 'Collaborative team player with Git branching & agile workflows.' },
  { name: 'Leadership', icon: Crown, desc: 'Initiative in code standards, module architecture & peer support.' },
  { name: 'Effective Communication', icon: MessageSquareCode, desc: 'Clear technical documentation, API specs & cross-functional dialogue.' },
  { name: 'Critical Thinking', icon: Brain, desc: 'Root-cause debugging, performance optimization & system safety.' },
];

export const PersonalSkills: React.FC = () => {
  return (
    <section className="py-24 relative border-t dark:border-white/10 border-black/10 dark:bg-[#030303] bg-[#f8f9fc] transition-colors duration-400">
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
          <span className="text-xs font-mono uppercase tracking-widest dark:text-neutral-400 text-neutral-600">06 / INTERPERSONAL CAPABILITIES</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold dark:text-white text-neutral-900 tracking-tight uppercase mb-12"
        >
          Personal Skills<span className="dark:text-neutral-500 text-neutral-400">.</span>
        </motion.h2>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalSkills.map((skill, idx) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group glass-card p-6 rounded-2xl border dark:border-white/10 border-black/10 dark:hover:border-white/30 hover:border-black/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl dark:bg-white/10 bg-neutral-900 border dark:border-white/15 border-black/10 flex items-center justify-center text-white dark:group-hover:bg-white dark:group-hover:text-black group-hover:bg-neutral-800 transition-all duration-300">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-lg font-bold font-heading dark:text-white text-neutral-900">{skill.name}</h3>
                </div>

                <p className="text-xs dark:text-neutral-400 text-neutral-600 font-normal leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
