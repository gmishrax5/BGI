"use client";
import { useState } from "react";
import { hashFile } from "@/lib/crypto/hashFile";

export function useFileHash() {
  const [hash, setHash] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const computeHash = async (file: File): Promise<string | null> => {
    setLoading(true);
    setError(null);
    try {
      const value = await hashFile(file);
      setHash(value);
      return value;
    } catch {
      setError("Failed to compute document hash.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const reset = (): void => {
    setHash("");
    setError(null);
    setLoading(false);
  };

  return { hash, loading, error, computeHash, reset };
}
