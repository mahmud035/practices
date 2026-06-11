type Tone = 'neutral' | 'success' | 'warning' | 'danger' | 'primary';

const tones: Record<Tone, string> = {
  neutral: 'bg-surface text-text-muted border-border',
  success: 'bg-success/10 text-success border-success/30',
  warning: 'bg-warning/15 text-warning border-warning/40',
  danger: 'bg-danger/10 text-danger border-danger/30',
  primary: 'bg-primary/10 text-primary border-primary/30',
};

export function Badge({ tone = 'neutral', children }: { tone?: Tone; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
