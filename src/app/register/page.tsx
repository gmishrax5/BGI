import type { Metadata } from "next";
import { RegisterClient } from "./RegisterClient";

export const metadata: Metadata = {
  title: "Register Document",
  description: "Register documents on the blockchain. Issue tamper-proof certificates, degrees, contracts, and records with permanent blockchain proof.",
  openGraph: {
    title: "Register Document ? TRUSTIFY",
    description: "Anchor document proof permanently on Polygon blockchain.",
  },
};

export default function RegisterPage() {
  return <RegisterClient />;
}
