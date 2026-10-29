"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Accent, Project } from "@/lib/portfolio-data";

const accentHex: Record<Accent, string> = {
  orange: "#ff6b35",
  blue: "#86a8ff",
  lime: "#c7f26b",
};

const sequenceDuration = 3;

function StageSchematic({ stage, accent, reduceMotion }: { stage: number; accent: string; reduceMotion: boolean }) {
  const loop = { duration: 2.4, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <svg viewBox="0 0 280 220" className="h-full w-full" fill="none" aria-hidden="true">
      <path d="M20 20h24M20 20v24M260 20h-24M260 20v24M20 200h24M20 200v-24M260 200h-24M260 200v-24" stroke={accent} strokeOpacity="0.45" strokeWidth="1.5" />
      <circle cx="140" cy="110" r="82" stroke={accent} strokeOpacity="0.13" strokeDasharray="3 8" />
      <circle cx="140" cy="110" r="56" stroke={accent} strokeOpacity="0.11" />

      {stage === 0 && (
        <>
          {[64, 102, 140].map((y, index) => (
            <motion.g key={y} animate={reduceMotion ? undefined : { x: [-15, 9, -15], opacity: [0.45, 1, 0.45] }} transition={{ ...loop, delay: index * 0.22 }}>
              <rect x="36" y={y} width="68" height="26" rx="2" stroke={accent} strokeOpacity="0.75" fill={accent} fillOpacity="0.08" />
              <path d={`M48 ${y + 9}h30M48 ${y + 16}h19`} stroke={accent} strokeOpacity="0.55" />
            </motion.g>
          ))}
          <path d="M116 77l35 33-35 33M151 110h57" stroke={accent} strokeOpacity="0.55" strokeWidth="1.5" />
          <motion.path d="M210 85l25 25-25 25-25-25z" fill={accent} fillOpacity="0.13" stroke={accent} strokeWidth="2" animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45] }} transition={loop} />
        </>
      )}

      {stage === 1 && (
        <>
          {Array.from({ length: 12 }, (_, index) => {
            const x = 66 + (index % 4) * 42;
            const y = 51 + Math.floor(index / 4) * 42;
            return <motion.rect key={index} x={x} y={y} width="31" height="31" rx="2" fill={accent} stroke={accent} strokeWidth="1.5"
              animate={reduceMotion ? { fillOpacity: 0.24 } : { fillOpacity: [0.08, 0.55, 0.08], strokeOpacity: [0.3, 1, 0.3] }}
              transition={{ ...loop, delay: (index % 4) * 0.17 + Math.floor(index / 4) * 0.13 }} />;
          })}
          <path d="M45 188h190" stroke={accent} strokeOpacity="0.35" />
          <motion.rect x="45" y="186" width="36" height="3" fill={accent} animate={reduceMotion ? undefined : { x: [0, 154, 0] }} transition={loop} />
        </>
      )}

      {stage === 2 && (
        <>
          {[70, 112, 154, 196].map((x, index) => (
            <g key={x}>
              <circle cx={x} cy={index % 2 ? 136 : 84} r="11" fill={accent} fillOpacity="0.1" stroke={accent} strokeOpacity="0.55" />
              <circle cx={x} cy={index % 2 ? 136 : 84} r="2" fill={accent} />
            </g>
          ))}
          <motion.rect x="48" y="43" width="2" height="134" fill={accent} style={{ filter: `drop-shadow(0 0 7px ${accent})` }}
            animate={reduceMotion ? undefined : { x: [0, 182, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
          <path d="M46 42h188M46 178h188" stroke={accent} strokeOpacity="0.3" strokeDasharray="4 7" />
          <path d="M140 95v30M125 110h30" stroke={accent} strokeWidth="1.5" />
        </>
      )}

      {stage === 3 && (
        <>
          {[0, 0.7].map((delay) => (
            <motion.circle key={delay} cx="140" cy="110" r="27" stroke={accent} strokeWidth="2"
              animate={reduceMotion ? { r: 56, opacity: 0.35 } : { r: [27, 86], opacity: [0.7, 0] }}
              transition={{ duration: 2.1, repeat: Infinity, ease: "easeOut", delay }} />
          ))}
          <path d="M140 64l46 46-46 46-46-46z" fill={accent} fillOpacity="0.12" stroke={accent} strokeWidth="2" />
          <path d="m122 110 12 12 25-27" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 110h60M200 110h60" stroke={accent} strokeOpacity="0.45" strokeDasharray="4 5" />
        </>
      )}
    </svg>
  );
}

export function SystemDiagram({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion() ?? false;
  const accent = accentHex[project.accent];
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setTimeout(() => {
      setActiveStep((step) => (step + 1) % project.architecture.length);
    }, sequenceDuration * 1000);
    return () => window.clearTimeout(timer);
  }, [activeStep, project.architecture.length, reduceMotion]);

  const selected = project.architecture[activeStep];
  const autoPlaying = !reduceMotion;

  return (
    <div className="system-console relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0e13] p-5 sm:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="relative font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
        <span>System map / {project.index}</span>
      </div>

      <div className="relative mt-8 grid gap-4 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.45fr)] lg:gap-6">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-1" aria-label="System stages">
          {project.architecture.map((node, index) => {
            const active = index === activeStep;
            return (
              <button key={node.label} type="button" aria-pressed={active}
                onClick={() => setActiveStep(index)}
                className="system-console-node group relative min-h-24 overflow-hidden border border-white/15 bg-white/[.025] p-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 sm:min-h-20 sm:p-4 lg:min-h-[76px]"
                style={active ? { borderColor: accent, backgroundColor: `${accent}15`, outlineColor: accent } : { outlineColor: accent }}>
                <span className="relative z-10 flex items-start gap-3">
                  <span className="font-mono text-xs font-semibold" style={{ color: active ? accent : "rgba(255,255,255,.45)" }}>0{index + 1}</span>
                  <span className="min-w-0 flex-1 text-sm font-semibold text-white sm:text-base">{node.label}</span>
                  <ArrowUpRight className={`hidden size-4 shrink-0 sm:block ${active ? "opacity-100" : "opacity-25 group-hover:opacity-70"}`} aria-hidden="true" />
                </span>
                <span className="relative z-10 mt-3 block font-mono text-[9px] uppercase tracking-[0.12em] text-white/35 lg:mt-2">{active ? "In focus" : "Select node"}</span>
                {active && autoPlaying && <motion.span key={`${project.slug}-${index}`} className="absolute bottom-0 left-0 h-[3px] w-full origin-left" style={{ backgroundColor: accent }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: sequenceDuration, ease: "linear" }} />}
              </button>
            );
          })}
        </div>

        <div className="system-console-display relative flex min-h-[370px] flex-col overflow-hidden border border-white/15 bg-[#10141d] p-4 sm:p-6">
          <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(circle_at_50%_45%,rgba(255,255,255,.055),transparent_65%)]" />
          <div className="relative flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.14em]">
            <span className="text-white/45">Node 0{activeStep + 1} / 0{project.architecture.length}</span>
            <span style={{ color: accent }}>Signal active <span className="motion-safe:animate-pulse">●</span></span>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={`${project.slug}-${activeStep}`} className="relative flex flex-1 flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6"
              initial={reduceMotion ? false : { opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8, filter: "blur(4px)" }}
              transition={{ duration: reduceMotion ? 0 : 0.28 }}>
              <div className="relative h-48 w-full max-w-[260px] shrink-0 sm:h-56 sm:w-[52%]">
                <StageSchematic stage={activeStep} accent={accent} reduceMotion={reduceMotion} />
              </div>
              <div className="w-full min-w-0 pb-4 sm:pb-0" aria-live={autoPlaying ? "off" : "polite"}>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: accent }}>Operation / 0{activeStep + 1}</span>
                <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">{selected.label}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55 sm:text-base">{selected.detail}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="relative border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-white/40">
            {autoPlaying ? "Auto cycle engaged" : "Select a node to inspect"}
          </div>
        </div>
      </div>

      <div className="relative mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
        {project.stack.map((tool) => <span key={tool} className="rounded-full border border-white/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-white/70">{tool}</span>)}
      </div>
    </div>
  );
}
