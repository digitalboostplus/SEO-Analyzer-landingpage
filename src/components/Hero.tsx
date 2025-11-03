import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/10 to-transparent opacity-60" />
      <div className="relative z-10 grid gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-4 w-4" /> Website SEO Grade & Audit Tool
          </div>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Deliver lightning-fast SEO diagnostics with numeric scores, letter grades, and actionable fixes.
          </h1>
          <p className="max-w-3xl text-base text-slate-300 md:text-lg">
            Empower website owners, agencies, and automation teams to uncover SEO gaps across on-page, performance, links,
            usability, and social pillars. Launch audits instantly, surface critical issues, and share beautiful white-label
            reports that accelerate decision making.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-3xl font-semibold text-white">60s</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">Audit Turnaround Goal</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-3xl font-semibold text-white">5</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">Core Categories</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-3xl font-semibold text-white">A-F</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">Letter Grades</p>
            </div>
          </div>
          <button className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition hover:bg-primary/90">
            Explore the Audit Journey
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        <div className="gradient-border hidden h-full w-full flex-col justify-between rounded-[26px] bg-slate-900/80 p-6 text-sm text-slate-200 lg:flex">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">Automated Workflow</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">From URL input to insight in three steps</h2>
            <ul className="mt-4 space-y-4">
              {[
                {
                  title: 'Crawl & Collect',
                  description: 'Respect robots.txt, fetch metadata, and gather performance metrics via Lighthouse APIs.',
                },
                {
                  title: 'Score & Grade',
                  description: 'Apply configurable weights to produce numeric scores and universal letter grades.',
                },
                {
                  title: 'Report & Automate',
                  description: 'Render interactive dashboards, export PDFs, and trigger webhooks or CRM workflows.',
                },
              ].map((step) => (
                <li key={step.title} className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-4">
                  <p className="text-sm font-semibold text-white">{step.title}</p>
                  <p className="mt-1 text-xs text-slate-300">{step.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-400">Value Promise</p>
            <p className="mt-1 text-sm text-slate-200">
              Clarity for non-technical stakeholders, automation-ready outputs for agencies, and scalability for high-volume audit
              programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
