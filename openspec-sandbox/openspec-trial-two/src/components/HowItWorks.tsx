import { TerminalWindow } from './ui/TerminalWindow';

export function HowItWorks() {
  const steps = [
    { title: "Install", code: "npm install openspec" },
    { title: "Configure", code: "const spec = new Spec(...)" },
    { title: "Run", code: "spec.run()" }
  ];

  return (
    <div className="grid gap-6">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-6 text-left">
          <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">
            {i + 1}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
            <TerminalWindow prompt="">
              <code>{step.code}</code>
            </TerminalWindow>
          </div>
        </div>
      ))}
    </div>
  );
}
