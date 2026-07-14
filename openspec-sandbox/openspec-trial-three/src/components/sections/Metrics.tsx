import { metrics } from '../../content/home';
import { SectionShell } from '../ui/SectionShell';

/** Headline-statistics band. */
export function Metrics() {
  return (
    <SectionShell ariaLabelledby="metrics-heading" className="border-y border-border">
      <h2 id="metrics-heading" className="sr-only">
        {metrics.heading}
      </h2>
      <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
        {metrics.items.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-1">
            <dt className="order-2 text-sm text-muted-foreground">{metric.label}</dt>
            <dd className="order-1 text-3xl font-bold text-accent sm:text-4xl">{metric.value}</dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
