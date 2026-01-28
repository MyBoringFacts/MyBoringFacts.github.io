'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Machine Learning',
    skills: ['Scikit-learn', 'XGBoost', 'LightGBM', 'Random Forest', 'SVM', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    title: 'Deep Learning',
    skills: ['PyTorch', 'TensorFlow', 'Neural Networks', 'Transfer Learning', 'Model Fine-tuning'],
  },
  {
    title: 'NLP & Generative AI',
    skills: ['HuggingFace', 'Transformers', 'LLMs', 'RAG', 'LangChain'],
  },
  {
    title: 'Computer Vision',
    skills: ['OpenCV', 'InsightFace', 'Object Detection', 'Face Recognition', 'Image Processing'],
  },
  {
    title: 'MLOps & Cloud',
    skills: ['AWS (S3, Lambda, ECS)', 'Docker', 'Microservices', 'Azure', 'Firebase', 'Google Cloud Platform'],
  },
  {
    title: 'Programming',
    skills: ['Python', 'SQL'],
  },
  {
    title: 'Data & Tools',
    skills: ['Qdrant', 'Streamlit', 'Next.js', 'Data Mining', 'Model Monitoring'],
  },
]

export default function Skills() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="section-title text-center mb-6">Skills & Technical Proficiency</h2>
          <p className="text-xl max-w-3xl mx-auto text-center leading-relaxed transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
            Building production-ready AI systems that connect ideas, people, and technology.
          </p>
          <p className="text-lg max-w-2xl mx-auto text-center mt-4 leading-relaxed transition-colors duration-500" style={{ color: 'var(--text-tertiary)' }}>
            I enjoy collaborating across disciplines — turning complex business goals into practical, deployable solutions.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="skill-item"
            >
              <h3 className="text-lg font-semibold mb-3 text-center transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded transition-all duration-500"
                    style={{ 
                      background: 'var(--glass-bg)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 glass-card"
        >
          <p className="text-lg mb-6 leading-relaxed transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
            Always learning, always building. Let&apos;s create something amazing together.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Let&apos;s Collaborate
          </a>
        </motion.div>
      </div>
    </section>
  )
}

