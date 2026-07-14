import React from 'react';

export function SectionShell({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-6 py-16 ${className}`}>
      {children}
    </section>
  );
}
