import { brand, footer } from '../../content/home';

export function Footer() {
  return (
    <footer aria-label="Site footer" className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-2 font-bold">
              <span aria-hidden="true" className="text-accent">
                ❯
              </span>
              {brand.wordmark}
            </span>
            <p className="max-w-xs text-sm text-muted-foreground">{footer.tagline}</p>
            <a
              href={footer.status.href}
              className="mt-1 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
            >
              <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
              {footer.status.label}
            </a>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading} className="flex flex-col gap-3">
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
                {column.heading}
              </h2>
              <ul className="flex flex-col gap-2 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">{footer.copyright}</p>
          <ul className="flex items-center gap-5 text-sm">
            {footer.social.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
