import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import HeroScene from '@/react-app/components/HeroScene';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0 mesh-gradient animate-shimmer" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-noise opacity-40" />

      <motion.div
        className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(28,200,183,0.35)_0%,transparent_65%)] blur-2xl"
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,122,89,0.3)_0%,transparent_70%)] blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.32em] text-ink">
              <Sparkles className="w-4 h-4 text-[var(--accent)]" />
              Atelier-grade digital craft
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] mt-8"
            >
              <span className="gradient-text">Cinematic</span> websites built to
              <span className="text-ink"> feel like the future.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-lg md:text-xl text-muted max-w-xl mt-6"
            >
              Luxe Digital Studio blends strategy, art direction, and real-time 3D to deliver
              premium web experiences that convert and captivate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <button className="btn-primary px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3">
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-ghost px-8 py-4 rounded-full font-semibold">See Case Studies</button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-6 text-sm uppercase tracking-[0.2em] text-muted"
            >
              <span>Conversion-led</span>
              <span>3D + Motion</span>
              <span>Launch in 14 days</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative h-[380px] sm:h-[520px] lg:h-[640px]"
          >
            <div className="absolute inset-0 rounded-[32px] border border-black/10 bg-white/60 shadow-soft" />
            <div className="absolute inset-0 rounded-[32px] overflow-hidden">
              <HeroScene />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 glass rounded-2xl px-5 py-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted">
              <span>Realtime 3D Atelier</span>
              <span>WebGL</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
