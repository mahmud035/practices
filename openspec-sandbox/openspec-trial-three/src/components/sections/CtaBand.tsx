import { ctaBand } from '../../content/home';
import { SectionShell } from '../ui/SectionShell';
import { CTAButton } from '../ui/CTAButton';
import { CopyCommand } from '../ui/CopyCommand';

/** Final conversion band: install command + sign-up CTA. */
export function CtaBand() {
  return (
    <SectionShell ariaLabelledby="cta-heading" className="bg-scanlines">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <h2 id="cta-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          {ctaBand.heading}
        </h2>
        <p className="text-muted-foreground">{ctaBand.subhead}</p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <CopyCommand command={ctaBand.installCommand} />
          <CTAButton href={ctaBand.cta.href} variant="primary">
            {ctaBand.cta.label}
          </CTAButton>
        </div>
      </div>
    </SectionShell>
  );
}
