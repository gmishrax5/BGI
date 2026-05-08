"use client";
import { ReactNode, useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { polygonAmoy } from "wagmi/chains";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "demo-project-id";
const metadata = {
  name: "DocChain",
  description: "Decentralized document authentication",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};
const chains = [polygonAmoy] as const;
const config = defaultWagmiConfig({ chains, projectId, metadata });

export function WalletProvider({ children }: { children: ReactNode }) {
  const queryClient = useMemo(() => new QueryClient(), []);
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
