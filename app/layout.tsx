import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thadoe Hein - AI Engineer Portfolio',
  description: 'AI Engineer with expertise in NLP, Computer Vision, and Generative AI. Specializing in RAG, MLOps, and end-to-end AI/ML solutions.',
  keywords: 'Thadoe Hein, AI Engineer, Machine Learning, NLP, Computer Vision, RAG, PyTorch, AWS, Deep Learning, Generative AI',
  authors: [{ name: 'Thadoe Hein' }],
  openGraph: {
    title: 'Thadoe Hein - AI Engineer Portfolio',
    description: 'AI Engineer specializing in NLP, Computer Vision, and Generative AI',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="original">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}

