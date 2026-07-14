import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

interface CTAButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 ' +
  'text-sm font-medium min-h-11 transition-colors duration-150 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-accent-foreground hover:bg-accent/90',
  secondary:
    'border border-border bg-surface text-foreground hover:border-accent/60 hover:text-accent',
};

/**
 * Call-to-action link styled as a button. Primary is the loudest interactive
 * element; secondary is quieter. Rendered as an anchor since every CTA on this
 * marketing page navigates. Meets the 44px minimum touch target via min-h-11.
 */
export function CTAButton({
  variant = 'primary',
  className = '',
  children,
  ...rest
}: CTAButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
