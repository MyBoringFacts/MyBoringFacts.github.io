import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Download, Mail } from "lucide-react";
import { Reveal } from "@/components/portfolio/reveal";
import { SystemDiagram } from "@/components/portfolio/system-diagram";
import { projects, site, type Accent, type Project } from "@/lib/portfolio-data";

const accentText: Record<Accent, string> = {
  orange: "text-[#ff6b35]",
  blue: "text-[#86a8ff]",
  lime: "text-[#c7f26b]",
};

const accentBackground: Record<Accent, string> = {
  orange: "bg-[#ff6b35]",
  blue: "bg-[#86a8ff]",
  lime: "bg-[#c7f26b]",
};

export function CaseStudyPage({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen overflow-hidden bg-[#ebe9e2] text-[#111318] selection:bg-[#c7f26b] selection:text-[#111318]">
      <header className="relative z-30 border-b border-black/15 bg-[#ebe9e2]/90 px-5 backdrop-blur-xl md:px-9">
        <nav className="mx-auto flex h-20 max-w-[1500px] items-center justify-between" aria-label="Case study navigation">
          <Link href="/#work" className="inline-flex items-center gap-3 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] transition hover:text-black/55 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111318]">
            <ArrowLeft className="size-4" aria-hidden="true" /> All work
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-black/40 sm:inline">Project {project.index} / 03</span>
            <a href={site.resume} download className="inline-flex min-h-11 items-center gap-2 rounded-full border border-black/20 px-4 font-mono text-[9px] uppercase tracking-[0.14em] transition hover:bg-[#111318] hover:text-white">
              Résumé <Download className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </nav>
      </header>

      <section className="relative px-5 pb-20 pt-16 md:px-9 md:pb-28 md:pt-24">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(90deg,rgba(17,19,24,.09)_1px,transparent_1px)] [background-size:12.5%_100%]" />
        <div className="relative mx-auto max-w-[1500px]">
          <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-black/45">
            <span className={`size-2 rounded-full ${accentBackground[project.accent]}`} /> {project.eyebrow} / {project.period}
          </div>
          <h1 className="mt-8 max-w-6xl text-[clamp(3.7rem,9vw,9rem)] font-semibold leading-[0.84] tracking-[-0.08em]">{project.title}</h1>
          <div className="mt-12 grid gap-10 border-t border-black/20 pt-7 lg:grid-cols-[1fr_.55fr_.35fr]">
            <p className="max-w-2xl text-lg leading-relaxed text-black/60 md:text-xl">{project.summary}</p>
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-black/40">Core stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tool) => <span key={tool} className="rounded-full border border-black/20 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em]">{tool}</span>)}
              </div>
            </div>
            <div className="lg:text-right">
              <p className={`text-7xl font-semibold tracking-[-0.08em] ${accentText[project.accent]}`}>{project.metric}</p>
              <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.16em] text-black/40">{project.metricLabel}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111318] px-5 py-24 text-white md:px-9 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <Reveal className="grid gap-12 lg:grid-cols-2">
            <div className="border-t border-white/15 pt-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">01 / Where it started</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">The problem I was trying to solve.</h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55">{project.challenge}</p>
            </div>
            <div className="border-t border-white/15 pt-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">02 / What I built</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">My approach.</h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55">{project.approach}</p>
            </div>
          </Reveal>

          <Reveal className="mt-20" delay={0.08}>
            <div className="mb-7 flex items-end justify-between gap-5">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">03 / Architecture</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">How the pieces fit together.</h2>
              </div>
              <span className="hidden font-mono text-[8px] uppercase tracking-[0.16em] text-white/30 sm:block">Simplified system flow</span>
            </div>
            <SystemDiagram project={project} />
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 md:px-9 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/45">04 / What changed</p>
            <h2 className="mt-5 text-5xl font-semibold leading-none tracking-[-0.065em] md:text-7xl">What came out of it.</h2>
          </Reveal>
          <Reveal>
            <ol className="divide-y divide-black/20 border-y border-black/20">
              {project.results.map((result, index) => (
                <li key={result} className="grid grid-cols-[56px_1fr] gap-5 py-7">
                  <span className={`font-mono text-sm font-semibold ${accentText[project.accent]}`}>0{index + 1}</span>
                  <p className="text-xl font-semibold tracking-[-0.025em] md:text-2xl">{result}</p>
                </li>
              ))}
            </ol>
            <div className="mt-12 rounded-[2rem] border border-black/15 bg-white/35 p-7 md:p-10">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/45">What I learned</p>
              <p className="mt-5 text-2xl font-semibold leading-snug tracking-[-0.035em] md:text-3xl">{project.lessons}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-black/15 px-5 py-20 md:px-9 md:py-24">
        <div className="mx-auto grid max-w-[1500px] gap-8 md:grid-cols-2">
          <Reveal>
            <Link href={`/work/${nextProject.slug}`} className="group block rounded-[2rem] bg-[#111318] p-7 text-white transition hover:-translate-y-1 hover:shadow-2xl md:p-10">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">Next project / {nextProject.index}</p>
              <div className="mt-8 flex items-end justify-between gap-6">
                <div>
                  <h2 className="text-3xl font-semibold tracking-[-0.045em] md:text-5xl">{nextProject.shortTitle}</h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/50">{nextProject.summary}</p>
                </div>
                <ArrowRight className="size-6 shrink-0 text-[#c7f26b] transition-transform group-hover:translate-x-2" aria-hidden="true" />
              </div>
            </Link>
          </Reveal>
          <Reveal delay={0.06}>
            <a href={`mailto:${site.email}`} className="group block rounded-[2rem] border border-black/20 p-7 transition hover:bg-white/40 md:p-10">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40">Want to ask about it?</p>
              <div className="mt-8 flex items-end justify-between gap-6">
                <div>
                  <h2 className="text-3xl font-semibold tracking-[-0.045em] md:text-5xl">Start a conversation.</h2>
                  <p className="mt-3 text-sm text-black/50">{site.email}</p>
                </div>
                <Mail className="size-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#111318] px-5 py-7 text-white md:px-9">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-3 font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
          <span>{site.name} / AI Engineer</span>
          <Link href="/" className="inline-flex items-center gap-2 transition hover:text-white">Return home <ArrowUpRight className="size-3" aria-hidden="true" /></Link>
        </div>
      </footer>
    </main>
  );
}
