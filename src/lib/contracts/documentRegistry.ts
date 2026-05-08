import { BrowserProvider, Contract, type Eip1193Provider } from "ethers";
import { contractConfig } from "./config";

export const documentRegistryAbi = [
  "function registerDocument(string hash, string cid, string sector, string docType, string holder, uint256 expiry)",
  "function verifyDocument(string hash) view returns (tuple(string documentHash,string ipfsCid,address issuer,string holder,string documentTitle,string documentType,string sector,uint256 issuedAt,uint256 expiryAt,uint8 status,string txHash))",
  "function revokeDocument(string hash)",
] as const;

export async function getDocumentRegistryContract(): Promise<Contract | null> {
  if (!window.ethereum || !contractConfig.documentRegistry) return null;
  const provider = new BrowserProvider(window.ethereum as Eip1193Provider);
  const signer = await provider.getSigner();
  return new Contract(contractConfig.documentRegistry, documentRegistryAbi, signer);
}
