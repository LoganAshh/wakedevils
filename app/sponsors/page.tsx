'use client'

import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function SponsorsPage() {
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
          content="Meet the amazing sponsors who support the ASU Wake Devils. Check out the brands that help fuel our passion for wakeboarding."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Sponsors | ASU Wake Devils" />
        <meta
          property="og:description"
          content="Support the brands that support us! ASU Wake Devils' sponsors make our lake days and tournaments possible."
        />
        <meta property="og:image" content="/images/heros/hero4.jpg" />
        <meta property="og:url" content="https://asuwakedevils.com/sponsors" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sponsors | ASU Wake Devils" />
        <meta
          name="twitter:description"
          content="Check out the official sponsors of ASU Wake Devils, Arizona State University's wakeboarding club."
        />
        <meta name="twitter:image" content="/images/heros/hero4.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Our Sponsors</h1>
        <p className="text-lg text-gray-700 mb-10">
          We’re proud to be supported by brands who believe in our mission. Show them some love!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {currentSponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full h-28 md:h-32">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>

        <p className="mt-10 text-gray-600 text-sm">
          Want to sponsor us?{' '}
          <a href="/contact" className="text-blue-600 underline hover:text-blue-800">
            Reach out here.
          </a>
        </p>
      </main>

      <Footer />
    </>
  )
}