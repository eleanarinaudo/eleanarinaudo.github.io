# eleanarinaudo.github.io

My personal portfolio — **[eleanarinaudo.github.io](https://eleanarinaudo.github.io/)**

A fast, static single-page site introducing who I am, what I work on (AI/ML, LLMs, MCP,
data engineering) and how to reach me.

## Tech stack

- **Next.js** (App Router) with **static export** (`output: "export"`)
- **React** · **TypeScript**
- **Tailwind CSS**
- Deployed to **GitHub Pages** via GitHub Actions

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # static site emitted to ./out
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the static
export and publishes `./out` to GitHub Pages. Set **Settings → Pages → Source** to
**GitHub Actions**.

## Editing content

All copy lives in [`lib/data.ts`](lib/data.ts) — profile, about, skills and projects.
Sections are simple components under [`components/`](components).
