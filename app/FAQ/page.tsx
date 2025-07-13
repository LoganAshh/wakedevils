"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqData = [
  {
    id: "start",
    category: "Getting Started",
    faqs: [
      {
        question: "How do I join ASU Wake Devils?",
        answer: (
          <>
            Just head to our{" "}
            <Link
              href="/join"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Join
            </Link>{" "}
            page to let us know who you are. For more updates, join our group on{" "}
            <Link
              href="https://flare-event.app.link/NVO1g2iFVUb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Flare
            </Link>{" "}
            .
          </>
        ),
      },
      {
        question: "Can I come try it out before joining?",
        answer: (
          <>
            Yes! We offer one free trial lake day for new members. Head to our{" "}
            <Link
              href="/join"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Join
            </Link>{" "}
            page to let us know who you are and join our group on{" "}
            <Link
              href="https://flare-event.app.link/NVO1g2iFVUb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Flare
            </Link>{" "}
            to sign up for a boat!
          </>
        ),
      },
      {
        question: "Do I need wakeboarding experience to join?",
        answer:
          "Not at all! Many members are total beginners. We'll teach you the basics and help you progress at your own pace.",
      },
      {
        question: "Can I join if I only want to wake surf or attend events?",
        answer: (
          <>
            Yes! We welcome anyone interested in wake surfing, hydro foiling, or
            just social events! We compete in both wake surfing and wake
            boarding events. We also have many social events both near campus
            and on the lake.
          </>
        ),
      },
      {
        question: "How do I get onto the competitive team?",
        answer: (
          <>
            At the start of each semester, we hold tryouts for riders interested
            in joining our competitive team. To qualify for the men&apos;s team,
            you&apos;ll need to land either an invert or a spin. For the
            women&apos;s team, you&apos;ll need to successfully clear the wake.
            To compete in Wake surfing, you must be able to perform either a
            surface 360 or an ollie.
          </>
        ),
      },
    ],
  },
  {
    id: "events",
    category: "Events & Lake Days",
    faqs: [
      {
        question: "How do I stay updated on events?",
        answer: (
          <>
            All events will be posted on our{" "}
            <Link
              href="/events"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Events
            </Link>{" "}
            page, as well as on our{" "}
            <Link
              href="https://calendar.google.com/calendar/u/3?cid=YXN1d2FrZWRldmlsc0BnbWFpbC5jb20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Google Calendar
            </Link>{" "}
            . Once you have paid your dues, you will be given access to our
            Flare group chats where boats and events will also be announced.
          </>
        ),
      },
      {
        question: "How often do you have lake days?",
        answer:
          "We usually go out 2-3 times a week during the semester, depending on weather and rider availability.",
      },
      {
        question: "Are lake days free?",
        answer: (
          <>
            For general members, the first 5 rides are covered by your dues. For
            comp members, the first 10 rides are covered. After that, members
            chip in $15 per lake day for gas. NOTE: These numbers are not final
            and will be updated at the start of the semester.
          </>
        ),
      },
      {
        question: "Is transportation provided to the lake?",
        answer:
          "Yes! Transportation is usually arranged through carpools. Riders often coordinate in the Flare groupchat to drive or get rides from other members.",
      },
      {
        question: "Where do you usually ride?",
        answer:
          "Our most common spot is Bartlett Lake, about an hour from Tempe.",
      },
      {
        question: "Do I need to bring my own gear?",
        answer:
          "Nope! The club provides boards, ropes, life vests, and more. But if you have your own gear, you're welcome to use it!",
      },
      {
        question: "What should I bring to a lake day?",
        answer:
          "Bring a towel, sunscreen, water, snacks, a swimsuit, and a good attitude. Everything else is provided!",
      },
      {
        question: "Can I bring a friend to a ride?",
        answer: (
          <>
            Yes! Non-members can attend one trial ride if approved in advance.
            Have them fill out the form and waiver on our{" "}
            <Link
              href="/join"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Join
            </Link>{" "}
            page and reserve their spot in the Flare groupchat.
          </>
        ),
      },
    ],
  },
  {
    id: "dues",
    category: "Dues & Memberships",
    faqs: [
      {
        question: "How much are dues?",
        answer:
          "Dues are $200 for general members, $100 for social members, and $300 for comp members. NOTE: These prices are not final and will be updated at the start of the semester.",
      },
      {
        question: "What do dues cover?",
        answer:
          "Dues help cover gas for lake trips, equipment upkeep and replacement, boat operation costs, team events, safety gear, and insurance.",
      },
      {
        question: "How do I pay my dues?",
        answer: (
          <>
            On our{" "}
            <Link
              href="/dues"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Dues
            </Link>{" "}
            page, fill out the waiver and select you membership type to be
            redirected to our secure checkout through MidFirst Bank.
          </>
        ),
      },
      {
        question:
          "What's the difference between general, social, and comp team memberships?",
        answer:
          "General members get access to all events and lake days. Social members can attend events but do not ride. Comp team members are selected to compete in collegiate tournaments and represent ASU nationally.",
      },
    ],
  },
  {
    id: "contact",
    category: "Contact & Support",
    faqs: [
      {
        question: "Who can I contact with questions?",
        answer: (
          <>
            You can email us at{" "}
            <a
              href="mailto:asuwakedevils@gmail.com"
              className="text-blue-600 underline"
            >
              asuwakedevils@gmail.com
            </a>{" "}
            or DM us on Instagram{" "}
            <a
              href="https://instagram.com/wakedevils"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              @wakedevils
            </a>
            .
          </>
        ),
      },
    ],
  },
];

