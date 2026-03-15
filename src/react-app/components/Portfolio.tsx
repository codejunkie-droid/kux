import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Stellar Finance',
      category: 'Fintech Platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=700&fit=crop',
      accent: 'from-[#1cc8b7]/30 to-transparent',
    },
    {
      title: 'Atelier Hotels',
      category: 'Luxury Hospitality',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&h=700&fit=crop',
      accent: 'from-[#d7b26d]/30 to-transparent',
    },
    {
      title: 'FreshMart',
      category: 'Commerce Suite',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&h=700&fit=crop',
      accent: 'from-[#ff7a59]/30 to-transparent',
    },
    {
      title: 'TechVision',
      category: 'SaaS Platform',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=700&fit=crop',
      accent: 'from-[#f6f1e8]/15 to-transparent',
    },
  ];

  return (
    <section id="portfolio" ref={ref} className="relative py-32 bg-night text-paper overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-white/60">Selected Work</span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4">
            Crafting digital <span className="gradient-text-light">masterpieces</span>.
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            Every launch is designed like a flagship product, with meticulous detail and bold storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group relative aspect-[4/3] rounded-[28px] overflow-hidden border border-white/10"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </motion.div>

              <div className={`absolute inset-0 bg-gradient-to-tr ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/70">
                  <span>{project.category}</span>
                  <span className="h-[1px] w-8 bg-white/40" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold text-paper mt-3">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-white/80 mt-4 text-sm uppercase tracking-[0.3em]">
                  <span>View Case Study</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
