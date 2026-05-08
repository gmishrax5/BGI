"use client";
import { motion } from "framer-motion";
import { AlertTriangle, Ban, CheckCircle2, Clock, Search, XCircle } from "lucide-react";
import type { VerificationResult } from "@/types/document";
import { StatusBadge } from "./StatusBadge";
import { formatAddress } from "@/lib/utils/formatAddress";
import { formatDate } from "@/lib/utils/formatDate";
import { TxLink } from "@/components/web3/TxLink";

function MetaRow({ label, value }: { label: string; value: string }) {
  return <div><p className="text-xs uppercase tracking-wide text-[#6B6E9A]">{label}</p><p className="mt-0.5 text-sm font-medium text-[#1A1B2E]">{value}</p></div>;
}

export function VerificationResultCard({ result, isLoading }: { result?: VerificationResult | null; isLoading: boolean }) {
  if (isLoading) return <div className="rounded-2xl border border-[#C8CBDE] bg-[#F5F6FC] p-8 text-center"><div className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-[#6B6E9A] border-t-transparent" /><p className="mt-3 text-[#6B6E9A]">Checking blockchain record...</p><p className="text-sm text-[#6B6E9A]">This usually takes under 3 seconds</p></div>;
  if (!result) return null;

  return (
    <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: "easeOut" }}>
      {result.status === "valid" && result.record ? <div className="rounded-2xl border-2 border-green-300 bg-[#f0fdf4] p-6"><div className="flex items-start justify-between gap-3"><div className="flex items-center gap-2"><CheckCircle2 className="h-8 w-8 text-green-500" /><div><h3 className="text-lg font-bold text-green-800">Document is Authentic</h3><p className="text-sm text-green-600">Verified on blockchain</p></div></div><StatusBadge status="valid" /></div><div className="my-4 border-t border-green-200" /><div className="grid grid-cols-1 gap-3 md:grid-cols-2"><MetaRow label="Issuer" value={formatAddress(result.record.issuer)} /><MetaRow label="Document Type" value={result.record.documentType} /><MetaRow label="Sector" value={result.record.sector} /><MetaRow label="Registered On" value={formatDate(result.record.issuedAt)} />{result.record.expiryAt ? <MetaRow label="Expiry" value={formatDate(result.record.expiryAt)} /> : null}</div><div className="my-4 border-t border-green-200" /><div className="flex items-center justify-between"><TxLink hash={result.record.txHash} /><a className="text-xs text-[#40415D] underline" href={`https://ipfs.io/ipfs/${result.record.ipfsCid}`} target="_blank" rel="noreferrer">View on IPFS</a></div></div> : null}
      {result.status === "tampered" ? <div className="rounded-2xl border-2 border-red-300 bg-[#fef2f2] p-6"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><XCircle className="h-7 w-7 text-red-500" /><h3 className="text-lg font-bold text-red-800">Document Has Been Modified</h3></div><StatusBadge status="tampered" /></div><div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"><div className="flex items-start gap-2"><AlertTriangle className="mt-0.5 h-4 w-4" />This document does not match the original registered record. The file may have been edited, corrupted, or replaced.</div></div><p className="mono mt-4 break-all text-xs text-[#1A1B2E]">{result.computedHash}</p></div> : null}
      {result.status === "revoked" ? <div className="rounded-2xl border-2 border-red-300 bg-[#fef2f2] p-6"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Ban className="h-7 w-7 text-red-500" /><h3 className="text-lg font-bold text-red-800">Document Has Been Revoked</h3></div><StatusBadge status="revoked" /></div><p className="mt-3 text-sm text-red-700">This document was revoked by its issuer and is no longer considered valid.</p></div> : null}
      {result.status === "expired" ? <div className="rounded-2xl border-2 border-amber-300 bg-[#fffbeb] p-6"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Clock className="h-7 w-7 text-amber-500" /><h3 className="text-lg font-bold text-amber-800">Document Has Expired</h3></div><StatusBadge status="expired" /></div><p className="mt-3 text-sm text-amber-700">This document was valid but has passed its expiry date. Contact the issuer for a renewed document.</p></div> : null}
      {result.status === "not_found" ? <div className="rounded-2xl border-2 border-blue-200 bg-[#eff6ff] p-6"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Search className="h-7 w-7 text-blue-400" /><h3 className="text-lg font-bold text-blue-800">Document Not Found</h3></div><StatusBadge status="not_found" /></div><p className="mt-3 text-sm text-blue-700">No record of this document exists on the blockchain. It may not have been registered, or it may have been issued by a system not connected to DocChain.</p><ul className="mt-3 space-y-1 text-sm text-blue-600"><li>? Check if the correct file is uploaded</li><li>? Contact the document issuer</li><li>? Verify the document was registered on DocChain</li></ul></div> : null}
    </motion.div>
  );
}
