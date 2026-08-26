"use client";

import {
  BrainCircuit,
  ChartNoAxesCombined,
  CloudCog,
  Layers3,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { expertise, type Accent } from "@/lib/portfolio-data";

const icons = [BrainCircuit, ShieldCheck, Workflow, ChartNoAxesCombined, CloudCog, Layers3];

const accentStyles: Record<Accent, { dot: string; border: string; ink: string; glow: string }> = {
  orange: {
    dot: "bg-[#ff6b35]",
    border: "border-[#ff6b35]/30 hover:border-[#ff6b35]/70",
    ink: "text-[#ff6b35]",
    glow: "bg-[#ff6b35]/30",
  },
  blue: {
    dot: "bg-[#86a8ff]",
    border: "border-[#86a8ff]/30 hover:border-[#86a8ff]/70",
    ink: "text-[#86a8ff]",
    glow: "bg-[#86a8ff]/30",
  },
  lime: {
    dot: "bg-[#c7f26b]",
    border: "border-[#c7f26b]/30 hover:border-[#c7f26b]/70",
    ink: "text-[#c7f26b]",
    glow: "bg-[#c7f26b]/30",
  },
};

function CardVisual({ index, accent, reduceMotion }: { index: number; accent: Accent; reduceMotion: boolean | null }) {
  const style = accentStyles[accent];

  return (
    <div aria-hidden="true" className="relative mt-8 h-28 overflow-hidden rounded-2xl border border-white/10 bg-[#171a21]">
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.09)_1px,transparent_1px)] [background-size:28px_28px]" />
      {index === 0 && (
        <>
          <div className="absolute left-[18%] top-1/2 h-px w-[64%] bg-white/20" />
          <motion.div
            className={`absolute left-[24%] top-1/2 size-11 -translate-y-1/2 rounded-full ${style.dot} shadow-[0_0_30px_currentColor]`}
            animate={reduceMotion ? undefined : { x: [0, 92, 0], scale: [0.85, 1.08, 0.85] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[18%] top-1/2 size-16 -translate-y-1/2 rounded-full border border-white/30"
            animate={reduceMotion ? undefined : { scale: [0.9, 1.12, 0.9], opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
      {index === 1 && (
        <>
          <motion.div
            className="absolute -inset-x-12 inset-y-0 -skew-x-[25deg] bg-[repeating-linear-gradient(90deg,transparent_0_18px,rgba(255,255,255,.12)_18px_32px)]"
            animate={reduceMotion ? undefined : { x: [-24, 24] }}
            transition={{ duration: 2.8, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
          />
          <motion.div
            className={`absolute bottom-4 left-5 h-2 w-2/3 rounded-full ${style.dot}`}
            animate={reduceMotion ? undefined : { scaleX: [0.3, 1, 0.3] }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
      {index === 2 && (
        <>
          <motion.div
            className={`absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full ${style.glow} blur-xl`}
            animate={reduceMotion ? undefined : { scale: [0.75, 1.2, 0.75], opacity: [0.45, 0.9, 0.45] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 border border-white/35"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />
          <div className={`absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full ${style.dot}`} />
        </>
      )}
      {index === 3 && (
        <>
          <div className="absolute bottom-5 left-7 right-7 h-px bg-white/20" />
          <div className="absolute bottom-5 left-1/2 flex h-20 -translate-x-1/2 items-end gap-3">
            {[0.35, 0.58, 0.82, 0.5, 0.7].map((height, barIndex) => (
              <motion.div
                key={height}
                className={`w-3 rounded-t-sm ${style.dot}`}
                style={{ height: `${height * 100}%`, transformOrigin: "bottom" }}
                animate={reduceMotion ? undefined : { scaleY: [0.35, 1, 0.55, 1] }}
                transition={{ duration: 3.4, repeat: Infinity, delay: barIndex * 0.16, ease: "easeInOut" }}
              />
            ))}
          </div>
          <motion.div
            className="absolute left-[22%] top-5 size-2 rounded-full bg-white"
            animate={reduceMotion ? undefined : { x: [0, 180, 0], opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
      {index === 4 && (
        <>
          <div className="absolute left-1/2 top-1/2 h-px w-[58%] -translate-x-1/2 -translate-y-1/2 rotate-[18deg] bg-white/20" />
          <div className="absolute left-1/2 top-1/2 h-px w-[58%] -translate-x-1/2 -translate-y-1/2 -rotate-[18deg] bg-white/20" />
          {[
            "left-[20%] top-[28%]",
            "right-[20%] top-[28%]",
            "left-[20%] bottom-[22%]",
            "right-[20%] bottom-[22%]",
          ].map((position, nodeIndex) => (
            <motion.span
              key={position}
              className={`absolute size-3 rounded-full border border-white/30 ${position} ${style.dot}`}
              animate={reduceMotion ? undefined : { scale: [0.75, 1.35, 0.75], opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: nodeIndex * 0.35, ease: "easeInOut" }}
            />
          ))}
          <motion.span
            className={`absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 rounded-full ${style.dot} shadow-[0_0_28px_currentColor]`}
            animate={reduceMotion ? undefined : { rotate: 360, scale: [0.9, 1.08, 0.9] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </>
      )}
      {index === 5 && (
        <>
          {[0, 1, 2].map((layer) => (
            <motion.div
              key={layer}
              className="absolute left-[21%] h-9 w-[58%] rounded-lg border border-white/20 bg-[#1d212a]"
              style={{ top: `${18 + layer * 21}%` }}
              animate={reduceMotion ? undefined : { x: [layer % 2 === 0 ? -8 : 8, layer % 2 === 0 ? 8 : -8, layer % 2 === 0 ? -8 : 8] }}
              transition={{ duration: 4 + layer * 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className={`absolute left-3 top-1/2 size-2 -translate-y-1/2 rounded-full ${style.dot}`} />
              <span className="absolute left-8 right-3 top-1/2 h-px -translate-y-1/2 bg-white/15" />
            </motion.div>
          ))}
        </>
      )}
    </div>
  );
}

export function ExpertiseMap() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {expertise.map((item, index) => {
        const Icon = icons[index];
        const style = accentStyles[item.accent];

        return (
          <Dialog key={item.code}>
            <DialogTrigger asChild>
              <button
                type="button"
                className={`group min-h-[340px] rounded-[1.75rem] border bg-[#111318] p-5 text-left text-white shadow-[0_20px_60px_rgba(17,19,24,.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(17,19,24,.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111318] ${style.border}`}
                aria-label={`Explore ${item.title}`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">{item.code} / 06</span>
                  <span className={`grid size-10 place-items-center rounded-full text-[#111318] ${style.dot}`}>
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                </div>
                <CardVisual index={index} accent={item.accent} reduceMotion={reduceMotion} />
                <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">Part of my toolkit</p>
                <div className="mt-2 flex items-end justify-between gap-5">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{item.summary}</p>
                  </div>
                  <span className={`mb-1 shrink-0 text-2xl transition-transform group-hover:rotate-45 ${style.ink}`}>+</span>
                </div>
              </button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto rounded-[2rem] border-white/10 bg-[#111318] p-0 text-white shadow-2xl sm:max-w-2xl" showCloseButton={false}>
              <div className="relative overflow-hidden p-7 sm:p-10">
                <div className={`absolute -right-20 -top-20 size-64 rounded-full blur-3xl ${style.glow}`} />
                <DialogHeader className="relative text-left">
                  <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">
                    <span className={`size-2 rounded-full ${style.dot}`} /> Area {item.code} / What I work with
                  </div>
                  <DialogTitle className="pt-5 text-4xl font-semibold leading-none tracking-[-0.055em] sm:text-6xl">{item.title}</DialogTitle>
                  <DialogDescription className="max-w-xl pt-4 text-base leading-relaxed text-white/60">{item.detail}</DialogDescription>
                </DialogHeader>
                <div className="relative mt-10 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">A real example</p>
                    <p className="mt-3 text-base leading-relaxed">{item.proof}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">Working set</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tools.map((tool) => <span key={tool} className="rounded-full border border-white/20 px-3 py-1.5 text-sm text-white/80">{tool}</span>)}
                    </div>
                  </div>
                </div>
                <DialogClose className="relative mt-8 min-h-11 rounded-full border border-white/20 px-5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/70 transition hover:bg-white hover:text-[#111318] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c7f26b]">
                  Close
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
