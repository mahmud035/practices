import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LoginForm } from '../features/auth/components/LoginForm';

export function LoginPage() {
  const { user, isLoading } = useAuth();
  if (!isLoading && user) return <Navigate to="/" replace />;

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <div className="rounded-lg border border-border bg-surface-raised p-6">
        <h1 className="mb-1 text-xl font-bold text-text">Welcome back</h1>
        <p className="mb-6 text-sm text-text-muted">Log in to your account.</p>
        <LoginForm />
        <p className="mt-4 text-sm text-text-muted">
          No account?{' '}
          <Link to="/register" className="font-medium text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
