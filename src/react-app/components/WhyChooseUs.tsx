import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Zap, Shield, MessageSquare } from 'lucide-react';

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const reasons = [
    {
      icon: Sparkles,
      title: 'Luxury-grade craft',
      description: 'Editorial typography, rich motion, and an art-directed finish that feels rare.',
    },
    {
      icon: Zap,
      title: 'Fast, focused delivery',
      description: 'A lean team with an obsessive process. Most launches ship in 10-14 days.',
    },
    {
      icon: Shield,
      title: 'Future-proof systems',
      description: 'Modern stacks, performance-first builds, and scalable architecture baked in.',
    },
    {
      icon: MessageSquare,
      title: 'Clear communication',
      description: 'Weekly touchpoints, collaborative Figma reviews, and transparent progress.',
    },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-night-2 text-paper overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-white/60">Why Luxe</span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4">
            The studio teams call when
            <span className="gradient-text-light"> it must feel iconic</span>.
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            We balance taste, strategy, and execution to create work that stands out without shouting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -6 }}
              className="glass-dark rounded-3xl p-8 relative"
            >
              <motion.div
                whileHover={{ rotate: 6, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-paper mb-6"
              >
                <reason.icon className="w-7 h-7 text-[var(--metal)]" />
              </motion.div>
              <h3 className="font-display text-2xl font-semibold text-paper mb-4">{reason.title}</h3>
              <p className="text-white/70 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
