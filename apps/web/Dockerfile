# Build stage
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runtime stage
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY package.json package-lock.json next.config.ts ./
RUN npm ci --omit=dev && adduser -D -H nodeuser && chown -R nodeuser:nodeuser /app
USER nodeuser
EXPOSE 3000
CMD ["npx", "next", "start", "-p", "3000"]


