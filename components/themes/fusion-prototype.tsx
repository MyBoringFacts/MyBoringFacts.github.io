"use client";

import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  Braces,
  Github,
  Linkedin,
  Mail,
  ScanSearch,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";

const projectProofs = [
  {
    number: "01",
    title: "Video Intelligence",
    summary: "Identity search across large video collections using embeddings and scalable AWS infrastructure.",
    proof: "90% reduction",
    proofLabel: "processing time",
    detail: "Sub-second search",
    stack: "Python / AWS / Qdrant",
    icon: ScanSearch,
    accent: "coral",
  },
  {
    number: "02",
    title: "RAG Platform",
    summary: "A production document intelligence pipeline with grounded retrieval, ranking, and automation.",
    proof: "Production RAG",
    proofLabel: "retrieval + ranking",
    detail: "Higher answer quality",
    stack: "LangChain / OpenAI / Vector DB",
    icon: Bot,
    accent: "acid",
  },
  {
    number: "03",
    title: "OCR & Vision",
    summary: "Fine-tuned receipt text detection with automated annotation and localization workflows.",
    proof: "0.93 accuracy",
    proofLabel: "Thai receipt detection",
    detail: "50+ hours saved",
    stack: "YOLOv11 / Azure / OpenCV",
    icon: Braces,
    accent: "blue",
  },
];

