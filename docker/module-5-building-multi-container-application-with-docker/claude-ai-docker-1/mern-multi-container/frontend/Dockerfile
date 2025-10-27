# Use the official Node.js image as the base
FROM node:22-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json into the container
COPY package*.json ./

# Install dependencies (Use npm ci for consistent installs)
RUN npm ci

# Copy the application code into the container
COPY . .

# Expose port 5173 (tells Docker this container listens on 5173)
EXPOSE 5173

# Vite dev server
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]