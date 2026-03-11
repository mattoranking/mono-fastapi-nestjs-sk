# FaskPlusAI Frontend

Next.js application for the FaskPlusAI app.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI**: [React 19](https://react.dev/) + [Tailwind CSS 3](https://tailwindcss.com/)
- **Language**: TypeScript 5

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
frontend/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + Tailwind
│   ├── clients/
│   │   └── page.tsx        # Client management page
│   └── chat/
│       └── page.tsx        # AI chat interface
├── components/             # Shared React components
├── lib/
│   └── api.ts              # Backend API client
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── Dockerfile              # Production Docker image
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL (client-side) | `http://localhost:8000` |
| `NODE_ENV` | Environment mode | `development` |

## Docker

The Dockerfile uses [Next.js standalone output](https://nextjs.org/docs/app/api-reference/config/next-config-js/output) for optimized production images:

```bash
docker build -t faskplusai-frontend .
docker run -p 3000:3000 faskplusai-frontend
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