export function FusionPrototype() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080b17] text-[#f6f3ea] selection:bg-[#ff725e]/30">
      <FusionBackdrop reduceMotion={Boolean(reduceMotion)} />

      <header className="relative z-30 mx-auto flex w-full max-w-[90rem] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group inline-flex min-h-11 items-center gap-2 border border-white/12 bg-[#101526]/80 px-4 text-[11px] font-semibold uppercase tracking-[0.19em] text-white/70 backdrop-blur-xl transition hover:border-[#ff725e]/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff725e]"
        >
          <ArrowLeft aria-hidden="true" className="size-4 transition-transform group-hover:-translate-x-1" />
          Explore themes
        </Link>
        <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:text-xs">
          <span className="size-2 bg-[#c9ff4a] shadow-[0_0_16px_rgba(201,255,74,0.65)]" />
          Available for AI roles
        </div>
      </header>

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-84px)] max-w-[90rem] items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:px-12 lg:pb-24 lg:pt-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="bg-[#c9ff4a] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#11150d]">AI Engineer</span>
            <span className="text-xs uppercase tracking-[0.22em] text-[#96a1bd]">RAG · Vision · MLOps</span>
          </div>

          <div className="relative inline-block">
            <span aria-hidden="true" className="absolute -left-5 -top-4 h-8 w-px bg-[#ff725e] sm:-left-8" />
            <span aria-hidden="true" className="absolute -left-5 -top-4 h-px w-8 bg-[#ff725e] sm:-left-8" />
            <h1 className="text-[clamp(3.9rem,9vw,8.8rem)] font-semibold leading-[0.79] tracking-[-0.07em] text-white">
              Thadoe
              <span className="block bg-gradient-to-r from-white via-[#d5ddff] to-[#8ca6ff] bg-clip-text text-transparent">Hein.</span>
            </h1>
            <span className="absolute -bottom-2 right-1 size-3 bg-[#ff725e] sm:right-3" aria-hidden="true" />
          </div>

          <p className="mt-9 max-w-2xl text-pretty text-lg leading-relaxed text-[#b4bed4] sm:text-xl lg:text-[1.35rem]">
            I turn AI research into reliable products—building production RAG, computer vision, and cloud ML systems with measurable impact.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="group inline-flex min-h-12 items-center gap-3 bg-[#ff725e] px-6 text-sm font-bold text-[#190c0c] transition hover:bg-[#ff8a77] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff725e]"
            >
              See the proof
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:thadoe.work@gmail.com"
              className="inline-flex min-h-12 items-center border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:border-[#9eb5ff]/55 hover:bg-[#6985dc]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9eb5ff]"
            >
              Start a conversation
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-white/10 py-4 text-xs">
            <HeroStat value="90%" label="faster video processing" />
            <HeroStat value="0.93" label="vision accuracy" border />
            <HeroStat value="50+" label="hours automated" />
          </div>
        </motion.div>

        <FusionGraphic reduceMotion={Boolean(reduceMotion)} />
      </section>

      <section id="work" className="relative z-10 scroll-mt-6 border-y border-white/10 bg-[#0b1020]/90 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[90rem]">
          <div className="mb-12 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.26em] text-[#c9ff4a]">Selected systems / 2025</p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">Work that holds up.</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#94a0b9] md:text-right">
              Production-minded AI systems, designed around business outcomes—not demo-day novelty.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {projectProofs.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.article
                  key={project.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.09 }}
                  className="group relative flex min-h-[27rem] flex-col overflow-hidden border border-white/10 bg-[#111728]/85 p-6 transition hover:-translate-y-1 hover:border-white/25 sm:p-7"
                >
                  <CardAccent accent={project.accent} />
                  <div className="relative flex items-center justify-between">
                    <span className="font-mono text-xs text-white/35">CASE_{project.number}</span>
                    <div className="grid size-11 place-items-center border border-white/10 bg-white/[0.04] text-[#c7d4f1]">
                      <Icon aria-hidden="true" className="size-5" />
                    </div>
                  </div>
                  <h3 className="relative mt-9 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-[#a3aec5]">{project.summary}</p>
                  <div className="relative mt-auto pt-8">
                    <p className="text-2xl font-semibold tracking-tight text-white">{project.proof}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.17em] text-[#7f8ba5]">{project.proofLabel}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-xs font-medium text-[#d8e2fa]">{project.detail}</span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#687591]">{project.stack}</span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[90rem] overflow-hidden border border-white/10 bg-[#0d1223]/90 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="relative overflow-hidden border-b border-white/10 p-8 lg:border-b-0 lg:border-r sm:p-10">
            <div className="absolute -bottom-20 -right-14 size-56 rounded-full bg-[#667ed3]/20 blur-3xl" />
            <p className="relative text-xs font-bold uppercase tracking-[0.25em] text-[#ff806d]">Experience signal</p>
            <p className="relative mt-5 text-3xl font-semibold leading-tight tracking-tight text-white">Research curiosity.<br />Production discipline.</p>
          </div>
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold text-white">AI Engineer · ML Systems</p>
                <p className="mt-3 text-base leading-relaxed text-[#9da9c1]">
                  Experience shipping retrieval pipelines, fine-tuning computer vision models, and deploying scalable workloads across AWS and Azure. I care about evaluation, maintainability, and the humans using the system.
                </p>
              </div>
              <div className="shrink-0 border-l-2 border-[#c9ff4a] pl-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Status</p>
                <p className="mt-1 text-sm font-medium text-white">Open to AI engineering roles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[90rem] flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c9ff4a]">Next mission</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-white">Build useful intelligence together.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a href="mailto:thadoe.work@gmail.com" className="mr-2 text-sm text-[#a9b6cf] transition hover:text-white">thadoe.work@gmail.com</a>
            <SocialLink href="mailto:thadoe.work@gmail.com" label="Email Thadoe"><Mail className="size-4" /></SocialLink>
            <SocialLink href="https://www.linkedin.com/in/thadoe/" label="Thadoe on LinkedIn"><Linkedin className="size-4" /></SocialLink>
            <SocialLink href="https://github.com/MyBoringFacts" label="Thadoe on GitHub"><Github className="size-4" /></SocialLink>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FusionBackdrop({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(90,111,197,0.25),transparent_30%),radial-gradient(circle_at_9%_60%,rgba(255,114,94,0.09),transparent_25%),linear-gradient(180deg,#080b17,#090d1c_65%,#070a14)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(184,199,235,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(184,199,235,0.16)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />
      <motion.div
        className="absolute right-[8%] top-[10%] size-[32rem] rounded-full border border-[#9cb5ff]/10"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-[#c9ff4a] shadow-[0_0_18px_rgba(201,255,74,0.75)]" />
      </motion.div>
    </div>
  );
}

function FusionGraphic({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.18 }}
      role="img"
      aria-label="Abstract diagram connecting retrieval, vision, and cloud systems"
      className="relative mx-auto aspect-[0.92] w-full max-w-[34rem]"
    >
      <div className="absolute inset-[8%] rotate-6 border border-[#849fef]/20 bg-gradient-to-br from-[#6683df]/10 to-transparent" />
      <div className="absolute inset-[18%] -rotate-6 border border-[#ff725e]/25" />
      <motion.div
        className="absolute inset-[13%] rounded-full border border-dashed border-white/15"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-[26%] grid place-items-center rounded-full border border-[#9fb6ff]/30 bg-[radial-gradient(circle_at_35%_30%,rgba(174,195,255,0.28),rgba(31,43,88,0.9)_48%,rgba(12,17,38,0.98)_75%)] shadow-[0_0_90px_rgba(84,105,185,0.3)]">
        <div className="text-center">
          <Sparkles aria-hidden="true" className="mx-auto size-7 text-[#c9ff4a]" />
          <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.21em] text-[#9db8ff]">System core</p>
          <p className="mt-1 text-lg font-semibold text-white">Useful AI</p>
        </div>
      </div>
      <GraphicNode className="left-0 top-[18%]" code="01" label="Retrieval" tone="coral" />
      <GraphicNode className="right-0 top-[26%]" code="02" label="Vision" tone="acid" />
      <GraphicNode className="bottom-[5%] left-[33%]" code="03" label="Cloud ML" tone="blue" />
      <div className="absolute bottom-[15%] right-[3%] bg-[#f4f1e8] px-3 py-2 text-[9px] font-black uppercase tracking-[0.15em] text-[#141728] shadow-xl">
        Build → Measure → Improve
      </div>
    </motion.div>
  );
}

