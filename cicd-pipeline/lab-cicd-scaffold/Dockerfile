# Use the official Node.js image as the base
FROM node:24-alpine

# Set early: makes npm ci skip dev deps and tells Express/libs to use prod paths
ENV NODE_ENV=production

# Set working directory inside the container
WORKDIR /app

# Copy package.json into the container
COPY package*.json ./

# Install dependencies (Use npm ci for consistent installs)
RUN npm ci --omit=dev

# Copy the applications code into the container. Source layer — copied AFTER deps. --chown so files are owned by the runtime user.
COPY --chown=node:node . .

# Expose port 3000 (tells Docker this container listens on 3000)
EXPOSE 3000

# Container self-reports health; Coolify can read this in Batch 3.
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:3000/health || exit 1

# Drop root. A container breakout lands as 'node', not root-on-host.
USER node

# Exec form → node is PID 1 and receives SIGTERM cleanly on stop.
CMD [ "node", "server.js" ]


