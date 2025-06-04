'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'

export default function MerchPage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <Header />

      <main className="flex items-center justify-center h-[70vh] text-center px-4">
        <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Merch Coming Soon 👀</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
            We&apos;re working on some fresh gear for the Wake Devils. Check back soon to get your hands on official merch!
          </p>
        </div>
      </main>

      <Footer />
    </>
  )
}