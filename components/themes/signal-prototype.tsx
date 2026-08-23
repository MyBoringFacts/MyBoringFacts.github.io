"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  CircleDot,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const projects = [
  {
    index: "01",
    label: "VISUAL RETRIEVAL",
    title: "Find one person in hours of footage — instantly.",
    summary: "A production video intelligence pipeline combining embeddings, vector search, and resilient AWS processing.",
    outcome: "90%",
    outcomeLabel: "less processing time",
    stack: ["PYTHON", "QDRANT", "AWS"],
    tone: "#ff6b35",
  },
  {
    index: "02",
    label: "KNOWLEDGE SYSTEMS",
    title: "Answers that can show their work.",
    summary: "A grounded RAG platform with automated ingestion, retrieval, ranking, and quality-aware responses.",
    outcome: "RAG",
    outcomeLabel: "shipped to production",
    stack: ["LANGCHAIN", "OPENAI", "VECTOR DB"],
    tone: "#86a8ff",
  },
  {
    index: "03",
    label: "DOCUMENT VISION",
    title: "Turn difficult receipts into reliable data.",
    summary: "A fine-tuned OCR and localization pipeline built for noisy, real-world Thai documents.",
    outcome: ".93",
    outcomeLabel: "detection accuracy",
    stack: ["YOLOV11", "AZURE AI", "OPENCV"],
    tone: "#c7f26b",
  },
];

const capabilities = [
  "Production RAG",
  "Computer vision",
  "Model evaluation",
  "AI infrastructure",
  "Cost optimization",
];

