'use client'

import { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DuesPage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <Head>
        <title>Pay Dues | ASU Wake Devils</title>
        <meta
          name="description"
          content="Securely pay your ASU Wake Devils membership dues through our official payment portal."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://asuwakedevils.com/dues" />

        {/* Open Graph */}
        <meta property="og:title" content="Pay Dues | ASU Wake Devils" />
        <meta
          property="og:description"
          content="Pay your Wake Devils membership dues securely online and stay part of the crew!"
        />
        <meta property="og:image" content="/images/heros/hero4.jpg" />
        <meta property="og:url" content="https://asuwakedevils.com/dues" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pay Dues | ASU Wake Devils" />
        <meta
          name="twitter:description"
          content="Make your dues payment online and help support ASU's wakeboarding club!"
        />
        <meta name="twitter:image" content="/images/heros/hero4.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12 sm:px-6 sm:py-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-2">Pay Your Dues</h1>
        <p className="text-base sm:text-lg mb-4 sm:mb-2">
          Help keep Wake Devils running strong! Dues cover lake days, competitions, transportation, and gear.
        </p>
        <p className="mb-8 sm:mb-4 text-sm sm:text-base text-gray-600">
          Secure payment is handled through MidFirst Bank. Click below to pay online.
        </p>

        <div className="flex justify-center">
          <a
            href="https://app.autobooks.co/pay/asu-wake-boarding-team"
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: '150ms' }}
            className={`bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-base px-6 py-3 rounded border-b-4 border-yellow-500 shadow-xl transform transition-all duration-700 ease-out
              hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Pay Now!
          </a>
        </div>

        {/* Donation Section */}
        <section className="mt-14 text-center">
          <h2 className="text-3xl sm:text-3xl font-semibold mb-4 sm: mb-2">Support the Club</h2>
          <p className="text-base sm:text-lg mb-8 sm: mb-4 px-2 sm:px-0">
            Even if you’re not a member, you can help us grow by making a donation. Thank you for supporting our lake days, gear, and competition travel — we truly appreciate it!
          </p>

          <div className="flex justify-center">
            <a
              href="https://app.autobooks.co/pay/asu-wake-boarding-team"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: '250ms' }}
              className={`bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-base px-6 py-3 rounded border-b-4 border-yellow-500 shadow-xl transform transition-all duration-700 ease-out
                hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl
                ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Donate Now!
            </a>
          </div>
        </section>

        <p className="mt-14 text-xs sm:text-sm text-gray-500 px-2 sm:px-0">
          Having trouble? Reach out to us at asuwakedevils@gmail.com
        </p>
      </main>
      <Footer />
    </>
  )
}