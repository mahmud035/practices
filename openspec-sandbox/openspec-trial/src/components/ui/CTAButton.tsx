import type { ReactNode } from "react";

interface CTAButtonProps {
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-md px-5 py-2.5 font-mono text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variantClasses: Record<"primary" | "secondary", string> = {
  primary: "bg-accent text-accent-foreground hover:bg-accent/90",
  secondary:
    "border border-border text-foreground hover:border-accent hover:text-accent",
};

export function CTAButton({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
}: CTAButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
