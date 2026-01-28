'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const skillsData = [
  { name: 'PyTorch & Deep Learning', level: 92 },
  { name: 'NLP & RAG', level: 95 },
  { name: 'Computer Vision', level: 88 },
  { name: 'MLOps & AWS', level: 85 },
  { name: 'Python & SQL', level: 95 },
  { name: 'Generative AI', level: 90 },
]

export default function About() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="section-title text-center mb-6">About Me</h2>
          <p className="text-xl max-w-3xl mx-auto text-center leading-relaxed transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
            AI Engineer with practical experience in NLP, Computer Vision, and Generative AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <h3 className="text-2xl font-bold mb-6 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>Bio</h3>
            <div className="space-y-4 leading-relaxed transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
              <p>
                I&apos;m an AI Engineer with practical experience designing, training, and deploying 
                end-to-end machine learning models for NLP, computer vision, and generative AI. 
                My work focuses on building production-ready systems that solve real-world problems.
              </p>
              <p>
                Proficient in model fine-tuning, RAG (Retrieval-Augmented Generation), data preprocessing, 
                and MLOps pipeline automation using PyTorch, HuggingFace, Docker, and AWS. I&apos;ve successfully 
                integrated AI models into applications like face search engines, text summarization systems, 
                and conversational agents.
              </p>
              <p>
                Currently based in Bangkok, Thailand, I&apos;m passionate about advancing AI capabilities 
                in low-resource languages and building scalable, cloud-native ML solutions. 
              </p>
              <p>
                I don’t just build models or systems — I connect the dots between business, design, and engineering. 
                I enjoy working with diverse teams to transform messy requirements into practical, working AI solutions.
              </p>
            </div>
            <div className="mt-6 pt-4 transition-colors duration-500" style={{ borderTop: '1px solid var(--border-color)' }}>
            <p className="text-[11px] md:text-xs italic transition-colors duration-500" style={{ color: 'rgb(var(--accent-1) / 0.5)' }}>
                &ldquo;You already know about my past. As an exchange, I want to witness your future.&rdquo; — Elysia
              </p>
            </div>
            <div className="mt-6 pt-4">
              <a 
                href="/resume.pdf" 
                download="Thadoe_Hein_Resume.pdf"
                className="btn-secondary text-base px-8 py-4 inline-block"
              >
                Download My Resume
              </a>
            </div>
          </motion.div>

          {/* Education & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Education */}
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>Education</h3>
              <div className="space-y-6">
                <div className="border-l-2 pl-4 transition-colors duration-500" style={{ borderColor: 'rgb(var(--accent-1) / 0.3)' }}>
                  <h4 className="font-semibold text-lg transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>Bachelor of Science in Computer Science</h4>
                  <p className="text-sm mt-1 transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>Assumption University of Thailand</p>
                  <p className="text-sm transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>GPA: 3.69 | Bangkok, Thailand</p>
                  <p className="text-xs mt-2 transition-colors duration-500" style={{ color: 'var(--text-tertiary)' }}>June 2022 - Oct 2025</p>
                </div>
                <div className="border-l-2 pl-4 transition-colors duration-500" style={{ borderColor: 'rgb(var(--accent-2) / 0.3)' }}>
                  <h4 className="font-semibold text-lg transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>Key Experience</h4>
                  <p className="text-sm mt-1 transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>ML Engineer Intern @ LU Lab</p>
                  <p className="text-sm transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>AI Engineer @ ISL</p>
                  <p className="text-sm transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>Teaching Assistant (Python, Java)</p>
                </div>
              </div>
            </div>

            {/* Core Skills */}
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>Core Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass p-3 rounded-lg transition-all duration-500 text-center"
                  >
                    <span className="text-sm font-medium transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


