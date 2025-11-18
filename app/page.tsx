export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top bar */}
      <header className="border-b border-slate-800 bg-slate-900/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="text-lg font-semibold tracking-tight">
            AI Midwest Club
          </div>
          <nav className="flex gap-4 text-sm">
            <a href="#about" className="hover:text-emerald-300">
              About
            </a>
            <a href="#events" className="hover:text-emerald-300">
              Meetings
            </a>
            <a href="#materials" className="hover:text-emerald-300">
              Learning
            </a>
            <a href="#join" className="hover:text-emerald-300">
              Join
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-12 md:flex-row md:items-center">
          <div className="flex-1 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Learn · Build · Share
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              AI Midwest Club
            </h1>
            <p className="max-w-xl text-sm text-slate-300 md:text-base">
              A community for students and professionals in the Midwest to
              explore practical AI — through weekly meetups, hands-on projects,
              and shared learning materials.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#join"
                className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-300"
              >
                Request to Join here
              </a>
              <a
                href="#events"
                className="rounded-full border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-50 hover:border-emerald-300"
              >
                View Meetings
              </a>
            </div>
          </div>

          <div className="mt-6 flex-1 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-200 md:mt-0">
            <h2 className="mb-2 text-sm font-semibold text-emerald-300">
              What happens in AI Midwest Club?
            </h2>
            <ul className="list-disc space-y-1 pl-4">
              <li>Weekly sessions on core AI & ML topics</li>
              <li>Hands-on demos with open-source tools</li>
              <li>Shared drive of curated learning materials</li>
              <li>Project ideas and collaborations for the community</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-b border-slate-800 bg-slate-950/80"
      >
        <div className="mx-auto max-w-5xl space-y-3 px-4 py-10">
          <h2 className="text-xl font-semibold">About the Club</h2>
          <p className="text-sm text-slate-300 md:text-base">
            AI Midwest Club is a learning-focused community. We meet regularly
            to break down AI concepts into practical pieces, share real-world
            use cases, and discuss how AI can be applied in industry, research,
            and personal projects.
          </p>
        </div>
      </section>

      {/* Meetings / Events */}
      <section id="events" className="border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <h2 className="mb-3 text-xl font-semibold">Meetings & Events</h2>
          <p className="mb-4 text-sm text-slate-300 md:text-base">
            We plan to host weekly or bi-weekly sessions. This section will
            later be connected to a calendar and database so members can see
            upcoming events and join links.
          </p>
          <div className="rounded-2xl border border-dashed border-slate-700 p-4 text-sm text-slate-400">
            Upcoming: embed Google Calendar or a custom events list here.
          </div>
        </div>
      </section>

      {/* Learning Materials */}
      <section id="materials" className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <h2 className="mb-3 text-xl font-semibold">Learning Materials</h2>
          <p className="mb-4 text-sm text-slate-300 md:text-base">
            All AI-related slides, links, code notebooks, and recordings will be
            organized in a central repository. Later, this section will be
            connected to a real database so members can search and filter by
            topic.
          </p>
          <div className="grid gap-4 text-sm text-slate-200 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="mb-1 font-semibold">Foundations</h3>
              <p className="text-xs text-slate-400">
                Linear algebra, probability, ML basics, evaluation.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="mb-1 font-semibold">Applied LLMs</h3>
              <p className="text-xs text-slate-400">
                Prompting, RAG, tools, and real-world use cases.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="mb-1 font-semibold">Projects</h3>
              <p className="text-xs text-slate-400">
                Small team projects to practice AI in action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join section */}
      <section id="join" className="bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <h2 className="mb-3 text-xl font-semibold">Join the Club</h2>
          <p className="mb-4 text-sm text-slate-300 md:text-base">
            We&apos;ll soon open a registration form where interested members
            can request to join. For now, this section is a placeholder for the
            future sign-up workflow.
          </p>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-sm text-slate-200">
            <p className="mb-2">
              Coming soon: registration form with approval flow and member area
              login.
            </p>
            <p className="text-xs text-slate-400">
              This will later connect to Supabase (database + auth) so that only
              approved members can access internal materials.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 text-xs text-slate-500">
          <span>© {year} AI Midwest Club</span>
          <span>Built for learning & collaboration.</span>
        </div>
      </footer>
    </main>
  );
}
