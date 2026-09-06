"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DuesPageClient() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-3xl mx-auto px-4 py-12 sm:px-6 sm:py-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">
          Pay Your Dues
        </h1>
        <p className="text-base sm:text-lg mb-2 sm:mb-4">
          Help keep Wake Devils running strong! Dues help cover gas for lake
          trips, equipment upkeep and replacement, boat operation costs, team
          events, safety gear, and insurance.
        </p>
        <p className="mb-4 sm:mb-8 text-sm sm:text-base text-gray-600">
          Secure payment is handled via MidFirst Bank. Use the button below to
          pay.
        </p>

        <div
          className={`flex items-center justify-center ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-700 ease-out`}
        >
          <a
            href="https://checkout.page/s/SsbG5xcSyeLIK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pay Membership Dues"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-base px-6 py-3 rounded border-b-4 border-yellow-500 shadow-xl transform transition-all duration-300 ease-out hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl"
          >
            Pay Here!
          </a>
        </div>

        <section className="mt-8 sm:mt-14 text-center">
          <h2 className="text-3xl font-semibold mb-2 sm:mb-4">
            Support the Club
          </h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-8 px-2 sm:px-0">
            Even if you’re not a member, you can still help us grow! <br />
            Thank you for supporting the Wake Devils! We truly appreciate it!
          </p>

          <div className="flex justify-center">
            <a
              href="https://app.autobooks.co/pay/asu-wake-boarding-team"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white font-semibold text-base px-6 py-3 rounded border-b-4 shadow-xl transform transition-all duration-300 ease-out hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                backgroundColor: "#943728",
                borderBottomColor: "#7a2e22",
                transitionDelay: "250ms",
              }}
              onMouseEnter={(event) =>
                (event.currentTarget.style.backgroundColor = "#7a2e22")
              }
              onMouseLeave={(event) =>
                (event.currentTarget.style.backgroundColor = "#943728")
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
    </div>
  );
}
