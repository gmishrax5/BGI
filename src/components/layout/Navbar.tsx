"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShieldCheck } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ConnectWalletButton } from "@/components/web3/ConnectWalletButton";
import { NetworkBadge } from "@/components/trust/NetworkBadge";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/verify", label: "Verify" },
  { href: "/register", label: "Register" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/admin", label: "Admin" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [glow, setGlow] = useState<{ x: number; y: number; visible: boolean }>({
    x: 0,
    y: 0,
    visible: false,
  });
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      setScrolled(currentY > 12);

      if (currentY <= 16) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-3 z-50 px-3 transition-transform duration-300 ease-out",
        hidden ? "translate-y-[-130%]" : "translate-y-0",
      )}
    >
      <nav
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          setGlow({ x: event.clientX - rect.left, y: event.clientY - rect.top, visible: true });
        }}
        onMouseLeave={() => setGlow((prev) => ({ ...prev, visible: false }))}
        className={cn(
          "relative mx-auto flex h-16 w-full max-w-6xl items-center justify-between overflow-hidden rounded-2xl border px-4 backdrop-blur-xl transition-all duration-300",
          scrolled
            ? "border-white/70 bg-white/65 shadow-[0_10px_35px_-14px_rgba(64,65,93,0.45)]"
            : "border-white/85 bg-white/75 shadow-[0_6px_24px_-16px_rgba(64,65,93,0.35)]",
        )}
      >
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 transition-opacity duration-300",
            glow.visible ? "opacity-100" : "opacity-0",
          )}
          style={{
            background: `radial-gradient(240px circle at ${glow.x}px ${glow.y}px, rgba(255,255,255,0.4), transparent 65%)`,
          }}
        />

        <Link
          href="/"
          className="group relative z-10 flex items-center gap-2 rounded-full px-1.5 py-1 transition-transform duration-200 hover:scale-[1.02]"
          aria-label="DocChain home"
        >
          <ShieldCheck className="h-5 w-5 text-[#40415D] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
          <span className="font-display text-lg font-bold text-[#1A1B2E]">DocChain</span>
        </Link>

        <div className="relative z-10 hidden items-center gap-5 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm transition-all duration-200 active:scale-95",
                  active
                    ? "bg-[#40415D]/10 font-semibold text-[#40415D] shadow-[inset_0_0_0_1px_rgba(64,65,93,0.2)]"
                    : "text-[#6B6E9A] hover:bg-white/70 hover:text-[#40415D] hover:shadow-[0_6px_16px_-12px_rgba(64,65,93,0.45)]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="relative z-10 hidden items-center gap-2 md:flex">
          <NetworkBadge />
          <ConnectWalletButton />
        </div>

        <div className="relative z-10 md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="rounded-xl border border-white/70 bg-white/70 p-2 backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-white/90 active:scale-95"
              >
                <Menu className={cn("h-5 w-5 text-[#40415D] transition-transform duration-300", open ? "rotate-90" : "rotate-0")} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-70 border-l border-white/70 bg-white/85 backdrop-blur-xl">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-left">
                  <ShieldCheck className="h-5 w-5 text-[#40415D]" />
                  <span className="font-display">DocChain</span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "py-3 text-lg",
                      pathname === link.href ? "font-semibold text-[#40415D]" : "text-[#6B6E9A]",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Separator className="my-3" />
                <div className="space-y-2">
                  <ConnectWalletButton fullWidth />
                  <NetworkBadge />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
