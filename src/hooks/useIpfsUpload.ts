"use client";
import { useState } from "react";
import { uploadToIPFS } from "@/lib/ipfs/pinata";

export function useIpfsUpload() {
  const [loading, setLoading] = useState(false);
  const upload = async (file: File): Promise<string> => {
    setLoading(true);
    try { return await uploadToIPFS(file); } finally { setLoading(false); }
  };
  return { upload, loading };
}
