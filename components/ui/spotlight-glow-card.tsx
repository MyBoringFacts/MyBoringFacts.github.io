"use client";

import * as React from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

type SpotlightGlowCardProps = {
  title: string;
  subtitle?: string;
  steps: string[];
  className?: string;
  radius?: number;
  spotlightColor?: string;
};

export function SpotlightGlowCard({
  title,
  subtitle = "Follow these steps:",
  steps,
  className,
  radius = 320,
  spotlightColor = "#262626",
}: SpotlightGlowCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "group/spotlight relative rounded-2xl border border-neutral-800 bg-black p-2",
        className,
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: spotlightColor,
          maskImage: useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, white, transparent 80%)`,
        }}
      />

      <div className="relative z-10 h-full rounded-xl border border-neutral-700/60 p-6">
        <GlowingEffect
          spread={40}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        <div className="relative z-20 space-y-4">
          <p className="text-xl font-bold text-white">{title}</p>
          <p className="text-sm text-neutral-300">{subtitle}</p>

          <ul className="space-y-2">
            {steps.map((step) => (
              <li key={step} className="flex items-start gap-2 text-sm text-neutral-200">
                <CheckIcon />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="mt-0.5 h-4 w-4 shrink-0 text-blue-500"
      aria-hidden="true"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.707 7.707-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L11 12.586l4.293-4.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  );
}
