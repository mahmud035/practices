import { useState } from "react";
import { CTAButton } from "../ui/CTAButton";
import { useGithubStars } from "../../hooks/useGithubStars";
import { nav, wordmark, githubRepo } from "../../content/home";

function StarCount() {
  const { isPending, isError, formattedCount } = useGithubStars(githubRepo);

  if (isError) return null;

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
      <svg
        aria-hidden="true"
        className="h-3.5 w-3.5 text-accent"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
      </svg>
      <span className="inline-block min-w-[3ch] text-left" aria-live="polite">
        {isPending ? (
          <span
            className="inline-block h-3 w-8 animate-pulse rounded bg-border align-middle"
            aria-hidden="true"
          />
        ) : (
          formattedCount
        )}
      </span>
    </span>
  );
}

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <a
          href="/"
          className="rounded-sm font-mono text-lg font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {wordmark}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {link.label}
            </a>
          ))}
          <StarCount />
          <a
            href={nav.signIn.href}
            className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {nav.signIn.label}
          </a>
          <CTAButton href={nav.primaryCta.href} className="px-4 py-2 text-xs">
            {nav.primaryCta.label}
          </CTAButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 5l10 10M15 5L5 15"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h14M3 10h14M3 14h14"
              />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-nav-menu"
          className="border-t border-border px-4 py-4 md:hidden"
        >
          <div className="flex flex-col items-start gap-4">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </a>
            ))}
            <StarCount />
            <a
              href={nav.signIn.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {nav.signIn.label}
            </a>
            <CTAButton href={nav.primaryCta.href} className="w-full">
              {nav.primaryCta.label}
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}
