'use client'

import { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function SponsorsPage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  const currentSponsors = [
    {
      name: 'Ronix',
      logo: '/images/sponsors/ronix.png',
      url: 'https://ronixwake.com',
    },
    {
      name: 'Action Water Sports',
      logo: '/images/sponsors/aws.png',
      url: 'https://www.actionwatersportsaz.com',
    },
    {
      name: 'Manera',
      logo: '/images/sponsors/manera.png',
      url: 'https://www.manera.com/en/home.html',
    },
  ]

  return (
    <>
      <Head>
        <title>Sponsors | ASU Wake Devils</title>
        <meta
          name="description"
          content="Check out the sponsors who support ASU Wake Devils – from top wakeboarding brands to local Arizona partners."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Sponsors | ASU Wake Devils" />
        <meta
          property="og:description"
          content="Meet the sponsors helping drive ASU Wake Devils to success on and off the water."
        />
        <meta property="og:image" content="/images/heros/hero3.jpg" />
        <meta property="og:url" content="https://asuwakedevils.com/sponsors" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sponsors | ASU Wake Devils" />
        <meta
          name="twitter:description"
          content="Meet our incredible sponsors who support collegiate wakeboarding at ASU."
        />
        <meta name="twitter:image" content="/images/heros/hero3.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Our Sponsors</h1>
        <p className="text-lg text-center text-gray-600 mb-10">
          Big thanks to our sponsors for supporting the ASU Wake Devils community.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
          {currentSponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center p-${
                sponsor.name === 'Ronix' ? '0' : sponsor.name === 'Manera' ? '3' : '1'
              } transition-opacity duration-1000 ease-in-out opacity-0 animate-fadeIn`}
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={200}
                height={100}
                className="object-contain max-h-20"
              />
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-2">Want to sponsor us?</p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded border-b-4 border-yellow-500 shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl"
          >
            Reach out to be featured here!
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}