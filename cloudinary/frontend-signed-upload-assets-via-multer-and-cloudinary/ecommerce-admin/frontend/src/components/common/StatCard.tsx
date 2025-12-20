import type { ReactNode } from 'react';

export function StatCard(props: {
  label: string;
  value: string;
  hint?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm text-zinc-500">{props.label}</div>
          <div className="mt-1 text-2xl font-semibold text-zinc-900">
            {props.value}
          </div>
          {props.hint && (
            <div className="mt-1 text-xs text-zinc-500">{props.hint}</div>
          )}
        </div>
        {props.icon && (
          <div className="rounded-xl bg-zinc-100 p-2">{props.icon}</div>
        )}
      </div>
    </div>
  );
}
