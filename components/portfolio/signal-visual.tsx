"use client";

import { motion, useReducedMotion } from "motion/react";

export function SignalVisual({ compact = false }: { compact?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`relative w-full overflow-hidden rounded-[2rem] border border-white/12 bg-[#10131a] ${compact ? "aspect-[16/9]" : "aspect-[4/4.6]"}`}>
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 h-px bg-[#c7f26b] shadow-[0_0_24px_4px_rgba(199,242,107,.5)]"
        animate={reduceMotion ? { top: "45%" } : { top: ["12%", "88%", "12%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute left-[9%] top-[10%] font-mono text-[10px] tracking-[0.14em] text-white/55 sm:text-[11px]">
        LIVE INFERENCE / 06:42:18
      </div>
      <div className={`absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 ${compact ? "size-[56%] max-h-[75%] max-w-[34%]" : "size-[54%]"}`}>
        <div className="absolute inset-[14%] rounded-full border border-dashed border-[#86a8ff]/50" />
        <motion.div
          className="absolute left-1/2 top-1/2 size-[28%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6b35] shadow-[0_0_70px_rgba(255,107,53,.5)]"
          animate={reduceMotion ? undefined : { scale: [0.84, 1.08, 0.84], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-[-10%] rounded-full border border-[#c7f26b]/30"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute left-1/2 top-0 size-3 -translate-x-1/2 rounded-full bg-[#c7f26b] shadow-[0_0_18px_#c7f26b]" />
        </motion.div>
      </div>
      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-[0.09em] text-white/55 sm:bottom-7 sm:left-7 sm:right-7">
        <div className="border-t border-white/15 pt-2 sm:pt-3"><span className="block text-sm text-white sm:text-lg">512</span>dimensions</div>
        <div className="border-t border-white/15 pt-2 sm:pt-3"><span className="block text-sm text-white sm:text-lg">.93</span>confidence</div>
        <div className="border-t border-white/15 pt-2 sm:pt-3"><span className="block text-sm text-[#c7f26b] sm:text-lg">live</span>system</div>
      </div>
    </div>
  );
}
