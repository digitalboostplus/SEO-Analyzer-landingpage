import Hero from './components/Hero';
import CategoryScoreCard from './components/CategoryScoreCard';
import GradeLegend from './components/GradeLegend';
import MetricsPanel from './components/MetricsPanel';
import Roadmap from './components/Roadmap';
import UseCases from './components/UseCases';
import { categoryRequirements, defaultCategoryMetrics } from './data/content';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 pb-16 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <span className="text-xl font-bold">SEO</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">SEO Analyzer</h2>
              <p className="text-xs uppercase tracking-wide text-slate-400">Website SEO Grade & Audit Tool</p>
            </div>
          </div>
          <nav className="hidden gap-4 text-sm text-slate-300 md:flex">
            <a href="#categories" className="transition hover:text-primary">
              Categories
            </a>
            <a href="#grading" className="transition hover:text-primary">
              Grading
            </a>
            <a href="#use-cases" className="transition hover:text-primary">
              Use Cases
            </a>
            <a href="#roadmap" className="transition hover:text-primary">
              Roadmap
            </a>
          </nav>
        </header>

        <Hero />

        <section id="categories">
          <CategoryScoreCard metrics={defaultCategoryMetrics} requirements={categoryRequirements} />
        </section>

        <section id="grading">
          <GradeLegend />
        </section>

        <MetricsPanel />

        <section id="use-cases">
          <UseCases />
        </section>

        <section id="roadmap">
          <Roadmap />
        </section>

        <footer className="mt-6 rounded-3xl border border-slate-800/60 bg-slate-900/70 p-6 text-sm text-slate-400">
          <p className="font-semibold text-slate-200">Security, Scalability & Automation Ready</p>
          <p className="mt-2">
            Respectful crawling with rate limiting, encrypted report storage, multi-tenant isolation, and webhook notifications
            ensure the platform scales with agency demand. Localization and advanced categories stay on the roadmap without
            disrupting the core experience.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
