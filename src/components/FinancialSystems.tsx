import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';

interface CaseStudyModalProps {
  type: 'b2c' | 'fi';
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ type, onClose }) => {
  const isB2C = type === 'b2c';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl glass-panel border border-white/20 rounded-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 z-10 space-y-8"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full glass-card hover:bg-white/20 text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div>
          <span className="text-xs font-mono text-neutral-400 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
            {isB2C ? 'B2C Mobile Banking / Customer-Facing' : 'Financial Institution / Internal Operations'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-4">
            {isB2C ? 'B2C Mobile Loan App' : 'FI Mobile Loan System'}
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base mt-2 leading-relaxed max-w-2xl">
            {isB2C
              ? 'The B2C Mobile Loan App is a mobile application designed for existing borrowers of a partner Financial Institution (FI) in Cambodia to securely access and manage their loan information.'
              : 'A mobile loan management application designed to support Credit Officers and staff in their daily operations within a Financial Institution in Phnom Penh, Cambodia.'}
          </p>
        </div>

        {/* Case Study Grid Sections (01 to 08) */}
        <div className="space-y-6 pt-4 border-t border-white/10">
          
          {/* 01 & 02: Overview & Problem/Workflow */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest block">01 — OVERVIEW</span>
              <h4 className="text-base font-bold text-white">System Objective</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {isB2C
                  ? 'Contributed to building the mobile user interface allowing borrowers to view loan statuses, track repayments, receive reminders, and manage installment schedules digitally.'
                  : 'Developed mobile interface features supporting Credit Officers with on-the-field customer management, loan monitoring, repayment recording, and daily activity reporting.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest block">
                {isB2C ? '02 — USER PROBLEM' : '02 — INSTITUTION WORKFLOW'}
              </span>
              <h4 className="text-base font-bold text-white">
                {isB2C ? 'Manual Repayment Follow-up' : 'Field Operations Efficiency'}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {isB2C
                  ? 'Borrowers previously lacked a convenient digital channel to track installment dates, leading to delayed repayments and heavy manual follow-up work for financial staff.'
                  : 'Credit officers required real-time mobile access to active customer loans, installment tracking, and daily collection metrics while conducting field visits across Cambodian branches.'}
              </p>
            </div>
          </div>

          {/* 03 & 04: Solution & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest block">03 — SOLUTION</span>
              <h4 className="text-base font-bold text-white">Digital Financial Workflow</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {isB2C
                  ? 'Implemented intuitive mobile screens with QR code authentication, real-time balance inquiries in KHR & USD, and automated notification alerts.'
                  : 'Built structured dashboard components displaying live branch statistics (Customers, Active Loans, Today Repayments, Pending Tasks) and operational reporting tools.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest block">04 — MAIN FEATURES</span>
              <h4 className="text-base font-bold text-white">Key Functionalities</h4>
              <ul className="space-y-1.5 text-xs text-neutral-300 font-mono">
                {isB2C ? (
                  <>
                    <li className="flex items-center gap-2">• Secure QR Code Authentication</li>
                    <li className="flex items-center gap-2">• Loan Status & Schedule Tracking</li>
                    <li className="flex items-center gap-2">• Installment Repayment Management</li>
                    <li className="flex items-center gap-2">• Automated Notification Reminders</li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center gap-2">• Customer Profile & Record Management</li>
                    <li className="flex items-center gap-2">• Loan Portfolio & Activity Tracking</li>
                    <li className="flex items-center gap-2">• Repayment Recording & Installments</li>
                    <li className="flex items-center gap-2">• Daily Operational Reports & Analytics</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* 05 & 06: Flow & Screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest block">
                {isB2C ? '05 — USER FLOW' : '05 — REPAYMENT WORKFLOW'}
              </span>
              <h4 className="text-base font-bold text-white">Operational Journey</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {isB2C
                  ? 'QR Scan Login → Active Loan Summary → Installment Schedule → Payment Confirmation → System Push Notification.'
                  : 'Staff Login → Field Customer Lookup → Loan Status Review → Record Repayment (KHR/USD) → Daily Collection Summary Report.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest block">
                {isB2C ? '06 — SCREENS' : '06 — DAILY REPORTS'}
              </span>
              <h4 className="text-base font-bold text-white">Mobile Interface Design</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {isB2C
                  ? 'Designed dark-mode high-contrast mobile views focused on clarity, balance displays, clean schedule tables, and push notification center.'
                  : 'Dashboard layout featuring high-level metrics cards (1,248 Customers, 856 Active Loans, $24,580 / 100M ៛ Today Repayments) and quick collection logs.'}
              </p>
            </div>
          </div>

          {/* 07 & 08: Technologies & Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest block">07 — TECHNOLOGIES</span>
              <h4 className="text-base font-bold text-white">Confirmed Tech Stack</h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {(isB2C
                  ? ['Mobile Application', 'Loan Management', 'QR Login', 'API Integration', 'Digital Repayment', 'Notifications']
                  : ['Customer Management', 'Loan Management', 'Repayment', 'Daily Reports', 'Mobile Operations', 'Financial Institution']
                ).map((tag) => (
                  <span key={tag} className="text-xs font-mono text-white bg-white/10 border border-white/15 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest block">08 — OUTCOME & IMPACT</span>
              <h4 className="text-base font-bold text-white">Business Value</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {isB2C
                  ? 'The system improves customer convenience by allowing borrowers to access important loan information digitally while helping the financial institution improve repayment follow-up through digital tracking and notifications.'
                  : 'The system helps institution staff perform daily customer, loan, repayment, and reporting activities through a mobile interface, streamlining field officer productivity.'}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="bg-white text-black font-semibold font-mono text-xs uppercase px-6 py-3 rounded-xl hover:bg-neutral-200 transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </motion.div>
    </div>
  );
};

export const FinancialSystems: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'b2c' | 'fi' | null>(null);

  return (
    <section id="financial-systems" className="py-32 relative border-t border-white/10 bg-[#040404]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-white/[0.015] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-white/15 text-xs font-mono tracking-widest text-neutral-300 uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>SPECIALIZED DOMAIN WORK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase"
          >
            Financial Systems I've Worked On<span className="text-neutral-500">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg font-normal"
          >
            Designing and developing digital tools for borrowers and financial institution staff in Cambodia.
          </motion.p>
        </div>

        {/* Section 20: Connected Ecosystem Animation Flow Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 p-6 glass-panel rounded-3xl border border-white/15"
        >
          <div className="text-center mb-6">
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
              END-TO-END FINANCIAL WORKFLOW ECOSYSTEM
            </span>
            <h3 className="text-lg font-bold font-heading text-white mt-1">FROM CUSTOMER TO INSTITUTION</h3>
          </div>

          {/* Connected Flow Line */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-center text-xs font-mono">
            <span className="px-3.5 py-1.5 glass-card rounded-full text-white border border-white/15">BORROWER / CUSTOMER</span>
            <ArrowRight size={14} className="text-neutral-500 animate-pulse" />
            <span className="px-3.5 py-1.5 glass-card rounded-full text-white border border-white/15 font-semibold">B2C MOBILE LOAN APP</span>
            <ArrowRight size={14} className="text-neutral-500 animate-pulse" />
            <span className="px-3.5 py-1.5 glass-panel rounded-full text-neutral-300 border border-white/10">LOAN / REPAYMENT (KHR & USD)</span>
            <ArrowRight size={14} className="text-neutral-500 animate-pulse" />
            <span className="px-3.5 py-1.5 glass-card rounded-full text-white border border-white/15 font-semibold">FI MOBILE LOAN SYSTEM</span>
            <ArrowRight size={14} className="text-neutral-500 animate-pulse" />
            <span className="px-3.5 py-1.5 glass-card rounded-full text-white border border-white/15">FINANCIAL INSTITUTION STAFF</span>
          </div>
        </motion.div>

        {/* Two Showcase Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Project 03 — B2C Mobile Loan App */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group glass-card p-8 rounded-3xl border border-white/10 hover:border-white/40 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Info */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  Audience: Borrowers / Customers
                </span>
                <span className="text-xs font-mono text-neutral-500">CAMBODIA CONTEXT</span>
              </div>

              <div>
                <span className="text-4xl font-extrabold font-heading text-white block">
                  B2C MOBILE LOAN APP
                </span>
                <p className="text-neutral-300 text-sm mt-3 leading-relaxed">
                  "The B2C Mobile Loan App is a mobile application designed for existing borrowers of a partner Financial Institution (FI) to securely access and manage their loan information."
                </p>
              </div>

              {/* Mockup Preview Area */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 aspect-[16/10] group-hover:border-white/30 transition-colors">
                <img
                  src="/b2c_loan.png"
                  alt="B2C Mobile Loan App"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Watermark Badge Label */}
                <div className="absolute top-3 left-3 z-20 pointer-events-none">
                  <span className="glass-panel bg-black/80 backdrop-blur-md text-white/90 text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border border-white/25 shadow-xl flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>SAMPLE IMAGE PROJECT</span>
                  </span>
                </div>
                
                {/* Floating UI Badges */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 pointer-events-none">
                  <span className="text-[10px] font-mono text-white bg-black/70 border border-white/20 px-2.5 py-1 rounded-md backdrop-blur-md">
                    LOAN STATUS
                  </span>
                  <span className="text-[10px] font-mono text-white bg-black/70 border border-white/20 px-2.5 py-1 rounded-md backdrop-blur-md">
                    REPAYMENT
                  </span>
                  <span className="text-[10px] font-mono text-white bg-black/70 border border-white/20 px-2.5 py-1 rounded-md backdrop-blur-md">
                    INSTALLMENTS
                  </span>
                  <span className="text-[10px] font-mono text-white bg-black/70 border border-white/20 px-2.5 py-1 rounded-md backdrop-blur-md">
                    NOTIFICATIONS
                  </span>
                </div>
              </div>

              {/* Main Features Bullet Points */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Main Implementation Features:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300 font-mono">
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-white" /> Secure QR Code Login</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-white" /> Loan Status & Details</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-white" /> Repayment Schedule</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-white" /> Automated Reminders</div>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                {['Mobile Application', 'Loan Management', 'QR Login', 'API Integration', 'Digital Repayment', 'Notifications'].map((t) => (
                  <span key={t} className="text-[11px] font-mono text-white bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Case Study CTA Button */}
            <div className="pt-8">
              <button
                onClick={() => setActiveModal('b2c')}
                className="w-full group/btn glass-panel text-white font-semibold font-mono text-xs uppercase tracking-wider py-4 rounded-2xl border border-white/20 hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
              >
                <span>View Case Study</span>
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

          </motion.div>

          {/* Project 04 — FI Mobile Loan System */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group glass-card p-8 rounded-3xl border border-white/10 hover:border-white/40 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Info */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  Audience: FI Credit Officers / Staff
                </span>
                <span className="text-xs font-mono text-neutral-500">PHNOM PENH, CAMBODIA</span>
              </div>

              <div>
                <span className="text-4xl font-extrabold font-heading text-white block">
                  FI MOBILE LOAN SYSTEM
                </span>
                <p className="text-neutral-300 text-sm mt-3 leading-relaxed">
                  "A mobile loan management application designed to support Credit Officers and staff in their daily operations within a Financial Institution."
                </p>
              </div>

              {/* Mockup Preview Area */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 aspect-[16/10] group-hover:border-white/30 transition-colors">
                <img
                  src="/fi_loan.png"
                  alt="FI Mobile Loan System"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Watermark Badge Label */}
                <div className="absolute top-3 left-3 z-20 pointer-events-none">
                  <span className="glass-panel bg-black/80 backdrop-blur-md text-white/90 text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border border-white/25 shadow-xl flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>SAMPLE IMAGE PROJECT</span>
                  </span>
                </div>


                {/* Live Stats Overlay Panel */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-3 rounded-xl border border-white/20 grid grid-cols-4 gap-2 text-center">
                  <div>
                    <span className="text-[9px] font-mono text-neutral-400 uppercase block">CUSTOMERS</span>
                    <span className="text-xs font-bold font-mono text-white">1,248</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-neutral-400 uppercase block">ACTIVE LOANS</span>
                    <span className="text-xs font-bold font-mono text-white">856</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-neutral-400 uppercase block">TODAY'S REPAYMENT</span>
                    <span className="text-xs font-bold font-mono text-white">$24,580</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-neutral-400 uppercase block">PENDING</span>
                    <span className="text-xs font-bold font-mono text-white">32</span>
                  </div>
                </div>
              </div>

              {/* Main Features Bullet Points */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Staff Operational Modules:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300 font-mono">
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-white" /> Customer Records Management</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-white" /> Loan Approval & Tracking</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-white" /> Repayment Recording (KHR/USD)</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-white" /> Daily Operational Reports</div>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                {['Customer Management', 'Loan Management', 'Repayment', 'Daily Reports', 'Mobile Operations', 'Financial Institution'].map((t) => (
                  <span key={t} className="text-[11px] font-mono text-white bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Case Study CTA Button */}
            <div className="pt-8">
              <button
                onClick={() => setActiveModal('fi')}
                className="w-full group/btn glass-panel text-white font-semibold font-mono text-xs uppercase tracking-wider py-4 rounded-2xl border border-white/20 hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
              >
                <span>View Case Study</span>
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeModal && (
          <CaseStudyModal type={activeModal} onClose={() => setActiveModal(null)} />
        )}
      </AnimatePresence>

    </section>
  );
};
