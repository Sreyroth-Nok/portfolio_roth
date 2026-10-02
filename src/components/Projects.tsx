import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, X, Layers } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github?: string;
  longDescription: string;
  architecture: string;
}

const projects: Project[] = [
  {
    id: 'b2c-loan-app',
    number: '01',
    title: 'B2C Mobile Loan App',
    subtitle: 'Mobile Banking / Customer-Facing',
    description: 'A mobile application designed for existing borrowers of a partner Financial Institution in Cambodia to securely access and manage their loan information digitally.',
    image: '/b2c_loan.png',
    technologies: ['Mobile Application', 'Loan Management', 'QR Login', 'API Integration', 'Digital Repayment', 'Notifications'],
    features: [
      'Secure borrower login using QR code authentication',
      'View loan status, balance in KHR Riel & USD, and details',
      'Track installment repayment schedule & digital logs',
      'Automated repayment reminders & push notifications',
      'Digital loan tracking improving customer convenience',
    ],
    longDescription: 'The B2C Mobile Loan App focuses on giving borrowers a convenient digital way to access loan information and manage repayments while helping the financial institution improve repayment follow-up through digital tracking and notifications.',
    architecture: 'React Native Mobile App -> Secure REST APIs -> Loan Processing Engine -> Automated Push Server',
  },
  {
    id: 'fi-loan-system',
    number: '02',
    title: 'FI Mobile Loan System',
    subtitle: 'Financial Institution / Internal Operations',
    description: 'A mobile loan management application designed to support Credit Officers and staff in their daily operations within a Financial Institution in Phnom Penh, Cambodia.',
    image: '/fi_loan.png',
    technologies: ['Customer Management', 'Loan Management', 'Repayment', 'Daily Reports', 'Mobile Operations', 'Financial Institution'],
    features: [
      'Manage customer profiles and access customer loan records',
      'Create and manage loan information, track status & monitor activities',
      'Record repayments and track installment progress (KHR & USD)',
      'Generate operational daily activity reports supporting field officers',
      'Live branch statistics dashboard (1,248 Customers, 856 Active Loans)',
    ],
    longDescription: 'The system helps institution staff perform daily customer, loan, repayment, and reporting activities through a mobile interface, optimizing operational efficiency for credit officers.',
    architecture: 'Mobile Staff Client -> Field Synchronization Middleware -> Financial Institution Database -> Daily Analytics Engine',
  },
  {
    id: 'core-banking',
    number: '03',
    title: 'Core Banking System — Loan Module',
    subtitle: 'Enterprise Core Banking Development',
    description: 'Contributed to core banking software focused on Loan module component engineering, typed data handling, and API integration.',
    image: '/core_banking.png',
    technologies: ['React', 'TypeScript', 'GraphQL', 'REST APIs', 'UI Component Library'],
    features: [
      'Worked on core banking system loan module calculation UI',
      'Developed typed components in React & TypeScript for UI reliability',
      'Integrated APIs for real-time loan data processing and customer profiles',
      'Ensured strict data validation and error handling across financial workflows',
    ],
    longDescription: 'Developed frontend modules for enterprise core banking applications with strict type safety, financial precision, and high data handling reliability.',
    architecture: 'React TypeScript Client -> GraphQL API Layer -> Core Banking Engine -> Typed Relational Data Models',
  },
  {
    id: 'shopping-cart',
    number: '04',
    title: 'Shopping Cart System',
    subtitle: 'Laravel & React E-Commerce Platform',
    description: 'An e-commerce shopping cart application with real-time product listing, dynamic cart management, and typed API endpoints.',
    image: '/project1.png',
    technologies: ['PHP', 'Laravel', 'React.js', 'REST API', 'Tailwind CSS'],
    features: [
      'Interactive product catalog with category filter & instant search',
      'Real-time shopping cart calculation & state persistence',
      'Robust Laravel REST API back-end supporting CRUD operations',
      'Type-checked React frontend integration for user cart actions',
    ],
    github: 'https://github.com/Sreyroth-Nok/shopping-cart',
    longDescription: 'This full-stack application bridges a robust Laravel API backend with a high-performance React user interface. Designed with scalable relational schema and optimized endpoints for real-time inventory and cart operations.',
    architecture: 'Laravel REST API -> JSON Payloads -> React State & Custom Hooks -> Tailwind CSS UI Components',
  },
  {
    id: 'stock-management',
    number: '05',
    title: 'Stock Management System',
    subtitle: 'Odoo & Python ERP Solution',
    description: 'An Odoo-based inventory management system customized for comprehensive stock movement, product tracking, and automated reporting.',
    image: '/project2.png',
    technologies: ['Python', 'XML', 'Odoo', 'PostgreSQL'],
    features: [
      'Customized Odoo business logic for stock in / stock out operations',
      'Product tracking by SKU, category, and storage location',
      'Automated inventory replenishment alerts & log audits',
      'Custom XML view interfaces tailored for warehouse operators',
    ],
    github: 'https://github.com/Sreyroth-Nok/my_custom_stock',
    longDescription: 'Developed as an enterprise-grade stock control module built inside the Odoo ERP ecosystem. Leverages Python object relational mapping (ORM) to handle complex stock validation workflows and XML view definitions for operational efficiency.',
    architecture: 'Python Business Controllers -> Odoo ORM Models -> PostgreSQL Database -> Custom XML User Views',
  },
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 relative border-t border-white/10 bg-[#030303] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-3"
            >
              <span className="w-8 h-[1px] bg-white/40" />
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">04 / FEATURED WORKS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase"
            >
              Engineering Projects<span className="text-neutral-500">.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-400 text-sm max-w-md font-mono"
          >
            Prioritizing financial technology, loan management applications, core banking components, and business systems.
          </motion.p>
        </div>

        {/* Projects Stack / Cards */}
        <div className="space-y-16">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              onClick={() => setSelectedProject(proj)}
              className="group cursor-pointer glass-card rounded-3xl border border-white/10 overflow-hidden hover:border-white/40 transition-all duration-500 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                
                {/* Project Details Column */}
                <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
                  
                  {/* Number & Category */}
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-mono font-extrabold text-white/20 group-hover:text-white transition-colors duration-300">
                      {proj.number}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
                      {proj.subtitle}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white group-hover:translate-x-1 transition-transform duration-300 flex items-center justify-between">
                      <span>{proj.title}</span>
                      <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-white" />
                    </h3>
                    <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-white bg-white/10 border border-white/15 px-3 py-1 rounded-full group-hover:border-white/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links Row */}
                  <div className="pt-4 flex items-center gap-4">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-xs font-mono text-white bg-white/10 hover:bg-white hover:text-black border border-white/20 px-4 py-2 rounded-xl transition-all duration-300"
                      >
                        <GithubIcon size={15} />
                        <span>GitHub Repository</span>
                      </a>
                    )}

                    <span className="text-xs font-mono text-neutral-400 group-hover:text-white transition-colors flex items-center gap-1">
                      <span>Explore Case Study</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>

                </div>

                {/* Project Image Preview Column */}
                <div className="lg:col-span-6 h-full min-h-[300px] lg:min-h-[420px] relative overflow-hidden bg-neutral-950 border-t lg:border-t-0 lg:border-l border-white/10">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Watermark Label for Sample Image Project */}
                  <div className="absolute top-4 left-4 z-20 pointer-events-none">
                    <span className="glass-panel bg-black/80 backdrop-blur-md text-white/90 text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border border-white/25 shadow-xl flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span>SAMPLE IMAGE PROJECT</span>
                    </span>
                  </div>

                  {/* Hover Overlay Button Badge */}
                  <div className="absolute bottom-6 right-6">
                    <div className="glass-panel text-white text-xs font-mono px-4 py-2 rounded-full border border-white/20 shadow-xl flex items-center gap-2 group-hover:bg-white group-hover:text-black transition-all">
                      <span>View Details</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl glass-panel border border-white/20 rounded-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-10 space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass-card hover:bg-white/20 text-white transition-colors z-30"
              >
                <X size={20} />
              </button>

              {/* Modal Content */}
              <div>
                <span className="text-xs font-mono text-neutral-400 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {selectedProject.subtitle}
                </span>
                <h3 className="text-3xl font-bold font-heading text-white mt-3">
                  {selectedProject.title}
                </h3>
                <p className="text-neutral-300 text-sm mt-2 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Image Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 max-h-64">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 z-20 pointer-events-none">
                  <span className="glass-panel bg-black/80 backdrop-blur-md text-white/90 text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border border-white/25 shadow-xl flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>SAMPLE IMAGE PROJECT</span>
                  </span>
                </div>
              </div>


              {/* Features List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300 bg-white/5 border border-white/10 p-3 rounded-xl">
                      <CheckCircle2 size={14} className="text-white shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                  <Layers size={14} className="text-white" /> Architecture Overview
                </p>
                <code className="text-xs font-mono text-white block">
                  {selectedProject.architecture}
                </code>
              </div>

              {/* GitHub Button */}
              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black font-semibold text-xs font-mono px-6 py-3 rounded-xl hover:bg-neutral-200 transition-colors"
                  >
                    <GithubIcon size={16} />
                    <span>View Repository on GitHub</span>
                  </a>
                ) : (
                  <span className="text-xs font-mono text-neutral-400 border border-white/10 px-3 py-1.5 rounded-lg">
                    Internal Financial System Codebase
                  </span>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-mono text-neutral-400 hover:text-white"
                >
                  Close Modal
                </button>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
