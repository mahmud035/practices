import { homeContent } from '../content/home';
import { CTAButton } from './ui/CTAButton';
import { TerminalWindow } from './ui/TerminalWindow';
import { TypedCommand } from './ui/TypedCommand';
import { CopyCommand } from './ui/CopyCommand';

export function Hero() {
  return (
    <section className="text-center py-24">
      <h1 className="text-5xl font-bold text-foreground mb-6">{homeContent.headline}</h1>
      <p className="text-muted-foreground mb-8 text-xl">{homeContent.subhead}</p>
      <div className="flex gap-4 justify-center mb-12">
        <CTAButton>{homeContent.cta.primary}</CTAButton>
        <CTAButton variant="secondary">{homeContent.cta.secondary}</CTAButton>
      </div>
      <div className="max-w-2xl mx-auto">
        <TerminalWindow>
          <TypedCommand text={homeContent.installCommand} />
        </TerminalWindow>
        <div className="mt-4 flex justify-center">
          <CopyCommand command={homeContent.installCommand} />
        </div>
      </div>
    </section>
  );
}
