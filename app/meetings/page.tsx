
export default function MeetingsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="mb-3 text-3xl font-bold">Meetings & Events</h1>
        <p className="mb-6 text-sm text-slate-300 md:text-base">
          Here you can find upcoming and recent sessions of the AI Midwest Club.
          For now these are sample entries. Later we&apos;ll connect this page
          to a calendar or database.
        </p>

        <div className="space-y-4">
          {/* Example upcoming meeting */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-wide text-emerald-300">
              Upcoming
            </p>
            <h2 className="mt-1 text-lg font-semibold">
              Intro to Practical LLMs
            </h2>
            <p className="text-xs text-slate-400">
              Date: 25 Nov 2025 · Time: 7:00–8:00 PM (CST)
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Overview of how to use large language models for everyday tasks,
              workflows, and automations.
            </p>
          </div>

          {/* Example past meeting */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Past Session
            </p>
            <h2 className="mt-1 text-lg font-semibold">
              Getting Started with Python for AI
            </h2>
            <p className="text-xs text-slate-400">
              Date: 15 Nov 2025 · Recording and slides will be linked later.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
