'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />
      
      {/* Floating glass orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl transition-colors duration-500" style={{ backgroundColor: 'rgb(var(--accent-1) / 0.10)' }} />
        <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] rounded-full opacity-20 blur-3xl transition-colors duration-500" style={{ backgroundColor: 'rgb(var(--accent-2) / 0.10)', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-15 blur-3xl transition-colors duration-500" style={{ backgroundColor: 'rgb(var(--accent-3) / 0.10)', animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 pl-6 lg:pl-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 max-w-4xl"
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <p
                  className="text-sm uppercase tracking-[0.3em] font-light transition-colors duration-500"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  Portfolio
                </p>
              </motion.div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>
                <span>Thadoe Hein</span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-2xl md:text-3xl font-light leading-relaxed transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
                  AI Engineer
                </p>
                <p className="text-lg md:text-xl leading-relaxed max-w-2xl transition-colors duration-500" style={{ color: 'var(--text-tertiary)' }}>
                  Specializing in <span className="gradient-text">NLP, Computer Vision</span> & <span className="gradient-text">Generative AI</span>
                </p>
                <p className="text-base md:text-lg leading-relaxed max-w-xl transition-colors duration-500" style={{ color: 'var(--text-tertiary)' }}>
                  Building end-to-end AI/ML solutions with RAG, MLOps, and cloud-native architectures
                </p>
    
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 flex-wrap pt-4">
                <a href="#projects" className="btn-primary text-base px-8 py-4">
                  View My Work
                </a>
                <a href="#contact" className="btn-secondary text-base px-8 py-4">
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 15,
              delay: 0.4
            }}
            className="flex-shrink-0 relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="relative w-64 h-64 rounded-full overflow-hidden ring-1 ring-white/20 bg-[#1a1a1a] glass">
                <Image
                  src="/me.jpg"
                  alt="Thadoe"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-start mt-16"
          >
            <motion.button
              onClick={scrollToAbout}
              className="flex flex-col items-center gap-3 transition-colors group"
              style={{ color: 'var(--text-tertiary)' }}
            >
              <span className="text-[10px] uppercase tracking-widest font-medium">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="opacity-60 group-hover:opacity-100 transition-opacity"
              >
                <span className="text-2xl">↓</span>
              </motion.div>
            </motion.button>
          </motion.div>
      </div>

      
    </div>
  )
}

