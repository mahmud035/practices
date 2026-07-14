import React from 'react';

export function TerminalWindow({ children, prompt = '$' }: { children: React.ReactNode; prompt?: string }) {
  return (
    <div className="border border-border rounded-lg bg-surface font-mono text-sm overflow-hidden">
      <div className="flex gap-2 p-3 bg-muted-foreground/5 border-b border-border" aria-hidden="true">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="p-4 text-left">
        <div className="flex gap-2">
          <span className="text-prompt">{prompt}</span>
          <div className="text-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
}
