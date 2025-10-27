# Steps To Build A Multi Container Application

# MongoDB -> Backend -> Frontend

## Prerequisites

- Docker installed
- Node.js (for local development)

## Setup

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in values
3. Build the Docker images:

```bash
   docker pull mongo
   docker build -t ts-backend:dev .
```

## Running with Docker

1. Create network and volume:

```bash
   docker network create myapp-network
   docker volume create mongo-data
```

2. Start MongoDB:

```bash
   docker run -d --rm \
   --name mongodb-container \
   --network myapp-network \
   -v mongo-data:/data/db \
   -p 27018:27017 \ 👉 Only provide port, when want to connect MongoDB + MongoDB Compass
   mongo
```

---

**Breaking it down**:

- `-d`: Run in detached mode (background)
- `--name mongodb-container`: Name the container (this becomes the **hostname**)
- `--network myapp-network`: Attach to our custom network
- `-v mongo-data:/data/db`: Mount the volume to MongoDB's data directory
- `mongo`: Use the official MongoDB image

---

3. Start Backend:

```bash
   docker run -d --rm \
   -p 5000:5000 \
   --name dev-backend \
   --network myapp-network \
   --env-file .env \
   ts-backend:dev
```

---

**Breaking it down**:

- `-d`: Detached mode
- `-p 5000:5000`: Publish port 5000 to your host
- `--name dev-backend`: Name the container
- `--network myapp-network`: Join the same network as MongoDB
- `--env-file .env`: Load environment variables from .env
- `ts-backend:dev`: The image to use

---

4. Start Frontend:

```bash
   docker run -d --rm \
   -p 3000:3000 \
   --name dev-frontend \
   --network myapp-network \
   --env-file .env \
   -v "$(pwd)":/app \
   -v /app/node_modules \
   nextjs-frontend:dev
```

---

**Breaking it down**:

- `-d`: Detached mode
- `-p 3000:3000`: Publish port 3000 to your frontend
- `--name dev-frontend`: Name the container
- `--network myapp-network`: Join the same network as MongoDB
- `--env-file .env`: Load environment variables from .env
- `-v "$(pwd)":/app`: Bind mounts
- `-v /app/node_modules`: Protect node_modules
- `nextjs-frontend:dev`: The image to use

---

5. Access the API at `http://backend-container-name:5000`

## Development

Use the dev Dockerfile with bind mounts:

```bash
   docker build -t ts-backend:dev .

   docker run -d --rm \
   -p 5000:5000 \
   --name dev-backend \
   --network myapp-network \
   --env-file .env \
   -v ts-docker-logs:/app/logs \
   -v "$(pwd)":/app \
   -v /app/node_modules \
   ts-backend:dev
```

---

**Breaking it down**:

- `-d`: Detached mode
- `-p 5000:5000`: Publish port 5000 to your host
- `--name dev-backend`: Name the container
- `--network myapp-network`: Join the same network as MongoDB
- `--env-file .env`: Load environment variables from .env
- `-v ts-docker-logs:/app/logs`: Named volume to persist logs
- `-v "$(pwd)":/app`: Bind mounts
- `-v /app/node_modules`: Protect node_modules
- `ts-backend:dev`: The image to use

---

Watch logs:

```bash
   docker logs -f dev-backend
   docker logs -f mongodb-container
```

## Stopping

```bash
   docker stop $(docker ps -aq) 2>/dev/null
```

## Sample `.env` file

```bash
# Environment
NODE_ENV=development

# Server
PORT=5000


#* Database URI
# For running on host machine
# DB_URL=mongodb://localhost:27017/ts-docker-db

# For running in container
# DB_URL=mongodb://host.docker.internal:27017/ts-docker-db

# Direct connect with MongoDB Atlas
# DB_URL=mongodb+srv://ts-docker-db:QPfUC4uoNwntdLLW@cluster1.ztm3u.mongodb.net/ts-docker-db?appName=Cluster1

# Connect MongoDB Atlas using MongoDB Compass
# DB_URL=mongodb+srv://ts-docker-db:QPfUC4uoNwntdLLW@cluster1.ztm3u.mongodb.net/ts-docker-db

#* For container to container communication
# DB_URL=mongodb://172.17.0.2:27017/ts-docker-db  # Use container IP address (here, mongodb-container)

#* ✅ Run Containers on Same Network
DB_URL=mongodb://mongodb-container/ts-docker-db     # ✅ Use container NAME (here, mongodb-container)

# Docker's DNS will resolve `mongodb-container` to the MongoDB container's IP.



# JWT Secrets (CHANGE THESE - use long random strings)
JWT_ACCESS_SECRET=664b11912a909ae38dfa90d43ab772e9af29ba3d5fb2ae64478e65f9623f2c57
JWT_ACCESS_EXPIRES_IN=1h
JWT_REFRESH_SECRET=96f82df52437caf249adbf39db90467d37bfff7fc9a8d0655b4ed4658c36e1d4
JWT_REFRESH_EXPIRES_IN=7d

# Bcrypt
BCRYPT_SALT_ROUND=12

# Cloudinary (Get these from your Cloudinary dashboard)
CLOUDINARY_CLOUD_NAME=diz7x0fne
CLOUDINARY_API_KEY=969412364628975
CLOUDINARY_API_SECRET=Dcu5WHcs8cINuJsFQAChUVmREIM
```
