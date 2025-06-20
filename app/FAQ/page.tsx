"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqData = [
  {
    id: "membership",
    category: "Membership",
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
            page and fill out the form and waiver. After signing, you’ll be
            redirected to a page for your free trial. If you want to become a
            member, head to our{" "}
            <Link
              href="/dues"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Dues
            </Link>{" "}
            page to choose and pay for your membership.
          </>
        ),
      },
      {
        question: "Do I need to be an ASU student to join?",
        answer:
          "You don’t have to be a full-time ASU student to join, but you must be affiliated with ASU (e.g. student, faculty, staff, or part of a sister college like MCC or SCC) and have access to ASU club insurance and liability policies.",
      },
      {
        question:
          "What’s the difference between general, social, and comp team memberships?",
        answer:
          "General members get access to all events and lake days. Social members can attend events but do not ride. Comp team members are selected to compete in collegiate tournaments and represent ASU nationally.",
      },
      {
        question: "Do I need wakeboarding experience to join?",
        answer:
          "Not at all! Many members are total beginners. We’ll teach you the basics and help you progress at your own pace.",
      },
      {
        question: "Can I come try it out before joining?",
        answer:
          "Yes! We offer one free trial lake day for new members. Reach out on Instagram to reserve a spot before attending.",
      },
    ],
  },
  {
    id: "events",
    category: "Events & Lake Days",
    faqs: [
      {
        question: "How do I stay updated on events?",
        answer:
          "We post announcements in our GroupMe and on Instagram. Official events are also listed on our Events page with a calendar view.",
      },
      {
        question: "How often do you have lake days?",
        answer:
          "We usually go out once a week during the semester, depending on weather and rider availability.",
      },
      {
        question: "Where do you usually ride?",
        answer:
          "Our most common spots are Canyon Lake and Bartlett Lake, both about an hour from Tempe.",
      },
      {
        question: "Is transportation provided to the lake?",
        answer:
          "Transportation is usually arranged through carpools. Riders often coordinate in the GroupMe to drive or get rides from other members.",
      },
      {
        question: "Are lake days free?",
        answer: (
          <>
            The first 5 rides are covered by your dues. After that, members chip
            in for gas. Learn more on the{" "}
            <Link
              href="/events"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Events
            </Link>{" "}
            page.
          </>
        ),
      },
      {
        question: "Do I need to bring my own gear?",
        answer:
          "Nope! The club provides boards, ropes, life vests, and more. But if you have your own gear, you’re welcome to use it.",
      },
      {
        question: "What should I bring to a lake day?",
        answer:
          "Bring a towel, sunscreen, water, snacks, a swimsuit, and a good attitude. Everything else is provided.",
      },
      {
        question: "Can I bring a friend to a ride?",
        answer:
          "Yes — non-members can attend one trial ride if approved in advance. Message us on Instagram to check availability.",
      },
    ],
  },
  {
    id: "dues",
    category: "Dues & Costs",
    faqs: [
      {
        question: "How much are dues?",
        answer:
          "Dues vary by membership type and semester. General is usually $100–$120, social is around $40, and comp team dues depend on travel costs. Exact prices are posted at the start of each semester.",
      },
      {
        question: "What do dues cover?",
        answer:
          "Dues cover gas for the boat and towing vehicles, equipment upkeep and replacement, insurance, safety gear, competition entry, and team events.",
      },
      {
        question: "How do I pay my dues?",
        answer: (
          <>
            After completing the waiver, you’ll be redirected to our payment
            portal. You can also find the link on the{" "}
            <Link
              href="/dues"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Dues
            </Link>{" "}
            page.
          </>
        ),
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
  const [hideCue, setHideCue] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);

    const handleHashScroll = () => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -140;
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1 }
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
            {faqData.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-2 rounded-md transition shadow-sm active:scale-95 active:translate-y-[3px] text-black hover:bg-[#943728] hover:text-white"
              >
                {section.category}
              </a>
            ))}
          </nav>

          {/* FAQ Sections */}
          <div className="space-y-10">
            {faqData.map((section, i) => {
              const isVisible = visibleSections[section.id];
              return (
                <div
                  key={i}
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
                    {section.faqs.map((faq, j) => {
                      const isOpen = openIndex[section.category] === j;
                      return (
                        <div key={j} className="border-b">
                          <button
                            className="w-full flex justify-between items-center py-3 text-left active:scale-95 active:translate-y-[3px] transition cursor-pointer"
                            onClick={() => toggle(section.category, j)}
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
                            <div className="pb-4 pr-6 text-gray-700">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Scroll Cue After Membership Section */}
                  {section.id === "membership" && !hideCue && (
                    <div className="w-full flex justify-center z-0 mt-2 -mb-12 relative">
                      <button
                        aria-label="Scroll to Events section"
                        className="text-black text-3xl opacity-70 hover:opacity-100 transition cursor-pointer active:scale-95 active:translate-y-[2px]"
                        onClick={() => {
                          const target = document.getElementById("events");
                          if (target) {
                            const yOffset =
                              window.innerWidth < 768 ? -120 : -120;
                            const y = target.offsetTop + yOffset;
                            window.scrollTo({ top: y, behavior: "smooth" });
                            setHideCue(true);
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
