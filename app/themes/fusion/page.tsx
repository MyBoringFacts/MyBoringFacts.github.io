import type { Metadata } from "next";

import { FusionPrototype } from "@/components/themes/fusion-prototype";

export const metadata: Metadata = {
  title: "Signal / Orbit | Thadoe Hein",
  description: "A fused visual portfolio concept for AI engineer Thadoe Hein.",
};

export default function FusionThemePage() {
  return <FusionPrototype />;
}
