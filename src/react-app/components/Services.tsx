import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Code, Smartphone, ShoppingCart, Briefcase, Zap } from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Palette,
      title: 'Art Direction',
      description: 'Visual systems, typography, and brand worlds that feel bespoke.',
      color: 'from-[#d7b26d] to-[#ff7a59]'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'High-performance builds with next-gen tooling and polish.',
      color: 'from-[#1cc8b7] to-[#1f7ad3]'
    },
    {
      icon: Briefcase,
      title: 'Growth Websites',
      description: 'Conversion-led sites engineered to scale with your business.',
      color: 'from-[#0c1016] to-[#2b3444]'
    },
    {
      icon: Zap,
      title: 'Motion + 3D',
      description: 'Immersive interactions, WebGL detail, and cinematic motion.',
      color: 'from-[#ff7a59] to-[#f1c27d]'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First UX',
      description: 'Thoughtful experiences that feel premium on every device.',
      color: 'from-[#1cc8b7] to-[#8de6dd]'
    },
    {
      icon: ShoppingCart,
      title: 'Commerce Systems',
      description: 'E-commerce storefronts that feel editorial, not templated.',
      color: 'from-[#d7b26d] to-[#1cc8b7]'
    },
  ];

  return (
    <section id="services" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-muted">Capabilities</span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4">
            Built to feel <span className="gradient-text">unmistakable</span>.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-4">
            We build immersive brand worlds that blend storytelling, conversion, and craft.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass rounded-3xl p-8 h-full relative overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <motion.div
                  whileHover={{ rotate: 6, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[2px] mb-6`}
                >
                  <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-ink" />
                  </div>
                </motion.div>

                <h3 className="font-display text-2xl font-semibold text-ink mb-4">
                  {service.title}
                </h3>

                <p className="text-muted leading-relaxed">
                  {service.description}
                </p>

                <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${service.color}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
