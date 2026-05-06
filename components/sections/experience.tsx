"use client";

import { useTheme } from "@/components/theme-provider";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const experiences = [
  {
    title: "AI Developer (Freelance)",
    company: "SoeMindAI, Inc.",
    period: "02/2026 – Present",
    highlights: [
      "Cut AI costs by ~30% via optimized prompt design and model selection",
      "Automated end-to-end presentation slide creation, reducing multi-hour workflow to minutes",
      "Improved unified study platform with 10 learning tools including flashcards and mind maps",
      "Engineered job prep platform with ATS compatibility and interview prep",
    ],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Language Understanding Laboratory (LU Lab)",
    period: "06/2025 – 08/2025",
    highlights: [
      "Fine-tuned transformer models (mT5) to improve EM/F1 scores",
      "Built reproducible ML pipelines using Hugging Face",
      "Conducted quantitative research for model optimization and validation",
    ],
  },
  {
    title: "AI Engineer Apprenticeship",
    company: "Intelligent Systems Laboratory (ISL)",
    period: "01/2024 – 10/2025",
    highlights: [
      "Designed and deployed production-grade RAG systems",
      "Built end-to-end ML pipelines including data ingestion and model serving",
      "Operationalized LLM applications via REST APIs",
      "Implemented monitoring for model performance and latency",
    ],
  },
];

export function ExperienceSection() {
  const { theme } = useTheme();
  const isColorful = theme === "black-hole";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 px-4 md:px-8" ref={ref}>
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
            Experience
          </h2>
          <div
            className="h-1 w-20 mb-12"
            style={{ backgroundColor: isColorful ? "#8b5cf6" : "#404040" }}
          />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
            style={{ backgroundColor: isColorful ? "#404040" : "#e5e5e5" }}
          />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.2 }}
              className={`relative mb-12 pl-8 md:pl-0 ${
                idx % 2 === 0 ? "md:pr-[calc(50%+2rem)] md:text-right" : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full md:-translate-x-1/2 -translate-x-1/2"
                style={{
                  backgroundColor: isColorful ? "#8b5cf6" : "#404040",
                  boxShadow: isColorful ? "0 0 20px rgba(139, 92, 246, 0.5)" : "none",
                }}
              />

              <div
                className="relative p-6 rounded-2xl border"
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
                <div className="relative z-10">
                  <span
                    className="text-sm font-mono"
                    style={{ color: isColorful ? "#8b5cf6" : "#737373" }}
                  >
                    {exp.period}
                  </span>
                  <h3
                    className="text-xl font-bold mt-2"
                    style={{ color: isColorful ? "#fafafa" : "#171717" }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: isColorful ? "#a3a3a3" : "#525252" }}
                  >
                    {exp.company}
                  </p>
                  <ul className={`space-y-2 ${idx % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-sm"
                        style={{ color: isColorful ? "#a3a3a3" : "#525252" }}
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
