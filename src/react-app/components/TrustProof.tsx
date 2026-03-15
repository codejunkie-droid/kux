import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Award, Clock, Users } from 'lucide-react';

function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-display font-semibold gradient-text">
      {count}{suffix}
    </div>
  );
}

export default function TrustProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Award, value: 320, suffix: '+', label: 'Launches Delivered', delay: 0 },
    { icon: Clock, value: 12, suffix: ' Days', label: 'Average Turnaround', delay: 0.1 },
    { icon: Users, value: 96, suffix: '%', label: 'Client Retention', delay: 0.2 },
  ];

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute inset-0 bg-noise opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-muted">Trusted Worldwide</span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4">
            A studio built on <span className="gradient-text">precision</span> and polish.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-4">
            We partner with founders and teams who want premium craft without enterprise timelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: stat.delay }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl p-8 text-center relative"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.08 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-soft mb-6"
              >
                <stat.icon className="w-7 h-7 text-[var(--accent)]" />
              </motion.div>
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-muted text-sm uppercase tracking-[0.2em] mt-4">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
