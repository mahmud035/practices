import { motion } from 'motion/react';

export default function Gestures() {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        rotate: 5,
        backgroundColor: '#2bb95d',
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.8, rotate: -5, backgroundColor: '#1a7a3e' }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      style={box}
    ></motion.div>
  );
}

/**
 * ==============   Styles   ================
 */

const box = {
  width: 100,
  height: 100,
  backgroundColor: '#46CF76',
  borderRadius: 5,
};
