import { AlertTriangle, Boxes, CheckCircle2, Clock } from 'lucide-react';
import { useMemo } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { StatCard } from '../components/common/StatCard';
import { useProducts } from '../query/products';

export function DashboardPage() {
  const { data = [], isLoading } = useProducts();

  const stats = useMemo(() => {
    const total = data.length;
    const ready = data.filter((p) => p.image?.status === 'ready').length;
    const pending = data.filter((p) => p.image?.status === 'pending').length;
    const failed = data.filter((p) => p.image?.status === 'failed').length;
    return { total, ready, pending, failed };
  }, [data]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        subtitle="Operational overview of your catalog & media pipeline."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Total products"
          value={isLoading ? '…' : String(stats.total)}
          icon={<Boxes className="h-5 w-5" />}
        />
        <StatCard
          label="Images ready"
          value={isLoading ? '…' : String(stats.ready)}
          icon={<CheckCircle2 className="h-5 w-5" />}
        />
        <StatCard
          label="Images pending"
          value={isLoading ? '…' : String(stats.pending)}
          icon={<Clock className="h-5 w-5" />}
        />
        <StatCard
          label="Images failed"
          value={isLoading ? '…' : String(stats.failed)}
          icon={<AlertTriangle className="h-5 w-5" />}
        />
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="text-sm font-medium text-zinc-900">
          What’s happening
        </div>
        <div className="mt-2 text-sm text-zinc-600 leading-relaxed">
          This dashboard uses a resilient upload pipeline: products are created
          instantly, images upload directly to Cloudinary with retries/timeouts,
          then metadata is confirmed back to your API. Result: fewer outages,
          faster UX, happier admins.
        </div>
      </div>
    </div>
  );
}
