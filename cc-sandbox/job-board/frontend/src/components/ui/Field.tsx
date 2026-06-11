import { forwardRef, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface WrapperProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

const inputClass =
  'w-full rounded-md border border-border bg-surface-raised px-3 py-2 text-sm text-text outline-none focus:border-primary focus:ring-1 focus:ring-primary';

/** Label + control + inline error wrapper to keep forms consistent. */
export function Field({ label, error, children }: WrapperProps) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium text-text">{label}</span>
      {children}
      {error && <span className="text-xs text-danger">{error}</span>}
    </label>
  );
}

export const TextInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function TextInput(props, ref) {
    return <input ref={ref} className={inputClass} {...props} />;
  }
);

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  function TextArea(props, ref) {
    return <textarea ref={ref} className={`${inputClass} min-h-24 resize-y`} {...props} />;
  }
);

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  function Select(props, ref) {
    return <select ref={ref} className={inputClass} {...props} />;
  }
);
