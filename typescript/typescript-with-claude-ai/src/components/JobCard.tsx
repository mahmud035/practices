import type { IJob } from './JobList';

interface JobCardProps {
  job: IJob;
  onEdit?: (id: string) => void; // optional
  onDelete: (id: string) => Promise<void>; // Required
  className?: string;
}

export default function JobCard({
  job,
  onEdit,
  onDelete,
  className = '',
}: JobCardProps) {
  return (
    <div className={`job-card ${className}`}>
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>${job.salary.toLocaleString()}</p>

      {onEdit && ( // Safe optional check
        <button onClick={() => onEdit(job._id)}>Edit</button>
      )}
      <button onClick={() => onDelete(job._id)}>Delete</button>
    </div>
  );
}
