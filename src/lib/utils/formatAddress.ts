/** Shorten blockchain address for compact UI display. */
export const formatAddress = (address?: string): string => (address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "-");
