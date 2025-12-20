import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, CheckCircle2, Loader2, Rocket } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { ImageDropzone } from '../components/common/ImageDropzone';
import { PageHeader } from '../components/common/PageHeader';
import { TagInput } from '../components/common/TagInput';
import { formatMoney } from '../lib/format';
import { toastError, toastSuccess } from '../lib/toast';
import { cn } from '../lib/utils';
import { queryClient } from '../query/client';
import { qk } from '../query/keys';
import { useCreateProductWithImage } from '../query/products';

const schema = z.object({
  title: z.string().min(1, 'Title is required').max(200),
  description: z.string().min(1, 'Description is required').max(2000),
  price: z.coerce.number().min(0, 'Price must be >= 0'),
  category: z.string().min(1, 'Category is required'),
  inStock: z.boolean().default(true),
});

type FormValues = z.infer<typeof schema>;

const resolvedSchema = schema.catchall(z.any());

export function NewProductPage() {
  const nav = useNavigate();
  const mut = useCreateProductWithImage();

  const [tags, setTags] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema as any),
    defaultValues: {
      title: '',
      description: '',
      price: 0,
      category: '',
      inStock: true,
    },
  });

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const priceValue = form.watch('price');
  const disabled = mut.isPending;

  const summary = useMemo(() => {
    return {
      title: form.watch('title') || 'Untitled product',
      category: form.watch('category') || 'Uncategorized',
      price: Number.isFinite(priceValue) ? formatMoney(priceValue) : '—',
      tagsCount: tags.length,
    };
  }, [form, priceValue, tags]);

  async function onSubmit(values: FormValues) {
    if (!file) {
      toastError('Please select a product image');
      return;
    }

    setProgress(0);

    try {
      await mut.mutateAsync({
        ...values,
        tags,
        image: file,
        onProgress: (pct) => setProgress(pct),
      });

      toastSuccess('Product created & image uploaded successfully');
      await queryClient.invalidateQueries({ queryKey: qk.products });
      nav('/products');
    } catch (e: any) {
      toastError(e?.message || 'Failed to create product');
    }
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="New product"
        subtitle="Create instantly, upload reliably (signed uploads + retries)."
        actions={
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left: form */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-zinc-900">
                  Product details
                </div>
                <div className="text-xs text-zinc-500">
                  Keep it clear — admins aren’t mind readers.
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                <Rocket className="h-4 w-4" />
                Fast pipeline
              </div>
            </div>

            <div className="grid gap-4">
              <Field label="Title" error={form.formState.errors.title?.message}>
                <input
                  {...form.register('title')}
                  disabled={disabled}
                  className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10 disabled:bg-zinc-50"
                  placeholder="e.g., Premium Leather Wallet"
                />
              </Field>

              <Field
                label="Description"
                error={form.formState.errors.description?.message}
              >
                <textarea
                  {...form.register('description')}
                  disabled={disabled}
                  className="min-h-[120px] w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10 disabled:bg-zinc-50"
                  placeholder="What makes this product worth buying?"
                />
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Price"
                  error={form.formState.errors.price?.message}
                >
                  <input
                    type="number"
                    step="0.01"
                    {...form.register('price')}
                    disabled={disabled}
                    className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10 disabled:bg-zinc-50"
                  />
                </Field>

                <Field
                  label="Category"
                  error={form.formState.errors.category?.message}
                >
                  <input
                    {...form.register('category')}
                    disabled={disabled}
                    className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10 disabled:bg-zinc-50"
                    placeholder="e.g., Accessories"
                  />
                </Field>
              </div>

              <div className="flex items-center justify-between rounded-xl border bg-zinc-50 px-4 py-3">
                <div>
                  <div className="text-sm font-medium text-zinc-900">
                    In stock
                  </div>
                  <div className="text-xs text-zinc-500">
                    Toggle availability
                  </div>
                </div>
                <input
                  type="checkbox"
                  disabled={disabled}
                  {...form.register('inStock')}
                  className="h-5 w-5 accent-zinc-900"
                />
              </div>
            </div>
          </div>

          <TagInput value={tags} onChange={setTags} disabled={disabled} />

          {/* Progress + submit */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="mb-3 text-sm font-medium text-zinc-900">
              Upload status
            </div>

            <div className="flex items-center gap-3">
              <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100">
                <div
                  className="h-full bg-zinc-900 transition-all"
                  style={{ width: `${disabled ? progress : 0}%` }}
                />
              </div>
              <div className="w-12 text-right text-xs text-zinc-600">
                {disabled ? `${progress}%` : '—'}
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-zinc-500">
                We create the product first, then upload image directly to
                Cloudinary with retries.
              </div>

              <button
                type="submit"
                disabled={disabled}
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800',
                  disabled && 'opacity-70'
                )}
              >
                {disabled ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Working…
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Create product
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Right: image + summary */}
        <div className="space-y-6">
          <ImageDropzone
            file={file}
            onChange={setFile}
            previewUrl={previewUrl}
            disabled={disabled}
          />

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="mb-3 text-sm font-medium text-zinc-900">
              Live preview
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">Title</span>
                <span className="font-medium text-zinc-900">
                  {summary.title}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Category</span>
                <span className="font-medium text-zinc-900">
                  {summary.category}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Price</span>
                <span className="font-medium text-zinc-900">
                  {summary.price}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Tags</span>
                <span className="font-medium text-zinc-900">
                  {summary.tagsCount}
                </span>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-zinc-50 p-3 text-xs text-zinc-600">
              Pro tip: If uploads ever feel flaky, it’s usually the network.
              Signed uploads + retries keep admins productive.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field(props: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <label className="text-sm font-medium text-zinc-900">
          {props.label}
        </label>
        {props.error && (
          <span className="text-xs text-rose-600">{props.error}</span>
        )}
      </div>
      {props.children}
    </div>
  );
}
