# Use the official Node.js image as the base
FROM node:lts-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json into the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the application code into the container
COPY . .

# Expose port 3000 (tells Docker this container listens on 3000)
EXPOSE 3000

# Run the application
CMD [ "node", "src/index.js" ]