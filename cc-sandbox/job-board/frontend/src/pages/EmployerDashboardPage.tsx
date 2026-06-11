import { MyJobsList } from '../features/jobs/components/MyJobsList';
import { PostJobForm } from '../features/jobs/components/PostJobForm';

export function EmployerDashboardPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-text">Employer dashboard</h1>

      <div className="mb-8">
        <PostJobForm />
      </div>

      <h2 className="mb-4 text-lg font-semibold text-text">Your listings</h2>
      <MyJobsList />
    </div>
  );
}
