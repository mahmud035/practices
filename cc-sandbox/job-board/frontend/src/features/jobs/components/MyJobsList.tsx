import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';
import { ListSkeleton } from '../../../components/ui/Skeleton';
import { EmptyState, ErrorState } from '../../../components/ui/States';
import { getApiErrorMessage } from '../../../lib/api';
import { useCloseJob, useDeleteJob, useMyJobs } from '../useJobs';
import { JobCard } from './JobCard';

/**
 * Employer's own listings with manage actions. Defines loading, empty, and
 * error states. Delete can fail with 409 (job has applications) — that server
 * message is surfaced inline per-row rather than swallowed.
 */
export function MyJobsList() {
  const { data, isLoading, isError, error, refetch } = useMyJobs();
  const closeJob = useCloseJob();
  const deleteJob = useDeleteJob();
  const [actionError, setActionError] = useState<{ id: string; message: string } | null>(null);

  if (isLoading) return <ListSkeleton />;
  if (isError) return <ErrorState message={getApiErrorMessage(error)} onRetry={() => refetch()} />;
  if (!data || data.length === 0) {
    return <EmptyState title="You haven't posted any jobs yet" hint="Use the form above to post your first role." />;
  }

  const handleDelete = async (id: string) => {
    setActionError(null);
    try {
      await deleteJob.mutateAsync(id);
    } catch (err) {
      setActionError({ id, message: getApiErrorMessage(err) });
    }
  };

  return (
    <div className="grid gap-4">
      {data.map((job) => (
        <div key={job._id} className="grid gap-2">
          <JobCard
            job={job}
            actions={
              <>
                <Link
                  to={`/employer/jobs/${job._id}/applicants`}
                  className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover"
                >
                  View applicants
                </Link>
                {job.status === 'open' && (
                  <Button
                    variant="secondary"
                    isLoading={closeJob.isPending && closeJob.variables === job._id}
                    onClick={() => closeJob.mutate(job._id)}
                  >
                    Close
                  </Button>
                )}
                <Button
                  variant="danger"
                  isLoading={deleteJob.isPending && deleteJob.variables === job._id}
                  onClick={() => handleDelete(job._id)}
                >
                  Delete
                </Button>
              </>
            }
          />
          {actionError?.id === job._id && (
            <p className="text-sm text-danger">{actionError.message}</p>
          )}
        </div>
      ))}
    </div>
  );
}
