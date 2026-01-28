'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'original' | 'nihilistic'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('original')

  useEffect(() => {
    // Load theme from localStorage (client-only)
    try {
      const savedTheme = localStorage.getItem('theme') as Theme | null
      if (savedTheme === 'original' || savedTheme === 'nihilistic') {
        setTheme(savedTheme)
      }
    } catch {
      // ignore
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'original' ? 'nihilistic' : 'original'
    setTheme(newTheme)
    try {
      localStorage.setItem('theme', newTheme)
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
