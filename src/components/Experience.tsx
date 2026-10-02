import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Building2, Code2 } from 'lucide-react';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  type: string;
  project: string;
  technologies: string[];
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'finztrust',
    company: 'FinzTrust',
    role: 'Software Developer / Core Banking Developer',
    duration: '6 Months / Current Staff',
    type: 'Core Banking System',
    project: 'Core Banking System — Loan Module',
    technologies: ['React', 'TypeScript', 'GraphQL', 'REST APIs', 'UI Component Library'],
    responsibilities: [
      'Worked on the core banking system with high data integrity requirements.',
      'Focused on the Loan module for financial product calculation and customer management.',
      'Developed robust frontend components using React and TypeScript for strict type safety.',
      'Integrated GraphQL and REST APIs for seamless real-time loan data processing.',
      'Improved data handling performance and UI reliability through reusable typed components.',
    ],
  },
  {
    id: 'titb',
    company: 'TITB',
    role: 'Odoo Developer Intern',
    duration: '3 Months',
    type: 'ERP & Custom Business Modules',
    project: 'Stock Management System',
    technologies: ['Python', 'XML', 'Odoo', 'PostgreSQL'],
    responsibilities: [
      'Customized core Odoo modules tailored to organizational workflow needs.',
      'Wrote backend Python business logic for stock transaction handling and automation.',
      'Created and customized structured XML views for seamless user interface navigation.',
      'Implemented stock in/out functionality, product tracking, and inventory movement logs.',
      'Generated automated inventory reporting features and data export workflows.',
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative border-t dark:border-white/10 border-black/10 dark:bg-[#050505] bg-white transition-colors duration-400">
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
          <span className="text-xs font-mono uppercase tracking-widest dark:text-neutral-400 text-neutral-600">03 / CAREER TRACK</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold dark:text-white text-neutral-900 tracking-tight uppercase mb-16"
        >
          Professional Experience<span className="dark:text-neutral-500 text-neutral-400">.</span>
        </motion.h2>

        {/* Vertical Timeline Container */}
        <div className="relative border-l dark:border-white/15 border-black/15 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-16">
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 rounded-full dark:bg-[#050505] bg-white border-2 dark:border-white border-neutral-900 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                <div className="w-2 h-2 rounded-full dark:bg-white bg-neutral-900 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border dark:border-white/10 border-black/10 dark:hover:border-white/30 hover:border-black/20 transition-all duration-300">
                
                {/* Top Row: Meta info */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b dark:border-white/10 border-black/10">
                  <div>
                    <div className="flex items-center gap-2 dark:text-white text-neutral-900 font-mono text-xs mb-1">
                      <Building2 size={14} className="dark:text-neutral-400 text-neutral-500" />
                      <span className="uppercase tracking-wider font-semibold">{exp.company}</span>
                      <span className="dark:text-neutral-600 text-neutral-400">•</span>
                      <span className="dark:text-neutral-400 text-neutral-600">{exp.type}</span>
                    </div>
                    <h3 className="text-2xl font-bold font-heading dark:text-white text-neutral-900">{exp.role}</h3>
                  </div>

                  <div className="flex items-center gap-2 glass-panel px-3.5 py-1.5 rounded-full border dark:border-white/10 border-black/10 text-xs font-mono dark:text-neutral-300 text-neutral-700">
                    <Calendar size={13} className="dark:text-white text-neutral-900" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Subtitle / Project Focus */}
                <div className="mb-6">
                  <p className="text-xs font-mono dark:text-neutral-400 text-neutral-600 uppercase tracking-widest mb-1">Focus Project</p>
                  <p className="text-base font-semibold dark:text-white text-neutral-900 flex items-center gap-2">
                    <Code2 size={16} className="dark:text-white text-neutral-900" />
                    {exp.project}
                  </p>
                </div>

                {/* Responsibilities List */}
                <div className="space-y-3 mb-6">
                  {exp.responsibilities.map((task, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight size={16} className="dark:text-white text-neutral-900 mt-1 shrink-0" />
                      <p className="text-sm dark:text-neutral-300 text-neutral-700 leading-relaxed">{task}</p>
                    </div>
                  ))}
                </div>

                {/* Technologies Used Badges */}
                <div className="pt-4 border-t dark:border-white/10 border-black/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono dark:text-neutral-500 text-neutral-600 uppercase tracking-wider mr-2">Tech:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono dark:text-white text-neutral-800 dark:bg-white/10 bg-black/5 border dark:border-white/15 border-black/10 px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
