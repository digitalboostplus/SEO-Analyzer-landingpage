import { gradeLegend } from '../data/content';

const GradeLegend = () => (
  <div className="card-surface p-6">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="highlight-badge">Grading Model</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Transparent scoring translates to confident decisions</h3>
        <p className="mt-3 text-sm text-slate-300">
          Configurable numeric thresholds map to universally recognizable grades. Use the defaults or tailor them for each tenant
          or campaign while keeping stakeholders aligned on success criteria.
        </p>
      </div>
      <div className="rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">
        <p className="font-semibold uppercase tracking-wide">Default Weights</p>
        <p className="text-xs text-primary/80">On-Page, Performance, Links, Usability, and Social each contribute 20%.</p>
      </div>
    </div>
    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {gradeLegend.map((item) => (
        <div key={item.label} className="rounded-2xl border border-slate-800/60 bg-slate-950/70 p-4">
          <p className="text-lg font-semibold text-white">{item.label}</p>
          <p className="mt-2 text-xs text-slate-300">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default GradeLegend;
