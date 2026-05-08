"use client";

import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  BookOpen,
  Camera,
  Compass,
  Gamepad2,
  type LucideIcon,
  MapPinned,
  Mountain,
  Shield,
  Sparkles,
  Sun,
  Swords,
  Trees,
  Users,
  Utensils,
  Waves,
} from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import Carousel from "@/components/ui/carousel";

type PanelItem = {
  icon: LucideIcon;
  label: string;
  caption: string;
  // PROMPT: drop a photo at this public/ path (e.g. public/me/nature/beaches.jpg)
  src: string;
};

type Chapter = {
  index: string;
  title: string;
  subtitle: string;
  pullQuote: string;
  reflection: string;
  icon: LucideIcon;
  panelTitle: string;
  panelItems: PanelItem[];
};

// Each string with a `// PROMPT:` comment is a draft you can rewrite in your
// own voice. Everything else is layout you can leave alone.
const chapters: Chapter[] = [
  {
    index: "01",
    title: "Nature",
    // PROMPT: 4-7 word subtitle that hints at why nature matters to you
    subtitle: "The reset I keep coming back to",
    // PROMPT: one italic line that captures the feeling nature gives you
    pullQuote: "The quiet outside has a way of finding the quiet inside.",
    // PROMPT: 2-3 sentences. Speak to the universal feeling of being outside
    // so a stranger can recognize themselves in it.
    reflection:
      "Whenever life starts moving too fast, I look for somewhere with sky in it. Beaches, parks, a view from a hill, even a short walk between buildings - they all do the same thing to me. I leave a little lighter than I came.",
    icon: Mountain,
    panelTitle: "Where I find it",
    panelItems: [
      // PROMPT: keep the label, rewrite the caption to make it specific to you,
      // and drop a real photo at the `src` path inside /public.
      {
        icon: Waves,
        label: "Beaches",
        caption: "Long walks where the noise washes off",
        src: "/me/nature/beaches.jpg",
      },
      {
        icon: Trees,
        label: "Parks",
        caption: "Green spaces in the middle of busy days",
        src: "/me/nature/parks.jpg",
      },
      {
        icon: Sun,
        label: "Mountain views",
        caption: "The kind of horizon that resets your scale",
        src: "/me/nature/mountain-views.jpg",
      },
      {
        icon: Sparkles,
        label: "Small breaks",
        caption: "Even ten minutes outside can shift a whole day",
        src: "/me/nature/small-breaks.jpg",
      },
    ],
  },
  {
    index: "02",
    title: "Games",
    // PROMPT
    subtitle: "Worlds I escape into, friends I show up for",
    // PROMPT
    pullQuote: "Sometimes the best part of the game is who is on the other end of the call.",
    // PROMPT: 2-3 sentences. Mix the solo joy of story games with the social
    // joy of playing with friends - both are universal.
    reflection:
      "Games are how I switch off and how I stay close to people at the same time. Some nights I want a story I can disappear into; other nights I want a ranked match and a voice chat full of bad jokes. Both feel like home in different ways.",
    icon: Gamepad2,
    panelTitle: "What I'm into",
    panelItems: [
      // PROMPT: swap any title for the one you actually play right now and
      // drop a real photo at the `src` path inside /public.
      {
        icon: Swords,
        label: "Valorant",
        caption: "Competitive nights with friends",
        src: "/me/games/valorant.jpg",
      },
      {
        icon: Shield,
        label: "Mobile Legends",
        caption: "Quick matches that turn into long ones",
        src: "/me/games/mobile-legends.jpg",
      },
      {
        icon: Sparkles,
        label: "Honkai: Star Rail",
        caption: "A world I keep coming back to",
        src: "/me/games/honkai-star-rail.jpg",
      },
      {
        icon: BookOpen,
        label: "Story-rich games",
        caption: "The kind that stay with you after the credits",
        src: "/me/games/story-rich-games.jpg",
      },
    ],
  },
  {
    index: "03",
    title: "Travel",
    // PROMPT
    subtitle: "Cities, food, and the people I went with",
    // PROMPT
    pullQuote: "I remember trips less as places and more as the meals and the people inside them.",
    // PROMPT: 2-3 sentences. Lean into the small things people relate to -
    // food, surprises, shared moments - rather than a packed itinerary.
    reflection:
      "What I love about travel is the little stuff. The first bite of something I cannot pronounce. A wrong turn that becomes the best part of the day. Friends laughing in a photo I will still look at five years from now. The places change, but those moments stack up into something I get to keep.",
    icon: MapPinned,
    panelTitle: "What I collect on the way",
    panelItems: [
      // PROMPT: rewrite captions to taste and drop a real photo at the `src`
      // path inside /public.
      {
        icon: Utensils,
        label: "Local food",
        caption: "Where a city tells you who it is",
        src: "/me/travel/local-food.jpg",
      },
      {
        icon: Users,
        label: "Shared moments",
        caption: "Trips are better with the right people",
        src: "/me/travel/shared-moments.jpg",
      },
      {
        icon: Camera,
        label: "Small memories",
        caption: "The photos I keep are rarely the landmarks",
        src: "/me/travel/small-memories.jpg",
      },
      {
        icon: Compass,
        label: "Getting a little lost",
        caption: "The unplanned hours are usually the best ones",
        src: "/me/travel/getting-a-little-lost.jpg",
      },
    ],
  },
];

