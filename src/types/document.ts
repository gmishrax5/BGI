export type DocumentStatus = "valid" | "revoked" | "expired";
export type VerificationStatus = "valid" | "tampered" | "revoked" | "expired" | "not_found";

/** Document record stored or returned from chain. */
export interface DocumentRecord {
  documentHash: string;
  ipfsCid: string;
  issuer: string;
  holder?: string;
  documentTitle: string;
  documentType: string;
  sector: string;
  issuedAt: number;
  expiryAt?: number;
  status: DocumentStatus;
  txHash: string;
}

/** Result returned by document verification flow. */
export interface VerificationResult {
  status: VerificationStatus;
  record?: DocumentRecord;
  computedHash: string;
  checkedAt: number;
}
