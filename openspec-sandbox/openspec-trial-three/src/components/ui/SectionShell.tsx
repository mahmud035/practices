import type { ElementType, ReactNode } from 'react';

interface SectionShellProps {
  /** Landmark element to render — defaults to `section`. */
  as?: ElementType;
  /** Accessible name for the landmark/region. */
  ariaLabel?: string;
  /** Points the landmark at an existing heading id (use instead of ariaLabel). */
  ariaLabelledby?: string;
  id?: string;
  className?: string;
  /** Removes the default max-width container for full-bleed sections. */
  bleed?: boolean;
  children: ReactNode;
}

/**
 * Consistent section wrapper: renders a labeled landmark with shared vertical
 * padding and a centered max-width container, so every page section shares the
 * same rhythm and is reachable as a distinct region.
 */
export function SectionShell({
  as: Tag = 'section',
  ariaLabel,
  ariaLabelledby,
  id,
  className = '',
  bleed = false,
  children,
}: SectionShellProps) {
  return (
    <Tag
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className={`w-full px-5 py-16 sm:px-8 sm:py-20 lg:py-24 ${className}`}
    >
      <div className={bleed ? '' : 'mx-auto w-full max-w-6xl'}>{children}</div>
    </Tag>
  );
}
