import { motion } from 'framer-motion';
import { useMousePosition } from '@/react-app/hooks/useMousePosition';

export default function CustomCursor() {
  const { x, y } = useMousePosition();

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: x - 12,
          y: y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </motion.div>

      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9998] mix-blend-difference hidden md:block"
        animate={{
          x: x - 20,
          y: y - 20,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.8,
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-white opacity-50" />
      </motion.div>
    </>
  );
}
