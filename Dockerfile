# Root Dockerfile for deploying Backend Server on Render
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

# Copy server dependencies
COPY server/package*.json ./

# Install production dependencies
RUN npm ci --omit=dev || npm install --omit=dev

# Copy server source files
COPY server/ .

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:${PORT:-5000}/api/health || exit 1

CMD ["node", "server.js"]
