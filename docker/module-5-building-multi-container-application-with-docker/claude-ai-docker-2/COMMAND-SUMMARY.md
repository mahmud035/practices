# The Complete Command Summary

Here's the entire setup in one place:

```bash
# 1. Create network and volume
docker network create myapp-network
docker volume create mongo-data

# 2. Start MongoDB
docker run -d --rm \
  --name mongodb-container \
  --network myapp-network
  -v mongo-data:/data/db \
  mongo

# 3. Build backend image
docker build -t ts-backend:dev .

# 4. Start backend
docker run -d --rm \
  -p 5000:5000 \
  --name dev-backend \
  --network myapp-network \
  --env-file .env
  -v ts-docker-logs:/app/logs \
  -v "$(pwd)":/app \
  -v /app/node_modules \
  ts-backend:dev

# 5. Verify
docker ps -a
docker logs -f backend
docker logs -f mongodb-container
```
