import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../features/auth/auth.types';
import { ListSkeleton } from '../components/ui/Skeleton';

/**
 * Route guard. Waits for the auth check, redirects anonymous users to /login,
 * and redirects authenticated users lacking the required role to home. Role is
 * taken from the auth context (the /me response) — never assumed client-side.
 */
export function ProtectedRoute({ role }: { role: UserRole }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-8">
        <ListSkeleton />
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== role) return <Navigate to="/" replace />;

  return <Outlet />;
}
