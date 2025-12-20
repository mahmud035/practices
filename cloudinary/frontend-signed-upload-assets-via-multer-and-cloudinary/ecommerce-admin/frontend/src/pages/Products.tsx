import { Plus, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { EmptyState } from '../components/common/EmptyState';
import { PageHeader } from '../components/common/PageHeader';
import { StatusBadge } from '../components/common/StatusBadge';
import { formatBytes, formatDate, formatMoney } from '../lib/format';
import { toastError, toastSuccess } from '../lib/toast';
import { queryClient } from '../query/client';
import { qk } from '../query/keys';
import { useDeleteProduct, useProducts } from '../query/products';

export function ProductsPage() {
  const { data = [], isLoading } = useProducts();
  const del = useDeleteProduct();
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return data;
    return data.filter((p) =>
      [p.title, p.category, p.description, ...(p.tags ?? [])]
        .join(' ')
        .toLowerCase()
        .includes(s)
    );
  }, [data, q]);

  async function onDelete(id: string) {
    try {
      await del.mutateAsync(id);
      toastSuccess('Product deleted');
      queryClient.invalidateQueries({ queryKey: qk.products });
    } catch (e: any) {
      toastError(e?.message || 'Failed to delete');
    }
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Products"
        subtitle="Manage inventory and media status."
        actions={
          <Link
            to="/products/new"
            className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            <Plus className="h-4 w-4" />
            New product
          </Link>
        }
      />

      <div className="flex items-center gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by title, category, tags…"
          className="w-full max-w-lg rounded-xl border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10"
        />
        <div className="text-xs text-zinc-500">{filtered.length} items</div>
      </div>

      {!isLoading && filtered.length === 0 ? (
        <EmptyState
          title="No products found"
          subtitle="Create your first product and upload an image with signed uploads."
          action={
            <Link
              to="/products/new"
              className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Create product
            </Link>
          }
        />
      ) : (
        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="grid grid-cols-12 gap-3 border-b bg-zinc-50 px-4 py-3 text-xs font-semibold text-zinc-600">
            <div className="col-span-4">Product</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-2">Image</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          <div className="divide-y">
            {filtered.map((p) => (
              <div key={p._id} className="grid grid-cols-12 gap-3 px-4 py-4">
                <div className="col-span-4 flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-xl border bg-zinc-50">
                    {p.image?.url ? (
                      <img
                        src={p.image.url}
                        alt={p.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs text-zinc-400">
                        —
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900">
                      {p.title}
                    </div>
                    <div className="mt-0.5 text-xs text-zinc-500">
                      Created {formatDate(p.createdAt)}
                    </div>
                  </div>
                </div>

                <div className="col-span-2 text-sm text-zinc-900">
                  {formatMoney(p.price)}
                </div>
                <div className="col-span-2 text-sm text-zinc-700">
                  {p.category}
                </div>

                <div className="col-span-2 space-y-1">
                  <StatusBadge status={p.image?.status ?? 'pending'} />
                  <div className="text-xs text-zinc-500">
                    {p.image?.bytes ? formatBytes(p.image.bytes) : '—'}
                  </div>
                  {p.image?.status === 'failed' && p.image?.lastError && (
                    <div className="text-xs text-rose-600 line-clamp-2">
                      {p.image.lastError}
                    </div>
                  )}
                </div>

                <div className="col-span-2 flex justify-end">
                  <button
                    onClick={() => onDelete(p._id)}
                    disabled={del.isPending}
                    className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 disabled:opacity-60"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
