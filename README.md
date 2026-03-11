# FaskPlusAI Starter App

A full-stack monorepo starter kit built with **NextJS** (frontend) and **FastAPI** (backend). Pre-configured with Turborepo, Docker, PostgreSQL, Tailwind CSS, and AI tooling — clone and start building.

---

## Tech Stack

- **Frontend**: Next.js + React + Tailwind CSS
- **Backend**: FastAPI (Python)
- **AI**: Google Gemini + MCP
- **Database**: PostgreSQL
- **Monorepo**: Turborepo + pnpm
- **Deployment**: Docker + DigitalOcean

## Getting Started

### Prerequisites

- Node.js 20+
- Python 3.13+
- pnpm 8+
- uv (Python package manager)
- Docker & Docker Compose

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd faskplusai
```

2. Install dependencies
```bash
# Install Node dependencies
pnpm install

# Install Python dependencies
cd apps/backend
uv sync
cd ../..
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your values
```

4. Start development servers

Start both frontend and backend concurrently from the project root:
```bash
pnpm start
```

Or start them individually:
```bash
# Start frontend only
pnpm start:frontend

# Start backend only
pnpm start:backend
```

5. Or use Docker
```bash
docker compose up
```

## Project Structure
```
skywise/
├── apps/
│   ├── frontend/          # Next.js application
│   │   ├── app/           # App Router pages
│   │   ├── components/    # React components
│   │   ├── lib/           # API client & utilities
│   │   └── public/        # Static assets
│   └── backend/           # FastAPI application
│       ├── faskplusai/    # Main package
│       ├── alembic/       # Database migrations
│       └── tests/         # Test suite
├── packages/              # Shared packages
├── scripts/               # Deployment scripts
├── traefik/               # Traefik proxy config
├── .github/workflows/     # CI/CD pipelines
└── compose.yml            # Docker orchestration
```

## Development

- Frontend: https://faskplusai.dev (via Traefik) or http://localhost:3000
- Backend: https://api.faskplusai.dev (via Traefik) or http://localhost:8000
- API Docs: http://localhost:8000/docs
- Traefik Dashboard: http://localhost:8080

## Deployment Workflow

### Branch Strategy

- **develop**: Development branch, no auto-deployment
- **main**: Staging environment (auto-deploys on push)
- **tags (vX.Y.Z)**: Production releases (auto-deploys on tag)

### Creating a Release

#### Option 1: Using the script (recommended)
```bash
./scripts/create-release.sh
```

Follow the prompts to select release type:
- **Major** (v2.0.0): Breaking changes
- **Minor** (v1.1.0): New features
- **Patch** (v1.0.1): Bug fixes

#### Option 2: Manual tag creation
```bash
# Ensure you're on main
git checkout main
git pull origin main

# Create and push tag
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

#### Option 3: GitHub UI

Go to Actions > Create Release > Run workflow

### Deployment Flow
```
1. Develop feature
   └─► Push to develop branch

2. Create PR: develop → main
   └─► CI runs (tests, linting)

3. Merge to main
   └─► Auto-deploy to STAGING
   └─► Test on staging environment

4. Create release tag (v1.0.0)
   └─► Auto-deploy to PRODUCTION
   └─► GitHub Release created

5. Monitor deployment
   └─► Health checks run automatically
   └─► Rollback on failure
```

### Rollback

If something goes wrong in production:
```bash
# Quick rollback
./scripts/rollback.sh

# Or manually
git checkout <previous-tag>
git push origin <previous-tag>-rollback
```

### Environments

- **Staging**: https://staging.yourdomain.com (main branch)
- **Production**: https://yourdomain.com (tags only)

## License

MIT
