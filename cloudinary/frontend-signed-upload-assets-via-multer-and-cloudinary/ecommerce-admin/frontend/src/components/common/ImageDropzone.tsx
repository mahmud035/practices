import { Image as ImageIcon, UploadCloud } from 'lucide-react';
import { useRef } from 'react';
import { cn } from '../../lib/utils';

export function ImageDropzone(props: {
  file: File | null;
  onChange: (file: File | null) => void;
  previewUrl?: string | null;
  disabled?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="mb-3 text-sm font-medium text-zinc-900">
        Product image
      </div>

      <div
        className={cn(
          'flex cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed p-6 transition',
          props.disabled ? 'cursor-not-allowed opacity-70' : 'hover:bg-zinc-50'
        )}
        onClick={() => !props.disabled && inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          if (props.disabled) return;
          const f = e.dataTransfer.files?.[0];
          if (f) props.onChange(f);
        }}
      >
        {props.previewUrl ? (
          <div className="w-full">
            <img
              src={props.previewUrl}
              alt="preview"
              className="mx-auto max-h-64 rounded-2xl object-contain"
            />
            <div className="mt-3 text-center text-xs text-zinc-500">
              Click to change image
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100">
              <UploadCloud className="h-6 w-6 text-zinc-700" />
            </div>
            <div className="text-sm font-medium text-zinc-900">
              Drop an image here, or click to browse
            </div>
            <div className="mt-1 text-xs text-zinc-500">
              JPG / PNG / WebP recommended • up to your Cloudinary limits
            </div>
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => props.onChange(e.target.files?.[0] ?? null)}
      />

      <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500">
        <ImageIcon className="h-4 w-4" />
        Signed upload = faster and more reliable.
      </div>
    </div>
  );
}
