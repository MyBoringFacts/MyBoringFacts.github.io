"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const colors = ["#4285f4", "#ea4335", "#fbbc04", "#34a853"];

const projects = [
  {
    number: "01",
    title: "Video intelligence that finds the right moment, fast.",
    description: "Embedding-based identity retrieval across large video datasets, built on scalable AWS infrastructure.",
    metrics: [
      { value: "90%", label: "less processing time" },
      { value: "<1s", label: "identity search" },
    ],
    tags: ["Python", "AWS", "Qdrant"],
  },
  {
    number: "02",
    title: "Document intelligence grounded in real sources.",
    description: "A production RAG platform with automated ingestion, retrieval, ranking, and quality-focused responses.",
    metrics: [
      { value: "RAG", label: "production system" },
      { value: "↑", label: "answer accuracy" },
    ],
    tags: ["LangChain", "OpenAI", "Vector DB"],
  },
  {
    number: "03",
    title: "Computer vision that removes hours of manual work.",
    description: "A fine-tuned OCR and localization pipeline designed for challenging real-world Thai receipts.",
    metrics: [
      { value: "50+", label: "hours saved" },
      { value: ".93", label: "detection accuracy" },
    ],
    tags: ["YOLOv11", "Azure AI", "OpenCV"],
  },
];

const experience = [
  {
    period: "2026 — Present",
    role: "AI Developer",
    company: "SoeMindAI",
    detail: "Optimizing model costs and automating complex content workflows into reliable AI products.",
  },
  {
    period: "2025",
    role: "Machine Learning Engineer Intern",
    company: "Language Understanding Laboratory",
    detail: "Fine-tuned multilingual transformers and built reproducible evaluation pipelines.",
  },
  {
    period: "2024 — 2025",
    role: "AI Engineer Apprentice",
    company: "Intelligent Systems Laboratory",
    detail: "Deployed RAG systems, model APIs, monitoring, and end-to-end ML pipelines.",
  },
];

