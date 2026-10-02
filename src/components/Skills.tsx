import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Code2, Database, Wrench, Terminal, Cpu } from 'lucide-react';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'other';
  level: string;
  description: string;
}

const skillsData: Skill[] = [
  // Frontend
  { name: 'HTML', category: 'frontend', level: 'Advanced', description: 'Semantic structure, accessibility & SEO' },
  { name: 'CSS', category: 'frontend', level: 'Advanced', description: 'Flexbox, Grid, keyframes & responsive design' },
  { name: 'JavaScript', category: 'frontend', level: 'Advanced', description: 'ES6+, Async/Await, DOM & Closures' },
  { name: 'React.js', category: 'frontend', level: 'Advanced', description: 'Hooks, Context, State Management & Routing' },
  { name: 'React TypeScript', category: 'frontend', level: 'Advanced', description: 'Strict typing, Generics & Component Interfaces' },
  { name: 'React Native', category: 'frontend', level: 'Intermediate', description: 'Cross-platform mobile apps & native components' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'Advanced', description: 'Utility-first styling, design tokens & dark modes' },
  { name: 'MUI', category: 'frontend', level: 'Intermediate', description: 'Material Design UI components & theme customizing' },
  { name: 'Bootstrap', category: 'frontend', level: 'Intermediate', description: 'Rapid grid layout & responsive utilities' },

  // Backend
  { name: 'PHP', category: 'backend', level: 'Intermediate', description: 'Server-side scripting & OOP concepts' },
  { name: 'Laravel', category: 'backend', level: 'Intermediate', description: 'Eloquent ORM, Blade, Routing & Middleware' },
  { name: 'Python', category: 'backend', level: 'Advanced', description: 'Backend automation, data logic & Odoo integration' },
  { name: 'Java', category: 'backend', level: 'Intermediate', description: 'Object-oriented programming & core backend logic' },
  { name: 'REST API', category: 'backend', level: 'Advanced', description: 'JSON endpoints, authentication & HTTP standards' },
  { name: 'GraphQL', category: 'backend', level: 'Intermediate', description: 'Queries, Mutations, Schema design & Apollo/Relay' },

  // Database / Tools
  { name: 'SQL', category: 'database', level: 'Advanced', description: 'Relational queries, indexing, joins & schema design' },
  { name: 'Git', category: 'database', level: 'Advanced', description: 'Version control, branching & merge workflows' },
  { name: 'GitHub', category: 'database', level: 'Advanced', description: 'Repositories, Pull Requests & CI/CD Actions' },
  { name: 'Postman', category: 'database', level: 'Advanced', description: 'API testing, mock servers & documentation' },

  // Other
  { name: 'Odoo', category: 'other', level: 'Advanced', description: 'ERP customization, module creation & XML views' },
  { name: 'C', category: 'other', level: 'Intermediate', description: 'Memory management & core computer science algorithms' },
  { name: 'C++', category: 'other', level: 'Intermediate', description: 'OOP, data structures & system-level logic' },
  { name: 'C#', category: 'other', level: 'Intermediate', description: '.NET framework foundations & object models' },
  { name: 'Dart', category: 'other', level: 'Intermediate', description: 'Flutter & strongly-typed client application code' },
];

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Terminal },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend', icon: Cpu },
    { id: 'database', label: 'Database & Tools', icon: Database },
    { id: 'other', label: 'ERP & Systems', icon: Wrench },
  ];

  return (
    <section id="skills" className="py-32 relative border-t dark:border-white/10 border-black/10 dark:bg-[#030303] bg-[#f8f9fc] transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-3"
            >
              <span className="w-8 h-[1px] dark:bg-white/40 bg-black/40" />
              <span className="text-xs font-mono uppercase tracking-widest dark:text-neutral-400 text-neutral-600">02 / TECHNICAL ARCHITECTURE</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-extrabold dark:text-white text-neutral-900 tracking-tight uppercase"
            >
              Skills & Stack<span className="dark:text-neutral-500 text-neutral-400">.</span>
            </motion.h2>
          </div>

          {/* Search Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full md:w-72"
          >
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 dark:text-neutral-400 text-neutral-500" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, Odoo)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full dark:bg-[#0a0a0a] bg-white border dark:border-white/15 border-black/15 rounded-xl pl-10 pr-4 py-2.5 text-xs dark:text-white text-neutral-900 dark:placeholder-neutral-500 placeholder-neutral-400 focus:outline-none dark:focus:border-white/40 focus:border-black/40 transition-all font-mono shadow-sm"
            />
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b dark:border-white/10 border-black/10 pb-6">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'dark:bg-white dark:text-black bg-neutral-900 text-white font-semibold shadow-md'
                    : 'glass-card dark:text-neutral-400 text-neutral-600 dark:hover:text-white hover:text-black border dark:border-white/10 border-black/10 dark:hover:border-white/25 hover:border-black/25'
                }`}
              >
                <IconComp size={14} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group glass-card p-5 rounded-2xl border dark:border-white/10 border-black/10 dark:hover:border-white/30 hover:border-black/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle animated spotlight background effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br dark:from-white/5 from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl dark:bg-white/10 bg-neutral-900 border dark:border-white/15 border-black/10 flex items-center justify-center text-white font-mono font-bold text-xs dark:group-hover:bg-white dark:group-hover:text-black group-hover:bg-neutral-800 transition-all">
                    {skill.name.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[10px] font-mono dark:text-neutral-400 text-neutral-600 dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading dark:text-white text-neutral-900 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs dark:text-neutral-400 text-neutral-600 font-normal mt-1 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 glass-card rounded-2xl border dark:border-white/10 border-black/10">
            <p className="dark:text-neutral-400 text-neutral-600 text-sm font-mono">No skills found matching "{searchQuery}"</p>
          </div>
        )}

      </div>
    </section>
  );
};
