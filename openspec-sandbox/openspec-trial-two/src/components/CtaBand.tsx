import { CopyCommand } from './ui/CopyCommand';
import { CTAButton } from './ui/CTAButton';

export function CtaBand() {
  return (
    <div className="py-24 text-center">
      <h2 className="text-4xl font-bold text-foreground mb-6">Start building today</h2>
      <div className="flex gap-4 justify-center">
        <CopyCommand command="npm install openspec" />
        <CTAButton>Sign up</CTAButton>
      </div>
    </div>
  );
}
