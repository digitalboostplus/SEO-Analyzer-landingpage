import { metrics } from '../data/content';

const MetricsPanel = () => (
  <section className="card-surface p-6">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="highlight-badge">Success Measures</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Track adoption, performance, and perceived value</h3>
        <p className="mt-3 text-sm text-slate-300">
          The analytics layer surfaces operational excellence and customer impact—ensuring audits stay fast, reliable, and
          revenue-generating.
        </p>
      </div>
      <div className="rounded-2xl border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">
        <p className="font-semibold uppercase tracking-wide">Target Outcomes</p>
        <p className="text-xs text-success/80">Grow monthly audits while keeping turnaround time under 60 seconds.</p>
      </div>
    </div>
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {metrics.map((metric) => (
        <div key={metric.label} className="rounded-2xl border border-slate-800/60 bg-slate-950/70 p-4">
          <p className="text-sm font-semibold text-white">{metric.label}</p>
          <p className="mt-2 text-xs text-slate-300">{metric.value}</p>
        </div>
      ))}
    </div>
  </section>
);

export default MetricsPanel;
