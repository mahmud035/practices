import { pricing } from '../../content/home';
import { SectionShell } from '../ui/SectionShell';
import { CTAButton } from '../ui/CTAButton';

export function PricingTeaser() {
  return (
    <SectionShell ariaLabelledby="pricing-heading" className="bg-surface/20">
      <div className="mb-12 max-w-2xl">
        <h2 id="pricing-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          {pricing.heading}
        </h2>
        <p className="mt-3 text-muted-foreground">{pricing.subhead}</p>
      </div>

      <ul className="grid gap-6 md:grid-cols-3">
        {pricing.tiers.map((tier) => (
          <li
            key={tier.name}
            className={`flex flex-col gap-5 rounded-lg border p-6 ${
              tier.featured ? 'border-accent bg-surface/60' : 'border-border bg-surface/30'
            }`}
          >
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                {tier.featured && (
                  <span className="rounded-full border border-accent/60 px-2 py-0.5 text-xs text-accent">
                    Popular
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{tier.description}</p>
            </div>
            <p className="flex items-baseline gap-1">
              <span className="text-3xl font-bold">{tier.price}</span>
              <span className="text-sm text-muted-foreground">{tier.cadence}</span>
            </p>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span aria-hidden="true" className="text-accent">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <CTAButton
              href={pricing.fullPricingCta.href}
              variant={tier.featured ? 'primary' : 'secondary'}
              className="mt-auto w-full"
            >
              {tier.cta}
            </CTAButton>
          </li>
        ))}
      </ul>

      <div className="mt-10 text-center">
        <a
          href={pricing.fullPricingCta.href}
          className="text-sm text-accent underline-offset-4 hover:underline"
        >
          {pricing.fullPricingCta.label} →
        </a>
      </div>
    </SectionShell>
  );
}
