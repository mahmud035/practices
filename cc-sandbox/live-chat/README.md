# Live Chat

A full-stack, real-time group chat built to drill **WebSocket-driven state** with
Socket.IO: **room-scoped broadcasting**, **server-authoritative message
persistence**, **presence tracking**, and **typing indicators** — with a typed
event contract shared 1:1 between server and client so protocol changes break
TypeScript at compile time, not at runtime.

No accounts. Pick a display name, join one of three fixed rooms (`general`,
`tech`, `random`), and chat. Presence and typing state live in server memory;
messages are persisted to MongoDB and replayed on join.

## Stack

| Layer | Tech |
|---|---|
| Backend | Node, Express 5, TypeScript, Socket.IO 4, Mongoose 9, Zod |
| Frontend | React 19, TypeScript, Vite 8, Socket.IO Client 4, TanStack Query v5, React Router 7, React Hook Form + Zod, Tailwind v4 |
| Database | MongoDB |

Backend runs on **:5000**, frontend on **:5173**.

## Architecture

Feature-driven, with the frontend mirroring the backend domain 1:1. The realtime
layer is the source of truth for messages and presence; REST is used only to
fetch room history.

```
backend/src/
  app.ts, server.ts
  app/
    middlewares/   validateRequest
    socket/        index.ts  (connection lifecycle + room events)
    modules/
      messages/    route · controller · service · validation · model · interface

frontend/src/
  lib/        axios · socket
  contexts/   SocketContext  (single shared client instance)
  hooks/      useSocket
  features/chat/
    types/      chat.types.ts  (mirrors backend socket event contracts)
    hooks/      useMessages · useTyping
    components/ MessageList · MessageCard · MessageInput · OnlineUsers · TypingIndicator
  pages/      LobbyPage · ChatPage
```

**Realtime model**

- A single Socket.IO client instance is created once and shared via
  `SocketContext`. The lobby connects and emits `join-room`; the chat page
  subscribes to inbound events.
- The server keeps an in-memory `socketId → { username, room }` map to track
  presence. Joining, leaving, and disconnecting all reconcile through one
  `handleUserLeave` path so a stale room membership can't linger.
- **Messages are server-authoritative.** A `send-message` is persisted first,
  then the DB-confirmed document is broadcast to the whole room (including the
  sender) via `receive-message` — so every client renders the same `_id` and
  `createdAt`.
- Join/leave produce `type: 'system'` messages, persisted and broadcast like
  any other.
- `typing` / `stop-typing` are ephemeral — relayed to the rest of the room
  only, never persisted.
- Room history loads over REST (`GET /api/messages/:room`, most recent 50,
  oldest-first) so the chat view is populated before the socket stream takes
  over.

**Typed event contract**

`ServerToClientEvents` and `ClientToServerEvents` are declared on the server in
`socket/index.ts` and mirrored exactly in `frontend/.../chat.types.ts`. The
`ROOMS` tuple is likewise duplicated and validated on both ends — the server
rejects unknown rooms on `join-room`, the lobby validates the room with Zod.

## API

Every REST response uses the envelope `{ statusCode, success, message, data }`.

| Method | Route | Description |
|---|---|---|
| GET | `/health` | Liveness check |
| GET | `/api/messages/:room` | Most recent 50 messages for a room, chronological |

Realtime events are documented inline in `backend/src/app/socket/index.ts`.

## Getting started

**Prerequisites:** Node 18+, a running MongoDB instance.

```bash
# Backend
cd backend
cp .env.example .env        # set MONGODB_URI / CLIENT_ORIGIN if not using defaults
npm install
npm run dev                 # http://localhost:5000

# Frontend (separate terminal)
cd frontend
npm install
npm run dev                 # http://localhost:5173
```

### Environment

`backend/.env`

| Var | Default | Purpose |
|---|---|---|
| `NODE_ENV` | `development` | Runtime mode |
| `PORT` | `5000` | API + socket server port |
| `MONGODB_URI` | `mongodb://localhost:27017/live-chat` | MongoDB connection string |
| `CLIENT_ORIGIN` | `http://localhost:5173` | Allowed CORS / socket origin |

`frontend/.env`

| Var | Default | Purpose |
|---|---|---|
| `VITE_SERVER_URL` | `http://localhost:5000` | Backend base URL for REST + socket |

## Scripts

| Location | Command | Does |
|---|---|---|
| backend | `npm run dev` | Start with hot reload (ts-node-dev) |
| backend | `npm run build` | Compile TypeScript to `dist/` |
| backend | `npm start` | Run the compiled server |
| frontend | `npm run dev` | Vite dev server |
| frontend | `npm run build` | Type-check + production build |
| frontend | `npm run preview` | Preview the production build |
