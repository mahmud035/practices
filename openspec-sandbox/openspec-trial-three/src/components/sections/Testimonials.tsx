import { testimonials } from '../../content/home';
import { SectionShell } from '../ui/SectionShell';

export function Testimonials() {
  return (
    <SectionShell ariaLabelledby="testimonials-heading">
      <div className="mb-12 max-w-2xl">
        <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          {testimonials.heading}
        </h2>
      </div>

      <ul className="grid gap-6 md:grid-cols-3">
        {testimonials.items.map((item) => (
          <li key={item.name}>
            <figure className="flex h-full flex-col gap-4 rounded-lg border border-border bg-surface/40 p-6">
              <blockquote className="text-sm leading-relaxed text-foreground">
                <span aria-hidden="true" className="mr-1 text-accent">
                  “
                </span>
                {item.quote}
              </blockquote>
              <figcaption className="mt-auto text-sm">
                <span className="font-semibold">{item.name}</span>
                <span className="block text-muted-foreground">{item.role}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
