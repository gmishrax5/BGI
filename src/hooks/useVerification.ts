"use client";
import { useState } from "react";
import type { DocumentRecord, VerificationResult } from "@/types/document";
import { contractConfig } from "@/lib/contracts/config";
import { mockVerificationResults } from "@/lib/constants/mockData";

export function useVerification() {
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [loading, setLoading] = useState(false);

  const verify = async (computedHash: string): Promise<VerificationResult> => {
    setLoading(true);
    try {
      if (contractConfig.demoMode) {
        const found = mockVerificationResults.find((item) => item.computedHash === computedHash);
        const value = found ?? { status: "not_found", computedHash, checkedAt: Date.now() };
        setResult(value);
        return value;
      }

      const fallbackRecord: DocumentRecord | undefined = undefined;
      const value: VerificationResult = fallbackRecord ? { status: "valid", record: fallbackRecord, computedHash, checkedAt: Date.now() } : { status: "not_found", computedHash, checkedAt: Date.now() };
      setResult(value);
      return value;
    } finally {
      setLoading(false);
    }
  };

  const reset = (): void => setResult(null);

  return { verify, result, loading, reset };
}
