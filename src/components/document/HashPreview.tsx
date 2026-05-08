"use client";
import { Copy } from "lucide-react";
import { useState } from "react";

export function HashPreview({ hash, isHashing }: { hash: string; isHashing?: boolean }) {
  const [copied, setCopied] = useState(false);
  if (!hash && !isHashing) return null;
  const onCopy = async () => { if (!hash) return; await navigator.clipboard.writeText(hash); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return <div className="mt-4 rounded-xl border border-[#C8CBDE] bg-[#F5F6FC] p-4"><div className="mb-2 flex items-center justify-between"><p className="text-xs font-semibold uppercase tracking-wide text-[#6B6E9A]">Document Fingerprint</p>{hash ? <button onClick={onCopy} aria-label="Copy hash" className="inline-flex items-center gap-1 text-xs text-[#6B6E9A] hover:text-[#40415D]"><Copy className="h-3.5 w-3.5" /> {copied ? "Copied!" : "Copy"}</button> : null}</div>{isHashing ? <><div className="h-4 w-full animate-pulse rounded bg-[#DDDFEE]" /><p className="mt-2 text-xs text-[#6B6E9A]">Computing SHA-256 fingerprint...</p></> : <p className="mono break-all text-xs leading-relaxed text-[#1A1B2E]">{hash}</p>}</div>;
}
