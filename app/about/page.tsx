"use client";

import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  const board = [
    {
      name: "Logan Gregor",
      title: "President",
      image: "/images/board/logan.jpg?v=2",
      bio: "Hi, my name is Logan, and I’m majoring in Mechanical Engineering. I grew up boating on the lakes in Wisconsin and love wakeboarding and wakesurfing. When I’m not on the lake, I spend my time lifting, studying, and snowboarding.",
    },
    {
      name: "Lukas Spucys",
      title: "Vice President",
      image: "/images/board/lukas.jpg?v=3",
      bio: "Hey, I’m Lukas Spucys, a senior Finance major at ASU. I’m Lithuanian, grew up playing hockey, and have always loved staying active. I’m into board sports, cars, and chasing adrenaline—motocross, skydiving, cliff jumping, you name it. What I love most about Wake Devils is the energy and community—everyone pushes each other to level up and have a blast on the water.",
    },
    {
      name: "Sophia Ruger",
      title: "Treasurer",
      image: "/images/board/sophia.jpg?v=2",
      bio: "Hey, I’m Sophia! I’m a senior studying Sustainability, Urban Planning, and Geographic Information Science. When I’m not wakeboarding, I love rock climbing and making art!",
    },
    {
      name: "Jalen Artiles",
      title: "Secretary",
      image: "/images/board/jalen.jpg?v=2",
      bio: "Hi! My name is Jalen, and I’m a senior studying cybersecurity with an emphasis in business. I'm originally from California, and I love to surf, snowboard, play guitar, hit the gym, socialize, cook pesto pasta, and create new vocabulary words. I love being a Wake Devil because everyone is super inclusive, brings great energy, and I can go out on a boat whenever my heart desires.",
    },
    {
      name: "Logan Ashamallah",
      title: "Event Coordinator",
      image: "/images/board/loganash.jpg?v=3",
      bio: "Hey, I’m Logan. I’m a third-year Computer Science major from Thousand Oaks, California. I love music, working out, and traveling. Can’t wait for another year with the Wake Devils!",
    },
    {
      name: "Tristan Krauskopf",
      title: "Social Media Chair",
      image: "/images/board/tristan.jpg?v=2",
      bio: "Hi, I’m Tristan. I’m a sophomore at ASU majoring in Supply Chain Management. I’m from Seattle, Washington, and I love being on the lake. Joining Wake Devils has been the best decision I’ve ever made—I’ve made tons of memories and friends in just my first year and can’t wait for my next semester with the team.",
    },
    {
      name: "Daniel Gensler",
      title: "2024 President / Recruitment Chair",
      image: "/images/board/daniel.jpg?v=3",
      bio: "Hi everyone, my name is Daniel Gensler. I am going into my senior year and serve as the Recruitment Chair for the Wake Devils. I enjoy spending time outdoors. If you have any questions, feel free to reach out!",
    },
    {
      name: "Ellie Bjorgvinsdottir",
      title: "Recruitment Chair",
      image: "/images/board/ellie.jpg?v=2",
      bio: "Hi, I’m Ellie! I’m from Connecticut and a junior studying Business Finance. I love hiking, art, wakeboarding, and snowboarding. Looking forward to a great year with the Wake Devils!",
    },
    {
      name: "Luke Bloedel",
      title: "Marketing and Engagement",
      image: "/images/board/luke.jpg?v=2",
      bio: "Hey, I’m Luke. I’m a third-year Biomedical Engineering major from Scottsdale, Arizona. I love snow skiing, hitting the gym, traveling, and going out. Can’t wait for another season with the team!",
    },
    {
      name: "Nick Hoskins",
      title: "2024 Vice President / Team Captain",
      image: "/images/board/nick.jpg",
      bio: "Hi! My name is Nick Hoskins. I’m from Spokane, Washington, and I’m a junior majoring in Film and Media Production. In my free time, I enjoy snow skiing, making music with my band, spending time with my dog, and, of course, wakeboarding. I can’t wait for another great year with the Wake Devils!",
    },
    {
      name: "Cooper Bassi",
      title: "Transportation Manager",
      image: "/images/board/cooper.jpg?v=2",
      bio: "How’s it going? I’m Cooper. I’m from Santa Cruz, California, and I’m going into my third year as a financial planning major. I love to wakeboard and fish, and I’m super stoked for another year!",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

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
        <meta property="og:image" content="/images/heros/hero1.jpg" />
        <meta property="og:url" content="https://asuwakedevils.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | ASU Wake Devils" />
        <meta
          name="twitter:description"
          content="Get to know the people and passion behind ASU Wake Devils – Arizona State University's official wakeboarding club."
        />
        <meta name="twitter:image" content="/images/heros/hero1.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-4xl font-bold text-center mb-4">
          About Wake Devils
        </h1>

        {/* Mission + History */}
        <section className="mb-8 text-center">
          <p className="text-lg max-w-5xl mx-auto text-center sm:mb-4">
            ASU Wake Devils is Arizona State University&apos;s premier
            wakeboarding club, bringing together students who share a love for
            adventure, community, and life on the water. Since our founding in
            2010 by Ryan Platt, we&apos;ve built a legacy of unforgettable lake
            days, exciting competitions, and lifelong friendships. As five-time
            National Champions (2013, 2014, 2020, 2021, 2022), we&apos;re proud
            to be a leading force in collegiate wakeboarding—driven by passion,
            dedication, and the thrill of the ride. Whether you&apos;re a
            seasoned rider or just starting out, there&apos;s a spot for you in
            the Wake Devils family!
          </p>
        </section>

        {/* Board Cards */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-8">
            Meet the Board
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {board.map((member, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                data-index={idx}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className={`bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center transform transition-all duration-700 ease-out ${
                  visibleCards[idx]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
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
                <p className="text-sm font-medium text-gray-600 mb-1 sm:mb-2">
                  {member.title}
                </p>
                <p className="text-xs sm:text-sm text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
