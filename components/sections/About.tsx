"use client";

import { useTheme } from "@/components/theme-provider";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const skills = [
  { category: "AI & ML", items: ["LLMs", "RAG Systems", "AI Agents", "NLP", "Computer Vision", "MLOps"] },
  { category: "Frameworks", items: ["LangChain", "LangGraph", "Hugging Face", "OpenAI API", "Qdrant"] },
  { category: "Programming", items: ["Python", "TypeScript", "Node.js", "React", "Next.js", "SQL"] },
  { category: "Infrastructure", items: ["Docker", "AWS", "GCP", "CI/CD", "REST APIs"] },
];

export function AboutSection() {
  const { theme } = useTheme();
  const isColorful = theme === "black-hole";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-4 md:px-8" ref={ref}>
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
            About Me
          </h2>
          <div
            className="h-1 w-20 mb-12"
            style={{ backgroundColor: isColorful ? "#3b82f6" : "#404040" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="relative p-6 rounded-2xl border mb-6"
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
                <p
                  className="text-lg leading-relaxed mb-4"
                  style={{ color: isColorful ? "#a3a3a3" : "#525252" }}
                >
                  AI Engineer with strong experience bridging research and production systems. 
                  I specialize in designing end-to-end machine learning pipelines, production-grade 
                  RAG systems, and multi-agent workflows.
                </p>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: isColorful ? "#a3a3a3" : "#525252" }}
                >
                  Experienced in model lifecycle management, CI/CD pipelines, and deploying 
                  AI services with monitoring, logging, and performance optimization.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div
                className="relative px-4 py-2 rounded-lg border"
                style={{
                  backgroundColor: isColorful ? "rgba(59, 130, 246, 0.1)" : "#f5f5f5",
                  borderColor: isColorful ? "#404040" : "#e5e5e5",
                  color: isColorful ? "#60a5fa" : "#171717",
                }}
              >
                {isColorful && (
                  <GlowingEffect
                    spread={20}
                    glow={true}
                    disabled={false}
                    proximity={32}
                    inactiveZone={0.01}
                  />
                )}
                <span className="relative z-10 font-mono text-sm">GPA: 3.7/4.0</span>
              </div>
              <div
                className="relative px-4 py-2 rounded-lg border"
                style={{
                  backgroundColor: isColorful ? "rgba(59, 130, 246, 0.1)" : "#f5f5f5",
                  borderColor: isColorful ? "#404040" : "#e5e5e5",
                  color: isColorful ? "#60a5fa" : "#171717",
                }}
              >
                {isColorful && (
                  <GlowingEffect
                    spread={20}
                    glow={true}
                    disabled={false}
                    proximity={32}
                    inactiveZone={0.01}
                  />
                )}
                <span className="relative z-10 font-mono text-sm">B.S. Computer Science</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {skills.map((skillGroup, idx) => (
              <div
                key={skillGroup.category}
                className="relative p-4 rounded-xl border"
                style={{
                  backgroundColor: isColorful ? "rgba(38, 38, 38, 0.3)" : "#ffffff",
                  borderColor: isColorful ? "#404040" : "#e5e5e5",
                }}
              >
                {isColorful && (
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={48}
                    inactiveZone={0.01}
                  />
                )}
                <div className="relative z-10">
                  <h3
                    className="text-sm font-mono uppercase tracking-wider mb-3"
                    style={{ color: isColorful ? "#60a5fa" : "#737373" }}
                  >
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIdx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 + skillIdx * 0.05 }}
                        className="px-3 py-1 text-sm rounded-full border"
                        style={{
                          borderColor: isColorful ? "#525252" : "#e5e5e5",
                          color: isColorful ? "#d4d4d4" : "#404040",
                          backgroundColor: isColorful ? "rgba(38, 38, 38, 0.5)" : "rgba(255, 255, 255, 0.8)",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
