import { SectionShell } from "../ui/SectionShell";
import { footer, wordmark } from "../../content/home";

export function Footer() {
  return (
    <SectionShell id="footer" as="footer" ariaLabel="Footer" className="py-12">
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <span className="font-mono text-lg font-semibold text-foreground">
            {wordmark}
          </span>
        </div>

        {footer.columns.map((column) => (
          <div key={column.heading}>
            <h3 className="text-sm font-semibold text-foreground">
              {column.heading}
            </h3>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">{footer.copyright}</p>

        <div className="flex items-center gap-6">
          <a
            href={footer.statusLink.href}
            className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {footer.statusLink.label}
          </a>
          {footer.social.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
