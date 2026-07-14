import { SectionShell } from "../ui/SectionShell";
import { CTAButton } from "../ui/CTAButton";
import { pricingTiers, pricingCta } from "../../content/home";

export function PricingTeaser() {
  return (
    <SectionShell id="pricing" ariaLabel="Pricing">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-foreground">
          Simple pricing, no surprises
        </h2>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col rounded-lg border p-6 ${
              tier.featured
                ? "border-accent bg-surface"
                : "border-border bg-surface"
            }`}
          >
            <h3 className="text-lg font-semibold text-foreground">
              {tier.name}
            </h3>
            <p className="mt-2">
              <span className="text-3xl font-semibold text-foreground">
                {tier.price}
              </span>
              <span className="text-sm text-muted-foreground">
                {tier.period}
              </span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {tier.description}
            </p>
            <ul className="mt-6 flex-1 space-y-2 text-sm text-muted-foreground">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="text-accent" aria-hidden="true">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <CTAButton
              href={tier.cta.href}
              variant={tier.featured ? "primary" : "secondary"}
              className="mt-6 w-full"
            >
              {tier.cta.label}
            </CTAButton>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href={pricingCta.href}
          className="inline-block rounded-sm px-2 py-3 text-sm text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {pricingCta.label}
        </a>
      </div>
    </SectionShell>
  );
}
