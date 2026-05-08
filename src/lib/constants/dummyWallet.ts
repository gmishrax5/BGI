import type { Role } from "@/types/wallet";

/** Temporary flag to keep wallet UX functional without real Web3 connection. */
export const DUMMY_WALLET_ENABLED = true;
export const DUMMY_WALLET_ADDRESS = "0xA11CE00000000000000000000000000000BEEF";
export const DUMMY_WALLET_CHAIN_ID = Number(process.env.NEXT_PUBLIC_CHAIN_ID ?? 80002);
export const DUMMY_WALLET_ROLE: Role = "issuer";