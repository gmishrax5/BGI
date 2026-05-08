import type { VerificationStatus } from "@/types/document";

/** Map verification status to label and semantic style class. */
export function formatStatus(status: VerificationStatus): { label: string; className: string } {
  const map: Record<VerificationStatus, { label: string; className: string }> = {
    valid: { label: "Valid", className: "text-green-600" },
    tampered: { label: "Tampered", className: "text-red-600" },
    revoked: { label: "Revoked", className: "text-red-600" },
    expired: { label: "Expired", className: "text-amber-600" },
    not_found: { label: "Not Found", className: "text-blue-600" },
  };
  return map[status];
}
