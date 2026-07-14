import type { ReactNode } from 'react';

interface TerminalWindowProps {
  /** Optional filename/title shown in the window titlebar. */
  title?: string;
  /** Prompt glyph preceding the command. */
  prompt?: string;
  /** Command shown after the prompt (usually text or a TypedCommand). */
  command?: ReactNode;
  /** Output rendered below the command line. */
  children?: ReactNode;
  className?: string;
}

/**
 * Reusable terminal-window primitive: macOS-style traffic-light chrome, a
 * prompt glyph, a command line, and output content. The chrome (dots, titlebar)
 * is purely decorative and hidden from assistive tech; the command and output
 * remain readable content.
 */
export function TerminalWindow({
  title,
  prompt = '❯',
  command,
  children,
  className = '',
}: TerminalWindowProps) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-border bg-surface shadow-2xl shadow-black/40 ${className}`}
    >
      {/* Decorative titlebar + traffic lights — not announced to screen readers */}
      <div
        aria-hidden="true"
        className="flex items-center gap-2 border-b border-border bg-surface-raised px-4 py-2.5"
      >
        <span className="size-3 rounded-full bg-chrome-red" />
        <span className="size-3 rounded-full bg-chrome-amber" />
        <span className="size-3 rounded-full bg-chrome-green" />
        {title && (
          <span className="ml-2 truncate text-xs text-muted-foreground">
            {title}
          </span>
        )}
      </div>

      {/* Readable content */}
      <div className="px-4 py-4 text-sm leading-relaxed sm:px-5 sm:py-5">
        {command != null && (
          <div className="flex items-start gap-2">
            <span aria-hidden="true" className="shrink-0 select-none text-prompt">
              {prompt}
            </span>
            <span className="min-w-0 break-words text-foreground">{command}</span>
          </div>
        )}
        {children != null && (
          <div className="mt-2 whitespace-pre-wrap break-words text-muted-foreground">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
