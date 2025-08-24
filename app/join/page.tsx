"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function JoinPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <title>Join | ASU Wake Devils</title>
        <meta
          name="description"
          content="Ready to ride? Join ASU Wake Devils today and be part of Arizona State's premier wakeboarding community."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://asuwakedevils.com/join" />

        {/* Open Graph */}
        <meta property="og:title" content="Join | ASU Wake Devils" />
        <meta
          property="og:description"
          content="Join ASU Wake Devils and take part in lake days, tournaments, and the best wakeboarding crew at Arizona State University."
        />
        <meta property="og:image" content="/images/heros/hero2.jpg" />
        <meta property="og:url" content="https://asuwakedevils.com/join" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join | ASU Wake Devils" />
        <meta
          name="twitter:description"
          content="Become a Wake Devil and make waves! Join the official wakeboarding club at ASU."
        />
        <meta name="twitter:image" content="/images/heros/hero2.jpg" />

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
              Join the Wake Devils!
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-8">
              Ready to make waves? Join our group chat to connect with the crew and stay updated on all events and lake days!
            </p>
            
            <div className="flex flex-col items-center">
              <a
                href="https://flare-event.app.link/NVO1g2iFVUb"
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
                Join Now!
              </a>

              <div className="flex flex-col items-center space-y-4 mt-8">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeHU1Q60bdm88jXwN4wY2d_u-D9aNoMIVyF60riukO1WsFMyA/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold text-base px-6 py-3 rounded border-b-4 border-blue-600 shadow-xl transform transition-all duration-700 ease-out
                    hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl
                    ${
                      loaded
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  style={{ transitionDelay: '100ms' }}
                >
                  Fill Out Member Form
                </a>

                <a
                  href="/waiver"
                  className={`text-white font-semibold text-base px-6 py-3 rounded border-b-4 shadow-xl transform transition-all duration-700 ease-out
                    hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl
                    ${
                      loaded
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  style={{ 
                    backgroundColor: '#943728',
                    borderBottomColor: '#7a2e22',
                    transitionDelay: '200ms' 
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#7a2e22'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#943728'}
                >
                  Sign Waiver
                </a>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}