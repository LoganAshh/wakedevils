'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const routes = ['home', 'about', 'join', 'events', 'merch', 'contact', 'sponsors']

  // Lock scroll when menu is open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('overflow-hidden', isOpen)
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-gray-300 shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-5">
        {/* Logo that scrolls to top smoothly and presses like a button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center active:scale-95 active:translate-y-[3px] transition cursor-pointer"
          aria-label="Scroll to top"
        >
          <Image
            src="/images/logo.png"
            alt="Wake Devils Logo"
            width={128}
            height={128}
            priority
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-2 text-lg items-center">
          {routes.map((route) => {
            const href = route === 'home' ? '/' : `/${route}`
            const isActive = pathname === href

            return (
              <Link
                key={route}
                href={href}
                className={`px-3 py-2 rounded-md transition shadow-sm active:scale-95 active:translate-y-[3px] ${
                  isActive
                    ? 'bg-[#943728] text-white font-semibold shadow-md'
                    : 'text-black hover:bg-[#943728] hover:text-white'
                }`}
              >
                {route.charAt(0).toUpperCase() + route.slice(1)}
              </Link>
            )
          })}
        </div>

        {/* Hamburger Icon (symmetric X) */}
        <button
          className="md:hidden relative w-8 h-8 flex items-center justify-center z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="relative w-8 h-8 flex items-center justify-center">
            <span
              className={`absolute h-1 w-8 bg-gray-800 rounded transition-transform duration-300 ${
                isOpen ? 'rotate-45' : '-translate-y-2'
              }`}
            />
            <span
              className={`absolute h-1 w-8 bg-gray-800 rounded transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute h-1 w-8 bg-gray-800 rounded transition-transform duration-300 ${
                isOpen ? '-rotate-45' : 'translate-y-2'
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dimmed Background */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
            />

            {/* Slide-down Menu */}
            <motion.div
              className="fixed top-[96px] left-0 right-0 bg-white z-50 flex flex-col items-center gap-5 py-6 shadow-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {routes.map((route) => {
                const href = route === 'home' ? '/' : `/${route}`
                const isActive = pathname === href

                return (
                  <Link
                    key={route}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`w-full text-center py-3 text-lg transition rounded-md active:scale-95 active:translate-y-[3px] ${
                      isActive
                        ? 'bg-[#943728] text-white font-semibold shadow-md'
                        : 'text-black hover:bg-[#943728] hover:text-white'
                    }`}
                  >
                    {route.charAt(0).toUpperCase() + route.slice(1)}
                  </Link>
                )
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}



