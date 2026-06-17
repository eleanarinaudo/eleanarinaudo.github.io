export const profile = {
  name: "Eleana Rinaudo",
  role: "AI/ML Engineer",
  location: "Córdoba, Argentina",
  tagline:
    "I build the full data lifecycle behind LLM products — from large-scale scraping and ML enrichment to production MCP servers and agents.",
  email: "eleanarinaudo@gmail.com",
  github: "https://github.com/eleanarinaudo",
  linkedin: "https://www.linkedin.com/in/eleana-rinaudo/",
  resume: "/CV_Eleana_Rinaudo.docx",
  status: "AI/ML Engineer @ Fabric Data",
};

export const stats: { value: string; label: string }[] = [
  { value: "5+", label: "yrs shipping data products" },
  { value: "108", label: "MCP tools built" },
  { value: "30+", label: "platform scrapers" },
];

export const about = [
  "AI/ML Engineer at a media & entertainment data platform — owning ingestion (large-scale web scraping), ML enrichment, and a production LLM access layer (Model Context Protocol).",
  "Comfortable end-to-end: Python backends, agentic orchestration (LangChain / LangGraph), AWS infrastructure (ECS / Terraform) and React frontends — 5+ years shipping data products at scale, currently at Fabric Data.",
];

export type Stream = { title: string; period: string; points: string[] };
export type Role = {
  company: string;
  note?: string;
  title: string;
  period: string;
  summary?: string;
  streams: Stream[];
};

export const experience: Role[] = [
  {
    company: "Fabric Data",
    note: "formerly BB Media",
    title: "AI/ML Engineer",
    period: "2022 — Present",
    summary:
      "Progressed from Data Engineer to AI/ML Engineer, building the full data lifecycle of a media & entertainment data platform.",
    streams: [
      {
        title: "LLM access layer — Origin Insights MCP Server",
        period: "2025 — Present",
        points: [
          "Architected and built, as sole author, a production MCP server (108 tools across 13 domains) that lets LLM clients query AWS Athena in natural language — replacing hand-written SQL for internal teams and external clients, live via Claude (ChatGPT next), on a clean hexagonal / ports-and-adapters architecture.",
          "Built a React report engine (36+ visualization templates, interactive charts, dark/light theming) for server-generated analytics reports.",
          "Implemented OAuth 2.0 (AWS Cognito + Google SSO, RS256 JWT), tiered rate limiting and an Athena circuit breaker; added a REST / OpenAPI 3.1 adapter for ChatGPT.",
          "Owned IaC & CI/CD: ECS Fargate + ALB + Route 53 via Terraform; GitHub Actions pipeline (test gate → stage → prod). Shipped to production.",
        ],
      },
      {
        title: "Conversational AI agents",
        period: "2024 — 2025",
        points: [
          "Built a LangGraph multi-step agent with async tools and ThreadPoolExecutor query parallelization; led a refactor that cut the core router by ~1,400 lines and removed 25 classes.",
          "Developed a LangChain bilingual (ES/EN) assistant over the streaming catalog, with tools for availability, pricing, demand signals and metadata.",
        ],
      },
      {
        title: "Applied ML & data tooling",
        period: "2024 — 2025",
        points: [
          'Built a poster OCR pipeline detecting platform branding and "original content" markers.',
          "Developed semantic genre mapping with multilingual sentence embeddings, a cross-platform title-translation pipeline, language detection (fastText) and platform-affinity analysis.",
        ],
      },
      {
        title: "Data ingestion — streaming-platform scrapers",
        period: "2022 — 2024",
        points: [
          "Built and maintained 30+ streaming-platform scrapers in a large shared Python monorepo (~825 commits over 2.5 years) — feeding the unified, multi-market catalog that powers the platform's availability and demand data. Coverage spans global services (Britbox, DAZN, iQIYI, HBO Go Asia, Lionsgate+, and many more).",
          "Implemented geo-validation by country, payload normalization and series/season/episode resolution; continuously hardened scrapers against upstream changes.",
        ],
      },
    ],
  },
  {
    company: "ATILA",
    title: "Full-Stack Trainee",
    period: "Mar 2021 — Aug 2021",
    summary:
      "Internship (PIL Program): built and maintained .NET full-stack web applications.",
    streams: [],
  },
];

export type Project = {
  title: string;
  status: string;
  description: string;
  stack: string[];
  link?: string;
  private?: boolean;
};

export const projects: Project[] = [
  {
    title: "Origin Insights MCP Server",
    status: "Production",
    private: true,
    description:
      "Sole author of a production MCP server — 108 tools across 13 domains — that replaces hand-written SQL with natural-language access to AWS Athena for internal teams and external clients (live via Claude, ChatGPT next). React report engine, OAuth 2.0 and a Terraform-managed ECS deployment.",
    stack: ["Python", "MCP", "AWS Athena", "ECS", "Terraform", "React"],
  },
  {
    title: "Line 137 — Helpline call analysis",
    status: "Data science",
    description:
      "Time-series analysis of family-violence helpline calls: quantified relevant variables and built a model to predict daily call behavior, surfacing trends and periodic patterns.",
    stack: ["Python", "Pandas", "Time series", "Jupyter"],
    link: "https://github.com/eleanarinaudo/Linea-137-Diplo2022",
  },
  {
    title: "Web Scraping — Starz",
    status: "Open source",
    description:
      "Python scraper that extracts movie & series metadata from the Starz streaming catalog and exports it to JSON / CSV with BeautifulSoup.",
    stack: ["Python", "BeautifulSoup", "ETL"],
    link: "https://github.com/eleanarinaudo/webscraping_starz",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "AI / LLM",
    items: [
      "MCP",
      "LangChain",
      "LangGraph",
      "Agentic workflows",
      "Prompt engineering",
      "Embeddings / RAG",
      "OCR",
    ],
  },
  { group: "Programming", items: ["Python", "TypeScript", "SQL (Presto/Trino)"] },
  {
    group: "Data & Scraping",
    items: ["Large-scale web scraping", "Data normalization", "Geo-validation", "ETL"],
  },
  {
    group: "Cloud & Infra",
    items: ["AWS (Athena, ECS, Cognito, S3)", "Terraform", "Docker", "GitHub Actions"],
  },
  {
    group: "Backend",
    items: ["Starlette / Uvicorn (ASGI)", "Pydantic", "REST / OpenAPI", "pytest"],
  },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Recharts"] },
  { group: "Languages", items: ["Spanish — Native", "English — Intermediate"] },
];

export type Study = { title: string; org: string; period: string };

export const education: Study[] = [
  {
    title: "B.Sc. in Computer Science",
    org: "National University of Córdoba (FAMAF)",
    period: "In progress",
  },
  {
    title: "Higher Technical Degree in Data Science & AI",
    org: "Instituto Superior Politécnico Córdoba",
    period: "In progress",
  },
];

export const training: Study[] = [
  { title: "Diploma in Data Science & Machine Learning", org: "FAMAF – UNC", period: "2022" },
  { title: "Machine Learning & Image Processing", org: "UNC", period: "2022" },
  {
    title: "Full-Stack Development (Angular/.NET · Python/Django)",
    org: "PIL · Educación IT",
    period: "2020 – 2021",
  },
];
