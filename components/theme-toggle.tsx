"use client";

import { useTheme } from "@/components/theme-provider";
import { motion } from "motion/react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "white-hole" ? "black-hole" : "white-hole")}
      className="fixed top-6 right-6 z-50 flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-500 backdrop-blur-sm"
      style={{
        backgroundColor: theme === "white-hole" ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.8)",
        borderColor: theme === "white-hole" ? "#e5e5e5" : "#404040",
        color: theme === "white-hole" ? "#171717" : "#fafafa",
      }}
    >
      <motion.div
        className="relative w-12 h-6 rounded-full"
        style={{
          backgroundColor: theme === "white-hole" ? "#e5e5e5" : "#262626",
        }}
      >
        <motion.div
          className="absolute top-1 w-4 h-4 rounded-full"
          animate={{
            left: theme === "white-hole" ? "4px" : "28px",
            backgroundColor: theme === "white-hole" ? "#171717" : "#fafafa",
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </motion.div>
      <span className="text-sm font-medium whitespace-nowrap">
        {theme === "white-hole" ? " " : " "}
      </span>
      <motion.div
        animate={{
          rotate: theme === "white-hole" ? 0 : 180,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 0.5 }}
      >
        {theme === "white-hole" ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 1 0-20" fill="currentColor" />
          </svg>
        )}
      </motion.div>
    </button>
  );
}
