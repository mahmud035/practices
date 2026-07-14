import { SectionShell } from "../ui/SectionShell";
import { TerminalWindow } from "../ui/TerminalWindow";
import { features } from "../../content/home";

export function Features() {
  return (
    <SectionShell id="features" ariaLabel="Features">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-foreground">
          Everything you need, one prompt away
        </h2>
        <p className="mt-4 text-muted-foreground">
          No dashboards to learn. If you can type a command, you can run
          production.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.title} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
            <TerminalWindow command={feature.command} output={feature.output} />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
