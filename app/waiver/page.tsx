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
  const [membershipType, setMembershipType] = useState("");
  const waiverRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const checkoutLinks: Record<string, string> = {
    general: "https://checkout.page/s/SsbG5xcSyeLIK",
    social: "https://checkout.page/s/wj7FxtKwjQSzo",
    comp: "https://checkout.page/s/n4kj89Do4v5aF",
  };

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
    if (!name || !scrolledToBottom || !membershipType) return;
    setSubmitting(true);

    await fetch("/api/consent-log", {
      method: "POST",
      body: JSON.stringify({
        name,
        membershipType,
        timestamp: new Date().toISOString(),
      }),
      headers: { "Content-Type": "application/json" },
    });

    router.push(checkoutLinks[membershipType]);
  };

  return (
    <>
      <Head>
        <title>Waiver | ASU Wake Devils</title>
        <meta
          name="description"
          content="Review and agree to the waiver before paying dues."
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow max-w-3xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-6">Read & Sign Waiver</h1>
          <p className="mb-4 text-gray-700 text-sm">
            Please scroll to the bottom to enable the agreement.
            <br />
            Note: These prices are tentative and will not be updated until the
            beginning of the semester.
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

          <div className="mb-4">
            <input
              type="text"
              placeholder="Type your full name to agree"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className="mb-6">
            <select
              value={membershipType}
              onChange={(e) => setMembershipType(e.target.value)}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select membership type</option>
              <option value="general">General Membership</option>
              <option value="social">Social Membership</option>
              <option value="comp">Comp Team Membership</option>
            </select>
          </div>

          <button
            onClick={handleSubmit}
            disabled={
              !scrolledToBottom || !name || !membershipType || submitting
            }
            className={`bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded border-b-4 border-yellow-500 shadow-md transition-all duration-300 cursor-pointer ${
              !scrolledToBottom || !name || !membershipType
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-105 active:scale-95 active:translate-y-[3px]"
            }`}
          >
            {submitting ? "Submitting..." : "Agree and Continue to Payment"}
          </button>
        </main>
        <Footer />
      </div>
    </>
  );
}
