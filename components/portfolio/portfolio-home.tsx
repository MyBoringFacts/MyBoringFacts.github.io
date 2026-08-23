"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  CircleDot,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { ExpertiseMap } from "@/components/portfolio/expertise-map";
import { Reveal } from "@/components/portfolio/reveal";
import { SignalVisual } from "@/components/portfolio/signal-visual";
import { experience, projects, site } from "@/lib/portfolio-data";

export function PortfolioHome() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-[#ebe9e2] text-[#111318] selection:bg-[#c7f26b] selection:text-[#111318]">
      <header className="relative z-40 border-b border-black/15 bg-[#ebe9e2]/90 px-5 backdrop-blur-xl md:px-9">
        <nav className="mx-auto flex h-20 max-w-[1500px] items-center justify-between" aria-label="Primary navigation">
          <a href="#top" className="flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111318]">
            <span className="grid size-8 place-items-center rounded-full bg-[#111318] text-[#c7f26b]">TH</span>
            <span className="hidden sm:inline">{site.name} / {site.role}</span>
          </a>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden items-center gap-5 font-mono text-[9px] uppercase tracking-[0.15em] text-black/55 lg:flex">
              <a href="#expertise" className="transition hover:text-black">Expertise</a>
              <a href="#work" className="transition hover:text-black">Work</a>
              <a href="#experience" className="transition hover:text-black">Experience</a>
            </div>
            <a
              href={site.resume}
              download
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-black/20 px-4 font-mono text-[9px] uppercase tracking-[0.14em] transition hover:bg-[#111318] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111318]"
            >
              Résumé <Download className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="relative scroll-mt-20 px-5 py-10 md:px-9 md:py-14">
        <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(90deg,rgba(17,19,24,.09)_1px,transparent_1px)] [background-size:12.5%_100%]" />
        <div className="relative mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.7 }}
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
                <a href="#work" className="group inline-flex min-h-12 items-center gap-5 rounded-full bg-[#111318] px-6 text-sm font-semibold text-white transition hover:bg-[#ff6b35] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#111318]">
                  Examine the proof <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" />
                </a>
                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-black/40">03 production case files</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.1 }}
            className="mx-auto w-full max-w-xl lg:max-w-none"
          >
            <SignalVisual />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-black/15 bg-[#c7f26b] py-3" aria-label="Portfolio highlights">
        <div className="mx-auto flex max-w-[1500px] min-w-max items-center justify-around gap-10 px-5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em]">
          <span>90% faster processing</span>
          <span>0.93 detection accuracy</span>
          <span>~30% lower AI costs</span>
          <span>Production RAG</span>
        </div>
      </section>

      <section id="expertise" className="scroll-mt-10 px-5 py-24 md:px-9 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <Reveal className="mb-12 grid gap-6 border-b border-black/20 pb-10 md:grid-cols-2 md:items-end">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/45">Expertise map / 06 signals</p>
              <h2 className="mt-5 text-5xl font-semibold leading-none tracking-[-0.065em] md:text-7xl">How I build.</h2>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-black/60 md:justify-self-end">Six connected capabilities spanning model behavior, production infrastructure, and the people using the result. Select any signal to inspect the evidence.</p>
          </Reveal>
          <ExpertiseMap />
        </div>
      </section>

      <section id="work" className="scroll-mt-10 bg-[#111318] px-5 py-24 text-white md:px-9 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <Reveal className="grid gap-6 border-b border-white/15 pb-10 md:grid-cols-2 md:items-end">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#c7f26b]">Selected systems / 2025</p>
              <h2 className="mt-5 text-5xl font-semibold leading-none tracking-[-0.065em] md:text-7xl">Proof of work.</h2>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-white/50 md:justify-self-end">Three systems shaped around latency, accuracy, cost, and human time. Open a case file for the engineering decisions behind each result.</p>
          </Reveal>

          <div className="divide-y divide-white/15">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.06}>
                <Link href={`/work/${project.slug}`} className="group grid gap-8 py-12 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f26b] md:grid-cols-[.32fr_1.25fr_.43fr] md:items-start md:py-16">
                  <div className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                    <span className="grid size-10 place-items-center rounded-full border border-white/20 text-white">{project.index}</span>
                    {project.eyebrow}
                  </div>
                  <div>
                    <h3 className="max-w-3xl text-3xl font-semibold leading-[1.03] tracking-[-0.05em] transition-transform duration-300 group-hover:translate-x-2 md:text-5xl">{project.title}</h3>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/50">{project.summary}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.stack.map((item) => <span key={item} className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-[8px] tracking-[0.15em] text-white/60">{item}</span>)}
                    </div>
                  </div>
                  <div className="flex items-end justify-between md:block md:text-right">
                    <div>
                      <p className={`text-6xl font-semibold tracking-[-0.07em] ${project.accent === "lime" ? "text-[#c7f26b]" : project.accent === "blue" ? "text-[#86a8ff]" : "text-[#ff6b35]"}`}>{project.metric}</p>
                      <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/35">{project.metricLabel}</p>
                    </div>
                    <ArrowUpRight className="size-6 text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white md:ml-auto md:mt-8" aria-hidden="true" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-10 px-5 py-24 md:px-9 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[.68fr_1.32fr]">
          <Reveal>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/45">Trajectory / 2024—now</p>
            <h2 className="mt-5 text-5xl font-semibold leading-none tracking-[-0.065em] md:text-7xl">Learning by shipping.</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-black/60">From applied research to production platforms, I work across the AI lifecycle with the outcome in view.</p>
          </Reveal>
          <Reveal>
            <ol className="divide-y divide-black/20 border-y border-black/20">
              {experience.map((item, index) => (
                <li key={item.role} className="grid gap-4 py-8 md:grid-cols-[140px_1fr_auto] md:items-start">
                  <div>
                    <span className={`mb-3 block size-2.5 rounded-full ${index === 0 ? "bg-[#ff6b35]" : index === 1 ? "bg-[#86a8ff]" : "bg-[#77a72a]"}`} />
                    <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-black/45">{item.period}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.025em]">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-black/45">{item.company}</p>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-black/60">{item.detail}</p>
                  </div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-black/40 md:text-right">{item.proof}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-black/15 bg-white/30 px-5 py-20 md:px-9 md:py-24">
        <Reveal className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[.4fr_.6fr] lg:items-start">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/45">Working principle / 01</p>
          <blockquote className="text-4xl font-semibold leading-[1.04] tracking-[-0.055em] md:text-6xl">
            “A model is only impressive when the system around it makes someone&apos;s work better.”
          </blockquote>
        </Reveal>
      </section>

      <footer className="bg-[#111318] px-5 py-20 text-white md:px-9 md:py-28">
        <Reveal className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#c7f26b]">Next signal</p>
            <h2 className="mt-6 max-w-5xl text-[clamp(3.8rem,8vw,8rem)] font-semibold leading-[0.84] tracking-[-0.075em]">Let&apos;s build something that earns attention.</h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-md text-base leading-relaxed text-white/55">I&apos;m interested in AI engineering roles where research meets product, and where quality is measured in the real world.</p>
            <a href={`mailto:${site.email}`} className="group mt-8 inline-flex min-h-14 items-center gap-6 rounded-full bg-[#c7f26b] px-7 font-semibold text-[#111318] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f26b]">
              Start a conversation <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <div className="mt-10 flex gap-2">
              <a href={`mailto:${site.email}`} aria-label="Email Thadoe Hein" className="grid size-11 place-items-center rounded-full border border-white/20 transition hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c7f26b]"><Mail className="size-4" aria-hidden="true" /></a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="Thadoe Hein on LinkedIn" className="grid size-11 place-items-center rounded-full border border-white/20 transition hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c7f26b]"><Linkedin className="size-4" aria-hidden="true" /></a>
              <a href={site.github} target="_blank" rel="noreferrer" aria-label="MyBoringFacts on GitHub" className="grid size-11 place-items-center rounded-full border border-white/20 transition hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c7f26b]"><Github className="size-4" aria-hidden="true" /></a>
            </div>
          </div>
        </Reveal>
        <div className="mx-auto mt-20 flex max-w-[1500px] flex-wrap justify-between gap-3 border-t border-white/15 pt-5 font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
          <span>{site.name} © 2026</span>
          <span>Human judgment / Machine intelligence</span>
        </div>
      </footer>
    </main>
  );
}
