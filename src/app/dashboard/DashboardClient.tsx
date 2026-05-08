"use client";
import Link from "next/link";
import { FileText, Filter } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { StatsCard } from "@/components/system/StatsCard";
import { StatusBadge } from "@/components/trust/StatusBadge";
import { useWallet } from "@/hooks/useWallet";
import { ConnectWalletButton } from "@/components/web3/ConnectWalletButton";
import { EmptyState } from "@/components/system/EmptyState";
import { mockVerificationResults } from "@/lib/constants/mockData";

export function DashboardClient() {
  const wallet = useWallet();
  if (!wallet.isConnected) return <AppShell><div className="mx-auto max-w-md py-24 text-center"><h2 className="font-display text-2xl font-bold">Connect wallet to view dashboard</h2><div className="mt-5"><ConnectWalletButton fullWidth /></div></div></AppShell>;
  const rows = mockVerificationResults.map((item) => item.record).filter(Boolean);
  return <AppShell><div className="space-y-6"><div className="flex flex-wrap items-center justify-between gap-3"><div><h1 className="font-display text-3xl font-bold">Dashboard</h1><p className="text-[#6B6E9A]">Your registered documents and verification activity.</p></div><Link href="/register" className="rounded-lg bg-[#40415D] px-4 py-2 text-sm text-white">Register Document</Link></div><div className="grid grid-cols-2 gap-4 md:grid-cols-4"><StatsCard label="Total Documents" value={3} /><StatsCard label="Valid" value={2} /><StatsCard label="Revoked" value={1} /><StatsCard label="Expiring Soon" value={0} /></div><div className="rounded-xl border border-[#C8CBDE] bg-white p-4"><div className="mb-3 flex items-center justify-between"><h2 className="text-lg font-semibold">Registered Documents</h2><div className="flex items-center gap-2 rounded-lg border border-[#C8CBDE] px-3 py-1 text-sm text-[#6B6E9A]"><Filter className="h-3.5 w-3.5" />Search</div></div>{rows.length ? <div className="overflow-x-auto"><table className="min-w-full text-sm"><thead><tr className="text-left text-[#6B6E9A]"><th className="p-2">Document Title</th><th className="p-2">Type</th><th className="p-2">Sector</th><th className="p-2">Registered On</th><th className="p-2">Status</th></tr></thead><tbody>{rows.map((r)=><tr key={r!.documentHash} className="border-t border-[#C8CBDE] hover:bg-[#F5F6FC]"><td className="p-2 font-medium">{r!.documentTitle}</td><td className="p-2 text-[#6B6E9A]">{r!.documentType}</td><td className="p-2"><span className="rounded-full bg-[#DDDFEE] px-2 py-1 text-xs">{r!.sector}</span></td><td className="p-2 text-[#6B6E9A]">{new Date(r!.issuedAt*1000).toLocaleDateString()}</td><td className="p-2"><StatusBadge status={r!.status === "valid" ? "valid" : r!.status === "revoked" ? "revoked" : "expired"} /></td></tr>)}</tbody></table></div> : <EmptyState icon={FileText} title="No documents yet" description="Registered documents will appear here once you add your first record." />}</div></div></AppShell>;
}
