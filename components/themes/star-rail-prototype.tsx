"use client";

import {
  ArrowLeft,
  ArrowUpRight,
  BrainCircuit,
  Database,
  Github,
  Linkedin,
  Mail,
  ScanLine,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

const projects = [
  {
    index: "01",
    title: "Video Intelligence",
    description:
      "Embedding-based identity retrieval across large video collections, deployed on a scalable AWS architecture.",
    metrics: ["90% faster processing", "Sub-second search"],
    tech: "Python · AWS · Qdrant",
    icon: ScanLine,
  },
  {
    index: "02",
    title: "RAG Platform",
    description:
      "Production document intelligence with automated ingestion, retrieval, and ranking for grounded answers.",
    metrics: ["Higher answer quality", "Production pipelines"],
    tech: "LangChain · OpenAI · Vector DB",
    icon: Database,
  },
  {
    index: "03",
    title: "OCR & Vision",
    description:
      "Fine-tuned detection pipeline for Thai receipts with automated annotation and localization.",
    metrics: ["50+ hours saved", "0.93 accuracy"],
    tech: "YOLOv11 · Azure Vision · OpenCV",
    icon: BrainCircuit,
  },
];

const orbitDots = [
  { left: "12%", top: "31%", size: 3 },
  { left: "29%", top: "13%", size: 2 },
  { left: "71%", top: "18%", size: 3 },
  { left: "84%", top: "38%", size: 2 },
  { left: "61%", top: "72%", size: 2 },
];

export function StarRailPrototype() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-[#f7f5ee] selection:bg-[#bea967]/30">
      <CelestialBackground reduceMotion={Boolean(reduceMotion)} />

      <nav
        aria-label="Star Rail prototype navigation"
        className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12"
      >
        <Link
          href="/"
          className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-[#0b1025]/75 px-4 text-xs font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl transition hover:border-[#d7c179]/50 hover:text-[#f8e7a9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d7c179]"
        >
          <ArrowLeft aria-hidden="true" className="size-4 transition-transform group-hover:-translate-x-1" />
          Explore themes
        </Link>
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[#b9c9e8]/65 sm:text-xs">
          <span className="hidden sm:inline">Celestial system</span>
          <span className="size-1.5 rounded-full bg-[#d7c179] shadow-[0_0_12px_#d7c179]" />
          Prototype 03
        </div>
      </nav>

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-92px)] max-w-7xl items-center gap-14 px-5 pb-20 pt-8 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:pb-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="mb-7 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-[#8fb7ff]">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#8fb7ff]" />
            AI Engineer · Yangon / Remote
          </div>
          <h1 className="max-w-4xl text-balance text-[clamp(3.5rem,9vw,7.8rem)] font-semibold leading-[0.83] tracking-[-0.065em] text-white">
            Thadoe
            <span className="block bg-gradient-to-r from-[#f8e7a9] via-white to-[#a9c9ff] bg-clip-text text-transparent">
              Hein
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-[#bac4da] sm:text-xl">
            I build production RAG, computer vision, and MLOps systems that turn ambitious AI ideas into reliable products.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#proof"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#eee3bb] px-6 text-sm font-semibold text-[#11162b] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eee3bb]"
            >
              View selected systems
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:thadoe.work@gmail.com"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-medium text-white transition hover:border-[#9bbdff]/50 hover:bg-[#779ce5]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9bbdff]"
            >
              Start a conversation
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.16em] text-white/45">
            <span>LLM systems</span>
            <span>Computer vision</span>
            <span>Cloud architecture</span>
          </div>
        </motion.div>

        <SystemOrbit reduceMotion={Boolean(reduceMotion)} />
      </section>

      <section id="proof" className="relative z-10 scroll-mt-8 border-y border-white/10 bg-[#080d20]/80 px-5 py-20 backdrop-blur-sm sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7c179]">Selected missions</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">Proof, not promises.</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#9da9c2] sm:text-right">
              Three production-minded systems spanning retrieval, vision, and infrastructure.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.article
                  key={project.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.1, duration: 0.55 }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-[#89adf5]/35 sm:p-7"
                >
                  <div className="pointer-events-none absolute -right-16 -top-20 size-44 rounded-full bg-[#6c88dc]/10 blur-3xl transition group-hover:bg-[#806fdd]/20" />
                  <div className="relative flex items-start justify-between">
                    <div className="grid size-12 place-items-center rounded-2xl border border-[#9cbcff]/20 bg-[#7899e8]/10 text-[#a7c4ff]">
                      <Icon aria-hidden="true" className="size-5" />
                    </div>
                    <span className="font-mono text-xs text-white/30">{project.index} / 03</span>
                  </div>
                  <h3 className="relative mt-8 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
                  <p className="relative mt-3 min-h-20 text-sm leading-relaxed text-[#a9b4ca]">{project.description}</p>
                  <div className="relative mt-6 grid grid-cols-2 gap-2">
                    {project.metrics.map((metric) => (
                      <div key={metric} className="rounded-xl border border-white/[0.07] bg-black/20 px-3 py-3 text-xs font-medium text-[#eee3bb]">
                        {metric}
                      </div>
                    ))}
                  </div>
                  <p className="relative mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#7685a5]">{project.tech}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[1.75rem] border border-[#d7c179]/20 bg-[#d7c179]/[0.06] p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.27em] text-[#d7c179]">Current trajectory</p>
            <p className="mt-6 text-2xl font-medium leading-snug text-white sm:text-3xl">
              Bridging AI research and resilient production systems.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-[#0b1129]/80 p-7 sm:p-9">
            <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-medium text-white">AI Engineer · Production ML</p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#9eabc5]">
                  Hands-on experience designing retrieval pipelines, fine-tuning vision models, and deploying scalable AI workloads across AWS and Azure.
                </p>
              </div>
              <div className="shrink-0 rounded-full border border-[#91b2f5]/20 bg-[#7597e6]/10 px-4 py-2 text-xs text-[#adc7ff]">
                Open to opportunities
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xl font-semibold text-white">Let&apos;s build something intelligent.</p>
            <a className="mt-2 inline-block text-sm text-[#9ebaf2] transition hover:text-white" href="mailto:thadoe.work@gmail.com">
              thadoe.work@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <SocialLink href="mailto:thadoe.work@gmail.com" label="Email Thadoe"><Mail className="size-4" /></SocialLink>
            <SocialLink href="https://www.linkedin.com/in/thadoe/" label="Thadoe on LinkedIn"><Linkedin className="size-4" /></SocialLink>
            <SocialLink href="https://github.com/MyBoringFacts" label="Thadoe on GitHub"><Github className="size-4" /></SocialLink>
          </div>
        </div>
      </footer>
    </main>
  );
}

function CelestialBackground({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(92,117,212,0.20),transparent_28%),radial-gradient(circle_at_15%_55%,rgba(95,66,165,0.14),transparent_32%),linear-gradient(180deg,#050816_0%,#070b1b_60%,#050714_100%)]" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(174,198,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(174,198,255,0.14)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      {orbitDots.map((dot, index) => (
        <motion.span
          key={`${dot.left}-${dot.top}`}
          className="absolute rounded-full bg-[#c5d8ff] shadow-[0_0_10px_rgba(183,207,255,0.9)]"
          style={{ left: dot.left, top: dot.top, width: dot.size, height: dot.size }}
          animate={reduceMotion ? undefined : { opacity: [0.25, 0.9, 0.25] }}
          transition={{ duration: 2.8 + index * 0.7, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function SystemOrbit({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="relative mx-auto aspect-square w-full max-w-[32rem]"
      aria-label="Illustration of connected AI systems orbiting a production core"
      role="img"
    >
      <div className="absolute inset-[4%] rounded-full border border-[#a5c1ff]/10" />
      <div className="absolute inset-[16%] rounded-full border border-dashed border-[#d7c179]/25" />
      <motion.div
        className="absolute inset-[4%] rounded-full"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 size-3 -translate-x-1/2 rounded-full bg-[#eee3bb] shadow-[0_0_22px_5px_rgba(238,227,187,0.45)]" />
        <span className="absolute bottom-[13%] left-[8%] size-2 rounded-full bg-[#9cbcff] shadow-[0_0_18px_4px_rgba(156,188,255,0.5)]" />
      </motion.div>
      <motion.div
        className="absolute inset-[16%] rounded-full"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute right-[2%] top-1/2 size-2.5 -translate-y-1/2 rounded-full bg-[#a58cf2] shadow-[0_0_18px_4px_rgba(165,140,242,0.5)]" />
      </motion.div>
      <div className="absolute inset-[29%] rounded-full bg-[#7ea0ed]/10 blur-xl" />
      <div className="absolute inset-[31%] grid place-items-center rounded-full border border-[#a5bfff]/30 bg-[radial-gradient(circle_at_35%_30%,rgba(186,208,255,0.24),rgba(24,35,75,0.86)_48%,rgba(9,13,34,0.96)_75%)] shadow-[0_0_80px_rgba(87,114,197,0.25),inset_0_0_35px_rgba(154,185,255,0.14)]">
        <div className="text-center">
          <Sparkles aria-hidden="true" className="mx-auto size-7 text-[#eee3bb]" />
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#a9c4fa]">Production core</p>
          <p className="mt-1 text-lg font-semibold text-white">AI · ML · Cloud</p>
        </div>
      </div>
      <OrbitLabel className="left-[3%] top-[24%]" title="Retrieval" detail="RAG / Vector DB" />
      <OrbitLabel className="bottom-[9%] right-[5%]" title="Perception" detail="Vision / OCR" />
      <OrbitLabel className="right-0 top-[18%]" title="Delivery" detail="MLOps / AWS" />
    </motion.div>
  );
}

function OrbitLabel({ className, title, detail }: { className: string; title: string; detail: string }) {
  return (
    <div className={`absolute rounded-xl border border-white/10 bg-[#0a1026]/85 px-3 py-2 shadow-xl backdrop-blur-md ${className}`}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#eee3bb]">{title}</p>
      <p className="mt-0.5 text-[10px] text-[#8999b8]">{detail}</p>
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#aebbd3] transition hover:border-[#d7c179]/40 hover:text-[#f6e8b8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d7c179]"
    >
      {children}
    </a>
  );
}
