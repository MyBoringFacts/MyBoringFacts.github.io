import type { Metadata } from "next";

import { GooglePrototype } from "@/components/themes/google-prototype";

export const metadata: Metadata = {
  title: "Clear Intelligence | Thadoe Hein",
  description: "A clear product-design portfolio concept for AI engineer Thadoe Hein.",
};

export default function GoogleThemePage() {
  return <GooglePrototype />;
}
