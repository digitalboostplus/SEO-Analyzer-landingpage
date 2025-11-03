import { useCases } from '../data/content';

const UseCases = () => (
  <section className="card-surface p-6">
    <div className="flex items-start justify-between gap-6">
      <div>
        <p className="highlight-badge">User Stories</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">Designed for marketers, agencies, and automation pros</h3>
        <p className="mt-3 text-sm text-slate-300">
          Each persona taps into the same audit engine but tailors the output—quick self-serve diagnostics, branded PDF reports,
          or API-driven workflows that feed into downstream systems.
        </p>
      </div>
    </div>
    <div className="mt-8 grid gap-5 lg:grid-cols-2">
      {useCases.map((useCase) => (
        <article key={useCase.title} className="rounded-2xl border border-slate-800/60 bg-slate-950/70 p-5">
          <p className="text-xs uppercase tracking-wide text-primary">{useCase.title}</p>
          <h4 className="mt-2 text-lg font-semibold text-white">{useCase.persona}</h4>
          <p className="mt-2 text-sm text-slate-300">
            <strong className="text-slate-200">Goal:</strong> {useCase.goal}
          </p>
          <p className="mt-2 text-sm text-slate-300">
            <strong className="text-slate-200">Outcome:</strong> {useCase.outcome}
          </p>
        </article>
      ))}
    </div>
  </section>
);

export default UseCases;
