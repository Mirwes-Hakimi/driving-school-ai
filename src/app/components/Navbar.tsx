"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  // tracks if mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/DMVpracticeTest.png" alt="DMV Quiz logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-full object-cover" />
          <span className="font-extrabold text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-blue-700 text-base sm:text-lg">DMV Permit Quiz</span>
        </Link>

        {/* Desktop links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
            About
          </Link>
          <Link href="/quiz" className="bg-linear-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200 shadow-sm">
            Start Quiz
          </Link>
        </div>

        {/* Hamburger button — visible only on mobile */}
        <button
          className="md:hidden text-gray-600 text-xl w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile menu — shows when isOpen is true */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-1 px-1 pb-2">
          <Link href="/" className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-lg font-medium" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-lg font-medium" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/quiz" className="bg-linear-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-center mt-1 shadow-sm" onClick={() => setIsOpen(false)}>
            Start Quiz
          </Link>
        </div>
      )}
    </nav>
  )
}