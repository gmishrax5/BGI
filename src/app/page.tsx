import Link from "next/link";
import { ArrowRight, Banknote, Briefcase, ChevronRight, Database, GraduationCap, Hash, HeartPulse, Landmark, Lock, Play, Scale, ShieldCheck, Upload } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";

const sectors = [
  { title: "Education", desc: "Degree & Certificate Verification", icon: GraduationCap },
  { title: "Healthcare", desc: "Medical Record Authentication", icon: HeartPulse },
  { title: "Legal", desc: "Contract & Affidavit Validation", icon: Scale },
  { title: "Government", desc: "Land Records & Licenses", icon: Landmark },
  { title: "Corporate", desc: "BGV & Experience Letters", icon: Briefcase },
  { title: "Finance", desc: "KYC Document Verification", icon: Banknote },
];

const steps = [
  { n: "01", icon: Upload, t: "Upload Document", d: "Drag and drop any PDF, image, or file. Your document never leaves your browser unencrypted." },
  { n: "02", icon: Hash, t: "Instant Fingerprinting", d: "SHA-256 hash computed locally in your browser. No file is stored on any server - only its proof." },
  { n: "03", icon: ShieldCheck, t: "Blockchain Verified", d: "Hash compared against the immutable blockchain registry. Result in under 3 seconds." },
];

const security = [
  { icon: Lock, t: "SHA-256 Hashing", d: "Industry-standard cryptographic hashing ensures every document has a unique, unforgeable fingerprint." },
  { icon: Database, t: "Blockchain Immutability", d: "Once recorded, document proof cannot be altered or deleted - the ledger is permanent and public." },
  { icon: Database, t: "Decentralized Storage", d: "Files stored on IPFS mean no single point of failure and no central authority over your data." },
];

export default function HomePage() {
  return (
    <AppShell>
      <section className="relative overflow-hidden rounded-[2rem] bg-[#ECEEF4] px-6 py-12 md:px-10 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C8CBDE] bg-white px-4 py-1.5 text-sm font-medium text-[#40415D]"><ShieldCheck className="h-4 w-4" />Blockchain Security and Digital Trust</span>
            <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-[#131523] md:text-7xl">
              We transform trust<br /><span className="text-[#40415D]">through innovation</span>
            </h1>
            <p className="mt-4 max-w-xl text-2xl text-[#5D6389]">People judge authenticity in seconds. We help your documents win that moment.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/verify" className="inline-flex items-center gap-2 rounded-2xl bg-[#111318] px-7 py-3.5 text-lg font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1d2130]">
                <Play className="h-4 w-4 fill-current" />
                Verify Now
              </Link>
              <Link href="/register" className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-lg font-semibold text-[#1A1B2E] shadow-[0_6px_24px_-18px_rgba(17,19,24,0.5)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#f7f8fc]">
                Register Document
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-2xl border border-[#D7DAEA] bg-white px-4 py-2 text-sm text-[#4B5072]">SHA-256 Hashing</span>
              <span className="rounded-2xl border border-[#D7DAEA] bg-white px-4 py-2 text-sm text-[#4B5072]">Immutable Ledger</span>
              <span className="rounded-2xl border border-[#D7DAEA] bg-white px-4 py-2 text-sm text-[#4B5072]">IPFS Storage</span>
            </div>
          </div>

          <div className="relative mx-auto h-105 w-full max-w-130 overflow-hidden  ">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/hero-right.png')" }}
              aria-label="Hero artwork"
            />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <h2 className="text-center font-display text-3xl font-bold">How TRUSTIFY Works</h2>
        <p className="mb-10 text-center text-[#6B6E9A]">Three steps to tamper-proof document trust.</p>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="relative rounded-2xl border border-[#C8CBDE] bg-[#F5F6FC] p-8 hover:border-[#40415D]">
                <span className="rounded-full bg-[#DDDFEE] px-3 py-1 text-sm text-[#40415D]">{s.n}</span>
                <Icon className="mt-4 h-8 w-8 text-[#40415D]" />
                <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-[#6B6E9A]">{s.d}</p>
                {idx < 2 ? <ChevronRight className="absolute -right-6 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-[#C8CBDE] md:block" /> : null}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#F5F6FC] py-24">
        <h2 className="text-center font-display text-3xl font-bold">Trusted Across Every Sector</h2>
        <p className="mb-10 text-center text-[#6B6E9A]">From universities to hospitals - TRUSTIFY works everywhere.</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {sectors.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-xl border border-[#C8CBDE] bg-white p-6 text-center">
                <span className="mb-3 inline-flex rounded-xl bg-[#DDDFEE] p-3"><Icon className="h-5 w-5 text-[#40415D]" /></span>
                <p className="font-semibold text-[#1A1B2E]">{item.title}</p>
                <p className="mt-1 text-sm text-[#6B6E9A]">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#40415D] py-16 text-center text-white">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:border-r md:border-white/10"><p className="font-display text-4xl font-bold">0</p><p className="mt-1 text-sm text-[#DDDFEE]/70">Intermediaries Needed</p></div>
          <div className="md:border-r md:border-white/10"><p className="font-display text-4xl font-bold">&lt; 3s</p><p className="mt-1 text-sm text-[#DDDFEE]/70">Verification Time</p></div>
          <div><p className="font-display text-4xl font-bold">5+</p><p className="mt-1 text-sm text-[#DDDFEE]/70">Sectors Supported</p></div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <h2 className="mb-8 text-center font-display text-3xl font-bold">Built for Trust, Designed for Security</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {security.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.t} className="rounded-2xl border border-[#C8CBDE] bg-[#F5F6FC] p-6">
                <span className="inline-flex rounded-xl bg-[#DDDFEE] p-3"><Icon className="h-5 w-5 text-[#40415D]" /></span>
                <h3 className="mt-3 text-xl font-semibold">{item.t}</h3>
                <p className="mt-2 text-[#6B6E9A]">{item.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-4 rounded-3xl border border-[#C8CBDE] bg-[#DDDFEE] px-6 py-14 text-center md:px-10 md:py-16">
        <h2 className="font-display text-3xl font-bold text-[#1A1B2E]">Ready to Verify Your First Document?</h2>
        <p className="mt-2 text-[#6B6E9A]">No login required. Works instantly.</p>
        <Link href="/verify" className="mt-6 inline-block rounded-xl bg-[#40415D] px-10 py-4 text-lg font-semibold text-white hover:bg-[#2e2f46]">Start Verifying -&gt;</Link>
      </section>
    </AppShell>
  );
}
