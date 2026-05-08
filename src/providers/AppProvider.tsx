"use client";
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { WalletProvider } from "./WalletProvider";

const CookieBanner = dynamic(
  () => import("@/components/system/CookieBanner").then((module) => module.CookieBanner),
  { ssr: false },
);

export function AppProvider({ children }: { children: ReactNode }) { return <WalletProvider>{children}<CookieBanner /></WalletProvider>; }
