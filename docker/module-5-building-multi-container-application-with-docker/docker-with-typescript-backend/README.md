# Node.js Backend API - Docker Image

A production-ready Docker image for a modular Node.js/Express backend application with MongoDB integration. Built with TypeScript for type safety and follows modern best practices for containerized development.

## 🚀 Features

- **Node.js 22 Alpine** - Lightweight, secure base image
- **Express.js** - Fast, unopinionated web framework
- **MongoDB/Mongoose** - Database integration with ODM
- **TypeScript** - Type-safe development
- **Modular Architecture** - Organized with routes, controllers, services, and validation layers
- **Zod Validation** - Robust request validation with middleware
- **JWT Authentication** - Secure token management via HTTP-only cookies
- **Hot Reload** - Development mode with automatic restarts

## 📦 Tech Stack

- **Runtime**: Node.js 22
- **Framework**: Express.js
- **Database**: MongoDB + Mongoose
- **Language**: TypeScript
- **Validation**: Zod
- **Auth**: JWT (HTTP-only cookies)
- **Frontend Integration**: React, Tailwind CSS v4, TanStack Query, Axios

## 🏗️ Architecture

This image supports a clean, modular project structure:

```
├── routes/       # API endpoints (*.route.js)
├── controllers/  # Request handlers (*.controller.js)
├── services/     # Business logic (*.services.js)
├── validation/   # Zod schemas (*.validation.js)
└── middleware/   # validateRequest & auth
```

## 🔧 Usage

```bash
# Pull the image
docker pull yourusername/your-repo-name

# Run container
docker run -p 5000:5000 \
  -e MONGODB_URI=your_mongo_connection_string \
  -e JWT_SECRET=your_jwt_secret \
  yourusername/your-repo-name
```

### Docker Compose Example

```yaml
version: '3.8'
services:
  api:
    image: yourusername/your-repo-name
    ports:
      - '5000:5000'
    environment:
      - MONGODB_URI=mongodb://mongo:27017/your_db
      - JWT_SECRET=your_secret_key
    depends_on:
      - mongo

  mongo:
    image: mongo:latest
    ports:
      - '27017:27017'
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

## 🌐 Exposed Ports

- **5000** - API server

## 📝 Environment Variables

| Variable      | Description                 | Required |
| ------------- | --------------------------- | -------- |
| `MONGODB_URI` | MongoDB connection string   | Yes      |
| `JWT_SECRET`  | Secret key for JWT signing  | Yes      |
| `PORT`        | Server port (default: 5000) | No       |
| `NODE_ENV`    | Environment mode            | No       |

## 📚 Source Code

Full source available at: [github.com/mahmud035/practices](https://github.com/mahmud035/practices/tree/main/docker/module-2/docker-with-typescript-backend)

---

**Maintained by**: mahmud035  
**Issues**: Report bugs via GitHub Issues