function ChapterSection({
  chapter,
  reverse,
  isColorful,
}: {
  chapter: Chapter;
  reverse: boolean;
  isColorful: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const chapterAccents: Record<string, { dark: string; light: string }> = {
    Nature: { dark: "#34d399", light: "#059669" },
    Games: { dark: "#a78bfa", light: "#7c3aed" },
    Travel: { dark: "#f59e0b", light: "#d97706" },
  };

  const selectedAccent = chapterAccents[chapter.title] ?? {
    dark: "#60a5fa",
    light: "#3b82f6",
  };

  const accent = isColorful ? selectedAccent.dark : selectedAccent.light;
  const headingColor = isColorful ? "#fafafa" : "#171717";
  const subtleColor = isColorful ? "#a3a3a3" : "#525252";
  const bodyColor = isColorful ? "#d4d4d4" : "#404040";
  const dividerColor = isColorful ? "#262626" : "#e5e5e5";

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28"
      aria-labelledby={`chapter-${chapter.index}-title`}
    >
      <div
        className={`grid gap-12 md:grid-cols-2 md:gap-16 md:items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <p
            className="mb-6 text-center font-mono text-xs uppercase tracking-[0.25em]"
            style={{ color: accent }}
          >
            {chapter.panelTitle}
          </p>
          <div className="relative w-full overflow-hidden pb-20">
            <Carousel
              slides={chapter.panelItems.map((item) => ({
                title: item.label,
                caption: item.caption,
                src: item.src,
              }))}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col"
        >
          <div className="mb-5 flex items-center gap-4">
            <span
              className="font-mono text-xs uppercase tracking-[0.25em]"
              style={{ color: accent }}
            >
              Chapter {chapter.index} / 03
            </span>
            <span
              className="h-px flex-1"
              style={{ backgroundColor: dividerColor }}
            />
          </div>

          <h2
            id={`chapter-${chapter.index}-title`}
            className="mb-2 text-3xl font-bold md:text-5xl"
            style={{ color: headingColor }}
          >
            {chapter.title}
          </h2>
          <p
            className="mb-6 text-base md:text-lg"
            style={{ color: subtleColor }}
          >
            {chapter.subtitle}
          </p>

          <p
            className="mb-6 border-l-2 pl-4 text-lg italic md:text-xl"
            style={{
              borderColor: accent,
              color: headingColor,
            }}
          >
            &ldquo;{chapter.pullQuote}&rdquo;
          </p>

          <p
            className="mb-8 text-base leading-relaxed md:text-lg"
            style={{ color: bodyColor }}
          >
            {chapter.reflection}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function MePage() {
  const { theme } = useTheme();
  const isColorful = theme === "black-hole";

  return (
    <main
      className="min-h-screen px-4 py-24 md:px-8 transition-colors duration-500"
      style={{ backgroundColor: isColorful ? "#0a0a0a" : "#ffffff" }}
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 text-center md:mb-12"
        >
          <p
            className="mb-3 font-mono text-xs uppercase tracking-[0.25em]"
            style={{ color: isColorful ? "#60a5fa" : "#737373" }}
          >
            Beyond Work
          </p>
          <h1
            className="mb-5 text-4xl font-bold md:text-6xl"
            style={{ color: isColorful ? "#fafafa" : "#171717" }}
          >
            {/* PROMPT: replace with your own one-line title for this page */}
            The things that keep me me.
          </h1>
          <p
            className="mx-auto max-w-2xl text-lg leading-relaxed"
            style={{ color: isColorful ? "#a3a3a3" : "#525252" }}
          >
            {/* PROMPT: a personal one-liner in your voice. Aim for honest and
                a little warm - this is the door into the rest of the page. */}
            A short walk through what I love when I am not in front of a
            terminal - the places I escape to, the worlds I play in, and the
            trips I keep replaying in my head.
          </p>
        </motion.div>

        <div
          className="mx-auto mb-4 h-px w-24"
          style={{ backgroundColor: isColorful ? "#262626" : "#e5e5e5" }}
        />

        {chapters.map((chapter, idx) => (
          <ChapterSection
            key={chapter.index}
            chapter={chapter}
            reverse={idx % 2 === 1}
            isColorful={isColorful}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-medium transition-all duration-200 hover:scale-105"
            style={{
              borderColor: isColorful ? "#404040" : "#d4d4d4",
              color: isColorful ? "#d4d4d4" : "#404040",
              backgroundColor: isColorful ? "rgba(38, 38, 38, 0.5)" : "#fafafa",
            }}
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
