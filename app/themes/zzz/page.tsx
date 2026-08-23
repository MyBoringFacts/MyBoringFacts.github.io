import type { Metadata } from "next";

import { ZzzPrototype } from "@/components/themes/zzz-prototype";

export const metadata: Metadata = {
  title: "Urban Signal | Thadoe Hein",
  description: "An urban editorial portfolio concept for AI engineer Thadoe Hein.",
};

export default function ZzzThemePage() {
  return <ZzzPrototype />;
}
