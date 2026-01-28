// # Copyright (c) 2025 Thadoe Hein.  All Rights Reserved.
// # This section of the code, including the content and the logic itself, is proprietary. You are not allowed to use, distribute, or modify it without permission.

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function FindMeInTheCrowdPage() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['executive', 'challenge', 'architecture', 'technologies', 'stack', 'deployment', 'performance', 'conclusion']
      const scrollPosition = window.scrollY + 200

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main
      className="relative min-h-screen case-study"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/#projects"
          className="glass px-6 py-3 rounded-full backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl shadow-black/50 text-white transition-all duration-300 flex items-center gap-2 group"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Projects</span>
        </Link>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF63B0]/5 via-transparent to-[#5FF7FF]/5 blur-3xl" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 glass rounded-full text-sm text-[#5FF7FF] border border-[#5FF7FF]/20">
                Capstone Project
              </span>
            </motion.div>
            <h1 className="section-title mb-8 text-white leading-tight">
              Find Me In The Crowd
            </h1>
            <p className="text-3xl md:text-4xl text-gray-200 mb-6 font-light leading-tight">
              AI-Powered Intelligent Video Retrieval for Large-Scale Events
            </p>
            <div className="divider-elysia mx-auto max-w-2xl my-10" />
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              An advanced video retrieval platform designed to solve a computer vision challenge: automating the discovery of specific 
              individuals within terabytes of unstructured event footage. The system enables users to upload a reference photograph and 
              retrieve all video segments in which they appear, transforming unsearchable video archives into accessible digital content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents - Sticky Sidebar */}
      <div className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-40">
        <div className="glass p-5 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-xl">
          <p className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wider">Jump to</p>
          <nav className="flex flex-col gap-2">
            {[
              { id: 'executive', label: 'Executive Summary' },
              { id: 'challenge', label: 'Problem Statement' },
              { id: 'architecture', label: 'System Architecture' },
              { id: 'technologies', label: 'Core Technologies' },
              { id: 'stack', label: 'Technology Stack' },
              { id: 'deployment', label: 'Deployment' },
              { id: 'performance', label: 'Performance' },
              { id: 'architecture-diagram', label: 'Architecture Diagram' },
              { id: 'privacy', label: 'Privacy & Ethics' },
          
              { id: 'conclusion', label: 'Conclusion' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-white/10 text-white border-l-2 border-[#FF63B0] shadow-lg'
                    : 'text-gray-200 bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto max-w-6xl px-6 md:px-12 lg:px-20 pb-20">
        {/* Executive Summary */}
        <section id="executive" className="mb-32 scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF63B0]/20 via-[#5FF7FF]/20 to-[#B478FF]/20 rounded-3xl blur-xl opacity-50" />
            <div className="relative glass-card p-10 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF63B0] to-[#5FF7FF] flex items-center justify-center">
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Executive Summary
                </h2>
              </div>
              <div className="space-y-6 text-gray-200 leading-relaxed text-lg">
                <p className="text-xl text-gray-100">
                  Large-scale events such as concerts, conferences, and festivals generate substantial amounts of multi-angle video data. 
                  While this footage contains valuable content, it often remains unsearchable and underutilized due to the impracticality 
                  of manually locating specific attendees within extensive video archives.
                </p>
                <p>
                  <strong className="text-white">Find Me In The Crowd</strong> addresses this challenge by providing a scalable solution 
                  where users upload a single reference photograph to locate and retrieve every video segment in which they appear. The system 
                  delivers results with timestamps, camera identifiers, and playback capabilities, eliminating the need for manual video 
                  scrubbing.
                </p>
                <p>
                  Developed as a capstone project, this system is production-ready and handles real-world scale. It processes terabytes of 
                  video, indexes millions of facial embeddings, and delivers sub-second search results while maintaining accuracy under 
                  challenging conditions including variable lighting, high crowd density, and diverse camera angles.
                </p>
                <div className="mt-8 p-6 glass rounded-xl border border-[#5FF7FF]/20 bg-gradient-to-r from-[#5FF7FF]/5 to-transparent">
                  <p className="text-[#5FF7FF] font-semibold mb-2">Objective</p>
                  <p className="text-gray-200">
                    Transform passive, unsearchable video archives into dynamic, searchable digital assets. Enable users to retrieve 
                    specific moments from large-scale event footage through automated facial recognition and intelligent video segmentation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* The Challenge */}
        <section id="challenge" className="mb-32 scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-10 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5FF7FF] to-[#B478FF] flex items-center justify-center">
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Problem Statement
                </h2>
              </div>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                Traditional video retrieval methods are insufficient for visual content where the primary query is a person&apos;s identity. 
                Keyword-based search and manual video scrubbing do not scale to large archives. This represents a <em className="text-white">&quot;data-rich, information-poor&quot;</em> 
                paradox: substantial valuable content exists, but effective retrieval mechanisms are lacking.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-white">Technical Challenges</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass p-6 rounded-xl border border-[#5FF7FF]/30 bg-gradient-to-br from-[#5FF7FF]/10 to-transparent">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-xl font-bold text-[#5FF7FF]">High Dimensionality and Scale</h4>
                  </div>
                  <p className="text-gray-200">
                    A single event can generate <strong className="text-white">tens of thousands of frames</strong> across multiple cameras. 
                    Processing this requires handling high-dimensional visual data at a scale that exceeds the capabilities of traditional 
                    database systems.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-xl border border-[#FF63B0]/30 bg-gradient-to-br from-[#FF63B0]/10 to-transparent">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-xl font-bold text-[#FF63B0]">Unconstrained Environments</h4>
                  </div>
                  <p className="text-gray-200">
                    Unlike controlled environments, event footage presents challenges including variable lighting conditions, occlusions, 
                    high crowd density, and diverse camera angles. These factors complicate computer vision tasks.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-xl border border-[#B478FF]/30 bg-gradient-to-br from-[#B478FF]/10 to-transparent">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-xl font-bold text-[#B478FF]">Latency Requirements</h4>
                  </div>
                  <p className="text-gray-200">
                    The system must transition from computationally intensive indexing phases to 
                    <strong className="text-white"> sub-second search responses</strong>. This requirement distinguishes production systems 
                    from research prototypes.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-xl border border-[#5FF7FF]/30 bg-gradient-to-br from-[#5FF7FF]/10 to-transparent">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-xl font-bold text-[#5FF7FF]">Output Format Requirements</h4>
                  </div>
                  <p className="text-gray-200">
                    Users require <strong className="text-white">watchable video clips with temporal context</strong>, not merely lists of 
                    timestamps or raw frame detections. The system must aggregate discrete detections into coherent video segments.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* System Architecture */}
        <section id="architecture" className="mb-32 scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-10 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B478FF] to-[#FF63B0] flex items-center justify-center">
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  System Architecture
                </h2>
              </div>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                To balance computational load with low-latency search requirements, the system employs a <strong className="text-white">Dual-Pipeline Architecture</strong> 
                that decouples resource-intensive analysis from user-facing interactions. This design separates offline indexing operations 
                from online retrieval operations.
              </p>

              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#5FF7FF]/20 to-[#B478FF]/20 rounded-2xl blur-lg opacity-50" />
                  <div className="relative glass p-8 rounded-2xl border border-[#5FF7FF]/30 bg-gradient-to-br from-[#5FF7FF]/5 to-transparent">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-[#5FF7FF]/20 flex items-center justify-center">
                      </div>
                      <h3 className="text-3xl font-bold text-[#5FF7FF]">
                        Offline Indexing Pipeline
                      </h3>
                    </div>
                    <p className="text-lg text-gray-200 mb-6">
                      This pipeline handles video ingestion and analysis before user queries occur, ensuring the system is prepared for search 
                      operations. All processing occurs asynchronously.
                    </p>
                    <div className="space-y-4">
                      {[
                        { title: 'Video Ingestion', desc: 'Videos are uploaded directly to cloud storage, bypassing application server bottlenecks. This approach ensures reliability for large file transfers.' },
                        { title: 'Automated Processing', desc: 'Upload events trigger serverless compute instances to begin processing immediately. The architecture is event-driven, requiring no manual intervention.' },
                        { title: 'Frame Analysis', desc: 'The system employs intelligent frame sampling to balance temporal resolution with processing efficiency. State-of-the-art face detection networks localize and align faces within video streams.' },
                        { title: 'Vector Embedding Generation', desc: 'Detected faces are converted into high-dimensional vector embeddings. These vectors abstract facial features into numerical representations that are robust to moderate changes in expression and pose.' },
                        { title: 'Indexing', desc: 'Generated embeddings, coupled with metadata including timestamps and camera identifiers, are stored in a vector database optimized for nearest-neighbor search operations.' },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-4 p-4 glass rounded-xl border border-white/10"
                        >
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                            <p className="text-gray-300">{item.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FF63B0]/20 to-[#5FF7FF]/20 rounded-2xl blur-lg opacity-50" />
                  <div className="relative glass p-8 rounded-2xl border border-[#FF63B0]/30 bg-gradient-to-br from-[#FF63B0]/5 to-transparent">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-[#FF63B0]/20 flex items-center justify-center">
                      </div>
                      <h3 className="text-3xl font-bold text-[#FF63B0]">
                        Online Retrieval Pipeline
                      </h3>
                    </div>
                    <p className="text-lg text-gray-200 mb-6">
                      This pipeline is optimized for low-latency responses, handling user search requests synchronously with minimal delay.
                    </p>
                    <div className="space-y-4">
                      {[
                        { title: 'Query Formulation', desc: 'When a user uploads a reference image, the system validates the input and generates a query vector using the same encoding engine employed during indexing. This ensures consistency between query and indexed vectors.' },
                        { title: 'Similarity Search', desc: 'The system executes cosine similarity search against the vector index. To optimize performance, the search space is constrained using metadata filters such as event identifiers and time ranges.' },
                        { title: 'Result Aggregation', desc: 'Raw search results are processed through a custom aggregation engine that groups detections and adds temporal context buffers, transforming discrete frame hits into watchable video segments.' },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-4 p-4 glass rounded-xl border border-white/10"
                        >
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                            <p className="text-gray-300">{item.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Core Technologies */}
        <section id="technologies" className="mb-32 scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-10 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF63B0] to-[#5FF7FF] flex items-center justify-center">
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Core Technologies and Methodology
                </h2>
              </div>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                The system integrates computer vision, vector mathematics, and cloud engineering to achieve its objectives.
              </p>

              <div className="space-y-8">
                <div className="glass p-8 rounded-2xl border border-[#5FF7FF]/30 bg-gradient-to-br from-[#5FF7FF]/5 to-transparent">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-3xl font-bold text-[#5FF7FF]">
                      Deep Facial Representation
                    </h3>
                  </div>
                  <p className="text-lg text-gray-200 mb-6">
                    Rather than relying on pixel-level matching, the system abstracts facial identity into a mathematical vector space. 
                    This approach enables recognition across variations in expression, pose, and lighting conditions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="glass p-5 rounded-xl border border-white/10">
                      <p className="text-sm text-[#5FF7FF] font-semibold mb-2">Embedding Model</p>
                      <p className="text-gray-200">
                        The system utilizes <strong className="text-white">ArcFace</strong> (Additive Angular Margin Loss) architectures. 
                        This model was selected for its ability to maximize the decision margin between different identities, ensuring 
                        high accuracy in unconstrained scenarios.
                      </p>
                    </div>
                    <div className="glass p-5 rounded-xl border border-white/10">
                      <p className="text-sm text-[#5FF7FF] font-semibold mb-2">Vector Normalization</p>
                      <p className="text-gray-200">
                        Embeddings are L2-normalized, enabling the use of <strong className="text-white">angular distance</strong> 
                        (cosine similarity) as a reliable metric for identity verification. This approach provides computational 
                        efficiency and accuracy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass p-8 rounded-2xl border border-[#FF63B0]/30 bg-gradient-to-br from-[#FF63B0]/5 to-transparent">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-3xl font-bold text-[#FF63B0]">
                      Vector Search Architecture
                    </h3>
                  </div>
                  <p className="text-lg text-gray-200 mb-6">
                    Traditional relational databases cannot efficiently query similarity relationships. The system employs <strong className="text-white">Qdrant</strong>, 
                    a vector database that manages millions of embeddings and executes Approximate Nearest Neighbor (ANN) searches in milliseconds.
                  </p>
                  <div className="glass p-6 rounded-xl border border-white/10">
                    <p className="text-gray-200">
                      <strong className="text-white">Hybrid filtering</strong> combines vector search performance with metadata precision. 
                      The system supports filtering by event identifiers, time ranges, and camera locations, enabling efficient query 
                      refinement while maintaining search speed.
                    </p>
                  </div>
                </div>

                <div className="glass p-8 rounded-2xl border border-[#B478FF]/30 bg-gradient-to-br from-[#B478FF]/5 to-transparent">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-3xl font-bold text-[#B478FF]">
                      Temporal Clustering Algorithm
                    </h3>
                  </div>
                  <p className="text-lg text-gray-200 mb-6">
                    Raw vector search returns individual frame detections, which presents a fragmented user experience. A proprietary 
                    <strong className="text-white"> Temporal Grouping Algorithm</strong> addresses this by intelligently clustering 
                    detections based on temporal proximity and handling occlusions.
                  </p>
                  <div className="space-y-4">
                    {[
                      { title: 'Temporal Clustering', desc: 'Groups frame detections based on temporal proximity. If an individual appears in frames 100, 101, 102, and 105, the algorithm identifies a continuous presence from frame 100 to 105.' },
                      { title: 'Occlusion Handling', desc: 'Accounts for momentary occlusions such as head turns or objects passing between the camera and subject. Small temporal gaps are automatically bridged to maintain continuity.' },
                      { title: 'Context Buffering', desc: 'Expands clip boundaries beyond exact detection frames to provide temporal context. This ensures users receive complete moments rather than abrupt cuts.' },
                    ].map((item, idx) => (
                      <div key={idx} className="glass p-5 rounded-xl border border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-300">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Technology Stack */}
        <section id="stack" className="mb-32 scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-10 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5FF7FF] to-[#B478FF] flex items-center justify-center">
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Technology Stack
                </h2>
              </div>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                The system employs a modern, type-safe, and containerized technology stack designed for maintainability and scalability.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass p-7 rounded-2xl border border-[#5FF7FF]/30 bg-gradient-to-br from-[#5FF7FF]/5 to-transparent">
                  <h3 className="text-2xl font-bold mb-5 text-[#5FF7FF]">
                    Backend and AI
                  </h3>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-start gap-3">
                      <span className="text-[#5FF7FF] mt-1">▸</span>
                      <span><strong className="text-white">Python 3.10+</strong> — Selected for its comprehensive AI and machine learning ecosystem</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5FF7FF] mt-1">▸</span>
                      <span><strong className="text-white">FastAPI</strong> — Chosen for asynchronous support (ASGI), essential for handling concurrent I/O-bound search requests</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5FF7FF] mt-1">▸</span>
                      <span><strong className="text-white">InsightFace and OpenCV</strong> — Provide the face detection and processing pipeline</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5FF7FF] mt-1">▸</span>
                      <span><strong className="text-white">ONNX Runtime (GPU)</strong> — Optimizes model inference speeds, reducing computational cost for embedding generation</span>
                    </li>
                  </ul>
                </div>

                <div className="glass p-7 rounded-2xl border border-[#FF63B0]/30 bg-gradient-to-br from-[#FF63B0]/5 to-transparent">
                  <h3 className="text-2xl font-bold mb-5 text-[#FF63B0]">
                    Infrastructure and Data
                  </h3>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF63B0] mt-1">▸</span>
                      <span><strong className="text-white">Qdrant</strong> — Vector database that scales to millions of embeddings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF63B0] mt-1">▸</span>
                      <span><strong className="text-white">PostgreSQL (AWS RDS)</strong> — Manages structured business logic, event details, and processing states</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF63B0] mt-1">▸</span>
                      <span><strong className="text-white">Amazon S3</strong> — Handles raw video assets and utilizes signed URLs for secure, time-limited playback access</span>
                    </li>
                  </ul>
                </div>

                <div className="glass p-7 rounded-2xl border border-[#B478FF]/30 bg-gradient-to-br from-[#B478FF]/5 to-transparent md:col-span-2">
                  <h3 className="text-2xl font-bold mb-5 text-[#B478FF]">
                    Frontend Interface
                  </h3>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-start gap-3">
                      <span className="text-[#B478FF] mt-1">▸</span>
                      <span><strong className="text-white">Next.js (React 18) with TypeScript</strong> — Provides modern, type-safe frontend development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#B478FF] mt-1">▸</span>
                      <span><strong className="text-white">Tailwind CSS and Radix UI</strong> — Enable responsive, accessible component architecture</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#B478FF] mt-1">▸</span>
                      <span><strong className="text-white">User Experience Features</strong> — Includes drag-and-drop uploads, skeleton loading states for perceived performance, and an interactive video player that seeks precisely to detected timestamps</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Cloud Native Deployment */}
        <section id="deployment" className="mb-32 scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-10 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF63B0] to-[#5FF7FF] flex items-center justify-center">
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Cloud-Native Deployment
                </h2>
              </div>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                Scalability was a primary requirement. The system is deployed entirely on Amazon Web Services (AWS) using a serverless 
                container strategy that enables automatic scaling.
              </p>

              <div className="space-y-6">
                <div className="glass p-7 rounded-2xl border border-[#5FF7FF]/30 bg-gradient-to-br from-[#5FF7FF]/5 to-transparent">
                  <h3 className="text-2xl font-bold mb-4 text-[#5FF7FF]">
                    Containerization
                  </h3>
                  <p className="text-lg text-gray-200">
                    All services are containerized using Docker with <strong className="text-white">multi-stage builds</strong> to optimize 
                    image size and security. This approach reduces deployment complexity and improves portability.
                  </p>
                </div>

                <div className="glass p-7 rounded-2xl border border-[#FF63B0]/30 bg-gradient-to-br from-[#FF63B0]/5 to-transparent">
                  <h3 className="text-2xl font-bold mb-4 text-[#FF63B0]">
                    Orchestration: AWS Fargate
                  </h3>
                  <div className="space-y-4 text-gray-200">
                    <div className="glass p-5 rounded-xl border border-white/10">
                      <p className="text-lg font-semibold text-white mb-2">Dynamic Scaling</p>
                      <p>
                        The Indexing Service runs as <strong className="text-[#FF63B0]">on-demand Fargate Tasks</strong>. This architecture 
                        enables parallel processing of multiple video uploads without maintaining idle server infrastructure, optimizing 
                        cost efficiency.
                      </p>
                    </div>
                    <div className="glass p-5 rounded-xl border border-white/10">
                      <p className="text-lg font-semibold text-white mb-2">High Availability</p>
                      <p>
                        The Search Service runs as a <strong className="text-[#FF63B0]">persistent Fargate Service</strong> behind an 
                        Application Load Balancer. The service auto-scales based on CPU utilization to handle traffic variations 
                        automatically.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass p-7 rounded-2xl border border-[#B478FF]/30 bg-gradient-to-br from-[#B478FF]/5 to-transparent">
                  <h3 className="text-2xl font-bold mb-4 text-[#B478FF]">
                    Continuous Integration and Deployment
                  </h3>
                  <p className="text-lg text-gray-200">
                    Automated pipelines via GitHub Actions manage testing, building, and deployment to <strong className="text-white">Amazon ECR/ECS</strong>. 
                    This enables rapid iteration cycles and ensures consistent deployment processes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Performance & Reliability */}
        <section id="performance" className="mb-32 scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-10 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5FF7FF] to-[#FF63B0] flex items-center justify-center">
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Performance and Reliability
                </h2>
              </div>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                The system underwent rigorous testing to ensure it meets the demands of real-world usage scenarios.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="glass p-6 rounded-2xl border border-[#5FF7FF]/30 bg-gradient-to-br from-[#5FF7FF]/10 to-transparent text-center">
                  <h3 className="text-xl font-bold text-[#5FF7FF] mb-2">Low Latency</h3>
                  <p className="text-gray-200">
                    The runtime search pipeline is optimized to deliver results with <strong className="text-white">sub-second latency</strong>, 
                    maintaining performance even under concurrent load conditions.
                  </p>
                </div>

                <div className="glass p-6 rounded-2xl border border-[#FF63B0]/30 bg-gradient-to-br from-[#FF63B0]/10 to-transparent text-center">
                  <h3 className="text-xl font-bold text-[#FF63B0] mb-2">Processing Efficiency</h3>
                  <p className="text-gray-200">
                    Through intelligent frame sampling and resource optimization, video processing throughput improved by approximately 
                    <strong className="text-white"> 90%</strong> compared to baseline approaches.
                  </p>
                </div>

                <div className="glass p-6 rounded-2xl border border-[#B478FF]/30 bg-gradient-to-br from-[#B478FF]/10 to-transparent text-center">
                  <h3 className="text-xl font-bold text-[#B478FF] mb-2">Accuracy Metrics</h3>
                  <p className="text-gray-200">
                    Through ablation studies on similarity thresholds, the system was tuned to balance <strong className="text-white">Precision and Recall</strong>, 
                    minimizing false positives while ensuring comprehensive detection coverage.
                  </p>
                </div>
              </div>

              <div className="glass p-7 rounded-2xl border border-[#FFD700]/40 bg-gradient-to-br from-[#FFD700]/10 to-transparent mb-8">
                <h3 className="text-2xl font-bold mb-4 text-[#FFD700]">
                  Key Engineering Decisions
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold text-white mb-2">Trade-off: Accuracy vs. Performance</p>
                    <p className="text-gray-200 mb-3">
                      <strong className="text-white">Accepted 15-20% accuracy loss to achieve ~90% speed improvement.</strong>
                    </p>
                    <p className="text-gray-300 text-sm">
                      <strong className="text-gray-200">Reasoning:</strong> For this use case, recall mattered more than precision because users could visually 
                      confirm results, allowing aggressive speed optimizations. The slight reduction in accuracy was acceptable given the substantial 
                      performance gains and the ability for users to validate results manually.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass p-7 rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-transparent">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Engineering Solutions
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Data Consistency</h4>
                      <p className="text-gray-200">
                        Variable frame rates in source videos initially caused timestamp drift, affecting accurate clip boundary determination. 
                        This was resolved through implementation of <strong className="text-white">monotonic time sorting and synchronization logic</strong> 
                        to ensure precise segment boundaries.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">User Experience Enhancement</h4>
                      <p className="text-gray-200">
                        Raw AI outputs can be fragmented and difficult to interpret. By implementing <strong className="text-white">&quot;Contextual User Windows&quot;</strong> 
                        (temporal buffering), discrete detection points were transformed into coherent, watchable video segments suitable for user consumption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* System Architecture Diagram */}
        <section id="architecture-diagram" className="mb-32 scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-10 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5FF7FF] to-[#B478FF] flex items-center justify-center">
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  System Architecture Diagram
                </h2>
              </div>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="/FindMeInTheCrowdPage.png"
                  alt="Find Me In The Crowd System Architecture Diagram"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Privacy & Ethical Safeguards */}
        <section id="privacy" className="mb-32 scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-10 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF63B0] to-[#5FF7FF] flex items-center justify-center">
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Privacy and Ethical Safeguards
                </h2>
              </div>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                The system implements comprehensive privacy protections and ethical safeguards in compliance with PDPA and GDPR regulations. 
                The following technical measures ensure user data protection:
              </p>

              <div className="space-y-6">
                <div className="glass p-6 rounded-2xl border border-[#5FF7FF]/30 bg-gradient-to-br from-[#5FF7FF]/5 to-transparent">
                  <h3 className="text-xl font-bold mb-3 text-[#5FF7FF]">Explicit Consent Management</h3>
                  <p className="text-gray-200">
                    The system implements explicit user and administrator consent flows. Users must provide informed consent before their 
                    images are processed, and administrators must acknowledge data handling policies before accessing the system.
                  </p>
                </div>

                <div className="glass p-6 rounded-2xl border border-[#FF63B0]/30 bg-gradient-to-br from-[#FF63B0]/5 to-transparent">
                  <h3 className="text-xl font-bold mb-3 text-[#FF63B0]">Data Isolation</h3>
                  <p className="text-gray-200">
                    <strong className="text-white">No cross-event identity linking:</strong> The system is designed to prevent identity 
                    correlation across different events. Each event maintains isolated data stores, ensuring that facial recognition data 
                    from one event cannot be linked to identities in another event.
                  </p>
                </div>

                <div className="glass p-6 rounded-2xl border border-[#B478FF]/30 bg-gradient-to-br from-[#B478FF]/5 to-transparent">
                  <h3 className="text-xl font-bold mb-3 text-[#B478FF]">Minimal Data Storage</h3>
                  <p className="text-gray-200">
                    <strong className="text-white">Embeddings stored without raw images:</strong> After processing, only vector embeddings 
                    are retained in the database. Original images are not stored, reducing privacy risks and storage requirements. Raw 
                    video files remain in secure, access-controlled storage with time-limited access.
                  </p>
                </div>

                <div className="glass p-6 rounded-2xl border border-[#5FF7FF]/30 bg-gradient-to-br from-[#5FF7FF]/5 to-transparent">
                  <h3 className="text-xl font-bold mb-3 text-[#5FF7FF]">Data Deletion Capabilities</h3>
                  <p className="text-gray-200">
                    The system provides manual data deletion features that allow users and administrators to request removal of their data. 
                    This includes deletion of embeddings, metadata, and associated video segments, with confirmation workflows to ensure 
                    proper data removal.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

       
       
        {/* Conclusion */}
        <section id="conclusion" className="mb-32 scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF63B0]/20 via-[#5FF7FF]/20 to-[#B478FF]/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative glass-card p-10 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF63B0] via-[#5FF7FF] to-[#B478FF] flex items-center justify-center">
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Conclusion
                  </h2>
                </div>
                <div className="space-y-6 text-gray-200 leading-relaxed text-lg">
                  <p className="text-xl text-gray-100">
                    Find Me In The Crowd demonstrates the capacity to architect and deliver a full-stack AI solution that addresses a complex 
                    data retrieval problem. By successfully integrating deep learning, vector search, and serverless cloud architecture, this 
                    project highlights proficiency in building systems that are technically rigorous, scalable, and user-centric.
                  </p>
                  <p>
                    The platform effectively transforms hours of passive, unstructured video footage into dynamic, searchable digital assets. 
                    This showcases the potential of intelligent video analytics in the event industry and demonstrates practical applications 
                    of computer vision and vector database technologies.
                  </p>
                  <p>
                    The system&apos;s architecture, performance characteristics, and user experience design represent a comprehensive approach to 
                    solving real-world problems through systematic engineering and careful technology selection.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-16 border-t border-white/10"
        >
          <p className="text-gray-400 text-sm mb-2">
            © {new Date().getFullYear()} Find Me In The Crowd. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            This project case study is the intellectual property of the developer. Unauthorized reproduction or distribution is prohibited.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
