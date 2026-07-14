import React from 'react';

export function CTAButton({ variant = 'primary', children, onClick }: { variant?: 'primary' | 'secondary'; children: React.ReactNode; onClick?: () => void }) {
  const base = "px-4 py-2 rounded font-medium transition focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer";
  const styles = variant === 'primary' 
    ? "bg-accent text-white hover:bg-accent/90" 
    : "border border-border text-foreground hover:bg-border";

  return <button className={`${base} ${styles}`} onClick={onClick}>{children}</button>;
}
