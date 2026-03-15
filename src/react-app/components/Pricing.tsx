import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star } from 'lucide-react';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const plans = [
    {
      name: 'Essentials',
      price: '$3,500',
      description: 'Perfect for founders who need a premium launch.',
      features: [
        'Up to 5 pages',
        'Design system',
        'Motion polish',
        'SEO fundamentals',
        '7-10 day delivery',
        '1 revision round'
      ],
      popular: false
    },
    {
      name: 'Signature',
      price: '$6,800',
      description: 'Our most requested package for growth teams.',
      features: [
        'Up to 10 pages',
        '3D hero scene',
        'Advanced motion',
        'Analytics setup',
        'CMS handoff',
        '10-14 day delivery',
        '2 revision rounds'
      ],
      popular: true
    },
    {
      name: 'Studio',
      price: 'Custom',
      description: 'For ambitious launches and product ecosystems.',
      features: [
        'Unlimited pages',
        'Custom 3D assets',
        'Product storytelling',
        'Conversion testing',
        'Dedicated team',
        'Custom timeline',
        'Ongoing optimization'
      ],
      popular: false
    },
  ];

  return (
    <section id="pricing" ref={ref} className="relative py-32 bg-night text-paper overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-white/60">Pricing</span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4">
            Transparent packages with <span className="gradient-text-light">luxury-level</span> execution.
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            Designed for founders who want to move fast without sacrificing quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#d7b26d] to-[#1cc8b7] rounded-full flex items-center gap-1 z-20"
                >
                  <Star className="w-3 h-3 text-night fill-night" />
                  <span className="text-xs font-semibold text-night">MOST LOVED</span>
                </motion.div>
              )}

              <div className={`glass-dark rounded-3xl p-8 h-full relative overflow-hidden ${plan.popular ? 'border border-white/20' : ''}`}>
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                )}

                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-semibold text-paper mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-white/60 text-sm mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="font-display text-5xl font-semibold gradient-text-light">
                      {plan.price}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-3 rounded-full font-semibold mb-8 transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#d7b26d] to-[#1cc8b7] text-night'
                        : 'border border-white/20 text-paper hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </motion.button>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + featureIndex * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-[var(--metal)]" />
                        </div>
                        <span className="text-white/70 text-sm">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
