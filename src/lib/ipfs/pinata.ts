export async function uploadToIPFS(file: File): Promise<string> {
  const key = process.env.NEXT_PUBLIC_PINATA_KEY;
  if (!key) return `bafy-demo-${Date.now()}`;
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", { method: "POST", headers: { Authorization: `Bearer ${key}` }, body: formData });
  if (!response.ok) throw new Error("IPFS upload failed");
  const data = (await response.json()) as { IpfsHash: string };
  return data.IpfsHash;
}
