import { cn } from '../../lib/utils';

export function StatusBadge({
  status,
}: {
  status: 'pending' | 'ready' | 'failed';
}) {
  const styles =
    status === 'ready'
      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
      : status === 'pending'
      ? 'bg-amber-50 text-amber-700 border-amber-200'
      : 'bg-rose-50 text-rose-700 border-rose-200';

  const label =
    status === 'ready' ? 'Ready' : status === 'pending' ? 'Pending' : 'Failed';

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium',
        styles
      )}
    >
      {label}
    </span>
  );
}
