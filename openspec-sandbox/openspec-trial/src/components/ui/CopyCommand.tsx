import { useState } from "react";

interface CopyCommandProps {
  command: string;
  className?: string;
}

export function CopyCommand({ command, className = "" }: CopyCommandProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard permission denied or unavailable; the command remains visible to copy manually.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-3 rounded-md border border-border bg-surface px-4 py-2 font-mono text-sm text-foreground transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
    >
      <span className="text-prompt" aria-hidden="true">
        $
      </span>
      <span>{command}</span>
      <span
        className="ml-2 text-xs text-muted-foreground"
        aria-live="polite"
      >
        {copied ? "Copied!" : "Copy"}
      </span>
    </button>
  );
}
