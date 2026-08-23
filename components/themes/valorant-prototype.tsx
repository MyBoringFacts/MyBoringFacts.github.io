"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const projects = [
  {
    code: "SYS–01",
    title: "Video Intelligence",
    description: "Embedding-based identity retrieval across large video datasets.",
    metrics: ["90% less processing time", "Sub-second search"],
    stack: "PYTHON / AWS / QDRANT",
  },
  {
    code: "SYS–02",
    title: "RAG Platform",
    description: "Production document intelligence with retrieval, ranking, and automated pipelines.",
    metrics: ["Higher answer accuracy", "Reduced latency"],
    stack: "LANGCHAIN / OPENAI / VECTOR DB",
  },
  {
    code: "SYS–03",
    title: "OCR / Vision",
    description: "Fine-tuned text detection and localization for real-world Thai receipts.",
    metrics: ["50+ hours saved", "0.93 accuracy"],
    stack: "YOLOV11 / AZURE / OPENCV",
  },
];

const experience = [
  ["2026—NOW", "AI Developer", "SoeMindAI", "Reduced AI costs by ~30% and automated hours-long workflows."],
  ["2025", "ML Engineer Intern", "LU Lab", "Fine-tuned multilingual transformers with reproducible ML pipelines."],
  ["2024—25", "AI Engineer Apprentice", "ISL", "Shipped RAG systems, model APIs, monitoring, and data pipelines."],
];

