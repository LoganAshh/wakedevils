"use client";

import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { trackClick } from "./analytics";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

export default function HomePage() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [showSwiper, setShowSwiper] = useState(false);
  const [showWhoSection, setShowWhoSection] = useState(false);
  const whoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
      setShowSwiper(true);
    }, 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowWhoSection(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (whoRef.current) {
      observer.observe(whoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const heroImages = [
    { src: "hero.jpg", position: "center 57%" },
    { src: "hero1.jpg", position: "center 80%" },
    { src: "hero2.jpg", position: "center 48%" },
    { src: "hero3.jpg", position: "center 75%" },
    { src: "hero4.jpg", position: "center 40%" },
    { src: "hero5.jpg", position: "center 32%" },
    { src: "hero6.jpg", position: "center 33%" },
    { src: "hero7.jpg", position: "center 33%" },
    { src: "hero8.jpg", position: "center 52%" },
    { src: "hero9.jpg", position: "center 44%" },
    { src: "hero10.jpg", position: "center 56%" },
  ];

  return (
    <>
      <Head>
        <title>
          ASU Wake Devils | Wakeboarding at Arizona State University
        </title>
        <meta
          name="description"
          content="ASU Wake Devils is the official wakeboarding club of Arizona State University. Join us for lake days, tournaments, and an awesome ASU watersports community!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://asuwakedevils.com/" />
        <link rel="preload" as="image" href="/images/heros/hero.jpg" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="ASU Wake Devils | Wakeboarding at Arizona State University"
        />
        <meta
          property="og:description"
          content="Join ASU Wake Devils for unforgettable lake days, competitive wakeboarding, and an amazing ASU community!"
        />
        <meta
          property="og:image"
          content="https://asuwakedevils.com/images/heros/hero.jpg"
        />
        <meta property="og:url" content="https://asuwakedevils.com/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ASU Wake Devils | Wakeboarding at ASU"
        />
        <meta
          name="twitter:description"
          content="Lake days, tournaments, and a tight-knit ASU community. Ride with ASU Wake Devils!"
        />
        <meta
          name="twitter:image"
          content="https://asuwakedevils.com/images/heros/hero.jpg"
        />

        <link rel="icon" href="/favicon.ico" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsTeam",
              name: "ASU Wake Devils",
              url: "https://asuwakedevils.com",
              sport: "Wakeboarding",
              logo: "https://asuwakedevils.com/images/logos/logo.jpg",
              description:
                "The ASU Wake Devils is Arizona State University's official wakeboarding club, hosting lake days, events, and tournaments.",
              memberOf: {
                "@type": "CollegeOrUniversity",
                name: "Arizona State University",
                url: "https://asu.edu",
              },
              sameAs: [
                "https://instagram.com/wakedevils",
                "https://tiktok.com/@wakedevils",
                "https://www.youtube.com/@wakedevils",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "asuwakedevils@gmail.com",
                contactType: "Club Contact",
                url: "https://asuwakedevils.com/contact",
              },
              location: {
                "@type": "Place",
                name: "Arizona State University",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Tempe",
                  addressRegion: "AZ",
                  postalCode: "85281",
                  addressCountry: "US",
                },
              },
            }),
          }}
        />
      </Head>

      <style>{`
        @keyframes subtle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes arrow-inward-left {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        @keyframes arrow-outward-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-10px); }
        }
        .animate-subtle-bounce { animation: subtle-bounce 3s infinite; }
        .animate-arrow-left { animation: arrow-inward-left 3s infinite; }
        .animate-arrow-right { animation: arrow-outward-right 3s infinite; }
      `}</style>

      <Header />

      <section className="relative w-full h-[80dvh] font-sans">
        <button
          ref={prevRef}
          className={`swiper-button-prev-custom animate-arrow-left absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white text-8xl cursor-pointer transition-all duration-700 ease-out ${
            loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          } hover:scale-125 active:scale-110 active:translate-y-[2px] hover:-translate-x-1`}
        >
          ‹
        </button>

        <button
          ref={nextRef}
          className={`swiper-button-next-custom animate-arrow-right absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white text-8xl cursor-pointer transition-all duration-700 ease-out ${
            loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          } hover:scale-125 active:scale-110 active:translate-y-[2px] hover:translate-x-1`}
        >
          ›
        </button>

        <div
          className="relative h-full"
          style={{
            backgroundImage: "url('/images/heros/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 57%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />

          {showSwiper && (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              loop
              navigation={{
                prevEl: prevRef.current!,
                nextEl: nextRef.current!,
              }}
              onBeforeInit={(swiper) => {
                if (
                  typeof window !== "undefined" &&
                  typeof swiper.params.navigation === "object" &&
                  swiper.params.navigation !== null &&
                  prevRef.current &&
                  nextRef.current
                ) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }
              }}
              className="h-full"
            >
              {heroImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-[80dvh]">
                    <Image
                      src={`/images/heros/${img.src}`}
                      alt={`ASU Wake Devils Hero Slide ${i + 1}`}
                      fill
                      quality={100}
                      style={{ objectPosition: img.position }}
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <div className="absolute top-[20%] w-full z-20 text-center text-white px-4 font-display">
            <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg tracking-tight">
              Welcome to ASU Wake Devils
            </h1>
          </div>

          <div className="absolute top-[calc(50%-8px)] w-full z-20 text-center text-white px-4 font-display">
            <p className="text-2xl md:text-4xl tracking-wide">
              Your next ride starts here
            </p>
          </div>

          <div
            className={`absolute top-[70%] w-full z-20 flex justify-center gap-4 transition-all duration-700 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="/join"
              onClick={() => trackClick("click_join_now", "Homepage CTA")}
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded border-b-4 border-yellow-500 shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:translate-y-[3px] animate-subtle-bounce hover:shadow-2xl"
            >
              Join Now
            </a>
            <a
              href="/events"
              onClick={() =>
                trackClick("click_upcoming_events", "Homepage CTA")
              }
              className="bg-white text-black font-semibold px-6 py-3 rounded border-b-4 border-gray-300 shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl"
            >
              Upcoming Events
            </a>
          </div>
        </div>
      </section>

      {/* Scroll Cue */}
      <div className="w-full flex justify-center z-0 mt-2 -mb-12 relative">
        <button
          aria-label="Scroll to Who Are We section"
          className="text-black text-3xl opacity-70 hover:opacity-100 transition cursor-pointer active:scale-95 active:translate-y-[2px]"
          onClick={() => {
            const target = document.getElementById("who");
            if (target) {
              const yOffset = window.innerWidth < 768 ? -80 : -20;
              const y =
                target.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
        >
          ↓
        </button>
      </div>

      <section>
        <div
          id="who"
          ref={whoRef}
          className="max-w-screen-xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 font-serif items-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">Who Are We?</h2>
            <p className="text-lg text-gray-700">
              ASU Wake Devils is a tight-knit group of students who ride
              together, grow together, and have a blast on and off the lake.
              Whether you&apos;re new or experienced, you&apos;re welcome here!
            </p>

            {/* State Press link */}
            <a
              href="https://www.statepress.com/article/2025/10/sports-asu-wake-devils-2025-team#"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackClick("click_state_press_article", "Homepage CTA")
              }
              className="group inline-block mt-6 text-yellow-500 font-semibold transition-all duration-300 hover:brightness-110 active:translate-y-[2px]"
            >
              Read our feature in The State Press
              <span className="inline-block ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <div className="relative w-full h-64 md:h-72 mt-8 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/lake-day.jpg"
                alt="ASU Wake Devils enjoying a lake day together"
                fill
                quality={100}
                className="object-cover"
                style={{ objectPosition: "center 63%" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay:
                typeof window !== "undefined" && window.innerWidth < 768
                  ? 0.3
                  : 0,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4 items-center w-full"
          >
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/npwPSMCpTHc"
                title="ASU Wake Devils"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
            <p className="text-xl font-semibold text-center text-gray-800">
              Meet our Coach!
            </p>
            <div className="relative w-full h-64 md:h-28 overflow-hidden rounded-lg">
              <Image
                src="/images/logos/text_logo.jpg"
                alt="ASU Wake Devils official logo"
                fill
                quality={100}
                className="object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {loaded && showSwiper && showWhoSection && <Footer />}
    </>
  );
}
