import { features } from '../../content/home';
import { SectionShell } from '../ui/SectionShell';
import { TerminalWindow } from '../ui/TerminalWindow';

export function Features() {
  return (
    <SectionShell id="features" ariaLabelledby="features-heading">
      <div className="mb-12 max-w-2xl">
        <h2 id="features-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          {features.heading}
        </h2>
        <p className="mt-3 text-muted-foreground">{features.subhead}</p>
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.cards.map((card) => (
          <li
            key={card.title}
            className="flex flex-col gap-4 rounded-lg border border-border bg-surface/40 p-6"
          >
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
            <TerminalWindow
              className="mt-auto"
              prompt={card.terminal.prompt}
              command={card.terminal.command}
            >
              {card.terminal.output}
            </TerminalWindow>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
