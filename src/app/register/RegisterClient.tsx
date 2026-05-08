"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CheckCircle2, Loader2, LockKeyhole, ShieldCheck, ShieldX } from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/layout/AppShell";
import { ConnectWalletButton } from "@/components/web3/ConnectWalletButton";
import { WalletInfo } from "@/components/web3/WalletInfo";
import { FileDropzone } from "@/components/document/FileDropzone";
import { HashPreview } from "@/components/document/HashPreview";
import { RegisterDocumentForm, type RegisterDocumentInput } from "@/components/forms/RegisterDocumentForm";
import { useWallet } from "@/hooks/useWallet";
import { useFileHash } from "@/hooks/useFileHash";
import { useIpfsUpload } from "@/hooks/useIpfsUpload";
import { useDocumentRegistry } from "@/hooks/useDocumentRegistry";
import { TxLink } from "@/components/web3/TxLink";

const stages = ["Computing hash", "Uploading to IPFS", "Requesting wallet signature", "Waiting for confirmation", "Registration complete"];

export function RegisterClient() {
  const wallet = useWallet();
  const [file, setFile] = useState<File | null>(null);
  const { hash, computeHash, loading: hashLoading, reset } = useFileHash();
  const { upload } = useIpfsUpload();
  const { register } = useDocumentRegistry();
  const [stage, setStage] = useState<number>(-1);
  const [success, setSuccess] = useState<{ id: string; cid: string; txHash: string } | null>(null);

  const preview = useMemo(() => ({ hash, fileName: file?.name ?? "?" }), [hash, file]);

  if (!wallet.isConnected) return <AppShell><div className="mx-auto max-w-md py-24 text-center"><LockKeyhole className="mx-auto mb-6 h-16 w-16 text-[#C8CBDE]" /><h2 className="font-display text-2xl font-bold text-[#1A1B2E]">Issuer Access Required</h2><p className="mt-2 text-[#6B6E9A]">Connect your authorized wallet to register documents on the blockchain.</p><div className="mt-6"><ConnectWalletButton fullWidth /></div><p className="mt-3 text-sm text-[#6B6E9A]">Not an issuer? <Link href="/verify" className="text-[#40415D] underline">You can still verify documents</Link></p></div></AppShell>;
  if (wallet.role !== "issuer" && wallet.role !== "admin") return <AppShell><div className="mx-auto max-w-md py-24 text-center"><ShieldX className="mx-auto mb-6 h-16 w-16 text-red-400" /><h2 className="font-display text-2xl font-bold text-[#1A1B2E]">Unauthorized Wallet</h2><p className="mt-2 text-[#6B6E9A]">Your connected wallet does not have issuer permissions. Contact the admin to get access.</p><p className="mono mt-3 rounded-full bg-[#DDDFEE] px-3 py-1 text-xs text-[#40415D]">{wallet.address}</p></div></AppShell>;

  const handleSubmit = async (values: RegisterDocumentInput): Promise<void> => {
    if (!file) {
      toast.error("Please upload a file before registering.");
      return;
    }
    try {
      setStage(0);
      const computed = hash || (await computeHash(file));
      if (!computed) throw new Error("hash");
      setStage(1);
      const cid = await upload(file);
      setStage(2);
      const expiryUnix = values.expiryDate ? Math.floor(new Date(values.expiryDate).getTime() / 1000) : 0;
      setStage(3);
      const receipt = await register(computed, cid, values.sector, values.documentType, values.holderName ?? "", expiryUnix);
      setStage(4);
      setSuccess({ id: `IT-2026-${Date.now().toString().slice(-5)}`, cid, txHash: String(receipt?.hash ?? "") });
      toast.success("Document registered successfully");
    } catch {
      toast.error("Transaction failed. Please try again.");
      setStage(-1);
    }
  };

  return <AppShell><div className="mx-auto max-w-5xl px-4 py-16"><h1 className="font-display text-3xl font-bold text-[#1A1B2E]">Register a Document</h1><p className="mt-2 text-[#6B6E9A]">Upload and anchor a document on the blockchain.</p><div className="mt-6 grid gap-6 lg:grid-cols-5"><div className="space-y-4 lg:col-span-3"><WalletInfo />{!success ? <><FileDropzone selectedFile={file} onFileSelect={(next) => { setFile(next); void computeHash(next); }} onClear={() => { setFile(null); reset(); }} /><HashPreview hash={hash} isHashing={hashLoading} /><RegisterDocumentForm onSubmit={handleSubmit} defaultIssuer={wallet.address} />{stage >= 0 ? <div className="space-y-2 rounded-xl border border-[#C8CBDE] bg-white p-4">{stages.map((item, idx) => <div key={item} className="flex items-center gap-3 text-sm">{idx < stage ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : idx === stage ? <Loader2 className="h-4 w-4 animate-spin text-[#40415D]" /> : <span className="h-4 w-4 rounded-full border border-[#C8CBDE]" />}<span className={idx === stage ? "font-medium text-[#40415D]" : "text-[#6B6E9A]"}>{item}</span></div>)}</div> : null}</> : <div className="rounded-2xl border-2 border-green-300 bg-[#f0fdf4] p-8"><CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green-500" /><h2 className="text-center font-display text-xl font-bold text-green-800">Document Registered Successfully</h2><p className="mt-2 text-center text-sm text-green-700">Your document is now anchored on the blockchain and publicly verifiable.</p><div className="mt-6 space-y-3 rounded-xl border border-[#C8CBDE] bg-white p-4"><div><p className="text-xs uppercase text-[#6B6E9A]">Document ID</p><p className="mono text-sm">{success.id}</p></div><div><p className="text-xs uppercase text-[#6B6E9A]">IPFS CID</p><p className="mono break-all text-sm">{success.cid}</p></div><div><p className="text-xs uppercase text-[#6B6E9A]">Transaction</p><TxLink hash={success.txHash} /></div></div><div className="mt-4 flex flex-wrap gap-2"><Link href="/verify" className="rounded-xl bg-[#40415D] px-4 py-2 text-white">Verify This Document</Link><button onClick={() => { setSuccess(null); setStage(-1); }} className="rounded-xl bg-[#DDDFEE] px-4 py-2 text-[#40415D]">Register Another</button></div></div>}</div><div className="lg:col-span-2 lg:sticky lg:top-24 lg:h-fit"><p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#6B6E9A]">Document Preview</p><div className="rounded-2xl border border-[#C8CBDE] bg-white p-6"><div className="mb-4 flex items-center gap-2 text-xs text-[#40415D]/60"><ShieldCheck className="h-4 w-4" />DocChain Verified</div><h3 className="text-lg font-bold text-[#1A1B2E]">{preview.fileName}</h3><div className="mt-3 space-y-2 text-sm text-[#6B6E9A]"><p>Issuer: {wallet.address ?? "?"}</p><p>Hash: {preview.hash ? `${preview.hash.slice(0, 10)}...` : "Upload a file to generate"}</p></div><p className="mt-4 text-xs text-[#9A9BB5]">Registered via DocChain ? Polygon Blockchain ? IPFS</p></div></div></div></div></AppShell>;
}
