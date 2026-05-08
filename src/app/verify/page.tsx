import type { Metadata } from "next";
import { VerifyClient } from "./VerifyClient";

export const metadata: Metadata = {
  title: "Verify Document",
  description: "Instantly verify the authenticity of any document. Upload, hash, and check against the blockchain in seconds.",
  openGraph: {
    title: "Verify Document ? DocChain",
    description: "SHA-256 fingerprint checked against immutable blockchain record.",
  },
};

export default function VerifyPage() {
  return <VerifyClient />;
}
