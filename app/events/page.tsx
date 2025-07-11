"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EventsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <title>Events | ASU Wake Devils</title>
        <meta
          name="description"
          content="Check out upcoming ASU Wake Devils events including lake days, socials, and competitions. Don’t miss the fun!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://asuwakedevils.com/events" />

        {/* Open Graph */}
        <meta property="og:title" content="Events | ASU Wake Devils" />
        <meta
          property="og:description"
          content="Stay up to date with all upcoming lake days, socials, and tournaments hosted by ASU Wake Devils."
        />
        <meta property="og:image" content="/images/heros/hero3.jpg" />
        <meta property="og:url" content="https://asuwakedevils.com/events" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Events | ASU Wake Devils" />
        <meta
          name="twitter:description"
          content="Explore upcoming ASU Wake Devils events – from competitions to hangouts on the lake."
        />
        <meta name="twitter:image" content="/images/heros/hero3.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow max-w-4xl mx-auto px-4 py-8 md:py-8 w-full">
          {/* DESKTOP content */}
          <div className="hidden md:block">
            <h1 className="text-4xl font-bold mb-3 text-center">
              Upcoming Events
            </h1>
            <p className="text-lg text-center mb-6">
              Stay up to date with all our lake days, socials, and competitions.
            </p>

            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] max-h-[75vh]">
              {isVisible && (
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-white z-10 transition-opacity duration-300 ${
                    isLoading ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              <iframe
                src="https://calendar.google.com/calendar/embed?src=asuwakedevils%40gmail.com&ctz=America%2FPhoenix"
                className="w-full h-full border-0 rounded-xl shadow-md"
                onLoad={() => setIsLoading(false)}
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>

            <div className="hidden md:block text-center text-sm text-gray-600 space-y-1 mt-3">
              <p>
                Trouble viewing the calendar?{" "}
                <a
                  href="https://calendar.google.com/calendar/u/0/embed?src=asuwakedevils@gmail.com&ctz=America/Phoenix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Open full calendar
                </a>
              </p>
              <p>Click the event to see description and location.</p>
            </div>
          </div>

          {/* MOBILE content */}
          <div className="md:hidden flex flex-col justify-start pt-6 pb-8 gap-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold leading-tight">
                Upcoming Events
              </h1>
              <p className="text-base leading-snug mt-4 px-2">
                Stay up to date with all our lake days, socials, and
                competitions.
              </p>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://calendar.google.com/calendar/u/0/embed?src=asuwakedevils@gmail.com&ctz=America/Phoenix"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded border-b-4 border-yellow-500 shadow-xl transition-all duration-700 transform hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl ${
                  loaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                Open Calendar
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
