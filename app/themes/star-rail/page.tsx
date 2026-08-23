import type { Metadata } from "next";

import { StarRailPrototype } from "@/components/themes/star-rail-prototype";

export const metadata: Metadata = {
  title: "Celestial Systems | Thadoe Hein",
  description: "A celestial technology portfolio concept for AI engineer Thadoe Hein.",
};

export default function StarRailThemePage() {
  return <StarRailPrototype />;
}
