export default function Home() {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:3001";
  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <main className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold">Markle</h1>
        <p className="text-neutral-600">
          Welcome. Backend is running separately. Use the links below to verify.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            className="rounded-lg border border-neutral-200 px-4 py-2 hover:bg-neutral-50"
            href={`${apiBase}/health`}
            target="_blank"
            rel="noreferrer"
          >
            API Health
          </a>
          <a
            className="rounded-lg border border-neutral-200 px-4 py-2 hover:bg-neutral-50"
            href="/"
          >
            Home
          </a>
        </div>
      </main>
    </div>
  );
}
