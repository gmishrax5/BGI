import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center 
      justify-center text-center px-4 py-16">
      
      {/* Big 404 */}
      <div className="text-[120px] md:text-[160px] font-bold font-display 
        text-[#DDDFEE] leading-none select-none mb-2">
        404
      </div>

      {/* Icon */}
      <div className="w-16 h-16 bg-[#DDDFEE] rounded-2xl flex items-center 
        justify-center mb-6 -mt-4">
        <ShieldCheck className="w-8 h-8 text-[#40415D]" />
      </div>

      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold font-display 
        text-[#1A1B2E] mb-3">
        Page Not Found
      </h1>

      {/* Message */}
      <p className="text-[#6B6E9A] text-base mb-2 max-w-md">
        This page doesn&apos;t exist on DocChain.
        It may have moved or never existed.
      </p>
      <p className="text-[#9A9BB5] text-sm mb-8">
        If you were looking for a document, head to the verify page.
      </p>

      {/* Buttons */}
      <div className="flex gap-3 flex-wrap justify-center">
        <Link href="/">
          <button className="bg-[#40415D] text-white px-6 py-3 
            rounded-xl font-medium text-sm hover:bg-[#2e2f46] 
            transition-colors">
            ? Go Home
          </button>
        </Link>
        <Link href="/verify">
          <button className="bg-[#DDDFEE] text-[#40415D] px-6 py-3 
            rounded-xl font-medium text-sm hover:bg-[#cccfe8] 
            transition-colors">
            Verify Document
          </button>
        </Link>
      </div>

      {/* Footer note */}
      <p className="text-xs text-[#C8CBDE] mt-12">
        DocChain
      </p>
    </div>
  )
}
