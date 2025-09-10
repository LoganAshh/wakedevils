"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DuesPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

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
        <meta property="og:title" content="Pay Dues | ASU Wake Devils" />
        <meta
          property="og:description"
          content="Pay your Wake Devils membership dues securely online and stay part of the crew!"
        />
        <meta property="og:image" content="/images/heros/hero5.jpg" />
        <meta property="og:url" content="https://asuwakedevils.com/dues" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pay Dues | ASU Wake Devils" />
        <meta
          name="twitter:description"
          content="Make your dues payment online and help support ASU's wakeboarding club!"
        />
        <meta name="twitter:image" content="/images/heros/hero5.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12 sm:px-6 sm:py-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">
          Pay Your Dues
        </h1>
        <p className="text-base sm:text-lg mb-2 sm:mb-4">
          Help keep Wake Devils running strong! Dues help cover gas for lake
          trips, equipment upkeep and replacement, boat operation costs, team
          events, safety gear, and insurance.
        </p>
        <p className="mb-4 sm:mb-8 text-sm sm:text-base text-gray-600">
          Secure payment is handled via MidFirst Bank. Choose your membership
          below.
        </p>

        {/* Dues Options */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 justify-center ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-700 ease-out`}
        >
          {/* Social Membership (left) */}
          <a
            href="https://checkout.page/s/wj7FxtKwjQSzo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pay Social Membership Dues"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-base px-6 py-3 rounded border-b-4 border-yellow-500 shadow-xl transform hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl"
          >
            Social Membership
          </a>

          {/* General Membership (center) */}
          <a
            href="https://checkout.page/s/SsbG5xcSyeLIK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pay General Membership Dues"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-base px-6 py-3 rounded border-b-4 border-yellow-500 shadow-xl transform hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl"
          >
            General Membership
          </a>

          {/* Competitive Membership (right, smaller text) */}
          <a
            href="https://checkout.page/s/n4kj89Do4v5aF"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pay Competitive Membership Dues"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-sm px-4 py-3 rounded border-b-4 border-yellow-500 shadow-xl transform hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl flex items-center justify-center"
          >
            Competitive Membership
          </a>
        </div>

        {/* Donation Section */}
        <section className="mt-8 sm:mt-14 text-center">
          <h2 className="text-3xl sm:text-3xl font-semibold mb-2 sm:mb-4">
            Support the Club
          </h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-8 px-2 sm:px-0">
            Even if you’re not a member, you can still help us grow! <br />
            Thank you for supporting the Wake Devils — we truly appreciate it!
          </p>

          <div className="flex justify-center">
            <a
              href="https://app.autobooks.co/pay/asu-wake-boarding-team"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white font-semibold text-base px-6 py-3 rounded border-b-4 shadow-xl transform transition-all duration-300 ease-out hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl
      ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{
                backgroundColor: "#943728",
                borderBottomColor: "#7a2e22",
                transitionDelay: "250ms",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.backgroundColor = "#7a2e22")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.backgroundColor = "#943728")
              }
            >
              Donate Now!
            </a>
          </div>
        </section>

        <p className="mt-7 sm:mt-14 text-xs sm:text-sm text-gray-500 px-2 sm:px-0">
          Having trouble? Reach out to us at asuwakedevils@gmail.com
        </p>
      </main>
      <Footer />
    </>
  );
}
