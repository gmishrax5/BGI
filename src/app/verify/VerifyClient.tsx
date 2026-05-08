"use client";
import { useEffect, useState } from "react";
import { ChevronDown, Search, ShieldCheck, Zap } from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/layout/AppShell";
import { FileDropzone } from "@/components/document/FileDropzone";
import { HashPreview } from "@/components/document/HashPreview";
import { VerificationResultCard } from "@/components/trust/VerificationResultCard";
import { StatusBadge } from "@/components/trust/StatusBadge";
import { EmptyState } from "@/components/system/EmptyState";
import { useFileHash } from "@/hooks/useFileHash";
import { useVerification } from "@/hooks/useVerification";
import { contractConfig } from "@/lib/contracts/config";
import { MOCK_DOCUMENTS } from "@/lib/constants/mockData";
import type { VerificationResult } from "@/types/document";

export function VerifyClient() {
  const [file, setFile] = useState<File | null>(null);
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoHash, setDemoHash] = useState("");
  const [demoResult, setDemoResult] = useState<VerificationResult | null>(null);
  const [isDemoVerifying, setIsDemoVerifying] = useState(false);
  const { hash, loading: isHashing, computeHash, reset: resetHash } = useFileHash();
  const { verify, result, loading: isVerifying, reset } = useVerification();
  const computedHash = demoHash || hash;
  const verificationResult = demoResult || result;

  useEffect(() => {
    if (hash && !demoHash) void verify(hash);
  }, [hash, verify, demoHash]);

  function handleLoadDemo(doc: (typeof MOCK_DOCUMENTS)[number]) {
    setFile(null);
    resetHash();
    reset();
    setDemoResult(null);
    setIsDemoVerifying(true);
    setDemoHash(doc.hash);

    setTimeout(() => {
      setDemoResult({
        status: doc.status,
        computedHash: doc.hash,
        checkedAt: Date.now(),
        record: {
          documentHash: doc.hash,
          documentTitle: doc.title,
          documentType: doc.documentType,
          sector: doc.sector,
          issuer: doc.issuerAddress ?? "0xIssu3r000000000000000000000000D3mo",
          holder: doc.holderName,
          ipfsCid: doc.ipfsCid,
          txHash: doc.txHash,
          issuedAt: doc.issuedAt,
          expiryAt: doc.expiryAt,
          status: doc.status === "expired" ? "expired" : doc.status === "revoked" ? "revoked" : "valid",
        },
      });
      setIsDemoVerifying(false);
      setDemoOpen(false);
      toast.success(`Demo: "${doc.title}" loaded`);
    }, 1200);
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-2xl px-4 py-16">
        <span className="inline-flex items-center gap-1 rounded-full bg-[#DDDFEE] px-3 py-1 text-xs font-medium text-[#40415D]"><ShieldCheck className="h-3.5 w-3.5" />Public Verification - No Login Required</span>
        <h1 className="mt-3 text-3xl font-bold font-display text-[#1A1B2E]">Verify Document Authenticity</h1>
        <p className="mt-2 text-base text-[#6B6E9A]">Drop any document below. We&apos;ll compute its fingerprint and check it against the blockchain instantly.</p>
        {contractConfig.demoMode ? <span className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs text-amber-700"><Zap className="h-3.5 w-3.5" />Demo Mode Active - Using sample blockchain data</span> : null}

        <div className="mt-6 space-y-4">
          {!file && !verificationResult ? <EmptyState icon={Search} title="Ready to verify" description="Upload a file and DocChain will validate authenticity instantly." /> : null}
          <FileDropzone selectedFile={file} onFileSelect={(next) => { setDemoHash(""); setDemoResult(null); setFile(next); void computeHash(next); }} onClear={() => { setDemoHash(""); setDemoResult(null); setFile(null); resetHash(); reset(); }} />

          {process.env.NEXT_PUBLIC_DEMO_MODE === "true" && !computedHash ? (
            <div className="mt-4 overflow-hidden rounded-xl border border-[#C8CBDE]">
              <button
                onClick={() => setDemoOpen((prev) => !prev)}
                className="flex w-full items-center justify-between border-b border-amber-100 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-700 transition-colors hover:bg-amber-100"
              >
                <span className="flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5" />
                  Try Demo Documents
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${demoOpen ? "rotate-180" : ""}`} />
              </button>
              {demoOpen ? (
                <div className="space-y-2 bg-white p-3">
                  <p className="px-1 pb-1 text-xs text-[#9A9BB5]">Click any document to simulate blockchain verification</p>
                  {MOCK_DOCUMENTS.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => handleLoadDemo(doc)}
                      className="group w-full rounded-lg border border-[#C8CBDE] p-3 text-left transition-all hover:border-[#40415D] hover:bg-[#F5F6FC]"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium text-[#1A1B2E] transition-colors group-hover:text-[#40415D]">{doc.title}</div>
                          <div className="mt-0.5 text-xs text-[#9A9BB5]">{doc.sector} · {doc.documentType}</div>
                        </div>
                        <StatusBadge status={doc.status} size="sm" />
                      </div>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}

          <HashPreview hash={computedHash} isHashing={isHashing} />
          <VerificationResultCard result={verificationResult} isLoading={isVerifying || isDemoVerifying} />
          {verificationResult ? <button className="text-sm text-[#40415D] underline" onClick={() => { setDemoHash(""); setDemoResult(null); setFile(null); resetHash(); reset(); }}>Verify Another Document</button> : null}
        </div>
      </div>
    </AppShell>
  );
}
