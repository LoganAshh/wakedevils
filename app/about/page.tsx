'use client'

import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])

  const board = [
    {
      name: 'Logan Gregor',
      title: 'President',
      image: '/images/board/default.jpg',
      bio: 'Description',
    },
    {
      name: 'Lukas Spucys',
      title: 'Vice President',
      image: '/images/board/default.jpg',
      bio: 'Description',
    },
    {
      name: 'Bryce Hendrickson',
      title: 'Head Coach',
      image: '/images/board/default.jpg',
      bio: 'Description',
    },
    {
      name: 'Sophia Ruger',
      title: 'Treasurer',
      image: '/images/board/default.jpg',
      bio: 'Description',
    },
    {
      name: 'Jalen Artiles',
      title: 'Secretary',
      image: '/images/board/default.jpg',
      bio: 'Description',
    },
    {
      name: 'Logan Ashamallah',
      title: 'Event Coordinator',
      image: '/images/board/loganash.jpg',
      bio: "Hey I'm Logan. I am a third year majoring in Computer Science and I'm from Thousand Oaks, California. I love music, working out, and traveling. Can't wait for another year with the Wake Devils!",
    },
    {
      name: 'Tristan Krauskopf',
      title: 'Social Media Chair',
      image: '/images/board/default.jpg',
      bio: 'Description',
    },
    {
      name: 'Daniel Gensler',
      title: 'Recruitment Chair',
      image: '/images/board/default.jpg',
      bio: 'Description',
    },
    {
      name: 'Ellie Bjorgvinsdottir',
      title: 'Recruitment Chair',
      image: '/images/board/default.jpg',
      bio: 'Description',
    },
    {
      name: 'Luke Bloedel',
      title: 'Marketing and Engagement',
      image: '/images/board/default.jpg',
      bio: 'Description',
    },
    {
      name: 'Nick Hoskins',
      title: 'Team Captain',
      image: '/images/board/default.jpg',
      bio: 'Description',
    },
    {
      name: 'Cooper Bassi',
      title: 'Driver',
      image: '/images/board/default.jpg',
      bio: 'Description',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = Number(entry.target.getAttribute('data-index'))
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
              const updated = [...prev]
              updated[index] = true
              return updated
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>About | ASU Wake Devils</title>
        <meta
          name="description"
          content="Learn about the ASU Wake Devils wakeboarding club – our mission, history, and leadership board. Join our vibrant, lake-loving community today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://asuwakedevils.com/about" />
        <meta property="og:title" content="About | ASU Wake Devils" />
        <meta
          property="og:description"
          content="Discover ASU Wake Devils' story and meet the student leaders behind the scenes. We're more than a club – we're a wakeboarding family."
        />
        <meta property="og:image" content="/images/heros/hero1.PNG" />
        <meta property="og:url" content="https://asuwakedevils.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | ASU Wake Devils" />
        <meta
          name="twitter:description"
          content="Get to know the people and passion behind ASU Wake Devils – Arizona State University's official wakeboarding club."
        />
        <meta name="twitter:image" content="/images/heros/hero1.PNG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-4xl font-bold text-center mb-4">About Wake Devils</h1>

        {/* Mission + History */}
        <section className="mb-8 text-center">
          <p className="text-lg mb-0 sm:mb-4">
            ASU Wake Devils is Arizona State University&apos;s premier wakeboarding club, bringing together students who share a love for adventure, community,
            and life on the water. Since our founding in 2010, we&apos;ve built a legacy of unforgettable lake days, exciting competitions, and lifelong
            friendships. As five-time National Champions (2013, 2014, 2020, 2021, 2022), we&apos;re proud to be a leading force in collegiate wakeboarding—driven
            by passion, dedication, and the thrill of the ride. <br />
            Whether you&apos;re a seasoned rider or just starting out, there&apos;s a spot for you in the Wake Devils family!
          </p>
        </section>

        {/* Board Cards */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-12">Meet the Board</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {board.map((member, idx) => (
              <div
                key={idx}
                ref={el => {
                  cardRefs.current[idx] = el
                }}
                data-index={idx}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className={`bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center transform transition-all duration-700 ease-out ${
                  visibleCards[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } hover:scale-[1.02]`}
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{member.name}</h3>
                <p className="text-sm font-medium text-gray-600 mb-1 sm:mb-2">{member.title}</p>
                <p className="text-xs sm:text-sm text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