export function GooglePrototype() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.55, ease: "easeOut" as const },
      };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#202124] selection:bg-[#d2e3fc]">
      <header className="relative z-20 border-b border-[#dadce0] bg-white/90 px-5 backdrop-blur-xl md:px-10">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between" aria-label="Prototype navigation">
          <Link href="/" className="group flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a73e8]">
            <span className="grid size-9 place-items-center rounded-xl bg-[#202124] text-xs font-bold text-white transition-transform group-hover:-rotate-3">TH</span>
            <span className="hidden text-sm font-medium sm:inline">Thadoe Hein</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="hidden items-center gap-2 text-xs text-[#5f6368] md:flex">
              <span className="size-2 rounded-full bg-[#34a853]" /> Available for opportunities
            </span>
            <Link
              href="/"
              className="flex min-h-11 items-center gap-2 rounded-full border border-[#dadce0] px-4 text-sm font-medium transition-all hover:border-[#aecbfa] hover:bg-[#f8fafd] hover:text-[#1967d2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a73e8]"
            >
              Explore themes <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </nav>
      </header>

      <section className="relative px-5 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
        <div aria-hidden="true" className="pointer-events-none absolute left-[7%] top-24 size-3 rounded-full bg-[#fbbc04]" />
        <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-40 size-4 rounded-sm bg-[#34a853]" />
        <div aria-hidden="true" className="pointer-events-none absolute right-[19%] top-[58%] size-2 rounded-full bg-[#ea4335]" />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative mx-auto max-w-5xl text-center"
        >
          <p className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full bg-[#e8f0fe] px-4 py-2 text-xs font-medium text-[#1967d2]">
            <Sparkles aria-hidden="true" className="size-3.5" /> AI Engineer · Production systems
          </p>
          <h1 className="text-balance text-[clamp(3.3rem,8.4vw,7.4rem)] font-semibold leading-[0.98] tracking-[-0.065em]">
            Building AI that works
            <span className="block text-[#5f6368]">in the real world.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-relaxed text-[#5f6368] md:text-xl">
            I&apos;m Thadoe Hein. I design and ship production RAG and ML systems—grounded, scalable, and measured by useful outcomes.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#work"
              className="flex min-h-12 items-center gap-2 rounded-full bg-[#1a73e8] px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#185abc] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#1a73e8]"
            >
              See selected work <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a
              href="mailto:thadoe.work@gmail.com"
              className="flex min-h-12 items-center rounded-full border border-[#dadce0] px-6 text-sm font-semibold text-[#1a73e8] transition-colors hover:bg-[#f8fafd] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#1a73e8]"
            >
              Let&apos;s talk
            </a>
          </div>
        </motion.div>

        <motion.div
          aria-label="Career highlights"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.18 }}
          className="mx-auto mt-20 grid max-w-4xl divide-y divide-[#dadce0] rounded-3xl border border-[#dadce0] bg-white shadow-[0_16px_50px_rgba(60,64,67,.08)] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {[
            ["90%", "faster video processing", "#4285f4"],
            ["0.93", "OCR detection accuracy", "#ea4335"],
            ["~30%", "lower AI model costs", "#34a853"],
          ].map(([value, label, color]) => (
            <div key={label} className="p-7 text-left sm:text-center">
              <p className="text-3xl font-semibold tracking-[-0.04em]" style={{ color }}>{value}</p>
              <p className="mt-1 text-sm text-[#5f6368]">{label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section id="work" className="bg-[#f8fafd] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal} className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold text-[#1a73e8]">Selected work</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] md:text-6xl">Evidence over adjectives.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#5f6368]">Three systems that turn complex AI capabilities into clear value.</p>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                {...reveal}
                transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.08 }}
                className="group flex min-h-[430px] flex-col rounded-[28px] border border-[#dadce0] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#bdc1c6] hover:shadow-[0_12px_30px_rgba(60,64,67,.12)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#5f6368]">CASE {project.number}</span>
                  <span className="size-3 rounded-full" style={{ backgroundColor: colors[index] }} />
                </div>
                <h3 className="mt-10 text-2xl font-semibold leading-tight tracking-[-0.035em]">{project.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#5f6368]">{project.description}</p>
                <dl className="mt-8 grid grid-cols-2 gap-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl bg-[#f8fafd] p-4">
                      <dt className="text-xs leading-tight text-[#5f6368]">{metric.label}</dt>
                      <dd className="mt-1 text-2xl font-semibold tracking-[-0.04em]" style={{ color: colors[index] }}>{metric.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#dadce0] px-3 py-1.5 text-[11px] font-medium text-[#5f6368]">{tag}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <motion.div {...reveal}>
            <p className="text-sm font-semibold text-[#34a853]">Experience</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] md:text-6xl">Learning by shipping.</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#5f6368]">
              From applied research to production platforms, I work across the AI lifecycle with product outcomes in mind.
            </p>
          </motion.div>
          <motion.ol {...reveal} className="divide-y divide-[#dadce0] border-y border-[#dadce0]">
            {experience.map((item, index) => (
              <li key={item.role} className="grid gap-3 py-7 md:grid-cols-[120px_1fr]">
                <div>
                  <span className="mb-3 block size-2.5 rounded-full" style={{ backgroundColor: colors[(index + 1) % colors.length] }} />
                  <p className="text-xs font-medium text-[#5f6368]">{item.period}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em]">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-[#5f6368]">{item.company}</p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#5f6368]">{item.detail}</p>
                </div>
              </li>
            ))}
          </motion.ol>
        </div>
      </section>

      <footer className="px-5 pb-8 md:px-10">
        <motion.div {...reveal} className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#202124] px-7 py-12 text-white md:px-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-sm font-semibold text-[#8ab4f8]">Have a hard AI problem?</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">Let&apos;s make it useful.</h2>
              <a href="mailto:thadoe.work@gmail.com" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#202124] transition-colors hover:bg-[#e8eaed] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8ab4f8]">
                Get in touch <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </div>
            <div className="flex gap-2">
              <a href="mailto:thadoe.work@gmail.com" aria-label="Email Thadoe Hein" className="grid size-12 place-items-center rounded-full border border-white/25 transition-colors hover:bg-white hover:text-[#202124] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8ab4f8]"><Mail aria-hidden="true" className="size-5" /></a>
              <a href="https://www.linkedin.com/in/thadoe/" target="_blank" rel="noreferrer" aria-label="Thadoe Hein on LinkedIn" className="grid size-12 place-items-center rounded-full border border-white/25 transition-colors hover:bg-white hover:text-[#202124] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8ab4f8]"><Linkedin aria-hidden="true" className="size-5" /></a>
              <a href="https://github.com/MyBoringFacts" target="_blank" rel="noreferrer" aria-label="MyBoringFacts on GitHub" className="grid size-12 place-items-center rounded-full border border-white/25 transition-colors hover:bg-white hover:text-[#202124] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8ab4f8]"><Github aria-hidden="true" className="size-5" /></a>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-white/15 pt-5 text-xs text-white/45">
            <span>© 2026 Thadoe Hein</span>
            <span>AI systems · designed with clarity</span>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
