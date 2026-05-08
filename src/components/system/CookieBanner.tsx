"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { toast } from "sonner";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("docchain_cookie_consent");
    if (consent) return;
    const timer = window.setTimeout(() => setVisible(true), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const onChoice = (value: "accepted" | "rejected") => {
    localStorage.setItem("docchain_cookie_consent", value);
    setVisible(false);
    if (value === "accepted") toast.success("Cookie preferences saved");
    else toast("Non-essential cookies disabled");
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:max-w-sm">
      <div className="rounded-2xl border border-[#C8CBDE] bg-white p-5 shadow-lg">
        <div className="flex items-center gap-2">
          <Cookie className="h-4 w-4 text-[#40415D]" />
          <p className="text-sm font-semibold text-[#1A1B2E]">Cookie Preferences</p>
        </div>
        <p className="mt-2 text-xs text-[#6B6E9A]">
          We use cookies to ensure the site works correctly and to understand how it&apos;s used. No advertising cookies are used.
        </p>
        <Link href="/cookies" className="mt-2 inline-block text-xs text-[#40415D] underline">Learn more</Link>
        <div className="mt-4 flex gap-2">
          <button className="rounded-lg bg-[#40415D] px-4 py-2 text-xs text-white" onClick={() => onChoice("accepted")}>Accept All</button>
          <button className="rounded-lg bg-[#DDDFEE] px-4 py-2 text-xs text-[#40415D]" onClick={() => onChoice("rejected")}>Reject Non-Essential</button>
        </div>
      </div>
    </div>
  );
}
