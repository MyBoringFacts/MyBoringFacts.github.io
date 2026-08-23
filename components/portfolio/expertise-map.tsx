"use client";

import {
  BrainCircuit,
  ChartNoAxesCombined,
  CloudCog,
  Layers3,
  ScanSearch,
  Workflow,
} from "lucide-react";
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

const icons = [BrainCircuit, ScanSearch, Workflow, ChartNoAxesCombined, CloudCog, Layers3];

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

function CardVisual({ index, accent }: { index: number; accent: Accent }) {
  const style = accentStyles[accent];

  return (
    <div aria-hidden="true" className="relative mt-8 h-28 overflow-hidden rounded-2xl border border-white/10 bg-[#171a21]">
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.09)_1px,transparent_1px)] [background-size:28px_28px]" />
      {index % 3 === 0 && (
        <>
          <div className="absolute left-[18%] top-1/2 h-px w-[64%] bg-white/20" />
          <div className={`absolute left-[24%] top-1/2 size-11 -translate-y-1/2 rounded-full ${style.dot} shadow-[0_0_30px_currentColor]`} />
          <div className="absolute right-[18%] top-1/2 size-16 -translate-y-1/2 rounded-full border border-white/30" />
        </>
      )}
      {index % 3 === 1 && (
        <>
          <div className="absolute inset-y-0 left-0 right-0 -skew-x-[25deg] bg-[repeating-linear-gradient(90deg,transparent_0_18px,rgba(255,255,255,.12)_18px_32px)]" />
          <div className={`absolute bottom-4 left-5 h-2 w-2/3 rounded-full ${style.dot}`} />
        </>
      )}
      {index % 3 === 2 && (
        <>
          <div className={`absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full ${style.glow} blur-xl`} />
          <div className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/35" />
          <div className={`absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full ${style.dot}`} />
        </>
      )}
    </div>
  );
}

export function ExpertiseMap() {
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
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">{item.code} / 06</span>
                  <span className={`grid size-10 place-items-center rounded-full text-[#111318] ${style.dot}`}>
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                </div>
                <CardVisual index={index} accent={item.accent} />
                <p className="mt-7 font-mono text-[8px] uppercase tracking-[0.18em] text-white/40">Applied capability</p>
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
                  <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                    <span className={`size-2 rounded-full ${style.dot}`} /> Signal {item.code} / Applied capability
                  </div>
                  <DialogTitle className="pt-5 text-4xl font-semibold leading-none tracking-[-0.055em] sm:text-6xl">{item.title}</DialogTitle>
                  <DialogDescription className="max-w-xl pt-4 text-base leading-relaxed text-white/60">{item.detail}</DialogDescription>
                </DialogHeader>
                <div className="relative mt-10 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
                    <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">Evidence</p>
                    <p className="mt-3 text-base leading-relaxed">{item.proof}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
                    <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">Working set</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tools.map((tool) => <span key={tool} className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70">{tool}</span>)}
                    </div>
                  </div>
                </div>
                <DialogClose className="relative mt-8 min-h-11 rounded-full border border-white/20 px-5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/65 transition hover:bg-white hover:text-[#111318] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c7f26b]">
                  Close signal
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
