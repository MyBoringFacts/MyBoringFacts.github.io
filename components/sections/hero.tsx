"use client";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { useTheme } from "@/components/theme-provider";
import { motion, useReducedMotion } from "motion/react";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const BackgroundBeams = dynamic(
  () => import("@/components/ui/background-beams").then((mod) => mod.BackgroundBeams),
  { ssr: false }
);

export function HeroSection() {
  const { theme } = useTheme();
  const isColorful = theme === "black-hole";
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    void import("@/components/ui/background-beams");

    const revealHero = () => {
      if (!heroRef.current) return;

      const animatedNodes = heroRef.current.querySelectorAll<HTMLElement>(
        "[data-hero-motion]",
      );

      animatedNodes.forEach((node) => {
        node.style.opacity = "1";
        node.style.transform = "translateY(0)";
      });
    };

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        revealHero();
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  return (
    <section
      ref={heroRef}
      className="cosmic-hero relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {theme === "white-hole" ? (
        <BackgroundBeams className="opacity-90" />
      ) : (
        <BackgroundRippleEffect
          rotateColors={isColorful}
          fillContainer
          edgeToEdge
          className="z-0 opacity-100"
        />
      )}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className={`absolute inset-0 ${
            isColorful
              ? "bg-[radial-gradient(circle_at_50%_46%,rgba(20,20,20,0.05)_0%,rgba(8,8,8,0.44)_42%,rgba(0,0,0,0.74)_100%)]"
              : "bg-[radial-gradient(circle_at_50%_46%,rgba(255,255,255,0)_0%,rgba(250,250,250,0.82)_54%,rgba(255,255,255,0.98)_100%)]"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.9 }}
        />
        <motion.div
          className={`absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
            isColorful
              ? "bg-[radial-gradient(circle,rgba(10,10,10,0.92)_0%,rgba(10,10,10,0.5)_42%,rgba(255,255,255,0)_74%)]"
              : "bg-[radial-gradient(circle,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.52)_46%,rgba(255,255,255,0)_74%)]"
          }`}
          animate={
            shouldReduceMotion
              ? {}
              : { scale: [1, 1.05, 1], opacity: [0.86, 1, 0.86] }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 pointer-events-none text-center px-4">
        <motion.div
          data-hero-motion
          initial={false}
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
          data-hero-motion
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          style={{ color: isColorful ? "#fafafa" : "#171717" }}
        >
          Thadoe Hein
        </motion.h1>

        <motion.p
          data-hero-motion
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
          style={{ color: isColorful ? "#a3a3a3" : "#525252" }}
        >
          Bridging research and production systems, specializing in MLOps, LLM systems, and scalable AI platforms.
        </motion.p>

        <motion.div
          data-hero-motion
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="pointer-events-auto px-6 py-3 rounded-lg font-medium transition-all duration-300"
            style={{
              backgroundColor: isColorful ? "#111111" : "#0f0f0f",
              color: "#ffffff",
              boxShadow: isColorful
                ? "0 0 0 1px rgba(255,255,255,0.1), 0 0 30px rgba(0,0,0,0.45)"
                : "0 0 0 1px rgba(23,23,23,0.25), 0 0 24px rgba(161,161,161,0.22)",
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="pointer-events-auto px-6 py-3 rounded-lg font-medium border transition-all duration-300"
            style={{
              borderColor: isColorful ? "#404040" : "#737373",
              color: isColorful ? "#d4d4d4" : "#171717",
              backgroundColor: isColorful ? "rgba(10,10,10,0.4)" : "rgba(255,255,255,0.55)",
            }}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        data-hero-motion
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isColorful ? "#a3a3a3" : "#525252"}
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
