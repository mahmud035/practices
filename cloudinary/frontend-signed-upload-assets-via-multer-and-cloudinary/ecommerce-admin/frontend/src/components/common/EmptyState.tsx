import type { ReactNode } from 'react';

export function EmptyState(props: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">
      <div className="text-lg font-semibold text-zinc-900">{props.title}</div>
      {props.subtitle && (
        <div className="mt-1 text-sm text-zinc-600">{props.subtitle}</div>
      )}
      {props.action && (
        <div className="mt-6 flex justify-center">{props.action}</div>
      )}
    </div>
  );
}
