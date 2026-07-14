import { useState } from 'react';
import { brand, nav, routes } from '../../content/home';
import { useGithubStars } from '../../hooks/useGithubStars';
import { CTAButton } from '../ui/CTAButton';

/** Live GitHub star count: skeleton while pending, hidden on error, value on success. */
function StarCount() {
  const { isPending, isError, formatted } = useGithubStars(brand.repo);

  // Graceful degrade — the nav renders without the count and surfaces no error.
  if (isError) return null;

  return (
    <a
      href={routes.github}
      className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-accent/60 hover:text-accent"
    >
      <span aria-hidden="true">★</span>
      {isPending ? (
        // Fixed min-width reserves space for a plausible magnitude so the value
        // arriving does not shift layout (github-star-count spec).
        <span
          aria-hidden="true"
          className="inline-block h-3.5 w-10 animate-pulse rounded bg-border"
        />
      ) : (
        <span>
          <span className="sr-only">GitHub stars: </span>
          {formatted}
        </span>
      )}
    </a>
  );
}

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center gap-4 px-5 py-3 sm:px-8"
      >
        <a href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <span aria-hidden="true" className="text-accent">
            ❯
          </span>
          <span>{brand.wordmark}</span>
        </a>

        {/* Desktop content links */}
        <ul className="ml-4 hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-3">
          <StarCount />
          {/* Desktop-only sign-in + CTA. Wrapped so visibility is controlled by
              a plain container — CTAButton's own `inline-flex` would otherwise
              beat a `hidden` utility on itself by stylesheet order. */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={nav.signIn.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {nav.signIn.label}
            </a>
            <CTAButton href={nav.cta.href} variant="primary">
              {nav.cta.label}
            </CTAButton>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex size-11 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          >
            <span aria-hidden="true">{open ? '✕' : '≡'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile collapsible menu */}
      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-3 text-sm">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={nav.signIn.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center text-muted-foreground transition-colors hover:text-foreground"
              >
                {nav.signIn.label}
              </a>
            </li>
            <li className="pt-2">
              <CTAButton href={nav.cta.href} variant="primary" className="w-full">
                {nav.cta.label}
              </CTAButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
