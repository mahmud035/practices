# Job Board

A full-stack, two-role job board built to drill the patterns shared by the Live
Auction Platform and AI Support SaaS: **role-based access control (RBAC)**,
**service-layer ownership scoping**, **offset pagination**, and **fire-and-forget
transactional email**.

Roles: **Employer** and **Job Seeker**. The role lives in the JWT payload and is
enforced server-side on every protected route — never trusted from the client.

## Stack

| Layer | Tech |
|---|---|
| Backend | Node, Express 4, TypeScript, Mongoose 8, Zod, JWT (HTTP-only cookie), Multer, Cloudinary, Nodemailer |
| Frontend | React 19, TypeScript, Vite 5, TanStack Query v5, React Router 6, React Hook Form + Zod, Tailwind v4 |
| Database | MongoDB |

Backend runs on **:5000**, frontend on **:5173**.

## Architecture

Feature-driven, with the frontend mirroring backend domains 1:1.

```
backend/src/
  app.ts, server.ts
  config/cloudinary.ts
  app/
    middlewares/   authenticate · authorizeRole · validateRequest · globalErrorHandler
    utils/         sendResponse · catchAsync · ApiError · sendEmail
    modules/
      auth/         \
      jobs/          }  each: route · controller · service · validation · model · interface
      applications/ /

frontend/src/
  lib/        axios · queryClient · api (envelope types) · format
  context/    AuthContext (role derived from GET /me)
  routes/     ProtectedRoute (role-gated)
  components/ui/  Button · Field · Badge · Modal · Pagination · Skeleton · States · Navbar
  features/   auth · jobs · applications  (types + hooks + components)
  pages/      Browse · Login · Register · EmployerDashboard · Applicants · MyApplications
```

**Enforcement model**

- `authenticate` verifies the JWT cookie and attaches `{ _id, role }` to `req.user`.
- `authorizeRole('employer' | 'jobseeker')` gates routes at the edge.
- **Ownership checks live in the service layer** (`jobsService.verifyOwnership`),
  not in controllers — reused by jobs and by the applications module.
- Every endpoint returns the envelope `{ statusCode, success, message, data }`.
- Validation is defence-in-depth: Zod (`validateRequest`) → service → model.
- The delete-job 409-guard is **orchestrated in the controller** so `jobs.service`
  never imports `applications.service` — module dependencies stay one-directional
  (`applications → jobs` only).

## API

All responses use the `{ statusCode, success, message, data }` envelope.

### Auth
| Method | Path | Access | Notes |
|---|---|---|---|
| POST | `/api/auth/register` | public | `{ name, email, password, role }` |
| POST | `/api/auth/login` | public | sets HTTP-only `token` cookie |
| POST | `/api/auth/logout` | public | clears cookie |
| GET | `/api/auth/me` | authenticated | current user + role |

### Jobs
| Method | Path | Access | Notes |
|---|---|---|---|
| POST | `/api/jobs` | employer | create (owner stamped from token) |
| GET | `/api/jobs/my` | employer | own listings only |
| PATCH | `/api/jobs/:id/close` | employer + owner | sets `status: 'closed'` |
| DELETE | `/api/jobs/:id` | employer + owner | **409** if applications exist |
| GET | `/api/jobs` | public | browse open + in-deadline; filters `type`, `location`, `keyword`; offset pagination → `{ data, total, page, totalPages }`, 10/page |
| GET | `/api/jobs/:id` | public | single job detail |

### Applications
| Method | Path | Access | Notes |
|---|---|---|---|
| POST | `/api/applications/:jobId` | jobseeker | `coverLetter` + optional PDF CV; **409** on duplicate; fires confirmation email |
| GET | `/api/applications/my` | jobseeker | own applications + status |
| GET | `/api/applications/job/:jobId` | employer + owner | applicants for an owned job (**403** otherwise) |
| PATCH | `/api/applications/:id/status` | employer + owner | `{ status: pending \| reviewed \| rejected }` |

## Getting started

### Prerequisites
- Node 18+ and a running MongoDB (default `mongodb://localhost:27017/job-board`).

### Backend
```bash
cd backend
npm install
cp .env.example .env      # fill in values (see below)
npm run dev               # http://localhost:5000
```

### Frontend
```bash
cd frontend
npm install
npm run dev               # http://localhost:5173
```

### Environment variables (`backend/.env`)
```
PORT=5000
NODE_ENV=development
CLIENT_ORIGIN=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/job-board
JWT_SECRET=<long-random-secret>
JWT_EXPIRES_IN=7d
CLOUDINARY_CLOUD_NAME=assetvault
CLOUDINARY_API_KEY=<key>
CLOUDINARY_API_SECRET=<secret>
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
```

- **Cloudinary** is required only for CV uploads; CVs land under
  `clients/mahmud/job-board/cvs/`. The PDF-only check runs before upload.
- **SMTP** is optional. With the `SMTP_*` vars unset, the confirmation email is
  skipped and logged — the application still succeeds (email is fire-and-forget
  and never fails the HTTP response).

## Feature summary

**Employer** — post jobs; view own listings only; close a job (keeps it); delete a
job (blocked with 409 if it has applications); view applicants for an owned job
(403 on another employer's job); update an application's review status.

**Job Seeker** — browse open jobs with type / location / keyword filters and
pagination; apply with a cover letter + optional PDF CV (no duplicate applications);
view own applications and their status.

**Frontend** — role-conditional navigation derived from `/me`; protected routes;
TanStack Query for all server state; explicit loading / empty / error states with
skeleton loaders on every data-driven view.

## Verification

- Backend RBAC / ownership matrix exercised via `curl` (cookie jar) across all
  three modules — role guards (403), ownership (403/404), duplicate (409),
  delete-guard (409), pagination envelope, email-skip logging.
- Full both-role journey verified end-to-end via a headless-browser smoke test
  (register → apply → my applications → logout → employer login → dashboard →
  applicants → RBAC redirect), with zero console errors.
