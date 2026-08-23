import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thadoe Hein | AI Engineer",
  description: "I’m Thadoe, an AI engineer working across document systems, computer vision, and machine learning infrastructure.",
  keywords: ["AI Engineer", "Machine Learning", "Computer Vision", "MLOps", "LLM", "RAG", "Python"],
  authors: [{ name: "Thadoe Hein" }],
  openGraph: {
    title: "Thadoe Hein | AI Engineer",
    description: "AI engineering projects across document systems, computer vision, and machine learning infrastructure.",
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
