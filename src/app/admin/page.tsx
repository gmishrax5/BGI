import type { Metadata } from "next";
import { AdminClient } from "./AdminClient";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Admin panel for managing TRUSTIFY issuers and system contracts.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminClient />;
}
