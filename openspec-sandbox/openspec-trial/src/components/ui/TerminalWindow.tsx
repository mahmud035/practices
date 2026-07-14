import type { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  prompt?: string;
  command?: string;
  output?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function TerminalWindow({
  title,
  prompt = "$",
  command,
  output,
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-border bg-surface shadow-lg ${className}`}
    >
      <div
        className="flex items-center gap-2 border-b border-border px-4 py-3"
        aria-hidden="true"
      >
        <span className="h-3 w-3 rounded-full bg-chrome-close" />
        <span className="h-3 w-3 rounded-full bg-chrome-minimize" />
        <span className="h-3 w-3 rounded-full bg-chrome-maximize" />
        {title && (
          <span className="ml-2 text-xs text-muted-foreground">{title}</span>
        )}
      </div>
      <div className="space-y-2 px-4 py-4 text-sm leading-relaxed">
        {command && (
          <div className="flex gap-2">
            <span className="text-prompt" aria-hidden="true">
              {prompt}
            </span>
            <span className="text-foreground">{command}</span>
          </div>
        )}
        {output && <div className="text-muted-foreground">{output}</div>}
        {children}
      </div>
    </div>
  );
}
