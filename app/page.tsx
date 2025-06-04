'use client'

import { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function HomePage() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  const heroImages = [
    { src: 'hero.PNG', position: 'center 57%' },
    { src: 'hero1.PNG', position: 'center 80%' },
    { src: 'hero6.jpg', position: 'center 75%' },
    { src: 'hero5.jpg', position: 'center 40%' },
    { src: 'hero2.PNG', position: 'center 48%' },
    { src: 'hero4.jpg', position: 'center 33%' },
    { src: 'hero3.jpg', position: 'center 57%' },
  ]

  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/images/hero.PNG" />
      </Head>

      <style>{`
        @keyframes subtle-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes arrow-inward-left {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }

        @keyframes arrow-outward-right {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-10px);
          }
        }

        .animate-subtle-bounce {
          animation: subtle-bounce 3s infinite;
        }

        .animate-arrow-left {
          animation: arrow-inward-left 3s infinite;
        }

        .animate-arrow-right {
          animation: arrow-outward-right 3s infinite;
        }
      `}</style>

      <Header />

      <section className="relative w-full h-[80vh] font-sans">
<button
  ref={prevRef}
  className={`swiper-button-prev-custom animate-arrow-left absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white text-8xl cursor-pointer transition-all duration-700 ease-out ${
    loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
  } hover:scale-125 active:scale-110 active:translate-y-[2px] hover:-translate-x-1`}
>
  ‹
</button>

<button
  ref={nextRef}
  className={`swiper-button-next-custom animate-arrow-right absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white text-8xl cursor-pointer transition-all duration-700 ease-out ${
    loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
  } hover:scale-125 active:scale-110 active:translate-y-[2px] hover:translate-x-1`}
>
  ›
</button>


        <div
          className="relative h-full"
          style={{
            backgroundImage: "url('/images/hero.PNG')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 57%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />

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
                typeof window !== 'undefined' &&
                typeof swiper.params.navigation === 'object' &&
                swiper.params.navigation !== null &&
                prevRef.current &&
                nextRef.current
              ) {
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current
              }
            }}
            className="h-full"
          >
            {heroImages.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={`/images/heros/${img.src}`}
                    alt={`Slide ${i + 1}`}
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

          {/* Heading (top quarter) */}
          <div className="absolute top-[20%] w-full z-20 text-center text-white px-4 font-display">
            <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg tracking-tight">
              Welcome to ASU Wake Devils
            </h1>
          </div>

          {/* Subtext (slightly above center, doubled font size) */}
          <div className="absolute top-[calc(50%-8px)] w-full z-20 text-center text-white px-4 font-display">
            <p className="text-2xl md:text-4xl tracking-wide">
              Your next ride starts here
            </p>
          </div>

          {/* Buttons (lower quarter) */}
          <div
            className={`absolute top-[70%] w-full z-20 flex justify-center gap-4 transition-all duration-700 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="/join"
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded border-b-4 border-yellow-500 shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:translate-y-[3px] animate-subtle-bounce hover:shadow-2xl"
            >
              Join Now
            </a>
            <a
              href="/events"
              className="bg-white text-black font-semibold px-6 py-3 rounded border-b-4 border-gray-300 shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:translate-y-[3px] hover:shadow-2xl"
            >
              Upcoming Events
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 font-serif">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who Are We?</h2>
          <p className="text-lg text-gray-700">
            ASU Wake Devils is a tight-knit group of students who ride together, grow together, and have a blast on
            and off the lake. Whether you're new or experienced, you're welcome here.
          </p>
          <a
            href="/about"
            className="inline-block mt-6 text-yellow-500 hover:underline font-semibold"
          >
            Learn More →
          </a>
        </div>
        <div className="relative w-full h-64 md:h-[400px] overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/images/lake-day.jpg"
            alt="Lake Day"
            fill
            quality={100}
            className="object-cover"
            style={{ objectPosition: 'center 75%' }}
          />
        </div>
      </section>

      <Footer />
    </>
  )
}