function GraphicNode({ className, code, label, tone }: { className: string; code: string; label: string; tone: "coral" | "acid" | "blue" }) {
  const tones = {
    coral: "border-[#ff725e]/45 text-[#ff8c7b] before:bg-[#ff725e]",
    acid: "border-[#c9ff4a]/35 text-[#d7ff78] before:bg-[#c9ff4a]",
    blue: "border-[#8ca9ff]/40 text-[#aec2ff] before:bg-[#8ca9ff]",
  };
  return (
    <div className={`absolute min-w-28 border bg-[#0d1326]/90 px-4 py-3 shadow-2xl backdrop-blur-md before:absolute before:-left-1 before:-top-1 before:size-2 ${tones[tone]} ${className}`}>
      <p className="font-mono text-[9px] text-white/35">NODE_{code}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em]">{label}</p>
    </div>
  );
}

function HeroStat({ value, label, border = false }: { value: string; label: string; border?: boolean }) {
  return (
    <div className={`px-3 first:pl-0 sm:px-5 ${border ? "border-x border-white/10" : ""}`}>
      <p className="text-lg font-semibold text-white sm:text-xl">{value}</p>
      <p className="mt-1 text-[9px] uppercase tracking-[0.13em] text-[#77849e] sm:text-[10px]">{label}</p>
    </div>
  );
}

function CardAccent({ accent }: { accent: string }) {
  const color = accent === "coral" ? "bg-[#ff725e]" : accent === "acid" ? "bg-[#c9ff4a]" : "bg-[#86a5ff]";
  return <span aria-hidden="true" className={`absolute left-0 top-0 h-1 w-20 ${color}`} />;
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="grid size-11 place-items-center border border-white/10 bg-white/[0.04] text-[#a7b3cb] transition hover:border-[#ff725e]/55 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff725e]"
    >
      {children}
    </a>
  );
}
