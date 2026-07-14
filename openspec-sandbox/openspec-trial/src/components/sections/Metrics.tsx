import { SectionShell } from "../ui/SectionShell";
import { metrics } from "../../content/home";

export function Metrics() {
  return (
    <SectionShell id="metrics" ariaLabel="Metrics" className="border-y border-border bg-surface">
      <dl className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <dd className="text-3xl font-semibold text-accent">
              {metric.value}
            </dd>
            <dt className="mt-2 text-sm text-muted-foreground">
              {metric.label}
            </dt>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
