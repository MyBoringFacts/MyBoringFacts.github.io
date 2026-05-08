"use client";

import { useTheme } from "@/components/theme-provider";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const projects = [
  {
    title: "Video Intelligence & Face Search Platform",
    period: "10/2025",
    description: "Search people in videos using face similarity and embedding-based retrieval",
    highlights: [
      "90% reduction in video processing time",
      "Sub-second identity search across large datasets",
      "Scalable AWS architecture (Lambda, ECS, RDS)",
    ],
    tech: ["Python", "AWS", "Qdrant", "Next.js", "React"],
  },
  {
    title: "RAG Platform for Document Intelligence",
    period: "02/2025",
    description: "Document-based chatbot using retrieval-augmented generation",
    highlights: [
      "Improved answer accuracy through document retrieval",
      "Reduced response latency via automated pipelines",
      "Enhanced quality with ranking strategies",
    ],
    tech: ["LangChain", "OpenAI", "Vector DB", "Python"],
  },
  {
    title: "End-to-End OCR & Vision Pipeline",
    period: "02/2025",
    description: "Computer vision pipeline for receipt text detection and localization",
    highlights: [
      "50+ hours saved via automated annotation",
      "0.93 text detection accuracy on Thai receipts",
      "Custom YOLOv11 fine-tuning",
    ],
    tech: ["YOLOv11", "Azure AI Vision", "Python", "OpenCV"],
  },
  {
    title: "LLM Fine Tuning for News Summarization",
    period: "08/2025",
    description: "Fine-tuned FLAN T5 model for improved news summarization",
    highlights: [
      "Improved summarization metrics",
      "Reproducible training pipeline",
      "Systematic hyperparameter tuning",
    ],
    tech: ["Hugging Face", "FLAN T5", "Python", "PyTorch"],
  },
];

export function ProjectsSection() {
  const { theme } = useTheme();
  const isColorful = theme === "black-hole";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 px-4 md:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ color: isColorful ? "#fafafa" : "#171717" }}
          >
            Projects
          </h2>
          <div
            className="h-1 w-20 mb-12"
            style={{ backgroundColor: isColorful ? "#ec4899" : "#404040" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.15 }}
            >
              <div
                className="relative h-full p-8 rounded-2xl border"
                style={{
                  backgroundColor: isColorful ? "rgba(38, 38, 38, 0.5)" : "#ffffff",
                  borderColor: isColorful ? "#404040" : "#e5e5e5",
                }}
              >
                {isColorful && (
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                )}
                <ProjectContent project={project} isColorful={isColorful} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectContent({
  project,
  isColorful,
}: {
  project: (typeof projects)[0];
  isColorful: boolean;
}) {
  return (
    <div className="relative z-10">
      <span
        className="text-xs font-mono"
        style={{ color: isColorful ? "#a3a3a3" : "#737373" }}
      >
        {project.period}
      </span>
      <h3
        className="text-xl font-bold mt-2 mb-3"
        style={{ color: isColorful ? "#fafafa" : "#171717" }}
      >
        {project.title}
      </h3>
      <p
        className="text-sm mb-4"
        style={{ color: isColorful ? "#a3a3a3" : "#525252" }}
      >
        {project.description}
      </p>
      <ul className="space-y-2 mb-6">
        {project.highlights.map((highlight, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-sm"
            style={{ color: isColorful ? "#d4d4d4" : "#404040" }}
          >
            <span style={{ color: isColorful ? "#22c55e" : "#171717" }}>•</span>
            {highlight}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded-full"
            style={{
              backgroundColor: isColorful ? "rgba(59, 130, 246, 0.2)" : "#f5f5f5",
              color: isColorful ? "#60a5fa" : "#404040",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
