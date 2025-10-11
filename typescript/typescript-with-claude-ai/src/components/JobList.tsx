export interface IJob {
  _id: string;
  title: string;
  company: string;
  salary: number;
  createdAt: Date;
}

interface JobListProps {
  jobs: IJob[];
  onDelete: (id: string) => Promise<void>;
}

// 2. React Component Props
export default function JobList({ jobs, onDelete }: JobListProps) {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} onDelete={onDelete} />
      ))}
    </div>
  );
}

interface JobCardProps {
  job: IJob;
  onDelete: (id: string) => Promise<void>;
}

function JobCard({ job, onDelete }: JobCardProps) {
  return <div onClick={() => onDelete(job._id)}>{JSON.stringify(job)}</div>;
}
