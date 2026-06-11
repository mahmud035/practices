import { Link } from 'react-router-dom';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ListSkeleton } from '../components/ui/Skeleton';
import { EmptyState, ErrorState } from '../components/ui/States';
import { StatusBadge } from '../features/applications/components/StatusBadge';
import { useMyApplications } from '../features/applications/useApplications';
import { getApiErrorMessage } from '../lib/api';
import { formatDate } from '../lib/format';

export function JobSeekerDashboardPage() {
  const { data, isLoading, isError, error, refetch } = useMyApplications();

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-text">My applications</h1>

      {isLoading && <ListSkeleton />}

      {isError && <ErrorState message={getApiErrorMessage(error)} onRetry={() => refetch()} />}

      {data && data.length === 0 && (
        <EmptyState
          title="You haven't applied to any jobs yet"
          hint="Browse open roles and submit your first application."
        />
      )}

      {data && data.length > 0 && (
        <div className="grid gap-4">
          {data.map((app) => (
            <div key={app._id} className="rounded-lg border border-border bg-surface-raised p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-text">{app.job.title}</h3>
                  <p className="text-sm text-text-muted">{app.job.company}</p>
                  <p className="mt-1 text-xs text-text-muted">Applied {formatDate(app.createdAt)}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <StatusBadge status={app.status} />
                  <Badge tone={app.job.status === 'open' ? 'success' : 'neutral'}>
                    {app.job.status}
                  </Badge>
                </div>
              </div>
              <p className="mt-3 whitespace-pre-wrap text-sm text-text-muted">{app.coverLetter}</p>
              {app.cvUrl && (
                <a
                  href={app.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                >
                  View submitted CV
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-8">
        <Link to="/">
          <Button variant="secondary">Browse more jobs</Button>
        </Link>
      </div>
    </div>
  );
}
