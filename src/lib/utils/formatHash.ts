/** Truncate long hash while preserving start and end. */
export const formatHash = (hash?: string): string => (hash ? `${hash.slice(0, 10)}...${hash.slice(-8)}` : "-");
