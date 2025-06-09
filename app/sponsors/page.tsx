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

  const renderSponsorGrid = (list: typeof currentSponsors) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
      {list.map((sponsor, i) => {
        const isManera = sponsor.name === 'Manera'
        const isRonix = sponsor.name === 'Ronix'
        const paddingClass = isManera ? 'p-13' : isRonix ? 'p-0' : 'p-5'

        return (
          <a
            key={i}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: `${i * 100}ms` }}
            className={`bg-white aspect-square rounded-3xl shadow-xl border border-gray-300 ${paddingClass} flex items-center justify-center transition-all duration-700 ease-out transform hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div
              className={`relative w-full h-full ${
                isManera ? 'rounded-3xl overflow-hidden' : ''
              }`}
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, 33vw"
                priority
              />
            </div>
          </a>
        )
      })}
    </div>
  )

  return (
    <>
      <Head>
        <title>Sponsors | ASU Wake Devils</title>
        <meta
          name="description"
          content="Meet the amazing sponsors who help power ASU Wake Devils! Learn how your brand can get involved."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://asuwakedevils.com/sponsors" />

        {/* Open Graph */}
        <meta property="og:title" content="Sponsors | ASU Wake Devils" />
        <meta
          property="og:description"
          content="Check out our current sponsors and find out how to support ASU's official wakeboarding club."
        />
        <meta property="og:image" content="/images/heros/hero3.jpg" />
        <meta property="og:url" content="https://asuwakedevils.com/sponsors" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sponsors | ASU Wake Devils" />
        <meta
          name="twitter:description"
          content="Thanks to our amazing sponsors for helping us shred! Want to sponsor? Reach out to ASU Wake Devils."
        />
        <meta name="twitter:image" content="/images/heros/hero3.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Sponsors</h1>
        <p className="text-lg mb-8">
          Huge thanks to the brands that support the ASU Wake Devils!
        </p>

        {renderSponsorGrid(currentSponsors)}

        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-3">Interested in Sponsoring?</h2>
          <p className="text-md text-gray-600 mb-6">
            We&apos;re always looking for new partnerships!
          </p>

          <div className="flex justify-center">
            <a
              href="mailto:wakedevils@asu.edu"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded border-b-4 border-yellow-500 shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl"
            >
              Reach out to be featured here!
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}