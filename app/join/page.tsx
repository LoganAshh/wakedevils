'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function JoinPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => setIsVisible(false), 300) // match transition duration
      return () => clearTimeout(timeout)
    }
  }, [isLoading])

  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center">Join the Wake Devils!</h1>
        <p className="text-lg text-center mb-8">
          Fill out the form below to become a part of the crew!
        </p>

        <div className="relative w-full h-[80vh] max-h-[900px]">
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
            src="https://docs.google.com/forms/d/e/1FAIpQLSeHU1Q60bdm88jXwN4wY2d_u-D9aNoMIVyF60riukO1WsFMyA/viewform?embedded=true"
            className="w-full h-full border-0 rounded-xl shadow-md"
            onLoad={() => setIsLoading(false)}
            loading="lazy"
          >
            Loading…
          </iframe>
        </div>

        {/* Help link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Trouble viewing the form?{' '}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeHU1Q60bdm88jXwN4wY2d_u-D9aNoMIVyF60riukO1WsFMyA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Open full form
          </a>
        </p>
      </main>

      <Footer />
    </>
  )
}

