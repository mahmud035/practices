import type { ElementType, ReactNode } from "react";

interface SectionShellProps {
  id: string;
  as?: ElementType;
  ariaLabel: string;
  className?: string;
  children: ReactNode;
}

export function SectionShell({
  id,
  as: Tag = "section",
  ariaLabel,
  className = "",
  children,
}: SectionShellProps) {
  return (
    <Tag id={id} aria-label={ariaLabel} className={`w-full ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {children}
      </div>
    </Tag>
  );
}