function SignalVisual({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-[2rem] border border-white/12 bg-[#10131a]">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 h-px bg-[#c7f26b] shadow-[0_0_24px_4px_rgba(199,242,107,.5)]"
        animate={reduceMotion ? { top: "45%" } : { top: ["12%", "88%", "12%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute left-[13%] top-[16%] font-mono text-[9px] tracking-[0.18em] text-white/35">
        LIVE INFERENCE / 06:42:18
      </div>
      <div className="absolute left-1/2 top-[47%] size-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15">
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
      <div className="absolute bottom-7 left-7 right-7 grid grid-cols-3 gap-2 font-mono text-[8px] uppercase tracking-[0.12em] text-white/40">
        <div className="border-t border-white/15 pt-3"><span className="block text-lg text-white">128</span>dimensions</div>
        <div className="border-t border-white/15 pt-3"><span className="block text-lg text-white">.93</span>confidence</div>
        <div className="border-t border-white/15 pt-3"><span className="block text-lg text-[#c7f26b]">live</span>system</div>
      </div>
    </div>
  );
}

export function SignalPrototype() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.16 },
        transition: { duration: 0.65, ease: "easeOut" as const },
      };

  return (
    <main className="min-h-screen overflow-hidden bg-[#ebe9e2] text-[#111318] selection:bg-[#c7f26b]">
      <header className="relative z-30 border-b border-black/15 px-5 md:px-9">
        <nav className="mx-auto flex h-20 max-w-[1500px] items-center justify-between" aria-label="Prototype navigation">
          <Link href="/" className="flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em]">
            <span className="grid size-8 place-items-center rounded-full bg-[#111318] text-[#c7f26b]">TH</span>
            <span className="hidden sm:inline">Thadoe Hein / AI Engineer</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-black/55 md:flex">
              <span className="size-2 rounded-full bg-[#53a65b]" /> Open to opportunities
            </span>
            <Link href="/" className="rounded-full border border-black/20 px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.14em] transition hover:bg-[#111318] hover:text-white">
              All directions
            </Link>
          </div>
        </nav>
      </header>

      <section className="relative px-5 py-10 md:px-9 md:py-14">
        <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(90deg,rgba(17,19,24,.09)_1px,transparent_1px)] [background-size:12.5%_100%]" />
        <div className="relative mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="pb-3 lg:pr-8"
          >
            <div className="mb-8 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-black/55">
              <CircleDot className="size-3 text-[#ff6b35]" /> Applied intelligence / Portfolio 2026
            </div>
            <h1 className="max-w-5xl text-[clamp(4.3rem,10.5vw,10.4rem)] font-semibold leading-[0.78] tracking-[-0.085em]">
              AI, made
              <span className="block pl-[.35em] text-[#ff6b35]">useful.</span>
            </h1>
            <div className="mt-12 grid gap-8 border-t border-black/20 pt-6 sm:grid-cols-[1.2fr_.8fr]">
              <p className="max-w-xl text-lg leading-relaxed tracking-[-0.02em] text-black/65 md:text-xl">
                I&apos;m Thadoe Hein. I turn models into reliable products—systems that see, retrieve, reason, and create measurable value.
              </p>
              <div className="flex flex-col items-start gap-3 sm:items-end">
                <a href="#proof" className="group inline-flex min-h-12 items-center gap-5 rounded-full bg-[#111318] px-6 text-sm font-semibold text-white transition hover:bg-[#ff6b35]">
                  Examine the proof <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </a>
                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-black/40">03 production case files</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.1 }}
            className="mx-auto w-full max-w-xl lg:max-w-none"
          >
            <SignalVisual reduceMotion={reduceMotion} />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-black/15 bg-[#c7f26b] py-3" aria-label="Core capabilities">
        <div className="flex min-w-max items-center justify-around gap-10 px-5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em]">
          {capabilities.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section id="proof" className="px-5 py-24 md:px-9 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <motion.div {...reveal} className="grid gap-6 border-b border-black/20 pb-10 md:grid-cols-2 md:items-end">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/45">Selected systems / 2024—2026</p>
              <h2 className="mt-5 text-5xl font-semibold leading-none tracking-[-0.065em] md:text-7xl">Proof of work.</h2>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-black/60 md:justify-self-end">Not demos. Not adjectives. Three examples of applied AI shaped around latency, accuracy, cost, and human time.</p>
          </motion.div>

          <div className="divide-y divide-black/20">
            {projects.map((project, index) => (
              <motion.article key={project.title} {...reveal} transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.06 }} className="group grid gap-8 py-12 md:grid-cols-[.35fr_1.2fr_.45fr] md:items-start md:py-16">
                <div className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.18em] text-black/45">
                  <span className="grid size-10 place-items-center rounded-full border border-black/20 text-black">{project.index}</span>
                  {project.label}
                </div>
                <div>
                  <h3 className="max-w-3xl text-3xl font-semibold leading-[1.03] tracking-[-0.05em] transition-transform duration-300 group-hover:translate-x-2 md:text-5xl">{project.title}</h3>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/60">{project.summary}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((item) => <span key={item} className="rounded-full border border-black/20 px-3 py-1.5 font-mono text-[8px] tracking-[0.15em]">{item}</span>)}
                  </div>
                </div>
                <div className="md:text-right">
                  <p className="text-6xl font-semibold tracking-[-0.07em]" style={{ color: project.tone }}>{project.outcome}</p>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.15em] text-black/45">{project.outcomeLabel}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111318] px-5 py-20 text-white md:px-9 md:py-28">
        <motion.div {...reveal} className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#c7f26b]">Next signal</p>
            <h2 className="mt-6 max-w-5xl text-[clamp(3.8rem,8vw,8rem)] font-semibold leading-[0.84] tracking-[-0.075em]">Let&apos;s build something that earns attention.</h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-md text-base leading-relaxed text-white/55">I&apos;m interested in AI engineering roles where research meets product, and where quality is measured in the real world.</p>
            <a href="mailto:thadoe.work@gmail.com" className="group mt-8 inline-flex min-h-14 items-center gap-6 rounded-full bg-[#c7f26b] px-7 font-semibold text-[#111318] transition hover:bg-white">
              Start a conversation <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <div className="mt-10 flex gap-2">
              <a href="mailto:thadoe.work@gmail.com" aria-label="Email Thadoe Hein" className="grid size-11 place-items-center rounded-full border border-white/20 transition hover:bg-white hover:text-black"><Mail className="size-4" /></a>
              <a href="https://www.linkedin.com/in/thadoe/" target="_blank" rel="noreferrer" aria-label="Thadoe Hein on LinkedIn" className="grid size-11 place-items-center rounded-full border border-white/20 transition hover:bg-white hover:text-black"><Linkedin className="size-4" /></a>
              <a href="https://github.com/MyBoringFacts" target="_blank" rel="noreferrer" aria-label="MyBoringFacts on GitHub" className="grid size-11 place-items-center rounded-full border border-white/20 transition hover:bg-white hover:text-black"><Github className="size-4" /></a>
            </div>
          </div>
        </motion.div>
        <div className="mx-auto mt-20 flex max-w-[1500px] flex-wrap justify-between gap-3 border-t border-white/15 pt-5 font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
          <span>Thadoe Hein © 2026</span>
          <span>Human judgment / Machine intelligence</span>
        </div>
      </section>
    </main>
  );
}
