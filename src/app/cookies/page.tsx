import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "TRUSTIFY cookie policy ? what cookies we use and how to manage them.",
};

export default function CookiesPage() {
  return <main className="mx-auto max-w-3xl px-4 py-16"><span className="rounded-full bg-[#DDDFEE] px-3 py-1 text-xs text-[#40415D]">Legal</span><h1 className="mt-3 font-display text-4xl font-bold text-[#1A1B2E]">Cookie Policy</h1><p className="mt-1 text-sm text-[#9A9BB5]">Last updated: April 2026</p><h2 className="mb-4 mt-10 text-xl font-bold font-display text-[#1A1B2E]">What Are Cookies</h2><p className="mb-4 leading-relaxed text-[#6B6E9A]">Cookies are small files stored on your device to remember session and preference information.</p><h2 className="mb-4 mt-10 text-xl font-bold font-display text-[#1A1B2E]">Types We Use</h2><ul className="list-disc space-y-2 pl-6"><li className="text-[#6B6E9A]">Essential (always on): session security, consent preference</li><li className="text-[#6B6E9A]">Functional (optional): remember theme, UI preferences</li><li className="text-[#6B6E9A]">Analytics (optional, consent required): usage patterns, page views, interaction heatmaps</li><li className="text-[#6B6E9A]">Advertising: NONE ? TRUSTIFY does not display advertisements and does not use advertising cookies.</li></ul><h2 className="mb-4 mt-10 text-xl font-bold font-display text-[#1A1B2E]">Managing Cookies</h2><p className="mb-4 leading-relaxed text-[#6B6E9A]">You can manage cookie preferences via the cookie banner that appears on your first visit.</p><h2 className="mb-4 mt-10 text-xl font-bold font-display text-[#1A1B2E]">Third-Party Services</h2><ul className="list-disc space-y-2 pl-6"><li className="text-[#6B6E9A]">WalletConnect: may use session data for wallet connectivity</li><li className="text-[#6B6E9A]">Pinata/IPFS: no cookies used by IPFS protocol</li><li className="text-[#6B6E9A]">Polygon RPC: no cookies</li></ul></main>;
}
