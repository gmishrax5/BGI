import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'

export default function AdminLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
      <div className="flex justify-between items-center">
        <LoadingSkeleton className="h-8 w-36" />
        <LoadingSkeleton className="h-6 w-24 rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <LoadingSkeleton key={i} className="h-24 w-full rounded-xl" />
        ))}
      </div>
      <LoadingSkeleton className="h-72 w-full rounded-xl" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <LoadingSkeleton className="h-32 w-full rounded-xl" />
        <LoadingSkeleton className="h-32 w-full rounded-xl" />
      </div>
    </div>
  )
}
