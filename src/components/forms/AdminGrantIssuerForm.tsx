"use client";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({ address: z.string().regex(/^0x[a-fA-F0-9]{40}$/), organization: z.string().min(2) });

export function AdminGrantIssuerForm({ onDone }: { onDone?: () => void }) {
  const [address, setAddress] = useState("");
  const [organization, setOrganization] = useState("");
  const submit = (): void => {
    const parsed = schema.safeParse({ address, organization });
    if (!parsed.success) { toast.error("Enter valid wallet and organization"); return; }
    toast.success("Issuer access granted");
    onDone?.();
    setAddress("");
    setOrganization("");
  };
  return <div className="space-y-3"><input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Wallet address (0x...)" className="w-full rounded-xl border border-[#C8CBDE] p-2" /><textarea value={organization} onChange={(e) => setOrganization(e.target.value)} placeholder="Issuer name / organization" className="w-full rounded-xl border border-[#C8CBDE] p-2" /><button className="rounded-lg bg-[#40415D] px-4 py-2 text-white" type="button" onClick={submit}>Grant Access</button></div>;
}
