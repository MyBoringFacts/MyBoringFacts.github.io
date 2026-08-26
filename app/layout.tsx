import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thadoe Hein | Data & AI Engineer",
  description: "Data and AI engineering across document intelligence, RAG, machine learning systems, evaluation, and data governance.",
  keywords: ["Data and AI Engineer", "Data Governance", "Machine Learning", "Computer Vision", "MLOps", "LLM", "RAG", "Python"],
  authors: [{ name: "Thadoe Hein" }],
  openGraph: {
    title: "Thadoe Hein | Data & AI Engineer",
    description: "Data and AI engineering work across document intelligence, RAG, machine learning systems, evaluation, and governance.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background">
        <ThemeProvider defaultTheme="black-hole">
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
