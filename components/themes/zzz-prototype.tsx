"use client";

import { ArrowDownRight, ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

const projects = [
  {
    index: "01",
    title: "Video Intelligence",
    summary: "Embedding-based identity search across large video datasets.",
    metrics: ["90% less processing time", "Sub-second search"],
    tools: "Python / AWS / Qdrant",
    color: "bg-[#d8ff32]",
  },
  {
    index: "02",
    title: "RAG Platform",
    summary: "Production document intelligence with retrieval, ranking, and automated pipelines.",
    metrics: ["Higher answer accuracy", "Lower response latency"],
    tools: "LangChain / OpenAI / Vector DB",
    color: "bg-[#f3efe2]",
  },
  {
    index: "03",
    title: "OCR / Vision",
    summary: "A fine-tuned vision pipeline for Thai receipt detection and localization.",
    metrics: ["50+ hours saved", "0.93 detection accuracy"],
    tools: "YOLOv11 / Azure AI Vision",
    color: "bg-[#ff654f]",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export function ZzzPrototype() {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" as const };

  return (
    <main className="min-h-screen overflow-hidden bg-[#10100f] text-[#f3efe2] selection:bg-[#d8ff32] selection:text-black">
      <header className="relative z-30 mx-auto flex max-w-[1440px] items-center justify-between border-x border-b border-white/15 px-4 py-3 sm:px-7">
        <Link href="/" className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]">
          <span className="grid size-8 place-items-center bg-[#d8ff32] text-black transition-transform group-hover:-rotate-6" aria-hidden="true">
            <ArrowDownRight size={17} strokeWidth={3} />
          </span>
          Explore themes
        </Link>
        <div className="hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/55 sm:flex">
          <span className="size-2 rounded-full bg-[#d8ff32] shadow-[0_0_14px_#d8ff32]" />
          Available for AI roles
        </div>
        <span className="font-mono text-[10px] text-white/45">SYS.05 / 02</span>
      </header>

      <section className="relative mx-auto max-w-[1440px] border-x border-white/15 px-4 pb-16 pt-10 sm:px-7 lg:min-h-[760px] lg:pb-20 lg:pt-16">
        <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.55) .7px, transparent .7px)", backgroundSize: "9px 9px", maskImage: "linear-gradient(to bottom right, black, transparent 65%)" }} />
        <div className="pointer-events-none absolute -right-20 top-20 hidden h-80 w-80 rotate-12 border-[44px] border-[#d8ff32]/90 lg:block" aria-hidden="true" />
        <div className="pointer-events-none absolute right-8 top-12 hidden grid-cols-5 opacity-70 lg:grid" aria-hidden="true">
          {Array.from({ length: 25 }).map((_, index) => (
            <span key={index} className={`size-4 ${index % 2 ? "bg-[#f3efe2]" : "bg-transparent"}`} />
          ))}
        </div>

        <motion.div initial={false} animate="visible" transition={{ staggerChildren: reduceMotion ? 0 : 0.1 }} className="relative z-10">
          <motion.div variants={reveal} transition={transition} className="mb-7 flex items-center gap-3">
            <span className="bg-[#d8ff32] px-3 py-1 font-mono text-[11px] font-black uppercase tracking-widest text-black">AI Engineer</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">Yangon / Remote</span>
          </motion.div>

          <motion.h1 variants={reveal} transition={transition} className="max-w-5xl text-[clamp(4rem,12vw,10rem)] font-black uppercase leading-[0.77] tracking-[-0.075em]">
            Thadoe
            <span className="relative ml-[.05em] inline-block text-[#d8ff32]">
              Hein
              <span className="absolute -right-5 -top-2 text-xl text-[#ff654f] sm:-right-9 sm:text-4xl" aria-hidden="true">✦</span>
            </span>
          </motion.h1>

          <div className="mt-9 grid gap-7 border-t border-white/20 pt-7 lg:grid-cols-[1.4fr_.6fr]">
            <motion.p variants={reveal} transition={transition} className="max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-white/90 sm:text-4xl">
              I build production RAG, computer vision, and ML systems that turn complex data into fast, useful products.
            </motion.p>
            <motion.div variants={reveal} transition={transition} className="flex flex-col items-start justify-end gap-5 lg:items-end">
              <p className="max-w-xs font-mono text-xs leading-relaxed text-white/50 lg:text-right">Research-aware engineering. Measurable outcomes. Systems designed to leave the notebook.</p>
              <a href="#work" className="inline-flex items-center gap-3 border-2 border-[#d8ff32] bg-[#d8ff32] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-black transition-colors hover:bg-transparent hover:text-[#d8ff32]">
                See the proof <ArrowDownRight size={16} />
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div aria-hidden="true" className="absolute bottom-0 left-0 h-2 w-full bg-[linear-gradient(90deg,#d8ff32_0_33%,#f3efe2_33%_66%,#ff654f_66%)]" initial={{ scaleX: reduceMotion ? 1 : 0 }} animate={{ scaleX: 1 }} transition={{ duration: reduceMotion ? 0 : 1, delay: 0.35 }} style={{ transformOrigin: "left" }} />
      </section>

      <section id="work" className="bg-[#f3efe2] px-4 py-20 text-[#10100f] sm:px-7 lg:py-28">
        <div className="mx-auto max-w-[1390px]">
          <div className="mb-10 flex flex-col justify-between gap-5 border-b-2 border-black pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.24em]">Selected systems / 2025</p>
              <h2 className="text-5xl font-black uppercase tracking-[-0.06em] sm:text-7xl">Proof of work</h2>
            </div>
            <div className="rotate-2 self-start border-2 border-black bg-[#d8ff32] px-4 py-2 text-xs font-black uppercase tracking-wider sm:self-auto">Built for production</div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article key={project.title} initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal} transition={{ ...transition, delay: reduceMotion ? 0 : index * 0.08 }} className="group relative flex min-h-[390px] flex-col overflow-hidden border-2 border-black bg-[#10100f] p-6 text-[#f3efe2] shadow-[7px_7px_0_#10100f] sm:p-7">
                <div className={`absolute right-0 top-0 h-20 w-20 ${project.color}`} aria-hidden="true" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }} />
                <div className="mb-14 flex items-center justify-between font-mono text-xs">
                  <span className="border border-white/30 px-2 py-1">CASE / {project.index}</span>
                  <ArrowUpRight className="relative z-10 text-black" size={20} strokeWidth={3} />
                </div>
                <h3 className="max-w-xs text-3xl font-black uppercase leading-none tracking-[-0.045em]">{project.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">{project.summary}</p>
                <div className="mt-auto border-t border-dashed border-white/30 pt-5">
                  {project.metrics.map((metric) => (
                    <p key={metric} className="mb-1 text-lg font-bold text-[#d8ff32]">{metric}</p>
                  ))}
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-white/40">{project.tools}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-[1440px] border-x border-white/15 lg:grid-cols-[.78fr_1.22fr]">
        <div className="border-b border-white/15 p-7 sm:p-12 lg:border-b-0 lg:border-r">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#d8ff32]">Experience signal</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-[-0.05em] sm:text-6xl">From model to reliable system.</h2>
          <Sparkles className="mt-10 text-[#ff654f]" size={38} aria-hidden="true" />
        </div>
        <div className="p-7 sm:p-12">
          <p className="max-w-3xl text-xl font-medium leading-relaxed text-white/75 sm:text-2xl">Applied AI engineer working across LLM systems, MLOps, computer vision, and scalable cloud architecture—with a bias toward shipping, measuring, and improving.</p>
          <div className="mt-10 grid grid-cols-2 gap-px bg-white/20 sm:grid-cols-4">
            {["RAG + LLMs", "Computer Vision", "AWS Systems", "MLOps"].map((skill, index) => (
              <div key={skill} className="bg-[#10100f] p-4 font-mono text-xs uppercase tracking-wider">
                <span className="mb-8 block text-white/30">0{index + 1}</span>{skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#d8ff32] px-4 py-16 text-black sm:px-7 sm:py-20">
        <div className="mx-auto flex max-w-[1390px] flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.22em]">Have an ambitious AI problem?</p>
            <h2 className="max-w-4xl text-5xl font-black uppercase leading-[.88] tracking-[-0.065em] sm:text-8xl">Let&apos;s build what&apos;s next.</h2>
          </div>
          <nav aria-label="Contact links" className="flex flex-wrap gap-3">
            <a href="mailto:thadoe.work@gmail.com" className="inline-flex items-center gap-2 border-2 border-black bg-black px-5 py-3 text-xs font-black uppercase tracking-wider text-white hover:bg-transparent hover:text-black"><Mail size={16} /> Email</a>
            <a href="https://www.linkedin.com/in/thadoe/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-2 border-black px-5 py-3 text-xs font-black uppercase tracking-wider hover:bg-black hover:text-white">LinkedIn <ArrowUpRight size={16} /></a>
            <a href="https://github.com/MyBoringFacts" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-2 border-black px-5 py-3 text-xs font-black uppercase tracking-wider hover:bg-black hover:text-white">GitHub <ArrowUpRight size={16} /></a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
