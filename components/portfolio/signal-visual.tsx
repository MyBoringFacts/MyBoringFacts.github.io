"use client";

import { ArrowRight, Check, Database, Layers3, Rocket } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const stages = [
  { label: "Understand", detail: "Messy data", icon: Database, accent: "text-[#ff6b35]" },
  { label: "Build", detail: "Model + context", icon: Layers3, accent: "text-[#86a8ff]" },
  { label: "Ship", detail: "Useful product", icon: Rocket, accent: "text-[#c7f26b]" },
];

export function SignalVisual({ compact = false }: { compact?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`relative w-full overflow-hidden rounded-[2rem] border border-white/12 bg-[#10131a] text-white ${compact ? "aspect-[16/9]" : "aspect-[4/4.6]"}`}>
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      <motion.div
        aria-hidden="true"
        className="absolute -right-12 top-10 size-44 rounded-full bg-[#86a8ff]/15 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -28, 0], y: [0, 34, 0], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex h-full flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#c7f26b] sm:text-[11px]">How I work / 01</p>
            <h2 className="mt-3 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">From a real problem to a system people can trust.</h2>
          </div>
          <motion.span
            aria-label="System ready"
            className="grid size-9 shrink-0 place-items-center rounded-full border border-[#c7f26b]/40 bg-[#c7f26b]/10 text-[#c7f26b]"
            animate={reduceMotion ? undefined : { boxShadow: ["0 0 0 0 rgba(199,242,107,0)", "0 0 0 8px rgba(199,242,107,.08)", "0 0 0 0 rgba(199,242,107,0)"] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Check className="size-4" aria-hidden="true" />
          </motion.span>
        </div>

        <div className="relative my-auto py-8">
          <div className="absolute left-[12%] right-[12%] top-1/2 h-px -translate-y-1/2 bg-white/15" />
          <motion.div
            aria-hidden="true"
            className="absolute left-[12%] top-1/2 size-2 -translate-y-1/2 rounded-full bg-[#c7f26b] shadow-[0_0_18px_4px_rgba(199,242,107,.45)]"
            animate={reduceMotion ? undefined : { left: ["12%", "49%", "86%"] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative grid grid-cols-3 gap-3">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div key={stage.label} className="flex flex-col items-center text-center">
                  <motion.div
                    className="grid size-14 place-items-center rounded-2xl border border-white/15 bg-[#161a22] shadow-[0_12px_30px_rgba(0,0,0,.22)] sm:size-16"
                    animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.45, ease: "easeInOut" }}
                  >
                    <Icon className={`size-5 ${stage.accent}`} aria-hidden="true" />
                  </motion.div>
                  <p className="mt-4 text-sm font-semibold sm:text-base">{stage.label}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.07em] text-white/55">{stage.detail}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-white/15 pt-4 font-mono text-[10px] uppercase tracking-[0.07em] text-white/60">
          <span>Grounded</span>
          <span className="text-center">Evaluated</span>
          <span className="inline-flex items-center justify-end gap-1 text-[#c7f26b]">Deployed <ArrowRight className="size-3" aria-hidden="true" /></span>
        </div>
      </div>
    </div>
  );
}
