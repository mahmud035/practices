import { useState } from 'react';

export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={copy} className="flex items-center gap-2 p-2 border border-border rounded bg-surface hover:bg-muted-foreground/5 transition cursor-pointer">
      <code className="text-sm font-mono text-foreground">{command}</code>
      <span className="text-xs text-muted-foreground">{copied ? 'Copied!' : 'Copy'}</span>
    </button>
  );
}
