'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function EventsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timeout)
    }
  }, [isLoading])

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8 md:py-8">
        {/* DESKTOP content */}
        <div className="hidden md:block">
          <h1 className="text-4xl font-bold mb-3 text-center">Upcoming Events</h1>
          <p className="text-lg text-center mb-6">
            Stay up to date with all our lake days, socials, and competitions.
          </p>

          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] max-h-[75vh]">
            {isVisible && (
              <div
                className={`absolute inset-0 flex items-center justify-center bg-white z-10 transition-opacity duration-300 ${
                  isLoading ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            <iframe
              src="https://calendar.google.com/calendar/embed?src=asuwakedevils%40gmail.com&ctz=America%2FPhoenix"
              className="w-full h-full border-0 rounded-xl shadow-md"
              onLoad={() => setIsLoading(false)}
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>

          <div className="hidden md:block text-center text-sm text-gray-600 space-y-1 mt-3">
            <p>
              Trouble viewing the calendar?{' '}
              <a
                href="https://calendar.google.com/calendar/u/0/embed?src=asuwakedevils@gmail.com&ctz=America/Phoenix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Open full calendar
              </a>
            </p>
            <p>Click the event to see description and location.</p>
          </div>
        </div>

        {/* MOBILE content */}
        <div className="block md:hidden min-h-screen flex flex-col justify-start pt-6 pb-6 gap-y-30">
          {/* Title + subtext */}
          <div className="text-center">
            <h1 className="text-3xl font-bold leading-tight mt-10">Upcoming Events</h1>
            <p className="text-base leading-snug mt-20 px-2">
              Stay up to date with all our lake days, socials, and competitions.
            </p>
          </div>

          {/* Button right under subtext */}
          <div className="text-center">
            <a
              href="https://calendar.google.com/calendar/u/0/embed?src=asuwakedevils@gmail.com&ctz=America/Phoenix"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded border-b-4 border-blue-700 shadow-xl transition-all duration-700 transform hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl mb-4 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Open Calendar
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}




