import { brand, hero } from '../../content/home';
import { SectionShell } from '../ui/SectionShell';
import { CTAButton } from '../ui/CTAButton';
import { TerminalWindow } from '../ui/TerminalWindow';
import { TypedCommand } from '../ui/TypedCommand';
import { CopyCommand } from '../ui/CopyCommand';

export function Hero() {
  return (
    <SectionShell ariaLabelledby="hero-heading" className="relative overflow-hidden">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
          >
            {hero.headline}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {hero.subhead}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <CTAButton href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </CTAButton>
            <CTAButton href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </CTAButton>
          </div>
          <CopyCommand command={brand.installCommand} />
        </div>

        <div className="w-full min-w-0">
          <TerminalWindow
            title={hero.terminal.title}
            prompt={hero.terminal.prompt}
            command={<TypedCommand text={hero.terminal.command} />}
          >
            {hero.terminal.output}
          </TerminalWindow>
        </div>
      </div>
    </SectionShell>
  );
}
