/** Convert unix timestamp to human readable date. */
export const formatDate = (timestamp?: number): string => (timestamp ? new Date(timestamp * 1000).toLocaleDateString() : "-");
