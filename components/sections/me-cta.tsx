"use client";

import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

import { useTheme } from "@/components/theme-provider";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export function MeCtaSection() {
  const { theme } = useTheme();
  const isColorful = theme === "black-hole";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="me-preview" className="relative pb-32 px-4 md:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: isColorful ? "#fafafa" : "#171717" }}
          >
            Get to know me beyond work.
          </h2>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: isColorful ? "#a3a3a3" : "#525252" }}
          >
            A little more about who I am outside work - the places I love, the
            games I enjoy, and the moments I collect while traveling.
          </p>
          <p
            className="text-sm mt-8"
            style={{ color: isColorful ? "#737373" : "#a3a3a3" }}
          >
            © 2026 Thadoe Hein.
          </p>
        </motion.div>

        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CardSpotlight
            color={isColorful ? "#262626" : "#d4d4d4"}
            className={`rounded-2xl border p-8 text-center ${
              isColorful ? "border-neutral-800 bg-black" : "border-neutral-200 bg-white"
            }`}
          >
            <p
              className="relative z-10 mb-6 text-base md:text-lg"
              style={{ color: isColorful ? "#d4d4d4" : "#404040" }}
            >
              Want to know me beyond projects and work experience?
            </p>
            <Link
              href="/me"
              className="relative z-10 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-transform duration-200 hover:scale-105"
              style={{
                backgroundColor: isColorful ? "#06b6d4" : "#171717",
                color: isColorful ? "#0a0a0a" : "#ffffff",
              }}
            >
              Meet Me Beyond Work
            </Link>
          </CardSpotlight>
        </motion.div>
      </div>
    </section>
  );
}
