import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import { AppProvider } from "@/providers/AppProvider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  metadataBase: new URL("https://docchain.vercel.app"),
  title: {
    default: "DocChain ? Blockchain Document Verification",
    template: "%s ? DocChain",
  },
  description: "Decentralized document authentication system powered by blockchain technology. Register, verify, and validate digital documents instantly.",
  keywords: ["blockchain", "document verification", "Web3", "IPFS", "Polygon", "digital trust", "NFT", "decentralized"],
  authors: [{ name: "DocChain Team" }],
  openGraph: {
    siteName: "DocChain",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "DocChain ? Blockchain Document Verification",
    description: "Decentralized document authentication on Polygon blockchain.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body>
        <AppProvider>{children}</AppProvider>
        <Toaster
          position="bottom-right"
          richColors
          toastOptions={{
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
            },
          }}
        />
      </body>
    </html>
  );
}
