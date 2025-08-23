import { motion } from 'motion/react';
import { useRef } from 'react';

export default function DragConstraints() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={constraintsRef} style={constraints}>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        style={box}
      />
    </motion.div>
  );
}

/**
 * ==============   Styles   ================
 */

const constraints = {
  width: 300,
  height: 300,
  backgroundColor: '#490C2F',
  borderRadius: 10,
};

const box = {
  width: 100,
  height: 100,
  backgroundColor: '#ff0088',
  borderRadius: 10,
};
