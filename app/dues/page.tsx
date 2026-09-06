import type { Metadata } from "next";
import DuesPageClient from "./DuesPageClient";

export const metadata: Metadata = {
  title: "Pay Dues | ASU Wake Devils",
  description:
    "Securely pay your ASU Wake Devils membership dues through our official payment portal.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DuesPage() {
  return <DuesPageClient />;
}
