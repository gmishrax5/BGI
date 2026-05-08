import { Skeleton } from "@/components/ui/skeleton";

export function LoadingSkeleton() {
  return (
    <div className="space-y-3 rounded-2xl border border-[#C8CBDE] bg-white p-6">
      <Skeleton className="h-6 w-1/3 bg-[#DDDFEE]" />
      <Skeleton className="h-4 w-full bg-[#DDDFEE]" />
      <Skeleton className="h-4 w-4/5 bg-[#DDDFEE]" />
    </div>
  );
}
