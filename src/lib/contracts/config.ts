export const contractConfig = {
  documentRegistry: process.env.NEXT_PUBLIC_DOCUMENT_REGISTRY_ADDRESS as `0x${string}` | undefined,
  accessControl: process.env.NEXT_PUBLIC_ACCESS_CONTROL_ADDRESS as `0x${string}` | undefined,
  chainId: Number(process.env.NEXT_PUBLIC_CHAIN_ID ?? 80002),
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL ?? "https://rpc-amoy.polygon.technology",
  explorerUrl: process.env.NEXT_PUBLIC_EXPLORER_URL ?? "https://amoy.polygonscan.com",
  demoMode: process.env.NEXT_PUBLIC_DEMO_MODE === "true",
};
