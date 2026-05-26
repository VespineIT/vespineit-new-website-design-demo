import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <PageHeader
      eyebrow="Legal"
      title="Terms policy"
      intro="Placeholder terms content — replace with your finalized legal copy before launch."
    />
  );
}
