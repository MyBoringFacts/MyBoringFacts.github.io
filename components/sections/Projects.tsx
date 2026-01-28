
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  github: string
  huggingface: string | null
  detailsPath?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'Video Face Search System',
    description: 'Platform to search and find people across videos. Detects, tracks, and embeds faces (ArcFace), indexes them for instant lookup, and scales to large video libraries.',
    tech: ['Computer Vision', 'ArcFace', 'Qdrant', 'AWS', 'Docker', 'Next.js', 'TypeScript'],
    image: 'https://via.placeholder.com/600x300/1a1a1a/3b82f6?text=Video+Face+Search',
    github: 'https://github.com/MyBoringFacts',
    huggingface: null,
    detailsPath: '/projects/find-me-in-the-crowd',
    featured: true,
  },
  {
    title: 'SimpleRAG - Document AI Assistant',
    description: 'Document Q&A assistant: upload TXT, PDF, or DOCX and ask questions. Returns grounded answers with sources in real time, available as a HuggingFace Space.',
    tech: ['RAG', 'Streamlit', 'Firebase', 'HuggingFace', 'NLP', 'Python'],
    image: 'https://via.placeholder.com/600x300/1a1a1a/06b6d4?text=SimpleRAG',
    github: 'https://github.com/MyBoringFacts',
    huggingface: 'https://huggingface.co/spaces/Ismetdh/SimpleRAG',
  },
  {
    title: 'FlanT5 News Summarization',
    description: 'Abstractive news‑summary model and service powered by fine‑tuned FLAN‑T5. Paste an article and get a crisp, faithful summary with key points.',
    tech: ['PyTorch', 'HuggingFace', 'FLAN-T5', 'NLP', 'Model Training'],
    image: 'https://via.placeholder.com/600x300/1a1a1a/8b5cf6?text=News+Summarization',
    github: 'https://github.com/MyBoringFacts',
    huggingface: 'https://huggingface.co/Ismetdh/FlanT5Summarize',
  },
  {
    title: 'Burmese QA System',
    description: 'Generative Burmese question‑answering model and dataset. Ask in Burmese and receive fluent, context‑aware answers for low‑resource content.',
    tech: ['mT5', 'Low-Resource NLP', 'Translation', 'HuggingFace', 'Python'],
    image: 'https://via.placeholder.com/600x300/1a1a1a/10b981?text=Burmese+QA',
    github: 'https://github.com/MyBoringFacts',
    huggingface: null,
  },
]

export default function Projects() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  const placeholderGradients = [
    // Neutral grayscale gradients
    'from-[#ffffff] via-[#f5f5f5] to-[#e5e5e5]',
    'from-[#f9fafb] via-[#e5e5e5] to-[#d4d4d4]',
    'from-[#f5f5f5] via-[#e5e5e5] to-[#d4d4d4]',
    'from-[#f9fafb] via-[#e5e5e5] to-[#cccccc]',
  ]
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
          <h2 className="section-title text-center mb-6">Featured Projects</h2>
          <p className="text-xl max-w-3xl mx-auto text-center leading-relaxed transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
            End-to-end ML systems from Computer Vision to NLP and Generative AI
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`project-card ${project.featured ? 'border-2 border-black shadow-[0_0_20px_rgba(0,0,0,0.25)]' : ''}`}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden rounded-t-2xl bg-white">
                {imageErrors[index] ? (
                  <div
                    className={`w-full h-56 bg-gradient-to-br ${placeholderGradients[index % placeholderGradients.length]}`}
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    onError={() =>
                      setImageErrors((prev) => ({ ...prev, [index]: true }))
                    }
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-md text-xs font-semibold transition-colors duration-500" style={{ 
                      backgroundColor: 'rgb(var(--accent-1) / 0.2)', 
                      color: 'rgb(var(--accent-1))',
                      border: '1px solid rgb(var(--accent-1) / 0.4)'
                    }}>
                      Featured
                    </span>
                  )}
                </div>
                <p className="mb-6 leading-relaxed transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md text-xs transition-all duration-500"
                      style={{ 
                        background: 'var(--glass-bg)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 flex-wrap transition-colors duration-500" style={{ borderTop: '1px solid var(--border-color)' }}>
                  {project.detailsPath && (
                    <Link
                      href={project.detailsPath}
                      className="flex items-center gap-2 text-sm transition-colors duration-500 hover:opacity-80"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span>View Details</span>
                    </Link>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-colors duration-500 hover:opacity-80"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span>GitHub</span>
                  </a>
                  {project.huggingface && (
                    <a
                      href={project.huggingface}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm transition-colors duration-500 hover:opacity-80"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span>HuggingFace</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

