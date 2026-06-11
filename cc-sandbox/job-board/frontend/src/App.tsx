import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/ui/Navbar';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { BrowseJobsPage } from './pages/BrowseJobsPage';
import { EmployerDashboardPage } from './pages/EmployerDashboardPage';
import { EmployerJobApplicantsPage } from './pages/EmployerJobApplicantsPage';
import { JobSeekerDashboardPage } from './pages/JobSeekerDashboardPage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RegisterPage } from './pages/RegisterPage';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          {/* Public */}
          <Route path="/" element={<BrowseJobsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Job seeker only */}
          <Route element={<ProtectedRoute role="jobseeker" />}>
            <Route path="/my-applications" element={<JobSeekerDashboardPage />} />
          </Route>

          {/* Employer only */}
          <Route element={<ProtectedRoute role="employer" />}>
            <Route path="/employer" element={<EmployerDashboardPage />} />
            <Route path="/employer/jobs/:jobId/applicants" element={<EmployerJobApplicantsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}
