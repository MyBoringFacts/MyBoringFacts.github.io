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
          <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center leading-relaxed">
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
            <h3 className="text-2xl font-bold mb-6 text-white">Bio</h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
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
            <div className="mt-6 pt-4 border-t border-white/10">
            <p className="text-[11px] md:text-xs text-pink-300/50 italic">
                &ldquo;You already know about my past. As an exchange, I want to witness your future.&rdquo; — Elysia
              </p>
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
              <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-blue-500/30 pl-4">
                  <h4 className="font-semibold text-white text-lg">Bachelor of Science in Computer Science</h4>
                  <p className="text-gray-400 text-sm mt-1">Assumption University of Thailand</p>
                  <p className="text-gray-400 text-sm">GPA: 3.69 | Bangkok, Thailand</p>
                  <p className="text-gray-600 text-xs mt-2">June 2022 - Oct 2025</p>
                </div>
                <div className="border-l-2 border-cyan-500/30 pl-4">
                  <h4 className="font-semibold text-white text-lg">Key Experience</h4>
                  <p className="text-gray-400 text-sm mt-1">ML Engineer Intern @ LU Lab</p>
                  <p className="text-gray-400 text-sm">AI Engineer @ ISL</p>
                  <p className="text-gray-400 text-sm">Teaching Assistant (Python, Java)</p>
                </div>
              </div>
            </div>

            {/* Core Skills */}
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6 text-white">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass p-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
                  >
                    <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
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


