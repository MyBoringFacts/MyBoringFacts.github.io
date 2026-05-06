"use client";

import { Navigation } from "@/components/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
import { useTheme } from "@/components/theme-provider";

export default function Portfolio() {
  const { theme } = useTheme();
  const isColorful = theme === "black-hole";

  return (
    <main
      className="min-h-screen transition-colors duration-500"
      style={{
        backgroundColor: isColorful ? "#0a0a0a" : "#ffffff",
      }}
    >
      <Navigation />
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
