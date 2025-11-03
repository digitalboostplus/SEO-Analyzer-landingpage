import { useState } from 'react';
import { Award, CircleCheck, CircleDashed, CircleX } from 'lucide-react';
import type { CategoryMetric, RequirementItem } from '../data/content';

interface CategoryScoreCardProps {
  metrics: CategoryMetric[];
  requirements: Record<string, RequirementItem[]>;
}

const CategoryScoreCard = ({ metrics, requirements }: CategoryScoreCardProps) => {
  const [activeMetric, setActiveMetric] = useState(metrics[0]?.name ?? '');

  return (
    <div className="card-surface p-6 shadow-xl">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <p className="highlight-badge">Category Insights</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Five Pillars of the Audit</h3>
          <p className="mt-2 text-sm text-slate-300">
            Numeric scores and letter grades reveal where to focus first. Select a category to explore the checks that feed the
            score and actionable remediation steps.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {metrics.map((metric) => {
            const isActive = metric.name === activeMetric;
            return (
              <button
                key={metric.name}
                type="button"
                onClick={() => setActiveMetric(metric.name)}
                className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  isActive
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-slate-800 text-slate-200 hover:border-primary hover:text-primary'
                }`}
              >
                {metric.name}
              </button>
            );
          })}
        </div>
      </div>

      {metrics.map((metric) => (
        <div key={metric.name} className={metric.name === activeMetric ? 'mt-6 block' : 'hidden'}>
          <div className="grid gap-6 lg:grid-cols-5">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/70 p-5 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <span className="metric-pill"><Award className="h-4 w-4" /> Score & Grade</span>
                  <span className="text-xs text-slate-400">Weighted</span>
                </div>
                <div className="mt-4 flex items-baseline gap-3">
                  <p className="text-5xl font-bold text-white">{metric.score}</p>
                  <p className="rounded-md border border-primary/40 bg-primary/10 px-2 py-1 text-lg font-semibold text-primary">
                    {metric.grade}
                  </p>
                </div>
                <p className="mt-4 text-sm text-slate-300">{metric.description}</p>
                <div className="mt-5 space-y-3">
                  {metric.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3 rounded-xl border border-slate-800/70 bg-slate-950/50 p-3">
                      <CircleDashed className="mt-0.5 h-4 w-4 text-primary" />
                      <p className="text-sm text-slate-200">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="grid gap-4">
                  {requirements[metric.name]?.map((section) => (
                    <div key={section.title} className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-5">
                      <div className="flex items-center gap-3">
                        <CircleCheck className="h-5 w-5 text-success" />
                        <h4 className="text-lg font-semibold text-slate-100">{section.title}</h4>
                      </div>
                      <ul className="mt-3 space-y-2 text-sm text-slate-300">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="rounded-2xl border border-warning/30 bg-warning/10 p-5 text-sm text-warning">
                    <div className="flex items-center gap-2 font-semibold uppercase tracking-wide">
                      <CircleX className="h-4 w-4" /> Critical Alerts
                    </div>
                    <p className="mt-2 text-xs text-warning/80">
                      The audit flags broken links, missing metadata, and severe performance regressions as critical, ensuring your
                      team can triage the highest impact issues immediately.
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryScoreCard;
