import { useEffect, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function TypedCommand({ text }: { text: string }) {
  const reducedMotion = useReducedMotion();
  const [displayedText, setDisplayedText] = useState(reducedMotion ? text : '');

  useEffect(() => {
    if (reducedMotion) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [text, reducedMotion]);

  return <span className="text-foreground">{displayedText}</span>;
}
