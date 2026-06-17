export const profile = {
  name: "Eleana Rinaudo",
  role: "AI/ML Engineer",
  location: "Córdoba, Argentina",
  tagline:
    "I build LLM-powered systems — MCP servers, conversational agents, and the data pipelines behind them.",
  email: "eleanarinaudo@gmail.com",
  github: "https://github.com/eleanarinaudo",
  linkedin: "https://www.linkedin.com/in/eleana-rinaudo/",
  resume:
    "https://github.com/eleanarinaudo/CV_EleanaRinaudo/raw/main/CV_Eleana_Rinaudo.pdf",
};

export const about = [
  "I'm a data person from Córdoba, Argentina, currently working as an AI/ML Engineer at Fabric Data. I started out writing web scrapers and ETL pipelines, and over time moved into ML tooling and — more recently — LLM systems, building a Model Context Protocol (MCP) server that connects assistants like Claude and ChatGPT to large analytical datasets.",
  "I enjoy the messy data-to-product journey: turning raw, unreliable sources into something an assistant can answer questions over in plain language. Always learning — currently also studying Computer Science (UNC) and Data Science & AI.",
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
      "A Model Context Protocol server connecting Claude and other LLM applications to AWS Athena datasets for the media & entertainment industry. Hexagonal architecture, ~100 tools, OAuth, and server-side React report rendering.",
    stack: ["Python", "MCP", "AWS Athena", "ECS", "Terraform", "React"],
  },
  {
    title: "Streaming Data Ingestion",
    status: "Work",
    private: true,
    description:
      "Building and maintaining a fleet of 30+ scrapers and ETL pipelines that keep streaming-catalog data flowing reliably into the analytics layer that powers the products above.",
    stack: ["Python", "ETL", "AWS", "Athena"],
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
    items: ["MCP", "Conversational agents", "LangChain / LangGraph", "Prompt engineering"],
  },
  {
    group: "Languages",
    items: ["Python", "TypeScript", "SQL"],
  },
  {
    group: "Data & Cloud",
    items: ["AWS (Athena, ECS, Terraform)", "Presto / Trino", "Pandas", "NumPy", "Docker"],
  },
  {
    group: "Web",
    items: ["React", "Next.js", "FastAPI / Starlette", "TailwindCSS"],
  },
];
