import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 bg-[#40415D] py-16 text-[#DDDFEE]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" />
            <p className="font-display text-lg font-bold">DocChain</p>
          </div>
          <p className="mt-3 text-sm opacity-90">Decentralized document trust for the real world.</p>
          <p className="mt-2 text-xs opacity-70">Production-ready Web3 trust platform</p>
        </div>
        <div>
          <p className="text-xs uppercase opacity-60">Platform</p>
          <div className="mt-3 space-y-2 text-sm">
            <Link href="/" className="block opacity-80 hover:opacity-100">Home</Link>
            <Link href="/verify" className="block opacity-80 hover:opacity-100">Verify Document</Link>
            <Link href="/register" className="block opacity-80 hover:opacity-100">Register Document</Link>
            <Link href="/dashboard" className="block opacity-80 hover:opacity-100">Dashboard</Link>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase opacity-60">Legal</p>
          <div className="mt-3 space-y-2 text-sm">
            <Link href="/privacy" className="block opacity-80 hover:opacity-100">Privacy Policy</Link>
            <Link href="/cookies" className="block opacity-80 hover:opacity-100">Cookie Policy</Link>
          </div>
          <div className="mt-4 flex gap-2 text-xs">
            <span className="rounded-full bg-white/10 px-2 py-1">Powered by Polygon</span>
            <span className="rounded-full bg-white/10 px-2 py-1">+ IPFS</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-white/10 px-4 pt-5 text-xs opacity-80 md:flex-row md:items-center md:justify-between">
        <p>(c) 2026 DocChain. All rights reserved.</p>
        <p>Indore, Madhya Pradesh</p>
      </div>
    </footer>
  );
}
