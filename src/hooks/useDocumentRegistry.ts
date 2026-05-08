"use client";
import { getDocumentRegistryContract } from "@/lib/contracts/documentRegistry";

export function useDocumentRegistry() {
  const register = async (hash: string, cid: string, sector: string, docType: string, holder: string, expiry: number) => {
    const contract = await getDocumentRegistryContract();
    if (!contract) throw new Error("Not authorized");
    const tx = await contract.registerDocument(hash, cid, sector, docType, holder, expiry);
    return tx.wait();
  };
  return { register };
}
