import { useEffect, useRef, useState } from 'react';

interface CopyCommandProps {
  /** The install command displayed and copied. */
  command: string;
  /** Prompt glyph shown before the command. */
  prompt?: string;
  className?: string;
}

async function writeToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to legacy path */
  }
  try {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(el);
    return ok;
  } catch {
    return false;
  }
}

/**
 * Install-command chip: renders the command and copies it to the clipboard on
 * activation, showing a transient "copied" confirmation. It is a real button,
 * so click, Enter, and Space all work and it is keyboard-focusable by default.
 */
export function CopyCommand({ command, prompt = '$', className = '' }: CopyCommandProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const handleCopy = async () => {
    const ok = await writeToClipboard(command);
    if (!ok) return;
    setCopied(true);
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy install command: ${command}`}
      className="group inline-flex min-h-11 max-w-full items-center gap-3 rounded-md border border-border bg-surface px-4 py-2.5 text-left text-sm transition-colors hover:border-accent/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <code className={`min-w-0 truncate ${className}`}>
        <span aria-hidden="true" className="mr-2 select-none text-prompt">
          {prompt}
        </span>
        <span className="text-foreground">{command}</span>
      </code>
      <span
        aria-hidden="true"
        className="ml-auto shrink-0 text-xs font-medium text-muted-foreground group-hover:text-accent"
      >
        {copied ? 'copied ✓' : 'copy'}
      </span>
      {/* Announce the confirmation to assistive tech without moving focus */}
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? 'Command copied to clipboard' : ''}
      </span>
    </button>
  );
}
