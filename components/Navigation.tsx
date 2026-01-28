'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface NavigationProps {
  activeSection: string
}

const navItems = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navigation({ activeSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="glass px-8 py-4 rounded-full backdrop-blur-2xl shadow-2xl transition-all duration-500" style={{ 
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          boxShadow: '0 25px 50px -12px var(--glass-shadow)'
        }}>
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-5 py-2.5 rounded-full transition-all duration-500 text-sm font-medium relative ${
                  activeSection === item.id
                    ? 'shadow-lg'
                    : 'hover:opacity-80'
                }`}
                style={activeSection === item.id ? {
                  backgroundColor: 'var(--btn-primary-bg)',
                  color: 'var(--btn-primary-text)'
                } : {
                  color: 'var(--text-secondary)',
                  background: 'transparent'
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-6 right-6 z-50 glass p-4 rounded-full backdrop-blur-xl transition-all duration-500"
        style={{ 
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)'
        }}
      >
        <div className="space-y-1.5">
          <div className={`w-5 h-0.5 transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: 'var(--text-primary)' }} />
          <div className={`w-5 h-0.5 transition-all duration-500 ${isMenuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'var(--text-primary)' }} />
          <div className={`w-5 h-0.5 transition-all duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: 'var(--text-primary)' }} />
        </div>
      </motion.button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed inset-y-0 right-0 w-72 z-40 glass backdrop-blur-2xl md:hidden transition-all duration-500"
          style={{ 
            background: 'var(--bg-primary)',
            borderLeft: '1px solid var(--border-color)'
          }}
        >
          <div className="flex flex-col gap-3 p-8 mt-24">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-4 rounded-xl text-left transition-all duration-500 ${
                  activeSection === item.id
                    ? 'font-semibold shadow-lg'
                    : 'hover:opacity-80'
                }`}
                style={activeSection === item.id ? {
                  backgroundColor: 'var(--btn-primary-bg)',
                  color: 'var(--btn-primary-text)'
                } : {
                  color: 'var(--text-secondary)',
                  background: 'transparent'
                }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  )
}

