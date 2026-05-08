import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'

export default function DashboardLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
      <div className="flex justify-between items-center">
        <LoadingSkeleton className="h-8 w-36" />
        <LoadingSkeleton className="h-10 w-36 rounded-xl" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <LoadingSkeleton key={i} className="h-28 w-full rounded-xl" />
        ))}
      </div>
      <LoadingSkeleton className="h-64 w-full rounded-xl" />
    </div>
  )
}
