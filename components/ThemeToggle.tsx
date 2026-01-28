'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { useState } from 'react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.button
        onClick={toggleTheme}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative w-16 h-16 rounded-full glass-card flex items-center justify-center group overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        {/* Background pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: theme === 'nihilistic'
              ? [
                  '0 0 0 0 rgba(0, 0, 0, 0.10)',
                  '0 0 0 20px rgba(0, 0, 0, 0)',
                ]
              : [
                  '0 0 0 0 rgba(255, 99, 176, 0.3)',
                  '0 0 0 20px rgba(255, 99, 176, 0)',
                ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        />

        {/* Inner white orb icon */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="relative flex items-center justify-center"
        >
          <div
            className="w-7 h-7 rounded-full"
            style={{
              backgroundColor: '#ffffff',
              boxShadow: '0 0 12px rgba(0,0,0,0.25)',
              border: '1px solid rgba(0,0,0,0.6)',
            }}
          />
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-4 px-4 py-2 rounded-lg glass-card whitespace-nowrap text-sm transition-colors duration-500"
              style={{ color: 'var(--text-secondary)' }}
            >
              {theme === 'original' ? 'Nihilistic Mode' : 'Original Mode'}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  )
}
