import type { VerificationResult } from "@/types/document";

/** Mock verification records for demo mode. */
export const mockVerificationResults: VerificationResult[] = [
  { status: "valid", computedHash: "8a9f1e773ab5f03a9e3a8f10fbf6eb0d7ba0ec1fbde90ec39b42a39bbfd10a11", checkedAt: Date.now(), record: { documentHash: "8a9f1e773ab5f03a9e3a8f10fbf6eb0d7ba0ec1fbde90ec39b42a39bbfd10a11", ipfsCid: "bafybeidavvdegreecertificate123", issuer: "0x1234567890abcdef1234567890abcdef12345678", holder: "Aman Sharma", documentTitle: "DAVV University Degree Certificate", documentType: "Degree", sector: "Education", issuedAt: 1711929600, status: "valid", txHash: "0x99abc123deff00112233445566778899aabbccddeeff00112233445566778899" } },
  { status: "expired", computedHash: "12bc5b773ab5f03a9e3a8f10fbf6eb0d7ba0ec1fbde90ec39b42a39bbfd10a22", checkedAt: Date.now(), record: { documentHash: "12bc5b773ab5f03a9e3a8f10fbf6eb0d7ba0ec1fbde90ec39b42a39bbfd10a22", ipfsCid: "bafybeihospitalsummary123", issuer: "0xabcd567890abcdef1234567890abcdef12345678", holder: "Seema Verma", documentTitle: "Hospital Discharge Summary", documentType: "Medical Record", sector: "Healthcare", issuedAt: 1704067200, expiryAt: 1735689600, status: "expired", txHash: "0x88abc123deff00112233445566778899aabbccddeeff00112233445566778888" } },
  { status: "revoked", computedHash: "77ac1e773ab5f03a9e3a8f10fbf6eb0d7ba0ec1fbde90ec39b42a39bbfd10a33", checkedAt: Date.now(), record: { documentHash: "77ac1e773ab5f03a9e3a8f10fbf6eb0d7ba0ec1fbde90ec39b42a39bbfd10a33", ipfsCid: "bafybeilandrecord123", issuer: "0x9876543210abcdef1234567890abcdef12345678", holder: "Rakesh Patel", documentTitle: "Land Registration Record", documentType: "Certificate", sector: "Government", issuedAt: 1701388800, status: "revoked", txHash: "0x77abc123deff00112233445566778899aabbccddeeff00112233445566778877" } }
];

export const MOCK_DOCUMENTS = [
  {
    id: "IT-2026-001",
    title: "DAVV University Degree Certificate",
    documentType: "Degree",
    sector: "Education",
    status: "valid" as const,
    hash: "8a9f1e773ab5f03a9e3a8f10fbf6eb0d7ba0ec1fbde90ec39b42a39bbfd10a11",
    issuerAddress: "0x1234567890abcdef1234567890abcdef12345678",
    holderName: "Aman Sharma",
    ipfsCid: "bafybeidavvdegreecertificate123",
    txHash: "0x99abc123deff00112233445566778899aabbccddeeff00112233445566778899",
    issuedAt: 1711929600,
  },
  {
    id: "IT-2026-002",
    title: "Hospital Discharge Summary",
    documentType: "Medical Record",
    sector: "Healthcare",
    status: "expired" as const,
    hash: "12bc5b773ab5f03a9e3a8f10fbf6eb0d7ba0ec1fbde90ec39b42a39bbfd10a22",
    issuerAddress: "0xabcd567890abcdef1234567890abcdef12345678",
    holderName: "Seema Verma",
    ipfsCid: "bafybeihospitalsummary123",
    txHash: "0x88abc123deff00112233445566778899aabbccddeeff00112233445566778888",
    issuedAt: 1704067200,
    expiryAt: 1735689600,
  },
  {
    id: "IT-2026-003",
    title: "Land Registration Record",
    documentType: "Certificate",
    sector: "Government",
    status: "revoked" as const,
    hash: "77ac1e773ab5f03a9e3a8f10fbf6eb0d7ba0ec1fbde90ec39b42a39bbfd10a33",
    issuerAddress: "0x9876543210abcdef1234567890abcdef12345678",
    holderName: "Rakesh Patel",
    ipfsCid: "bafybeilandrecord123",
    txHash: "0x77abc123deff00112233445566778899aabbccddeeff00112233445566778877",
    issuedAt: 1701388800,
  },
];
