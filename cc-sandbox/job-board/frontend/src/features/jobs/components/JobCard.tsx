import { ReactNode } from 'react';
import { Badge } from '../../../components/ui/Badge';
import { formatDate, formatSalary } from '../../../lib/format';
import { Job } from '../jobs.types';

/**
 * Presentational job card. Action buttons (apply / manage) are injected via
 * `actions` so the same card serves browse, dashboard, and applicant contexts.
 */
export function JobCard({ job, actions }: { job: Job; actions?: ReactNode }) {
  return (
    <article className="rounded-lg border border-border bg-surface-raised p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-text">{job.title}</h3>
          <p className="text-sm text-text-muted">
            {job.company} · {job.location}
          </p>
        </div>
        <Badge tone={job.status === 'open' ? 'success' : 'neutral'}>{job.status}</Badge>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Badge tone="primary">{job.type}</Badge>
        <span className="text-sm font-medium text-text">
          {formatSalary(job.salaryMin, job.salaryMax)}
        </span>
        <span className="text-sm text-text-muted">· Closes {formatDate(job.deadline)}</span>
      </div>

      <p className="mt-3 line-clamp-3 text-sm text-text-muted">{job.description}</p>

      {actions && <div className="mt-4 flex flex-wrap gap-2">{actions}</div>}
    </article>
  );
}
