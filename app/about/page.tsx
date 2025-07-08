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
      bio: "Hi, my name is Logan and I’m majoring in mechanical engineering. I grew up boating on the lakes in Wisconsin and I love wakeboarding and wake surfing. When I can’t be on the lake, I spend my time lifting, studying, and snowboarding.",
    },
    {
      name: "Lukas Spucys",
      title: "Vice President",
      image: "/images/board/lukas.jpg",
      bio: "Hi, I am Lukas and I’m the VP this year. I’m majoring in Gender Studies with a minor in Doorway Remodeling. I grew up in Chicago and my favorite thing to do is ride my Suzuki RE5 Motorcycle in circles all day.",
    },
    {
      name: "Sophia Ruger",
      title: "Treasurer",
      image: "/images/board/sophia.jpg",
      bio: "Ayyy I’m Sophia and I forgot where I’m from. Washington? Maybe. Anyways I like to rock climb and like Wakeboard too I guess. I’m going to be a Senior this year and I’m studying underwater basket weaving!",
    },
    {
      name: "Jalen Artiles",
      title: "Secretary",
      image: "/images/board/jalen.jpg",
      bio: "Hello! I am Jalen Von Atrillius III and I'm from Worcestershire England. My major is Computer Science and I spend my time advancing global understanding of cryptography and algorithmic number theory! Ask me about post-quantum cryptography… Or Pants Beers; I’m an expert in both.",
    },
    {
      name: "Logan Ashamallah",
      title: "Event Coordinator",
      image: "/images/board/loganash.jpg?v=2",
      bio: "Hey I'm Logan. I am a third year majoring in Computer Science and I'm from Thousand Oaks, California. I love music, working out, and traveling. Can't wait for another year with the Wake Devils!",
    },
    {
      name: "Tristan Krauskopf",
      title: "Social Media Chair",
      image: "/images/board/tristan.jpg",
      bio: "Hey I’m Tristan. I’m from Washington and I love washing… A ton. My major is Astronomy and I work as a salsa instructor over the summers. My hobbies include inclusion, exclusion, contusion, and confusion!",
    },
    {
      name: "Daniel Gensler",
      title: "2024 President / Recruitment Chair",
      image: "/images/board/daniel.jpg?v=2",
      bio: "My Name is Daniel! And Daniel is my name! If you don’t remember oh it would be a shame! Who wrote this song… Whoever is to blame ? Daniel Daniel Daniel… Daniel is his name!",
    },
    {
      name: "Ellie Bjorgvinsdottir",
      title: "Recruitment Chair",
      image: "/images/board/ellie.jpg?v=2",
      bio: "Hi I’m Ellie! I’m from Connecticut and I’m a junior studying business finance. I love hiking, art, wakeboarding, and snowboarding. Looking forward to a great year with the wake devs!",
    },
    {
      name: "Luke Bloedel",
      title: "Marketing and Engagement",
      image: "/images/board/luke.jpg?v=2",
      bio: "Hi I'm Luke. I like long walks on the beach and short naps at raves. I grew out of the ground like a plant and can be summoned by saying my name three times in a row.",
    },
    {
      name: "Nick Hoskins",
      title: "2024 Vice President / Team Captain",
      image: "/images/board/nick.jpg",
      bio: "I’m Nick. I come from Toronto, Canada and my favorite pastimes are being nice to people, speaking French, and freezing in the cold. I’m a Junior majoring in film, with a minor in interpretive dance! I play the drums but my real passion is to sing and dance!",
    },
    {
      name: "Cooper Bassi",
      title: "Transportation Manager",
      image: "/images/board/cooper.jpg",
      bio: "Hi I’m cooper. I was born on the boardwalk building better boards for the lords of board gorge. Every day I woke up and wakeboarded, snowboarded, skim boarded, skateboarded, water boarded, and paddle boarded before lunch. You know, boarding’s never boring when you’re boarding bigger boards forged for the lords of board gorge.",
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
