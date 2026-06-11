import { Select } from '../../../components/ui/Field';
import { EmptyState, ErrorState } from '../../../components/ui/States';
import { ListSkeleton } from '../../../components/ui/Skeleton';
import { getApiErrorMessage } from '../../../lib/api';
import { formatDate } from '../../../lib/format';
import { APPLICATION_STATUSES, ApplicationStatus } from '../applications.types';
import { useJobApplications, useUpdateApplicationStatus } from '../useApplications';
import { StatusBadge } from './StatusBadge';

/**
 * Employer view of applicants for one owned job. Defines loading, empty, and
 * error states explicitly; each row lets the employer change review status.
 */
export function ApplicantList({ jobId }: { jobId: string }) {
  const { data, isLoading, isError, error, refetch } = useJobApplications(jobId);
  const updateStatus = useUpdateApplicationStatus(jobId);

  if (isLoading) return <ListSkeleton />;
  if (isError) return <ErrorState message={getApiErrorMessage(error)} onRetry={() => refetch()} />;
  if (!data || data.length === 0) {
    return <EmptyState title="No applicants yet" hint="Applications will appear here as they arrive." />;
  }

  return (
    <div className="grid gap-3">
      {data.map((app) => (
        <div key={app._id} className="rounded-lg border border-border bg-surface-raised p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-medium text-text">{app.jobseeker.name}</p>
              <p className="text-sm text-text-muted">{app.jobseeker.email}</p>
              <p className="mt-1 text-xs text-text-muted">Applied {formatDate(app.createdAt)}</p>
            </div>
            <StatusBadge status={app.status} />
          </div>

          <p className="mt-3 whitespace-pre-wrap text-sm text-text">{app.coverLetter}</p>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            {app.cvUrl && (
              <a
                href={app.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                View CV (PDF)
              </a>
            )}
            <label className="ml-auto flex items-center gap-2 text-sm text-text-muted">
              Status
              <Select
                value={app.status}
                disabled={updateStatus.isPending}
                onChange={(e) =>
                  updateStatus.mutate({ id: app._id, status: e.target.value as ApplicationStatus })
                }
                className="w-auto"
              >
                {APPLICATION_STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </Select>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
