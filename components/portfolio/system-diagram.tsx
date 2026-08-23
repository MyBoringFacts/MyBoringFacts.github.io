"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Accent, Project } from "@/lib/portfolio-data";

const accentHex: Record<Accent, string> = {
  orange: "#ff6b35",
  blue: "#86a8ff",
  lime: "#c7f26b",
};

export function SystemDiagram({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const accent = accentHex[project.accent];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0e13] p-5 sm:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="relative flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
        <span>System topology / {project.index}</span>
        <span style={{ color: accent }}>Nominal</span>
      </div>
      <div className="relative mt-12 grid gap-5 md:grid-cols-4 md:gap-3">
        <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-white/15 md:block" />
        <motion.div
          aria-hidden="true"
          className="absolute top-[30px] hidden size-1.5 rounded-full md:block"
          style={{ backgroundColor: accent, boxShadow: `0 0 14px ${accent}` }}
          animate={reduceMotion ? { left: "78%" } : { left: ["8%", "88%"] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
        />
        {project.architecture.map((node, index) => (
          <div key={node.label} className="relative z-10">
            <div className="grid size-16 place-items-center rounded-full border border-white/20 bg-[#111318] font-mono text-xs text-white" style={{ boxShadow: index === 0 ? `0 0 0 4px ${accent}22` : undefined }}>
              0{index + 1}
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em]">{node.label}</h3>
            <p className="mt-2 max-w-[13rem] text-sm leading-relaxed text-white/45">{node.detail}</p>
          </div>
        ))}
      </div>
      <div className="relative mt-12 flex flex-wrap gap-2 border-t border-white/10 pt-5">
        {project.stack.map((tool) => <span key={tool} className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/55">{tool}</span>)}
      </div>
    </div>
  );
}
