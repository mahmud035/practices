import { motion } from 'motion/react';

export default function Rotate() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1 }}
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
  backgroundColor: '#98c379',
  borderRadius: 5,
};
