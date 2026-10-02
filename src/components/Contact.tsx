import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, Copy, Check, Send, Sparkles, X } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('noksreyroth@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('0965946057');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2500);
  };

  return (
    <section id="contact" className="py-32 relative border-t dark:border-white/10 border-black/10 dark:bg-[#050505] bg-white bg-grid-pattern transition-colors duration-400">
      
      {/* Glow ambient circle */}
      <div className="absolute bottom-0 right-1/3 w-96 h-96 dark:bg-white/[0.02] bg-black/[0.02] rounded-full blur-3xl pointer-events-none" />

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
          <span className="text-xs font-mono uppercase tracking-widest dark:text-neutral-400 text-neutral-600">07 / GET IN TOUCH</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Main Pitch & Magnetic CTA */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-6xl font-extrabold font-heading dark:text-white text-neutral-900 tracking-tight leading-tight">
                Have a project <br />
                in mind?
              </h2>
              <p className="text-xl dark:text-neutral-400 text-neutral-600 mt-4 font-normal">
                Let's build something meaningful together.
              </p>
            </motion.div>

            {/* Large Animated Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center gap-4 dark:bg-white dark:text-black bg-neutral-900 text-white text-sm sm:text-base font-mono font-bold uppercase tracking-widest px-8 sm:px-10 py-5 rounded-2xl overflow-hidden hover:opacity-90 transition-all duration-300 shadow-xl cursor-pointer"
              >
                <span>START A CONVERSATION</span>
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </motion.div>

            <p className="text-xs font-mono dark:text-neutral-500 text-neutral-600 uppercase tracking-widest">
              Available for Full-time Roles, Internships & Select Projects
            </p>
          </div>

          {/* RIGHT: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 rounded-2xl border dark:border-white/10 border-black/10 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl dark:bg-white/10 bg-neutral-900 flex items-center justify-center text-white shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono dark:text-neutral-400 text-neutral-600 uppercase tracking-wider">Direct Email</p>
                  <a href="mailto:noksreyroth@gmail.com" className="text-base font-semibold dark:text-white text-neutral-900 hover:underline font-mono">
                    noksreyroth@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl glass-panel dark:text-neutral-400 text-neutral-600 dark:hover:text-white hover:text-black transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </button>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-6 rounded-2xl border dark:border-white/10 border-black/10 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl dark:bg-white/10 bg-neutral-900 flex items-center justify-center text-white shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono dark:text-neutral-400 text-neutral-600 uppercase tracking-wider">Phone Number</p>
                  <a href="tel:0965946057" className="text-base font-semibold dark:text-white text-neutral-900 hover:underline font-mono">
                    0965946057
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="p-2.5 rounded-xl glass-panel dark:text-neutral-400 text-neutral-600 dark:hover:text-white hover:text-black transition-colors cursor-pointer"
                title="Copy Phone"
              >
                {copiedPhone ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </button>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6 rounded-2xl border dark:border-white/10 border-black/10 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl dark:bg-white/10 bg-neutral-900 flex items-center justify-center text-white shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono dark:text-neutral-400 text-neutral-600 uppercase tracking-wider">Location</p>
                  <p className="text-base font-semibold dark:text-white text-neutral-900">
                    Phnom Penh, Cambodia
                  </p>
                </div>
              </div>
            </motion.div>

            {/* GitHub Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6 rounded-2xl border dark:border-white/10 border-black/10 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl dark:bg-white/10 bg-neutral-900 flex items-center justify-center text-white shrink-0">
                  <GithubIcon size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono dark:text-neutral-400 text-neutral-600 uppercase tracking-wider">GitHub Profile</p>
                  <a
                    href="https://github.com/Sreyroth-Nok"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold dark:text-white text-neutral-900 hover:underline font-mono"
                  >
                    github.com/Sreyroth-Nok
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Quick Message Modal Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 dark:bg-black/85 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg glass-panel border dark:border-white/20 border-black/10 rounded-3xl p-6 sm:p-8 z-10 space-y-6 shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full glass-card hover:bg-neutral-200 dark:hover:bg-white/20 dark:text-white text-neutral-900 cursor-pointer"
              >
                <X size={18} />
              </button>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="text-2xl font-bold font-heading dark:text-white text-neutral-900">Message Sent!</h3>
                  <p className="dark:text-neutral-400 text-neutral-600 text-sm">
                    Thank you for reaching out, Nok Sreyroth will respond to your message shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-xs font-mono dark:text-neutral-400 text-neutral-600 uppercase tracking-widest">Get In Touch</span>
                    <h3 className="text-2xl font-bold font-heading dark:text-white text-neutral-900">Send a Message</h3>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-mono dark:text-neutral-400 text-neutral-600 uppercase tracking-wider block mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full dark:bg-[#0a0a0a] bg-white border dark:border-white/15 border-black/15 rounded-xl px-4 py-3 text-sm dark:text-white text-neutral-900 focus:outline-none dark:focus:border-white/40 focus:border-black/40"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono dark:text-neutral-400 text-neutral-600 uppercase tracking-wider block mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full dark:bg-[#0a0a0a] bg-white border dark:border-white/15 border-black/15 rounded-xl px-4 py-3 text-sm dark:text-white text-neutral-900 focus:outline-none dark:focus:border-white/40 focus:border-black/40"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono dark:text-neutral-400 text-neutral-600 uppercase tracking-wider block mb-1">Project Details / Message</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell me about your project or inquiry..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full dark:bg-[#0a0a0a] bg-white border dark:border-white/15 border-black/15 rounded-xl px-4 py-3 text-sm dark:text-white text-neutral-900 focus:outline-none dark:focus:border-white/40 focus:border-black/40"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full dark:bg-white dark:text-black bg-neutral-900 text-white font-semibold font-mono text-xs uppercase tracking-widest py-4 rounded-xl hover:opacity-90 transition-opacity cursor-pointer shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
