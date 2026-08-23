"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ComponentProps } from "react";

export function Reveal({ children, delay = 0, ...props }: ComponentProps<typeof motion.div> & { delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
