import type { IUser } from '../docs/handbook--everyday-types';
import useFetch from '../hooks/useFetch';
import JobCard from './JobCard';

export interface IJob {
  _id: string;
  title: string;
  company: string;
  salary: number;
  createdAt: Date;
  updatedAt: Date;
}

interface JobListProps {
  jobs: IJob[];
  onDelete: (id: string) => Promise<void>;
}

// 2. React Component Props
export default function JobList({ jobs, onDelete }: JobListProps) {
  const { data: jobsData } = useFetch<IJob[]>('/api/jobs');
  const { data: userData } = useFetch<IUser>('/api/user');
  console.log(jobsData, userData);

  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} onDelete={onDelete} />
      ))}
    </div>
  );
}
