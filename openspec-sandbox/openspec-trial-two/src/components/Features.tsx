import { homeContent } from '../content/home';
import { TerminalWindow } from './ui/TerminalWindow';

export function Features() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {homeContent.features.map((feature, i) => (
        <div key={i} className="border border-border p-6 rounded-lg text-left">
          <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
          <p className="text-muted-foreground mb-4 text-sm">{feature.description}</p>
          <TerminalWindow prompt="">
            <code>{feature.code}</code>
          </TerminalWindow>
        </div>
      ))}
    </div>
  );
}
