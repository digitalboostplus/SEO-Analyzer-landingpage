import { roadmap } from '../data/content';

const Roadmap = () => (
  <section className="card-surface p-6">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="highlight-badge">Roadmap</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">Milestones from MVP to enterprise scale</h3>
        <p className="mt-3 text-sm text-slate-300">
          Build momentum with a phased delivery. Start with a laser-focused MVP, expand to white-label integrations, and graduate
          to a multi-tenant platform that serves large agency networks.
        </p>
      </div>
      <div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 px-4 py-3 text-xs text-slate-300">
        Tailored for automation agencies needing predictable delivery timelines and integration checkpoints.
      </div>
    </div>
    <div className="mt-8 grid gap-5 lg:grid-cols-3">
      {roadmap.map((phase) => (
        <article key={phase.phase} className="rounded-2xl border border-slate-800/60 bg-slate-950/70 p-5">
          <p className="text-xs uppercase tracking-wide text-primary">{phase.phase}</p>
          <h4 className="mt-2 text-lg font-semibold text-white">{phase.focus}</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {phase.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default Roadmap;
