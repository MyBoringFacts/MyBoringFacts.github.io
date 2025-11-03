'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import Navigation from '@/components/Navigation'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="relative">
      <Navigation activeSection={activeSection} />
      
      <section id="home">
        <Hero />
      </section>
      <div className="divider-elysia mx-6 md:mx-12 lg:mx-20 my-16" />
      
      <section id="about">
        <About />
      </section>
      <div className="divider-elysia mx-6 md:mx-12 lg:mx-20 my-16" />
      
      <section id="projects">
        <Projects />
      </section>
      <div className="divider-elysia mx-6 md:mx-12 lg:mx-20 my-16" />
      
      <section id="skills">
        <Skills />
      </section>
      <div className="divider-elysia mx-6 md:mx-12 lg:mx-20 my-16" />
      
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}

