# Step 1: Plan the Architecture

#### Before touching code, design the system.

## Container Breakdown

```
┌──────────────────────────────────────────────────────────┐
│                    Production Stack                      │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────┐                                         │
│  │   nginx    │ ← Reverse proxy, SSL termination        │
│  │   :80,:443 │                                         │
│  └─────┬──────┘                                         │
│        │                                                │
│  ┌─────┴──────┬─────────────┐                          │
│  │            │             │                          │
│  ▼            ▼             ▼                          │
│ ┌──────┐  ┌──────┐    ┌─────────┐                     │
│ │React │  │Express│    │ Admin   │                     │
│ │ SPA  │  │  API  │    │ Panel   │                     │
│ │ :3000│  │ :5000 │    │ (Future)│                     │
│ └──────┘  └───┬───┘    └─────────┘                     │
│               │                                         │
│          ┌────┴────┐                                    │
│          ▼         ▼                                    │
│      ┌────────┐ ┌──────┐                               │
│      │MongoDB │ │Redis │                               │
│      │ :27017 │ │ :6379│                               │
│      └────────┘ └──────┘                               │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Network Design

**Three-tier architecture for security:**

```
┌─────────────────────────────────────────────────────────┐
│  frontend-network (Public Tier)                        │
│    - nginx                                             │
│    - React frontend                                    │
└────────────┬────────────────────────────────────────────┘
             │
┌────────────┴────────────────────────────────────────────┐
│  backend-network (Application Tier)                    │
│    - Express API (bridge between frontend and data)    │
└────────────┬────────────────────────────────────────────┘
             │
┌────────────┴────────────────────────────────────────────┐
│  data-network (Data Tier)                              │
│    - MongoDB                                           │
│    - Redis                                             │
└─────────────────────────────────────────────────────────┘
```

**Why three networks?**

- Frontend can't directly access database (security)
- Backend bridges frontend and data tiers
- Data tier is completely isolated from public access

### Volume Strategy

**What needs persistence:**

- **MongoDB data:** `/data/db` → `mongo-data` volume
- **Redis data:** `/data` → `redis-data` volume
- **nginx SSL certs:** `/etc/nginx/certs` → `nginx-certs` volume
- **Uploaded files:** `/app/uploads` → `app-uploads` volume

**What doesn't need persistence:**

- Application code (baked into images)
- Frontend build artifacts (rebuilds are fast)
- Logs (use external logging service in production)

## Step 2: Project Structure

```
mern-multi-container/
├── backend/
│   ├── src/
│   │   ├── index.ts
│   │   ├── routes/
│   │   │   └── user.route.ts
│   │   ├── controllers/
│   │   │   └── user.controller.ts
│   │   ├── models/
│   │   │   └── user.model.ts
│   │   ├── config/
│   │   │   └── config.ts
│   │   └── middleware/
│   │       └── validateRequest.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   ├── Dockerfile.dev
│   ├── .dockerignore
│   ├── .env.example
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── components/
│   ├── package.json
│   ├── vite.config.ts
│   ├── Dockerfile
│   ├── Dockerfile.dev
│   ├── .dockerignore
│   └── .env
├── nginx/
│   ├── nginx.conf
│   └── Dockerfile
├── docker-compose.yml
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── .env
├── .env.example
└── README.md
```
