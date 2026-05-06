"use client";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { useTheme } from "@/components/theme-provider";
import { motion } from "motion/react";

export function HeroSection() {
  const { theme } = useTheme();
  const isColorful = theme === "black-hole";

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <BackgroundRippleEffect
        className="z-0"
        rotateColors={isColorful}
      />

      <div className="relative z-10 text-center px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span
            className="text-sm md:text-base font-mono tracking-widest uppercase"
            style={{ color: isColorful ? "#60a5fa" : "#737373" }}
          >
            AI Engineer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          style={{ color: isColorful ? "#fafafa" : "#171717" }}
        >
          Thadoe Hein
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
          style={{ color: isColorful ? "#a3a3a3" : "#525252" }}
        >
          Bridging research and production systems, specializing in MLOps, LLM systems, and scalable AI platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="pointer-events-auto px-6 py-3 rounded-lg font-medium transition-all duration-300"
            style={{
              backgroundColor: isColorful ? "#3b82f6" : "#171717",
              color: "#ffffff",
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="pointer-events-auto px-6 py-3 rounded-lg font-medium border transition-all duration-300"
            style={{
              borderColor: isColorful ? "#3b82f6" : "#404040",
              color: isColorful ? "#3b82f6" : "#171717",
              backgroundColor: "transparent",
            }}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isColorful ? "#60a5fa" : "#737373"}
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
