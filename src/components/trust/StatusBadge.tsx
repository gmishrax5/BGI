import { AlertTriangle, Ban, CheckCircle2, Clock, Search } from "lucide-react";
import type { VerificationStatus } from "@/types/document";
import { cn } from "@/lib/utils";

const sizeStyles = {
  sm: "text-xs px-2 py-0.5",
  md: "text-xs px-3 py-1",
  lg: "text-sm px-4 py-1.5",
} as const;

const config = {
  valid: { label: "Valid", className: "bg-green-100 text-green-700", icon: CheckCircle2 },
  tampered: { label: "Tampered", className: "bg-red-100 text-red-700", icon: AlertTriangle },
  revoked: { label: "Revoked", className: "bg-red-100 text-red-700", icon: Ban },
  expired: { label: "Expired", className: "bg-amber-100 text-amber-700", icon: Clock },
  not_found: { label: "Not Found", className: "bg-blue-100 text-blue-700", icon: Search },
} as const;

export function StatusBadge({
  status,
  size = "md",
  showIcon = true,
}: {
  status: VerificationStatus;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}) {
  const item = config[status];
  const Icon = item.icon;
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full font-medium", item.className, sizeStyles[size])}>
      {showIcon ? <Icon className="h-3.5 w-3.5" /> : null}
      {item.label}
    </span>
  );
}
