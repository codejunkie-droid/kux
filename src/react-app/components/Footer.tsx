import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 bg-night text-paper border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-2xl font-semibold">
            <span className="gradient-text-light">Luxe Digital Studio</span>
          </div>

          <div className="flex items-center gap-2 text-white/60 text-sm uppercase tracking-[0.2em]">
            <span>(c) 2026 Luxe Digital Studio. Crafted with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart className="w-4 h-4 text-[#ff7a59] fill-[#ff7a59]" />
            </motion.div>
          </div>

          <div className="flex gap-6 text-sm uppercase tracking-[0.2em]">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
