# Use Node.js as base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port and start the application
EXPOSE 5000
CMD ["node", "server.js"]

