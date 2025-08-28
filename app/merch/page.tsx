"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function MerchPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

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
      <style>{`
        @keyframes subtle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-subtle-bounce { animation: subtle-bounce 3s infinite; }
      `}</style>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex items-center justify-center flex-grow py-12 px-4 sm:px-6 text-center">
          <div
            className={`transition-opacity duration-700 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Official Wake Devils Merch
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-8">
              Rep the Wake Devils with our fresh gear! Whether it be clothes or
              accessories, we&apos;ve got everything you need to show your club
              pride.
            </p>

            <div className="flex justify-center">
              <a
                href="https://asuwakedevils.shop"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-base px-6 py-3 rounded border-b-4 border-yellow-500 shadow-xl transform transition-all duration-700 ease-out
                  hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl animate-subtle-bounce
                  ${
                    loaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
              >
                Shop Now!
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
