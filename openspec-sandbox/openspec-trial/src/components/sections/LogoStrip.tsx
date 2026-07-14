import { SectionShell } from "../ui/SectionShell";
import { logoStrip } from "../../content/home";

export function LogoStrip() {
  return (
    <SectionShell id="logo-strip" ariaLabel="Trusted by" className="py-10">
      <p className="text-center text-sm text-muted-foreground">
        {logoStrip.heading}
      </p>
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {logoStrip.logos.map((logo) => (
          <li
            key={logo}
            className="font-mono text-sm text-muted-foreground/80"
          >
            {logo}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
