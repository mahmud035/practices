import React, { useEffect, useRef, useState } from 'react';

/**
 * A custom hook for detecting hover state on an element
 *
 * @returns {[React.RefObject<HTMLDivElement>, boolean]} A tuple containing:
 * - A ref to attach to the target element
 * - A boolean indicating hover state
 *
 * @example
 * const [hoverRef, isHovered] = useHover()
 */

export default function useHover(): [React.RefObject<HTMLDivElement>, boolean] {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    node?.addEventListener('mouseenter', handleMouseEnter);
    node?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      node?.removeEventListener('mouseenter', handleMouseEnter);
      node?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return [ref, isHovered];
}

// NOTE: Detecting hover over an element can be useful for tooltips, animations, or any UI feedback based on hover state.
