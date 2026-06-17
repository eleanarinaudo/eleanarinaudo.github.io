import type { Metadata, Viewport } from "next";
import { Zen_Kaku_Gothic_New, Zen_Old_Mincho } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

// Zen Kaku Gothic New ships 300/400/500/700/900 (no 600) — load only what we
// use; font-semibold (600) resolves to the real 700 face, not a synthetic bold.
const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen-kaku",
  display: "swap",
});

const zenMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-zen-mincho",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eleanarinaudo.github.io"),
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  keywords: [
    "AI/ML Engineer",
    "LLM",
    "MCP",
    "Model Context Protocol",
    "Python",
    "Eleana Rinaudo",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    url: "https://eleanarinaudo.github.io",
    siteName: profile.name,
    locale: "en_US",
    images: [
      { url: "/profile.png", width: 600, height: 600, alt: profile.name, type: "image/png" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    images: ["/profile.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#161410" },
  ],
};

// schema.org Person — powers name-search rich results / knowledge panel.
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: "https://eleanarinaudo.github.io",
  image: "https://eleanarinaudo.github.io/profile.png",
  email: `mailto:${profile.email}`,
  worksFor: { "@type": "Organization", name: "Fabric Data" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Córdoba",
    addressCountry: "AR",
  },
  knowsAbout: [
    "LLMs",
    "Model Context Protocol",
    "Python",
    "AWS",
    "Machine Learning",
    "Web Scraping",
  ],
  sameAs: [profile.github, profile.linkedin],
};

// Applies the saved theme before first paint to avoid a light→dark flash.
const themeInit = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${zenKaku.variable} ${zenMincho.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        {/* Without JS the IntersectionObserver never fires — keep content visible. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: "<style>.reveal{opacity:1!important;transform:none!important}</style>",
          }}
        />
      </head>
      <body className="font-sans">
        <a
          href="#main"
          className="fixed left-4 -top-20 z-[60] rounded-[3px] border border-lineStrong bg-paper px-4 py-2 text-sm font-medium text-ink transition-[top] focus:top-4"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
