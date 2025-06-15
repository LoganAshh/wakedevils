'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function MerchPage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <Head>
        <title>Merch | ASU Wake Devils</title>
        <meta
          name="description"
          content="Shop official ASU Wake Devils merch including t-shirts, hoodies, hats, and more. Rep the squad on and off the water!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://asuwakedevils.com/merch" />
        <meta property="og:title" content="Merch | ASU Wake Devils" />
        <meta
          property="og:description"
          content="Browse and buy official ASU Wake Devils gear. Show your support for ASU's premier wakeboarding club."
        />
        <meta property="og:image" content="/images/heros/hero4.jpg" />
        <meta property="og:url" content="https://asuwakedevils.com/merch" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Merch | ASU Wake Devils" />
        <meta
          name="twitter:description"
          content="Get your official ASU Wake Devils merch today. Limited drops, stylish designs, and club pride!"
        />
        <meta name="twitter:image" content="/images/heros/hero4.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex items-center justify-center flex-grow py-12 px-4 sm:px-6 text-center">
          <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Merch Coming Soon 👀</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
              We&apos;re working on some fresh gear for the Wake Devils. Check back soon to get your hands on official merch!
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
