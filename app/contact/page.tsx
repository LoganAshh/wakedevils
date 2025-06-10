'use client'

import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/meokjlnz', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Contact | ASU Wake Devils</title>
        <meta
          name="description"
          content="Have questions about ASU Wake Devils? Reach out to our team using our contact form."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://asuwakedevils.com/contact" />
        <meta property="og:title" content="Contact | ASU Wake Devils" />
        <meta
          property="og:description"
          content="Shoot us a message if you're interested in joining or collaborating with ASU's premier wakeboarding club."
        />
        <meta property="og:image" content="/images/heros/hero4.jpg" />
        <meta property="og:url" content="https://asuwakedevils.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | ASU Wake Devils" />
        <meta
          name="twitter:description"
          content="Get in touch with the ASU Wake Devils board and learn how to get involved."
        />
        <meta name="twitter:image" content="/images/heros/hero4.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow w-full px-4 py-12 md:py-16">
          <div className="max-w-lg mx-auto w-full">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Contact Us
            </h1>
            <p className="text-base md:text-lg mb-10 text-center text-gray-700">
              Have questions or want to get involved? Shoot us a message!
            </p>

            {submitted && (
              <div className="text-base md:text-lg bg-green-100 text-green-800 px-4 py-3 rounded mb-6 text-center">
                Thanks for reaching out! We&apos;ll get back to you soon.
              </div>
            )}
            {error && (
              <div className="text-base md:text-lg bg-red-100 text-red-800 px-4 py-3 rounded mb-6 text-center">
                Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border border-gray-300 px-4 py-2 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded border-b-4 border-yellow-500 shadow-xl transition-all duration-700 transform hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl cursor-pointer disabled:cursor-default ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } mb-6`}
              >
                {loading ? (
                  <span className="flex items-center justify-center space-x-2 text-white">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
