# Markle

An Instagram-like app monorepo. MVP includes auth, profiles, posting, feed, likes/comments, and notifications. Web (Next.js) and API (NestJS).

## Requirements
- Node.js LTS (managed via nvm recommended)
- Docker (for Postgres and Redis)

## Getting Started

### 1) Install dependencies
```bash
npm install --workspaces
```

### 2) Start infrastructure (DB, cache)
```bash
docker compose up -d
```

### 3) Run services
- Web
```bash
npm run dev --workspace apps/web
```
- API
```bash
npm run start:dev --workspace services/api
```

## Project Structure
- apps/web: Next.js 14 (App Router, Tailwind)
- services/api: NestJS (REST), TypeScript

## Environment
Create `.env.local` in `apps/web` and `.env` in `services/api` as needed.

## Scripts
- `npm run dev`        Run all workspaces in dev (if configured)
- `npm run build`      Build all workspaces
- `npm run lint`       Lint all workspaces
- `npm run format`     Prettier format

## License
MIT
