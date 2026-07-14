import { SectionShell } from "../ui/SectionShell";
import { testimonials } from "../../content/home";

export function Testimonials() {
  return (
    <SectionShell id="testimonials" ariaLabel="Testimonials">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-foreground">
          Loved by developers who ship often
        </h2>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="flex flex-col justify-between rounded-lg border border-border bg-surface p-6"
          >
            <blockquote className="text-sm text-foreground">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-medium text-foreground">
                {testimonial.name}
              </span>
              <span className="block text-muted-foreground">
                {testimonial.title}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}
