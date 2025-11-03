# Website SEO Grade & Audit Tool

A React + Vite concept app that transforms the SEO Analyzer boilerplate into a polished product requirements experience. The
single-page interface communicates vision, requirements, and roadmap for an automated SEO grading platform that assigns numeric
scores and letter grades across five major categories: On-Page SEO, Performance, Links, Usability, and Social.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to explore the experience.

## Available Scripts

- `npm run dev` – Start the development server.
- `npm run build` – Type-check and create an optimized production build.
- `npm run preview` – Preview the production bundle locally.
- `npm run lint` – Lint TypeScript/React source files with ESLint.

## Project Structure

```
src/
  App.tsx                # Page layout combining product story components
  components/            # Modular sections (hero, categories, grading, use cases, roadmap)
  data/content.ts        # Centralized data describing metrics, requirements, and roadmap
  styles/index.css       # Tailwind CSS entrypoint with utility helpers
```

## Technology Stack

- [Vite](https://vitejs.dev/) for fast bundling and local development.
- [React 18](https://react.dev/) with TypeScript for component-driven UI.
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
- [Lucide Icons](https://lucide.dev/) for expressive iconography.

## License

This project is provided as-is for demonstration purposes.
