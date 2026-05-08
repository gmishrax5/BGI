"use client";
import { useAccount } from "wagmi";
import { useRole } from "./useRole";
import type { WalletState } from "@/types/wallet";
import {
  DUMMY_WALLET_ADDRESS,
  DUMMY_WALLET_CHAIN_ID,
  DUMMY_WALLET_ENABLED,
  DUMMY_WALLET_ROLE,
} from "@/lib/constants/dummyWallet";

export function useWallet(): WalletState {
  const { address, isConnected, chainId } = useAccount();
  const role = useRole(address);

  if (DUMMY_WALLET_ENABLED) {
    return {
      address: DUMMY_WALLET_ADDRESS,
      isConnected: true,
      chainId: DUMMY_WALLET_CHAIN_ID,
      role: DUMMY_WALLET_ROLE,
    };
  }

  return { address, isConnected, chainId, role };
}
