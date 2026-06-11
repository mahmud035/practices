import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Pagination } from '../components/ui/Pagination';
import { ListSkeleton } from '../components/ui/Skeleton';
import { EmptyState, ErrorState } from '../components/ui/States';
import { useAuth } from '../context/AuthContext';
import { ApplyModal } from '../features/applications/components/ApplyModal';
import { JobCard } from '../features/jobs/components/JobCard';
import { JobFilters } from '../features/jobs/components/JobFilters';
import { Job, JobFilters as Filters } from '../features/jobs/jobs.types';
import { useJobs } from '../features/jobs/useJobs';
import { getApiErrorMessage } from '../lib/api';

export function BrowseJobsPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [filters, setFilters] = useState<Filters>({ page: 1 });
  const [applyTo, setApplyTo] = useState<Job | null>(null);

  const { data, isLoading, isError, error, refetch } = useJobs(filters);

  // Any filter change resets pagination to the first page.
  const updateFilters = (next: Partial<Filters>) =>
    setFilters((prev) => ({ ...prev, ...next, page: 1 }));

  const renderActions = (job: Job) => {
    if (!user) {
      return (
        <Button variant="secondary" onClick={() => navigate('/login')}>
          Log in to apply
        </Button>
      );
    }
    if (user.role === 'jobseeker') {
      return <Button onClick={() => setApplyTo(job)}>Apply</Button>;
    }
    return null; // employers browse read-only
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-1 text-2xl font-bold text-text">Open positions</h1>
      <p className="mb-6 text-sm text-text-muted">Browse roles currently accepting applications.</p>

      <div className="mb-6">
        <JobFilters filters={filters} onChange={updateFilters} />
      </div>

      {isLoading && <ListSkeleton count={4} />}

      {isError && <ErrorState message={getApiErrorMessage(error)} onRetry={() => refetch()} />}

      {data && data.data.length === 0 && (
        <EmptyState title="No jobs match your filters" hint="Try clearing the search or location." />
      )}

      {data && data.data.length > 0 && (
        <div className="grid gap-4">
          {data.data.map((job) => (
            <JobCard key={job._id} job={job} actions={renderActions(job)} />
          ))}
        </div>
      )}

      {data && (
        <div className="mt-6">
          <Pagination
            page={data.page}
            totalPages={data.totalPages}
            onPageChange={(page) => setFilters((prev) => ({ ...prev, page }))}
          />
        </div>
      )}

      <ApplyModal job={applyTo} onClose={() => setApplyTo(null)} onApplied={() => refetch()} />
    </div>
  );
}
