"use client";
export function Progress({ value = 0 }: { value?: number }) {
  return <div className="h-2 w-full overflow-hidden rounded-full bg-[#DDDFEE]"><div className="h-full bg-[#40415D] transition-all" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} /></div>;
}
