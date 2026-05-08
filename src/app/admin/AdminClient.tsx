"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AppShell } from "@/components/layout/AppShell";
import { useWallet } from "@/hooks/useWallet";
import { ConnectWalletButton } from "@/components/web3/ConnectWalletButton";
import { AdminGrantIssuerForm } from "@/components/forms/AdminGrantIssuerForm";

const issuers = [
  { address: "0x1234567890abcdef1234567890abcdef12345678", org: "DAVV University", added: "Apr 20, 2026" },
  { address: "0xabcd567890abcdef1234567890abcdef12345678", org: "City Hospital", added: "Apr 19, 2026" },
];

export function AdminClient() {
  const wallet = useWallet();
  const [open, setOpen] = useState(false);
  if (!wallet.isConnected || wallet.role !== "admin") return <AppShell><div className="mx-auto max-w-md py-24 text-center"><h2 className="font-display text-2xl font-bold">Admin access required</h2><p className="mt-2 text-[#6B6E9A]">Connect an admin wallet to continue.</p><div className="mt-6"><ConnectWalletButton fullWidth /></div></div></AppShell>;
  return <AppShell><div className="space-y-6"><div><div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs text-red-600">Admin Access</div><h1 className="mt-2 font-display text-3xl font-bold">Admin Panel</h1><p className="text-[#6B6E9A]">Manage issuers and monitor system health.</p></div><div className="grid grid-cols-1 gap-4 md:grid-cols-3"><div className="rounded-xl border border-[#C8CBDE] bg-white p-4"><p className="text-sm text-[#6B6E9A]">Total Issuers</p><p className="text-3xl font-bold">{issuers.length}</p></div><div className="rounded-xl border border-[#C8CBDE] bg-white p-4"><p className="text-sm text-[#6B6E9A]">Active Contracts</p><p className="text-3xl font-bold">2</p></div><div className="rounded-xl border border-[#C8CBDE] bg-white p-4"><p className="text-sm text-[#6B6E9A]">Network</p><p className="text-3xl font-bold">Amoy</p></div></div><div className="rounded-xl border border-[#C8CBDE] bg-white p-4"><div className="mb-3 flex items-center justify-between"><h2 className="text-lg font-semibold">Authorized Issuers</h2><Dialog open={open} onOpenChange={setOpen}><DialogTrigger asChild><button className="rounded-lg bg-[#40415D] px-3 py-2 text-sm text-white">Add Issuer</button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Grant Issuer Role</DialogTitle><DialogDescription>Add a trusted institution wallet to TRUSTIFY issuer list.</DialogDescription></DialogHeader><AdminGrantIssuerForm onDone={() => setOpen(false)} /><DialogFooter><button className="rounded-lg bg-[#DDDFEE] px-3 py-2" onClick={() => setOpen(false)}>Cancel</button></DialogFooter></DialogContent></Dialog></div><div className="overflow-x-auto"><table className="min-w-full text-sm"><thead><tr className="text-left text-[#6B6E9A]"><th className="p-2">Address</th><th className="p-2">Organization</th><th className="p-2">Added On</th><th className="p-2">Status</th><th className="p-2">Actions</th></tr></thead><tbody>{issuers.map((issuer)=><tr key={issuer.address} className="border-t"><td className="mono p-2 text-xs">{issuer.address}</td><td className="p-2">{issuer.org}</td><td className="p-2">{issuer.added}</td><td className="p-2"><span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">Active</span></td><td className="p-2"><button className="text-xs text-red-600 underline">Revoke</button></td></tr>)}</tbody></table></div></div></div></AppShell>;
}
