import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'

export default function VerifyLoading() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 space-y-6">
      <LoadingSkeleton className="h-6 w-56" />
      <LoadingSkeleton className="h-8 w-80" />
      <LoadingSkeleton className="h-5 w-96" />
      <LoadingSkeleton className="h-56 w-full rounded-2xl" />
      <LoadingSkeleton className="h-16 w-full rounded-xl" />
    </div>
  )
}
