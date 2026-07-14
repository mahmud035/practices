import { SectionShell } from "../ui/SectionShell";
import { TerminalWindow } from "../ui/TerminalWindow";
import { howItWorks } from "../../content/home";

export function HowItWorks() {
  return (
    <SectionShell id="how-it-works" ariaLabel="How it works">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-foreground">
          Three commands to production
        </h2>
      </div>

      <ol className="mt-12 grid gap-8 md:grid-cols-3">
        {howItWorks.map((item, index) => (
          <li key={item.step} className="space-y-4">
            <div className="flex items-center gap-3">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent text-sm text-accent"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                {item.step}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              {item.description}
            </p>
            <TerminalWindow command={item.command} />
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
