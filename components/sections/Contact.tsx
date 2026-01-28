'use client'

import { motion } from 'framer-motion'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/MyBoringFacts' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/thadoe' },
  { name: 'Email', url: 'mailto:thadoe.work@gmail.com' },
]

export default function Contact() {

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
          <h2 className="section-title text-center mb-6">Get In Touch</h2>
          <p className="text-xl max-w-3xl mx-auto text-center leading-relaxed transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
            Open to AI/ML opportunities and collaborations. Let&apos;s connect!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Info Card */}
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>Contact Information</h3>
              <div className="space-y-6 transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
                <div className="flex items-start gap-4">
                  <div>
                    <p className="font-medium mb-1 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>Email</p>
                    <a
                      href="mailto:thadoe.work@gmail.com"
                      className="transition-colors duration-500 hover:opacity-80"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      thadoe.work@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div>
                    <p className="font-medium mb-1 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>Location</p>
                    <p className="transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>Bangkok, Thailand | Open to remote opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div>
                    <p className="font-medium mb-1 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>Status</p>
                    <p className="transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>Open to AI/ML Engineer positions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg transition-all duration-500"
                    style={{ 
                      background: 'var(--glass-bg)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    <span className="text-sm transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-24 pt-8 transition-colors duration-500"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <p className="text-sm transition-colors duration-500" style={{ color: 'var(--text-tertiary)' }}>
            © {new Date().getFullYear()} Thadoe Hein. Always learning, always building.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

