# Use Node.js as base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port and start the application
EXPOSE 3000
CMD ["node", "server.js"]
