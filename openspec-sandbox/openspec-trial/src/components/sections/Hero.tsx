import { SectionShell } from "../ui/SectionShell";
import { TerminalWindow } from "../ui/TerminalWindow";
import { TypedCommand } from "../ui/TypedCommand";
import { CopyCommand } from "../ui/CopyCommand";
import { CTAButton } from "../ui/CTAButton";
import { hero, installCommand } from "../../content/home";

export function Hero() {
  return (
    <SectionShell id="hero" ariaLabel="Hero" className="bg-terminal-grid">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="text-lg text-muted-foreground">{hero.subhead}</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <CTAButton href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </CTAButton>
            <CTAButton href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </CTAButton>
          </div>
          <div className="flex justify-center lg:justify-start">
            <CopyCommand command={installCommand} />
          </div>
        </div>

        <TerminalWindow title="acme — zsh">
          <div className="flex gap-2">
            <span className="text-prompt" aria-hidden="true">
              $
            </span>
            <TypedCommand command={hero.terminalCommand} />
          </div>
          <p className="text-muted-foreground">{hero.terminalOutput}</p>
        </TerminalWindow>
      </div>
    </SectionShell>
  );
}
