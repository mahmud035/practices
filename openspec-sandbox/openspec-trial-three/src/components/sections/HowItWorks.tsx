import { howItWorks } from '../../content/home';
import { SectionShell } from '../ui/SectionShell';
import { TerminalWindow } from '../ui/TerminalWindow';

export function HowItWorks() {
  return (
    <SectionShell ariaLabelledby="how-heading" className="bg-surface/20">
      <div className="mb-12 max-w-2xl">
        <h2 id="how-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          {howItWorks.heading}
        </h2>
      </div>

      {/* Ordered install → configure → run steps */}
      <ol className="grid gap-6 md:grid-cols-3">
        {howItWorks.steps.map((step, index) => (
          <li key={step.title} className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-flex size-8 items-center justify-center rounded-full border border-accent/50 text-sm font-bold text-accent"
              >
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            <TerminalWindow
              className="mt-auto"
              prompt={step.terminal.prompt}
              command={step.terminal.command}
            >
              {step.terminal.output}
            </TerminalWindow>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
