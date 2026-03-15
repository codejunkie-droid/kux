import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Palette, Code2, Rocket } from 'lucide-react';

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      icon: Lightbulb,
      title: 'Discover',
      description: 'Workshops, competitive research, and narrative direction.',
      number: '01'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Art direction, UI systems, motion studies, and prototypes.',
      number: '02'
    },
    {
      icon: Code2,
      title: 'Build',
      description: 'Modern front-end builds with performance tuned in.',
      number: '03'
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'QA, launch, and optimization for growth teams.',
      number: '04'
    },
  ];

  return (
    <section id="process" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-muted">Process</span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4">
            A studio workflow built for <span className="gradient-text">clarity</span>.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-4">
            A focused sprint that eliminates chaos and keeps the creative bar high.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0c1016] via-[#d7b26d] to-[#1cc8b7] -translate-y-1/2 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 font-display text-7xl font-semibold text-black/5"
                >
                  {step.number}
                </motion.div>

                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass rounded-3xl p-8 text-center relative z-10 h-full"
                >
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-soft mb-6"
                  >
                    <step.icon className="w-7 h-7 text-ink" />
                  </motion.div>

                  <h3 className="font-display text-2xl font-semibold text-ink mb-4">
                    {step.title}
                  </h3>

                  <p className="text-muted leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-[2px] h-8 bg-gradient-to-b from-[#0c1016] to-[#d7b26d]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
