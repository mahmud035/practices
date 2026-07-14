import { useEffect, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface TypedCommandProps {
  /** Full command text — always present in the DOM regardless of animation. */
  text: string;
  /** Per-character delay in ms. */
  speed?: number;
  className?: string;
}

/**
 * Types a command out character by character, with a blinking cursor. Under
 * `prefers-reduced-motion: reduce` the full text renders immediately as static
 * text (design.md D5). The command text is never gated on the animation — the
 * animation is presentation only.
 */
export function TypedCommand({ text, speed = 55, className = '' }: TypedCommandProps) {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(reduceMotion ? text.length : 0);

  useEffect(() => {
    if (reduceMotion) {
      setCount(text.length);
      return;
    }
    setCount(0);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [text, speed, reduceMotion]);

  const done = count >= text.length;

  return (
    <span className={className}>
      {/* Visible (possibly partial) text for sighted users */}
      <span aria-hidden={!reduceMotion}>{text.slice(0, count)}</span>
      {/* Full text always available to assistive tech even mid-animation */}
      {!reduceMotion && <span className="sr-only">{text}</span>}
      {!reduceMotion && !done && (
        <span
          aria-hidden="true"
          className="ml-0.5 inline-block w-[0.6ch] animate-cursor bg-cursor align-middle"
          style={{ height: '1.1em' }}
        />
      )}
    </span>
  );
}