export default function FAQPage() {
  const [loaded, setLoaded] = useState(false);
  const [openIndex, setOpenIndex] = useState<{ [key: string]: number | null }>(
    {}
  );
  const [visibleSections, setVisibleSections] = useState<{
    [key: string]: boolean;
  }>({});
  const [hideStartCue, setHideStartCue] = useState(false);
  const [hideEventsCue, setHideEventsCue] = useState(false);
  const [showAllStart, setShowAllStart] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);

    const handleHashScroll = () => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          let yOffset = -200;
          if (id === "events") yOffset = -160;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          setTimeout(() => window.scrollTo({ top: y, behavior: "smooth" }), 0);
        }
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!showAllStart && window.scrollY > 1) {
        setShowAllStart(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAllStart]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            if (id === "events") {
              setHideStartCue(true);
              setShowAllStart(true);
            }
            if (id === "dues") setHideEventsCue(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    faqData.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggle = (category: string, index: number) => {
    setOpenIndex((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <>
      <Head>
        <title>FAQs | ASU Wake Devils</title>
        <meta
          name="description"
          content="Answers to common questions about joining, dues, and lake days."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://asuwakedevils.com/faq" />
        <meta property="og:title" content="FAQs | ASU Wake Devils" />
        <meta
          property="og:description"
          content="Everything you need to know before joining the Wake Devils family."
        />
      </Head>

      <Header />
      <main
        className={`transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <section className="max-w-4xl mx-auto px-4 py-16 scroll-smooth">
          <h1 className="text-4xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h1>

          {/* Category Buttons */}
          <nav className="mb-8 flex flex-wrap justify-center gap-4">
            {faqData.map((section) => {
              const isEvents = section.id === "events";
              const isStart = section.id === "start";
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(section.id);
                    if (el) {
                      const yOffset = isStart ? -120 : isEvents ? -160 : -180;
                      const y =
                        el.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                      history.pushState(null, "", `#${section.id}`);
                    }
                  }}
                  className="px-4 py-2 rounded-md transition shadow-sm cursor-pointer active:scale-95 active:translate-y-[3px] text-black hover:bg-[#943728] hover:text-white"
                >
                  {section.category}
                </a>
              );
            })}
          </nav>

          {/* FAQ Sections */}
          <div className="space-y-10">
            {faqData.map((section) => {
              const isStart = section.id === "start";
              const isVisible = visibleSections[section.id];
              const faqs =
                isStart && !showAllStart
                  ? section.faqs.slice(0, 5)
                  : section.faqs;

              return (
                <div
                  key={section.id}
                  id={section.id}
                  className={`scroll-mt-28 transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  <h2 className="text-2xl font-semibold text-[#943728] border-b pb-2 mb-4">
                    {section.category}
                  </h2>

                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const isOpen = openIndex[section.category] === index;
                      return (
                        <div key={index} className="border-b">
                          <button
                            className={`w-full flex justify-between items-center py-3 px-2 text-left active:scale-95 active:translate-y-[3px] transition-all duration-200 cursor-pointer hover:bg-gray-100 rounded-md ${
                              isOpen ? "bg-gray-100" : ""
                            }`}
                            onClick={() => toggle(section.category, index)}
                            aria-expanded={isOpen}
                          >
                            <span className="text-lg font-medium">
                              {faq.question}
                            </span>
                            <ChevronDownIcon
                              className={`w-5 h-5 transform transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              isOpen
                                ? "max-h-40 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="pt-2 pb-4 pr-6 px-2 text-gray-700">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Scroll Cue */}
                  {section.id === "start" && !hideStartCue && !showAllStart && (
                    <div className="w-full flex justify-center z-0 mt-6 -mb-12 relative">
                      <button
                        aria-label="Scroll to Events section"
                        className="text-black text-3xl opacity-70 hover:opacity-100 transition cursor-pointer animate-bounce active:scale-95 active:translate-y-[2px]"
                        onClick={() => {
                          const target = document.getElementById("events");
                          if (target) {
                            const yOffset =
                              window.innerWidth < 768 ? -140 : -140;
                            const y = target.offsetTop + yOffset;
                            window.scrollTo({ top: y, behavior: "smooth" });
                            setHideStartCue(true);
                            setShowAllStart(true);
                          }
                        }}
                      >
                        ↓
                      </button>
                    </div>
                  )}
                  {section.id === "events" && !hideEventsCue && (
                    <div className="w-full flex justify-center z-0 mt-6 -mb-12 relative">
                      <button
                        aria-label="Scroll to Dues section"
                        className="text-black text-3xl opacity-70 hover:opacity-100 transition cursor-pointer animate-bounce active:scale-95 active:translate-y-[2px]"
                        onClick={() => {
                          const target = document.getElementById("dues");
                          if (target) {
                            const yOffset =
                              window.innerWidth < 768 ? -140 : -140;
                            const y = target.offsetTop + yOffset;
                            window.scrollTo({ top: y, behavior: "smooth" });
                            setHideEventsCue(true);
                          }
                        }}
                      >
                        ↓
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
