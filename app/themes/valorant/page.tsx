import type { Metadata } from "next";

import { ValorantPrototype } from "@/components/themes/valorant-prototype";

export const metadata: Metadata = {
  title: "Tactical Precision | Thadoe Hein",
  description: "A tactical editorial portfolio concept for AI engineer Thadoe Hein.",
};

export default function ValorantThemePage() {
  return <ValorantPrototype />;
}
