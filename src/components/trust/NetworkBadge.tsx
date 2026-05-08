import { supportedChains } from "@/lib/constants/chains";

export function NetworkBadge({ network }: { network?: string }) {
  return <span className="inline-flex rounded-full border border-[#C8CBDE] px-2 py-1 text-xs text-[#6B6E9A]">{network ?? supportedChains[0].name}</span>;
}
