import type { Metadata } from "next";
import { SignalPrototype } from "@/components/themes/signal-prototype";

export const metadata: Metadata = {
  title: "Proof / Signal — Portfolio Direction",
  description: "An original recruiter-first portfolio concept for AI engineer Thadoe Hein.",
};

export default function SignalThemePage() {
  return <SignalPrototype />;
}
