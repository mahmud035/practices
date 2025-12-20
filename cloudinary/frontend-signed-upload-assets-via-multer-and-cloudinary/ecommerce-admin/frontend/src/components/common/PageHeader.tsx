import type { ReactNode } from 'react';

export function PageHeader(props: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          {props.title}
        </h1>
        {props.subtitle && (
          <p className="mt-1 text-sm text-zinc-600">{props.subtitle}</p>
        )}
      </div>
      {props.actions && <div className="flex gap-2">{props.actions}</div>}
    </div>
  );
}
