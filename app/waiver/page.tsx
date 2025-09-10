"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WaiverPage() {
  const [name, setName] = useState("");
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const waiverRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const el = waiverRef.current;
      if (el && el.scrollTop + el.clientHeight >= el.scrollHeight - 20) {
        setScrolledToBottom(true);
      }
    };
    const el = waiverRef.current;
    if (el) el.addEventListener("scroll", handleScroll);
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async () => {
    if (!name || !scrolledToBottom) return;
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/consent-log", {
        method: "POST",
        body: JSON.stringify({
          name,
          timestamp: new Date().toISOString(),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      setSubmitted(true); // show inline confirmation
    } catch (e: any) {
      setError("Something went wrong submitting your waiver. Please try again.");
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  const goToJoinBottom = () => {
    router.push("/join#bottom");
  };

  return (
    <>
      <Head>
        <title>Waiver | ASU Wake Devils</title>
        <meta
          name="description"
          content="Review and agree to the waiver before submitting."
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow max-w-3xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-6">Read & Sign Waiver</h1>
          <p className="mb-4 text-gray-700 text-sm">
            Please scroll to the bottom to enable the agreement.
          </p>

          <div
            ref={waiverRef}
            className="h-64 overflow-y-scroll border border-gray-300 bg-gray-50 rounded-md p-4 text-left text-sm text-gray-700 mb-6 shadow-inner"
          >
            <p className="mb-4">
              I understand that participation in ASU Wake Devils events and
              activities involves inherent risks including, but not limited to:
              physical injury, drowning, collisions, weather-related hazards,
              equipment failure, and transportation accidents. I acknowledge
              that wakeboarding, boating, and travel are inherently dangerous
              activities and voluntarily assume all risks associated with
              participation.
            </p>

            <p className="mb-4">
              I certify that I am physically fit and have not been advised
              otherwise by a medical professional. I agree to comply with all
              safety rules, instructions from officers or event organizers, and
              applicable laws. Failure to do so may result in removal from club
              events without refund.
            </p>

            <p className="mb-4">
              I agree to release, indemnify, and hold harmless Arizona State
              University, ASU Wake Devils, its officers, volunteers, members,
              sponsors, and affiliates from any and all claims, demands,
              liabilities, losses, costs, and expenses (including
              attorney&apos;s fees) arising from or related to participation in
              club activities.
            </p>

            <p className="mb-4">
              I understand that ASU Wake Devils may take photographs or videos
              during events for promotional use. By participating, I grant the
              club permission to use my image or likeness in promotional
              materials, social media, or the club website without compensation.
            </p>

            <p className="mb-4">
              I understand this waiver is binding upon me, my heirs, assigns,
              and legal representatives. I confirm that I am at least 18 years
              old, or if under 18, that I have submitted written permission from
              a parent or guardian to participate.
            </p>

            <p>
              I have read, understood, and voluntarily agree to the terms of
              this waiver and release of liability. By typing my name below, I
              consent to the above terms and confirm my intent to be legally
              bound.
            </p>
          </div>

          {!submitted && (
            <>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Type your full name to agree"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>

              {error && (
                <div className="mb-4 text-sm text-red-600">{error}</div>
              )}

              <button
                onClick={handleSubmit}
                disabled={!scrolledToBottom || !name || submitting}
                className={`bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded border-b-4 border-yellow-500 shadow-md transition-all duration-300 cursor-pointer ${
                  !scrolledToBottom || !name || submitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-105 active:scale-95 active:translate-y-[3px]"
                }`}
              >
                {submitting ? "Submitting..." : "Submit Waiver"}
              </button>
            </>
          )}

          {submitted && (
            <div className="mt-6 mx-auto max-w-md text-left">
              <div className="rounded-xl border border-green-300 bg-green-50 p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-green-800 mb-1">
                  Waiver submitted successfully
                </h2>
                <p className="text-green-900 text-sm">
                  Thanks, <span className="font-medium">{name}</span>! Your
                  waiver has been recorded.
                </p>
                <button
                  onClick={goToJoinBottom}
                  className="mt-4 w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-lg transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  OK
                </button>
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}
