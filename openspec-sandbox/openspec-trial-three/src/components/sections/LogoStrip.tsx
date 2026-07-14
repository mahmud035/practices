import { logoStrip } from '../../content/home';
import { SectionShell } from '../ui/SectionShell';

/** Trusted-by social-proof row. Wordmark "logos" are rendered as monospace text. */
export function LogoStrip() {
  return (
    <SectionShell ariaLabel="Trusted by" className="border-y border-border py-10 sm:py-12">
      <p className="mb-6 text-center text-xs uppercase tracking-widest text-muted-foreground">
        {logoStrip.heading}
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {logoStrip.logos.map((logo) => (
          <li
            key={logo}
            className="text-lg font-medium text-muted-foreground/80 transition-colors hover:text-foreground"
          >
            {logo}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
