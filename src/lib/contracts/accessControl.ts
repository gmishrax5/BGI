import { BrowserProvider, Contract, type Eip1193Provider } from "ethers";
import { contractConfig } from "./config";

const accessControlAbi = ["function isIssuer(address account) view returns (bool)","function isAdmin(address account) view returns (bool)"] as const;

export async function getRoleFlags(address: string): Promise<{ isIssuer: boolean; isAdmin: boolean }> {
  if (!window.ethereum || !contractConfig.accessControl) return { isIssuer: false, isAdmin: false };
  const provider = new BrowserProvider(window.ethereum as Eip1193Provider);
  const contract = new Contract(contractConfig.accessControl, accessControlAbi, provider);
  const [isIssuer, isAdmin] = await Promise.all([contract.isIssuer(address), contract.isAdmin(address)]);
  return { isIssuer, isAdmin };
}
