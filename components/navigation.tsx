"use client";

import Link from "next/link";
import { useTheme } from "@/components/theme-provider";
import { motion } from "motion/react";
import { useState, useEffect, type MouseEvent } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Me", href: "/me" },
];

export function Navigation() {
  const { theme } = useTheme();
  const isColorful = theme === "black-hole";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className="flex items-center gap-1 px-2 py-2 rounded-full border backdrop-blur-md transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? isColorful
              ? "rgba(0, 0, 0, 0.9)"
              : "rgba(255, 255, 255, 0.95)"
            : isColorful
            ? "rgba(0, 0, 0, 0.6)"
            : "rgba(255, 255, 255, 0.8)",
          borderColor: isColorful ? "#404040" : "#e5e5e5",
        }}
      >
        {navItems.map((item) => {
          const sharedProps = {
            className:
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105",
            style: {
              color: isColorful ? "#d4d4d4" : "#404040",
            },
            onMouseEnter: (e: MouseEvent<HTMLElement>) => {
              e.currentTarget.style.backgroundColor = isColorful
                ? "rgba(59, 130, 246, 0.2)"
                : "rgba(0, 0, 0, 0.05)";
              e.currentTarget.style.color = isColorful ? "#60a5fa" : "#171717";
            },
            onMouseLeave: (e: MouseEvent<HTMLElement>) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = isColorful ? "#d4d4d4" : "#404040";
            },
          };

          if (item.href.startsWith("#")) {
            return (
              <a key={item.label} href={item.href} {...sharedProps}>
                {item.label}
              </a>
            );
          }

          return (
            <Link key={item.label} href={item.href} {...sharedProps}>
              {item.label}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
