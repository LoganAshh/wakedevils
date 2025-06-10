'use client'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function JoinPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timeout)
    }
  }, [isLoading])

  return (
    <>
      <Head>
        <title>Join | ASU Wake Devils</title>
        <meta
          name="description"
          content="Ready to ride? Join ASU Wake Devils today and be part of Arizona State’s premier wakeboarding community."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://asuwakedevils.com/join" />

        {/* Open Graph */}
        <meta property="og:title" content="Join | ASU Wake Devils" />
        <meta
          property="og:description"
          content="Join ASU Wake Devils and take part in lake days, tournaments, and the best wakeboarding crew at Arizona State University."
        />
        <meta property="og:image" content="/images/heros/hero6.jpg" />
        <meta property="og:url" content="https://asuwakedevils.com/join" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join | ASU Wake Devils" />
        <meta
          name="twitter:description"
          content="Become a Wake Devil and make waves! Join the official wakeboarding club at ASU."
        />
        <meta name="twitter:image" content="/images/heros/hero6.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Join the Wake Devils!
        </h1>
        <p className="text-base sm:text-lg text-center mb-6 sm:mb-8">
          Fill out the form below to become a part of the crew!
        </p>

        <div className="relative w-full h-[70vh] sm:h-[80vh] max-h-[900px]">
          {isVisible && (
            <div
              className={`absolute inset-0 flex items-center justify-center bg-white z-10 transition-opacity duration-300 ${
                isLoading ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
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

        <p className="mt-4 text-center text-sm text-gray-600 px-2">
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
