export type Role = "public" | "issuer" | "admin";

/** Wallet connection state exposed by useWallet. */
export interface WalletState {
  address?: string;
  isConnected: boolean;
  chainId?: number;
  role: Role;
}
