'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('[DocChain Error Boundary]', error)
  }, [error])

  return (
    <div className="min-h-[75vh] flex flex-col items-center 
      justify-center text-center px-4 py-16"> 

      {/* Icon */}
      <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center 
        justify-center mb-6 border border-red-100"> 
        <AlertTriangle className="w-10 h-10 text-red-400" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold font-display text-[#1A1B2E] mb-3"> 
        Something went wrong
      </h2>

      {/* Error message */}
      <p className="text-[#6B6E9A] text-sm mb-2 max-w-md"> 
        {error.message && error.message.length < 120
          ? error.message
          : 'An unexpected error occurred. Please try again.'}
      </p>

      {/* Error digest for debugging */}
      {error.digest && (
        <p className="font-mono text-xs text-[#C8CBDE] mb-6"> 
          Error ID: {error.digest}
        </p>
      )}

      {/* Buttons */}
      <div className="flex gap-3 flex-wrap justify-center mt-4"> 
        <button
          onClick={reset}
          className="bg-[#40415D] text-white px-6 py-3 rounded-xl 
            font-medium text-sm hover:bg-[#2e2f46] transition-colors"
        >
          Try Again
        </button>
        <Link href="/">
          <button className="bg-[#DDDFEE] text-[#40415D] px-6 py-3 
            rounded-xl font-medium text-sm hover:bg-[#cccfe8] 
            transition-colors"> 
            Go Home
          </button>
        </Link>
      </div>
    </div>
  )
}
