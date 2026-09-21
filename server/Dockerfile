# Multi-stage / Production Dockerfile for Express Backend
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Copy dependency definitions
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev || npm install --omit=dev

# Copy server application source code
COPY . .

# Expose default port (Render will inject PORT environment variable dynamically)
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:${PORT:-5000}/api/health || exit 1

# Start the application
CMD ["node", "server.js"]
