"use client";
import { ExternalLink } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { contractConfig } from "@/lib/contracts/config";

export function TxLink({ hash, type = "tx", label }: { hash: string; type?: "tx" | "address"; label?: string }) {
  const href = `${contractConfig.explorerUrl}/${type === "tx" ? "tx" : "address"}/${hash}`;
  const short = `${hash.slice(0, 6)}...${hash.slice(-4)}`;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-[#40415D] hover:underline">
            <ExternalLink className="h-3 w-3" />
            {label ?? short}
          </a>
        </TooltipTrigger>
        <TooltipContent>{hash}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
