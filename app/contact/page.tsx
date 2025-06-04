'use client'

import React, { useEffect, useState } from 'react'
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
      const response = await fetch('https://formspree.io/f/moqzplqy', {
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
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-lg mb-8 text-center">
          Have questions or want to get involved? Shoot us a message!
        </p>

        {submitted && (
          <div className="text-lg bg-green-100 text-green-800 px-4 py-3 rounded mb-6 text-center">
            Thanks for reaching out! We&apos;ll get back to you soon.
          </div>
        )}
        {error && (
          <div className="text-lg bg-red-100 text-red-800 px-4 py-3 rounded mb-6 text-center">
            Something went wrong. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
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
            <label className="block text-sm font-medium mb-1" htmlFor="message">
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
            }`}
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
      </main>
      <Footer />
    </>
  )
}