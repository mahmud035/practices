import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { RegisterForm } from '../features/auth/components/RegisterForm';

export function RegisterPage() {
  const { user, isLoading } = useAuth();
  if (!isLoading && user) return <Navigate to="/" replace />;

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <div className="rounded-lg border border-border bg-surface-raised p-6">
        <h1 className="mb-1 text-xl font-bold text-text">Create your account</h1>
        <p className="mb-6 text-sm text-text-muted">Join as a job seeker or an employer.</p>
        <RegisterForm />
        <p className="mt-4 text-sm text-text-muted">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
