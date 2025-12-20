import { X } from 'lucide-react';
import { useState } from 'react';

export function TagInput(props: {
  value: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
}) {
  const [text, setText] = useState('');

  const add = () => {
    const t = text.trim();
    if (!t) return;
    if (props.value.includes(t)) return;
    props.onChange([...props.value, t]);
    setText('');
  };

  const remove = (t: string) =>
    props.onChange(props.value.filter((x) => x !== t));

  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="mb-3 text-sm font-medium text-zinc-900">Tags</div>

      <div className="flex flex-wrap gap-2">
        {props.value.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1 rounded-full border bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700"
          >
            {t}
            <button
              type="button"
              onClick={() => remove(t)}
              disabled={props.disabled}
              className="rounded-full p-0.5 hover:bg-zinc-200 disabled:opacity-50"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
      </div>

      <div className="mt-3 flex gap-2">
        <input
          value={text}
          disabled={props.disabled}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              add();
            }
          }}
          placeholder={props.placeholder ?? 'Press Enter to add'}
          className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10 disabled:bg-zinc-50"
        />
        <button
          type="button"
          onClick={add}
          disabled={props.disabled}
          className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-60"
        >
          Add
        </button>
      </div>
    </div>
  );
}
