import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" ref={ref} className="relative py-32 bg-night text-paper overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-white/60">Let's Talk</span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4">
            Build something <span className="gradient-text-light">impossible</span> to ignore.
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            Share your vision and we'll map the fastest path to a luxury-grade launch.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group glass-dark rounded-3xl p-8 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1cc8b7]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <MessageSquare className="w-12 h-12 text-[#1cc8b7] mb-4" />
              <h3 className="font-display text-2xl font-semibold text-paper mb-2">WhatsApp</h3>
              <p className="text-white/60">Fastest way to chat about scope and timing.</p>

              <div className="mt-4 inline-flex items-center gap-2 text-[#1cc8b7] font-semibold uppercase tracking-[0.2em] text-sm">
                <span>Message us</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>-&gt;</motion.div>
              </div>
            </motion.a>

            <motion.a
              href="mailto:hello@luxedigital.com"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group glass-dark rounded-3xl p-8 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d7b26d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <Mail className="w-12 h-12 text-[#d7b26d] mb-4" />
              <h3 className="font-display text-2xl font-semibold text-paper mb-2">Email</h3>
              <p className="text-white/60">Share details and we'll craft a response within 24 hours.</p>

              <div className="mt-4 inline-flex items-center gap-2 text-[#d7b26d] font-semibold uppercase tracking-[0.2em] text-sm">
                <span>Send email</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>-&gt;</motion.div>
              </div>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-dark rounded-3xl p-8 md:p-12"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-white/60 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-paper placeholder-white/40 focus:outline-none focus:border-[#1cc8b7] transition-colors"
                    placeholder="Jordan Lee"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-white/60 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-paper placeholder-white/40 focus:outline-none focus:border-[#1cc8b7] transition-colors"
                    placeholder="jordan@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-white/60 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-paper placeholder-white/40 focus:outline-none focus:border-[#1cc8b7] transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#d7b26d] to-[#1cc8b7] rounded-xl text-night font-semibold flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
