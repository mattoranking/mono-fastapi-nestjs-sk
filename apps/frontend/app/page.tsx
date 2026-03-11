import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold tracking-tight">FaskPlusAI</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-md">
          A full-stack monorepo starter kit built with NextJS (frontend) and FastAPI (backend). Pre-configured with Turborepo, Docker, PostgreSQL, Tailwind CSS, and AI tooling — clone and start building.
        </p>

        <div className="flex gap-4">
          <Link
            href="/users"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            View Users
          </Link>
          <Link
            href="/chat"
            className="rounded-lg border border-gray-300 dark:border-gray-700 px-6 py-3 font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            AI Chat
          </Link>
        </div>
      </main>
    </div>
  );
}
