import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStart',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      text: 'Our new site feels like a product launch. Conversions jumped 182% in the first month.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Founder, FreshBite',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      text: 'The 3D hero turned heads and the performance stayed flawless. We ship in half the time now.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director, Atelier Hotels',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      text: 'Luxury, speed, and absolute clarity. Our bookings tripled within six weeks.',
      rating: 5
    },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-15" />
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-muted">Testimonials</span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4">
            Teams trust us to <span className="gradient-text">raise the bar</span>.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-4">
            Client stories from product teams, founders, and leaders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="glass rounded-3xl p-8 h-full relative overflow-hidden">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-black/10" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[var(--metal)] fill-[var(--metal)]" />
                  ))}
                </div>

                <p className="text-muted leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <motion.div whileHover={{ scale: 1.05, rotate: 3 }} className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-black/10"
                    />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-ink">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted">
                      {testimonial.role}
                    </div>
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
