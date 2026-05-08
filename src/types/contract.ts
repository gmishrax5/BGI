import type { Abi } from "viem";

/** Shared contract config shape. */
export interface ContractConfig {
  address: `0x${string}`;
  abi: Abi;
}
