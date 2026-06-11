# Expense Tracker

A full-stack expense tracker with category-based logging, monthly filtering, and a dashboard of spending summaries and trends. Built as a feature-driven mono-repo: an Express + Mongoose API and a React 19 SPA that mirrors the backend domain 1:1.

## Stack

**Backend** — Express 4 · Mongoose 8 · TypeScript 5 · Zod
**Frontend** — React 19 · Vite 5 · TanStack Query v5 · React Hook Form · Recharts · Tailwind v4

## Project layout

```
expense-tracker/
├── backend/                       # Express API
│   └── src/app/modules/expenses/  # route · controller · service · validation · model · interface
└── frontend/                      # React SPA
    └── src/features/expenses/     # components · hooks · types (mirrors backend domain)
```

The backend follows a per-feature module pattern: routes wire endpoints, controllers never touch the DB, services own all logic and aggregation, Zod validates every input via `validateRequest`. The frontend mirrors the same domain — pages orchestrate, the `expenses` feature executes, and all server state flows through TanStack Query.

## Prerequisites

- Node.js 20+
- A running MongoDB instance (local or Atlas)

## Getting started

### 1. Backend

```bash
cd backend
cp .env.example .env        # set PORT and MONGO_URI
npm install
npm run dev                 # ts-node-dev on http://localhost:5000
```

Environment variables (`.env`):

| Variable    | Description               | Example                                       |
| ----------- | ------------------------- | --------------------------------------------- |
| `PORT`      | API port                  | `5000`                                         |
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/expense-tracker`   |

### 2. Frontend

```bash
cd frontend
npm install
npm run dev                 # Vite on http://localhost:5173
```

The SPA talks to the API at `http://localhost:5000/api` (configured in `src/lib/axios.ts`). CORS on the backend is pinned to `http://localhost:5173`.

## API

Base path: `/api/expenses`. Every response uses the envelope `{ statusCode, success, message, data }`.

| Method   | Endpoint    | Description                                                            |
| -------- | ----------- | --------------------------------------------------------------------- |
| `GET`    | `/summary`  | Dashboard data: this-month total, all-time total per category, 6-month trend |
| `GET`    | `/`         | List expenses (newest first); filters: `category`, `month`, `year`    |
| `POST`   | `/`         | Create an expense (Zod-validated)                                      |
| `DELETE` | `/:id`      | Delete an expense by id                                                |

A `GET /health` endpoint returns `{ status: 'ok' }`.

**Expense shape**

```ts
{
  amount: number          // positive
  category: 'Food' | 'Transport' | 'Utilities' | 'Entertainment' | 'Other'
  description: string     // 1–200 chars
  date: Date
}
```

## Scripts

| Location   | Command           | Description                          |
| ---------- | ----------------- | ------------------------------------ |
| `backend`  | `npm run dev`     | Start API with hot reload            |
| `backend`  | `npm run build`   | Compile TypeScript to `dist/`        |
| `backend`  | `npm start`       | Run the compiled server              |
| `frontend` | `npm run dev`     | Start Vite dev server                |
| `frontend` | `npm run build`   | Type-check and build for production   |
| `frontend` | `npm run preview` | Preview the production build         |
