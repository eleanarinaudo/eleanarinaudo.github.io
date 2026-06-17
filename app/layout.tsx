import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Zen_Old_Mincho } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-zen-kaku",
  display: "swap",
});

const zenMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    url: "https://eleanarinaudo.github.io",
    siteName: profile.name,
    images: [{ url: "/profile.png", width: 600, height: 600, alt: profile.name }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    images: ["/profile.png"],
  },
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
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
