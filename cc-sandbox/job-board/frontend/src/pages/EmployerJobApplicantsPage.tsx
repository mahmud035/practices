import { Link, useParams } from 'react-router-dom';
import { Skeleton } from '../components/ui/Skeleton';
import { ApplicantList } from '../features/applications/components/ApplicantList';
import { useJob } from '../features/jobs/useJobs';

export function EmployerJobApplicantsPage() {
  const { jobId = '' } = useParams();
  const { data: job, isLoading } = useJob(jobId);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Link to="/employer" className="text-sm font-medium text-primary hover:underline">
        ← Back to dashboard
      </Link>

      <div className="mb-6 mt-3">
        {isLoading ? (
          <Skeleton className="h-7 w-64" />
        ) : (
          <>
            <h1 className="text-2xl font-bold text-text">Applicants</h1>
            {job && (
              <p className="text-sm text-text-muted">
                {job.title} · {job.company}
              </p>
            )}
          </>
        )}
      </div>

      <ApplicantList jobId={jobId} />
    </div>
  );
}