export function ValorantPrototype() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.55 },
      };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#111311] text-[#eeeade] selection:bg-[#ff5a5f] selection:text-[#111311]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,234,222,.24) 1px, transparent 1px), linear-gradient(90deg, rgba(238,234,222,.24) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "linear-gradient(to bottom, black, transparent 64%)",
        }}
      />

      <header className="relative z-20 border-b border-[#eeeade]/15 px-5 py-4 md:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between" aria-label="Prototype navigation">
          <Link href="/" className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="grid size-8 place-items-center border border-[#ff5a5f] text-[#ff5a5f] transition-colors group-hover:bg-[#ff5a5f] group-hover:text-[#111311]">
              TH
            </span>
            <span className="hidden sm:block">Thadoe Hein / AI Systems</span>
          </Link>
          <Link
            href="/"
            className="flex min-h-11 items-center gap-2 border border-[#eeeade]/25 px-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors hover:border-[#ff5a5f] hover:text-[#ff5a5f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5a5f]"
          >
            Explore themes <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </nav>
      </header>

      <section className="relative mx-auto grid min-h-[calc(100svh-77px)] max-w-7xl items-center gap-12 px-5 py-16 md:px-10 lg:grid-cols-[1.2fr_.8fr] lg:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          className="relative z-10"
        >
          <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[#eeeade]/55">
            <span className="inline-block size-2 bg-[#ff5a5f]" />
            Available for AI engineering roles
          </div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#ff5a5f]">AI Engineer</p>
          <h1 className="max-w-4xl text-[clamp(3.7rem,10vw,8.8rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
            Thadoe
            <span className="block text-[#eeeade]/20 [-webkit-text-stroke:1px_rgba(238,234,222,.75)]">Hein</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#eeeade]/68 md:text-xl">
            I build production RAG and ML systems that turn difficult data into fast, measurable outcomes.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="flex min-h-12 items-center gap-3 bg-[#ff5a5f] px-6 text-xs font-black uppercase tracking-[0.16em] text-[#111311] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5a5f]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 72%, 92% 100%, 0 100%)" }}
            >
              View fieldwork <ArrowDownRight aria-hidden="true" className="size-4" />
            </a>
            <a
              href="mailto:thadoe.work@gmail.com"
              className="flex min-h-12 items-center border border-[#eeeade]/30 px-6 text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:border-[#eeeade] hover:bg-[#eeeade] hover:text-[#111311] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5a5f]"
            >
              Start a conversation
            </a>
          </div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-[480px]"
        >
          <div className="absolute inset-[9%] rotate-45 border border-[#eeeade]/20" />
          <div className="absolute inset-[21%] rotate-45 border border-[#ff5a5f]/80" />
          <div className="absolute inset-[34%] rotate-45 bg-[#ff5a5f] shadow-[0_0_80px_rgba(255,90,95,.22)]" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-[#eeeade]/20" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-[#eeeade]/20" />
          <div className="absolute right-[4%] top-[16%] font-mono text-[9px] leading-5 tracking-[0.18em] text-[#eeeade]/45">
            VECTOR 01<br />13.7563° N<br />100.5018° E
          </div>
          <div className="absolute bottom-[12%] left-[2%] border-l-2 border-[#ff5a5f] pl-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#eeeade]/55">
            Systems online<br />Evidence acquired
          </div>
        </motion.div>
      </section>

      <section id="work" className="relative border-y border-[#eeeade]/15 bg-[#eeeade] px-5 py-24 text-[#151715] md:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal} className="mb-12 grid gap-5 md:grid-cols-[.65fr_1.35fr] md:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#ff4f55]">Selected operations / 03</p>
              <h2 className="mt-3 text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">Proof, not promises.</h2>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-[#151715]/65 md:justify-self-end">
              Production-minded AI work with a bias for reliability, useful interfaces, and outcomes a team can measure.
            </p>
          </motion.div>

          <div className="grid gap-px bg-[#151715]/20 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.code}
                {...reveal}
                transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.08 }}
                className="group relative min-h-[330px] overflow-hidden bg-[#eeeade] p-7 transition-colors hover:bg-white"
                style={{ clipPath: index === 2 ? "polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)" : undefined }}
              >
                <div className="absolute right-0 top-0 h-14 w-14 border-b border-l border-[#151715]/15 transition-colors group-hover:bg-[#ff5a5f]" />
                <div className="font-mono text-[10px] tracking-[0.2em] text-[#151715]/45">{project.code} / VERIFIED</div>
                <h3 className="mt-12 max-w-[12ch] text-3xl font-black uppercase leading-none tracking-[-0.04em]">{project.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-[#151715]/62">{project.description}</p>
                <ul className="mt-7 space-y-2" aria-label={`${project.title} outcomes`}>
                  {project.metrics.map((metric) => (
                    <li key={metric} className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em]">
                      <span className="h-px w-5 bg-[#ff4f55]" /> {metric}
                    </li>
                  ))}
                </ul>
                <p className="absolute bottom-6 left-7 font-mono text-[9px] tracking-[0.14em] text-[#151715]/42">{project.stack}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal} className="grid gap-12 lg:grid-cols-[.6fr_1.4fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#ff5a5f]">Deployment history</p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.05em] md:text-6xl">Built in the field.</h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#eeeade]/55">
                Experience spanning research, model development, cloud architecture, and product delivery.
              </p>
            </div>
            <ol className="border-t border-[#eeeade]/20">
              {experience.map(([period, role, company, detail], index) => (
                <li key={role} className="group grid gap-3 border-b border-[#eeeade]/20 py-6 md:grid-cols-[110px_1fr_1fr] md:items-center">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-[#ff5a5f]">0{index + 1} / {period}</span>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-[-0.02em]">{role}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#eeeade]/40">{company}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-[#eeeade]/58">{detail}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      <footer className="relative border-t border-[#eeeade]/15 px-5 py-16 md:px-10">
        <motion.div {...reveal} className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#ff5a5f]">Open channel</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black uppercase leading-[.92] tracking-[-0.055em] md:text-7xl">
              Let&apos;s deploy something useful.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <a aria-label="Email Thadoe Hein" href="mailto:thadoe.work@gmail.com" className="grid size-12 place-items-center border border-[#eeeade]/25 transition-colors hover:border-[#ff5a5f] hover:bg-[#ff5a5f] hover:text-[#111311] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5a5f]"><Mail aria-hidden="true" className="size-5" /></a>
            <a aria-label="Thadoe Hein on LinkedIn" href="https://www.linkedin.com/in/thadoe/" target="_blank" rel="noreferrer" className="grid size-12 place-items-center border border-[#eeeade]/25 transition-colors hover:border-[#ff5a5f] hover:bg-[#ff5a5f] hover:text-[#111311] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5a5f]"><Linkedin aria-hidden="true" className="size-5" /></a>
            <a aria-label="MyBoringFacts on GitHub" href="https://github.com/MyBoringFacts" target="_blank" rel="noreferrer" className="grid size-12 place-items-center border border-[#eeeade]/25 transition-colors hover:border-[#ff5a5f] hover:bg-[#ff5a5f] hover:text-[#111311] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5a5f]"><Github aria-hidden="true" className="size-5" /></a>
          </div>
        </motion.div>
        <div className="mx-auto mt-14 flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-[#eeeade]/12 pt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#eeeade]/35">
          <span>© 2026 Thadoe Hein</span>
          <span>Prototype / Tactical editorial</span>
        </div>
      </footer>
    </main>
  );
}
