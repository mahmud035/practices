# Notes App

A small full-stack notes CRUD app — the minimal cut of the stack used across these
practice projects: **JWT auth in an HTTP-only cookie**, **per-user ownership
scoping in the service layer**, and a **feature-driven frontend that mirrors the
backend domains 1:1**.

Every note is owned by the user who created it. Ownership is enforced server-side
on every read and write — the `userId` comes from the verified token, never from
the client.

## Stack

| Layer | Tech |
|---|---|
| Backend | Node, Express 4, TypeScript, Mongoose 8, Zod, JWT (HTTP-only cookie), bcrypt |
| Frontend | React 19, TypeScript, Vite 5, TanStack Query v5, React Router 6, React Hook Form + Zod, Tailwind v4 |
| Database | MongoDB |

Backend runs on **:5000**, frontend on **:5173**.

## Architecture

Feature-driven, with the frontend mirroring backend domains 1:1.

```
backend/src/
  app.ts, server.ts
  app/
    middlewares/   authenticate · validateRequest
    modules/
      auth/   \
      notes/   }  each: route · controller · service · validation · model · interface

frontend/src/
  lib/        axios (envelope + credentials)
  features/   auth · notes  (types + hooks + components)
  pages/      AuthPage · NotesPage
  App.tsx     routing
```

**Enforcement model**

- `authenticate` verifies the JWT cookie and attaches the user to `req.user`.
- **Ownership lives in the service layer** — every notes query is scoped by
  `{ _id, userId }`, so a missing or unowned note returns `null` (→ 404) and is
  never leaked or mutated.
- The whole `/api/notes` router sits behind `authenticate` (`router.use`).
- Every endpoint returns the envelope `{ statusCode, success, message, data }`.
- Validation is defence-in-depth: Zod (`validateRequest`) → service → model.

## API

All responses use the `{ statusCode, success, message, data }` envelope.

### Auth
| Method | Path | Access | Notes |
|---|---|---|---|
| POST | `/api/auth/register` | public | `{ name, email, password }` (password min 6) |
| POST | `/api/auth/login` | public | sets HTTP-only `token` cookie (7d) |
| POST | `/api/auth/logout` | public | clears cookie |
| GET | `/api/auth/me` | authenticated | current user |

### Notes
| Method | Path | Access | Notes |
|---|---|---|---|
| GET | `/api/notes` | authenticated | own notes only, newest first |
| POST | `/api/notes` | authenticated | `{ title, body }`, owner stamped from token |
| GET | `/api/notes/:id` | authenticated + owner | **404** if not found or not owned |
| PUT | `/api/notes/:id` | authenticated + owner | partial `{ title?, body? }` |
| DELETE | `/api/notes/:id` | authenticated + owner | **404** if not found or not owned |

`GET /health` returns the envelope with `data: null` for liveness checks.

## Getting started

### Prerequisites
- Node 18+ and a running MongoDB (default `mongodb://localhost:27017/notes-app`).

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
CLIENT_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/notes-app
JWT_SECRET=<long-random-secret>
```

## Feature summary

**Auth** — register, login, logout, and a `/me` session check. Passwords are
hashed with bcrypt; the JWT is issued in an HTTP-only cookie and sent with every
request via `credentials: 'include'`.

**Notes** — list, create, view, edit, and delete notes. A user only ever sees and
touches their own notes; ownership is enforced on every operation in the service
layer.

**Frontend** — TanStack Query for all server state; React Hook Form + Zod for the
auth and note forms; explicit loading / empty / error states on every data-driven
view.
