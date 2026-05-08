"use client";
import { useEffect, useState } from "react";
import { getRoleFlags } from "@/lib/contracts/accessControl";
import type { Role } from "@/types/wallet";

export function useRole(address?: string): Role {
  const [role, setRole] = useState<Role>("public");
  useEffect(() => {
    if (!address) return;
    getRoleFlags(address).then((flags) => setRole(flags.isAdmin ? "admin" : flags.isIssuer ? "issuer" : "public")).catch(() => setRole("public"));
  }, [address]);
  return address ? role : "public";
}
