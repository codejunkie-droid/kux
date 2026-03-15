import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useScrollProgress } from '@/react-app/hooks/useScrollProgress';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  const navItems = [
    { name: 'Work', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0c1016] via-[#d7b26d] to-[#1cc8b7] z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-40 px-6 py-6"
      >
        <div className="container mx-auto">
          <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.04 }} className="font-display text-xl font-semibold">
              <span className="gradient-text">Luxe</span>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="text-muted hover:text-[#0c1016] transition-colors text-sm uppercase tracking-[0.2em]"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary px-5 py-2 rounded-full text-sm font-semibold"
              >
                Get Started
              </motion.button>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-ink"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-30 md:hidden bg-night backdrop-blur-xl"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-paper">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-display hover:text-[var(--accent)] transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }}
            transition={{ delay: 0.5 }}
            className="btn-primary px-8 py-3 rounded-full font-semibold"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
