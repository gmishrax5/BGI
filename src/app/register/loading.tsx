import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'

export default function RegisterLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-4">
          <LoadingSkeleton className="h-8 w-48" />
          <LoadingSkeleton className="h-5 w-72" />
          <LoadingSkeleton className="h-48 w-full rounded-2xl" />
          <LoadingSkeleton className="h-12 w-full rounded-xl" />
          <LoadingSkeleton className="h-12 w-full rounded-xl" />
          <LoadingSkeleton className="h-12 w-full rounded-xl" />
        </div>
        <div className="lg:col-span-2">
          <LoadingSkeleton className="h-80 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  )
}
