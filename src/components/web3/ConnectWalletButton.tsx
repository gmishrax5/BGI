"use client";
import { useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { DUMMY_WALLET_ADDRESS, DUMMY_WALLET_ENABLED } from "@/lib/constants/dummyWallet";
import { formatAddress } from "@/lib/utils/formatAddress";

export function ConnectWalletButton({ fullWidth = false }: { fullWidth?: boolean }) {
  if (DUMMY_WALLET_ENABLED) {
    return <DummyConnectWalletButton fullWidth={fullWidth} />;
  }

  return <RealConnectWalletButton fullWidth={fullWidth} />;
}

function DummyConnectWalletButton({ fullWidth = false }: { fullWidth?: boolean }) {
  const [isDummyConnected, setIsDummyConnected] = useState(true);

  if (isDummyConnected) {
    return (
      <button
        aria-label="Disconnect wallet"
        className={`${fullWidth ? "w-full" : ""} rounded-lg border border-[#C8CBDE] px-3 py-2 text-sm text-[#40415D]`}
        onClick={() => setIsDummyConnected(false)}
      >
        {formatAddress(DUMMY_WALLET_ADDRESS)}
      </button>
    );
  }

  return (
    <button
      aria-label="Connect wallet"
      className={`${fullWidth ? "w-full" : ""} rounded-lg bg-[#40415D] px-3 py-2 text-sm text-white hover:bg-[#2e2f46]`}
      onClick={() => setIsDummyConnected(true)}
    >
      Connect Wallet
    </button>
  );
}

function RealConnectWalletButton({ fullWidth = false }: { fullWidth?: boolean }) {
  const { isConnected, address } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <button
        aria-label="Disconnect wallet"
        className={`${fullWidth ? "w-full" : ""} rounded-lg border border-[#C8CBDE] px-3 py-2 text-sm text-[#40415D]`}
        onClick={() => disconnect()}
      >
        {formatAddress(address)}
      </button>
    );
  }

  return (
    <button
      aria-label="Connect wallet"
      className={`${fullWidth ? "w-full" : ""} rounded-lg bg-[#40415D] px-3 py-2 text-sm text-white hover:bg-[#2e2f46]`}
      onClick={() => {
        const connector = connectors.find((item) => item.id === "injected") ?? connectors[0];
        if (connector) connect({ connector });
      }}
    >
      {isPending ? "Connecting..." : "Connect Wallet"}
    </button>
  );
}
