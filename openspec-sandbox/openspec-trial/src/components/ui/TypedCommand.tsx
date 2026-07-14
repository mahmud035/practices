import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface TypedCommandProps {
  command: string;
  typingSpeedMs?: number;
  className?: string;
}

export function TypedCommand({
  command,
  typingSpeedMs = 45,
  className = "",
}: TypedCommandProps) {
  const reducedMotion = useReducedMotion();
  const [visibleChars, setVisibleChars] = useState(
    reducedMotion ? command.length : 0,
  );
  const indexRef = useRef(0);

  useEffect(() => {
    if (reducedMotion) {
      setVisibleChars(command.length);
      return;
    }

    indexRef.current = 0;
    setVisibleChars(0);
    const interval = setInterval(() => {
      indexRef.current += 1;
      setVisibleChars(indexRef.current);
      if (indexRef.current >= command.length) {
        clearInterval(interval);
      }
    }, typingSpeedMs);

    return () => clearInterval(interval);
  }, [command, reducedMotion, typingSpeedMs]);

  const typed = command.slice(0, visibleChars);
  const isComplete = visibleChars >= command.length;

  return (
    <span className={`whitespace-pre ${className}`}>
      <span className="sr-only">{command}</span>
      <span aria-hidden="true">
        {typed}
        {!reducedMotion && (
          <span
            className={`ml-0.5 inline-block h-[1em] w-[0.5ch] translate-y-[0.15em] bg-cursor align-middle ${
              isComplete ? "animate-cursor-blink" : ""
            }`}
          />
        )}
      </span>
    </span>
  );
}
