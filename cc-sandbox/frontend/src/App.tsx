import { Navigate, Route, Routes } from 'react-router-dom';
import { useMe } from './features/auth/hooks/useAuth';
import AuthPage from './pages/AuthPage';
import NotesPage from './pages/NotesPage';

function AppSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  const { data: user, isLoading } = useMe();

  if (isLoading) return <AppSkeleton />;

  return (
    <Routes>
      <Route path="/auth" element={user ? <Navigate to="/notes" replace /> : <AuthPage />} />
      <Route path="/notes" element={user ? <NotesPage /> : <Navigate to="/auth" replace />} />
      <Route path="*" element={<Navigate to={user ? '/notes' : '/auth'} replace />} />
    </Routes>
  );
}
